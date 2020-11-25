import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personas: []
  },
  mutations: {
    SET_PERSONAS(state, personas){
      state.personas = personas
    }
  },
  actions: {
    setPersonas({commit}){
      axios.get('http://localhost:3000/')
      .then(response => {
        console.log(response);
        commit('SET_PERSONAS', response.data);
      })
    },
    crearPersona({commit}, {params, onComplete, onError}){
      axios.post('http://localhost:3000/', params)
      .then(onComplete)
      .catch(onError)     
    },
    obtenerPersona({commit}, {id, onComplete}){
      axios.get(`http://localhost:3000/${id}`)
      .then(onComplete)
      .catch(err => {
        console.log(err)
      }) 
    },
    editarPersona({commit}, {id, params, onComplete, onError}){
      axios.put(`http://localhost:3000/${id}`, params)
      .then(onComplete)
      .catch(onError)     
    },
    eliminarPersona({commit}, {id, onComplete, onError}){
      axios.delete(`http://localhost:3000/${id}`)
      .then(onComplete)
      .catch(onError)     
    }
  },
  getters: {
    allPersonas: state => {
      return state.personas
    }
  }
})
