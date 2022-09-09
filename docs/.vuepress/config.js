module.exports = {
  title: "我的博客",
  description: "内容",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  // 部署 (和仓库名相同)
  base: "/interview/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "codeOne 的博客",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/726107228492253" },
          { text: "Github", link: "https://github.com/gemini-hjl" },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 是否折叠
        children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "基础篇",
        path: "/handbook/Es6新语法",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/handbook/Es6新语法" },
          { title: "第二篇", path: "/handbook/2" },
        ],
      },
    ],
  },
};
