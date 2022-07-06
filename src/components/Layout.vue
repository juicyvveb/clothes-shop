<template>
    <div class="container" v-if="error" @click.self="close($event)">
        <div class="container-error">
            <div class="container-error--content">
                <p>Ошибка: {{error}}</p>
                <div class="button">
                    <button @click.stop="close($event)"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        error(){
            return this.$store.getters.error
        }
    },
    methods:{
        close($event){
            console.log($event.target)
            this.$store.commit('stateError', null)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';

.container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    
    &-error {
        width: 60%;
        background: $black;
        position: absolute;
        top: 45vh; 
        left: 20%;
        border-radius: 5px;
        &--content {
            padding: 5%;
            p {
                font-size: 14px;
                color: $white;
                text-transform: lowercase;
            }
            .button{
            @include buttonCloseBlock;
            }
        }
    }
}
</style>