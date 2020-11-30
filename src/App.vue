<template>
  <div id="app">
    <div id="nav">
      <!-- C'est le menu qui s'affiche en haut de chaque page qui permet de naviguer entre les pages -->
      <router-link to="/">Home</router-link> |
      <router-link to="/addProduct">Add a product</router-link> |
      <router-link to="/products">Products</router-link>
    </div>
    <!-- Ce qui permet de prendre en compte les routes définis dans le dossier router -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
