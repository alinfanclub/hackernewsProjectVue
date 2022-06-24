<template>
<div>
    <tool-bar></tool-bar>
 <transition name="page">
   <router-view></router-view>
 </transition>
   <spinner-tool :loading="loadingStatus = true"></spinner-tool>
</div>

</template>

<script>
import ToolBar from '@/components/ToolBar.vue'
import SpinnerTool from './components/Spinner.vue'
export default {
  name: 'App',
  components: {
    ToolBar,
    SpinnerTool,
  },
  methods : {
    startSpinner() {
      this.loadingStatus = true
    },
    endSpinner() {
      this.loadingStatus = false
    }
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter-from, .page-leave-to {
    opacity: 0;
  }

    #itemsLine {
    display: flex;

    > div {
      &:nth-child(1) {
        width: 50px;
        text-align: center;
      }
    }
  }

    #routerLink {
    color: rgb(115, 160, 25);
  }

    #listComments {
      color : #42b883
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



    #routerLink {
      color: rgb(115, 160, 25);
    }

     a {
      margin-right: 10px;
      color: #333;

      &:hover {
        color: #42b883;
        text-decoration: underline;
      }
    }

    small {
      color: #6c6c6c;
    }
  }
</style>
