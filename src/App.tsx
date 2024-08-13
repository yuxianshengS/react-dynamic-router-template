import React, { useState } from "react";
import Router from "@/router";
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
      // locale={messages[locale]}
      theme={{
        token: themeObj[themeType],
        components: {
          //   Menu: {
          //     itemHoverBg: "rgb(173, 198, 255)",
          //     itemSelectedBg: "rgb(89, 126, 247)",
          //     itemHoverColor: "rgba(0, 0, 0, 0.8)",
          //     itemSelectedColor: "rgb(255, 255, 255)",
          //     itemColor: "rgb(255, 255, 255)",
          //     itemBg: "rgb(16, 35, 158)",
          //     subMenuItemBg: "rgb(6, 17, 120)",
          //     itemActiveBg: "rgba(255, 255, 255, 0)",
          //     itemBorderRadius: 16,
          //     subMenuItemBorderRadius: 16,
          //     groupTitleColor: "rgba(255, 255, 255, 0.62)",
          //     darkItemBg: "rgb(114, 46, 209)",
          //     algorithm: true,
          //   },
          Layout: {
            // bodyBg: "#fff",
            algorithm: true,
          },
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
