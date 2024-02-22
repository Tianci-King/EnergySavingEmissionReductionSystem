<script setup lang="ts">
import {RouterView} from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <el-container class="container">
    <el-header>
      <Header></Header>
    </el-header>
    <router-view />
  </el-container>
</template>

<style>
.container{
  height: 100vh;
  width: 100%;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
