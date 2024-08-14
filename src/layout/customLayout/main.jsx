import React from "react";
import { Layout, Breadcrumb } from "antd";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./main.module.less";
import { DayNightSwitch, ModeSwitch } from "@/components";
import { AvatarOperation } from "../component";
import { MenuPage } from "./component";
function LayoutPage() {
  const { Header, Content } = Layout;

  const { themeType } = useSelector((state) => state.theme);

  return (
    <Layout className={styles.root}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: themeType === "dark" ? "var(--CommColor)" : "",
        }}
      >
        <div className="main_logo">dynamic-router-template</div>

        <div
          style={{
            height: "100%",
            flex: 1,
            backgroundColor: themeType === "dark" ? "var(--CommColor)" : "",
          }}
        >
          <MenuPage />
        </div>
        <ModeSwitch />
        <DayNightSwitch status={themeType === "light" ? true : false} />
        <AvatarOperation />
      </Header>
      <Content style={{ padding: "0 20px", overflow: "hidden" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="main_content"
          style={{
            minHeight: 280,
            padding: 24,
            backgroundColor: themeType === "dark" ? "var(--CommColor)" : "",
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
}

export default LayoutPage;
