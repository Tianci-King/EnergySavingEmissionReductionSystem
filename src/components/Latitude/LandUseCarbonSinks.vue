<template>
  <div style="padding: 40px 20px">
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 30px;font-weight: bold">土地利用碳汇</text>
    </div>
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 17px">森林 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{text.data8[0]}}</text>
    </div>
    <a-table :columns="columns1" :data="data1" :bordered="false" :pagination="false">
      <template #InstalledCapacity="{ rowIndex }">
        <a-input v-model="data1[rowIndex].InstalledCapacity" placeholder="请输入"/>
      </template>
      <template #ForestArea="{ rowIndex }">
        <a-input v-model="data1[rowIndex].ForestArea" placeholder="请输入"/>
      </template>
      <template #AreaStorage="{ rowIndex }">
        <a-input v-model="data1[rowIndex].AreaStorage" placeholder="缺省"/>
      </template>
      <template #BiologicalExpansionCoefficient="{ rowIndex }">
        <a-input v-model="data1[rowIndex].BiologicalExpansionCoefficient" placeholder="缺省"/>
      </template>
      <template #CapacityDensity="{ rowIndex }">
        <a-input v-model="data1[rowIndex].CapacityDensity" placeholder="缺省"/>
      </template>
      <template #CarbonContent="{ rowIndex }">
        <a-input v-model="data1[rowIndex].CarbonContent" placeholder="缺省"/>
      </template>
    </a-table>

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import latitudeStore from "@/stores/Latitude.ts";
import text from "@/types/text.ts";

const latitude = latitudeStore();
const data1 = latitude.data81;

const rowWidth = 150;

const columns1 = ref([{
  title: '森林面积',
  dataIndex: 'ForestArea',
  slotName: 'ForestArea',
  width: rowWidth-80,
  align: 'center'
},{
  title: '面积储蓄量',
  dataIndex: 'AreaStorage',
  slotName: 'AreaStorage',
  width: rowWidth-80,
  align: 'center'
},{
  title: '生物量扩大系数',
  dataIndex: 'BiologicalExpansionCoefficient',
  slotName: 'BiologicalExpansionCoefficient',
  width: rowWidth-80,
  align: 'center'
},{
  title: '容量密度',
  dataIndex: 'CapacityDensity',
  slotName: 'CapacityDensity',
  width: rowWidth-80,
  align: 'center'
},{
  title: '含碳率',
  dataIndex: 'CarbonContent',
  slotName: 'CarbonContent',
  width: rowWidth-80,
  align: 'center'
},{
  title: '碳汇减排量',
  dataIndex: 'CarbonSinkEmissionReduction',
  width: rowWidth-80,
  align: 'center'
}

]);
</script>
