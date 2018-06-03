<template>
  <div>
    <p>父子参数互相影响</p>
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
    name: "each2Data",
    data (){
      return {
        num:0
      }
    },
    methods:{
      increment: function (){
      //this.$emit 传递参数给父组件， incre， 父组件上定义的事件
        this.$emit("incre");
      },
      decrement: function (){
        this.$emit("decre");
      }
    }
  }
</script>

<style scoped>

</style>
