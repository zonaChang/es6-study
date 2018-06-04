<template>
    <div>
      命名视图 <br>
      <router-view></router-view>
      <router-view class="left" name="title"></router-view>
      <router-view class="right" name="image"></router-view>
    </div>
</template>

<script>
    export default {
        name: "NameView"
    }
</script>

<style scoped>
.left, .right{
  float: left;
  width: 40%;
  border: 1px solid #CCC;
}
</style>
