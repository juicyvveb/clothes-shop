<template>
<Menu/>
<div class="content">
  <h3 style="margin-top: 15vh">{{user}}</h3>
  <Header/>
  <div class="superContainer">
    <router-view></router-view>
  </div>
  <Footer/>         
  <Layout/>   
</div>

</template>

<script>
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';
import Layout from './components/Layout.vue';

export default {
  data(){
    return {
    }
  },
  computed:{
    user(){
      return this.$store.state.user.uid
    }
  },
  async mounted(){
    this.$store.dispatch('loadCatalog')
    await this.$store.dispatch('change');
    await this.$store.dispatch('buildCard');
  },
  components: {
    Header,
    Menu,
    Footer,
    Layout,
  },
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
