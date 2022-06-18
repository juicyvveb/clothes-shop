<template>
    <div class="header">
        <div class="logo">
            <img class="logo-img" src="../assets/logo.png">
        </div>
        <Burger/>
        <nav class="nav">
            <Menu/>
        </nav>
        <Search/>
        <div class="user">
            <div class="user-checkout user-icon">
                <img src="../assets/img/user.svg" alt="user">
            </div>
            <div class="user-card user-icon">
                <img src="../assets/img/cart.svg" alt="card">
            </div>
            <a class="user-tel user-icon" href="tel:+74951234567">
                <img src="../assets/img/phone.svg" alt="card"><span>+1 912-252-7350</span>
            </a>
        </div>
    </div>
</template>

<script>
import Burger from './Burger.vue';
import Search from './Search.vue';
import Menu from './Menu.vue';


export default {
    data(){
        return {
        }
    },
    components: {
        Burger,
        Search,
        Menu,
    },
}
</script>


<style lang="scss" scoped>
@import '../assets/scss/general.scss';



.header {
        z-index: 3;
        display: flex;
        background: $background;
        padding: 3% 7% 3% 7%;
        justify-content: space-between;
        position: relative;
        align-items: baseline;
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
        }
        .search-input {
            display: none;
        }
}

@media (min-width: $laptop){
.header {
        padding: 2% 5% 2% 5%;
        align-items: center;
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
        .logo {
            width: 3vw;
        }

        .user {
            width: 10%;
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
        }
        .nav {
            flex-grow: 2;
            display: flex;
            max-width: 30%;
        }
        .search-input {
            width: 15%;
            
        }
    }
}

</style>