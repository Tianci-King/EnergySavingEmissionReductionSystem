<template>
  <div style="padding: 40px 20px">
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 30px;font-weight: bold">新能源减排</text>
    </div>
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 17px">光伏&风电 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{text.data7[0]}}</text>
    </div>
    <a-table :columns="columns1" :data="data1" :bordered="false" :pagination="false">
      <template #InstalledCapacity="{ rowIndex }">
        <a-input v-model="data1[rowIndex].InstalledCapacity" placeholder="请输入"/>
      </template>
      <template #SunshineOperatingHours="{ rowIndex }">
        <a-input v-model="data1[rowIndex].SunshineOperatingHours" placeholder="请输入"/>
      </template>
      <template #CarbonEmissionsFactors="{ rowIndex }">
        <a-input v-model="data1[rowIndex].CarbonEmissionsFactors" placeholder="缺省"/>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import latitudeStore from "@/stores/Latitude.ts";
import text from "@/types/text.ts";

const latitude = latitudeStore();
const data1 = latitude.data2;

const rowWidth = 150;

const columns1 = ref([{
  title: '类型',
  dataIndex: 'kind',
  width: rowWidth-80,
  align: 'center'
},{
  title: '装机容量（kw）',
  dataIndex: 'InstalledCapacity',
  slotName: 'InstalledCapacity',
  width: rowWidth-40,
  align: 'center'
}, {
  title: '日照/运行时长（h）',
  dataIndex: 'SunshineOperatingHours',
  slotName: 'SunshineOperatingHours',
  width: rowWidth-40,
  align: 'center'
}, {
  title: 'CO₂',
  children: [{
    title: '减排量(t)',
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
