<template>
  <div class="home">
       <h1>Personas</h1>
       <b-button to="/Agregar-Persona" variant="primary" class="float-right mb-3">Agregar</b-button>
       <Table :campos="campos" :items="allPersonas">
         <template slot="actions" slot-scope="{ item }">
           <b-button @click="onEditar(item)">
             Editar
           </b-button>
           <b-button 
           @click="onEliminar(item)" 
           variant="danger" 
           class="ml-2"
           >
             Eliminar
           </b-button>
         </template>
       </Table>
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
    ...mapActions(['setPersonas','eliminarPersona']),
    onEditar(item) {
      console.log(item);
      this.$router.push({
      name:'Editar',
      params:{
        id: item.item.id
      }
    })
    },
    onEliminar(item) {
      console.log(item)
      this.eliminarPersona({
        id: item.item.id,
        onComplete: (response) => {
                        console.log(response)
                        this.$notify({
                            type: 'success',
                            title: response.data.mensaje
                        });
                        this.setPersonas();
                    },
                    onError: (error) => {
                        this.$notify({
                            type: 'error',
                            title: error.response.data.mensaje
                        });
                    }
      })
    }
  },
  created() {
    this.setPersonas();
  }
}
</script>
