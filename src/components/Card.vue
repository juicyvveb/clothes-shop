<template>
    <div class="container">
            <div class="title">
                <h3>Shopping Cart</h3>
            </div>
            <div class="wrapper">
                <div class="cart">
                    <div class="cart-list">
                        <ul>
                            <li>ITEM</li>
                            <li>ITEM</li>
                            <li>ITEM</li>
                            <li>ITEM</li>
                            <li>ITEM</li>
                            <li>ITEM</li>
                        </ul>
                    </div>
                    <div class="cart-buttons">
                        <button class="cart-buttons--clear button">clear cart</button>
                        <button class="button">continue shopping</button>
                    </div>
                    <div class="cart-total">
                        <h4 class="cart-total--title">Cart Total</h4>
                        <div class="cart-total--check">
                            <h5>Total</h5>
                            <span>$29.90</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    computed: {
        card(){
            return this.$store.state.card
        }
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
            }
            &-buttons {
                border-top: 1px solid $gray;
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
</style>