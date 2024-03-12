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

const pieOption =ref( {
  legend: {
    padding:30,
    bottom:9,
    borderRadius:50
  },
  series: [
    {
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '40%'],
      label: {
        position: 'inner',
        fontSize: 14
      },
      emptyCircleStyle:{
        color: 'rgb(123, 206, 238)'
      },
      labelLine: {
        show: false
      },
      data: []
    },
    {
      type: 'pie',
      radius: ['45%', '60%'],
      padAngle: 5,
      itemStyle: {
        borderRadius: "50%",
      },
      data: [
        { value: 71900, name: '碳排放成本'},
        { value: 84000, name: '碳汇收益'},
        { value: 12100, name: '碳成本净值' },
      ]
    }

  ]
})

const pieData = ref()
//保留一位
pieData.value = `碳排放成本\n71900 ${(71900/(84000+71900+12100)*100).toFixed(1)}%\n
碳汇收益\n84000 ${(84000/(84000+71900+12100)*100).toFixed(1)}%\n
碳成本净值\n12100 ${(12100/(84000+71900+12100)*100).toFixed(1)}%`
</script>

<template>
  <div>
    <h1 class="h1">碳排放数据预测</h1>
    <div class="content-box">
      <div style="width: 100%;display: flex;justify-content: space-around;flex-direction: column">
        <div class="chartDiv" style="width: 100%">
          <chart style="display: flex;justify-content: center" :option="stackOption"></chart>
        </div>
        <div style="display: flex;flex-direction: column;gap: 10px;margin-top: 10px;font-size: large">
          <h3>智能分析</h3>
          <p>上图展示了prophet预测模型的拟合预测图。</p>
          <p>一、总体数据趋势分析</p>
          <p>根据预测结果，按照现有排放策略未来12个月公司碳排放数据将呈现上升/波动/下降/平稳趋势，产生总量为xx的碳排放。</p>
          <p>二、各项数据分析</p>
          <p>在各项预测数据中，生产过程直接排放量呈上升/波动/下降/平稳趋势，产生总量为xx的碳排放；供热与电力直接排放呈上升/波动/下降/平稳趋势，产生总量为xx的碳排放；价值链间接排放呈上升/波动/下降/平稳趋势，产生总量为xx的碳排放。</p>
          <p>三、智能建议</p>
          <p>公司在xx子项的排放状态良好，在xx子项的碳排放控制呈现恶化趋势，建议在该项进行减碳。</p>
        </div>
      </div>
      <div style="width: 100%;display: flex;justify-content: space-around;">
        <div style="width: 45%">
          <h1 class="h1">碳排放路径分析</h1>
          <div class="chartDiv" style="width: 100%">
            <chart style="display: flex;justify-content: center" :option="sankeyOption"></chart>
          </div>
          <div style="display: flex;flex-direction: column;gap: 10px;margin-top: 10px;font-size: large">
            <h3>碳排放路径分析：</h3>
            <p>如图所示，生产过程直接排放中最大的碳排放流动去向是固定燃烧，固定燃烧中最大的碳排放流动去向是精洗煤。通过链路分析，发现生产过程直接排放-固定烷烧-精洗煤是一条关键的排放链路。</p>
          </div>
        </div>
        <div style="width: 45%">
          <h1 class="h1">碳排放成本-收益画像</h1>
          <div class="chartDiv" style="width: 100%">
            <chart style="display: flex;justify-content: center" :option="pieOption" :size="{width:'70%',height:'100%'}"></chart>
            <div style="width: 30%;white-space: pre-wrap;font-size: x-large;padding-top: 40px">
              {{pieData}}
            </div>
          </div>
          <div style="display: flex;flex-direction: column;gap: 10px;margin-top: 10px;font-size: large">
            <h3>碳排放成本-收益画像：</h3>
            <p>按照50元/吨的碳排放权交易价格并基于历史数据设置碳排放限额，本月产生碳排放成本71900元，碳汇收益 84000元，共得碳成本净值12100元。</p>
          </div>
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
  margin-top: 20px;
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