import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GEF | Galactus Engine Forum",
  description: "forum containing the development of several devices",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Donate ( Saweria )',
        items: [
          { text: 'Kazusakiii27', link: '/' },
          { text: 'Massatrio16', link: '/' },
          { text: 'Miraclevprjkt / Fat', link: '/'},
      ] 
     }
    ],

    sidebar: [
      {
        text: 'Custom Recovery Download Page By Models',
        items: [
          { text: 'Itel Unisoc Series', link: '/download/cusrec/cusrec_itelunisocseries' },
          { text: 'Infinix MTK Series', link: '/download/cusrec/cusrec_infinixmtkseries' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GEF-Development' },
      { icon: 'telegram', link: 'https://t.me/galactusforum_engdev' }, 
   ]
  }
})
