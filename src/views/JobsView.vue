<template>
  <div>
      <div v-for="joblist in this.$store.state.jobs" :key="joblist" id="itemsLine">
        <a v-bind:href="joblist.url" target="_blank">
          {{joblist.title}}
        </a>
        <small>{{joblist.time_ago}}, {{joblist.domain}}</small>
      </div>
      
  </div>
</template>

<script>
// import { response } from 'express';
// import { fetchJobsList } from '../api/index'

export default {
name: 'JobsView',
data() {
  return {
    // jobs : [],
  }
},
  created() {
    this.$store.dispatch('FETCH_JOBS')
    .then( () =>
        console.log('success JOB')
      )
      .catch( () =>
        console.log('error')
      )
  }
}

</script>

<style>

</style>