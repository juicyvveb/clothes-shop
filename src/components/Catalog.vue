<template>
    <section class="catalog">
        <h3 class="catalog-text">Popular on Little Closet</h3>
        <div class="catalog-filter">
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
        </div>
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
                    <li v-for="(item, i) in filter" :key="i" v-show="i + 1 <= showCount">
                        <router-link :to="`/product/${item.id}`">
                            <Item :info="item"/>
                        </router-link>
                    </li>
                    </TransitionGroup>
        </div>
        <button type="button"
         class="lazyLoad" 
         @click="showCount <= filter.length ? showCount += showCount : false"
         v-if="showCount < filter.length">Load More</button>
    </section>
</template>

<script>
import Item from './Item.vue';
export default {
    data(){
        return {
            category: "women",
            // items: [],
            showCount: 3,
            choseCount: false,
        }
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
        items(){
            return this.$store.state.catalog
        },
        filter(){
            return this.items ? this.items.filter(el => el.type == this.category) : []
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
                        border: 1px solid $gray;
                        padding-top: 0;
                        margin-top: 4%;
                    }
                }
            }
        }
        .countShow{
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-start;
            padding: 4% 4% 0 4%;
            .wrapper {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                border: 1px solid black;
                position: relative;
                padding-left: 10px;
                box-sizing: border-box;
                border-radius: 2px;
                background: $background;
                min-width: 50px;
                .countCheck-input {
                    display: none;
                }
                .countCheck-text {
                    flex-grow: 2;
                }
                .countCheck-label {
                width: 3vw;
                height: 3vw;
                min-width: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                box-sizing: border-box;
                z-index: 3;
                &:after{
                    content: '';
                    width: 100%;
                    height: 100%;
                    background-image: url('../assets/img/arrow.png');
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    transition: all .3s ease-out;
                }
            }
            .countShow-list {
                width: 100%;
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                background: $white;
                justify-content: flex-start;
                input{ display: none}
                label {padding: 10px; border-bottom: 0.5px solid white; box-sizing: border-box;}
                opacity: 0;
                visibility: hidden;
                transform: translateY(-15%);
                transition: all .3s ease;
                z-index: 0;
            }
            .countCheck-input:checked~ul{
                opacity: 1;
                visibility: visible;
                transform: translateY(2px);
                 z-index: 5;
            }
            .countCheck-input:checked~.countCheck-label {
                &:after{
                    transform: scale(1, -1);
                }
            }
            }
            
        }
        .lazyLoad {
            background: none;
            border: 2px solid $green;
            color: white;
            background: $green;
            font-weight: bold;
            padding: 10px;
            box-sizing: border-box;
            margin-top: 10px;
            border-radius: 4px;
        }
    }

    @media(min-width: $laptop){
    .catalog{
        padding-bottom: 5%;
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
                        justify-content: flex-start;
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

            .countShow{
                padding-right: 6%;
                padding-left: 6%;
                .wrapper {
                
                    .countCheck-input {
                    }
                    .countCheck-text {
                    }
                    .countCheck-label {
                    padding: 2px;
                    padding-right: 8px;
                    &:after{
                        
                    }
                }
                .countShow-list {
                    
                }
                .countCheck-input:checked~ul{
                
                }
                .countCheck-input:checked~.countCheck-label {
                    &:after{
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

        .countShow{
            padding-right: 7%;
            padding-left: 7%;
            .wrapper {
                .countCheck-input {
                }
                .countCheck-text {
                }
                .countCheck-label {
                width: 2vw;
                height: 2vw;
                padding: 10px;
                &:after{
                }
            }
            .countShow-list {
                
            }
            .countCheck-input:checked~ul{
              
            }
            .countCheck-input:checked~.countCheck-label {
                &:after{
                   
                }
            }
            }
            
        }

        .lazyLoad {
            &:hover{
                background: white;
                color: $green;
                transition: all .3s ease-out;
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