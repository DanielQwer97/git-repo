<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="30">
    <h1>{{titulo}}</h1>
    <p :style="colorTotal">Mi total: {{ total }}</p>
    <button @click="accionAccion(5)">Aumentar</button>
    <p> {{ $store.state.otra }}</p>
    <BotonDisminuir />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BotonDisminuir from '../components/BotonDisminuir'

export default {
  name: 'Home',
  components: {
    BotonDisminuir
  },
  data() {
    return {
      titulo: 'Mi proyecto con vuex'
    }
  },
  methods: {
    ...mapActions(['accionAccion'])
  },
  computed: {
    ...mapState(['total']),
    colorTotal() {
      return this.total >= 100 ? {'color': 'green'} : {'color': 'red'};
    }
  }
}
</script>
