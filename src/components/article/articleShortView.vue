<template>
<div class="articleShortViewContainer">
  <router-link :to="{name: 'article', params: {title: value.title}}" class="container">
    <h1 class="title">{{value.title}}</h1>
    <router-link :to="{name: 'articleTag',params: {tag: tag}}" class="tags" v-for="tag in value.tags">{{tag}}</router-link>
    <p class="content">{{value.content}}</p>
    <div class="lineArticle">
      <span class="author">{{value.author}} in </span>
      <span class="category">{{value.category}} with </span>
      <span class="likes">{{value.likes.length}}</span>
    </div>
  </router-link>
</div>
</template>

<script>

export default {
  props: ['value']
}
</script>

<style scoped>
.articleShortViewContainer{
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
  display: inline-flex;
  line-height: 1;
  align-items: center;
  background-color: #676973;
  color: #FFFFFF;
  border-color: #676973;
  border-radius: 4px;
  padding: 4px;
  margin-right: 8px;
  margin-bottom: 4px;
  font-size: 16px;
}
</style>
