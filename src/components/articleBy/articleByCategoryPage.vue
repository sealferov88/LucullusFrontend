<template>
  <div class="articleCategoryPage">
    <header-component></header-component>
    <ul>
      <li v-for="article in articles" :key="article.title">
        <articleShortView-component v-bind:value="article"></articleShortView-component>
      </li>
    </ul>
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
      articles: []
    }
  },
  created () {
    console.log(this.$route.params.category)
    axios.get('http://localhost:4000/api/query/article/category/' + this.$route.params.category)
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
  }
}
</script>

<style scoped>
  li {
    display:inline;
    font-family: 'Istok Web', sans-serif;
  }
</style>
