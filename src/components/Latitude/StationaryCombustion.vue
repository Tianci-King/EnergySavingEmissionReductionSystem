<template>
  <div style="padding: 40px 20px">
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 30px;font-weight: bold">固定燃烧</text>
    </div>
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 20px;font-weight: lighter">核算固定排放源的燃料燃烧排放，如锅炉、熔炉和涡轮机，燃料或燃气消耗量以吨（t）或万立方米（10⁴m³）计。CO₂、CH₄、N₂O 排放因子单位为：t/t燃料或t/10⁴m³燃气。</text>
    </div>
    <a-table :columns="columns" :data="data" :bordered="false" :pagination="false">
      <template #consumption="{ rowIndex }">
        <a-input v-model="data[rowIndex].consumption" />
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import latitudeStore from "@/stores/Latitude.ts";

const latitude = latitudeStore();
const data = latitude.data1;

const rowWidth = 150;

const columns = ref([{
  title: '类型',
  dataIndex: 'kind',
  width: rowWidth,
  align: 'center'
},{
  title: '消耗量(t)',
  dataIndex: 'consumption',
  slotName: 'consumption',
  width: rowWidth,
  align: 'center'
}, {
  title: 'CO₂',
  children: [{
    title: '排放量(t)',
    dataIndex: 'CarbonEmissions',
    width: rowWidth / 2,
  }, {
    title: '排放因子',
    dataIndex: 'CarbonEmissionsFactors',
    width: rowWidth / 2,
    align: 'center'
  }]
}, {
  title: 'CH₄',
  children: [{
    title: '排放量(t)',
    dataIndex: 'MethaneEmissions',
    width: rowWidth / 2,
    align: 'center'
  }, {
    title: '排放因子',
    dataIndex: 'MethaneEmissionsFactors',
    width: rowWidth / 2,
    align: 'center'
  }]
}, {
  title: 'N₂O',
  children: [{
    title: '排放量(t)',
    dataIndex: 'NitrousOxideEmissions',
    width: rowWidth / 2,
    align: 'center'
  }, {
    title: '排放因子',
    dataIndex: 'NitrousOxideEmissionsFactors',
    width: rowWidth / 2,
    align: 'center'
  }]
}]);
</script>
