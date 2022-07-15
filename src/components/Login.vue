<template>
    <div class="container">
        <div class="login" v-if="!loged">
                <div class="content">
                    <h3 class="content-title">Войти в кабинет</h3>
                    <form action="#" class="content-form form">
                        <input type="email" placeholder="email" class="form-password" v-model="email">
                        <input type="password" @click="isValid = true" placeholder="password" :class="{'form-password': true, valid: !isValid}" v-model="password">
                        <button type="submit" @click.prevent="login()" class="form-button">войти</button>
                        <router-link to="/registration">
                            регистрация
                        </router-link>
                    </form>
                </div>
        </div>
        <div class="loged" v-if="loged">
            <div class="loged-icon"></div>
            <div class="loged-info">
                <div class="loged-info--name">
                    <h3>Имя </h3>
                    <p>{{name}}</p>
                </div>
                <div class="loged-info--email">
                    <h3>Почта</h3>
                    <p>{{userMail}}</p>
                </div>
            </div>
            <button type="submit" @click.prevent="logout()" class="loged-button" v-if="loged">выйти</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            email: '',
            password: '',
            isValid: true,
        }
    },
    methods: {
        login(){
            return new Promise((res, rej) => {
                return this.password.length >= 6 ? res() : rej(new Error('shortPassword')) 
            })
            .then(() => {
                const data = { email: this.email, password: this.password}
                this.$store.dispatch('login', data)
                .then(() => this.$router.push('/')) 
            },
            (e) => {
                this.isValid = false
                this.$store.commit('stateError', e.message)
            })
               
        },
        async logout(){
            await this.$store.dispatch('logout')
        },
    },
    computed: {
        loged(){
            return this.$store.state.user
        },
        name(){
            return this.$store.state.user.displayName
        },
        userMail(){
            return this.$store.state.user.email
        }
    },
    
}
</script>


<style lang="scss" scoped>
@import '../assets/scss/general.scss';
    .container{
        padding-top: 12vw;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .login {
            padding: 7% 4%;
            border: 2px solid $green;
            border-radius: 5px;
            width: 50%;
            background: $white;
            .content {
                text-align: center;
                &-title{ 
                    margin-bottom: 10%;;
                }
                .form {
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    &-button {
                        width: fit-content;
                        background: $green;
                        border: none;
                        padding: 4% 6%;
                        border-radius: 5px;
                        color: white;
                    }
                    input {
                        margin-bottom: 7%;
                        border: none;
                        border: 1px solid rgb(139, 139, 247);
                        padding: 4% 6%;
                        max-width: 100%;
                        border-radius: 5px;
                    }
                    input.valid {
                    border: 2px solid $red;
                    }
                }
            }
        }
        .loged {
            width: 70%;
            background: $white;
            border-radius: 5px;
            padding: 5%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            &-icon {
                width: 30%;
                max-height: 60px;
                @include background;
                align-self: stretch;
                background-image: url('../assets/img/user.png');
            }
            &-info{
                flex-grow: 2;
                &--name, &--email {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10%;
                border-bottom: 1px solid $black;
                    p {
                        color: $black;
                        font-style: italic;
                    }
                }
                &--email {
                        margin-bottom: 0;
                }
            }
            
            &-button {
                margin: auto;
                margin-top: 10%;
                @include button;
            }
        }
    }
    @media(min-width: $laptop){
        .container{
        padding-top: 8vw;
        height: 40vh;
        .login {
            padding: 2% 2%;
            width: 30%;
            background: $white;
        }
        .loged {
            width: 50%;
            background: $white;
            align-items: center;
            &-icon {
                width: 30%;
                min-height: 40px;
                align-self: center;
                @include background;
                background-image: url('../assets/img/user.png');
                background-position: left;
            }
            &-info{
                width: 70%;
            }
            
            &-button {
                margin: auto;
                margin-top: 10%;
                @include button;
            }
        }
    }
    }
    @media (min-width: $desktop){
        .container{
        padding-top: 2vw;
        height: 60vh;
        .login {
            padding: 2% 2%;
            width: 20%;
            background: $white;
        }
        .loged {
            width: 30%;
            padding: 2%;
            &-icon {
                min-height: 70px;
            }
        }
    }
    }
</style>