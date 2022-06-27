<template>
  <div>
    <div v-for="item in listItems" :key="item" id="itemsLine">
      <div id="listComments">
        {{item.comments_count || 0}}
      </div>
      <div>
        <!--new title area-->
        <template v-if="item.domain">
            <a v-bind:href="item.url" target="_blank">
                {{item.title}}
            </a>
        </template>
        <template v-else>
            <router-link :to="`/item/${item.id}`">
                {{item.title}}
            </router-link>
        </template>
        <small>
            {{item.time_ago}} by 
            <template v-if="item.user">
                <router-link :to="`/user/${item.user}`" id="routerLink">
                    {{item.user}}
                </router-link>
            </template>
            <template v-else>
                <a :href="item.url" target="_blank">
                    {{item.domain}}
                </a>
            </template>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
//#2.


export default {
  name: 'ListItem',
  computed : {
    listItems() {
      return this.$store.state.list
    //     const name = this.$route.name;
    // if( name === 'news') {
    //     return this.$store.state.news;
    // } else if ( name === 'ask') {
    //     return this.$store.state.ask;
    // } else if ( name === 'jobs') {
    //     return this.$store.state.jobs;
    // } 
    // return this.listItems
    }
  },
//   created() {
// //  this.$store.dispatch('FETCH_NEWS')
// //     .then(() => console.log('success NEWS'))
// //     .catch(() => console.log('fail'))

//     const name = this.$route.name;
//     if( name === 'news') {
//          this.$store.dispatch('FETCH_NEWS')
//     } else if ( name === 'ask') {
//         this.$store.dispatch('FETCH_ASK') 
//     } else if ( name === 'jobs') {
//         this.$store.dispatch('FETCH_JOBS')
//     } 
//   }
}
</script>

<style lang="scss">

</style>