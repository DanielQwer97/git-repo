<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="titulo" fecha="2020-10-28" />
    <ListaElementos titulo="Mi inventario de frutas" :elementos="frutas" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ListaElementos  from './components/ListaElementos.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ListaElementos
  },
  data(){
    return {
      titulo: 'Mi titulo en vue',
      frutas: [
        { id: 1, nombre: 'Manzana', cantidad: 10 },
        { id: 2, nombre: 'Uva', cantidad: 5 },
        { id: 3, nombre: 'Fresa', cantidad: 7 }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

