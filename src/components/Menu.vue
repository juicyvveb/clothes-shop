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
               <Search/>
    </div>
    </div>
</template>

<script>
import emitter from 'tiny-emitter/instance';
import Search from './Search.vue';
import touchFn from '../assets/js/touch';

export default {
    data(){
        return {
            isOpen: false,
        }
    },
    components: {
        Search,
    },
    mounted(){
        emitter.on('openMenu', this.openMenu);
    },
    methods:{
        closeMenu(){
            this.isOpen = false;
            document.querySelector('.content').classList.remove('move')
        },
        openMenu(){
            return new Promise(res => {
                this.isOpen = true;
                document.querySelector('.content').classList.add('move');
                res()
            })
            .then(() => {
                touchFn(['.wrapper'], this.closeMenu)
            })
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
                &-contacts {
                    margin-top: auto;
                }
            }
        } 

        .wrapper.open {
            transform: translateX(0)
        }
@media(min-width: $laptop){
    .wrapper {
        .menu {
            width: 35%;
            }
        .search-input{
            display: none;
            }
    } 
}

@media (min-width: $desktop) {
    .wrapper {
        display: none;
    }
    .nav {
        
        .wrapper {
            width: auto;
            min-width: 30%;
            display: flex;
            transform: none;
            height: auto;
            position: relative;
            background: red;
            .menu {
                padding: 0;
                background: yellow;
                flex-direction: row;
                &-contacts{ display: none};
                &-list{
                    display: flex;
                    flex-direction: row;
                    li {
                        box-sizing: border-box;
                        cursor: pointer;
                        padding: 0;
                        transition: all 0.3s ease-in;
                        word-break: normal;
                        &:hover{
                            background: red;
                            font-size: 0.5rem;
                        }   
                    }
                }
            }
        }
    }
}
</style>

