<template>
    <div class="loginPage">
        <header-component></header-component>
        <form class="formContainer">
          <h1>Login</h1>
            <div class="Container">
                <input type="text" v-model="username" name="username" placeholder=" Username" class="inputField" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalidEdrror">Username is required</div>
            </div>
            <div class="Container">
                <input type="password" v-model="password" name="password" placeholder=" Password" class="inputField" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalidEdrror">Password is required</div>
            </div>
            <div class="Container">
                <button type="button" class="loginButton" v-on:click="login">Login</button>
                <router-link to="/register" class="loginButton">Go to register</router-link>
            </div>
        </form>
        <v-dialog name="errorResponse"/>
    </div>
</template>

<script>
import header from '@/components/Header.vue'
import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  data () {
    return {
      username: '',
      password: '',
      submitted: false
    }
  },
  components: {
    'header-component': header
  },
  methods: {
    login (e) {
      this.submitted = true
      axios.post('http://localhost:4000/', {
        username: this.username,
        token: this.password
      }, {withCredentials: true})
        .then(response => {
          console.log(response)
          if (response.status !== 400) {
            console.log(response)
            Cookies.set('username', this.username)
            Cookies.set('password', this.password)
            this.$router.replace('/')
          }
        })
        .catch(error =>{
          this.$modal.show('dialog', {
            title: 'Alert',
            text: 'Incorrect login or password',
            buttons: [
              {
                title: 'Close'
              }
           ]
          })
        })
    }
  }
}

</script>

<style scope>
h1 {
  color: #7e7e7e;
  font: 30px 'Oswald', sans-serif;
  padding: 0 10px;
}

.formContainer {
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 30%;
}

.inputField {
  margin-top: 3%;
  background-color: #2E323E;
  border-color: #676973;
  color: #FFFFFF;
  resize: none;
  font-size: 16px;
  size: 100%;
  border: 1px solid #b2b2b2;
  border-radius: 10px;
}

.inputField::placeholder {
  color: #676973
}

.loginButton {
  margin-top: 5%;
}

.registerButton {
  margin-top: 5%;
  margin-left: 10%;
}

.loginButton {
  background-color: #009EFF;
  color: #FFFFFF;
  border-color: #009EFF;
  display: inline-flex;
  line-height: 1;
  align-items: center;
  border-radius: 4px;
  padding: 7px;
  margin-right: 8px;
  margin-bottom: 4px;
  border: none;
  font-size: 18px;
  text-decoration: none;
}

.invalidEdrror {
  margin-top: 5px;
  color: #7e7e7e;
  max-width: 200px;
}
</style>
