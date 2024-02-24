<style scoped>
.card{
  display: flex;
  flex-direction: column;
}
.checkBox{
  padding: 5px;
}
.choose{
  color:green;
}
</style>

<template>
<div class="card">
  <a-checkbox @click="handleChange" :value="latitude.name">
    <template #checkbox="">
      <a-image :preview="false" :src="latitude.img" width="165"></a-image>
    </template>
  </a-checkbox>
  <a-checkbox @click="handleChange" :value="latitude.name" class="checkBox" >
    <span :class="{'choose':isChoose}">{{latitude.name}}</span>
  </a-checkbox>
</div>
</template>

<script setup lang="ts">

import {ref} from "vue";

const props = defineProps({
  latitude: {
    type: Object as () => {name: string, img: string},
    required: true,
  }
})

const isChoose = ref(false)

const handleChange = () => {
  isChoose.value = !isChoose.value
  console.log(isChoose.value)
}

</script>