<template>
  <a-layout style="background: #f2f3f5;" >
    <a-layout-sider class="sider" :width="250">
      <div class="Menu">
        <a-menu
            class="menu"
            @menu-item-click="handleClick"
            :default-selected-keys="['#anchor1']"
        >
          <a-menu-item-group class="menuItemGroup">
      <span style="font-size: x-large;font-weight: bold;color: #252525" >
        核算维度
      </span>
            <a-menu-item class="menuItem" key="#anchor1"><icon-apps />固定燃烧</a-menu-item>
            <a-menu-item class="menuItem" key="#anchor2"><icon-apps />移动燃烧</a-menu-item>
            <a-menu-item class="menuItem" key="#anchor3"><icon-apps />电热间排放</a-menu-item>
            <a-menu-item class="menuItem" key="#anchor4"><icon-apps />能源加工转换</a-menu-item>
            <a-menu-item class="menuItem" key="#anchor5"><icon-apps />工艺排放</a-menu-item>
            <a-menu-item class="menuItem" key="#anchor6"><icon-apps />差旅通勤</a-menu-item>
            <a-menu-item class="menuItem" key="#anchor7"><icon-apps />新能源减排</a-menu-item>
            <a-menu-item class="menuItem" key="#anchor8"><icon-apps />土地利用碳汇</a-menu-item>
            <a-menu-item class="menuItem" key="#anchor9"><icon-apps />农林牧鱼业</a-menu-item>
          </a-menu-item-group>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout-content class="mainContent">
      <a-scrollbar style="height: calc(88vh);overflow: auto;padding-bottom: 40px">
        <stationary-combustion id="anchor1"/>
        <mobile-burning id="anchor2"/>
        <indirect-emissions-of-electric-heat id="anchor3"/>
        <energy-processing-conversion id="anchor4"/>
        <travel-commuting id="anchor5"/>
        <new-energy-emission-reduction id="anchor7"/>
        <land-use-carbon-sinks id="anchor8"/>
        <agriculture-forestry-animal-husbandry-fishery id="anchor9"/>
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import StationaryCombustion from "@/components/Latitude/StationaryCombustion.vue";
import emitter from "@/utils/mitt.ts";
import MobileBurning from "@/components/Latitude/MobileBurning.vue";
import EnergyProcessingConversion from "@/components/Latitude/EnergyProcessingConversion.vue";
import IndirectEmissionsOfElectricHeat from "@/components/Latitude/IndirectEmissionsOfElectricHeat.vue";
import TravelCommuting from "@/components/Latitude/TravelCommuting.vue";
import NewEnergyEmissionReduction from "@/components/Latitude/NewEnergyEmissionReduction.vue";
import LandUseCarbonSinks from "@/components/Latitude/LandUseCarbonSinks.vue";
import AgricultureForestryAnimalHusbandryFishery
  from "@/components/Latitude/AgricultureForestryAnimalHusbandryFishery.vue";

emitter.on("changeLatitudeMenu", (key: string) => {
  switch (key) {
    case "1":
      console.log("固定燃烧");
      break;
    case "2":
      console.log("移动燃烧");
      break;
    case "3":
      console.log("电热间排放");
      break;
    case "4":
      console.log("能源加工转换");
      break;
    case "5":
      console.log("工艺排放");
      break;
    case "6":
      console.log("差旅通勤");
      break;
    case "7":
      console.log("新能源减排");
      break;
    case "8":
      console.log("土地利用碳汇");
      break;
    case "9":
      console.log("农林牧鱼业");
      break;
  }
});

const router = useRouter();
const handleClick = (e: any) => {
  console.log(e);
  router.push({path: "/form" , hash: e});
}
</script>