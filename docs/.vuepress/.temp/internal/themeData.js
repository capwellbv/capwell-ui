export const themeData = {
  "repoLabel": "Contribute!",
  "repo": "",
  "docsDir": "docs",
  "editLinks": true,
  "docsBranch": "dev",
  "editLinkText": "Help us improve this page!",
  "search": false,
  "locales": {
    "/": {
      "label": "English",
      "selectText": "Languages",
      "lastUpdated": "Last Updated",
      "serviceWorker": {
        "updatePopup": {
          "message": "New content is available.",
          "buttonText": "Refresh"
        }
      },
      "nav": [
        {
          "text": "Getting Started",
          "link": "/guide"
        },
        {
          "text": "Components",
          "link": "/components/"
        },
        {
          "text": "GitHub",
          "link": ""
        }
      ],
      "sidebar": {
        "/components/": [
          {
            "title": "Components",
            "collapsable": false,
            "children": [
              "Button"
            ]
          }
        ]
      },
      "selectLanguageName": "English",
      "danger": "WARNING"
    }
  },
  "navbar": [],
  "logo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "editLink": true,
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
