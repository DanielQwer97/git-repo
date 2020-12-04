<template>
    <div>
    <b-card
         :img-src="Foto"
         img-alt="Image"
         img-top
         no-body
         style="max-width: 20rem;"
         class="mx-auto mt-3"
    >
    <template #header>
      <h4 class="mb-0">Nombre: {{Nombre}} {{Apellido}}</h4>
    </template>

    <b-card-body>
      <b-card-title>Genero: {{ Genero }}</b-card-title>
      <b-card-sub-title class="mb-2">Correo: {{ Correo }}</b-card-sub-title>
      <b-card-text>
        
      </b-card-text>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item>Celular: {{ Celular }}</b-list-group-item>
      <b-list-group-item>Teléfono: {{ Telefono }}</b-list-group-item>
    </b-list-group>

  </b-card>
</div>
</template>

<script>
    export default {
        name: 'tarjeta',
        props: {
            Nombre:{
                type:String,
                default:''
            },
            Apellido:{
                type:String,
                default:''
            },
            Genero:{
                type:String,
                default:''
            },
            Foto:{
                type: Image
            },
            Correo:{
                type: [String],
                default: ''
            },
            Telefono:{
                type: [String, Number],
                default: ''
            },
            Celular:{
                type: [String, Number],
                default: ''
            },
        }     
    }
</script>

<style>

</style>