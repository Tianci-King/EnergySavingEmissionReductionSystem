<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <LatitudeMenu  class="Menu" />
      </el-aside>
      <el-main class="Form">
        <StationaryCombustion />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.Menu {
  position: fixed;
  left: 0;
  top: 70Px;
  min-height: 100%;
}

</style>

<script setup lang="ts">
import LatitudeMenu from "@/components/LatitudeMenu.vue";
import StationaryCombustion from "@/components/Latitude/StationaryCombustion.vue";
</script>