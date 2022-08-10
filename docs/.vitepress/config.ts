import {DefaultTheme, defineConfig} from "vitepress"

const defaultSidebar: DefaultTheme.Sidebar = [
  {
    text: "Introduction",
    items: [
      {
        text: 'what is vue-use-form',
        link: '../what-is'
      },
      {
        text: "Getting Started",
        link: "../getting-started",
      },
    ],
  },
]

const nav = [
  ...defaultSidebar,
]

export default defineConfig({
  title: "vue-use-form",
  description: "composition api form validator for vue",
  // appearance: false,
  lastUpdated: true,
  themeConfig: {
    sidebar: {
      "/": defaultSidebar,
    },
    nav,
    socialLinks: [
      { icon: "github", link: "https://github.com/vue-use-form/vue-use-form" },
    ],
    footer: {
      copyright: "Copyright © 2022-present webfansplz",
    },
    editLink: {
      pattern: "https://github.com/vue-use-form/vue-use-form",
      text: "Edit this page on Gitlab",
    },
    lastUpdatedText: "Last Updated",
    localeLinks: {
      text: "English",
      items: [
        { text: "简体中文", link: "https://netlify.app" },
      ],
    },
  },
})
