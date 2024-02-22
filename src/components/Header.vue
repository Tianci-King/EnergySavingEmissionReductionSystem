<template>
  <div class="header">
    <a-page-header
        :style="{ background: 'var(--color-bg-2)',height:'100%',}"
        class="header"
    >
      <template #title>
        <span style="font-size: xx-large">节能减排碳足迹</span>
      </template>
      <template #subtitle>
        <span style="font-size: large">企业碳足迹计算系统</span>
      </template>
      <template #back-icon>
        <icon-left style="transform: scale(1.2)"/>
      </template>
    </a-page-header>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header{
  display: flex;
  align-items: center;
  height: 120px;
  border-bottom: 1px solid var(--color-border);
}
</style>
