<template>
  <div>
      <header>
        <div>
             <img src="../assets/logo.png">
        </div>
          <ul>
            <router-link to="/news">News</router-link> |
            <router-link to="/ask">Ask</router-link> |
            <router-link to="/jobs">Jobs</router-link>
        </ul>
      </header>
  </div>
</template>

<script>
export default {
    name : 'ToolBar',
}
</script>

<style scoped lang="scss">
    header {
        color: white;
        background-color: #42b883;
        padding: 8px;
        display: flex;


        > div {
            background-color: white;
            border-radius: 50%;
            position: relative;
            width: 50px;
        }

        img {
            width: 80%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        a {
            color : white
        }
        
        .router-link-exact-active {
            color: #354953;
        }

        ul {
            display: flex;
            justify-content: space-around;
            width: 200px;
            // margin: 0 auto;
            line-height: 50px;
        }
    }
</style>