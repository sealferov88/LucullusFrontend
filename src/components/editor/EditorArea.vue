<template>
  <form class="article">
    <div class="ArticleContainer">
      <div class='Container'>
        <textarea class="inputField textArea" v-model="title" rows="1" cols="100%" v-autosize="" type="text"
                  placeholder="Article name"></textarea>
      </div>
      <div class='Container'>
        <select class='selectCategory inputField testArea' v-model="chosenCategory" placeholder="Choose your category">
          <option v-for="category in categories" v-bind:value="category">{{category.name}}</option>
        </select>
      </div>
      <div class='Container'>
        <textarea class="inputField textArea" rows="25" cols="100%" v-model="content" v-autosize=""
                  placeholder="Type here your beatiful article:3"></textarea>
      </div>
      <div class="Container">
        <tags-component class="tagsInput" v-model="tags"></tags-component>
      </div>
      <div class="Container" value="Publish">
        <button type="button" class="buttonItself" v-on:click="publish" value="Publish">Publish</button>
      </div>
    </div>
    <v-dialog name="errorResponse"/>
  </form>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import tags from './Tags.vue'

export default {
  data () {
    return {
      d:10,
      tags: [],
      title: '',
      content: '',
      chosenCategory: '',
      categories: [
        {name: 'ARTS'},
        {name: 'INDUSTRY'},
        {name: 'TECH'},
        {name: 'LIFE'},
        {name: 'SOCIETY'}
      ]
    }
  },
  components: {
    'tags-component': tags
  },
  methods: {
    publish (e) {
      console.log(this.chosenCategory)
      axios.post('http://localhost:4000/api/command/article', {
        title: this.title,
        author: Cookies.get('username'),
        category: this.chosenCategory.name,
        content: this.content,
        tags: this.tags
      }, {
        withCredentials: true
      })
        .then(response => {
          console.log(response)
          if (response.status === 201) {
            this.redirectToArticle()
          }
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
    },
    redirectToArticle () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .article {
    background-color: #2E323E;
    text-align: center;
  }

  .Container {
    margin-top: 4px;
  }

  .ArticleContainer {
  }

  .textArea {
    border: none;
    resize: none;
    font-size: 16px;
    size: 100%;
  }

  .buttonItself {
    background-color: #009EFF;
    color: #FFFFFF;
    border-color: #009EFF;
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

  .inputField {
    background-color: #2E323E;
    border-color: #676973;
    color: #FFFFFF;
    margin-top: 10px;
  }

  .inputField::placeholder {
    color: #676973
  }

  .buttonItself {
    margin: 10px;
  }
</style>
