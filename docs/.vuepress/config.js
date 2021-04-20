// config.js

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
          '/buttons/'
        ]
      }
    ]
  }
}