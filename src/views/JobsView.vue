<template>
  <div>
      <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from '@/mixins/ListMixin'

export default {
name: 'JobsView',
components : {
  ListItem,
},
mixins : [
  ListMixin
]

}

</script>

<style>

</style>