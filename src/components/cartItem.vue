<template>
    <div class="container">
        <div class="item">
            <div class="item-img">
                <img :src="require(`../assets/img/${info?.img}.jpg`)" class="slider-item--images---item">                
            </div>
            <div class="item-title">
                <h3>{{info?.title}} ID: {{info.id}}</h3>
                <p>{{info?.description}}</p>
            </div>
            <div class="item-info">
                <div class="item-info--color">
                    <h4>Color:</h4>
                    <span>{{info?.color}}</span>
                </div>
                <div class="item-info--size">
                    <h4>Size:</h4>
                    <div class="list">
                        <p v-for="(size, i) in info.size" :key="i">{{size}}<span class="comma">,</span></p>
                    </div>
                    <p v-if="!info.size">не выбрано</p>
                </div>
                <div class="item-info--color">
                    <h4>Price:</h4>
                    <span>{{info?.price}}</span>
                </div>
                <div class="item-info--count">
                    <h4>Count</h4>
                    <div class="counter">
                        <button @click.prevent="minus(info.pid, info.id)">-</button>
                        <span>{{info?.count}}</span>
                        <button @click.prevent="plus(info.pid, info.id)">+</button>
                    </div>
                </div>
                <div class="item-info--all">
                    <h4>Total</h4>
                    <span>${{allSumForItem}}</span>
                </div>
            </div>
            <div class="item-button">
                <button class="delbutton" @click.prevent="del(info.pid, info.id)"></button>
            </div>
        </div>
    </div>
</template>

<script>
import {deleteItem, plusItem} from "../assets/js/database";
export default {
    props: ['info'],
    data(){
        return{
            count: this.info.count
        }
    },
    computed: {
        allSumForItem(){
            return this.count * this.price
        },
        price(){
            return this.info.price
        },
    },
    methods: {
        async del(pid){
            const uid = await this.$store.dispatch('getUid');
            deleteItem(uid, pid)
        },
        async plus(pid, id){
            const uid = await this.$store.dispatch('getUid');
            plusItem(uid, pid, id, ++this.count)
        },
        async minus(pid, id){
            const uid = await this.$store.dispatch('getUid');
            return this.count - 1 <= 0 ? this.del(this.info.pid) : plusItem(uid, pid, id, --this.count)
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';
.container {
    text-align: left;
    .item {
        position: relative;
        border-bottom: 1px solid $gray;
        padding-bottom: 10%;
        &-img {
            width: 30%;
            margin-bottom: 7%;
            img{
                width: 100%;
            }
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
            &--size {
                align-items: center;
                p {
                    font-style: italic;
                    font-size: 12px;
                    color: $gray;
                }
                .list{
                    display: flex;
                    align-items: flex-end;
                    p{
                        font-size: 16px;
                        margin-right: 10%;
                    }
                   p:last-child{
                       
                       .comma {
                        display: none;
                       }
                   }
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
        &-button{
            position: absolute;
            top: 0;
            right: 0;
            width: 10vw;
            height: 10vw;
            padding: 1%;
            display: flex;
            align-items: center;
            button {
                cursor: pointer;
                width: 100%;
                height: 100%;
                position: relative;
                background: none;
                border:  none;
                &::before, &::after{
                content: '';
                width: 100%;
                height: 4px;
                display: block;
                background: rgb(245, 72, 72);
                position: absolute;
                top: calc(50% - 2px);
                border-radius: 4px;
                transition: all .3s ease-in-out;
                }
                 &::before{
                     transform: rotate(45deg);
                 }
                 &::after{
                     transform: rotate(-45deg);
                }
                &:hover {
                        &::after, &::before {background: rgb(187, 18, 18);}
                    }
            }
        }
    }
}

@media(min-width: $laptop){
    .container {
    .item {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 5%;
        &-img {
            width: 20%;
            margin-bottom: 4%;
        }
        &-title{
            margin-bottom: 4%;
            width: 100%;
            order: 4;
        }
        &-info {
            flex-grow: 2;
            padding-left: 5%;
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
        &-button{
            width: 5vw;
            height: 5vw;
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
            order: 0;
            width: auto;
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
        &-button{
            top: 0;
            right: 0;
            width: 3vw;
            height: 3vw;
            transform: translate(20%, -20%);
        }
    }
}
}
</style>