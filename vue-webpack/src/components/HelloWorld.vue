<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 直接调用子组件 -->
    <!-- <Child></Child> -->

    <!-- 传递参数给子组件 -->
    <!-- <Parent2ChildData num="10"></Parent2ChildData> -->
    <!-- <Parent2ChildData v-bind:num="num"></Parent2ChildData>
     -->
     <!-- v-on:incre 自定义事件 -->
    <each2Data v-bind:num="num" v-on:incre="increment" v-on:decre="decrement"></each2Data>
    <p>parent: {{num}}</p>
  </div>
</template>

<script>
  import Child from "./Child";
  import Parent2ChildData from "./Parent2ChildData";
  import each2Data from "./each2Data";

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 20
    }
  },
  methods:{
    increment (){
      this.num ++;
    },
    decrement (){
    this.num --;
    }
  },
  components:{
    Child,
    Parent2ChildData, 
    each2Data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
