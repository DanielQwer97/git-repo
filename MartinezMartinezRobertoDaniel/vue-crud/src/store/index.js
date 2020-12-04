import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Libros: []
  },
  mutations: {
    SET_LIBROS(state, allLibros){
      state.Libros = allLibros
    }
  },
  actions: {
    SetLibros({commit}){
      axios.get('http://localhost:3000/')
      .then(response => {
        console.log(response);
        commit('SET_LIBROS', response.data);
      })
    },
    AgregarLibro({commit}, {params, onComplete, onError}){
      axios.post('http://localhost:3000/', params)
      .then(onComplete)
      .catch(onError)     
    },
  },
  getters: {
    TraerLibros: state => {
      return state.Libros
    }
  }
})
