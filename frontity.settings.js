const settings = {
  "name": "reactpress",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "ReactPress",
      "description": "Blog para aprender Javascript \"deeply\" con WordPress"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://reactpress.pablocianes.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
