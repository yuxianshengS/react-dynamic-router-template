import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { formatterRouters } from "@/utils/formatterRouter.jsx";
import { useSelector } from "react-redux";
import styles from "./main.module.less";
export default function MenuPage() {
  const location = useLocation();
  const $router = useNavigate();
  const list = formatterRouters()[1].children;

  function handleRouter(e) {
    $router(e.key);
  }

  return (
    <Menu
      className={styles.root}
      selectedKeys={[location.pathname]}
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={list}
      style={{ flex: 1, minWidth: 0 }}
      onSelect={handleRouter}
    />
  );
}
