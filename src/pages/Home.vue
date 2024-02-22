<style scoped>
.ContentPanel{
  display: flex;
}
</style>


<template>
  <el-container>
    <el-aside width="200px">
      <HomeMenu class="Menu"/>
    </el-aside>
    <el-main class="ContentPanel">
      <div style="width: 50%">
        <trade-card v-for="trade in tradeList"></trade-card>
      </div>
      <div style="width: 50%">

      </div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">

import HomeMenu from "@/components/HomeMenu.vue";
import emitter from "@/utils/mitt.ts";
import TradeCard from "@/components/Latitude/tradeCard.vue";

emitter.on("tradeList", (tradeList: any) => {
  tradeList.value = tradeList;
});

</script>