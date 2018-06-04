<template>
  <div>
    命名路由， 视图测试 <br>
    <!--params：可以传递页面参数， 也可以传递动态路由需要的参数-->
    <router-link v-bind:to="{name:'NamePagea', params:{name:'Carl-path-name', type:'type-val'}}">  router-link 命名路由跳转</router-link>
  </div>
</template>

<script>
    export default {
        name: "NameOriginPage"
    }
</script>

<style scoped>

</style>
