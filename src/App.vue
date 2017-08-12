<style>
body {
  margin: 0;
  /*font-size: 10px !important;*/
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F9FBFE;
}
</style>

<template>
  <div id="app">
    <!-- <header>
      <span>Vue.js PWA</span>
    </header> -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
require('kube/src/kube.scss')

export default {
  name: 'app'
}
</script>
