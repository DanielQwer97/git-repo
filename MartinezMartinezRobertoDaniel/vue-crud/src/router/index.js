import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Libros from '../views/Libros.vue'
import agregarlibro from '../views/agregarlibro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Libros',
    name: 'Libros',
    component: Libros
  },
  {
    path: '/agregarlibro',
    name:'agregarlibro',
    component: agregarlibro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
