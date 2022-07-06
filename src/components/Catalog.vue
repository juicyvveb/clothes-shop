<template>
    <section class="catalog">
        <h3 class="catalog-text">Popular on Little Closet</h3>
        <!-- <div class="catalog-filter">
            <input type="radio" class="catalog-filter--checkbox women" value="women" id="women" v-model="category">
            <input type="radio" class="catalog-filter--checkbox men" value="men" id="men" v-model="category">
            <input type="radio" class="catalog-filter--checkbox kids" value="kids" id="kids" v-model="category">
            <input type="radio" class="catalog-filter--checkbox home" value="home" id="home" v-model="category">  
            <div class="catalog-filter--labels">
                <label :class="{active : isActive('women')}" for="women" >women</label>
                <label :class="{active : isActive('men')}" for="men">men</label>
                <label :class="{active : isActive('kids')}" for="kids" >kids</label>
                <label :class="{active : isActive('home')}" for="home" >home</label>
            </div>
        </div> -->
        <div class="countShow">
            <div class="wrapper">
                <h4 class="countCheck-text">{{showCount}}</h4>
                <input type="checkbox" id="countCheck" class="countCheck-input" v-model="choseCount">
                <label for="countCheck" class="countCheck-label"></label>
                 <ul class="countShow-list">
                    <label v-for="(count,i) in 3" :key="i" :for="i" @click="choseCount = false">
                        <input :id="i" type="radio" :value="++i" v-model="showCount">
                        {{i}}
                    </label>
                </ul>
            </div>
            
        </div>
        <div :class="{'catalog-items': true}">
                    <TransitionGroup  class="catalog-items--list" tag="ul" name="list">
                    <li v-for="(item, i) in catalog" :key="i" v-show="i + 1 <= showCount">
                        <router-link :to="`/product/${item.id}`">
                            <Item :info="item"/>
                        </router-link>
                    </li>
                    </TransitionGroup>
        </div>
        <button type="button"
         class="lazyLoad" 
         @click="showCount <= catalog.length ? showCount += showCount : false"
         v-if="showCount < catalog.length">Load More</button>
    </section>
</template>

<script>
import Item from './Item.vue';
export default {
    data(){
        return {
            category: "women",
            showCount: 3,
            choseCount: false,
        }
    },
    methods: {
        isActive(val){
            return val == this.category;
        },
    },
    components: {
        Item,
    },
    computed: {
        catalog(){
            return this.$store.state.catalog
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';
.catalog {
    @include catalog;
}

</style>