<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/publish">招聘发布</router-link>
      <router-link to="/processing">应聘管理</router-link>
      <router-link to="/me">我的</router-link>
    </div>
    <router-view/>
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
}

.container {
  margin-top: 40px;
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
