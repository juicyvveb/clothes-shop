<template>
    <div class="container">
        <div class="product">
            <Item :info="getInfo"/>
        </div>
    </div>
</template>

<script>
import Item from './Item.vue';
export default {
    data(){
        return {
        }
    },
    components:{
        Item,
    },
    computed: {
        getInfo(){
            return this.$store.state.catalog
            .filter(el => el.id ==this.$route.params.id)[0]
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