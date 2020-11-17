<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="30">
   <TituloPrincipal texto="Inicio" />
  </div>
</template>

<script>
// @ is an alias to /src
import TituloPrincipal from '../components/TituloPrincipal.vue';

export default {
  name: 'Home',
  components: {
    TituloPrincipal
  }
}
</script>
