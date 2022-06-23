<template>
  <tool-bar></tool-bar>
 <transition name="page">
   <router-view></router-view>
 </transition>

</template>

<script>
import ToolBar from '@/components/ToolBar.vue'


export default {
  name: 'App',
  components: {
    ToolBar,
  },
  methods : {
    
  },
}
</script>

<style lang="scss">
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter-from, .page-leave-to {
    opacity: 0;
  }
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  #itemsLine {
    line-height: 50px;
    border-bottom: 1px solid #d9d9d9;
    padding: 0 10px;

     a {
      margin-right: 10px;
      color: #333;
    }

    small {
      color: #6c6c6c;
    }
  }
</style>
