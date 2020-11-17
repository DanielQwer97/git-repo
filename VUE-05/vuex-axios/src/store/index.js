import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    todos: []
  },
  mutations: {
    SET_POSTS(state, posts){
      state.posts = posts
    },
    SET_TODOS(state, todos) {
      state.todos = todos
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.completed)
    }
  },
  actions: {
    getPosts({commit}){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response.data);
        commit('SET_POSTS', response.data)
      })
    },
    getTodos({commit}){
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        console.log(response.data)
        commit('SET_TODOS', response.data)
      })
    }
  },
  modules: {
  }
})
