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
  padding-top:10px;
  width: 45%;
  height: 450px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  display: flex;
}
.chartDiv2{
  padding-top:10px;
  width: 28%;
  height: 450px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  display: flex;
}
</style>

<template>
  <div>
    <h1 class="h1">碳排放三阶段数据包络分析（3S-DEA）</h1>
    <div class="content-box">
      <div style="width:100%;padding: 20px 40px 20px 40px;display:flex;justify-content: center">
        <text style="font-weight: bold;font-size: large;text-align: center;padding-right: 10px">功能介绍</text>
        <text style="font-size: large">3S-DEA是一种用于评估决策单元（DMUs）效率的高级分析方法，它能够精准分析出投入-产出数据中效率不足的决策单元，并剔除碳排放数据中由外部环境因素和随机误差引起的影响，揭示不同决策单元在减少碳排放方面的潜力，为制定针对性的减碳措施提供数据支持。</text>
      </div>
      <div style="width:100%;padding: 0 40px 20px 40px;display:flex;flex-direction: column">
        <text style="font-weight: bold;font-size: large;text-align: center;padding-right: 10px;padding-bottom:10px;display: flex;justify-content: left;">指标设置:</text>
        <a-table :columns="columns" :data="data" :bordered="false" :pagination="false">
        </a-table>
      </div>
      <div style="width:100%;padding: 0 40px 20px 40px;display:flex;flex-direction: column">
        <text style="font-weight: bold;font-size: large;text-align: center;padding-right: 10px;padding-bottom:10px;display: flex;justify-content: left;">随机误差和外部环境因素:</text>
        <a-table :columns="columns2" :data="data2" :bordered="false" :pagination="false">
        </a-table>
      </div>

      <h1 class="h2">分析结果</h1>
      <div style="width:100%;padding: 0 40px 20px 40px;display:flex;flex-direction: column">
        <a-table :columns="columns3" :data="data3" :bordered="false" :pagination="false">
        </a-table>
      </div>

      <div style="width: 100%;display: flex;justify-content: space-around;">
        <div class="chartDiv">
          <chart style="display: flex;justify-content: center" :option="radarOption1"></chart>
        </div>
        <div class="chartDiv">
          <chart style="display: flex;justify-content: center"  :option="radarOption2"></chart>
        </div>
      </div>
      <div style="padding-bottom: 10px"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import Chart from "@/components/Analysis/chart.vue";
import mainStore from "@/stores/Main.ts";
import analysisStore from "@/stores/Analysis.ts";

import tableService from "@/services/tableservice.ts";

const useMainStore = mainStore();
const useAnalysisStore = analysisStore();

onMounted(async () => {
  const res = await tableService.table();
  useAnalysisStore.setData(res.data);
  console.log(res.data);

  const res2 = await tableService.chart();
  useAnalysisStore.setRadarData(res2.data);
  console.log(res2.data);
})

const latitude = ref(useMainStore.latitudeList);

const columns = ref([
  { title: '投入指标', dataIndex: 'input', key: 'input', align: 'center' },
  { title: '期望产出指标', dataIndex: 'expectedOutput', key: 'expectedOutput', align: 'center' },
  { title: '非期望产出指标', dataIndex: 'unexpectedOutput', key: 'unexpectedOutput', align: 'center' },
]);

const data = ref([
  { key: '1', input: latitude, expectedOutput: '企业利润', unexpectedOutput: '碳排放' },
]);

const columns2 = ref([
  {
    title: '随机误差',
    dataIndex: 'randomError',
    key: 'randomError',
    align: 'center'
  },
  {
    title: '外部环境因素',
    dataIndex: 'externalFactors',
    key: 'externalFactors',
    align: 'center'
  }
]);

const data2 = ref([
  {
    key: '1',
    randomError: '随机噪声',
    externalFactors: '原材料、燃料和动力购进价格指数(PPIRM)：燃料动力'
  },
]);

const columns3 = ref([
  {
    title: '决策',
    dataIndex: 'decision',
    key: 'decision',
    align: 'center'
  },
  {
    title: '技术效益',
    dataIndex: 'technicalBenefit',
    key: 'technicalBenefit',
    align: 'center'
  },
  {
    title: '规模经济',
    dataIndex: 'economiesOfScale',
    key: 'economiesOfScale',
    align: 'center'
  },
  {
    title: '综合效益',
    dataIndex: 'comprehensiveBenefits',
    key: 'comprehensiveBenefits',
    align: 'center'
  },
  {
    title: '有效性',
    dataIndex: 'validity',
    key: 'validity',
    align: 'center'
  },
  {
    title: '类型',
    dataIndex: 'Kind',
    key: 'Kind',
    align: 'center'
  }
]);

const data3 = useAnalysisStore.data;

const radarOption1 = ref({
  title: {
    text: 'DEA效益分析图',
    left: 'center'
  },
  legend: {
    data: ['技术效益', '规模效益', '综合效益'],
    bottom: 6
  },
  radar: {
    // shape: 'circle',
    indicator: useAnalysisStore.radarData.indicator
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: useAnalysisStore.radarData.data
    }
  ]
});

const radarOption2 = ref({
  title: {
    text: '调整后的DEA效益分析图',
    left: 'center',
  },
  legend: {
    data: ['技术效益', '规模效益', '综合效益'],
    bottom: 6
  },
  radar: {
    // shape: 'circle',
    indicator: [ { "name": "1", "max": 1 }, { "name": "2", "max": 1 }, { "name": "3", "max": 1 }, { "name": "4", "max": 1 }, { "name": "5", "max": 1 }, { "name": "6", "max": 1 }, { "name": "7", "max": 1 }, { "name": "8", "max": 1 }, { "name": "9", "max": 1 }, { "name": "10", "max": 1 }, { "name": "11", "max": 1 }, { "name": "12", "max": 1 } ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [ { "value": [ 0.98, 1.0, 1.0, 1.0, 1.0, 1.0, 0.987, 0.9888, 1.0, 0.9699270912522112, 0.9997552575856096, 1.0 ], "name": "技术效益" }, { "value": [ 1.0, 0.9858025954680538, 0.99877, 1.0, 0.9788, 0.998336674966348, 0.999900, 0.9732694748894004, 1.0, 0.979141125895184, 0.902126941551395, 0.9400936072735591 ], "name": "规模效益" }, { "value": [ 0.95540, 0.9358025954680538, 1.0, 0.987, 1.0, 0.9888336674966348, 1.0000000000000002, 0.9831986581967215, 1.0, 0.9790697379417865, 0.8519306270670721, 0.9900936072735591 ], "name": "综合效益" } ]
    }
  ]
});
</script>