import Vue from 'vue'
import Router from 'vue-router'
import EditorPage from '@/components/editor/EditorPage.vue'
import LoginPage from '@/components/login/LoginPage.vue'
import RegisterPage from '@/components/registration/RegisterPage.vue'
import HomePage from '@/components/home/HomePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newArticle',
      name: 'EditorPage',
      component: EditorPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    }

  ]
})
