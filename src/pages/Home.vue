<style scoped>
.Menu {
  height: 100%;
}

.sider{
  padding:20px 0  20px  20px;
}
</style>


<template>
  <a-layout style="height: 100%;background: #f2f3f5;" >
    <a-layout-sider class="sider" :width="250">
      <HomeMenu class="Menu"/>
    </a-layout-sider>
    <a-layout-content>

    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">

import HomeMenu from "@/components/HomeMenu.vue";



</script>