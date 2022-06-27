<template>
    <div class="container">
        <h3>{{$route.params.id}}</h3>
        <p>{{productInfo}}</p>
    </div>
</template>

<script>
import getList from '../assets/js/getList';
export default {
    data(){
        return {
            productInfo: '',
        }
    },
    beforeMount(){
       this.getInfo(this.$route.params.id)
    },
   async beforeRouteUpdate(to) {
    this.getInfo(to)
  },
  methods: {
    getInfo(route){
        return getList.then((answer) => {
        console.log(getList)
        this.productInfo = answer.filter(el => el.id == route)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
    .container {
        padding-top: 15vw;
    }
</style>