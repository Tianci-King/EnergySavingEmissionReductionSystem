<template>
  <a-layout style="background: #f2f3f5;" >
    <a-layout-sider class="sider" :width="250">
      <div class="Menu">
        <LatitudeMenu :handle-click="handleClick" :selected-key="selectedKey"></LatitudeMenu>
      </div>
    </a-layout-sider>
    <a-layout-content class="mainContent">
      <a-scrollbar ref="scroll" style="height: calc(88vh);overflow: auto;padding-bottom: 40px">
        <div ref="1" @mouseenter="selectedKey='1'">
          <stationary-combustion />
        </div>
        <div ref="2" @mouseenter="selectedKey='2'">
          <mobile-burning/>
        </div>
        <div ref="3" @mouseenter="selectedKey='3'">
          <indirect-emissions-of-electric-heat/>
        </div>
        <div ref="4" @mouseenter="selectedKey='4'">
          <energy-processing-conversion/>
        </div>
        <div ref="5" @mouseenter="selectedKey='5'">

        </div>
        <div ref="6" @mouseenter="selectedKey='6'">
          <travel-commuting/>
        </div>
        <div ref="7" @mouseenter="selectedKey='7'">
          <new-energy-emission-reduction />
        </div>
        <div ref="8" @mouseenter="selectedKey='8'">
          <land-use-carbon-sinks/>
        </div>
        <div ref="9" @mouseenter="selectedKey='9'">
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

.menu{
  height: 100%;
  font-size: large;
  background-color: #ffffff;
}
.menu .menuItem{
  background-color: #ffffff;
  transform: scale(1.075);
  font-size: medium;
  border-radius:15px 0 0 15px ;
}
.menuItemGroup{
  display: flex;
  flex-direction: column;
  gap: 20px;
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
import AgricultureForestryAnimalHusbandryFishery
  from "@/components/Latitude/AgricultureForestryAnimalHusbandryFishery.vue";
import LatitudeMenu from "@/components/LatitudeMenu.vue";


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
</script>