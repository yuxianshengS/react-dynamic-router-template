import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./index.module.less";
import { formatterRouters } from "@/utils/formatterRouter.jsx";
import LOGO from "./logo.svg";
export default function LeftSiderComponent() {
  const $router = useNavigate();
  const location = useLocation();
  const list = formatterRouters()[0].children;

  function handleRouter(e) {
    $router(e.key);
  }

  return (
    <Layout.Sider className={styles.root} width="250" trigger={null}>
      <div className="main_logo">
        <img className="w-all h-all" src={LOGO} alt="" />
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={list}
        style={{ borderRight: 0 }}
        onSelect={handleRouter}
      />
    </Layout.Sider>
  );
}
