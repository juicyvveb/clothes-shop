<template>
    <div class="item" >
        <div class="item-images">
            <img :src="require(`../assets/img/${info?.img}.jpg`)" class="slider-item--images---item">                
            <!-- <img :src="require(`../assets/img/${info?.img}.jpg`)" class="slider-item--images---item">                 -->
        </div>
        <div class="item-info">
                            <div class="description">
                                <h3 class="description-text">
                                    Cool clothing with brown strioes
                                </h3>
                                <p class="description-category">
                                    type: {{info.type}}
                                </p>
                            </div>
                            <div class="rate">
                                <h4 class="rate--starks">
                                    <span>@</span>
                                    <span>@</span>
                                    <span>@</span>
                                    <span>@</span>
                                    <span>@</span>             
                                </h4>
                                <p class="rate--price">
                                    $3.99
                                </p>
                            </div>
                            <div class="about">
                                <div class="size">
                                    <h3>Select size</h3>
                                    <div class="size-checkbox">
                                        <input v-for="(size, i) in sizes" :key="i" :value="size" :id="size" type="checkbox" v-model="sizeValue">
                                        <label v-for="(size, i) in sizes" :key="i" :for="size"><span>{{size}}</span></label>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit similique laudantium, asperiores itaque incidunt enim autem iste qui libero, beatae ea obcaecati quibusdam nisi porro inventore soluta quam doloremque!
                                    </p>
                                </div>
                            </div>
                            <div class="buttons">
                                <div class="buttons-like">
                                    <button type="button" @click.prevent="toLocalStorage(info)"></button>
                                </div>
                                <div class="buttons-buy" @click.prevent="addToCart(info.id)">
                                    <button type="button"></button>
                                </div>
                            </div>
                            
        </div>
    </div>
    
</template>

<script>
import {addProduct} from '../assets/js/database';
export default {
    props: ['info'],
    data(){
        return {
            sizeValue: [],
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl']
        }
    },
    methods: {
        toLocalStorage(product){
           if(localStorage.getItem('liked')){
               let arr = JSON.parse(localStorage.getItem('liked'));
               arr.push(product);
               localStorage.setItem('liked', JSON.stringify(arr))
           }
           else {
                let arr = [product];
                localStorage.setItem('liked', JSON.stringify(arr))
           }
        },
        async addToCart(productId){
            const uid = await this.$store.dispatch('getUid')
            addProduct(uid, productId);
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';
    .item {
                width: 50%;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding-top: 5%;
                    &-images{
                        display: flex;
                        justify-content: center;
                        box-sizing: border-box;
                        flex-wrap :wrap;
                        img{
                            width: 100%;
                        }
                    }
                    &-info{
                        background-color: rgba(216, 213, 213, 0.5);
                        color: white;
                        border-top: 3px solid;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: stretch;
                        justify-content: space-between;

                        .description {
                            flex-basis: 60%;
                            text-align: left;
                             display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            padding: 5%;
                            box-sizing: border-box;
                        }
                        .rate{
                            padding: 5%;
                            flex-basis: 40%;
                            text-align: right;
                            display: flex;
                            flex-grow: 2;
                            flex-direction: column;
                            justify-content: space-between;
                            box-sizing: border-box;
                        }
                        .buttons {
                            width: 100%;
                            display: flex;
                            min-height: 5vh;
                            &-like, &-buy {
                                flex-grow: 2;
                                transition: all .3s ease-out;
                                border-top: 1px solid $white;
                                max-width: 50%;
                                box-sizing: border-box;
                                &:hover {
                                    background:rgba(216, 213, 213, 0.5);
                                    padding: 1% 7%;
                                }
                                button{
                                    width: 100%;
                                    height: 100%;
                                    border: none;
                                    background: none;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    &::before{
                                        content: '';
                                        width: 25%;
                                        height: inherit;
                                        background-image: url('../assets/img/heart_2.svg');
                                        background-size: contain;
                                        background-position: center;
                                        background-repeat: no-repeat;
                                    }
                                }
                                
                            }
                            &-buy{
                                    border-left: 1px solid $white;
                                    button{
                                        &::before{
                                        
                                        background-image: url('../assets/img/cart.svg');
                                        
                                        }
                                    }
                            }
                        }

                        .about {
                            display: none;
                        }
                    }
                }
    .catalog {
        .item{
            &-info{
                border: 1px solid $white;
            }
        }
    }


    //product page
    .product{
           .item {
            width: 100%;
            &-info {
                background-color: white;
                border: none;
                flex-direction: column;
                .description {
                    padding-left: 0;
                    padding-right: 0;
                    h3{
                            font-size: 30px;
                            line-height: 1.2;
                            color: #4a4a4a;
                            font-weight: 500;
                            margin-top: 1px;
                    }
                    p {
                        font-size: 18px;
                        color: #969696;
                        font-style: italic;
                        font-weight: 400;
                        color: $gray;
                    }
                }
                .rate {
                    padding-left: 0;
                    padding-right: 0;
                    line-height: 1.2;
                    color: #4a4a4a;
                    font-weight: 500;
                    margin-top: 1px;
                    text-align: left;
                    h4 {
                    font-size: 10px;
                    }
                    p{
                      font-size: 30px;
                    }
                }
                .buttons {
                    margin-top: 10%;
                    &-like, &-buy {
                        border: 1px solid rgb(243, 240, 240);
                    }
                    button {
                        min-height: 40px;
                    }
                }
                .about {
                    display: flex;
                    color: #4a4a4a;
                    .size {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        h3 {
                                font-size: 18px;
                                font-weight: 700;
                                color: #4a4a4a;
                        }
                        p {
                            font-size: 14px;
                            font-weight: 300;
                            color: #969696;
                            line-height: 1.5;
                            text-align: left;
                        }
                        &-checkbox {
                            display: flex;
                            padding: 3% 0;
                            width: 70%;
                            justify-content: space-between;
                            input {
                                display: none;
                            }
                            label {
                                width: 8vw;
                                height: 8vw;
                                padding: 3%;
                                border: 2px solid $black;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                span {
                                    font-size: 100%;
                                }
                            }
                        }
                    }
                }
            }
           } 
    }

    @media (min-width: $laptop){
        .product{
           .item {
            &-info {
                .description, .rate{
                    padding-top: 3%;
                    padding-bottom: 3%;
                    
                }
                .rate {
                    h4{
                         font-size: 20px; 
                    }
                    p {
                        font-size: 42px;
                    }
                }
                .buttons {
                    margin-top: 10%;
                    &-like, &-buy {
                        border: 1px solid rgb(243, 240, 240);
                    }
                    button {
                        min-height: 40px;
                    }
                }
                .about {
                   
                    .size {
                        p {
                            font-size: 18px;
                        }
                        &-checkbox {
                            width: 60%;
                            label {
                                width: 6vw;
                                height: 6vw;
                            }
                        }
                    }
                }
            }
           } 
    }
    }

    @media (min-width: $desktop){
         .product{
           .item {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            &-image {
                width: 50%;
            }
            &-info {
                flex-wrap: nowrap;
                width: 50%;
                .description {
                    padding-top: 0;
                    padding-bottom: 0;
                    justify-content: flex-start;
                    h3{
                            
                    }
                    p {
                        
                    }
                }
                .rate {
                    padding-top: 0;
                    padding-bottom: 0;
                    justify-content: flex-start;
                    h4 {
                    font-size: 10px;
                    }
                    p{
                      font-size: 30px;
                    }
                }
                .buttons {
                    margin-top: 10%;
                    &-like, &-buy {
                        border: 1px solid rgb(243, 240, 240);
                    }
                    button {
                        min-height: 20px;
                    }
                }
                .about {
                    
                    .size {
                        
                        &-checkbox {
                            display: flex;
                            padding: 3% 0;
                            width: 40%;
                            justify-content: space-between;
                            label {
                                width: 2vw;
                                height: 2vw;

                                span {
                                    font-size: 100%;
                                }
                            }
                        }
                    }
                }
            }
           } 
    }
    }
</style>