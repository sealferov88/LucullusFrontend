<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import EditorPage from './components/editor/EditorPage.vue'
import LoginPage from './components/login/LoginPage.vue'
import RegisterPage from './components/registration/RegisterPage.vue'
import home from './components/home/HomePage.vue'

export default {
  name: 'App',
  components: {
    'editorPage-component': EditorPage,
    'LoginPage-component': LoginPage,
    'RegisterPage-component': RegisterPage,
    'HomePage-component': home
  }
}
</script>

<style>

#app {
  @import url('https://fontstorage.com/ru/font/montserrat');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  display:block;
  margin: 0;
  position:relative;
  height: 100vh;
}
</style>
