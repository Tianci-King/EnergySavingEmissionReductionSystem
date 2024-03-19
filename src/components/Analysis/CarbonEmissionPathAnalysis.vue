<script setup lang="ts">
import Chart from "@/components/Analysis/chart.vue";
import {ref} from "vue";
import analysisStore from "@/stores/Analysis.ts";

const useAnalysisStore = analysisStore();

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
    <h1 class="h1">碳排放路径分析</h1>
    <div class="content-box">
      <div style="margin-top:2vw;margin-left: 10px;margin-right:10px;display: flex;flex-direction: column;">
        <a-card title="Arco Card">
          <a-card :style="{ marginBottom: '20px' }" title="Inner Card Title">
            <template #extra>
              <a-link>详细信息</a-link>
            </template>
            Inner Card Content
          </a-card>
          <a-card title="Inner Card Title">
            <template #extra>
              <a-link>详细信息</a-link>
            </template>
            Inner Card Content
          </a-card>
        </a-card>
      </div>

      <h1 class="h2">碳排放路径分析桑基图</h1>
      <div style="width: 100%;display: flex;justify-content: space-around;flex-direction: column">
        <div class="chartDiv" style="width: 100%">
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
  width: 45%;
  height: 450px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  display: flex;
}
</style>