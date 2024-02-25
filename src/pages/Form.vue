<template>
    <a-layout>
      <a-layout-sider>
        <LatitudeMenu />
      </a-layout-sider>
      <a-layout-content>
        <StationaryCombustion/>
      </a-layout-content>
    </a-layout>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { ref } from "vue";
import LatitudeMenu from "@/components/LatitudeMenu.vue";
import StationaryCombustion from "@/components/Latitude/StationaryCombustion.vue";


</script>