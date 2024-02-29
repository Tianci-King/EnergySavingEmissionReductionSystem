<template>
  <div style="padding: 40px 20px">
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 30px;font-weight: bold">农林牧渔业</text>
    </div>
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 17px;font-weight: lighter">{{text.data9}}</text>
    </div>
    <a-table :columns="columns" :data="data9" :bordered="false" :pagination="false">
      <template #Number="{ rowIndex }">
        <a-input v-model="data9[rowIndex].Number" placeholder="请输入"/>
      </template>
      <template #EmissionsFactors="{ rowIndex }">
        <a-input v-model="data9[rowIndex].EmissionsFactors" placeholder="缺省"/>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import latitudeStore from "@/stores/Latitude.ts";
import text from "@/types/text.ts";

const latitude = latitudeStore();
const data9 = latitude.data9;

const rowWidth = 150;

const columns = ref([{
  title: '类型',
  dataIndex: 'kind',
  width: rowWidth-40,
  align: 'center'
},{
  title: '名称',
  dataIndex: 'Name',
  width: rowWidth-40,
  align: 'center'
},{
  title: '量',
  dataIndex: 'Number',
  slotName: 'Number',
  width: rowWidth-40,
  align: 'center'
},{
  title: '排放量(t)',
  dataIndex: 'Emissions',
  width: rowWidth-40,
  align: 'center'
},{
  title: '排放因子',
  dataIndex: 'EmissionsFactors',
  slotName: 'EmissionsFactors',
  width: rowWidth-40,
  align: 'center'
}]);
</script>
