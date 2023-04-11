import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RW-API_Code",
  description: "Easy Code",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

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
    ]
  }
})
