import Vue from 'vue'
import VueRouter from 'vue-router'
import AgregarTodo from '../views/AgregarTodo.vue'
import EditarTodo from '../views/EditarTodo.vue'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/agregar-todo',
    name: 'AgregarTodo',
    component: AgregarTodo
  },
  {
    path: '/editar-todo/:id',
    name: 'EditarTodo',
    component: EditarTodo
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
