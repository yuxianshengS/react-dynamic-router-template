import React, { useState } from "react";
import RouterPage from "@/router";
import { ConfigProvider, theme } from "antd";
import enMessages from "antd/locale/en_US";
import zhMessages from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import { useSelector } from "react-redux";
function App() {
  const { themeObj, themeType } = useSelector((state: any) => state.theme);
  // const messages = {
  //   "zh-CN": zhMessages,
  //   "en-US": enMessages,
  // };
  // const [locale, setLocale] = useState("en-US"); // 初始语言设置为英文

  return (
    <ConfigProvider
      theme={{
        token: themeObj[themeType],
        components: {
          Layout: {
            algorithm: true,
          },
        },
      }}
    >
      <RouterPage />
    </ConfigProvider>
  );
}

export default App;
