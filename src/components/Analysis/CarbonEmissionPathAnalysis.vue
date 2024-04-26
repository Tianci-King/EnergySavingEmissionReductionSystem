<script setup lang="ts">
import Chart from "@/components/Analysis/chart.vue";
import {ref, toRefs} from "vue";
import analysisStore from "@/stores/Analysis.ts";
import adviceStore from "@/stores/Advice.ts";

const useAnalysisStore = analysisStore();
const useAdviceStore = adviceStore();

const { advice2 } = toRefs(useAdviceStore);

const sankeyOption = ref({
  series: {
    type: 'sankey',
    layout: 'none',
    emphasis: {
      focus: 'adjacency'
    },
    data: useAnalysisStore.sankeyData.data,
    links: useAnalysisStore.sankeyData.links
  }
});

</script>

<template>
  <div>
    <h1 class="h1">碳足迹</h1>
    <div class="content-box">
      <div style="margin-top:2vw;margin-left: 10px;margin-right:10px;display: flex;flex-direction: column;">

          <a-card v-for="(adviceItem,index) in advice2" :style="{ marginBottom: '20px' }" title= "分析方法" style="font-size: large;font-family: sans-serif;">
            <template #extra>
              <a-link></a-link>
            </template>
            {{ adviceItem }}
        </a-card>
      </div>

      <h1 class="h2">碳足迹路径分析桑基图</h1>
      <div style="width: 100%;display: flex;flex-direction: column">
        <div class="chartDiv">
          <chart :option="sankeyOption" style="margin-left: 5%"></chart>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.h1{
  font-size: x-large;
  font-weight: bold;
  color: #252525;
  text-align: center;
  height: 50px;
  line-height: 50px;
  width: 60%;
  margin: auto;
  background: linear-gradient(to right,rgb(248,248,248), rgb(235, 234, 234),rgb(248,248,248));
}
.h2{
  font-size: large;
  font-weight: bold;
  color: #252525;
  text-align: center;
  height: 50px;
  line-height: 50px;
  width: 60%;
  margin: auto;
  background: linear-gradient(to right,rgb(248,248,248), rgb(235, 234, 234),rgb(248,248,248));
}
.content-box{
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 20px;
  width: 100%;
}
.chartDiv{
  margin-top: 20px;
  padding-top:10px;
  
  width: 100%;
  height: 480px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  display: flex;
}
</style>