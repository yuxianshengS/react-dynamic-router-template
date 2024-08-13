import { Layout, theme } from "antd";
import styles from "./main.module.less";

function ContentPage({ children }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout.Content
      className={styles.root}
      style={{
        overflow: "initial",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      {children}
    </Layout.Content>
  );
}

export default ContentPage;
