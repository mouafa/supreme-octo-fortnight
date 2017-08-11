import Vue from 'vue'
import Router from 'vue-router'
const Categories = _ => import(/* webpackChunkName: "categories" */ '@/pages/categories')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Categories',
      component: Categories
    }
  ]
})
