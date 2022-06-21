<template>
    <div class="wrapper wrapper-slider">
        <h3>{{active}}</h3>
        <div class="slider">
            <button class="slider-button slider-button--prev" @click="prev(), from = 'left'"></button>
            <button class="slider-button slider-button--next" @click="next(), from = 'right'"></button>
                <TransitionGroup  class="slider-body" tag="ul" name="list" >
                    <li :class="['item', from == 'right' ? 'right' : 'left']" v-for="(slide, i) in count" :key="i" v-show="i == active">
                        <h1 class="item-text">
                            Popular somer wear  {{i}}
                        </h1>
                        <div class="item-images">
                            <!-- <img class="icon" :src="require(`../img/${page}.svg`)"> -->
                                <img :src="require(`../assets/img/product_${i + 1}.jpg`)" class="slider-item--images---item">                
                                <img :src="require(`../assets/img/product_${i + 1}.jpg`)" class="slider-item--images---item">                
                                <img :src="require(`../assets/img/product_${i + 1}.jpg`)" class="slider-item--images---item">                
                        </div>  
                        <h1 class="item-text">
                            Popular somer wear  {{i}}
                        </h1>    
                        <h1 class="item-text">
                            Popular somer wear  {{i}}
                        </h1>    
                           
                    </li>
                </TransitionGroup>
        </div>  
        <div class="wrapper-nummers">
            <ul class="wrapper-nummers--list">
                <li :class="['nummers-item', active == i ? 'active' : false]" v-for="(num,i) in count" 
                :key="i"
                @click="active = --i"
                ><span>{{++i}}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
        data(){
            return {
                count: 4,
                active: 0,
                from: false,
            }
        },
        mounted(){
            this.touch()
        },
        methods: {
            prev(){
                console.log('prev')
                this.from = 'right'
                return this.active - 1 < 0 ? this.active = this.count - 1 : this.active--
            },
            next(){
                console.log('next')
                this.from = 'left'
                return this.active + 1 > this.count - 1 ? this.active = 0 : this.active++
            },
            touch(){
                let touchStart, touchEnd;
                let slider = document.querySelector('.wrapper-slider');
                slider.addEventListener('touchstart', (e) => {
                    e.stopPropagation();
                    touchStart = e.changedTouches[0].pageX
                })
                slider.addEventListener('touchend', (e) => {
                    e.stopPropagation();
                    touchEnd = e.changedTouches[0].pageX;
                   return touchStart > touchEnd ? this.next() : 
                        touchStart < touchEnd ? this.prev() : false
                })
            }
        }
        
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';



.wrapper {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url('../assets/img/home.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        overflow: hidden;
        box-sizing: border-box;
        padding-top: 5%;
        .slider{
            width: 90%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            .slider-body{
                max-width: 75%;
                align-items: center;
                display: flex;
                position: relative;
                align-items: center;
                .item {
                width: 100%;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding-top: 5%;
                &-images{
                    display: flex;
                    justify-content: center;
                    margin-top: 5vw;
                    padding: 5% 10%;
                    box-sizing: border-box;
                    flex-wrap :wrap;
                    img{
                        width: 100%;
                        &:nth-child(2n+1){
                            width: 30%;
                            display: none;
                        }
                    }
                }
                }
                
            }
            &-button {
                align-self: center;
                background: none;
                width: 4vw;
                height: 4vw;
                border: 2px solid $white;
                position: relative;
                display: flex;
                justify-content: center;
                transition: all .3s ease-out;
                align-items: center;
                z-index: 10;
                display: none;
                &:hover{
                    border-color: $gold;
                     &:before{
                        color: $gold;
                    }
                }
                &:before{
                    content: '<';
                    width: 50%;
                    padding: 25%;
                    color: $white;
                    font-weight: bold;
                    font-size: 1.5em;
                    line-height: 1rem;
                    transition: all .3s ease-out;
                }
            }
            &-button--next {
                &:before{
                    content: '>';
                }
                order: 3;
            }
        }
        &-nummers{
            display: none;
            width: 40%;
            padding-top: 5%;
                order: 5;
                &--list{
                    display: flex;
                    justify-content: space-between;
                    li{ 
                        min-width: 3vw;
                        min-height: 3vw;
                        border: 2px solid $white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: all .3s ease-out;
                        cursor: pointer;
                        box-sizing: border-box;
                        span {
                            width: 100%;
                            height: 100%;
                            color: $white;
                            opacity: 0.5;
                            transition: all .3s ease-out;
                        }
                    }
                    li.active{
                        border-color: $gold;
                        span {
                            opacity: 1;
                        }
                    }
                }
        }
    }


@media(min-width: $laptop){
.wrapper {
        .slider{
            
            .slider-body{
                max-width: 85%;
                .item {
                
                &-images{
                    padding: 0;
                   align-items: flex-end;
                   justify-content: space-between;
                    img{
                        width: 40%;
                        &:nth-child(2n+1){
                            width: 25%;
                            display: block;
                        }
                    }
                }
            }
            }
            &-button {
                align-self: center;
                display: flex;
            }
            &-button--next {
                order: 3;
            }
            
        }
        &-nummers{
        display: block;
        }
    }
    
}


@media(min-width: $desktop){
.wrapper {
        .slider{
             width: 80%;
            justify-content: space-between;
            .slider-body{
               
                .item {
                    padding: 0 7%;
                &-images{
                    img{
                        width: 30%;
                        &:nth-child(2n+1){
                            width: 25%;
                        }
                    }
                }
            }
            }
             &-button {
                width: 2vw;
                height: 2vw;
            }
            
        }
        &-nummers{
            width: 15%;
                &--list{
                    li{ 
                        min-width: 1.5vw;
                        min-height: 1.5vw;
                    }
                    li.active{
                        border-color: $gold;
                    }
                }
        }
    }
}
    
    

// .list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}


.list-enter-from.right,
.list-leave-to.left {
    opacity: 0;
    transform: translate(-100%, 0);
}
.list-enter-from.left,
.list-leave-to.right {
    opacity: 0;
    transform: translate(100%, 0);
}

.list-leave-active {
  position: absolute;
}
</style>