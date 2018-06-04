<template>
    <div>

      编程式路由， 可通过router-link，或者js完成路由跳转<br />
      <router-link to="/scriptRouter">router-link 跳转路由</router-link>
      <button @click="jump"> button js完成路由跳转</button>
    </div>
</template>

<script>
    export default {
        name: "OriginPage",
        methods:{
            jump(){
              // this.$router.push("/scriptRouter?name=Carl");
              // this.$router.push({path:"/scriptRouter?name=Carl-path"})
              this.$router.push({path:"/scriptRouter", query:{name:"Carl-path-query"}})
            }
        }
    }
</script>

<style scoped>

</style>
