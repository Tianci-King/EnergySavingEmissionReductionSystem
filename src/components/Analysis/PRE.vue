<script setup lang="ts">
import {onMounted, ref} from "vue";
import Chart from "@/components/Analysis/chart.vue";
import tableService from "@/services/tableservice.ts";
import analysisStore from "@/stores/Analysis.ts";

const useAnalysisStore = analysisStore();

onMounted(async () => {
  const res = await tableService.detect();
  console.log(res.data);
  useAnalysisStore.setDetectData(res.data);
})

const stackOption = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: useAnalysisStore.detectData.legendData
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: useAnalysisStore.detectData.xAxisData
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      "name": "固定燃烧",
      "type": "line",
      "stack": "Total",
      "data": useAnalysisStore.detectData.value[0]
    },
    {
      "name": "移动燃烧",
      "type": "line",
      "stack": "Total",
      "data": useAnalysisStore.detectData.value[1]
    },
    {
      "name": "电热间排放",
      "type": "line",
      "stack": "Total",
      "data": useAnalysisStore.detectData.value[2]
    },
    {
      "name": "能源加工转换",
      "type": "line",
      "stack": "Total",
      "data": useAnalysisStore.detectData.value[3]
    },
    {
      "name": "差旅通勤",
      "type": "line",
      "stack": "Total",
      "data": useAnalysisStore.detectData.value[4]
    },
    {
      "name": "新能源减排",
      "type": "line",
      "stack": "Total",
      "data": useAnalysisStore.detectData.value[5]
    },
    {
      "name": "土地利用碳汇",
      "type": "line",
      "stack": "Total",
      "data": useAnalysisStore.detectData.value[6]
    },
    {
      "name": "农林牧渔业",
      "type": "line",
      "stack": "Total",
      "data": useAnalysisStore.detectData.value[7]
    }
  ]
};

const sankeyData = ref({
  "data": [
    {
      "name": "柴油"
    },
    {
      "name": "通勤差旅"
    },
    {
      "name": "生产过程直接排放"
    },
    {
      "name": "焦炭"
    },
    {
      "name": "天然气"
    },
    {
      "name": "固定燃烧"
    },
    {
      "name": "电力热力"
    },
    {
      "name": "原煤"
    },
    {
      "name": "能源加工转换"
    },
    {
      "name": "精洗煤"
    },
    {
      "name": "汽油"
    },
    {
      "name": "工艺排放"
    },
    {
      "name": "移动燃烧"
    }
  ],
  "links": [
    {
      "source": "生产过程直接排放",
      "target": "固定燃烧",
      "value": 1100
    },
    {
      "source": "生产过程直接排放",
      "target": "移动燃烧",
      "value": 730
    },
    {
      "source": "生产过程直接排放",
      "target": "能源加工转换",
      "value": 680
    },
    {
      "source": "生产过程直接排放",
      "target": "电力热力",
      "value": 630
    },
    {
      "source": "生产过程直接排放",
      "target": "通勤差旅",
      "value": 530
    },
    {
      "source": "生产过程直接排放",
      "target": "固定燃烧",
      "value": 1630
    },
    {
      "source": "生产过程直接排放",
      "target": "移动燃烧",
      "value": 680
    },
    {
      "source": "生产过程直接排放",
      "target": "工艺排放",
      "value": 1080
    },
    {
      "source": "固定燃烧",
      "target": "原煤",
      "value": 530
    },
    {
      "source": "固定燃烧",
      "target": "精洗煤",
      "value": 1630
    },
    {
      "source": "固定燃烧",
      "target": "焦炭",
      "value": 680
    },
    {
      "source": "固定燃烧",
      "target": "天然气",
      "value": 1080
    },
    {
      "source": "移动燃烧",
      "target": "汽油",
      "value": 1003
    },
    {
      "source": "移动燃烧",
      "target": "柴油",
      "value": 4000
    },
    {
      "source": "移动燃烧",
      "target": "原煤",
      "value": 120
    }
  ]
})

const sankeyOption = ref({
  series: {
    type: 'sankey',
    layout: 'none',
    emphasis: {
      focus: 'adjacency'
    },
    data: sankeyData.value.data,
    links: sankeyData.value.links
  }
});


</script>

<template>
  <div>
    <h1 class="h1">碳排放三阶段数据包络分析（3S-DEA）</h1>
    <div class="content-box">
      <div style="width: 100%;display: flex;justify-content: space-around;">
        <div class="chartDiv">
          <chart style="display: flex;justify-content: center" :option="sankeyOption"></chart>
        </div>
        <div class="chartDiv">
        <chart style="display: flex;justify-content: center" :option="stackOption"></chart>
        </div>
        </div>
      <div style="padding-bottom: 10px"></div>
    </div>
  </div>
</template>

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
.h2{
  font-size: large;
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