export default {
    //재사용할 컴포넌트 옵션 & 로직
    created() {
     this.$store.state.loading = true
     this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => console.log('MixIn!'))
        .catch(() => console.log('fail'))
    this.$store.state.loading = false
   
  }
}