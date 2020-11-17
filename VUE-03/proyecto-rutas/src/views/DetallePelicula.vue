<template>
  <div>Detalle de Película</div>
  <div>{{$route.params.idx}}</div>
  <p>{{pelicula.description}}</p>
</template>

<script>

export default {
    name: 'DetallePelicula',
    data() {
        return {
            pelicula: {}
        }
    },
    methods: {
        async consumirPelicula() {
            try {
               const res = await fetch(`https://ghibliapi.herokuapp.com/films/${this.$route.params.idx}`);
                const data = await res.json();
                console.log(data);
                this.pelicula = data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.consumirPelicula();
    }

}
</script>

<style>

</style>