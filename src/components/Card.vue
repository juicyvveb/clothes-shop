<template>
    <div class="container">
            <div class="title">
                <h3>Shopping Cart</h3>
            </div>
            <p>{{card}}</p>
            <div class="wrapper">
                <div class="cart">
                    <div class="cart-list">
                        <TransitionGroup tag="ul" name="list">
                            <li v-for="(item,i) in card" :key="item">
                                <span>{{i+1}}</span><cartItem :info="item"/>
                            </li>
                        </TransitionGroup>
                    </div>
                    <div class="cart-buttons">
                        <button class="cart-buttons--clear button" @click="clear()">clear cart</button>
                        <button class="button">continue shopping</button>
                    </div>
                    <div class="cart-total">
                        <h4 class="cart-total--title">Cart Total: {{card.length}}</h4>
                        <div class="cart-total--check">
                            <h5>Total</h5>
                            <span>{{sum}}</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import cartItem from './cartItem.vue';
import {clearCart} from '../assets/js/database';
export default {
    computed: {
        card(){
            return this.$store.getters.card
        },
        sum(){
            return this.$store.getters.allSum;
        }
    },
    methods: {
        async clear(){
            const uid = await this.$store.dispatch('getUid');
            clearCart(uid)
        }
    },
    components: {
        cartItem,
    },
    
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';

.container {
    .title{
        background-color: $black;
        padding-top: 22vw;
        padding-bottom: 10vw;
        h3 {
            font-size: 36px;
            color: #FFFFFF;
            font-weight: 700;
            line-height: 0.75;
        }
    }
    .wrapper {
        padding: 4%;
        .cart{
            width: 100%;
            &-list {
               padding: 10% 0;
               ul {
                   li {
                       margin-top: 5%;
                       text-align: left;
                       &:first-child{
                           margin-top: 0;
                       }
                   }
               }
            }
            &-buttons {
                padding: 10% 0;
                display: flex;
                .button {
                    @include button; 
                    margin-left: 10%;
                }
                &--clear.button {
                    background: $gray;
                    border-color: $gray;
                    margin-left: 0;
                }
            }
            &-total {
                background: $white;
                padding: 15%;
                text-align: left;
                &--check {
                    margin-top: 20%;
                    width: 100%;
                    display: flex;
                    background: white;
                    align-items: center;
                    padding: 5%;
                    padding-left: 0;
                    h5 {
                        font-family: 'Open Sans', sans-serif;
                        font-size: 16px;
                        font-weight: 600;
                        color: #969696;
                        margin-right: 10%;
                    }
                    span {
                        color: #4a4a4a;
                        font-weight: 800;
                    }
                }
            }
        }
    }
}

@media (min-width: $laptop){
    .container {
        .title{
            padding-top: 15vw;
            padding-bottom: 5vw;
           
        }
    .wrapper {
        padding: 6%;
        .cart{
            &-list {
               padding: 4% 0;
            }
            &-buttons {
                padding: 4% 0;
                justify-content: flex-end;
                .button {
                    @include button; 
                }
                &--clear.button{
                    background: $gray;
                    border: $gray;
                }
            }
            &-total {
                padding: 10%;
                &--title{
                    font-size: 24px;
                    font-weight: 700;
                    color: #4a4a4a;
                    line-height: 0.75;
                }
                &--check {
                    margin-top: 5%;
                    justify-content: space-between;
                }
            }
        }
    }
}
}

@media (min-width: $desktop) {
    .container {
    .title{
        padding-top: 8vw;
        padding-bottom: 4vw;
    }
    .wrapper {
        padding: 2% 17%;
        .cart{
            &-list {
               padding: .8% 0;
               ul {
                   li {
                       margin-top: 10%;
                       &:first-child {
                           margin-top: 0;
                       }
                   }
               }
            }
            &-buttons {
                padding: 3% 0;
                display: flex;
            }
            &-total {
                padding: 5%;
                &--check {
                    margin-top: 5%;
                    width: 100%;
                    padding: 2%;
                    padding-left: 0;
                }
            }
        }
    }
}
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

@media(min-width: $desktop){
    .list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(0);
}
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>