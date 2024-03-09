<template>
  <div style="padding: 40px 20px">
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 30px;font-weight: bold">固定燃烧</text>
    </div>
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 17px;font-weight: lighter">{{text.data1}}</text>
    </div>
    <a-table :columns="columns" :data="data" :bordered="false" :pagination="false">
      <template #consumption="{ rowIndex }">
        <a-input v-model="data[rowIndex].consumption" placeholder="请输入" @change="changeInput(data[rowIndex].kind,data[rowIndex].consumption,rowIndex)"/>
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
import {calculateEmission} from "@/utils/calculate.ts";

const latitude = latitudeStore();
const data = latitude.data1;

const columns = ref([{
  title: '类型',
  dataIndex: 'kind',
  width: 120,
  align: 'center'
},{
  title: '消耗量(t)',
  dataIndex: 'consumption',
  slotName: 'consumption',
  align: 'center'
}, {
  title: 'CO₂',
  children: [{
    title: '排放量(t)',
    dataIndex: 'CarbonEmissions',
    align: 'center'
  }, {
    title: '排放因子',
    dataIndex: 'CarbonEmissionsFactors',
    slotName: 'CarbonEmissionsFactors',
    align: 'center'
  }]
}, {
  title: 'CH₄',
  children: [{
    title: '排放量(kg)',
    dataIndex: 'MethaneEmissions',
    align: 'center'
  }, {
    title: '排放因子',
    dataIndex: 'MethaneEmissionsFactors',
    slotName: 'MethaneEmissionsFactors',
    align: 'center'
  }]
}, {
  title: 'N₂O',
  children: [{
    title: '排放量(kg)',
    dataIndex: 'NitrousOxideEmissions',
    align: 'center'
  }, {
    title: '排放因子',
    dataIndex: 'NitrousOxideEmissionsFactors',
    slotName: 'NitrousOxideEmissionsFactors',
    align: 'center'
  }]
}]);

const changeInput = (fuelType, consumption, index) => {
  const emissions = calculateEmission(fuelType, consumption);
  data[index].CarbonEmissions = emissions[0].toFixed(3);
  data[index].MethaneEmissions = emissions[1].toFixed(3);
  data[index].NitrousOxideEmissions = emissions[2].toFixed(3);
};
</script>
