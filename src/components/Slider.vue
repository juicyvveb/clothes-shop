<template>
    <div class="wrapper">
        <div class="slider">
            <h3>{{active}}</h3>
            <button class="slider-button slider-button--prev" @click="prev()">prev</button>
            <button class="slider-button slider-button--next" @click="next()">next</button>
           <Transition name="slide">
                <div class="slider-item" v-if="key(1) == active">
                <h3 class="slider-item--text">
                    Popular somer wear {{key(1)}}
                </h3>
                <div class="slider-item--images">
                    <img src="../assets/img/product_2.jpg" alt="" class="slider-item--images---item">
                    <img src="../assets/img/product_2.jpg" alt="" class="slider-item--images---item">
                    <img src="../assets/img/product_2.jpg" alt="" class="slider-item--images---item">
                </div>      
             </div>
           </Transition>
                       <Transition name="slide">

            <div class="slider-item" v-if="key(2) == active">
                <h3 class="slider-item--text">
                    Popular somer wear
                </h3>
                <div class="slider-item--images">
                    <img src="../assets/img/product_3.jpg" alt="" class="slider-item--images---item">
                    <img src="../assets/img/product_1.jpg" alt="" class="slider-item--images---item">
                    <img src="../assets/img/product_2.jpg" alt="" class="slider-item--images---item">
                </div>      
            </div>
            </Transition>
            <Transition name="slide">
                    <div class="slider-item" v-if="key(3) == active">
                        <h3 class="slider-item--text">
                            Popular somer wear 
                        </h3>
                        <div class="slider-item--images">
                            <img src="../assets/img/product_1.jpg" alt="" class="slider-item--images---item">
                            <img src="../assets/img/product_2.jpg" alt="" class="slider-item--images---item">
                            <img src="../assets/img/product_3.jpg" alt="" class="slider-item--images---item">
                        </div>      
                    </div>
            </Transition>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active: 1,
        }
    },
   methods: {
        key(num){
            return num
        },
        next(){
            if(this.active  + 1 > 3){
                this.active = 1;
            }else{
                this.active++
            }
        },
        prev(){
             if(this.active - 1 < 1){
                this.active = 3;
            }else{
                this.active--
            }
        }
   }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        padding-top: 10%;
        width: 100%;
        background: rgb(246, 180, 58);
        display: flex;
        justify-content: center;
        background-image: url('../assets/img/home.jpg');
        .slider{
            width: 80%;
            display: flex;
            background: rgb(114, 239, 114);
            &-button {
                align-self: center;
            }
            &-button--next {
                order: 3;
            }
            &-item {
                width: 100%;
                background: rgb(244, 102, 102);
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                &--images{
                    display: flex;
                    justify-content: space-between;
                    margin-top: 5vw;
                    background: rgb(103, 103, 238);
                    align-items: flex-end;
                    padding: 5% 10%;
                    img{
                        max-width: 30%;
                        &:nth-child(2n+1){
                            max-width: 25%;
                        }
                    }
                }
            }
        }
    }


  

</style>