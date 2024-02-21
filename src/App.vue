<script setup lang="ts">
import {RouterView} from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <router-view />
  </el-container>
</template>

<style scoped>

</style>
