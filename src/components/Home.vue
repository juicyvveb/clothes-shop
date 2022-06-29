<template>
            <Slider/>
             <Catalog/>
             <Popular/>
             <Features/>   
</template>

<script>

import Slider from './Slider.vue';
import Features from './Features.vue';
import Catalog from './Catalog.vue';
import Popular from './Popular.vue';


export default {
  data(){
    return {
    }
  },
  components: {
    Slider,
    Catalog,
    Features,
    Popular,
  }
}
</script>

<style lang="scss">
@import '../assets/scss/general.scss';

</style>

