import React, { Suspense } from "react";
import { Layout } from "antd";
import styles from "./main.module.less";
import { Outlet } from "react-router-dom";

import { LeftSider, Header, BreadcrumbComponent } from "./component";
function LayoutPage() {
  return (
    <Layout className={styles.root}>
      <LeftSider />
      <Header />
      <Layout className="main_content">
        <BreadcrumbComponent />
        <Suspense>
          <Outlet />
        </Suspense>
      </Layout>
    </Layout>
  );
}

export default LayoutPage;
