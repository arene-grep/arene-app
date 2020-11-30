# arene-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Comment installer Vue.js ?
Il faut tout simplement taper la commande :
```
npm install vue
```
Evidémment, il faut avoir installé NPM. Ce guide explique comment : https://www.npmjs.com/get-npm

### Comment faire fonctionner Vue.js ?
Il suffit d'éxecuter :
```
npm run serve
```
Il ne faut pas oublier de lancer le backend pour pouvoir utiliser l'API

Le port qui va s'ouvrir est souvent http://localhost:8080/ mais s'il est occupé, il va en ouvrir un autre genre 8001

### Organisation du code
Les vues sont dans le dossier "views". Ces vues utilisent des composants qui sont dans le dossier "components"

Dans le dossier "router" on trouve le fichier routes.js. Ce fichier permet d'accéder à des vues à partir de paths définis

