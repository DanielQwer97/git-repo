<template>
    <div>
        <h3>{{titulo}}</h3>
        <ul>
            <li v-for="(el, index) in elementos" :key="el.id" >
                {{el.nombre}}: 
                <span>{{el.cantidad}}</span>
                <AccionElemento texto="+" @accion="aumentar(index)" />
                <AccionElemento texto="-" @accion="disminuir(index)" />
            </li>
        </ul>
        <div>Cantidad total de frutas: {{ sumarElementos }}</div>
    </div>
</template>

<script>
import AccionElemento from './AccionElemento.vue';

export default {
    name: 'ListaElementos',
    components: {
        AccionElemento
    },
    props: {
        elementos: Array,
        titulo: {
            type: String,
            default: 'Mi lista'
        }
    },
    data() {
        return {
            misElementos: this.elementos,
            total: 0
        }
    },
    methods: {
        aumentar(index){
            this.misElementos[index].cantidad++;
        },
        disminuir(index){
            this.misElementos[index].cantidad--;
        }
    },
    computed: {
        sumarElementos() {
            this.total=0;
            for(let el of this.misElementos){
                this.total = this.total + el.cantidad;
            }
            return this.total;
        }
    }

}
</script>

<style scoped>
span {
    font-weight: 900;
}
</style>