<template>
  <Menu/>
  <div class="content">
      <Header/>
      <div class="superContainer">
            <Slider/>
             <Catalog/>
             <Popular/>
             <Features/>   
             <Footer/>         
      </div>   
  </div>
  
</template>

<script>
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Slider from './components/Slider.vue';
import Features from './components/Features.vue';
import Catalog from './components/Catalog.vue';
import Popular from './components/Popular.vue';
import Footer from './components/Footer.vue';
import emitter from 'tiny-emitter/instance';


export default {
  data(){
    return {
    }
  },
  mounted(){
    emitter.on('openMenu', () => {
    })
  },
  components: {
    Header,
    Menu,
    Slider,
    Catalog,
    Features,
    Footer,
    Popular,
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
