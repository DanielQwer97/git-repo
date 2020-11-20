<template>
    <div>
        <h1>Agregar Personas</h1>
        <b-form @submit.prevent="guardarPersona">
            <Input 
              v-model="persona.nombre"
              label="Nombre"
              placeholder="Ingrese el nombre de la persona"
              id="nombre"
            />
            <Input 
              v-model="persona.direccion"
              label="Dirección"
              placeholder="Ingrese la dirección de la persona"
              :maxlength="150"
              id="direccion"
            />
            <Input 
              v-model="persona.telefono"
              label="Teléfono"
              placeholder="Ingrese el teléfono de la persona"
              :maxlength="10"
              id="telefono"
            />
            <b-button variant="primary" type="submit" class="float-right mt-3">
            Guardar
            </b-button>
        </b-form>
    </div>
</template>

<script>
import Input from '../components/input'
import { mapActions } from 'vuex'
    export default {
       name:'Agregar',
       components:{
           Input
       },
       data(){
           return{
               persona:{
                   nombre:'',
                   direccion:'',
                   telefono:''
               }
           }
       },
       methods:{
           ...mapActions(['crearPersona']),
           guardarPersona(){
              this.crearPersona({
                  params: this.persona,
                  onComplete: (response) => {
                      console.log(response)
                      this.$router.push({
                          name: 'Home'
                      })
                  }
              })
           }
       }
        
    }
</script>

<style>

</style>