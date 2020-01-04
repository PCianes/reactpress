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
              "Básico",
              "/javascript/basico"
            ],
            [
              "Avanzado",
              "/javascript/avanzado"
            ],
            [
              "React",
              "/javascript/react"
            ],
            [
              "WordPress",
              "/javascript/wordpress"
            ],
            [
              "Frontity",
              "/javascript/frontity"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://reactpress.pablocianes.com/wp-json",
          "categoryBase": "javascript",
          "tagBase" : "categoria"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
