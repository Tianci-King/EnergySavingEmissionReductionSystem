<template>
  <el-menu
      :default-active="activeIndex"
      class="header"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-page-header class="back" @back="onBack"></el-page-header>
    <el-menu-item index="0"><div>
      <span class="title"> “碳足迹”节能减排系统 </span>
    </div></el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="2">
      <template #title>导航</template>
      <el-menu-item index="2-1" @click="pushToSystem">碳足迹计算</el-menu-item>
      <el-menu-item index="2-2" @click="pushToShow">数据可视化大屏</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">

</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.title {
  font-weight: bold;
  font-size: 20px;
}

.back {
  position: relative;
  left: 20Px;
  top: 30%;
}
</style>
