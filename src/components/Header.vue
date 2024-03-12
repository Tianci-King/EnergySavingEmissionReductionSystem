<template>
  <div class="header">
    <a-page-header
        :style="{ background: 'var(--color-bg-2)',height:'100%',}"
        class="header"
        @back="back"
        :show-back="router.currentRoute.value.name !== 'Home'"
    >
      <template #title>
        <span style="font-size: xx-large">节能减排碳足迹</span>
      </template>
      <template #subtitle>
        <span style="font-size: large">企业碳足迹计算系统</span>
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
import formService from "@/services/FormService.ts";
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

function calculateCarbonEmissions(data) {
  let totalCarbonEmissions = 0;

  data.forEach(item => {
    totalCarbonEmissions += item.CarbonEmissions;
  });

  return parseFloat(totalCarbonEmissions);
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

  const res = await formService.submitForm(data);

  useAnalysisStore.setData1(res.data[0]);
  useAnalysisStore.setData2(res.data[1]);
  useAnalysisStore.setData31(res.data[2]);
  useAnalysisStore.setData32(res.data[3]);
  useAnalysisStore.setData33(res.data[4]);

  await router.push("/analysis");
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
