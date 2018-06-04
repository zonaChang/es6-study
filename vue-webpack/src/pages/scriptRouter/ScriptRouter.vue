<template>
    <div>
      编程式路由， 跳转文件； <br />
      可接受路由传递的参数：{{$route.query.name}}
      <br/>
      <br/>
      编程式路由获取参数和动态路由获取参数的方式不一样。 <br>
      动态路由： $route.params.paramsName<br>
      编程式路由： $router.query.paramsName<br>
    </div>
</template>

<script>
    export default {
        name: "ScriptRouter",
        data(){
          return {
            msg:"编程式路由"
          }
        }
    }
</script>

<style scoped>

</style>
