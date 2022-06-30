<template>
    <div class="container">
        <div class="product">
            <Item :info="productInfo"/>
        </div>
    </div>
</template>

<script>
import Item from './Item.vue';
import getList from '../assets/js/getList';
export default {
    data(){
        return {
            productInfo: '',
        }
    },
    components:{
        Item,
        // Item: () => this.productInfo ? import('./Item.vue') : false,
    },
    beforeMount(){
       this.getInfo(this.$route.params.id)
    },
    beforeRouteUpdate(to) {
        this.getInfo(to)
  },
  methods: {
    getInfo(route){
        return getList.then(async (answer) => {
        this.productInfo = await answer.filter(el => el.id == route)[0]
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';
    .container {
        padding-top: 15vw;
        .product{
            padding: 4%;
           .item {
            width: 100%;
           } 
        }
    }

    @media(min-width: $desktop){
        .container {
            padding-top: 2vw;
            .product{
                padding: 4% 19%;
            }
        }
    }
</style>