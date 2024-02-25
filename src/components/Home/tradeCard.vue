<style scoped>
.img:before{
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(112, 228, 183, 0.7);
  z-index: 1;
  transition: 0.3s;
  height: 100%;
  width: 100%;
  clip-path:  polygon(0 0,0 0,0 100%,0 100%);
}
.img:after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(224, 202, 75, 0.7);
  clip-path:  polygon(100% 0,100% 0,100% 100%,100% 100%);
  z-index: 1;
  transition: 0.3s;
  height: 100%;
  width: 100%;
}

.imgChecked:before{
  clip-path:  polygon(0 0,70% 0,40% 100%,0 100%);
}
.imgChecked:after{
  clip-path:  polygon(70% 0,100% 0,100% 100%,40% 100%);
}
.title{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  width: 150px;
  left:calc(50% - 75px);
  height: 50px;
  top: calc(50% - 25px);
  font-size: large;
  user-select: none;
  font-weight: bold;
  color: #ffffff;
  z-index: 2;
  transition:all 0.3s ease-in-out;
  opacity: 0;
}
.show{
  opacity: 1;
}
.radioCard{
  height: 200px;
  width: 200px;
  overflow: hidden;
}
.card{
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="card">
    <a-radio
        @mouseenter="handleEnter"
        @mouseleave="handleLeave"
        @click="handleClick"
        :value="trade.name"
    >
      <template #radio="{ checked }" class="radioCard">
        <div>
          <a-image :preview="false" :src="trade.img" width="200" class="img" :class="{imgChecked:isEnter||isChecked}"></a-image>
          <div
              :class="{show:isEnter||isChecked}"
              @mouseenter="handleEnter"
              @mouseleave="handleLeave"
              class="title"
          >
            {{trade.name}}
          </div>
        </div>
      </template>
    </a-radio>
    <a-radio :value="trade.name" style="margin-top: 10px">
      <div style="width: 190px;color: #252525">{{trade.name}}</div>
    </a-radio>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import emitter from "@/utils/mitt.ts";

const props = defineProps({
  trade: {
    type: Object as () => {name: string, img: string},
    required: true,
  }
})

const isChecked = ref(false)

const handleClick = () => {
  emitter.emit("cancelTradeCardCheck");
  isChecked.value = true
}

emitter.on("cancelTradeCardCheck", () => {
  isChecked.value = false
})

const isEnter = ref(false)
const handleEnter = () => {
  isEnter.value = true
}

const handleLeave = () => {
  isEnter.value = false
}
</script>