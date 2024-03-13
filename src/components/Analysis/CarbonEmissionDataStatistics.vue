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
.cardDiv{
  display: flex;
  gap: 50px;
  justify-content: space-around;
  margin: 50px;
}
.firstCard{
  background:linear-gradient(rgb(240, 192, 74),rgb(238, 126, 74));
  border-radius: 10px;
  transform: scale(1.3);
  color: white;
}
.resultCard{
  background:linear-gradient(rgb(251, 255, 253),rgb(246, 255, 250));
  border-radius: 10px;
  border:rgb(160, 211, 186) solid 1px;
  transform: scale(1.1);
}
</style>

<template>
 <div>
   <h1 class="h1">碳排放数据统计</h1>
   <div class="content-box">
    <div class="cardDiv">
      <result-card
          :result-card-props="{name:'总CO2',value:13640,compare:30}"
          class="firstCard"
      >
      </result-card>
      <div style="line-height: 100px;font-size: xx-large;color: rgb(97, 188, 137);user-select: none;padding-top: 1vw;padding-left: 1vw">》</div>
      <result-card
          :result-card-props="{name:'CO2',value:10250,compare:-30}"
          class="resultCard"
      >
      </result-card>
      <result-card
          :result-card-props="{name:'CH4',value:560,compare:0}"
          class="resultCard"
      >
      </result-card>
      <result-card
          :result-card-props="{name:'N2O',value:2650,compare:20}"
          class="resultCard"
      >
      </result-card>
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
import {ref, toRefs} from "vue";
import ResultCard from "@/components/Analysis/ResultCard.vue";
import AnalysisStore from "@/stores/Analysis.ts";

const useAnalysisStore = AnalysisStore();

const pieOption=ref({})
const {pieData} = toRefs(useAnalysisStore.data1);
pieOption.value={
  title: {
    text:'碳排放来源结果分布饼图分析',
    left: 'center',
  },
  legend: {
    bottom: 20
  },
  series: [
    {
      padAngle: 5,
      avoidLabelOverlap: false,
      stillShowZeroSum:true,
      width: '50%',
      height: '60%',
      radius: ['40%', '100%'],
      top:65,
      left: 150,
      type: 'pie',
      roseType: 'area',
      itemStyle: {
        borderRadius: 10,
      },
      data: pieData
    }
  ]
};
//-------------------------------------
const {optionData, barData} = toRefs(useAnalysisStore.data2);
const barOption = ref({});
barOption.value = {
  title: {
    text: '碳排放来源柱状图分析',
    left: 'center',
  },
  xAxis: {
    type: 'category',
    data: optionData.value
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [barData.value[0], barData.value[1], barData.value[2], barData.value[3], barData.value[4], barData.value[5], barData.value[6],
        {value: barData.value[7], itemStyle: {color: 'rgb(97, 188, 137)'}},
        {value: barData.value[8], itemStyle: {color: 'rgb(97, 188, 137)'}}
      ],
      type: 'bar'
    }
  ]
};
//----------------------------------------
const {pieData: pieData21} = toRefs(useAnalysisStore.data31);
const {pieData: pieData22} = toRefs(useAnalysisStore.data32);
const {pieData: pieData23} = toRefs(useAnalysisStore.data33);
const binOption1 = ref({
  title: {
    text:'生产过程直接排放',
    left: 'center',
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top:40
  },
  series: [
    {
      name: '生产过程直接排放',
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
      data: pieData21
    }
  ]
});

const binOption2 = ref({
  title: {
    text:'间接能源消耗排放',
    left: 'center',
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: 40
  },
  series: [
    {
      name: '间接能源消耗排放',
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
      data: pieData22
    }
  ]
});

const binOption3 = ref({
  title: {
    text:'碳减排',
    left: 'center',
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: 40
  },
  series: [
    {
      name: '碳减排',
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
      data: pieData23
    }
  ]
});

</script>