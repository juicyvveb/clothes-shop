<template>
    <div class="header">
        <div class="logo">
            <img class="logo-img" src="../assets/logo.png">
        </div>
        <Burger/>

        <div class="wrapper active" @click.self="closeMenu($event)">
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
                <form class="menu-search search-input">
                    <input  id="search">
                    <button></button>
                </form>
            </div>
        </div>

        <form class="menu-search search-input">
                    <input  id="search">
                    <button></button>
        </form>

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
                position: relative;
                ul {
                    order: 3;
                }
                &-search {
                    display: block;
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
        .search-input {
                    order: 1;
                    width: 80%;
                    background: white;
                    border-radius: 20px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    overflow: hidden;
                    border: 2px solid black;
                    input {
                        width: 80%;
                        max-height: 100%;
                        box-sizing: border-box;
                        border: none;
                        padding: 4% 0% 4% 0%;
                    }
                    button {
                        width: 4vw;
                        min-height: 4vw;
                        background-size: contain;
                        border: none;
                        background-position: center;
                        background-color: rgba(0,0,0,0);
                        background-image: url('../assets/img/search.png');
                        background-repeat: no-repeat;
                    }
                }
        .search-input {
            display: none;
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

        .search-input {
                    display: flex;
                    order: 3;
                    width: 35%;

                    button {
                        width: 3vw;
                        height: 3vw;
                    }
                }
        
        .wrapper {
            .menu {
                width: 40%;
                &-search {
                    display: none;
                }
            }
        } 
    }
}
</style>