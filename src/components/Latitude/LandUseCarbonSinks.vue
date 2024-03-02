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

    <div style="padding: 40px 0 20px 0">
      <text style="font-size: 17px">草地与湿地 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{text.data8[1]}}</text>
    </div>
    <a-table :columns="columns2" :data="data2" :bordered="false" :pagination="false">
      <template #Area="{ rowIndex }">
        <a-input v-model="data2[rowIndex].Area" placeholder="请输入"/>
      </template>
      <template #CarbonSinkCoefficient="{ rowIndex }">
        <a-input v-model="data2[rowIndex].CarbonSinkCoefficient" placeholder="缺省"/>
      </template>
    </a-table>

    <div style="padding: 40px 0 20px 0">
      <text style="font-size: 17px">耕地 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{text.data8[2]}}</text>
    </div>
    <a-table :columns="columns3" :data="data3" :bordered="false" :pagination="false">
      <template #Area="{ rowIndex }">
        <a-input v-model="data2[rowIndex].Area" placeholder="请输入"/>
      </template>
      <template #CarbonSinkCoefficient="{ rowIndex }">
        <a-input v-model="data2[rowIndex].CarbonSinkCoefficient" placeholder="缺省"/>
      </template>
    </a-table>

    <div style="padding: 40px 0 20px 0">
      <text style="font-size: 17px">BECCS技术 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{text.data8[3]}}</text>
    </div>
    <a-table :columns="columns4" :data="data4" :bordered="false" :pagination="false">
      <template #ProjectPowerGeneration="{ rowIndex }">
        <a-input v-model="data4[rowIndex].ProjectPowerGeneration" placeholder="请输入"/>
      </template>
      <template #EmissionReductionPotential="{ rowIndex }">
        <a-input v-model="data4[rowIndex].EmissionReductionPotential" placeholder="请输入"/>
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
const data2 = latitude.data82;
const data3 = latitude.data83;
const data4 = latitude.data84;

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

const columns2 = ref([
  {
    title: '类型',
    dataIndex: 'Type',
    slotName: 'Type',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '名称',
    dataIndex: 'Name',
    slotName: 'Name',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '面积（hm²）',
    dataIndex: 'Area',
    slotName: 'Area',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '碳汇系数（kg/hm²年）',
    dataIndex: 'CarbonSinkCoefficient',
    slotName: 'CarbonSinkCoefficient',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '碳汇减排量（t）',
    dataIndex: 'CarbonSinkEmissionReduction',
    slotName: 'CarbonSinkEmissionReduction',
    width: rowWidth,
    align: 'center'
  }
]);

const columns3 = ref([
  {
    title: '农作物类型',
    dataIndex: 'Type',
    slotName: 'Type',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '面积（hm²）',
    dataIndex: 'Area',
    slotName: 'Area',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '碳汇系数（kg/hm²年）',
    dataIndex: 'CarbonSinkCoefficient',
    slotName: 'CarbonSinkCoefficient',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '碳汇减排量（t）',
    dataIndex: 'CarbonSinkEmissionReduction',
    slotName: 'CarbonSinkEmissionReduction',
    width: rowWidth,
    align: 'center'
  }
]);

const columns4 = ref([
  {
    title: '技术',
    dataIndex: 'Technology',
    slotName: 'Technology',
    width: rowWidth+20,
    align: 'center'
  },
  {
    title: '项目发电量',
    dataIndex: 'ProjectPowerGeneration',
    slotName: 'ProjectPowerGeneration',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '减排潜力',
    dataIndex: 'EmissionReductionPotential',
    slotName: 'EmissionReductionPotential',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '碳汇减排量',
    dataIndex: 'CarbonSinkEmissionReduction',
    slotName: 'CarbonSinkEmissionReduction',
    width: rowWidth,
    align: 'center'
  }
]);
</script>
