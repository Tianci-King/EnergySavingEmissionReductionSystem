<template>
  <div style="padding: 40px 20px">
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 30px;font-weight: bold">能源加工转换</text>
    </div>
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 17px;font-weight: lighter">{{text.data3}}</text>
    </div>
    <a-table :columns="columns" :data="data" :bordered="false" :pagination="false">
      <template #ConversionAndRecovery="{ rowIndex }">
        <a-input v-model="data[rowIndex].ConversionAndRecovery" placeholder="请输入"/>
      </template>
      <template #CarbonEmissionsFactors="{ rowIndex }">
        <a-input v-model="data[rowIndex].CarbonEmissionsFactors" placeholder="缺省"/>
      </template>
      <template #MethaneEmissionsFactors="{ rowIndex }">
        <a-input v-model="data[rowIndex].MethaneEmissionsFactors" placeholder="缺省"/>
      </template>
      <template #NitrousOxideEmissionsFactors="{ rowIndex }">
        <a-input v-model="data[rowIndex].NitrousOxideEmissionsFactors" placeholder="缺省"/>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import latitudeStore from "@/stores/Latitude.ts";
import text from "@/types/text.ts";

const latitude = latitudeStore();
const data = latitude.data3;

const rowWidth = 150;

const columns = ref([{
  title: '原始能源',
  dataIndex: 'RawEnergy',
  width: rowWidth-40,
  align: 'center'
},{
  title: '产出能源',
  dataIndex: 'OutputEnergy',
  width: rowWidth-40,
  align: 'center'
},{
  title: '转化与回收量',
  dataIndex: 'ConversionAndRecovery',
  slotName: 'ConversionAndRecovery',
  width: rowWidth-40,
  align: 'center'
},{
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
}, {
  title: 'CH₄',
  children: [{
    title: '排放量(kg)',
    dataIndex: 'MethaneEmissions',
    width: rowWidth / 2,
    align: 'center'
  }, {
    title: '排放因子',
    dataIndex: 'MethaneEmissionsFactors',
    slotName: 'MethaneEmissionsFactors',
    width: rowWidth / 2,
    align: 'center'
  }]
}, {
  title: 'N₂O',
  children: [{
    title: '排放量(kg)',
    dataIndex: 'NitrousOxideEmissions',
    width: rowWidth / 2,
    align: 'center'
  }, {
    title: '排放因子',
    dataIndex: 'NitrousOxideEmissionsFactors',
    slotName: 'NitrousOxideEmissionsFactors',
    width: rowWidth / 2,
    align: 'center'
  }]
}]);
</script>
