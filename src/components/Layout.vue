<template>
    <div class="container" v-if="error" @click.self="close($event)">
            <div class="container-error">
                <div class="container-error--content">
                    <p>{{error}}</p>
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
        close(){
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
    z-index: 50;
    &-error {
        width: 60%;
        background: rgba(53, 54, 54, 0.8);
        position: fixed;
        top: 40vh; 
        left: 20%;
        border-radius: 3px;
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

@media (min-width: $laptop){
    .container {
   
    &-error {
        width: 40%;
        left: 30%;
        &--content {
            padding: 5%;
            .button{
            @include buttonCloseBlock;
                width: 3vw;
                height: 3vw;
            }
        }
    }
}
}

@media (min-width: $desktop){
    .container {
   
    &-error {
        width: 40%;
        left: 30%;
        &--content {
            padding: 5%;
            .button{
            @include buttonCloseBlock;
                width: 2vw;
                height: 2vw;
            }
        }
    }
}
}


</style>