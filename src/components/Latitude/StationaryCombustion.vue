<template>
  <a-table :columns="columns" :data="data" :bordered="false" :pagination="false">
    <template #consumption="{ rowIndex }">
      <a-input v-model="data[rowIndex].consumption" />
    </template>
  </a-table>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';

const rowWidth = 150;

const columns = ref([{
  title: '类型',
  dataIndex: 'kind',
  fixed: 'left',
  width: rowWidth,
},{
  title: '消耗量(t)',
  dataIndex: 'consumption',
  slotName: 'consumption',
  fixed: 'left',
  width: rowWidth,
}, {
  title: 'CO₂',
  children: [{
    title: '排放量(t)',
    dataIndex: 'CarbonEmissions',
    fixed: 'left',
    width: rowWidth / 2,
  }, {
    title: '排放因子',
    dataIndex: 'CarbonEmissionsFactors',
    fixed: 'left',
    width: rowWidth / 2,
  }]
}, {
  title: 'CH₄',
  children: [{
    title: '排放量(t)',
    dataIndex: 'MethaneEmissions',
    fixed: 'left',
    width: rowWidth / 2,
  }, {
    title: '排放因子',
    dataIndex: 'MethaneEmissionsFactors',
    fixed: 'left',
    width: rowWidth / 2,
  }]
}, {
  title: 'N₂O',
  children: [{
    title: '排放量(t)',
    dataIndex: 'NitrousOxideEmissions',
    fixed: 'left',
    width: rowWidth / 2,
  }, {
    title: '排放因子',
    dataIndex: 'NitrousOxideEmissionsFactors',
    fixed: 'left',
    width: rowWidth / 2,
  }]
}]);

const data = ref([
  {
    kind: '燃煤',
    consumption: 100,
    CarbonEmissions: 100,
    CarbonEmissionsFactors: 100,
    MethaneEmissions: 100,
    MethaneEmissionsFactors: 100,
    NitrousOxideEmissions: 100,
    NitrousOxideEmissionsFactors: 100,
  },
  {
    kind: '燃油',
    consumption: 100,
    CarbonEmissions: 100,
    CarbonEmissionsFactors: 100,
    MethaneEmissions: 100,
    MethaneEmissionsFactors: 100,
    NitrousOxideEmissions: 100,
    NitrousOxideEmissionsFactors: 100,
  },
  {
    kind: '天然气',
    consumption: 100,
    CarbonEmissions: 100,
    CarbonEmissionsFactors: 100,
    MethaneEmissions: 100,
    MethaneEmissionsFactors: 100,
    NitrousOxideEmissions: 100,
    NitrousOxideEmissionsFactors: 100,
  },
  {
    kind: '其他',
    consumption: 100,
    CarbonEmissions: 100,
    CarbonEmissionsFactors: 100,
    MethaneEmissions: 100,
    MethaneEmissionsFactors: 100,
    NitrousOxideEmissions: 100,
    NitrousOxideEmissionsFactors: 100,
  }
])
</script>
