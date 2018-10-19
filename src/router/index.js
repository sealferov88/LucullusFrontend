import Vue from 'vue'
import Router from 'vue-router'
import EditorPage from '@/components/editor/EditorPage.vue'
import LoginPage from '@/components/login/LoginPage.vue'
import RegisterPage from '@/components/registration/RegisterPage.vue'
import HomePage from '@/components/home/HomePage.vue'
import articleByCategoryPage from '@/components/articleBy/articleByCategoryPage.vue'
import article from '@/components/article/articleLongView.vue'
import articleByAuthor from '@/components/articleBy/articleByAuthor.vue'
import articleByTag from '@/components/articleBy/articleByTag.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/article/new',
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
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/category/:category',
      name: 'articleByCategoryPage',
      component: articleByCategoryPage
    },
    {
      path: '/article/:title',
      name: 'article',
      component: article
    },
    {
      path: '/author/:author',
      name: 'yourArticles',
      component: articleByAuthor
    },
    {
      path: '/tag/:tag',
      name: 'articleTag',
      component: articleByTag
    }

  ]
})
