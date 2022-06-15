<template>
    <div class="header">
        <div class="logo">
            <img class="logo-img" src="../assets/logo.png">
        </div>
        <Burger/>
        <Search/>
        <div class="user">
            <div class="user-checkout user-icon">
                <img src="../assets/img/user.svg" alt="user">
            </div>
            <div class="user-card user-icon">
                <img src="../assets/img/cart.svg" alt="card">
            </div>
        </div>
    </div>
</template>

<script>
import Burger from './Burger.vue';
import Search from './Search.vue';


export default {
    data(){
        return {
        }
    },
    components: {
        Burger,
        Search,
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
</style>