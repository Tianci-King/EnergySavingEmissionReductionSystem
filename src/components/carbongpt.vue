<template>
    <div @click="quit" class="chat-container">
    <div class="board">
      <a-scrollbar style="height: calc(100%);overflow: auto">
        <div>
            <a-button shape="circle" status="normal" type="primary" style="height: 70px;width: 70px;position: absolute;margin-top: 4.5%;margin-left: 4%;">
                <icon-robot-add style="transform: scale(3)"/>
            </a-button>
        </div>
        <div
            class="chat-bubble message"
            v-for="(message, index) in resList"
            :key="index" :style="{'--i':index}"
            :class="{'message-show':isShow}"
        >
            <p style="padding-left: 1%;padding-top: 1%;white-space: pre-wrap" > {{ message }} </p>
        </div>
      </a-scrollbar>
    </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, onMounted, toRefs } from 'vue';
  import tableService from '@/services/tableservice';
  import analysisStore from '@/stores/Analysis.ts';

  const resList = ref(["分析正在生成中...."]);
  const nowList = ref(["分析正在生成中...."]);
  const isShow = ref(true);

  const useAnalysisStore = analysisStore();

  onMounted( async () => {
    const { selectKey } = toRefs(useAnalysisStore);
    const res = await tableService.robot(parseInt(selectKey.value));

    console.log(res.data);

    //["我们需要降低固定燃烧的消耗！","您的土地碳汇有待提升。", "您需要做出...的修改！"]
    resList.value = res.data;

    isShow.value = false;
    setTimeout(() => {
      isShow.value = true;
    }, 300);
  });


  const messages = ref<string[]>(nowList.value);

  const emit =  defineEmits({
    quit : () => {}
  });

  const quit = () => {
    emit('quit');
  };
  </script>

  <style scoped>
  .chat-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    z-index: 1000; /* Make sure the overlay is on top of other elements */
  }
  .board>*{
    height: 100%;
    width: 100%;
  }
  .board {
    position: relative;
    top: 0;
    left: 0;
    background-color: rgba(234,247,254);
    width: 60%;
    height: 60%;
    border-radius: 20px;
    padding: 10px;
  }
  .chat-bubble {
    display: flex;
    flex-direction: column;
    padding: 20px 0px 30px 10px;
    margin: 4% 10% 20px 12%;
    border-radius: 20px;
    background-color: #f0f0f0;
    font-size: x-large;
    font-family: sans-serif;
  }
  .message{
    opacity: 0;
    transition: 0.5s ease-in-out calc(var(--i) *  1s);
  }
  .message-show{
    opacity: 1;
  }
  </style>
