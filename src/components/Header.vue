<template>
  <div class="headerContainer">
  <div class="header">
    <logo-component class="logo"></logo-component>
    <div class="user">
        <div v-if="!login">
          <div class="link">
              <router-link to="/login">login</router-link>
          </div>
          <div class="link">
              <router-link to="/register">register</router-link>
          </div>
        </div>
        <div v-else>
          Hi user!
        </div>
    </div>
  </div>
  <nav>
     <ul class="menuCategory">
       <li><router-link v-for="category in categories" :key="category.name" v-bind:value="category" :to="{ path : category.URL}">{{category.name}}</router-link></li>
    </ul>
</nav>
</div>
</template>

<script>
import logo from './Logo.vue'

export default {
  data () {
      return {
          login: false,
          categories:[
            {name: 'Home', URL: '/home'},
            {name: 'login', URL: '/login' }
          ]
      }
  },

  components: {
    'logo-component': logo
  }
}
</script>

<style scoped>
.headerContainer{
  background-color: #252833;
}
.header {
  display: inline-flex;
  }
.logo{
  margin-left: 40px;
}
.user{
	text-decoration: none;
}

</style>
