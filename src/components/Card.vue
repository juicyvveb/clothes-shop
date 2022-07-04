<template>
    <div class="container">
        <div class="card">
            <p>
                {{card}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        card(){
            return this.$store.state.card
        }
    },
    watch: {
       card(){
        
       }
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding-top: 12vw;
}
</style>