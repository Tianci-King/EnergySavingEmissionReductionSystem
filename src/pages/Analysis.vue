<style scoped>
.background>*:nth-child(2){
  width: 85%;
  height: 100%;
  background: rgb(248, 248, 248);
  display: flex;
  justify-content: center;
}
.real-content{
  /*margin: 30px 0  30px 0;*/
  /*border-radius: 40px;*/
  min-width: 1450px;
  height: 5000px;
  background: white;
  padding: 20px;
  width: 91vh;
}
.sider{
  width: 15%;
  min-width: 250px;
  height: 100%;
  padding-left: 20px;
}
</style>

<template>
<div style="display: flex;" class="background">
  <div class="sider" style="width: 250px">
    <analysis-menu :handle-click="handleClick"></analysis-menu>
  </div>
  <div class="real-content" style="flex-direction: column" v-if="selectKey === '1'">
      <carbon-emission-data-statistics style="width: 100%;"></carbon-emission-data-statistics>
  </div>
  <div class="real-content" style="flex-direction: column" v-if="selectKey === '2'">
    <DEA style="width: 100%;"></DEA>
  </div>
  <div class="real-content" style="flex-direction: column" v-if="selectKey === '3'">
    <PRE style="width: 100%;"></PRE>
  </div>
  <div class="real-content" style="flex-direction: column" v-if="selectKey === '4'">
    <CarbonEmissionPathAnalysis></CarbonEmissionPathAnalysis>
  </div>
  <div class="real-content" style="flex-direction: column" v-if="selectKey === '5'">
    <CarbonEmissionCostBenefitPortrait></CarbonEmissionCostBenefitPortrait>
  </div>
</div>
</template>

<script setup lang="ts">

import AnalysisMenu from "@/components/AnalysisMenu.vue";
import {onMounted, ref} from "vue";
import CarbonEmissionDataStatistics from "@/components/Analysis/CarbonEmissionDataStatistics.vue";
import DEA from "@/components/Analysis/DEA.vue";
import PRE from "@/components/Analysis/PRE.vue";

import AnalysisStore from "@/stores/Analysis.ts";
import CarbonEmissionPathAnalysis from "@/components/Analysis/CarbonEmissionPathAnalysis.vue";
import CarbonEmissionCostBenefitPortrait from "@/components/Analysis/CarbonEmissionCostBenefitPortrait.vue";

const useAnalysisStore = AnalysisStore();

const selectKey = ref();

onMounted(() => {
  selectKey.value = useAnalysisStore.selectKey;
});

const handleClick = (e: any) => {
  console.log(e);
  selectKey.value = e;
  useAnalysisStore.setSelectkey(e);
};
</script>