<template>
  <div>
    <div v-for="item in fectchNewsList" :key="item" id="itemsLine">
      <a v-bind:href="item.url" target="_blank">
         {{item.title}}
      </a>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </div>
  </div>
</template>

<script>

//#1.
// import { mapState } from 'vuex'

//#2.
import {  mapGetters } from 'vuex'

export default {
  name: 'NewsView',
  computed : {

    //#1.  v-for="user in news" 로 해준다.
    // ...mapState({
    //   news: state => state.news
    // })

    //#2.
    ...mapGetters([
     'fectchNewsList'
    ])
  },
  created() {
 this.$store.dispatch('FETCH_NEWS')
    .then(() => console.log('success NEWS'))
    .catch(() => console.log('fail'))
  }
}
</script>

<style>

</style>