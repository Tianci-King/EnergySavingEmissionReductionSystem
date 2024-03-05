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
}
.menuItemGroup{
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
}
</style>

<template>
  <a-menu
      class="menu"
      @menu-item-click="handleClick"
      :default-selected-keys="['1']"
  >
    <a-menu-item-group class="menuItemGroup">
      <span style="font-size: x-large;font-weight: bold;color: #252525" >
       数据分析
      </span>
      <a-menu-item :class="['menuItem']" key="1">
        <icon-apps />
        碳排放数据统计
      </a-menu-item>
      <a-menu-item :class="['menuItem']" key="2">
        <icon-apps />
        3S-DEA
      </a-menu-item>
      <a-menu-item :class="['menuItem']" key="3">
        <icon-apps />
        碳排放数据预测
      </a-menu-item>
    </a-menu-item-group>
  </a-menu>
</template>

<script setup lang="ts">

const props = defineProps({
  handleClick:Function
})


</script>