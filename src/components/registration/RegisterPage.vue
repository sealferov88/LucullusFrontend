<template>
    <div>
        <header-component></header-component>
        <h2>Registration</h2>
        <form @submit.prevent="handleSubmit">
            <div class="Container">
                <label for="Email">Email</label>
                <input type="text" v-model="user.firstName" v-validate="'required'" name="firstName" class="inputField" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                <div v-if="submitted && errors.has('firstName')" class="invalidEdrror">{{ errors.first('Email') }}</div>
            </div>
            <div class="Container">
                <label for="username">Username</label>
                <input type="text" v-model="user.username" v-validate="'required'" name="username" class="inputField" :class="{ 'is-invalid': submitted && errors.has('username') }" />
                <div v-if="submitted && errors.has('username')" class="invalidEdrror">{{ errors.first('username') }}</div>
            </div>
            <div class="Container">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" class="inputField" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                <div v-if="submitted && errors.has('password')" class="invalidEdrror">{{ errors.first('password') }}</div>
            </div>
            <div class="Container">
                <button class="loginButton">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
import header from '@/components/Header.vue'

export default {
    data () {
        return {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        }
    },
    components: {
        'header-component': header,
    },
    methods: {
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {

                }
            });
        }
    }
};
</script>
