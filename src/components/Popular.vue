<template>
    <div class="container">
        <div class="popular">
            <div class="popular-item trends">
                <div class="popular-item--content">
                    <div class="boxImg box">
                        <a href="#">
                            <div></div>
                        </a>
                    </div>
                    <div class="boxTitle box">
                        <h3>Trendsetter COllection</h3>
                    </div>
                </div>
            </div>
            <div class="popular-item choice">
                <div class="popular-item--content">
                    <div class="boxImg box">
                        <a href="#">
                            <div></div>
                        </a>
                    </div>
                    <div class="boxTitle box">
                        <h3>Trendsetter COllection</h3>
                    </div>
                </div>
            </div>
            <div class="popular-item choice2">
                <div class="popular-item--content">
                    <div class="boxImg box">
                        <a href="#">
                            <div></div>
                        </a>
                    </div>
                    <div class="boxTitle box">
                        <h3>Trendsetter COllection</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';
    .container{
       padding: 4%;
       .popular {
        width: 100%;
        height: auto;
        &-item {
            width: 100%;
            height: 55vw;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin-bottom: 4%;
            &--content {
                height: 100%;
                display: flex;
                align-items: center;
                padding: 8%;
                .boxImg{
                    height: 100%;
                    a {
                        width: 100%;
                        height: 100%;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        display: flex;
                        justify-content: flex-end;
                        div {
                            width: 20%;
                            height: 20%;
                            background-color: $green;
                            align-self: center;
                            transform: translateX(50%);
                            position: relative;
                            &::after, &::before{
                                content: "";
                                width: 50%;
                                height:10%;
                                background: white;
                                border-radius: 15px;
                                position: absolute;
                                top: 47%;
                                left: 0;
                            }
                            &::before {
                                transform: translate(50%, -100%) rotate(30deg);
                            }
                            &::after {
                                transform: translate(50%, 100%) rotate(-30deg);
                            }
                        }
                    }
                }
                .boxTitle{
                    text-align: right;
                    padding-left: 20%;
                    h3{
                        font-size: 26px;
                        font-weight: bold;
                        color: white;
                    }
                }
                .box{
                    width: 50%;
                }
            }
        }
        .trends {
            background-image: url('../assets/img/box_1.jpg');
            a {
                background-image: url('../assets/img/box_1_img.jpg');
            }
        }
        .choice {
            background-image: url('../assets/img/box_2.jpg');
            a {
                background-image: url('../assets/img/box_2_img.jpg');
            }
        }
        .choice2 {
            background-image: url('../assets/img/box_3.jpg');
            a {
                background-image: url('../assets/img/box_3_img.jpg');
            }
        }
       }
    }


    @media (min-width: $laptop) {
       .container{
       padding: 6%;
       .popular {
        &-item {
            height: 35vw;
            margin-bottom: 6%;
            &--content {
                .boxImg{
                    a {
                        
                        div {
                            width: 15%;
                            height: 28%;
                            &::after, &::before{
                               
                            }
                            
                        }
                    }
                }
            }
        }
       }
    }
    }

    @media (min-width: $desktop) {
       .container{
       padding: 6% 0%;
       .popular {
        display: flex;
        justify-content: space-between;
        &-item {
            width: 32%;
            height: 17vw;
            margin-bottom: 0;
            &--content {
                
                .boxImg{
                    a {
                       
                        div {
                            width: 18%;
                            height: 20%;
                        }
                    }
                }
            }
        }
       }
    } 
    }
</style>