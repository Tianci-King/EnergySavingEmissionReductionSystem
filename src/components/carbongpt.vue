<template>
    <div @click="quit" class="chat-container">
    <div class="board">
        <div>
            <a-button shape="circle" status="normal" type="primary" style="height: 70px;width: 70px;position: absolute;margin-top: 4.5%;margin-left: 4%;">
                <icon-robot-add style="transform: scale(3)"/>
            </a-button>
        </div>
        <div class="chat-bubble" v-for="(message, index) in messages" :key="index">
            <p style="padding-left: 1%;padding-top: 1%;"> {{ message }} </p>
        </div>
    </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';

  const resList = ref([]);
  const nowList = ref([]);

  onMounted(() => {
    //["我们需要降低固定燃烧的消耗！","您的土地碳汇有待提升。", "您需要做出...的修改！"]
    resList.value = ["我是智能机器“小智”，根据您的企业数据，我分析得出您需要降低...决策导向的话！","您的土地碳汇有待提升。","您需要...对此...决策","您需要做出...的修改！"];

    resList.value.forEach((item,index) => {
      setTimeout(() => {
        nowList.value.push(item);
      }, index*1000);
    });
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
  .board {
    position: relative;
    top: 0vh;
    left: 0vw;
    background-color: rgba(234,247,254);
    width: 60%;
    height: 60%;
    border-radius: 20px;
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
  </style>
  