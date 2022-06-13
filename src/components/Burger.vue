<template>
    <div 
    @click="active = !active, openMenu()"
    :class="{'active': false, 'burger': true}">
        <span class="burger-item"></span>
    </div>
</template>

<script>
import emitter from 'tiny-emitter/instance';

export default {
    data(){
        return {
            active: false
        }
    },
    methods:{
        openMenu(){
            emitter.emit('openMenu')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/general.scss';

.burger {
    width: 6vw;
    height: 6vw;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: auto;
    margin-left: 5%;
    align-self: flex-start;
    transform: translateY(25%);
    &-item,
    &::before,
    &::after {
        position: absolute;
        width: 100%;
        height: 1vw;
        background-color: black;
        transition: all .2s ease-in-out;  
    }
    &-item {
        top: 50%;
        transform: translate(0, -50%);
    }
    &::before,
    &::after {
       content: '';
       left: 0;
    }
    &::before {
        top: 100%;
        transform: translate(0, -150%);
    }
    &::after {
        top: 0;
        transform: translate(0, 50%);
    }
}

.burger.active {
    span {
       transform: rotate(-45deg) ;
        opacity: 0;
        transition: all .2s ease-in-out;  
    }
    &::before, &::after {
        top: 40%;
        transition: all .2s ease-in-out;  
    }
    &::before {
       transform: rotate(-45deg) ;
    }
    &::after {
        transform: rotate(45deg) ;
    }
}

@media (min-width: $laptop){
    .burger {
    width: 4vw;
    height: 4vw;
    margin-left: 3%;
    transform: translateY(0);
        &-item,
        &::before,
        &::after {
            height: 0.7vw;  
        }
    }
}
</style>