<template>
  <div >

    <h1>vue-resource demo</h1>
    <button @click="get">get request</button>
    <button @click="post">post request</button>
    <button @click="jsonp">jsonp request</button>
    <br>
    <br>
    {{msg}}
  </div>
</template>

<script>
    import 
    export default {
      data:{
        msg:""
      },
      methods:{
        get(){
          //vue-resource 已经挂在到Vue的实例上，所以可以直接使用this调用
          // arg0: 请求资源路径
          // arg1: 操作属性
          this.$http.get("/package.json",{
            // 请求参数
            params:{
              name:"Carl"
            },
            //header 参数
            headers:{
              toke:"token-value"
            }
            //then调用完成后的回调
            // arg0:invoke success
            // arg1:invoke fail
          }).then(res=>{
            //获取响应结果存放在res.data和res.body中， 两个值是一样的。
            this.msg = res.data;

          }, error=>{
            // invoke fail
            this.msg = error.data;

          });
        },
        post(){

        }
      }
    }
</script>

<style>

</style>
