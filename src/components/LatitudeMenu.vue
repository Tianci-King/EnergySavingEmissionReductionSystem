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
}
</style>

<template>
  <a-menu
      class="menu"

  >
    <a-menu-item-group class="menuItemGroup">
      <span style="font-size: x-large;font-weight: bold;color: #252525" >
        核算维度
      </span>
      <a-menu-item class="menuItem" key="1"><icon-apps />固定燃烧</a-menu-item>
      <a-menu-item class="menuItem" key="2"><icon-apps />移动燃烧</a-menu-item>
      <a-menu-item class="menuItem" key="3"><icon-apps />电热间排放</a-menu-item>
      <a-menu-item class="menuItem" key="4"><icon-apps />能源加工转换</a-menu-item>
      <a-menu-item class="menuItem" key="5"><icon-apps />工艺排放</a-menu-item>
      <a-menu-item class="menuItem" key="6"><icon-apps />差旅通勤</a-menu-item>
      <a-menu-item class="menuItem" key="7"><icon-apps />新能源减排</a-menu-item>
      <a-menu-item class="menuItem" key="8"><icon-apps />土地利用碳汇</a-menu-item>
      <a-menu-item class="menuItem" key="9"><icon-apps />农林牧鱼业</a-menu-item>
    </a-menu-item-group>
  </a-menu>
</template>

<script setup lang="ts">

</script>