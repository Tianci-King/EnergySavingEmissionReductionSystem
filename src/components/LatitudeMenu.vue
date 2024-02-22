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
  <a-menu
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
  >
    <a-sub-menu index="1">
      <template #title>
        <icon-command />
        <span>核算维度</span>
      </template>
      <a-menu-item-group title="">
        <a-menu-item key="1-1">固定燃烧</a-menu-item>
        <a-menu-item key="1-2">移动燃烧</a-menu-item>
        <a-menu-item key="1-3">电热间排放</a-menu-item>
        <a-menu-item key="1-4">能源加工转换</a-menu-item>
        <a-menu-item key="1-5">工艺排放</a-menu-item>
        <a-menu-item key="1-6">差旅通勤</a-menu-item>
        <a-menu-item key="1-7">新能源减排</a-menu-item>
        <a-menu-item key="1-8">土地利用碳汇</a-menu-item>
        <a-menu-item key="1-9">农林牧鱼业</a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
  </a-menu>
</template>

<style scoped>

</style>