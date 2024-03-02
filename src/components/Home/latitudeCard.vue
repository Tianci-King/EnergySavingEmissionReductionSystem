<style scoped>
*{
  user-select: none;
}
.card{
  display: flex;
  flex-direction: column;
}
.checkBox {
  padding-top: 10px;
}
.choose{
  color:green;
}
</style>

<template>
<div class="card">
  <a-checkbox @click="handleChange" :value="latitude.name">
    <template #checkbox="">
      <a-image :preview="false" :src="latitude.img" width="165" height="105"></a-image>
    </template>
  </a-checkbox>
  <a-checkbox @click="handleChange" :value="latitude.name" class="checkBox" >
    <span :class="{'choose':isChoose}" style="font-size:medium">{{latitude.name}}</span>
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
}

</script>