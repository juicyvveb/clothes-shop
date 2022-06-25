<template>
    <div class="footer">
        <div class="container">
            <div class="container-description container-item">
                <div class="logo">
                    <img class="logo-img" src="../assets/logo.png">
                    <h3 class="name">Liitle Closet</h3>
                </div>
                <div class="text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur</p>
                </div>
            </div>
            <div class="container-support container-item">
                <div class="title">
                    <h3>Support</h3>
                </div>
                <div class="list">
                    <ul>
                        <li class="list-item">
                                <input id="custom" type="checkbox">
                                <label for="custom">Customer Servie</label>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero quae voluptatem officia quos veniam?</p>
                        </li>
                        <li class="list-item">
                                <input id="policy" type="checkbox">
                                <label for="policy">Customer Servie</label>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero quae voluptatem officia quos veniam?</p>
                        </li>
                        <li class="list-item">
                                <input id="size" type="checkbox">
                                <label for="size">Customer Servie</label>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero quae voluptatem officia quos veniam?</p>
                        </li>
                        <li class="list-item">
                                <input id="terms" type="checkbox">
                                <label for="terms">Customer Servie</label>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero quae voluptatem officia quos veniam?</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container-media container-item">
                <div class="title">
                    <h3>Social</h3>
                </div>
                <ul class="mediaList">
                    <a class="fb" fb="#"></a>
                    <a class="youtube" href="#"></a>
                    <a class="gmail" href="#"></a>
                    <a class="inst" href="#"></a> 
                </ul>
            </div>
             
        </div>
        <div class="footer-bar">
                <div class="links">
                    <ul>
                        <li><a href="#">women</a></li>
                         <li><a href="#">men</a></li>
                         <li><a href="#">kids</a></li>
                         <li><a href="#">Home Deco</a></li>
                         <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="copyright">
                    <p>Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
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

    .footer{
        background: $white;
        .container {
            padding: 20% 0%;
            padding-bottom: 0;
           &-item {
               padding: 5% 4%;
           }
            &-description {
                .logo {
                    display: flex;
                    align-items: center;
                    width: 100%;
                        img {
                            max-width: 7vw;
                        }
                        .name {
                            flex-grow: 2;
                            font-size: 34.46px;
                            font-weight: 700;
                            text-align: left;
                            padding-left: 3%;
                    }
                }
                .text {
                    font-size: 16px;
                    line-height: 1.5;
                    font-weight: 300;
                    color: #969696;
                    text-align: left;
                    margin-top: 4%;
                }
            }

            &-support {
                padding-bottom: 2%;
                .title {
                   font-size: 34.46px;
                    font-weight: 700;
                    text-align: left;  
                }
                .list {
                    overflow: hidden;
                    margin-top: 3%;
                    text-align: left;
                    height: 200px;
                    max-height: 200px;
                    &-item {
                        padding: 2%;
                        padding-left: 0;
                        position: relative;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: baseline;
                        border-bottom: 1px solid $gray;
                        transition: all .3s ease-in-out;
                        overflow: hidden;
                        &:last-child{
                            border:none;
                        }
                        label {
                            width: 90%;
                            display: flex;
                            color: $gray;
                            &::before{
                                content: '';
                                min-width: 10%;
                                min-height: 9px;
                                background-image: url('../assets/img/arrow.png');
                                background-size: contain;
                                background-position: center;
                                background-repeat: no-repeat;
                                transform: rotate(-90deg);
                                transition: all .3s ease-out;
                            }
                        }
                        input {display: none;}
                        p{ 
                            width: 0;
                            height: 0;
                            opacity: 0;
                            visibility: hidden;
                            top: 0; 
                            left: 0;
                            transition: all .3s ease-out;
                            font-size: 10px;
                        }
                        input:checked~p{
                            opacity: 1; visibility: visible;
                            height: auto;
                            width:100%;
                        }
                        
                        
                        input:checked~label {
                            &::before{
                                transform: rotate(0deg);
                            }
                        }
                    }
                }
            }

            &-media{
                .title {
                   font-size: 34.46px;
                    font-weight: 700;
                    text-align: left;  
                }
                .mediaList {
                    width: 100%;
                    margin-top: 5%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    a {
                        min-width: 7vw;
                        min-height: 7vw;
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;
                        margin-right: 5%;
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
                }
            }
        }
        &-bar{
                padding-top: 10%;
                padding-bottom: 10%;
                border-top: 2px solid $gray;
                margin-top: 10%;
                .links{
                    width: 100%;
                    padding: 0 5%;
                    ul {
                       display: flex;
                       width: 100%; 
                       justify-content: space-between;
                       li {
                           a {
                               color: $black;
                               text-decoration: none;
                           }
                       }
                    }
                } 
                .copyright {
                    margin-top: 5%;
                    color: #969696;
                    font-weight: 300;
                    font-size: 14px;
                }
            }
    }

    @media(min-width: $laptop){
      .footer{
          .container{
              padding-top: 7%;
              &-item{
                  padding: 4% 6%;
              }
              &-media{
                  padding-bottom: 0;
                  .mediaList {
                    margin-top: 3%;
                    a {
                        min-width: 5vw;
                        min-height: 5vw;
                    }
                }
              }
                
          }
          &-bar{
                  padding-top: 1%;
                  padding-bottom: 1%;
                  margin-top: 5%;
                  .links{
                      padding: 0 28%;
                  }
                  .copyright{
                      margin-top: 1%;
                  }
              } 
            }  
    }

    @media(min-width: $desktop){
      .footer{
        .container {
            padding: 0 18%;
            display: flex;
            flex-wrap: wrap;
           &-item {
               padding: 2% 2%;
               max-width: 33%;
               flex-grow: 2;
           }
            &-description {
                .logo {
                        img {
                            max-width: 3vw;
                        }
                }
                
            }

            &-support {
                
                .list {
                    margin-top: 3%;
                    text-align: left;
                    height: 250px;
                    max-height: 250px;
                    &-item {
                        padding: 5%;
                    }
                }
            }

            &-media{
                
                .mediaList {
                    width: 100%;
                    margin-top: 5%;
                    
                    a {
                        min-width: 2vw;
                        min-height: 2vw;
                    }
                }
            }
            
        }
        &-bar{  
                padding: 1% 18% 1% 18%;
                margin-top: 0%;
                display: flex;
                flex-direction: row-reverse;
                align-items: flex-start;
                justify-content: space-between;
                .links{
                    padding: 0 0;
                    width: auto;
                    flex-grow: 2;
                    ul {
                        
                    }
                } 
                .copyright {
                    text-align: left;
                    flex-grow: 2;
                    margin: 0;
                }
            }
    }  
    }
</style>