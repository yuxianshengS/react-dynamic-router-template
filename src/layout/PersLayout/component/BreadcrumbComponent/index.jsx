import React, { useEffect } from "react";

import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BreadcrumbComponent() {
  const Routers = useSelector((state) => state.useRouters.value);
  const $router = useNavigate();
  const location = useLocation();
  let BreadcrumbList = [];

  // 查找匹配路径的完整父级路径
  function findFullPathAndRoute(routes, targetPath) {
    const result = [];
    findFullPathAndRouteHelper(routes, targetPath, result);
    return result;
  }

  function findFullPathAndRouteHelper(routes, targetPath, result) {
    if (targetPath === "") return true;

    for (const route of routes) {
      if (route.path === targetPath) {
        result.unshift(route);
        return true;
      }
      if (route.children) {
        if (findFullPathAndRouteHelper(route.children, targetPath, result)) {
          // 如果递归调用在子路由中找到路径，保留当前的父路由
          result.unshift(route);
          return true;
        }
      }
    }

    return false;
  }

  const pathToFind = location.pathname;
  const fullPathAndRoute = findFullPathAndRoute(Routers, pathToFind);
  BreadcrumbList = fullPathAndRoute.map((item) => {
    if (item.path === "/")
      return { title: <HomeOutlined onClick={() => handleHome(item.path)} /> };
    else return { title: item.meta.name };
  });

  function handleHome(e) {
    $router(e);
  }
  return <Breadcrumb items={BreadcrumbList} />;
}
