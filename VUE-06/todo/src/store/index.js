import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    todo: {
        id: '',
        nombre: '',
        tipos: [],
        prioridad: '',
        horas: 0
    }
  },
  mutations: {
    SET_TODOS(state, todo){
      state.todos.push(todo)
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    SET_TODO(state, id) {
      state.todos = state.todos.find(todo => todo.id === id)
    },
    SET_UPDATETODO(state, todo){
      state.todos = state.todos.map(t => t.id === todo.id)
    }
  },
  actions: {
    setTodos({commit}, todo){
      commit('SET_TODOS', todo)
    },
    deleteTodo({ commit }, id){
      commit('DELETE_TODO', id)
    },
    setTodo({commit}, id){
      commit('SET_TODO', todo)
    },
    updatetodo({commit}, todo){
      commit('SET_UPDATETODO', todo)
    }
  },
  getters: {
    allTodos: state => {
      return state.todos
    },
    singleTodo: state => {
      return state.todo
    }
  },
  modules: {
  }
})
