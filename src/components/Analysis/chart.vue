<style scoped>

</style>

<template>
  <div ref="chart" :style="size"></div>
</template>

<script setup lang="js">
import {onMounted, ref, watch} from "vue";
import * as echarts from "echarts";

let chart = ref();
const props=defineProps({
  option:{
    type:Object,
    default:()=>{}
  },
  theme:{
    type:String,
    default:''
  },
  size:{
    type:Object,
    default:{width:'100%',height:'100%'}
  }
})


onMounted(()=>{
  let myChart = echarts.init(chart.value, props.theme);
  //检测更新
  watch(()=>props.option,()=>{
    myChart.setOption(props.option);
  })
  //检测窗口变化
  window.addEventListener('resize',()=>{
    myChart.resize()
  })
  props.option && myChart.setOption(props.option);
})


</script>