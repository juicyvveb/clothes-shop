<template>
    <div class="header">
        <router-link to="/" class="logo">
            <img class="logo-img" src="../assets/logo.png">
        </router-link>
        <Burger/>
        <nav class="nav">
            <Menu/>
        </nav>
        <Search/>
        <div class="user">
            <router-link to="/login" class="user-checkout user-icon">
                <img src="../assets/img/user.svg" alt="user">
            </router-link>
            <router-link to="/cart" class="user-cart user-icon">
                <img src="../assets/img/cart_b.svg" alt="cart">
                <div class="wrapper">
                    <span>{{cartLength }}</span>
                </div>
            </router-link>
            <a class="user-tel user-icon" href="tel:+74951234567">
                <img src="../assets/img/phone.svg" alt="cart"><span>+1 912-252-7350</span>
            </a>
        </div>
    </div>
</template>

<script>
import Burger from './Burger.vue';
import Search from './Search.vue';
import Menu from './Menu.vue';


export default {
    components: {
        Burger,
        Search,
        Menu,
    },
    computed: {
        cartLength(){
            return this.$store.getters.cart.length
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../assets/scss/general.scss';



.header {
        z-index: 3;
        display: flex;
        background: $background;
        height: 12vw;
        padding: 3% 7% 3% 7%;
        justify-content: space-between;
        position: relative;
        align-items: center;
        position: fixed;
        top: 0; 
        left: 0;
        
        .logo {
            width: 7vw;
            img {
                max-width: 100%;
            }
        }
        .nav {
            display: none;
        }
        .user {
            display: flex;
            width: 15%;
            img {
                max-width: 100%;
            }
            &-tel {
                display: none;
            }
            &-cart {
                position: relative;
                .wrapper{
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transform: translate(30%, -30%);
                    background: $green;
                    width: 4vw;
                    height: 4vw;
                    border-radius: 50%;
                    span { 
                        font-weight: bold;
                        // background: red;
                        color: white;
                        max-width: 100%;
                        font-size: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
                
            }
        }
        .search-input {
            display: none;
        }
}

@media (min-width: $laptop){
.header {
        padding: 2% 5% 2% 5%;
        align-items: center;
        height: 10vw;
        .logo {
            width: 5vw;
        }
        
        .user {
            display: flex;
            width: 15%;
            order: 5;
            align-items: center;
            &-icon {
                box-sizing: border-box;
                margin-right: 30%;
                &:last-child{
                    margin-right: 0;
                }
                img{
                    max-width: 100%;
                }
            }
             &-cart {
                .wrapper{
                    width: 2vw;
                    height: 2vw;
                } 
            }
        }

        .search-input{
            display: flex;
            width: 25%;
            margin-right: 5%;
            
        }
    }
}

@media(min-width: $desktop){
    .header {
        width: -webkit-fill-available;
        padding: 1% 4% 1% 4%;
        height: 4vw;
        .logo {
            width: 3vw;
        }

        .user {
            width: auto;
            min-width: 10%;
            &-icon {
                max-width: 2vw;
                box-sizing: border-box;
                margin-right: auto;
                cursor: pointer;
                padding: 0;
                transition: all .3s ease-in;
                &:hover {
                    padding: 0.3vw;
                    img {
                        opacity: 0.5;
                        transition: all .3s ease-in;
                    }         
                }
                &:last-child{
                    margin-right: 0;
                }
                img {
                    max-width: 100%;
                }
            }
            &-tel {
                display: block;
                position: relative;
                span {
                    opacity: 0;
                    visibility:hidden;
                    position: absolute;
                    word-break:keep-all;
                    top: 0;
                    left: 0;
                    transform: translate(-100%, 50%);
                    background: white;
                    padding: 15%;
                    color: black;
                    width: max-content;
                    border: 1px solid black;
                    transition: all .3s ease-out;
                    border-radius: 5px 0px 5px 0px;
                    pointer-events: none;
                }
            }
            &-tel:hover {
                span {
                    transition: all .3s ease-out;
                    transform: translate(-100%, 0%);                 
                    opacity: 100%;
                    visibility: visible;   
                }
            }
             &-cart {
                .wrapper{
                    width: 1vw;
                    height: 1vw;
                } 
            }
        }
        .nav {
            display: flex;
            flex-grow: 2;
        }
        .search-input {
            width: 15%;
            border: 1px solid black;
        }
    }
}

</style>