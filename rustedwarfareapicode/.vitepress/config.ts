import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RW-API_Code",
  description: "Easy Code",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '单位API', link: '/src/Unit/core' },
      { text: '地图API', link: '/src/Map/teada' },
      { text: '调试API', link: '/src/Debug/test' },
      { text: '开发指南', link: '/DEV' },
    ],

    docFooter: {
      prev: "上一篇文章",
      next: "下一篇文章",
    },

    sidebar: [
      {
        text: 'RW-API-Code',
        items: [
          { text: '主页-Home', link: '/markdown-examples' },
          { text: '核心-CORE', link: '/src/Unit/core' },
          { text: '可建造-CORE', link: '/src/Unit/canbuild' },
          { text: '逻辑组-LogicBoolean', link: '/src/Unit/loginboolean' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: "Rosy-Code Ling Web Stuido",
      copyright: "Copyright © 2023-RW-API-Code",
    },
  }
})
