<template>
  <div class="header">
    <a-page-header
        :style="{ background: 'var(--color-bg-2)',height:'100%',}"
        subtitle="ArcoDesign Vue 2.0"
        class="header"
    >
      <template #title>
        <span></span>
        <a-typography-title :heading="3">ArcoDesign</a-typography-title>
      </template>
      <template #back-icon>
        <icon-left style="transform: scale(1.2)"/>
      </template>
      <template #extra>

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
