<template>
    <div class="container">
        <div class="login">
                <div class="content">
                    <h3 class="content-title">Войти в кабинет</h3>
                    <form action="#" class="content-form form">
                        <input type="text" class="form-login" v-model="login">
                        <input type="text" class="form-password" v-model="password">
                        <button type="submit" class="form-button">LOGIN</button>
                    </form>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
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
                }
            }
        }
    }

    @media (min-width: $desktop){
        .container{
        padding-top: 6vw;
        min-height: 30vh;
        .login {
            padding: 2% 4%;
            width: 20%;
        }
    }
    }
</style>