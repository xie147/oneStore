import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Sort from '@/pages/Sort'
import Buy from '@/pages/Buy'
import Login from '@/pages/Login'
import Main from '@/pages/Main'
import Person from '@/pages/Person'
import Setting from '@/pages/Setting'
import Search from '@/pages/Search'
import IsLogin from '@/pages/IsLogin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/islogin',
      name: 'IsLogin',
      component: IsLogin
    }
  ]
})
