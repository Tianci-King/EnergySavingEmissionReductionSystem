<script setup lang="ts">
import {RouterView} from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <a-layout class="container">
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout-content>
      <RouterView />
    </a-layout-content>
  </a-layout>
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
  user-select: none;
}
</style>
