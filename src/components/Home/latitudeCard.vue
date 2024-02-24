<style scoped>
.card{
  display: flex;
  flex-direction: column;
}
</style>

<template>
<div class="card">
  <a-image :preview="false" @click="handleImgClick" :src="latitude.img" width="190"></a-image>
  <a-checkbox v-model="isChecked" :value="latitude.name">{{latitude.name}}</a-checkbox>
</div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";

const props = defineProps({
  latitude: {
    type: Object as () => {name: string, img: string},
    required: true,
  }
})

const isChecked = ref(false);

const handleImgClick = () => {
  console.log(isChecked.value);
  isChecked.value = !isChecked.value;
}
</script>