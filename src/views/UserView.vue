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
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName)
        .then(() => console.log('Success load UserData'))
        .catch(() => console.log('fail'))
    },
    components : {
      UserProflie
    }
}
</script>

<style>

</style>