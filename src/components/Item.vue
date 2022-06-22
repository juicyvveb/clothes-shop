<template>
    <div class="item">
        <div class="item-images">
            <img src="../assets/img/product_3.jpg" class="slider-item--images---item">                
            <!-- <img :src="require(`../assets/img/product_${i + 1}.jpg`)" class="slider-item--images---item">                 -->
        </div>
         <div class="item-info">
                            <div class="description">
                                <h3 class="description-text">
                                    Cool clothing with brown strioes
                                </h3>
                                <p class="description-category">
                                    in category
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
                            <div class="buttons">
                                <div class="buttons-like">
                                    <button type="button"></button>
                                </div>
                                <div class="buttons-buy">
                                    <button type="button"></button>
                                </div>
                            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    
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
                        margin-top: 5vw;
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
                            flex-basis: 100%;
                            display: flex;
                            height: 5vh;
                            &-like, &-buy {
                                flex-grow: 2;
                                transition: all .3s ease-out;
                                border-top: 1px solid $white;
                                max-width: 50%;
                                box-sizing: border-box;
                                &:hover {
                                    background:rgba(216, 213, 213, 0.5);
                                    padding: 2% 7%;
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
                                        background-size: 60%;
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
                    }
                }

</style>