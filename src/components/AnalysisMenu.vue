<!--<style scoped>-->
<!--.menu{-->
<!--  height: 100%;-->
<!--  font-size: large;-->
<!--  background-color: #ffffff;-->
<!--}-->
<!--.menu .menuItem{-->
<!--  background-color: #ffffff;-->
<!--  transform: scale(1.075);-->
<!--  font-size: medium;-->
<!--  border-radius:15px 0 0 15px ;-->
<!--}-->
<!--.menuItemGroup{-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  gap: 20px;-->
<!--  overflow: hidden;-->
<!--}-->
<!--</style>-->

<!--<template>-->
<!--  <a-menu-->
<!--      class="menu"-->
<!--      @menu-item-click="handleClick"-->
<!--      :default-selected-keys="['1']"-->
<!--  >-->
<!--    <a-menu-item-group class="menuItemGroup">-->
<!--      <span style="font-size: x-large;font-weight: bold;color: #252525" >-->
<!--       数据分析-->
<!--      </span>-->
<!--      <a-menu-item :class="['menuItem']" key="1">-->
<!--        <icon-apps />-->
<!--        碳排放数据统计-->
<!--      </a-menu-item>-->
<!--      <a-menu-item :class="['menuItem']" key="2">-->
<!--        <icon-apps />-->
<!--        3S-DEA-->
<!--      </a-menu-item>-->
<!--      <a-menu-item :class="['menuItem']" key="3">-->
<!--        <icon-apps />-->
<!--        碳排放数据预测-->
<!--      </a-menu-item>-->
<!--    </a-menu-item-group>-->
<!--  </a-menu>-->
<!--</template>-->

<!--<script setup lang="ts">-->


<!--</script>-->
<style scoped>
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
  margin-left: 15px;
}
.menuItemGroup{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu .menuItemGroup .menuItemSpecial{
  background-color: rgb(36, 205, 90);
  transform: scale(0.875);
  font-size: medium;
  margin-top: -22px;
  margin-right: -15px;
  margin-left: 30px;
  color: #252525;
  cursor: auto;
}
 .menu .menuItemGroup .menuItemSpecial:hover{
   background-color: rgb(36, 205, 90);
   transform: scale(0.875);
   font-size: medium;
   margin-top: -22px;
   margin-right: -15px;
   margin-left: 30px;
   color: #252525;
   cursor: auto;
}
</style>

<template>
  <a-menu
      class="menu"
      @menu-item-click="handleClick"
      :default-selected-keys="[selectKey]"
  >
    <a-menu-item-group class="menuItemGroup" style="overflow: hidden">
      <span style="font-size: x-large;font-weight: bold;color: #252525" >
        数据分析
      </span>
      <a-menu-item  class="menuItem" key="1"><icon-apps />碳排管理仪表盘</a-menu-item>
      <a-menu-item  class="menuItem" key="2"><icon-apps />碳排数据包络分析</a-menu-item>
      <a-menu-item  class="menuItem" key="3"><icon-apps />碳排数据预测</a-menu-item>
      <a-menu-item  class="menuItemSpecial" disabled><icon-robot-add style="color: #252525"/>CarbonGPT</a-menu-item>
      <a-menu-item  class="menuItem" key="4"><icon-apps />碳排路径分析</a-menu-item>
      <a-menu-item  class="menuItem" key="5"><icon-apps />碳排收益画像</a-menu-item>
    </a-menu-item-group>
  </a-menu>
</template>

<script setup lang="ts">
import AnalysisStore from "@/stores/Analysis.ts";

const useAnalysisStore = AnalysisStore();

const selectKey = useAnalysisStore.selectKey;

const props = defineProps({
  handleClick:Function,
})
</script>