<template>
  <div>
    <user-proflie></user-proflie>
  </div>
</template>

<script>

import UserProflie from '@/components/UserProflie.vue';

export default {
    
    name : 'userView',
    created() {
       this.$store.state.loading = true
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName)
        .then(() => {
          console.log('Success load UserData');
          this.$store.state.loading = false;
          }
        )
        .catch((error) => console.log(error))
    },
    components : {
      UserProflie
    }
}
</script>

<style>

</style>