<template>
  <div class="content">
      <Header/>
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  /* overflow-x: hidden; */
}

.content {
    transition: all 0.3s ease-out;
    transform: translate(0,0);
}

.content.move {
  transform: translateX(20%);
}
</style>
