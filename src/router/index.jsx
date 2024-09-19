import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Spin } from "antd";
import NotFound from "@/views/404";
import Login from "@/views/login";
import { formatterRouters } from "@/utils/formatterRouter.jsx";

import { AuthProvider } from "./AuthProvider";
import ProtectedRoute from "./ProtectedRoute";

function generateRoutes(routes) {
  return routes?.map((item, index) => {
    const Component = React.lazy(item?.component);
    if (item?.children && item?.redirect) {
      return (
        <Route
          key={item.path}
          path={item.path}
          element={<ProtectedRoute element={<Component />} />}
        >
          {generateRoutes(item.children)}
          <Route path={item.path} element={<Navigate to={item.redirect} />} />
        </Route>
      );
    }
    return (
      <Route
        key={item.path}
        path={item?.path}
        element={<ProtectedRoute element={<Component />} />}
      />
    );
  });
}

function flattenRoutes(routes) {
  routes.forEach((item) => {
    let flatRoutes = [];
    function traverse(data) {
      data.forEach((items) => {
        if (items.children && items.children.length > 0) {
          traverse(items.children);
        } else flatRoutes.push(items);
      });
    }
    traverse(item.children);
    item.children = flatRoutes;
  });

  return routes;
}

function RouterPage() {
  let routers = flattenRoutes(formatterRouters());
  routers.forEach((item) => {
    item.children = item.children.map((item) => {
      if (!item.component)
        item.component = () => import("@/views/404/lack.jsx");
      return item;
    });
  });
  const Loading = (
    <Spin tip="Loading" size="large" fullscreen>
      Loading...
    </Spin>
  );
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={Loading}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            {generateRoutes(routers)}
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default RouterPage;
