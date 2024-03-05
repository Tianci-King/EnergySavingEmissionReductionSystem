<style scoped>
.h1{
  font-size: x-large;
  font-weight: bold;
  color: #252525;
  text-align: center;
  height: 50px;
  line-height: 50px;
  width: 60%;
  margin: auto;
  background: linear-gradient(to right,rgb(255, 255, 255), rgb(235, 234, 234),rgb(255, 255, 255));
}
.content-box{
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 20px;
}
.chartDiv{
  padding:20px 10px 10px 10px;
  width: 50%;
  height: 450px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15)
}
</style>

<template>
 <div>
   <h1 class="h1">碳排放数据统计</h1>
   <div class="content-box">
    <div>

    </div>
    <div style="width: 90%;">
      <div class="chartDiv">
        <chart :option="pieOption"></chart>
      </div>
     <chart></chart>
    </div>
   </div>
 </div>
</template>

<script setup lang="ts">

import Chart from "@/components/Analysis/chart.vue";
import {ref} from "vue";

const pieOption=ref({})
const pieData=ref([
  { value: 40, name: 'rose 1' },
  { value: 38, name: 'rose 2' },
  { value: 32, name: 'rose 3' },
  { value: 30, name: 'rose 4' },
  { value: 28, name: 'rose 5' },
  { value: 26, name: 'rose 6' },
])
pieOption.value={
  title: {
    text:'碳排放来源分布饼图',
    left: 'center',
  },
  legend: {
    padding:5,
    top:25,
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      padAngle: 5,
      avoidLabelOverlap: false,
      stillShowZeroSum:true,
      width: '55%',
      height: '100%',
      radius: ['40%', '100%'],
      top:20,
      left: 150,
      type: 'pie',
      roseType: 'area',
      itemStyle: {
        borderRadius: 10,
      },
      data: pieData.value
    }
  ]
};

</script>