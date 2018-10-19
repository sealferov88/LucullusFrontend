<template>
  <div class="articleCategoryPage">
    <header-component></header-component>
    <articleShortView-component :key="article.title" v-for="article in articles" v-bind:value="article"></articleShortView-component>
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
      ]
    }
  },
  created () {
    axios.get('http://localhost:4000/api/query/article/author/' + this.$route.params.author, {
      withCredentials: true
    })
      .then(response => {
        this.articles = response.data
        console.log(this.articles)
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
  }
}
</script>

<style scoped>
</style>
