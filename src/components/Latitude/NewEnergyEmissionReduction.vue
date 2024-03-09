<template>
  <div style="padding: 40px 20px">
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 30px;font-weight: bold">新能源减排</text>
    </div>
    <div style="padding: 0 0 20px 0">
      <text style="font-size: 17px">光伏&风电 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{text.data7[0]}}</text>
    </div>
    <a-table :columns="columns1" :data="data1" :bordered="false" :pagination="false">
      <template #InstalledCapacity="{ rowIndex }">
        <a-input v-model="data1[rowIndex].InstalledCapacity" placeholder="请输入" @change="changeInput(data1[rowIndex].kind,data1[rowIndex].InstalledCapacity,data1[rowIndex].SunshineOperatingHours,rowIndex,data1[rowIndex])"/>
      </template>
      <template #SunshineOperatingHours="{ rowIndex }">
        <a-input v-model="data1[rowIndex].SunshineOperatingHours" placeholder="请输入" @change="changeInput(data1[rowIndex].kind,data1[rowIndex].InstalledCapacity,data1[rowIndex].SunshineOperatingHours,rowIndex,data1[rowIndex])"/>
      </template>
      <template #CarbonEmissionsFactors="{ rowIndex }">
        <a-input v-model="data1[rowIndex].CarbonEmissionsFactors" placeholder="缺省"/>
      </template>
    </a-table>

    <div style="padding: 40px 0 20px 0">
      <text style="font-size: 17px">潮汐能 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{text.data7[1]}}</text>
    </div>
    <a-table :columns="columns2" :data="data2" :bordered="false" :pagination="false">
      <template #PowerGenerationMethod="{ rowIndex }">
        <a-select v-model="data2[rowIndex].PowerGenerationMethod" @change="()=>handleChange(rowIndex)">
          <a-option v-for="value of Object.values(options)">{{value}}</a-option>
        </a-select>
      </template>
      <template #AverageTidalDifference="{ rowIndex }">
        <a-input v-model="data2[rowIndex].AverageTidalDifference" placeholder="请输入" @change="changeInput('潮汐能',data2[rowIndex].AverageTidalDifference,data2[rowIndex].AverageReservoirArea,rowIndex,data2[rowIndex])"/>
      </template>
      <template #AverageReservoirArea="{ rowIndex }">
        <a-input v-model="data2[rowIndex].AverageReservoirArea" placeholder="请输入" @change="changeInput('潮汐能',data2[rowIndex].AverageTidalDifference,data2[rowIndex].AverageReservoirArea,rowIndex,data2[rowIndex])"/>
      </template>
    </a-table>

<!--    <div style="padding: 40px 0 20px 0">-->
<!--      <text style="font-size: 17px">地热能-供电 : </text>-->
<!--      <text style="font-size: 17px;font-weight: lighter">{{text.data7[2]}}</text>-->
<!--    </div>-->
<!--    <a-table :columns="columns3" :data="data3" :bordered="false" :pagination="false">-->
<!--      <template #GridConnectedPower="{ rowIndex }">-->
<!--        <a-input v-model="data3[rowIndex].GridConnectedPower" placeholder="请输入"/>-->
<!--      </template>-->
<!--      <template #MarginalEmissionFactorPower="{ rowIndex }">-->
<!--        <a-input v-model="data3[rowIndex].MarginalEmissionFactorPower" placeholder="缺省"/>-->
<!--      </template>-->
<!--      <template #MarginalEmissionFactorCapacity="{ rowIndex }">-->
<!--        <a-input v-model="data3[rowIndex].MarginalEmissionFactorCapacity" placeholder="缺省"/>-->
<!--      </template>-->
<!--    </a-table>-->

<!--    <div style="padding: 40px 0 20px 0">-->
<!--      <text style="font-size: 17px">地热能-供暖 : </text>-->
<!--      <text style="font-size: 17px;font-weight: lighter">{{text.data7[3]}}</text>-->
<!--    </div>-->
<!--    <a-table :columns="columns4" :data="data4" :bordered="false" :pagination="false">-->
<!--      <template #HeatingArea="{ rowIndex }">-->
<!--        <a-input v-model="data3[rowIndex].HeatingArea" placeholder="请输入"/>-->
<!--      </template>-->
<!--      <template #HeatLoadCoefficient="{ rowIndex }">-->
<!--        <a-input v-model="data3[rowIndex].HeatLoadCoefficient" placeholder="缺省"/>-->
<!--      </template>-->
<!--      <template #AnnualHeatingTime="{ rowIndex }">-->
<!--        <a-input v-model="data3[rowIndex].AnnualHeatingTime" placeholder="缺省"/>-->
<!--      </template>-->
<!--      <template #ConversionFactor="{ rowIndex }">-->
<!--        <a-input v-model="data3[rowIndex].ConversionFactor" placeholder="缺省"/>-->
<!--      </template>-->
<!--      <template #HeatDistributionLoss="{ rowIndex }">-->
<!--        <a-input v-model="data3[rowIndex].HeatDistributionLoss" placeholder="缺省"/>-->
<!--      </template>-->
<!--      <template #EmissionFactor="{ rowIndex }">-->
<!--        <a-input v-model="data3[rowIndex].EmissionFactor" placeholder="缺省"/>-->
<!--      </template>-->
<!--      <template #NetThermalEfficiency="{ rowIndex }">-->
<!--        <a-input v-model="data3[rowIndex].NetThermalEfficiency" placeholder="缺省"/>-->
<!--      </template>-->
<!--    </a-table>-->

    <div style="padding: 40px 0 20px 0">
      <text style="font-size: 17px">生物质发电 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{text.data7[4]}}</text>
    </div>
    <a-table :columns="columns5" :data="data5" :bordered="false" :pagination="false">
      <template #GridConnectedPower="{ rowIndex }">
        <a-input v-model="data5[rowIndex].GridConnectedPower" placeholder="请输入" @change="changeInput2('生物质发电',data5[rowIndex].GridConnectedPower,rowIndex, 5)"/>
      </template>
      <template #UnitEmissionFactorCO2="{ rowIndex }">
        <a-input v-model="data5[rowIndex].UnitEmissionFactorCO2" placeholder="缺省"/>
      </template>
    </a-table>

    <div style="padding: 40px 0 20px 0">
      <text style="font-size: 17px">水电 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{text.data7[5]}}</text>
    </div>
    <a-table :columns="columns6" :data="data6" :bordered="false" :pagination="false">
      <template #GridConnectedPower="{ rowIndex }">
        <a-input v-model="data6[rowIndex].GridConnectedPower" placeholder="请输入" @change="changeInput2('水电',data6[rowIndex].GridConnectedPower,rowIndex, 6)"/>
      </template>
      <template #UnitEmissionFactorCO2="{ rowIndex }">
        <a-input v-model="data6[rowIndex].UnitEmissionFactorCO2" placeholder="缺省"/>
      </template>
    </a-table>

    <div style="padding: 40px 0 20px 0">
      <text style="font-size: 17px">煤层气发电 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{text.data7[6]}}</text>
    </div>
    <a-table :columns="columns7" :data="data7" :bordered="false" :pagination="false">
      <template #GridConnectedPower="{ rowIndex }">
        <a-input v-model="data7[rowIndex].GridConnectedPower" placeholder="请输入" @change="changeInput2('煤层气发电',data7[rowIndex].GridConnectedPower,rowIndex, 7)"/>
      </template>
      <template #UnitEmissionFactorCO2="{ rowIndex }">
        <a-input v-model="data7[rowIndex].UnitEmissionFactorCO2" placeholder="缺省"/>
      </template>
    </a-table>

    <div style="padding: 40px 0 20px 0">
      <text style="font-size: 17px">沼气利用 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{text.data7[7]}}</text>
    </div>
    <a-table :columns="columns8" :data="data8" :bordered="false" :pagination="false">
      <template #InstalledCapacity="{ rowIndex }">
        <a-input v-model="data8[rowIndex].InstalledCapacity" placeholder="请输入" @change="changeInput2('沼气利用',data8[rowIndex].InstalledCapacity,rowIndex, 8)"/>
      </template>
      <template #UnitEmissionFactorCO2="{ rowIndex }">
        <a-input v-model="data8[rowIndex].UnitEmissionFactorCO2" placeholder="缺省"/>
      </template>
    </a-table>

    <div style="padding: 40px 0 20px 0">
      <text style="font-size: 17px">氢能 : </text>
      <text style="font-size: 17px;font-weight: lighter">{{text.data7[8]}}</text>
    </div>
    <a-table :columns="columns9" :data="data9" :bordered="false" :pagination="false">
      <template #CumulativeMileage="{ rowIndex }">
        <a-input v-model="data9[rowIndex].CumulativeMileage" placeholder="请输入"/>
      </template>
      <template #DieselReductionFactor="{ rowIndex }">
        <a-input v-model="data9[rowIndex].DieselReductionFactor" placeholder="缺省"/>
      </template>
      <template #NaturalGasReductionFactor="{ rowIndex }">
        <a-input v-model="data9[rowIndex].NaturalGasReductionFactor" placeholder="缺省"/>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import latitudeStore from "@/stores/Latitude.ts";
import text from "@/types/text.ts";
import {calculateEmission3, calculateEmission4} from "@/utils/calculate.ts";

const latitude = latitudeStore();
const data1 = latitude.data71;
const data2 = latitude.data72;
// const data3 = latitude.data73;
// const data4 = latitude.data74;
const data5 = latitude.data75;
const data6 = latitude.data76;
const data7 = latitude.data77;
const data8 = latitude.data78;
const data9 = latitude.data79;

const rowWidth = 150;

const columns1 = ref([{
  title: '类型',
  dataIndex: 'kind',
  width: rowWidth-80,
  align: 'center'
},{
  title: '装机容量（kw）',
  dataIndex: 'InstalledCapacity',
  slotName: 'InstalledCapacity',
  width: rowWidth-40,
  align: 'center'
}, {
  title: '日照/运行时长（h）',
  dataIndex: 'SunshineOperatingHours',
  slotName: 'SunshineOperatingHours',
  width: rowWidth-40,
  align: 'center'
}, {
  title: 'CO₂',
  children: [{
    title: '减排量(t)',
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
}]);

const columns2 = ref([
  {
    title: '发电方式',
    dataIndex: 'PowerGenerationMethod',
    slotName: 'PowerGenerationMethod',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '平均潮差（m）',
    dataIndex: 'AverageTidalDifference',
    slotName: 'AverageTidalDifference',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '水库平均面积（km²）',
    dataIndex: 'AverageReservoirArea',
    slotName: 'AverageReservoirArea',
    width: rowWidth,
    align: 'center'
  },
  {
    title: 'CO2减排量（t）',
    dataIndex: 'CO2EmissionReduction',
    slotName: 'CO2EmissionReduction',
    width: rowWidth,
    align: 'center'
  }
]);

const handleChange = (rowIndex: number) => {

}

const options = [
  "单向发电",
  "双向发电"
  ]

const columns3 = ref([
  {
    title: '上网电量（kWh）',
    dataIndex: 'GridConnectedPower',
    slotName: 'GridConnectedPower',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '电量边际排放因子',
    dataIndex: 'MarginalEmissionFactorPower',
    slotName: 'MarginalEmissionFactorPower',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '容量边际排放因子',
    dataIndex: 'MarginalEmissionFactorCapacity',
    slotName: 'MarginalEmissionFactorCapacity',
    width: rowWidth,
    align: 'center'
  },
  {
    title: 'CO2减排量（t）',
    dataIndex: 'CO2EmissionReduction',
    slotName: 'CO2EmissionReduction',
    width: rowWidth,
    align: 'center'
  }
]);

const columns4 = ref([
  {
    title: '供暖面积（m²）',
    dataIndex: 'HeatingArea',
    slotName: 'HeatingArea',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '热负载系数（GW/m²）',
    dataIndex: 'HeatLoadCoefficient',
    slotName: 'HeatLoadCoefficient',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '年供暖时间（h）',
    dataIndex: 'AnnualHeatingTime',
    slotName: 'AnnualHeatingTime',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '转换因子（从GWh到TJ）',
    dataIndex: 'ConversionFactor',
    slotName: 'ConversionFactor',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '热分配损耗（％）',
    dataIndex: 'HeatDistributionLoss',
    slotName: 'HeatDistributionLoss',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '排放因子',
    dataIndex: 'EmissionFactor',
    slotName: 'EmissionFactor',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '净热效率（%）',
    dataIndex: 'NetThermalEfficiency',
    slotName: 'NetThermalEfficiency',
    width: rowWidth,
    align: 'center'
  },
  {
    title: 'CO2减排量（t）',
    dataIndex: 'CO2EmissionReduction',
    slotName: 'CO2EmissionReduction',
    width: rowWidth,
    align: 'center'
  }
]);

const columns5 = ref([
  {
    title: '上网电量（kWh）',
    dataIndex: 'GridConnectedPower',
    slotName: 'GridConnectedPower',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '单位减排因子',
    dataIndex: 'UnitEmissionFactorCO2',
    slotName: 'UnitEmissionFactorCO2',
    width: rowWidth,
    align: 'center'
  },
  {
    title: 'CO₂减排量（t）',
    dataIndex: 'EmissionReduction',
    slotName: 'EmissionReduction',
    width: rowWidth,
    align: 'center'
  }
]);

const columns6 = ref([
  {
    title: '上网电量（kWh）',
    dataIndex: 'GridConnectedPower',
    slotName: 'GridConnectedPower',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '单位减排因子',
    dataIndex: 'UnitEmissionFactorCO2',
    slotName: 'UnitEmissionFactorCO2',
    width: rowWidth,
    align: 'center'
  },
  {
    title: 'CO₂减排量（t）',
    dataIndex: 'EmissionReduction',
    slotName: 'EmissionReduction',
    width: rowWidth,
    align: 'center'
  }
]);
const columns7 = ref([
  {
    title: '上网电量（kWh）',
    dataIndex: 'GridConnectedPower',
    slotName: 'GridConnectedPower',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '单位减排因子',
    dataIndex: 'UnitEmissionFactorCO2',
    slotName: 'UnitEmissionFactorCO2',
    width: rowWidth,
    align: 'center'
  },
  {
    title: 'CO₂减排量（t）',
    dataIndex: 'EmissionReduction',
    slotName: 'EmissionReduction',
    width: rowWidth,
    align: 'center'
  }
]);

const columns8 = ref([
  {
    title: '装机规模（MW）',
    dataIndex: 'InstalledCapacity',
    slotName: 'InstalledCapacity',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '单位减排因子',
    dataIndex: 'UnitEmissionFactorCO2',
    slotName: 'UnitEmissionFactorCO2',
    width: rowWidth,
    align: 'center'
  },
  {
    title: 'CO₂减排量（t）',
    dataIndex: 'EmissionReduction',
    slotName: 'EmissionReduction',
    width: rowWidth,
    align: 'center'
  }
]);

const columns9 = ref([
  {
    title: '类型',
    dataIndex: 'Type',
    slotName: 'Type',
    width: rowWidth+20,
    align: 'center'
  },
  {
    title: '累计行驶里程（10²km）',
    dataIndex: 'CumulativeMileage',
    slotName: 'CumulativeMileage',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '替代柴油减排因子',
    dataIndex: 'DieselReductionFactor',
    slotName: 'DieselReductionFactor',
    width: rowWidth,
    align: 'center'
  },
  {
    title: '替代天然气减排因子',
    dataIndex: 'NaturalGasReductionFactor',
    slotName: 'NaturalGasReductionFactor',
    width: rowWidth,
    align: 'center'
  },
  {
    title: 'CO2减排量-柴油基准（t）',
    dataIndex: 'CO2ReductionDiesel',
    slotName: 'CO2ReductionDiesel',
    width: rowWidth+20,
    align: 'center'
  },
  {
    title: 'CO2减排量-天然气基准（t）',
    dataIndex: 'CO2ReductionNaturalGas',
    slotName: 'CO2ReductionNaturalGas',
    width: rowWidth+30,
    align: 'center'
  }
]);

const changeInput = (kind, InstalledCapacity, SunshineOperatingHours, index, data) => {
  const emissions = calculateEmission3(kind, InstalledCapacity, SunshineOperatingHours);
  data.CarbonEmissions = emissions.toFixed(3);
  data.CO2EmissionReduction = emissions.toFixed(3);
};

const changeInput2 = (type, GridConnectedPower, index, dataNumber) => {
  const emissions = calculateEmission4(type, GridConnectedPower);
  switch(dataNumber) {
    case 5:
      data5[index].EmissionReduction = emissions.toFixed(3);
      break;
    case 6:
      data6[index].EmissionReduction = emissions.toFixed(3);
      break;
    case 7:
      data7[index].EmissionReduction = emissions.toFixed(3);
      break;
    case 8:
      data8[index].EmissionReduction = emissions.toFixed(3);
      break;
  }
};
</script>

