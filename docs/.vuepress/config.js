// config.js
const path = require("path");
module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'CAPWELL UI',
      description: 'Documentation site for Capwell UI library plugin'
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'https://google.com' }
    ],
    sidebar: [
      {
        title: 'Get Started',   // required   // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/installation/'
        ]
      },
      {
        title: 'Components',   // required   // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/buttons/',
          '/typography/',
          '/modals/',
          '/card/',
          '/box/',
          '/input/',
          '/select/',
          '/multiSelect/',
          '/dropdown/',
          '/link/',
          '/searchDropdown/',
          '/multiSearchDropdown/',
          '/radio/',
          '/dialog/',
          '/navbar/',
          '/footer/',
          '/slider/',
          '/tabs/',
          '/textarea/',
          '/header/',
          '/collapse/',
          '/accordian/',
          '/carousel/',
          '/cookieConsent/'
        ]
      }
    ]
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' }],
  ],
}