<template>
  <div class="articleCategoryPage">
    <header-component></header-component>
    <h1>Recent article by tag {{this.$route.params.tag}}</h1>
    <articleShortView-component v-for="article in articles" v-bind:value="article"></articleShortView-component>
    <h1>Top article by tag {{this.$route.params.tag}}</h1>
    <articleShortView-component v-for="articleTop in articlesTop" v-bind:value="articleTop"></articleShortView-component>
    <v-dialog name="errorResponse"/>
  </div>
</template>

<script>
import header from '@/components/Header.vue'
import articleShortView from '@/components/article/articleShortView.vue'
import axios from 'axios'

export default {
  components: {
    'header-component': header,
    'articleShortView-component': articleShortView
  },
  data () {
    return {
      articles: [
        {title: '', category: '', author: '', tags: []}

      ],
      articlesTop: [
        {title: '', category: '', author: '', tags: []}
      ]
    }
  },
  created () {
    axios.get('http://localhost:4000/api/query/article/tag/' + this.$route.params.tag, {
      withCredentials: true
    })
      .then(response => {
        this.articles = response.data
      })
      .catch(error =>{
        this.$modal.show('dialog', {
          title: 'Alert',
          text: 'There is nothing here',
          buttons: [
            {
              title: 'Close'
            }
         ]
        })
      })
    axios.get('http://localhost:4000/api/query/article/tag/' + this.$route.params.tag + '/top', {
      withCredentials: true
    })
      .then(response => {
        this.articlesTop = response.data
      })
  }
}
</script>

<style scoped>
h1{
    color: #b2b2b2;
    margin-left: 30%;
    margin-right: 30%;
}
</style>
