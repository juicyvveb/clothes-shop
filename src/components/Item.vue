<template>
    <div class="item" >
        <router-link :to="`/product/${info.id}`"> 
            <div class="item-images">
                <img :src="require(`../assets/img/${info?.img}.jpg`)" class="slider-item--images---item">                
            </div>
        </router-link>
        <div class="item-info">
                            <div class="description">
                                <h3 class="description-text">
                                    Cool clothing with brown strioes
                                </h3>
                                <p class="description-category">
                                    type: {{info.type}}
                                </p>
                                <p class="description-category">
                                    color: {{info.color}}
                                </p>
                            </div>
                            <div class="rate">
                                <h4 class="rate--starks">
                                    <span v-for="i in 5" :key="i">@</span>            
                                </h4>
                                <p class="rate--price">
                                    {{info.price}} $
                                </p>
                            </div>
                            <div class="about">
                                <div class="size">
                                    <h3>Select size</h3>
                                    <div 
                                    :class="['size-checkbox', forget ? 'forget' : null, isAdded().length ? 'disabled' : null]">
                                        <input  v-for="(size, i) in sizes"  :key="i" :value="size" :id="info.id+size" type="checkbox" v-model="sizeValue">
                                        <label  v-for="(size, i) in sizes" :key="i" :for="info.id+size" :class="{active: sizeValue.indexOf(size) >= 0, selected: isAdded().indexOf(size) >= 0}">
                                            <span>{{size}}</span>
                                        </label>
                                    </div>
                                    <p class="size-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit similique laudantium, asperiores itaque incidunt enim autem iste qui libero, beatae ea obcaecati quibusdam nisi porro inventore soluta quam doloremque!
                                    </p>
                                </div>
                            </div>
                            <div class="buttons">
                                <div :class="{'disabled' : isAdded().length, 'buttons-buy': true}" @click.prevent="addToCart(info.id)">
                                    <button type="button" :disabled="isAdded().length"></button>
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
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
            forget: false,        }
    },  
    methods: {
        addToCart(productId){
            const size = (uid) => {
                if(!this.sizeValue.length){
                    return new Promise((res) => {
                    this.forget = true;
                    setTimeout(() => {
                        res(null)
                    }, 500)
                    })
                    .then(res => this.forget = res)
                }
                return addProduct(uid, productId, this.sizeValue)
                .then(res => res,
                () => this.$store.commit('stateError', 'no added'))
            }
            
            //сперва проверка на пользователя
            //затем проверка на выбранный размер 
            return this.$store.dispatch('getUid')
            .then(uid => uid ? size(uid) : this.$store.commit('stateError', 'login'))
        },
        isAdded(){
            const cart =  this.$store.getters.cart;
            return Object.values(cart).filter(el => el.id == this.info.id)[0]?.size || []
        }
    },
    computed: {
        cart(){
            return this.$store.getters.cart
        },
    }
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
                            &-category, &-text {
                                color: $black;
                            }
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
                            p{
                                color: $black;
                                font-weight: bold;
                            }
                        }
                        .buttons {
                            width: 100%;
                            display: flex;
                            min-height: 5vh;
                            background: $black;
                            &-like, &-buy {
                                flex-grow: 2;
                                transition: all .3s ease-out;
                                box-sizing: border-box;
                                padding: 2% 0; 
                                border: none; 
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
                                    button{
                                        &::before{  
                                        background-image: url('../assets/img/cart.svg');
                                        }
                                    }
                            }
                            &-buy.disabled {
                                background: $green;
                                    button{
                                        &::before{  
                                        content: 'Добавлено';
                                        width: 100%;
                                        font-size: x-large;
                                        color: white;
                                        background-image: none;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                        }
                                    }
                            }
                        }
                        .disabled {
                            pointer-events: none;
                        }
                        .about {
                            padding: 4%;
                            display: flex;
                            color: #4a4a4a;
                            width: 100%;
                            .size {
                                width: 100%;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: space-between;
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
                                    transition: all .3s ease;
                                    span {
                                        font-size: 100%;
                                    }
                                }
                                label.active{
                                    border-color:$green;
                                }
                                label.selected{
                                    border-color:$green;
                                }
                                }
                                &-checkbox.forget{
                                    label{
                                        border-color: $red;
                                        box-shadow: 0px 0px 4px 4px $red;
                                    }
                                }
                            }
                            p {
                                display: none;
                            }
                    }
                }
    }
  
    //product page
     @media (min-width: $laptop){
        .item {
            &-info{
                .buttons {
                    min-height: 4vh;
                }
                    .about{
                        .size {
                                
                                
                                &-checkbox {
                                    width: 80%;
                                
                                label {
                                    width: 4vw;
                                    height: 4vw;
                                }
                            }
                            }
                    }    
                }
    }
    }
    
      @media (min-width: $desktop){
        .item {
            &-info{
                    .buttons {
                            min-height: 2vw;
                            &-like, &-buy {
                                
                                padding: 1% 0; 
                                transition: all .3s ease-in-out;
                                &:hover {
                                    padding: 1.5%;
                                    background-color: $green;
                                }
                            }
                        }
                    .about{
                        .size {
                                
                                
                                &-checkbox {
                                    width: 80%;
                                
                                label {
                                    width: 2vw;
                                    height: 2vw;
                                    &:hover {
                                        border-color: $blue;
                                    }
                                }
                            }
                            }
                    }    
                }
    }
    }



    //отдельно карточка товара
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
                    
                    button {
                        min-height: 40px;
                    }
                }
                .about{
                    padding: 0;
                    .size{
                        p {
                            display: block;
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
                    width: 50%;
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