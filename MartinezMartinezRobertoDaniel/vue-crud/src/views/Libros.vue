<template>
    <div>
       <h1>Libros</h1>
       <b-button to="/agregarlibro" variant="primary" class="float-right mb-3">Agregar Libro</b-button>
       <TableLibros 
       :campos="campos" 
       :items="TraerLibros"
       >
       </TableLibros>

    </div>
</template>

<script>
import TableLibros from "../components/TableLibros"
import { mapGetters, mapActions } from 'vuex'
    export default {
     name: 'Libros',
     components: {
      TableLibros
    },
    data() {
      return {
      campos: [
        { key: 'id', label: 'Clave' },
        { key: 'titulo', label: 'Título'},
        { key: 'autor', label: 'Autor del Libro'},
        { key: 'numeroPagina', 
          label: 'Número de Paginas',
          formatter: value =>{
              return value || "-"
            }
        },
        { key: 'añopublicacion', 
          label: 'Año de Publicación',
          formatter: value =>{
              return value || "-"
          }
        },
      ]
    }  
  },
  computed: {
    ...mapGetters(['TraerLibros'])
  },
  methods: {
    ...mapActions(['SetLibros'])
  },
  created() {
    this.SetLibros();
  }
}
</script>

<style>

</style>