<template>
    <div>
      <h1>Usuario</h1>
      <button @click="getUsuario()" class="btn btn-primary">Obtener Usario</button>
      <tarjeta
        :Nombre="getUser.name.first"
        :Apellido="getUser.name.last"
        :Genero="getUser.gender"
        :Foto="getUser.picture.medium"
        :Correo="getUser.email"
        :Celular="getUser.cell"
        :Telefono="getUser.phone"
      >   
      </tarjeta>
    </div>
</template>

<script>
import tarjeta from '../components/tarjeta.vue'
import { mapActions, mapGetters } from 'vuex'
    export default {
      name: 'USUARIO',
      components: {
          tarjeta
      },
      methods: {
       ...mapActions(['getUsuario'])
      },
      computed: {
       ...mapGetters(['getUser'])
      },
      created(){
        this.getUsuario();
      }
    }
</script>

<style>
