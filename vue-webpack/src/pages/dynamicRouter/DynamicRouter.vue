<template>
    <div>

      当前为商品列表页面 <span>{{$route.params.name}}</span>
      <p v-html="routeParams"></p>

    </div>
</template>

<script>
    export default {
      data(){
          return {
            msg:"hello DynamicRouter",
            routeParams:"获取路由上的动态参数name: $route.params.name "
          };
      }
    }
</script>

<style>

</style>
