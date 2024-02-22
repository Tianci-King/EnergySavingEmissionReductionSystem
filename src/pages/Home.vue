<style scoped>

</style>


<template>
  <el-container>
    <el-aside width="200px">
      <HomeMenu class="Menu"/>
    </el-aside>
    <el-main class="ContentPanel">

    </el-main>
  </el-container>
</template>

<script setup lang="ts">

import HomeMenu from "@/components/HomeMenu.vue";
import emitter from "@/mitter";

emitter.on("changeContent", (content: string) => {
  console.log(content);
});
</script>