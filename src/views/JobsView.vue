<template>
  <div>
      <list-view></list-view>
  </div>
</template>

<script>
import ListView from '../components/ListView.vue'

export default {
name: 'JobsView',
components : {
  ListView,
},
  created() {
    this.$store.dispatch('FETCH_JOBS')
      .then(() => console.log('success JOBS'))
      .catch(() => console.log('fail'))
  }
}

</script>

<style>

</style>