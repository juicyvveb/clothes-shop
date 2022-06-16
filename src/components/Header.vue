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
        </div>
        <div class="tel">
            <a class="tel-link" href="tel:+74951234567">+1 912-252-7350</a>
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
        
        .user {
            display: flex;
            width: 15%;
            img {
                max-width: 100%;
            }
        }
        .search-input {
            display: none;
        }
        .tel {
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
                img {
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
        padding: 1% 4% 1% 4%;
        .logo {
            width: 3vw;
        }

        .user {
            width: 7%;
            &-icon {
                box-sizing: border-box;
                margin-right: 30%;
                &:last-child{
                    margin-right: 0;
                }
                img {
                    max-width: 100%;
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
        .tel {
            display: block;
            order: 6;
                &-link {
                text-decoration: none;
                position: relative;
                color: black;
                    &::before{
                    content: "";
                    width: 3vw;
                    height: 3vw;
                    display: block;
                    position: absolute;
                    left:0;
                    top: 0;
                    background: #000;
                    }
                }    
        }
    }
}
</style>