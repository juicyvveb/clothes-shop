<template>
        <div 
            :class="{open : isOpen, wrapper: true}" 
            @click.self="closeMenu($event)">
            <div  class="menu">
                <ul class="menu-list">
                    <router-link v-for="(link, i) in links"
                    :to="`/art/${link}`" 
                    :key="i"
                    @click="active = link, closeMenu()"
                    :class="{active: type == link}">{{link}}</router-link>
                </ul>
                <ul class="menu-contacts">
                    <a class="fb" fb="#"></a>
                    <a class="youtube" href="#"></a>
                    <a class="gmail" href="#"></a>
                    <a class="inst" href="#"></a> 
                    <a class="tel" href="#"></a> 
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
            active: '',
            links: ['women', 'men', 'kids', 'home']
        }
    },
    components: {
        Search,
    },
    mounted(){
        emitter.on('openMenu',  this.openMenu);   
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
                res(this.isOpen)
            })
            .then(() => {
                touchFn('.wrapper', this.closeMenu)
            })
        }
    },
    computed: {
        type(){
         return this.$route.params.type
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
                padding-right: 13%;
                width: 80%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                position: relative;
                ul {
                    order: 3;
                }
                &-contacts {
                    width: 100%;
                    margin-top: auto;
                    margin-bottom: 10%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    a {
                        min-width: 7vw;
                        min-height: 7vw;
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                    .youtube {
                        background-image: url('../assets/img/youtube.png');
                    }
                    .gmail {
                        background-image: url('../assets/img/gmail.png');
                    }
                    .fb {
                        background-image: url('../assets/img/fb.png');
                    }
                    .inst {
                        background-image: url('../assets/img/inst.png');
                    }
                    .tel {
                        background-image: url('../assets/img/phone.svg');
                    }
                }
                &-list {
                    padding: 10% 0;
                    display: flex;
                    flex-direction: column;
                    a {
                        text-align: left;
                        font-size: 1.5em;
                        cursor: pointer;
                        color: $black;
                    }
                    a.active{
                        color: $green;
                    }
                }
            }
        } 

        .wrapper.open {
            transform: translateX(0)
        }
@media(min-width: $laptop){
    .wrapper {
        .menu {
            width: 45%;
            padding-top: 7%;
                padding-left: 7%;
        
                &-contacts {
                    a {
                    min-width: 4vw;
                    min-height: 4vw;
                    }
                } 
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
            width: 100%;
            display: flex;
            transform: none;
            height: auto;
            position: relative;
            .menu {
                flex-grow: 2;
                flex-direction: row;
                padding: 0 15%;
                &-contacts{ display: none};
                &-list{
                    display: flex;
                    flex-direction: row;
                    flex-grow: 2;
                    justify-content: space-between;
                    height: 100%;
                    padding: 0;
                    a {
                        box-sizing: border-box;
                        cursor: pointer;
                        padding: 0;
                        transition: all 0.3s ease-in;
                        &:hover{
                            color: $blue;
                        }   
                    }
                }
            }
        }
    }
}
</style>

