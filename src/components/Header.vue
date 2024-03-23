<template>
  <div class="header">
    <a-page-header
        :style="{ background: 'var(--color-bg-2)',height:'100%',}"
        class="header"
        @back="back"
        :show-back="router.currentRoute.value.name !== 'Home'"
    >
      <template #title>
        <span style="font-size: xx-large">&emsp;碳小汇&emsp;</span>
      </template>
      <template #subtitle>
        <span style="font-size: large">中小企业碳排放智能分析系统</span>
      </template>
      <template #back-icon>
        <icon-left style="transform: scale(1.2)"/>
      </template>
    </a-page-header>
    <a-button class="right-aligned-button" v-if="router.currentRoute.value.name === 'Form'" type="primary" @click="submit">提交表单</a-button>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import Latitude from "@/stores/Latitude.ts";
import formService from "@/services/formService.ts";
import AnalysisStore from "@/stores/Analysis.ts";

const router=useRouter();
const useLatitude=Latitude();
const useAnalysisStore=AnalysisStore();

const back = () => {
  router.go(-1);
}

function calculateEmissions(data) {
  let totalCarbonEmissions = 0;
  let totalMethaneEmissions = 0;
  let totalNitrousOxideEmissions = 0;

  data.forEach(item => {
    totalCarbonEmissions += item.CarbonEmissions;
    totalMethaneEmissions += item.MethaneEmissions;
    totalNitrousOxideEmissions += item.NitrousOxideEmissions;
  });

  return [parseFloat(totalCarbonEmissions), parseFloat(totalMethaneEmissions), parseFloat(totalNitrousOxideEmissions)];
}

function calculateEmissionsSum(data) {
  let totalCarbonEmissions = 0;
  let totalMethaneEmissions = 0;
  let totalNitrousOxideEmissions = 0;

  data.forEach(item => {
    totalCarbonEmissions += item.CarbonEmissions;
    totalMethaneEmissions += item.MethaneEmissions;
    totalNitrousOxideEmissions += item.NitrousOxideEmissions;
  });

  return (parseFloat(totalCarbonEmissions) + parseFloat(totalMethaneEmissions) + parseFloat(totalNitrousOxideEmissions));
}

function calculateCarbonEmissions(data) {
  let totalCarbonEmissions = 0.00;

  data.forEach(item => {
    // console.log(item.CarbonEmissions)
    totalCarbonEmissions += parseFloat(item.CarbonEmissions);
  });

  return totalCarbonEmissions;
}

function calculateCO2EmissionReduction(data) {
  let totalCO2EmissionReduction = 0;

  data.forEach(item => {
    totalCO2EmissionReduction += item.CO2EmissionReduction;
  });

  return parseFloat(totalCO2EmissionReduction);
}

function calculateEmissionReduction(data) {
  let totalCO2EmissionReduction = 0;

  data.forEach(item => {
    totalCO2EmissionReduction += item.EmissionReduction;
  });

  return parseFloat(totalCO2EmissionReduction);
}

//CarbonSinkEmissionReduction
function calculateCarbonSinkEmissionReduction(data) {
  let totalCarbonSinkEmissionReduction = 0;

  data.forEach(item => {
    totalCarbonSinkEmissionReduction += item.CarbonSinkEmissionReduction;
  });

  return parseFloat(totalCarbonSinkEmissionReduction);
}

//Emissions
function calculateEmission(data) {
  let totalCarbonSinkEmissionReduction = 0;

  data.forEach(item => {
    totalCarbonSinkEmissionReduction += item.Emissions;
  });

  return parseFloat(totalCarbonSinkEmissionReduction);
}

const submit = async () => {

  const data = {
    "固定燃烧": calculateEmissions(useLatitude.data1),
    "移动燃烧": calculateEmissions(useLatitude.data2),
    "电热间排放": calculateEmissions(useLatitude.data4),
    "能源加工转换": calculateEmissions(useLatitude.data3),
    "差旅通勤": calculateCarbonEmissions(useLatitude.data61)+calculateCarbonEmissions(useLatitude.data62),
    "新能源减排": calculateCarbonEmissions(useLatitude.data71)+calculateCO2EmissionReduction(useLatitude.data72)+calculateCO2EmissionReduction(useLatitude.data73)+calculateCO2EmissionReduction(useLatitude.data74)+calculateEmissionReduction(useLatitude.data75)+calculateEmissionReduction(useLatitude.data76)+calculateEmissionReduction(useLatitude.data77)+calculateEmissionReduction(useLatitude.data78),
    "土地利用碳汇": calculateCarbonSinkEmissionReduction(useLatitude.data81)+calculateCarbonSinkEmissionReduction(useLatitude.data82)+calculateCarbonSinkEmissionReduction(useLatitude.data83)+calculateCarbonSinkEmissionReduction(useLatitude.data84),
    "农林牧渔业": parseFloat(calculateEmission(useLatitude.data9)),
  }

  useAnalysisStore.setSum(data);

  // console.log(parseFloat(calculateCarbonEmissions(useLatitude.data61)));
  // console.log(parseFloat(calculateCarbonEmissions(useLatitude.data62)));

  //console.log((useLatitude.data61[0].CarbonEmissions + useLatitude.data61[1].CarbonEmissions + useLatitude.data61[2].CarbonEmissions +useLatitude.data61[3].CarbonEmissions + useLatitude.data61[4].CarbonEmissions +useLatitude.data61[5].CarbonEmissions + useLatitude.data62[0].CarbonEmissions + useLatitude.data62[1].CarbonEmissions))


  useAnalysisStore.setData1({
      pieData: [
        { value: parseFloat(calculateEmissionsSum(useLatitude.data1)), name: '固定燃烧'},
        { value: parseFloat(calculateEmissionsSum(useLatitude.data2)), name: '移动燃烧'},
        { value: parseFloat(calculateEmissionsSum(useLatitude.data3)), name: '能源加工转换'},
        { value: parseFloat(calculateEmissionsSum(useLatitude.data4)), name: '电热间排放'},
        { value: parseFloat(calculateCarbonEmissions(useLatitude.data61))+parseFloat(calculateCarbonEmissions(useLatitude.data62)), name: '差旅通勤'},
        { value: (parseFloat(calculateCarbonEmissions(useLatitude.data71))+parseFloat(calculateCO2EmissionReduction(useLatitude.data72))+parseFloat(calculateCO2EmissionReduction(useLatitude.data73))+parseFloat(calculateCO2EmissionReduction(useLatitude.data74))+parseFloat(calculateEmissionReduction(useLatitude.data75))+parseFloat(calculateEmissionReduction(useLatitude.data76))+parseFloat(calculateEmissionReduction(useLatitude.data77))+parseFloat(calculateEmissionReduction(useLatitude.data78))), name: '新能源减排'},
        { value: parseFloat(calculateCarbonSinkEmissionReduction(useLatitude.data81))+parseFloat(calculateCarbonSinkEmissionReduction(useLatitude.data82))+parseFloat(calculateCarbonSinkEmissionReduction(useLatitude.data83))+parseFloat(calculateCarbonSinkEmissionReduction(useLatitude.data84)), name: '土地利用碳汇'},
      ]
  })

  useAnalysisStore.setData2({
    optionData: ['总计','固定燃烧', '移动燃烧', '能源加工转换', '电热间排放', '差旅通勤', '新能源减排', '土地利用碳汇', '农林牧渔业'],
    barData: [
      (parseFloat(calculateEmissionsSum(useLatitude.data1)) + parseFloat(calculateEmissionsSum(useLatitude.data2)) + parseFloat(calculateEmissionsSum(useLatitude.data3)) + parseFloat(calculateEmissionsSum(useLatitude.data4)) + parseFloat(calculateCarbonEmissions(useLatitude.data61))+parseFloat(calculateCarbonEmissions(useLatitude.data62)) - (parseFloat(calculateCarbonEmissions(useLatitude.data71))+parseFloat(calculateCO2EmissionReduction(useLatitude.data72))+parseFloat(calculateCO2EmissionReduction(useLatitude.data73))+parseFloat(calculateCO2EmissionReduction(useLatitude.data74))+parseFloat(calculateEmissionReduction(useLatitude.data75))+parseFloat(calculateEmissionReduction(useLatitude.data76))+parseFloat(calculateEmissionReduction(useLatitude.data77))+parseFloat(calculateEmissionReduction(useLatitude.data78))) - (parseFloat(calculateCarbonSinkEmissionReduction(useLatitude.data81))+parseFloat(calculateCarbonSinkEmissionReduction(useLatitude.data82))+parseFloat(calculateCarbonSinkEmissionReduction(useLatitude.data83))+parseFloat(calculateCarbonSinkEmissionReduction(useLatitude.data84)))),
      calculateEmissionsSum(useLatitude.data1),
      calculateEmissionsSum(useLatitude.data2),
      calculateEmissionsSum(useLatitude.data3),
      calculateEmissionsSum(useLatitude.data4),
      calculateCarbonEmissions(useLatitude.data61)+calculateCarbonEmissions(useLatitude.data62),
      calculateCarbonEmissions(useLatitude.data71)+calculateCO2EmissionReduction(useLatitude.data72)+calculateCO2EmissionReduction(useLatitude.data73)+calculateCO2EmissionReduction(useLatitude.data74)+calculateEmissionReduction(useLatitude.data75)+calculateEmissionReduction(useLatitude.data76)+calculateEmissionReduction(useLatitude.data77)+calculateEmissionReduction(useLatitude.data78),
      calculateCarbonSinkEmissionReduction(useLatitude.data81)+calculateCarbonSinkEmissionReduction(useLatitude.data82)+calculateCarbonSinkEmissionReduction(useLatitude.data83)+calculateCarbonSinkEmissionReduction(useLatitude.data84),
      calculateEmission(useLatitude.data9)
    ]
  });

  useAnalysisStore.setData31({
    pieData: [
      { value: calculateEmissionsSum(useLatitude.data3), name: '能源加工转换'},
      { value: calculateEmissionsSum(useLatitude.data4), name: '工艺排放'},
      { value: calculateEmissionsSum(useLatitude.data2), name: '移动燃烧'},
      { value: calculateEmissionsSum(useLatitude.data1), name: '固定燃烧'}
    ]
  });

  useAnalysisStore.setData32({
        pieData: [
      { 
        value: parseFloat(useLatitude.data4[0].CarbonEmissions) + parseFloat(useLatitude.data4[0].MethaneEmissions) + parseFloat(useLatitude.data4[0].NitrousOxideEmissions), 
        name: '购入电力'
      },
      { 
        value: parseFloat(useLatitude.data4[1].CarbonEmissions) + parseFloat(useLatitude.data4[0].MethaneEmissions) + parseFloat(useLatitude.data4[0].NitrousOxideEmissions), 
        name: '购入热力'
      },
      { 
        value: parseFloat(useLatitude.data4[2].CarbonEmissions) + parseFloat(useLatitude.data4[0].MethaneEmissions) + parseFloat(useLatitude.data4[0].NitrousOxideEmissions), 
        name: '售出电力'
      },
      { 
        value: parseFloat(useLatitude.data4[3].CarbonEmissions) + parseFloat(useLatitude.data4[0].MethaneEmissions) + parseFloat(useLatitude.data4[0].NitrousOxideEmissions), 
        name: '售出热力'
      },
    ]

  })

  useAnalysisStore.setData33({
    pieData: [
      { value: calculateCarbonEmissions(useLatitude.data61), name: '员工差旅'},
      { value: calculateCarbonEmissions(useLatitude.data62), name: '员工通勤'},
    ]
  })

  const res = await formService.submitForm(data);

  setTimeout(() => {
    router.push("/analysis");
  }, 500);
}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9vh;
  border-bottom: 1px solid var(--color-border);
}

.right-aligned-button{
  margin-right: 5vh;
}
</style>
