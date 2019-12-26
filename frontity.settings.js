const settings = {
  "name": "reactpress",
  "state": {
    "frontity": {
      "url": "https://reactpress.es/",
      "title": "ReactPress",
      "description": "Tutoriales para aprender Javascript \"deeply\" con React, Frontity y WordPress"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Inicio",
              "/"
            ],
            [
              "SumaPress",
              "https://sumapress.com/"
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
          "api": "https://reactpress.pablocianes.com/wp-json",
          "categoryBase": "categoria",
          "tagBase" : "etiqueta"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
