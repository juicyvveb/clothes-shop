<template>
        <div 
        :class="{open : isOpen, wrapper: true}" 
        @click.self="closeMenu($event)">
            <div  class="menu">
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
                <Teleport to=".header">
                    <form class="menu-search search-input">
                        <input  id="search">
                        <button></button>
                    </form>
                </Teleport>
                <Header/>
    </div>
    </div>
</template>

<script>
import emitter from 'tiny-emitter/instance';

export default {
    data(){
        return {
            isOpen: false,
        }
    },
    components: {
        Header: () => import ('./Header.vue')
    },
    mounted(){
        emitter.on('openMenu', this.openMenu)
    },
    methods:{
        closeMenu(){
            this.isOpen = false;
            document.querySelector('.content').classList.remove('move')
        },
        openMenu(){
            this.isOpen = true;
            document.querySelector('.content').classList.add('move')
        }
    }

}
</script>
<style lang="scss" scoped>
@import '../assets/scss/general.scss';


  
     .wrapper {
        z-index: 5;
             position: fixed;
            top: 0;
            left: 0;
            background: rgba(0,0,0,0.6);
            width: 110%;
            height: 100vh;
            display: flex;
            transition: all .3s ease-out;
            transform: translate(-100%, 0);
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

        } 

        .wrapper.open {
            transform: translateX(0)
        }
</style>

