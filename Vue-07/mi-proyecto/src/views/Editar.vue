<template>
    <div>
        <h1>Editar personas</h1>
        <p>ID Persona:{{ $route.params.id }}</p>
        <b-form @submit.prevent="guardarPersona">
            <Input 
              v-model="persona.nombre"
              label="Nombre"
              placeholder="Ingrese el nombre de la persona"
              id="nombre"
              class="mb-2"
              :error="erroresValidacion && !validacionNombre"
              mensajeError="El nombre es obligatorio"
            />
            <Input 
              v-model="persona.direccion"
              label="Dirección"
              placeholder="Ingrese la dirección de la persona"
              :maxlength="150"
              id="direccion"
              class="mb-2"
            />
            <Input 
              v-model="persona.telefono"
              label="Teléfono"
              placeholder="Ingrese el teléfono de la persona"
              :maxlength="10"
              id="telefono"
              class="mb-2"
            />
            <b-button variant="primary" type="submit" class="float-right mt-3">
            Guardar
            </b-button>
        </b-form>

    </div>
</template>

<script>
import Vue from 'vue'
import Input from '../components/input'
import { mapActions } from 'vuex'
    export default {
        name:'Editar',
        components:{
           Input
       },
       data(){
           return{
               persona:{
                   nombre:'',
                   direccion:'',
                   telefono:''
               },
               erroresValidacion: false
           }
       },
       methods:{
           ...mapActions(['obtenerPersona', 'editarPersona']),
           guardarPersona(){
              if(this.validacionNombre){
                this.erroresValidacion = false;
                //Guardar edicion
                this.editarPersona({
                    id: this.persona.id,
                    params: this.persona,
                    onComplete: (response) => {
                        console.log(response)
                        this.$notify({
                            type: 'success',
                            title: response.data.mensaje
                        })
                        this.$router.push({
                            name: 'Home'
                        });
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
       },
       computed: {
           validacionNombre(){
               return(
                   this.persona.nombre !== undefined &&
                   this.persona.nombre.trim() !== ''
               )
           }
       },
       created(){
           this.obtenerPersona({
               id: this.$route.params.id,
               onComplete: (response) => {
                   console.log(response.data.data),
                   Vue.set(this, 'persona', response.data.data)
               }
           });
       }   
    }
</script>

<style >

</style>