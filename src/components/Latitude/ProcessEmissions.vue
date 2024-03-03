<template>
  <div style="padding: 40px 20px">
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 30px;font-weight: bold">工艺排放</text>
    </div>
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 17px;font-weight: lighter">{{text.data5}}</text>
    </div>
    <a-table :columns="columns1" :data="data1" :bordered="false" :pagination="false">
      <template #co2Emissions="{ rowIndex }">
        <a-input v-model="data1[rowIndex].co2Emissions" placeholder="请输入"/>
      </template>
      <template #ch4Emissions="{ rowIndex }">
        <a-input v-model="data1[rowIndex].ch4Emissions" placeholder="请输入"/>
      </template>
      <template #n2oEmissions="{ rowIndex }">
        <a-input v-model="data1[rowIndex].n2oEmissions" placeholder="请输入"/>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import text from "@/types/text.ts";
import mainStore from "@/stores/Main.ts";
import latitudeStore from "@/stores/Latitude.ts";

const useMainStore = mainStore();
const latitude = latitudeStore();

const {trades} = useMainStore;

if(trades === "能源行业") {
  latitude.setLatitude51([
    {
      type: 'CO₂逃逸排放',
      co2Emissions: 0, // replace with actual value
      ch4Emissions: 0, // replace with actual value
      n2oEmissions: 0, // replace with actual value
    },
    {
      type: 'CH₄逃逸排放',
      co2Emissions: 0, // replace with actual value
      ch4Emissions: 0, // replace with actual value
      n2oEmissions: 0, // replace with actual value
    },
    {
      type: 'CO₂回收',
      co2Emissions: 0, // replace with actual value
      ch4Emissions: 0, // replace with actual value
      n2oEmissions: 0, // replace with actual value
    },
    {
      type: 'CH₄回收',
      co2Emissions: 0, // replace with actual value
      ch4Emissions: 0, // replace with actual value
      n2oEmissions: 0, // replace with actual value
    },
    {
      type: '其他',
      co2Emissions: 0, // replace with actual value
      ch4Emissions: 0, // replace with actual value
      n2oEmissions: 0, // replace with actual value
    },
  ]);
}
if(trades !== "能源行业") {
  latitude.setLatitude51([{
    type: trades+"工艺排放",
    co2Emissions: 0, // replace with actual value
    ch4Emissions: 0, // replace with actual value
    n2oEmissions: 0, // replace with actual value
  }]);
}

const data1 = latitude.data51;

const rowWidth = 150;

const columns1 = ref([
  {
    title: '类型',
    dataIndex: 'type',
    slotName: 'type',
    width: rowWidth,
    align: 'center'
  },
  {
    title: 'CO2排放量（t）',
    dataIndex: 'co2Emissions',
    slotName: 'co2Emissions',
    width: rowWidth,
    align: 'center'
  },
  {
    title: 'CH₄排放量（kg）',
    dataIndex: 'ch4Emissions',
    slotName: 'ch4Emissions',
    width: rowWidth,
    align: 'center'
  },
  {
    title: 'N₂O排放量（kg）',
    dataIndex: 'n2oEmissions',
    slotName: 'n2oEmissions',
    width: rowWidth,
    align: 'center'
  }
]);


</script>

<style scoped></style>