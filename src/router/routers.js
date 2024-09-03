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
      // {
      //   path: "/details",
      //   name: "details",
      //   meta: {
      //     name: "详情",
      //     icon: "icon-guide",
      //     blank: true,
      //   },
      // },
      // {
      //   path: "/uadn-alarm-rule-s",
      //   name: "uadn-alarm-rule-s",
      //   meta: {
      //     name: "统一应用告警规则配置",
      //     icon: "icon-logistics-land-transport",
      //     blank: true,
      //   },
      // },
      // {
      //   path: "/batching-views",
      //   name: "batching-views",
      //   meta: {
      //     name: "批处理",
      //     icon: "icon-money-exchange-rate",
      //   },
      //   children: [
      //     {
      //       path: "/batching-views/batching-home",
      //       name: "batching-home",
      //       meta: {
      //         name: "业务系统首页",
      //         icon: "icon-money-finance-buyer",
      //         blank: true,
      //       },
      //     },
      //     {
      //       path: "/batching-views/job-details",
      //       name: "job-details",
      //       meta: {
      //         name: "作业详情",
      //         icon: "",
      //         blank: true,
      //       },
      //     },
      //     {
      //       path: "/batching-views/alarm-list",
      //       name: "alarm-list",
      //       meta: {
      //         name: "业务系统首页",
      //         blank: true,
      //       },
      //     },
      //   ],
      // },
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
