<template>
   <div>
    <b-table 
        striped 
        bordered
        :items="items"
        :fields="campos"
    >

     <template #cell(actions)="data">
        <slot name="actions" :item="data"></slot>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
    name: 'TableLibros',
    props: {
        items: Array,
        campos: Array
    }
}
</script>

<style>

</style>