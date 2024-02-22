<style scoped>

</style>

<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
  >
  <el-menu-item-group title="">
    <el-menu-item index="1-1">全部行业</el-menu-item>
    <el-menu-item index="1-2">能源行业</el-menu-item>
    <el-menu-item index="1-3">制造业</el-menu-item>
    <el-menu-item index="1-4">商业</el-menu-item>
    <el-menu-item index="1-5">农林牧渔</el-menu-item>
    <el-menu-item index="1-6">建筑业</el-menu-item>
    <el-menu-item index="1-7">采矿业</el-menu-item>
  </el-menu-item-group>
  </el-menu>
</template>

<script setup lang="ts">

</script>