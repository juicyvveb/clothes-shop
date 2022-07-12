<template>
    <section class="catalog">
        <h3 class="catalog-text">Popular on Little Closet</h3>
        <h3 v-if="!catalog.length">таких товаров нет :(</h3>
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
                            <Item @click.self.prevent="1" :info="item"/>
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
            return this.$store.getters.catalog
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';
.catalog {
    @include catalog;
}

.list-move,
    .list-enter-active,
    .list-leave-active {
        transition: all .5s ease;
        transition-delay:  opacity .5s;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
    }
    .list-leave-active {
    position: absolute;
}

</style>