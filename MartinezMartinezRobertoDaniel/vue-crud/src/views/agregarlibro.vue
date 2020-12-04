<template>
    <div>
        <h1>Agregar Libro</h1>
        <b-form @submit.prevent="guardarLibro">
            <Input 
              v-model="libro.titulo"
              label="Título"
              placeholder="Ingrese el título del libro"
              id="titulo"
              class="mb-2"
              :error="erroresValidacion && !validacionTitulo"
              mensajeError="El Título es obligatorio"
            />
            <Input 
              v-model="libro.autor"
              label="Autor del libro"
              placeholder="Ingrese el nombre del autor"
              id="autor"
              class="mb-2"
              :error="erroresValidacion && !validacionAutor"
              mensajeError="El nombre del autor es obligatorio"
            />
            <Input 
              v-model="libro.numeroPagina"
              label="Número de Paginas"
              placeholder="Ingrese el número de paginas"
              :maxlength="4"
              id="numeroPagina"
              class="mb-2"
            />
            <Input 
              v-model="libro.añopublicacion"
              label="Año de Publicación"
              placeholder="Ingrese el año de publicación del libro"
              :maxlength="4"
              id="añopublicacion"
              class="mb-2"
            />
            <b-button variant="primary" type="submit" class="float-right mt-3">
            Guardar
            </b-button>
        </b-form>
    </div>
</template>

<script>
import Input from '../components/Input.vue'
import { mapActions } from 'vuex'
    export default {
       name:'agregarlibro',
       components:{
           Input
       },
       data(){
           return{
               libro:{
                   titulo:'',
                   autor:'',
                   numeroPagina:'',
                   añopublicacion:''
               },
               erroresValidacion: false
           }
       },
       methods:{
           ...mapActions(['AgregarLibro']),
           guardarLibro(){
              if(this.validacionTitulo){
                this.erroresValidacion = false;
              if(this.validacionAutor){
                this.erroresValidacion = false;
              this.AgregarLibro({
                  params: this.libro,
                  onComplete: (response) => {
                      console.log(response)
                      this.$notify({
                      type: 'success',
                      title: response.data.mensaje
                      });
                      this.$router.push({
                          name: 'Libros'
                      })
                  },
                  onError: (error) => {
                      this.$notify({
                      type: 'error',
                      title: error.response.data.mensaje
                      });
                  }
              })
            } else{
                 this.erroresValidacion = true;
              }
           }
       }
    },
    computed: {
           validacionTitulo(){
               return(
                   this.libro.titulo !== undefined &&
                   this.libro.titulo.trim() !== ''
               )
           },
            validacionAutor(){
               return(
                   this.libro.autor !== undefined &&
                   this.libro.autor.trim() !== ''
               )       
           }
    }
}
</script>

<style>

</style>