<template>
  <div class="headerContainer">
    <div class="header">
      <logo-component class="logo"></logo-component>
      <div class="user">
        <div v-if="!this.login">
          <div class="link">
            <router-link to="/login" class="textBlock">Login</router-link>
          </div>
          <div class="link">
            <router-link to="/register" class="textBlock">Register</router-link>
          </div>
        </div>
        <div v-else class="linkToUser">
          <div class="userMenu">
            <router-link :to="{name: 'yourArticles',params: {author: this.username}}" class="linkToUser">
              Your article
            </router-link>
          </div>
          <div class="userMenu">
            <router-link :to="'/article/new'" class="linkToUser">
              Create article
            </router-link>
          </div>
          <div class="exit userMenu" v-on:click="logout">
            Exit
          </div>
        </div>
      </div>
    </div>
    <nav>
      <ul class="menuCategory">
        <li v-for="category in categories" :key="category.name" v-bind:value="category">
          <router-link :to="category.URL">{{category.name}}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import logo from './Logo.vue'
import Cookies from 'js-cookie'
import axios from 'axios'

export default {
  data () {
    return {
      login: Cookies.get('username'),
      categories: [
        {name: 'HOME', URL: '/'},
        {name: 'ARTS', URL: '/category/ARTS'},
        {name: 'INDUSTRY', URL: '/category/INDUSTRY'},
        {name: 'TECH', URL: '/category/TECH'},
        {name: 'LIFE', URL: '/category/LIFE'},
        {name: 'SOCIETY', URL: '/category/SOCIETY'}
      ],
      username: Cookies.get('username')
    }
  },
  components: {
    'logo-component': logo
  },
  methods: {
    logout: function () {
      axios.delete('http://localhost:4000/', {
        withCredentials: true
      })
        .then(response => {
          Cookies.remove('username')
          Cookies.remove('password')
          this.$router.replace('/login')
        })
    },
  },
   watch:{
     '$route':(newroute, old) => {
       if(newroute.params.category !== old.params.category){
         location.reload(true);
       }
     }
   }
}
</script>

<style scoped>
  .headerContainer {
    max-height: 120px;
    background-color: #252833;
    display: flex;
    flex-direction: column;
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .user {
    flex: auto;
    margin-left: -8%;
    color: #7e7e7e;
    font-size: 20px;
    font-family: 'Istok Web', sans-serif;
  }

  .link {
    margin-top: 20px;
  }

  .link a {
    text-decoration: none;
    align-items: center;
    color: #b2b2b2;
  }

  .exit {
    margin-top: 10px;
  }

  nav a {
    text-decoration: none;
    align-items: center;
  }

  ul {
    margin: 12px 30%;
    padding: 0;
  }

  .menuCategory li {
    display:inline;
    padding: 5px 10px;
    font-family: 'Istok Web', sans-serif;
    margin: 0;
    flex-direction: row;
  }

  .menuCategory li.active {
    background: #29c5e6;
    color: #fff;
  }

  .menuCategory a {
    color: #b2b2b2;
    margin: 5% 2% 2% 5%;
  }

  .exit {
    cursor: pointer;
  }

  .userMenu {
    margin-top: 10px;
    font-size: 16px;
  }

  .linkToUser {
    margin-top: 10px;
    text-decoration: none;
    align-items: center;
    color: #b2b2b2;
    font: 20px/20px 'Oswald', sans-serif;
    font-size: 16px;
  }
</style>
