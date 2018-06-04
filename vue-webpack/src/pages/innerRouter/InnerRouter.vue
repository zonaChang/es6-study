<template>
    <div>
      嵌套路由<br />
      <!--to属性的值，需要从根路由开始写完整的路由， 默认为根路由-->
      <router-link to="/router/inner/title">标题组件</router-link>
      <router-link to="/router/inner/image">图片组件</router-link>
      <!--路由显示位置单独用一个标签包括, 隔离其他代码-->
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "InnerRouter"
    }
</script>

<style scoped>

</style>
