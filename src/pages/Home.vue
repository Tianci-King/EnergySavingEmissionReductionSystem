<style scoped>
.Menu {
  height: 100%;
}

.sider{
  padding:20px 0 20px 20px;
}
.mainContent{
  display: flex;
  align-items: center;
  padding: 30px;
  height: 91vh;
}
.tradeContent{
  width: 55%;
  height: 100%;
}
.tradeCardBox{
  display: flex;
  flex-wrap: wrap;
  gap:20px;
  justify-content: flex-start;
  align-content: flex-start;
  padding-top: 35px;
}
.latitudeContent{
  background: #e1e1e1;
  width: 45%;
  height: 90%;
  border-radius: 20px;
  padding:0 30px;
}
.latitudeCardBox{
  display: flex;
  flex-wrap: wrap;
  gap:20px;
  justify-content: flex-start;
  align-content: flex-start;
  height: 85%;
}
</style>

<template>
  <a-layout style="background: #f2f3f5;" >
    <a-layout-sider class="sider" :width="250">
      <HomeMenu class="Menu" :menu-list="menuList"/>
    </a-layout-sider>
    <a-layout-content class="mainContent">
      <div class="tradeContent">
        <a-scrollbar style="height: calc(88vh);overflow: auto;padding-bottom: 40px">
          <a-radio-group v-model="trade" style="max-height: 100%">
            <div v-for="(tradeItem) in showTradeList">
              <a-typography-title
                  :heading="5"
                  style="font-weight: bold"
              >
                {{tradeItem.trade}}
              </a-typography-title>
              <div class="tradeCardBox">
                <trade-card v-for="(item,index) in tradeItem.children" :key="item.name" :trade="item" :is-selected="item.name===trade"></trade-card>
              </div>
            </div>
          </a-radio-group>
        </a-scrollbar>
      </div>
      <div class="latitudeContent">
        <a-typography-title
            :heading="5"
            style="font-weight: bold"
        >
          请选择您的核算维度
        </a-typography-title>
        <a-checkbox-group
            class="latitudeCardBox"
            v-model="latitudes"
        >
          <latitude-card
              v-for="(item,index) in latitudeList"
              :latitude="item"
              :key="index"
          ></latitude-card>
        </a-checkbox-group>
        <a-button
            type="primary"
            style="float: right"
            @click="runToForm"
        >
          确定
        </a-button>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">

import HomeMenu from "@/components/HomeMenu.vue";
import emitter from "@/utils/mitt.ts";
import LatitudeCard from "@/components/Home/latitudeCard.vue";
import {ref} from "vue";
import TradeCard from "@/components/Home/tradeCard.vue";
import router from "@/router";
import mainStore from "@/stores/Main.ts";
import {Message} from "@arco-design/web-vue";

const latitudes=ref([])
const trade=ref("")


interface Trade{
  trade:string,
  children:{
    name:string,
    img:string
  }[]
}

const tradeList:Trade[]=[
  {
    trade:"能源行业",
    children:[
      {
        name: "石油和天然气开采业",
        img:"/trade/石油天然气开采业.jpg",
      },
      {
        name: "煤炭开采和洗选业",
        img:"/trade/煤炭开采和洗选业.jpg",
      },
      {
        name: "电力、热力的生产和供应业",
        img:"/trade/电力、热力的生产和供应业.png",
      },
      {
        name: "燃气生产和供应业",
        img:"/trade/燃气生产和供应业.jpg",
      }
    ]
  },
  {
    trade:"制造业",
    children:[
      {
        name: "农副食品加工业",
        img:"/trade/农副食品加工业.jpg",
      },
      {
        name: "饮料制造业",
        img:"/trade/饮料制造业.jpg",
      },
      {
        name: "烟草制品业",
        img:"/trade/烟草制品业.jpg",
      },
      {
        name: "纺织服装、鞋、帽制造业",
        img:"/trade/纺织服装、鞋、帽制造业.jpg",
      },
      {
        name: "皮革、毛皮、羽毛(绒)及其制品业",
        img:"/trade/皮革、毛皮、羽毛(绒)及其制品业.jpg",
      },
      {
        name: "木材加工及木、竹、藤、棕、草制品业",
        img:"/trade/木材加工及木、竹、藤、棕、草制品业.jpg",
      }
    ]
  },
  {
    trade:"商业",
    children:[
      {
        name: "交通运输、仓储及邮电通迅业",
        img:"/trade/交通运输、仓储及邮电通迅业.jpg",
      },
      {
        name: "批发和零售贸易业、餐饮业",
        img:"/trade/批发和零售贸易业、餐饮业.jpg",
      },
      {
        name: "其他服务业",
        img:"/trade/其他服务业.jpg",
      }
    ]
  },
  {
    trade: "农林牧渔",
    children:[
      {
        name: "农林牧渔水利业",
        img:"/trade/农林牧渔水利业.png",
      }
    ]
  },
  {
    trade: "建筑业",
    children:[
      {
        name: "建筑行业",
        img:"/trade/建筑业.jpg",
      }
    ]
  },
  {
    trade: "采矿业",
    children:[
      {
        name: "黑色金属矿采选业",
        img:"/trade/黑色金属矿采选业.jpg",
      },
      {
        name: "有色金属矿采选业",
        img:"/trade/有色金属矿采选业.jpg",
      },
      {
        name: "非金属矿采选业",
        img:"/trade/非金属矿采选业.jpg",
      },
      {
        name: "其他采矿业",
        img:"/trade/其他采矿业.jpg",
      }
    ]
  }
]
const showTradeList = ref(tradeList);

const menuList = [
  {
    key: "1",
    name: "全部行业",
  },
  {
    key: "2",
    name: "能源行业",
  },
  {
    key: "3",
    name: "制造业",
  },
  {
    key: "4",
    name: "商业",
  },
  {
    key: "5",
    name: "农林牧渔",
  },
  {
    key: "6",
    name: "建筑业",
  },
  {
    key: "7",
    name: "采矿业",
  },
];
const latitudeList = [
  {
    name: "固定燃烧",
    img:"/固定燃烧.png",
  },
  {
    name: "移动燃烧",
    img:"/移动燃烧.png",
  },
  {
    name: "电热间接排放",
    img:"/电热间接排放.png",
  },
  {
    name: "能源加工转换",
    img:"/能源加工转换.png",
  },
  {
    name: "工艺排放",
    img:"/工艺排放.png",
  },
  {
    name: "差旅通勤",
    img:"/差旅通勤.png",
  },
  {
    name: "新能源减排",
    img:"/新能源减排.png",
  },
  {
    name: "土地利用碳汇",
    img:"/土地利用碳汇.png",
  },
  {
    name: "农林牧渔业",
    img:"/农林牧渔业.png",
  }
];

emitter.on("changeMenu", (key: string) => {
  switch (key) {
    case "1":
      showTradeList.value = tradeList;
      break;
    case "2":
      showTradeList.value = tradeList.filter((item) => item.trade === "能源行业");
      break;
    case "3":
      showTradeList.value = tradeList.filter((item) => item.trade === "制造业");
      break;
    case "4":
      showTradeList.value = tradeList.filter((item) => item.trade === "商业");
      break;
    case "5":
      showTradeList.value = tradeList.filter((item) => item.trade === "农林牧渔");
      break;
    case "6":
      showTradeList.value = tradeList.filter((item) => item.trade === "建筑业");
      break;
    case "7":
      showTradeList.value = tradeList.filter((item) => item.trade === "采矿业");
      break;
  }
  for(let i=0;i<showTradeList.value.length;i++){
    let names = showTradeList.value[i].children.map(item => item.name);
    if(names.includes(trade.value)){
      return;
    }
  }
  trade.value = ""
});

const useMainStore = mainStore();

const runToForm = () => {
  if(trade.value==="" && latitudes.value.length===0){
    Message.error("请选择行业和核算维度");
    return;
  }else if(trade.value==="") {
    Message.error("请选择行业");
    return;
  }else if(latitudes.value.length===0){
    Message.error("请选择核算维度");
    return;
  }
  for(let i=0;i<showTradeList.value.length;i++){
    let names = showTradeList.value[i].children.map(item => item.name);
    if(names.includes(trade.value)){
      useMainStore.setTrades(showTradeList.value[i].trade);
    }
  }
  useMainStore.setTrade(trade.value);
  useMainStore.setLatitudeList(latitudes.value);

  router.push("/form");
}
</script>