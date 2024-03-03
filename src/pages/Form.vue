<template>
  <a-layout style="background: #f2f3f5;" >
    <a-layout-sider class="sider" :width="250">
      <div class="Menu">
        <LatitudeMenu :handle-click="handleClick" :selected-key="selectedKey" :latitude-list="flagList"></LatitudeMenu>
      </div>
    </a-layout-sider>
    <a-layout-content class="mainContent">
      <a-scrollbar ref="scroll" style="height: calc(88vh);overflow: auto;padding-bottom: 40px;">
        <span style="font-size: xx-large">{{trade}}</span>
        <div style="width: 84vw"></div>
        <div v-if="flagList.stationaryCombustion === 1" ref="1" @mouseenter="selectedKey='1'">
          <stationary-combustion />
        </div>
        <div v-if="flagList.mobileBurning === 1" ref="2" @mouseenter="selectedKey='2'">
          <mobile-burning/>
        </div>
        <div v-if="flagList.indirectEmissionsOfElectricHeat === 1" ref="3" @mouseenter="selectedKey='3'">
          <indirect-emissions-of-electric-heat/>
        </div>
        <div v-if="flagList.energyProcessingConversion === 1" ref="4" @mouseenter="selectedKey='4'">
          <energy-processing-conversion/>
        </div>
        <div v-if="flagList.processEmissions === 1" ref="5" @mouseenter="selectedKey='5'">
          <process-emissions/>
        </div>
        <div v-if="flagList.travelCommuting === 1" ref="6" @mouseenter="selectedKey='6'">
          <travel-commuting/>
        </div>
        <div v-if="flagList.newEnergyEmissionReduction === 1" ref="7" @mouseenter="selectedKey='7'">
          <new-energy-emission-reduction />
        </div>
        <div v-if="flagList.landUseCarbonSinks === 1" ref="8" @mouseenter="selectedKey='8'">
          <land-use-carbon-sinks/>
        </div>
        <div v-if="flagList.agricultureForestryAnimalHusbandryFishery === 1" ref="9" @mouseenter="selectedKey='9'">
          <agriculture-forestry-animal-husbandry-fishery/>
        </div>
      </a-scrollbar>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.sider{
  padding:20px 0 20px 20px;
}

.Menu {
  height: 100%;
}

.mainContent{
  display: flex;
  padding: 30px;
  height: 91vh;
}
</style>

<script setup lang="ts">
import {getCurrentInstance, onMounted, ref} from "vue";
import StationaryCombustion from "@/components/Latitude/StationaryCombustion.vue";
import MobileBurning from "@/components/Latitude/MobileBurning.vue";
import EnergyProcessingConversion from "@/components/Latitude/EnergyProcessingConversion.vue";
import IndirectEmissionsOfElectricHeat from "@/components/Latitude/IndirectEmissionsOfElectricHeat.vue";
import TravelCommuting from "@/components/Latitude/TravelCommuting.vue";
import NewEnergyEmissionReduction from "@/components/Latitude/NewEnergyEmissionReduction.vue";
import LandUseCarbonSinks from "@/components/Latitude/LandUseCarbonSinks.vue";
import AgricultureForestryAnimalHusbandryFishery from "@/components/Latitude/AgricultureForestryAnimalHusbandryFishery.vue";
import LatitudeMenu from "@/components/LatitudeMenu.vue";
import ProcessEmissions from "@/components/Latitude/ProcessEmissions.vue";

import mainStore from "@/stores/Main.ts";

const scroll = ref();
const instance=getCurrentInstance()
const selectedKey = ref("1");
const handleClick = (e: any) => {
  const anchor:any = instance.refs[e];
  selectedKey.value = e;
  if (anchor) {
    scroll.value.scrollTo({ top: anchor.offsetTop, behavior: "smooth" });
  }
};

const useMainStore = mainStore();
const { trade, latitudeList } = useMainStore;

const flagList = ref({
  stationaryCombustion: 0,
  mobileBurning: 0,
  indirectEmissionsOfElectricHeat: 0,
  energyProcessingConversion: 0,
  processEmissions: 0,
  travelCommuting: 0,
  newEnergyEmissionReduction: 0,
  landUseCarbonSinks: 0,
  agricultureForestryAnimalHusbandryFishery: 0,
})
for(let item in latitudeList){
  switch (latitudeList[item]){
    case "固定燃烧":
      flagList.value.stationaryCombustion = 1;
      break;
    case "移动燃烧":
      flagList.value.mobileBurning = 1;
      break;
    case "电热间接排放":
      flagList.value.indirectEmissionsOfElectricHeat = 1;
      break;
    case "能源加工转换":
      flagList.value.energyProcessingConversion = 1;
      break;
    case "工艺排放":
      flagList.value.processEmissions = 1;
      break;
    case "差旅通勤":
      flagList.value.travelCommuting = 1;
      break;
    case "新能源减排":
      flagList.value.newEnergyEmissionReduction = 1;
      break;
    case "土地利用碳汇":
      flagList.value.landUseCarbonSinks = 1;
      break;
    case "农林牧渔业":
      flagList.value.agricultureForestryAnimalHusbandryFishery = 1;
      break;
  }
}
</script>