<template>
  <div>
      <h3>Editar Todo</h3>
      <form @submit.prevent="guardarTodo">
        <div class="form-group">
          <label for="exampleInputl1">Nombre</label>
          <input v-model.trim="todo.nombre" type="text" class="form-control" id="exampleInput1" placeholder="Ingrese nombre tarea">
        </div>
        <hr>
        <div>Tipos</div>
        <div class="form-check form-check-inline">
          <input v-model="todo.tipos" class="form-check-input" type="checkbox" value="Hogar" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1">
            Hogar
          </label>
        </div>
         <div class="form-check form-check-inline">
          <input  v-model="todo.tipos" class="form-check-input" type="checkbox" value="Escuela" id="defaultCheck2">
          <label class="form-check-label" for="defaultCheck2">
            Escuela
          </label>
        </div>
         <div class="form-check form-check-inline">
          <input  v-model="todo.tipos" class="form-check-input" type="checkbox" value="Oficina" id="defaultCheck3">
          <label class="form-check-label" for="defaultCheck3">
            Oficina
          </label>
        </div>
        <hr>
        <div>Prioridad</div>
        <div class="form-check form-check-inline">
          <input v-model="todo.prioridad" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Baja">
          <label class="form-check-label" for="inlineRadio1">Baja</label>
        </div>
        <div class="form-check form-check-inline">
          <input v-model="todo.prioridad"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Media">
          <label class="form-check-label" for="inlineRadio2">Media</label>
        </div>
        <div class="form-check form-check-inline">
          <input v-model="todo.prioridad"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Alta">
          <label class="form-check-label" for="inlineRadio3">Alta</label>
        </div>
        <hr>
         <div class="form-group">
          <label for="exampleInputl2">Horas requeridas</label>
          <input v-model.number="todo.horas" type="number" class="form-control" id="exampleInput2" >
        </div>

        <button type="submit" class="btn btn-success" :disabled="estadoBoton">Guardar</button>
        
      </form>
  </div>
</template>

<script>
import vue from 'vue'
import { mapGettters, mapActions } from 'vuex'
export default {
    name: 'EditarTodo',
    data(){
      return{
        todo: {}
      }
    },
    computed: {
      ...mapGettters(['singletodo']),
      estadoBoton() {
      return this.todo.nombre.trim() === "" ? true : false
    }
    },
    methods: {
      ...mapActions(['setTodo', 'updatetodo']),
      guardarTodo(){
   
      this.updatetodo(this.todo);
      this.limpiarTodo();
      this.$router.push({ name: 'Home'});

    },
    limpiarTodo(){
      this.todo = {
        id: '',
        nombre: '',
        tipos: [],
        prioridad: '',
        horas: 0
      }
    }
    },
    created(){
      this.setTodo(this.$route.params.id)
    },
    beforeMount(){
      Vue.set(this, 'todo', this.singletodo)
    }

}
</script>

<style>

</style>