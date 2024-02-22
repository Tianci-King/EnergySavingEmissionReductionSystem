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
        选取行业
      </span>
      <a-menu-item class="menuItem" key="1"><icon-apps />全部行业</a-menu-item>
      <a-menu-item class="menuItem" key="2"><icon-apps />能源行业</a-menu-item>
      <a-menu-item class="menuItem" key="3"><icon-apps />制造业</a-menu-item>
      <a-menu-item class="menuItem" key="4"><icon-apps />商业</a-menu-item>
      <a-menu-item class="menuItem" key="5"><icon-apps />农林牧渔</a-menu-item>
      <a-menu-item class="menuItem" key="6"><icon-apps />建筑业</a-menu-item>
      <a-menu-item class="menuItem" key="7"><icon-apps />采矿业</a-menu-item>
    </a-menu-item-group>
  </a-menu>
</template>

<script setup lang="ts">

</script>