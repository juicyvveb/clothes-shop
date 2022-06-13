<template>
    <div class="header">
        <div class="logo">
            <img class="logo-img" src="../assets/logo.png">
        </div>
        <Burger/>

        <div class="wrapper" @click.self="closeMenu($event)">
            <div class="menu">
                <ul class="menu-list">
                    <li>women</li>
                    <li>men</li>
                    <li>kids</li>
                    <li>home deco</li>
                    <li>contact</li>
                </ul>
                <ul class="menu-contacts">
                    <li>inst</li>
                    <li>inst</li>
                    <li>inst</li>
                </ul>
                <input class="menu-search">
            </div>
        </div>

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
import emitter from 'tiny-emitter/instance';


export default {
    data(){
        return {
        }
    },
    components: {
        Burger,
    },
    mounted(){
        emitter.on('openMenu', ()=>{
            let wrapperMenu = document.querySelector('.wrapper');
            wrapperMenu.classList.add('active');
                        document.querySelector('.content').classList.add('move')
        })
    },
    methods: {
        closeMenu(e){
            console.log(e.target)
            let wrapperMenu = document.querySelector('.wrapper');
            if(e.target != wrapperMenu){
                return
            }
            else {
                wrapperMenu.classList.remove('active');
                document.querySelector('.content').classList.remove('move');
            }
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../assets/scss/general.scss';



.header {
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
        .wrapper {
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0,0,0,0.6);
            width: 110%;
            height: 100vh;
            display: flex;
            transition: all .3s ease-out;
            transform: translate(-100%, 0);
            visibility: hidden;
            .menu {
                box-sizing: border-box;
                background: $background;
                padding-top: 13%;
                padding-left: 13%;
                width: 80%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                ul {
                    order: 3;
                }
                &-search {
                    order: 1;
                }
                &-contacts {
                    margin-top: auto;
                }
            }
        } 

        .wrapper.active {
            transform: translate(0, 0);
            visibility: visible;
        }
        .user {
            display: flex;
            width: 15%;
            img {
                max-width: 100%;
            }
        }

        
}

@media (min-width: $laptop){
.header {
        padding: 2% 5% 2% 5%;
        .logo {
            width: 5vw;
        }

        .user {
            display: flex;
            width: 15%;
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

        .wrapper {
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(0,0,0,0.3);
            width: 110%;
            // height: 100vh;
            display: flex;
            transition: all .3s ease-out;
            transform: translate(-100%, 0);
            visibility: hidden;
            justify-content: flex-start;
            
        } 

        .wrapper.active {
            transform: translate(-20%, 0);
            visibility:visible;
        }
}
}
</style>