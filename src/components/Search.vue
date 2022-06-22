<template>
     <form class="search-input">
                        <input  id="search">
                        <button></button>
    </form>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import '../assets/scss/general.scss';
.search-input {
    order: 1;
    width: 80%;
    background: white;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    border: 1px solid black;
    input {
        width: 80%;
        max-height: 100%;
        box-sizing: border-box;
        border: none;
        padding: 4% 0% 4% 0%;
    }
    button {
        width: 4vw;
        min-height: 4vw;
        background-size: contain;
        border: none;
        background-position: center;
        background-color: rgba(0,0,0,0);
        background-image: url('../assets/img/search.png');
        background-repeat: no-repeat;
    }
}

@media (min-width: $laptop) {
    .search-input {
        input {
            outline: none;
            padding-left: 10%;
        }
        button {
            width: 2.5vw;
            min-height: 2.5vw;
            cursor: pointer;
        }
    }
}
@media (min-width: $desktop) {
    .search-input {
        button {
            width: 1.5vw;
            min-height: 1.5vw;
        }
    }
}

</style>