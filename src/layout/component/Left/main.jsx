import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { formatterRouters } from "@/utils/formatterRouter.jsx";
import styles from "./main.module.less";

function DynamicMenu() {
  const $router = useNavigate();
  const location = useLocation();
  const list = formatterRouters()[0].children;

  function handleRouter(e) {
    $router(e.key);
  }

  return (
    <div className={styles.root}>
      <div className="main_logo">dynamic-router-template</div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={list}
        style={{ borderRight: 0 }}
        onSelect={handleRouter}
      />
    </div>
  );
}

export default DynamicMenu;
