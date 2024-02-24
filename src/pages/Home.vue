<style scoped>
.Menu {
  height: 100%;
}

.sider{
  padding:20px 0 20px 20px;
}
.mainContent{
  display: flex;
  align-items: center;
  padding: 50px;
}
.tradeContent{
  width: 55%;
  height: 100%;
}
.latitudeContent{
  background: #e1e1e1;
  width: 45%;
  height: 90%;
  border-radius: 20px;
  padding:0 30px;
}
.latitudeCardBox{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}
</style>

<template>
  <a-layout style="min-height: 930px;background: #f2f3f5;" >
    <a-layout-sider class="sider" :width="250">
      <HomeMenu class="Menu" :menu-list="menuList"/>
    </a-layout-sider>
    <a-layout-content class="mainContent">
    <div class="tradeContent"></div>
    <div class="latitudeContent">
      <a-typography-title :heading="5" style="font-weight: bold">请选择您的核算维度</a-typography-title>
      <a-checkbox-group class="latitudeCardBox" v-model="latitudes">
        <latitude-card v-for="(item,index) in latitudeList" :latitude="item" :key="index"></latitude-card>
      </a-checkbox-group>
    </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">

import HomeMenu from "@/components/HomeMenu.vue";
import emitter from "@/utils/mitt.ts";
import LatitudeCard from "@/components/Home/latitudeCard.vue";
import {ref} from "vue";
const latitudes=ref([])

const menuList = [
  {
    key: "1",
    name: "全部行业",
  },
  {
    key: "2",
    name: "能源行业",
  },
  {
    key: "3",
    name: "制造业",
  },
  {
    key: "4",
    name: "商业",
  },
  {
    key: "5",
    name: "农林牧渔",
  },
  {
    key: "6",
    name: "建筑业",
  },
  {
    key: "7",
    name: "采矿业",
  },
];
const latitudeList = [
  {
    name: "固定燃烧",
    img:"public/固定燃烧.png",
  },
  {
    name: "移动燃烧",
    img:"public/移动燃烧.png",
  },
  {
    name: "电热间接排放",
    img:"public/电热间接排放.png",
  },
  {
    name: "能源加工转换",
    img:"public/能源加工转换.png",
  },
  {
    name: "工艺排放",
    img:"public/工艺排放.png",
  },
  {
    name: "差旅通勤",
    img:"public/差旅通勤.png",
  },
  {
    name: "新能源减排",
    img:"public/新能源减排.png",
  },
  {
    name: "土地利用碳汇",
    img:"public/土地利用碳汇.png",
  }
];

emitter.on("changeMenu", (key: string) => {
  switch (key) {
    case "1":
      console.log("全部行业");
      break;
    case "2":
      console.log("能源行业");
      break;
    case "3":
      console.log("制造业");
      break;
    case "4":
      console.log("商业");
      break;
    case "5":
      console.log("农林牧渔");
      break;
    case "6":
      console.log("建筑业");
      break;
    case "7":
      console.log("采矿业");
      break;
  }
});

</script>