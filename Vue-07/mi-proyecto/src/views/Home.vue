<template>
  <div class="home">
       <h1>Personas</h1>
       <b-button to="/Agregar-Persona" variant="primary" class="float-right mb-3">Agregar</b-button>
       <Table :campos="campos" :items="allPersonas"></Table>
  </div>
</template>

<script>

import Table from "../components/table"
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
     Table
  },
   data() {
    return {
      campos: [
        { key: 'id', label: 'Clave' },
        { key: 'nombre', label: 'Nombre'},
        { key: 'direccion', 
          label: 'Dirección',
          formatter: value =>{
              return value || "-"
          }
        },
        { key: 'telefono', 
          label: 'Teléfono',
          formatter: value =>{
              return value || "-"
          }
        },
        { key: 'actions', label: 'Acciones'}
      ]
    }  
  },
  computed: {
    ...mapGetters(['allPersonas'])
  },
  methods: {
    ...mapActions(['setPersonas'])
  },
  created() {
    this.setPersonas();
  }
}
</script>
