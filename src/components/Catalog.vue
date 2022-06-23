<template>
    <section class="catalog">
        <h3 class="catalog-text">Popular on Little Closet</h3>
        <div class="catalog-filter">
            <input type="radio" class="catalog-filter--checkbox women" value="women" id="women" v-model="category">
            <input type="radio" class="catalog-filter--checkbox men" value="men" id="men" v-model="category">
            <input type="radio" class="catalog-filter--checkbox kids" value="kids" id="kids" v-model="category">
            <input type="radio" class="catalog-filter--checkbox home" value="home" id="home" v-model="category">  
            <div class="catalog-filter--labels">
                <label :class="{active : isActive('women')}" for="women" @click="hidden()">women{{show}}</label>
                <label :class="{active : isActive('men')}" for="men" @click="hidden()">men</label>
                <label :class="{active : isActive('kids')}" for="kids" @click="hidden()">kids</label>
                <label :class="{active : isActive('home')}" for="home" @click="hidden()">home</label>
            </div>
        </div>
        <div :class="{'catalog-items': true}">
                    <TransitionGroup  class="catalog-items--list" tag="ul" name="list">
                    <li v-for="(item, i) in filter" :key="i">
                        <Item :info="item"/>
                    </li>
                    </TransitionGroup>
        </div>
    </section>
</template>

<script>
import Item from './Item.vue';
export default {
    data(){
        return {
            category: "women",
            value: 'odd',
            items: [],
        }
    },
     beforeMount(){
        new Promise((res) => {
        setTimeout(() => {
            let arr = [{type: 'men', img: 'product_3'},
                {type: 'men', img: 'product_4'},
                {type: 'women', img: 'product_5'},
                {type: 'women', img: 'product_1'},
                {type: 'women', img: 'product_3'},
                {type: 'kids', img: 'product_2'},
                {type: 'kids', img: 'product_2'},
                {type: 'home', img: 'product_1'},
                {type: 'home', img: 'product_3'},
                {type: 'home', img: 'product_2'},
                {type: 'men', img: 'product_2'},]
            res(arr)
        }, 1000)
      })
      .then((arr) => this.items = arr)
    },
    components: {
        Item,
    },
    methods: {
        isActive(val){
            return val == this.category;
        },
    },
    computed: {
        filter(){
            return this.items.filter(el => el.type == this.category)
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';
    .catalog{
        padding: 10% 0;
        &-filter{
            margin-top: 5%;
            input {display: none};
            &--labels{
            display: flex;
            justify-content: space-around;
            width: 100%;
            padding: 0 4%;
            box-sizing: border-box;
                label {
                    flex-grow: 2;
                    position: relative;
                    font-weight: bold;
                    transition: all .2s ease-out;
                    &::after{
                        content: '\/';
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: auto;
                        height: 100%;
                    }
                    &:last-child{
                        &::after{
                            display: none;
                        }
                    }
                }
                label.active {
                    color: $green;
                    &::after{
                        color: black;
                    }
                }
            }
        }
        
        &-items {
            &--list{
                width: 100%;
                li {
                    width: 100%;
                    padding: 0% 4%;    
                    box-sizing: border-box;

                    .item {
                        width: 100%;
                    }
                }
            }
        }
       
    }

    @media(min-width: $laptop){
    .catalog{
        &-filter{
            display: flex;
            justify-content: center;
            &--labels{
                width: 60%;
                padding: 0 6%;
                label {
                    flex-grow: 1;
                }
            }
        }
            
            &-items {
                &--list{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding: 4% 4%;
                    box-sizing: border-box;
                    li {
                        width: 50%;
                        box-sizing: border-box;
                        padding: 2% 2%;
                        .item {
                            padding-top: 0;
                        }
                    }
                }
            }
            
        }
    }

    @media(min-width: $desktop){
    .catalog{
        padding: 5% 15%;
        &-filter{
            &--labels{
            width: 30%;
            padding: 0 4%;
                label {
                    &::after{
                    }
                }
            }
        }
        
        &-items {
            &--list{
                width: 100%;
                li {
                    width: 33%;
                    padding: 0% 2%;    
                    .item {
                        width: 100%;
                    }
                }
            }
        }
    }
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