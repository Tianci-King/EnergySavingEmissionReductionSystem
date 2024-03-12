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
  padding-right: 7px;
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
        选取行业
      </span>
      <a-menu-item v-for="(item,index) in menuList" :key="item.key" :class="['menuItem']">
        <icon-apps />
        {{item.name}}
      </a-menu-item>
    </a-menu-item-group>
  </a-menu>
</template>

<script setup lang="ts">

import emitter from "@/utils/mitt.ts";

const props = defineProps({
  menuList: Array as () => Array<{ name: string,key:string }>
})

const handleClick = (e: any) => {
  emitter.emit("changeMenu", e);
}

</script>