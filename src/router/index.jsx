import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Spin } from "antd";
import NotFound from "@/views/404";
import { formatterRouters } from "@/utils/formatterRouter.jsx";

function generateRoutes(routes) {
  return routes?.map((item, index) => {
    const Component = React.lazy(item?.component);
    if (item?.children) {
      return (
        <Route key={index} path={item?.path} element={<Component />}>
          {generateRoutes(item?.children)}
        </Route>
      );
    }
    return <Route key={index} path={item?.path} element={<Component />} />;
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
    <Router>
      <Suspense fallback={Loading}>
        <Routes>
          {generateRoutes(routers)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default RouterPage;
