import React, { useState } from "react";
import RouterPage from "@/router";
import { ConfigProvider } from "antd";
import enMessages from "antd/locale/en_US";
import zhMessages from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import { useSelector } from "react-redux";
import packageName from "/package";

function App() {
  const { themeObj, themeType } = useSelector((state: any) => state.theme);
  // const messages = {
  //   "zh-CN": zhMessages,
  //   "en-US": enMessages,
  // };
  // const [locale, setLocale] = useState("en-US"); // 初始语言设置为英文

  function message() {
    const notif = new Notification(`${packageName.name}`, {
      body: `你好呀,欢迎观摩${packageName.name}`,
      icon: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
      requireInteraction: true,
      image:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    });

    notif.onclick = () => {
      console.log("点击了通知");
      window.focus(); //打开浏览器或者聚焦页面
    };

    // notif.onclose = () => {
    //   console.log("关闭了通知");
    // };

    // notif.onerror = () => {
    //   console.log("通知出错");
    // };

    // notif.onshow = () => {
    //   console.log("显示了通知");
    // };
  }

  async function setMessage() {
    if (Notification.permission !== "denied") {
      const res = await Notification.requestPermission();
      if (res === "granted") message();
    } else message();
  }
  // setMessage();
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
