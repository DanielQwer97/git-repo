<template>
  <div>
      <h1>Mis ToDos</h1>
      <router-link to="/agregar-todo" class="btn btn-success float-right mb-3">Agregar</router-link>
        <TablaTodo />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TablaTodo from '../components/TablaTodo';

export default {
    name: 'Home',
    components: {
        TablaTodo
    },

}
</script>

<style>

</style>