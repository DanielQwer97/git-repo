<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ fecha }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg:{
      type:String,
      default: 'Titulo por default'
    },
    fecha: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
