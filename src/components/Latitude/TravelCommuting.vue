<template>
  <div style="padding: 40px 20px">
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 30px;font-weight: bold">差旅通勤</text>
    </div>
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 17px">员工差旅 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{ text.data6[0] }}</text>
    </div>
    <a-table :columns="columns1" :data="data1" :bordered="false" :pagination="false">
      <template #money="{ rowIndex }">
        <a-input v-model="data1[rowIndex].money" placeholder="请输入"/>
      </template>
      <template #CarbonEmissionsFactors="{ rowIndex }">
        <a-input v-model="data1[rowIndex].CarbonEmissionsFactors" placeholder="缺省"/>
      </template>
    </a-table>

    <div style="padding: 40px 0 20px 0">
      <text style="font-size: 17px">员工通勤 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{ text.data6[1] }}</text>
    </div>
    <a-table :columns="columns2" :data="data2" :bordered="false" :pagination="false">
      <template #number="{ rowIndex }">
        <a-input v-model="data2[rowIndex].number" placeholder="请输入"/>
      </template>
      <template #CarbonEmissionsFactors="{ rowIndex }">
        <a-input v-model="data2[rowIndex].CarbonEmissionsFactors" placeholder="缺省"/>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import latitudeStore from "@/stores/Latitude.ts";
import text from "@/types/text.ts";

const latitude = latitudeStore();
const data1 = latitude.data5;
const data2 = latitude.data6;

const rowWidth = 150;

const columns1 = ref([{
  title: '类型',
  dataIndex: 'kind',
  width: rowWidth-80,
  align: 'center'
},{
  title: '票价总额(元)',
  dataIndex: 'money',
  slotName: 'money',
  width: rowWidth-80,
  align: 'center'
}, {
  title: 'CO₂',
  children: [{
    title: '排放量(t)',
    dataIndex: 'CarbonEmissions',
    width: rowWidth / 2,
    align: 'center'
  }, {
    title: '排放因子',
    dataIndex: 'CarbonEmissionsFactors',
    slotName: 'CarbonEmissionsFactors',
    width: rowWidth / 2,
    align: 'center'
  }]
}]);

const columns2 = ref([{
  title: '类型',
  dataIndex: 'kind',
  width: rowWidth-80,
  align: 'center'
},{
  title: '员工人数(人)',
  dataIndex: 'number',
  slotName: 'number',
  width: rowWidth-80,
  align: 'center'
}, {
  title: 'CO₂',
  children: [{
    title: '排放量(t)',
    dataIndex: 'CarbonEmissions',
    width: rowWidth / 2,
    align: 'center'
  }, {
    title: '排放因子',
    dataIndex: 'CarbonEmissionsFactors',
    slotName: 'CarbonEmissionsFactors',
    width: rowWidth / 2,
    align: 'center'
  }]
}]);
</script>
