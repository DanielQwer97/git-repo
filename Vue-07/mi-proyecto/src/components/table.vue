<template>
   <div>
    <b-table 
        striped 
        bordered
        :items="items"
        :fields="campos"
    ></b-table>
  </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        items: Array,
        campos: Array
    }
}
</script>

<style>

</style>