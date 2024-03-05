<style scoped>
.background>*:nth-child(2){
  width: 85%;
  height: 100%;
  background: rgb(248, 248, 248);
  display: flex;
  justify-content: center;
}
.real-content{
  margin: 30px 0  30px 0;
  border-radius: 40px;
  min-width: 1450px;
  height: 5000px;
  background: white;
  padding: 20px;
}
.sider{
  width: 15%;
  min-width: 250px;
  height: 100%;
  padding-left: 20px;
}
</style>

<template>
<div style="height: 91vh;display: flex" class="background">
  <div class="sider">
    <analysis-menu></analysis-menu>
  </div>
  <a-scrollbar ref="scroll" style="overflow: auto;width: 90%;height: calc(91vh);">
    <div class="real-content">
      <carbon-emission-data-statistics></carbon-emission-data-statistics>
    </div>
  </a-scrollbar>
</div>
</template>

<script setup lang="ts">

import AnalysisMenu from "@/components/AnalysisMenu.vue";
import {getCurrentInstance, ref} from "vue";
import CarbonEmissionDataStatistics from "@/components/Analysis/CarbonEmissionDataStatistics.vue";

const instance=getCurrentInstance()
const handleClick = (e: any) => {
  console.log(instance);
  const anchor:any = instance.refs[e];
  console.log(anchor);
  if (anchor) {
    scroll.value.scrollTo({ top: anchor.offsetTop, behavior: "smooth" });
  }
};
</script>