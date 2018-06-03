<template>
  <div>
    <p>父组件传递参数到子组件</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>
      <span>{{num}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    props:["num"],
    name: "Parent2ChildData",
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
