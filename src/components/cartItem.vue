<template>
    <div class="container">
        <div class="item">
            <div class="item-img">
                <img src="" alt="">
            </div>
            <div class="item-title">
                <h3>{{info?.title}}</h3>
                <p>{{info?.description}}</p>
            </div>
            <div class="item-info">
                <div class="item-info--color">
                    <h4>Color:</h4>
                    <span>{{info?.color}}</span>
                </div>
                <div class="item-info--size">
                    <h4>Size:</h4>
                    <span>{{info?.size}}</span>
                </div>
                <div class="item-info--color">
                    <h4>Price:</h4>
                    <span>{{info?.price}}</span>
                </div>
                <div class="item-info--count">
                    <h4>Count</h4>
                    <div class="counter">
                        <button @click="minus()">-</button>
                        <span>{{count}}</span>
                        <button @click="plus()">+</button>
                    </div>
                </div>
                <div class="item-info--all">
                    <h4>Total</h4>
                    <span>${{allSumForItem}}</span>
                </div>
            </div>
            <button @click="del(info.pid)">delete</button>
        </div>
    </div>
</template>

<script>
import {deleteItem} from "../assets/js/database";
export default {
    props: ['info'],
    data(){
        return{
            count: 1,
            price: 3 
        }
    },
    computed: {
        allSumForItem(){
            return this.count * this.price
        }
    },
    methods: {
        minus(){
            return this.count - 1 <= 0 ? this.count = 0 : this.count--
        },
        plus(){
            return this.count++
        },
        async del(pid){
            const uid = await this.$store.dispatch('getUid');
            deleteItem(uid, pid)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';
.container {
    text-align: left;
    .item {
                border-bottom: 1px solid $gray;
                padding-bottom: 10%;
        &-img {
            width: 30%;
            background: red;
            margin-bottom: 7%;
        }
        &-title{
            margin-bottom: 7%;
            h3{
                font-size: 18px;
                color: #4a4a4a;
                font-weight: 500;
            }
            p{
                font-size: 14px;
                font-weight: 300;
                color: #4a4a4a;
            }
        }
        &-info {
            div{
                display: flex;
                margin-bottom: 5%;
                &:last-child{
                    margin-bottom: 0;
                }
                h4, span {
                    font-size: 14px;
                    font-weight: 300;
                    color: #4a4a4a;
                    text-transform: uppercase;
                }
                h4{
                    width: 15%;
                    margin-right: 5%;
                }
            }
            &--count {
                .counter{
                    flex-grow: 0;
                    border: 2px solid $black;
                    display: flex;
                    justify-content: space-between;
                    width: 15vw;
                    padding: 1% 1%;
                    border-radius: 5px;
                    button {
                        border: none;
                        background: none;
                        flex-grow: 2;
                    }
                }
            }
        }

    }
}

@media(min-width: $laptop){
    .container {
    .item {
        &-img {
            width: 20%;
            margin-bottom: 4%;
        }
        &-title{
            margin-bottom: 4%;
        }
        &-info {
            div{
                margin-bottom: 4%;
                flex-grow: 2;
            }
            &--count {
                .counter{
                    padding: 0.5%;
                    width: 10vw;
                }
            }
        }

    }
}
}

@media (min-width: $desktop){
    .container {
    .item {
        position: relative;
        &:first-child{
            border-top: 1px solid $gray;
        }
        border-bottom: 1px solid $gray;
        display: flex;
        justify-content: space-between;
        padding: 3% 0;
        &-img {
            width: 10%;
            margin-bottom: 0;
        }
        &-title{
            margin-bottom: 0;
            flex-grow: 1.5;
            text-align: center;
        }
        &-info {
            display: flex;
            flex-grow: 2;
            justify-content: space-between;
            align-items: baseline;
            div{
                flex-direction: column;
                margin-bottom: 0;
                width: 20%;
                &:last-child{
                    margin-bottom: 0;
                }
                h4{
                    width: fit-content;
                   position: absolute;
                   top: 0;
                   transform: translateY(-110%);
                   margin: 0;
                }
            }
            &--count {
               
                .counter{
                    width: 90%;
                    flex-direction: row;
                    align-items: center;
                }
            }
        }

    }
}
}
</style>