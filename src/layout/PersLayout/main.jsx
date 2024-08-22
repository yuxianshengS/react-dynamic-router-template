import React, { Suspense } from "react";
import { Layout, Spin } from "antd";
import styles from "./main.module.less";
import { Outlet } from "react-router-dom";

import { LeftSider, Header } from "./component";
function LayoutPage() {
  return (
    <Layout className={styles.root}>
      <LeftSider />
      <Header />
      <Layout className="main_content">
        <Suspense>
          <Outlet />
        </Suspense>
      </Layout>
    </Layout>
  );
}

export default LayoutPage;
