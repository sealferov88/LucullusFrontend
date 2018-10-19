<template>
  <div>
    <header-component></header-component>
    <form @submit.prevent="handleSubmit" class="formContainer">
      <h1>Registration</h1>
      <div class="Container">
        <input type="text" v-model="user.username" name="username" class="inputField" placeholder=" Username"/>
        <div v-if="submitted && emptyLogin" class="invalidEdrror">Enter your login</div>
      </div>
      <div class="Container">
        <input type="password" v-model="user.password" name="password" class="inputField" placeholder=" Password"/>
        <div v-if="submitted && emptyPassword" class="invalidEdrror">Enter your password</div>
      </div>
      <div class="Container">
        <button class="loginButton">Register</button>
      </div>
      <div v-if="submitted && send && successfullyRegistred" class="Container">
        <div>Successfully registered</div>
      </div>
      <v-dialog name="errorResponse"/>
    </form>
  </div>
</template>

<script>
import header from '@/components/Header.vue'
import axios from 'axios'

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      submitted: false,
      send: false,
      successfullyRegistred: false,
      emptyLogin: false,
      emptyPassword: false
    }
  },
  components: {
    'header-component': header
  },
  methods: {
    handleSubmit (e) {
      this.submitted = true
      if (this.user.username === null || this.user.username === undefined || this.user.username === '') {
        this.emptyLogin = true
        return
      }
      if (this.user.password === null || this.user.password === undefined || this.user.password === '') {
        this.emptyPassword = true
        return
      }
      axios.post('http://localhost:4000/register', {
        username: this.user.username,
        token: this.user.password
      })
        .then(response => {
          this.send = true
          if (response.status !== 400) {
            console.log(response)
            this.$modal.show('dialog', {
              title: ':3',
              text: 'Successfully registered',
              buttons: [
                {
                  title: 'Go to login',
                  handler: () => {
                    this.$router.replace('/login')
                  }
                }
             ]
            })
          } else {
            this.successfullyRegistred = false
          }
        })
        .catch(error =>{
          this.$modal.show('dialog', {
            title: 'Alert',
            text: 'Something goes wrong',
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

<style scoped>
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
    font-size: 16px;
    text-decoration: none;
  }

  .invalidEdrror {
    margin-top: 5px;
    color: #7e7e7e;
    max-width: 200px;
  }
</style>
