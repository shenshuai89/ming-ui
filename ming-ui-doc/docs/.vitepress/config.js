module.exports = {
  title: "MingUI",
  themeConfig: {
    lastUpdated: "最近更新时间",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "目录",
        link: "/guide/",
        items: [
          { text: "上手使用", link: "/guide/" },
          { text: "组件开发", link: "/create/index" },
        ],
      },
      { text: "github", link: "https://github.com/shenshuai89/ming-ui" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "mingUI使用指南",
          children: [
            { text: "介绍", link: "/guide/" },
            {
              text: "基础组件",
              children: [
                { text: "button按钮", link: "/guide/baseComponents/button" },
                { text: "icon图标", link: "/guide/baseComponents/icon" },
                { text: "layout布局", link: "/guide/baseComponents/layout" },
              ],
            },
            {
              text: "form表单组件",
              children: [
                {
                  text: "checkbox多选框",
                  link: "/guide/formComponents/checkbox",
                },
                { text: "switch开关", link: "/guide/formComponents/switch" },
                {
                  text: "transfer穿梭框",
                  link: "/guide/formComponents/transfer",
                },
              ],
            },
            {
              text: "Data数据展示组件",
              children: [
                { text: "Avatar头像", link: "/guide/dataComponents/avatar" },
              ],
            },
            {
              text: "feedback反馈组件",
              children: [
                {
                  text: "message消息提示",
                  link: "/guide/feedbackComponents/message",
                },
              ],
            },
          ],
        },
        {
          text: "共创美好明天",
          children: [{ text: "一起造轮子", link: "/create/" }],
        },
      ],
      "/create/": [
        {
          text: "组件开发",
          children: [
            {
              text: "一起造轮子",
              link: "/create/",
            },
            {
              text: "搭建项目环境",
              link: "/create/initpro",
            },
          ],
        },
        {
          text: "MingUI使用",
          children: [{ text: "快速上手使用", link: "/guide/" }],
        },
      ],
    },
  },
};
