<template>
  <div id="container">
    <list-view></list-view>
  </div>
</template>

<script>
import ListView from '../components/ListView.vue'

export default {
    name: 'AskView',
    components : {
      ListView,
    },
  created() {
    this.$store.dispatch('FETCH_ASK')
      .then(() => console.log('success ASK'))
      .catch(() => console.log('fail'))
  }
}
</script>

<style lang="scss">

</style>