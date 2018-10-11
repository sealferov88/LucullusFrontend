<template>
  <div class="homePage">
    <header-component></header-component>
    <articleShortView-component v-for="article in articles" v-bind:value="article"></articleShortView-component>
  </div>
</template>

<script>
import header from '@/components/Header.vue'
import articleShortView from '@/components/article/articleShortView.vue'
import axios from 'axios'

export default {
  name: 'HomePage',
  components: {
      'header-component': header,
      'articleShortView-component': articleShortView,
  },
  articles: {

  },
  // created: function(){
  // }
}
</script>

<style scope>
</style>
