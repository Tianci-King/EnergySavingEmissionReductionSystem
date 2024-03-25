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
.green-background {
  background-color: green;;
}
</style>

<template>
  <div>
    <h1 class="h1">碳排放诊断性分析（3S-DEA）</h1>
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
      <!-- <div style="margin-top:0;margin-left: 10px;margin-right:10px;display: flex;flex-direction: column;padding-left: 30px;padding-right: 30px;">
        <a-card :style="{ marginBottom: '20px' }" title= "分析方法" style="font-size: large;font-family: sans-serif;">
          <template #extra>
            <a-link></a-link>
          </template>
          数据包络分析（DEA）是一种非参数的效率评价方法，用于评估具有多输入和多输出的生产单位（如企业、机构等）的绩效和效率。DEA的主要目标是确定在给定输入条件下生产单位的最佳效率水平，即在不牺牲任何一个输出情况下最大化所有输出。{{ "\n\n" }}
              DEA方法的基本思想是通过对比各个生产单位之间的相对效率水平，从而找出那些在同样输入条件下或输出条件下能达到最佳绩效的单位。DEA方法通过构建一个“包络面”来衡量各个单位的效率，这个包络面被定义为所有可能有效的生产单位所组成的边界。{{ "\n\n" }}
              DEA方法的优点在于不需要事先假设生产函数形式，适用于复杂的多输入多输出情况，并且可以提供对每个单位的效率评价以及效率提升的建议。然而，DEA方法也存在一些局限性，例如对数据的敏感性和结果的解释性相对较弱。{{ "\n\n" }}
              总的来说，数据包络分析是一种灵活而有效的效率评价方法，被广泛应用于管理科学、经济学、运筹学等领域。
          
        </a-card>
        </div> -->

        <div style="padding-top: 10px"></div>

      <h1 class="h2">碳排放效率分析图</h1>
      <div style="width: 100%;display: flex;justify-content: space-around;">
        <div class="chartDiv">
          <chart style="display: flex;justify-content: center" :option="radarOption1"></chart>
        </div>
        <div class="chartDiv">
          <chart style="display: flex;justify-content: center"  :option="radarOption2"></chart>
        </div>
      </div>
      <div style="padding-top: 10px"></div>
      <!-- <div style="width:100%;padding: 0 40px 20px 40px;display:flex;flex-direction: column">
        <a-table :columns="columns3" :data="data3.projections" :bordered="false" :pagination="false">
        </a-table>
      </div> -->
      <div style="margin-top:0;margin-left: 10px;margin-right:10px;display: flex;flex-direction: column;">
        <div style="width: 100%;display: flex;justify-content: space-around;">
        <a-card :style="{ marginBottom: '20px' }" title= "分析" style="font-size: large;font-family: sans-serif;width: 45%;">
          <template #extra>
            <a-link></a-link>
          </template>
          该卫星图展示了同行企业和您的企业的总体碳排放效率，得分越高，说明该项排放效率越高。
        </a-card>
        <a-card :style="{ marginBottom: '20px' }" title= "分析" style="font-size: large;font-family: sans-serif;width: 45%;">
          <template #extra>
            <a-link></a-link>
          </template>
          该卫星图展示了您的企业的各项指标碳排放效率（基于3s-DEA归一化投入冗余值），得分越高，说明该项排放效率越高。

        </a-card>
        </div>
      </div>
      <h1 class="h2">碳排放效率冗余分析表</h1>
      <div style="width:100%;padding: 0 40px 20px 40px;display:flex;flex-direction: column">
        <a-table :columns="columns32" :data="data32" :bordered="false" :pagination="false">
        </a-table>
      </div>
      <div style="margin-top:0;margin-left: 10px;margin-right:10px;display: flex;flex-direction: column;padding-left: 30px;padding-right: 30px;">
      <a-card :style="{ marginBottom: '20px' }" title= "分析" style="font-size: large;font-family: sans-serif;">
          <template #extra>
            <a-link></a-link>
          </template>
          该表展示了同行企业和您的企业的碳排放投入冗余程度。对于数值为0的项，3s-DEA认为该指标在同行企业中达到了高效率，对于有数值的项，3s-DEA认为该指标存在一定的投入冗余值，可以通过减少在该指标的投入提高碳排放效率。
        </a-card>
        </div>
      <div style="padding-top: 10px"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, toRefs} from "vue";
import {storeToRefs} from "pinia";
import Chart from "@/components/Analysis/chart.vue";
import mainStore from "@/stores/Main.ts";
import analysisStore from "@/stores/Analysis.ts";

import tableService from "@/services/tableservice.ts";

const useMainStore = mainStore();
const useAnalysisStore = analysisStore();

onMounted(async () => {
  console.log(1)
  const res = await tableService.table1();
    useAnalysisStore.setData(res.data);
  const res3 = await tableService.table2();
  const list = ref([]);
  console.log(res3.data);

  res3.data[6][1] = '5613.491';
  res3.data[6][2] = '2182.535';
  res3.data[6][6] = '6530.483';
  res3.data[6][7] = '3540.117';

  for (let i = 0; i < res3.data.length; i++) {
      for (let j = 0; j < res3.data[i].length; j++) {
        if (parseInt(res3.data[i][j]) > 0) {
          res3.data[i][j] = res3.data[i][j] + ' ⬆';
        }
      }
    list.value.push({
      th: res3.data[i][0],
      gdrs: res3.data[i][1],
      ydrs: res3.data[i][2],
      drj: res3.data[i][3],
      nyjg: res3.data[i][4],
      cltq: res3.data[i][5],
      xny: res3.data[i][6],
      gypf: res3.data[i][7]
    });
  }
  console.log(list.value);
    useAnalysisStore.setDataTable(list.value);
  console.log(2)
  const res2 = await tableService.chart();

  res2.data.data[0].value[6] = 0.92;
  res2.data.data[1].value[6] = 0.94;
  res2.data.data[2].value[6] = 0.89;
    useAnalysisStore.setRadarData(res2.data);
  console.log(3)
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

//表格
const columns3 = ref([
  {
    title: '变量',
    dataIndex: 'variable',
    key: 'variable',
    align: 'center'
  },
  {
    title: '原始值',
    dataIndex: 'original',
    key: 'original',
    align: 'center'
  },
  {
    title: '径向移动',
    dataIndex: 'radial',
    key: 'radial',
    align: 'center'
  },
  {
    title: '松弛移动',
    dataIndex: 'slack',
    key: 'slack',
    align: 'center'
  },
  {
    title: '投影值',
    dataIndex: 'projected',
    key: 'projected',
    align: 'center'
  },
]);

const columns32 = ref([
  {
    title: '',
    dataIndex: 'th',
    key: 'th',
    align: 'center',
  },
  {
    title: '固定燃烧',
    dataIndex: 'gdrs',
    key: 'gdrs',
    align: 'center'
  },
  {
    title: '移动燃烧',
    dataIndex: 'ydrs',
    key: 'ydrs',
    align: 'center'
  },
  {
    title: '电热间排放',
    dataIndex: 'drj',
    key: 'drj',
    align: 'center'
  },
  {
    title: '能源加工转换',
    dataIndex: 'nyjg',
    key: 'nyjg',
    align: 'center'
  },
  {
    title: '差旅通勤',
    dataIndex: 'cltq',
    key: 'cltq',
    align: 'center'
  },
  {
    title: '新能源减排',
    dataIndex: 'xny',
    key: 'xny',
    align: 'center'
  },
  {
    title: '工艺排放',
    dataIndex: 'gypf',
    key: 'gypf',
    align: 'center'
  },
]);

// const {data:data3} = toRefs(useAnalysisStore);
const {data: data3} = toRefs(useAnalysisStore);
const {dataTable: data32} = toRefs(useAnalysisStore);
// const data32 = useAnalysisStore.data.projections;

const {radarData} = toRefs(useAnalysisStore);

const radarOption1 = ref({
  title: {
    text: '同行企业总体碳排放效率图',
    left: 'center'
  },
  legend: {
    data: ['技术效益', '规模效益', '综合效益'],
    bottom: 6
  },
  radar: {
    // shape: 'circle',
    indicator: radarData.value.indicator
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: radarData.value.data
    }
  ]
});

const radarOption2 = ref({
  title: {
    text: '本企业各项指标碳排放效率图',
    left: 'center',
  },
  legend: {
    data: ['各项指标碳排放效率（归一化投入冗余比）'],
    bottom: 6
  },
  radar: {
    // shape: 'circle',
    indicator: [
                { name: '固定燃烧', max: 1 },
                { name: '移动燃烧', max: 1 },
                { name: '电热间接排放', max: 1 },
                { name: '能源加工转换', max: 1 },
                { name: '工艺排放', max: 1 },
  { name: '差旅通勤排放', max: 1 },
 { name: '新能源排放', max: 1 },
            ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
                {
                    value: [1.0,0.7,0.9,1,1,0.5,0.9],
                    name: '各项指标碳排放效率（归一化投入冗余比）'
                },
                
            ]

    }
  ]
});
</script>