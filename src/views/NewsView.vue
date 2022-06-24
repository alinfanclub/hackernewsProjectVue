<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListView.vue'
// import SpinnerVue from '@/components/Spinner.vue'
export default {
  name : 'NewsView',
  data() {
    return {
      //  loadingStatus: false,
    }
  },
  components : {
    ListItem,
  },
  created() {
  this.$store.dispatch('FETCH_NEWS')
    .then(() => console.log('success NEWS'))
    .catch(() => console.log('fail'))
   
  }
}
// //#1.
// // import { mapState } from 'vuex'

// //#2.
// import {  mapGetters } from 'vuex'

// export default {
//   name: 'NewsView',
//   computed : {

//     //#1.  v-for="user in news" 로 해준다.
//     // ...mapState({
//     //   news: state => state.news
//     // })

//     //#2.
//     ...mapGetters([
//      'fectchNewsList'
//     ])
//   },
//   created() {
//  this.$store.dispatch('FETCH_NEWS')
//     .then(() => console.log('success NEWS'))
//     .catch(() => console.log('fail'))
//   }
// }
</script>

<style lang="scss">

</style>