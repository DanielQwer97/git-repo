import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    User: []
  },
  mutations: {
    SET_USUARIO(state, Usuario){
      state.User = Usuario
    }
  },
  actions: {
    getUsuario({commit}){
      axios.get('https://randomuser.me/api/')
      .then(response => {
        console.log(response.data.results[0]);
        commit('SET_USUARIO', response.data.results[0])
      })    
    }
  },
  getters: {
    getUser: state => {
     return state.User
    }
  }
})
