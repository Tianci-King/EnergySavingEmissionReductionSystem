<template>
  <div class="header">
    <a-page-header
        :style="{ background: 'var(--color-bg-2)',height:'100%',}"
        class="header"
        @back="back"
        :show-back="router.currentRoute.value.name !== 'Home'"
    >
      <template #title>
        <span style="font-size: xx-large">节能减排碳足迹</span>
      </template>
      <template #subtitle>
        <span style="font-size: large">企业碳足迹计算系统</span>
      </template>
      <template #back-icon>
        <icon-left style="transform: scale(1.2)"/>
      </template>
    </a-page-header>
    <a-button class="right-aligned-button" v-if="router.currentRoute.value.name === 'Form'" type="primary" @click="submit">提交表单</a-button>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import Latitude from "@/stores/Latitude.ts";
import formService from "@/services/FormService.ts";

const router=useRouter();
const useLatitude=Latitude();

const back = () => {
  router.go(-1);
}

const submit = async () => {

  const data = {
    "固定燃烧": [100,100,100],
    "移动燃烧": [100,100,100],
    "电热间排放":[100,100,100],
    "能源加工转换":[100,100,100],
    "差旅通勤":100,
    "新能源减排":100,
    "土地利用碳汇":100,
    "农林牧渔业":100
  }

  const res = await formService.submitForm(data);
  console.log(res.data);
  //router.push("/analysis");
}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9vh;
  border-bottom: 1px solid var(--color-border);
}

.right-aligned-button{
  margin-right: 5vh;
}
</style>
