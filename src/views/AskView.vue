<template>
  <div id="container">
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem'

export default {
    name: 'AskView',
    components : {
      ListItem,
    },
  // created() {
  //   this.$store.state.loading = true
  //   this.$store.dispatch('FETCH_ASK')
  //     .then(() => {
  //       console.log('success ASK');
  //       this.$store.state.loading = false
  //     })
  //     .catch((error) => console.log(error))
  // }
}
</script>

<style lang="scss">

</style>