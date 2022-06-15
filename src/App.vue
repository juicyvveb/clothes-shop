<template>
  <Menu/>
  <div class="content">
      <Header/>
      <div class="superContainer">
            <img alt="Vue logo" src="./assets/logo.png">
            <HelloWorld msg="Welcome to Your Vue.js App"/>
            <HelloWorld msg="Welcome to Your Vue.js App"/>
            <HelloWorld msg="Welcome to Your Vue.js App"/>
            <HelloWorld msg="Welcome to Your Vue.js App"/>
            <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>   
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import emitter from 'tiny-emitter/instance';


export default {
  mounted(){
    emitter.on('openMenu', () => {
    })
  },
  components: {
    HelloWorld,
    Header,
    Menu,
  }
}
</script>

<style lang="scss">
@import './assets/scss/general.scss';
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
  overflow-x: hidden;
}

.content {
  position: relative;
  .header, .superContainer {
    transform: translate(0,0);  
    transition: all .3s ease-out;
  }
    
}

.content.move .header, .content.move .superContainer{
    transform: translateX(20%);
    transition: all .3s ease-out;
}


@media (min-width: $laptop) {
  .content.move .header, .content.move .superContainer{
    transform: translateX(10%);
  }
}
</style>
