<template>
  <div id="app">
    <Navtop/>
    <router-view/>
    <Navbot/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: #f7f7f7;
  color: #000;
}

.container {
  margin-top: 46px;
  margin-bottom: 60px;
}

.container>div {
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 10px;
  background: #fff;
  position: relative;
  padding: 12px;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
</style>

<script>
// @ is an alias to /src
import Navtop from '@/components/Navtop.vue'
import Navbot from '@/components/Navbot.vue'

export default {
  name: 'home',
  components: {
    Navtop,
    Navbot
  }
}
</script>