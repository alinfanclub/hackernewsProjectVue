<template>
  <tool-bar></tool-bar>
  <router-view></router-view>

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
