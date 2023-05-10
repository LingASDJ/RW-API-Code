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
      { text: '编写指南', link: '/api-dev' },
    ],

    docFooter: {
      prev: "上一篇文章",
      next: "下一篇文章",
    },

    sidebar: [
      {
        text: 'RW-API-Code',
        items: [
          { text: '主页-Home', link: '/' },
          { text: '-------------------------', link: '' },
          { text: '[API-单位组-Unit]', link: '' },
          { text: '核心-CORE', link: '/src/Unit/core' },
          { text: '可建造-CANBUILD', link: '/src/Unit/canbuild' },
          { text: '图像-GRAPHICS', link: '/src/Unit/graphics' },
          { text: '逻辑-LOGIC', link: '/src/Unit/loginboolean' },
          { text: '-------------------------', link: '' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LingASDJ/RW-API-Code/' }
    ],

    footer: {
      message: "Rosy-Code Ling Web Stuido",
      copyright: "Copyright © 2023-RW-API-Code",
    },
  }
})
