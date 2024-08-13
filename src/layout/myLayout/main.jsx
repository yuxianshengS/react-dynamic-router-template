import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { MenuPage, HeaderPage, ContentPage } from "../component";
import styles from "./main.module.less";

import { useSelector } from "react-redux";
function LayoutPage() {
  const { Sider, Header } = Layout;
  const { themeType } = useSelector((state) => state.theme);
  const collapsed = useSelector((state) => state.collapsed.value);
  return (
    <Layout className={styles.root}>
      <Sider
        style={{
          backgroundColor: themeType === "dark" ? "var(--CommColor)" : "",
        }}
        trigger={null}
        collapsible
        collapsedWidth="50"
        collapsed={collapsed}
      >
        <MenuPage />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            height: 50,
            backgroundColor: themeType === "dark" ? "var(--CommColor)" : "",
          }}
        >
          <HeaderPage />
        </Header>
        <ContentPage>
          <Outlet />
        </ContentPage>
      </Layout>
    </Layout>
  );
}

export default LayoutPage;
