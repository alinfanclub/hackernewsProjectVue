<template>
  <div id="container">
    <div v-for="askList in this.$store.state.ask" :key="askList" id="itemsLine">
      <!-- <div>{{askList.points}}</div> -->
      <div>
        <a :href="askList.url">
        {{askList.title}}
        </a>
        <small>
          {{askList.time_ago}} by {{askList.user}}
        </small>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'AskView',
    data() {
      return {
        // ask : [],
      }
    },
    created () {
      this.$store.dispatch('FETCH_ASK')
      .then( () =>
        console.log('success Ask')
      )
      .catch( () =>
        console.log('error')
      )
   
    }
}
</script>

<style lang="scss">
  // #container {
  //   > div  {
  //     display: flex;

  //     > div {
  //       &:nth-child(1) {
  //         width: 50px;
  //         margin-right: 10px;
  //         text-align: center;
  //         background-color: #42b883;
  //         color: white;
  //       }
  //     }
  //   }
  // }
</style>