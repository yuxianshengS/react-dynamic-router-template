export const dynamicRouter = [
  {
    path: "/",
    redirect: "home",
    root: "PersLayout",
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          name: "首页",
          icon: "icon-home",
          blank: true,
        },
      },
      {
        path: "/contentManagement",
        name: "contentManagement",
        meta: {
          name: "内容管理",
          icon: "icon-money-exchange-rate",
        },
        children: [
          {
            path: "/contentManagement/housingManagement",
            name: "housingManagement",
            meta: {
              name: "房源管理",
              blank: true,
            },
          },
          {
            path: "/contentManagement/pictureMangement",
            name: "pictureMangement",
            meta: {
              name: "图库管理",
              blank: true,
            },
          },
          {
            path: "/contentManagement/orderManagement",
            name: "orderManagement",
            meta: {
              name: "订单管理",
              blank: true,
            },
          },
        ],
      },
      {
        path: "/pushMessage",
        name: "pushMessage",
        meta: {
          name: "消息推送",
          icon: "icon-message-comments",
        },
        children: [
          {
            path: "/pushMessage/userAnalysis",
            name: "userAnalysis",
            meta: {
              name: "用户分析",
              blank: true,
            },
          },
          {
            path: "/pushMessage/userMessage",
            name: "userMessage",
            meta: {
              name: "用户留言",
              blank: true,
            },
          },
          {
            path: "/pushMessage/replySetting",
            name: "replySetting",
            meta: {
              name: "回复设置",
              blank: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: "/",
    redirect: "page1",
    root: "customLayout",
    children: [
      {
        path: "/page1",
        name: "page1",
        meta: {
          name: "首页",
          icon: "icon-home",
          blank: true,
        },
      },
      {
        path: "/page2",
        name: "page2",
        meta: {
          name: "页面2",
          icon: "icon-home",
          blank: true,
        },
      },
      {
        path: "/page3",
        name: "page3",
        meta: {
          name: "页面3",
          icon: "icon-home",
          blank: true,
        },
      },
    ],
  },
];
