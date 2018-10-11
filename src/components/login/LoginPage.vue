<template>
    <div class="loginPage">
        <header-component></header-component>
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div class="Container">
                <label for="username">Username</label>
                <input type="text" v-model="username" name="username" class="inputField" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="Container">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" name="password" class="inputField" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="Container">
                <button class="loginButton">Login</button>
                <router-link to="/register" class="loginButton">Register</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import header from '@/components/Header.vue'
import axios from 'axios'

export default {
    data () {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    components: {
      'header-component': header,
    },
    created () {
        // reset login status
        this.logout();
    },
    methods: {
         login (e) {
             this.submitted = true;
             axios.post("",{})
             .then(function(response){})
           },
        }
    }

</script>

<style scope>

</style>
