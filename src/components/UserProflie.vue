<template>
    <p>name : {{userInfo.id}}</p>
    <p>karma : {{userInfo.karma}}</p>
    <p>created : {{userInfo.created}}</p>
</template>

<script>
import {  mapGetters } from 'vuex'
export default {
    // props : {
    //     info : Object,
    // }

    computed : {
        ...mapGetters(['userInfo'])
    },
}
</script>

<style>

</style>