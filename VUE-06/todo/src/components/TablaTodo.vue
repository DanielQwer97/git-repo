<template>
  <div>
       <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipos</th>
                <th scope="col">Prioridad</th>
                <th scope="col">Horas requeridas</th>
               <th scope="col">Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="t in allTodos" :key="t.id">
                <th scope="row">{{t.id}}</th>
                <td>{{t.nombre}}</td>
                <td>{{t.tipos.join(", ")}}</td>
                <td>{{t.prioridad}}</td>
                <td>{{t.horas}}</td>
                <td>
                    <router-link
                    :to="{
                        name: 'EditarTodo',
                        params: {
                            id: t.id
                        }
                    }"
                    class="btn btn-primary btn-sm mr-2"
                    >
                        Editar
                    </router-link>
                    <button @click="deleteTodo(t.id)" class="btn btn-danger btn-sm">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'TablaTodo',
    computed: {
        ...mapGetters(['allTodos'])
    },
    methods: {
        ...mapActions(['deleteTodo'])
    }
}
</script>

<style>

</style>