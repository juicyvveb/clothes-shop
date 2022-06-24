<template>
    <div class="features">
        <ul class="features-list">
            <li class="features-list--item item-payment">
                <div class="img"><div class="payment"></div></div>
                <p class="text"><span>Fast Secure pauments</span></p>
            </li>
            <li class="features-list--item">
                <div class="img"><div class="premium"></div></div>
                <p  class="text"><span>Premium Products</span></p>
            </li>
            <li class="features-list--item">
                <div class="img"><div class="delivery"></div></div>
                <p class="text"><span>Free Delivery</span></p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';
// fill="#4a4a4a"
.features {
    padding: 4%;
    &-list{
        &--item {
            display: flex;
            height: 147px;
            background: $white;
            margin-bottom: 4%;
            .img{
                width: 50%;
                padding: 3%;
                box-sizing: border-box;
                    div {
                        width: 100%;
                        height: 100%;
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                    .payment{
                    background-image: url('../assets/img/icon_1.svg');
                    }
                    .premium{
                    background-image: url('../assets/img/icon_2b.svg');
                    }
                    .delivery{
                    background-image: url('../assets/img/icon_3.svg');
                    }
            }
            .text{
                flex-grow: 2;
                padding: 5%;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                span{
                    font-size: 24px;
                    color: $black;
                    font-weight: bold;
                    text-align: center;
                }
               
            }
            
        }
    }
}

@media(min-width: $laptop){
    .features {
    padding-left: 6%;
    padding-right: 6%;
    &-list{
        &--item {
            height: 127px;
            .img{
                    div {
                       
                    }
                   
            }
            .text{
                span{
                    font-size: 28px;
                    color: $black;
                    font-weight: bold;
                    text-align: left;
                }
               
            }
            
        }
    }
    }
}

@media(min-width: $desktop){
    .features {
    padding-left: 19%;
    padding-right: 19%;
    &-list{
        display: flex;
        &--item {
            cursor: pointer;
            .img{
                    div {
                       
                    }
                   
            }
            .text{
                span{
                    font-size: 28px;
                    color: $black;
                    font-weight: bold;
                    text-align: left;
                }
               
            }
            
        }
        &--item:hover{
            background: $green;
            transform: scale(1.1);
            .text {
                span{
                    color: white;
                }
            }
        }
        // .item-payment .img .payment{
        //     background-image: url('../assets/img/icon_1b.svg');
        // }
        // .item-payment .img .premium{
        //     background-image: url('../assets/img/icon_2.svg');
        // }
        // .item-payment .img .delivery{
        //     background-image: url('../assets/img/icon_3b.svg');
        // }
        }
    }
}
</style>