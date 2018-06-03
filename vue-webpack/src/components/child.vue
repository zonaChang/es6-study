<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>
      <span>{{num}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "child",
    data (){
      return {
        num:0
      }
    },
    methods:{
      increment: function (){
        this.num ++;
      },
      decrement: function (){
        this.num --;
      }
    }
  }
</script>

<style scoped>

</style>
