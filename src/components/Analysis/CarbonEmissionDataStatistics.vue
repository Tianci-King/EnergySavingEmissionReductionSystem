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
  background: linear-gradient(to right,rgb(248,248,248), rgb(235, 234, 234),rgb(248,248,248));
}
.content-box{
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 20px;
  width: 100%;
}
.chartDiv{
  padding-top:10px;
  width: 45%;
  height: 450px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  display: flex;
}
.chartDiv2{
  padding-top:10px;
  width: 28%;
  height: 450px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  display: flex;
}
</style>

<template>
 <div>
   <h1 class="h1">碳排放数据统计</h1>
   <div class="content-box">
    <div>

    </div>
    <div style="width: 100%;display: flex;justify-content: space-around;">
      <div class="chartDiv">
        <chart style="display: flex;justify-content: center" :option="pieOption"></chart>
      </div>
      <div class="chartDiv">
        <chart style="display: flex;justify-content: center"  :option="barOption"></chart>
      </div>
    </div>
     <div style="padding-bottom: 10px"></div>
     <div style="width: 100%;display: flex;justify-content: space-around;">
       <div class="chartDiv2">
         <chart style="display: flex;justify-content: center;margin-top: 25px" :option="binOption1"></chart>
       </div>
       <div class="chartDiv2">
         <chart style="display: flex;justify-content: center;margin-top: 25px" :option="binOption2"></chart>
       </div>
       <div class="chartDiv2">
         <chart style="display: flex;justify-content: center;margin-top: 25px" :option="binOption3"></chart>
       </div>
     </div>
   </div>
 </div>
</template>

<script setup lang="ts">

import Chart from "@/components/Analysis/chart.vue";
import {ref} from "vue";

const pieOption=ref({})
const pieData=ref([
  { value: 40, name: '固定燃烧' },
  { value: 38, name: '移动燃烧' },
  { value: 32, name: '电热间排放' },
  { value: 28, name: '能源加工转换' },
  { value: 26, name: '差旅通勤' },
  { value: 36, name: '农林牧渔业'}
])
pieOption.value={
  title: {
    text:'碳排放来源结果分布分析',
    left: 'center',
  },
  legend: {
    padding:35,
    top:5,
  },
  series: [
    {
      padAngle: 5,
      avoidLabelOverlap: false,
      stillShowZeroSum:true,
      width: '50%',
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
//-------------------------------------
const optionData = ref(['总计排放',
  '固定燃烧',
  '移动燃烧',
  '电热间排放',
  '工艺排放',
  '差旅通勤',
  '农林牧鱼业']);
const barData = ref([3100, 1200, 300, 200, 900, 300, 200]);
const barOption = ref({});
barOption.value = {
  title: {
    text: '碳排放来源统计汇总',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: function (params: any) {
      var tar = params[1];
      return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    splitLine: { show: false },
    data: optionData.value
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Placeholder',
      type: 'bar',
      stack: 'Total',
      itemStyle: {
        borderColor: 'transparent',
        color: 'transparent'
      },
      emphasis: {
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        }
      },
      data: [0, 1900, 1600, 1400, 500, 200]
    },
    {
      name: '碳排放量',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'inside'
      },
      data: barData.value
    }
  ]
};
//----------------------------------------
const binOption1 = ref({
  title: {
    text:'生产过程直接排放',
    left: 'center',
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    padding:30,
    top:9,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 25,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: true
      },
      data: [
        { value: 7, name: '能源加工转换' },
        { value: 21, name: '工艺排放' },
        { value: 12, name: '移动燃烧' },
        { value: 60 , name: '固定燃烧' }
      ]
    }
  ]
});

const binOption2 = ref({
  title: {
    text:'供热与电力间接排放',
    left: 'center',
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    padding:30,
    top:9,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 25,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: true
      },
      data: [
        { value: 12, name: '售出热力' },
        { value: 15, name: '购入热力' },
        { value: 37, name: '售出电力' },
        { value: 36 , name: '购入电力' }
      ]
    }
  ]
});

const binOption3 = ref({
  title: {
    text:'价值链间接排放',
    left: 'center',
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    padding:30,
    top:9,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 25,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: true
      },
      data: [
        { value: 49, name: '员工通勤' },
        { value: 51, name: '员工差旅' },
      ]
    }
  ]
});

</script>