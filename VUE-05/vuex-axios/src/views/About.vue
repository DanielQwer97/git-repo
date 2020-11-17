<template>
  <div>
    <h1>Mis todos</h1>
    <div v-for="todo in doneTodos" :key="todo.id">
      <h3>{{todo.title}}</h3>
      <p>{{todo.completed ? 'Completo' : 'Incompleto'}}</p>
  <hr>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'About',
  methods: {
    ...mapActions(['getTodos'])
  },
  created() {
    this.getTodos()
  },
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['doneTodos'])
  }

}
</script>

<style>

</style>
