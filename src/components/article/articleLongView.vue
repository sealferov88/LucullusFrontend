<template>
  <div class="articlePage">
    <header-component></header-component>
    <div class="articleLongViewContainer">
      <div class="container">
        <h1 class="title">{{article.title}}</h1>
        <router-link :to="{name: 'articleTag',params: {tag: tag}}" class="tags" v-for="tag in article.tags">{{tag}}</router-link>
        <p class="content">{{article.content}}</p>
        <div class="lineArticle">
          <span class="author">{{article.author}} in </span>
          <span class="category">{{article.category}} with </span>
          <span class="likes">{{article.likes.length}} likes</span>
        </div>
      </div>
      <div class="Container">
        <button class="buttonLike"  v-on:click="like" value="Like">Like it</button>
      </div>
    </div>
    <v-dialog name="errorResponse"/>
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
    'articleShortView-component': articleShortView
  },
  data () {
    return {
      article: {
        title: '',
        category: '',
        author: '',
        tags: [],
        content: '',
        likes: ''}
    }
  },
  methods: {
    like () {
      axios.put('http://localhost:4000/api/command/article/like', {
        title: this.article.title,
        author: this.article.author
      }, {withCredentials: true})
        .then(response => {
          console.log(response.data[0].likes);
          location.reload(true);
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
  },
  created () {
    axios.get('http://localhost:4000/api/query/article/title/' + this.$route.params.title, {
      withCredentials: true
    })
      .then(response => {
        this.article = response.data[0]
      })
  }
}
</script>

<style scoped>
.articleLongViewContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30%;
  margin-right: 30%;
}
.container{
  margin-top: 40px;
}
.lineArticle{
  display: flex;
  flex-direction: row;
}
.title{
  margin: 0;
}
.content{
  margin: 3% 3% 3% 0%;
  font-size: 20px;
  word-wrap: break-word;
  line-height: 150%;
  white-space: pre-wrap;
}
.articleShortViewContainer a {
  border: 3px solid #b2b2b2; /* Белая рамка */
  border-radius: 10px; /* Радиус скругления */
	text-decoration: none;
}
.category{
  margin-left: 3px;
}
.likes{
  margin-left: 3px;
}
.container {
	list-style-position: inside;
	font: 14px 'Oswald', sans-serif;
	padding: 10px;
  color: #b2b2b2;
}
.tags {
  text-decoration: none;
  display: inline-flex;
  line-height: 1;
  align-items: center;
  background-color: #676973;
  color: #FFFFFF;
  border-color: #676973;
  border-radius: 4px;
  padding: 4px;
  margin-top: 10px;
  margin-right: 8px;
  margin-bottom: 4px;
  font-size: 16px;
}
.buttonLike{
  background-color: #676973;
  color: #FFFFFF;
  border-color: #676973;
  display: inline-flex;
  line-height: 1;
  align-items: center;
  border-radius: 4px;
  padding: 4px;
  margin-right: 8px;
  margin-bottom: 4px;
  border: none;
  font-size: 16px;
}
</style>
