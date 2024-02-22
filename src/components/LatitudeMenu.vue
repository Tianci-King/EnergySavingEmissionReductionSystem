<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
}  from "@element-plus/icons-vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><DataLine /></el-icon>
        <span>核算维度</span>
      </template>
      <el-menu-item-group title="">
        <el-menu-item index="1-1">固定燃烧</el-menu-item>
        <el-menu-item index="1-2">移动燃烧</el-menu-item>
        <el-menu-item index="1-3">电热间排放</el-menu-item>
        <el-menu-item index="1-4">能源加工转换</el-menu-item>
        <el-menu-item index="1-5">工艺排放</el-menu-item>
        <el-menu-item index="1-6">差旅通勤</el-menu-item>
        <el-menu-item index="1-7">新能源减排</el-menu-item>
        <el-menu-item index="1-8">土地利用碳汇</el-menu-item>
        <el-menu-item index="1-9">农林牧鱼业</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>

</style>