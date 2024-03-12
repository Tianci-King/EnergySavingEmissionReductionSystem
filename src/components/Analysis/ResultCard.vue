<style scoped>
.outer{
  display: flex;
  flex-direction: column;
  height: 130px;
  width: 17%;
  padding: 10px 15px 0 15px;
}
.line{
  width: 95%;
  margin:0 auto;
  height: 4px;
  border-radius: 5px;
}
.green{
  background: rgb(160, 211, 186);
}
.red{
  background: rgb(248, 77, 77);
}
.grey{
  background: rgb(160, 160, 160);
}
.fontRed{
  color: rgb(253, 4, 4);
}
.fontGreen{
  color: rgb(5, 168, 93);
}
.fontGrey{
  color: rgb(160, 160, 160);
}
.smallDiv{
  position: absolute;
  right: 15px;
  top:20px;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #f2f3f5;
}
.color1{
background: rgb(65, 168, 119);
}
.color2{
background: rgb(102, 134, 243);
}
.color3{
background: rgb(183, 128, 255);
}
.color4{
  background: url("public/tu2.8bf63eb4.png");
  background-size: 100% 100%;
}
</style>

<template>
<div class="outer">
  <div class="smallDiv" :class="backgroundColor"><span v-show="resultCardProps.name!=='总CO2'">{{resultCardProps.name}}</span></div>
  <div style="margin-top: 10px;font-size: large;">{{resultCardProps.name}}排放</div>
  <div style="margin-top: 20px;"><span style="font-size:x-large;font-weight: bold">{{resultCardProps.value}}</span>万吨</div>
  <div style="margin-top: 10px" class="line" :class="lineClass"></div>
  <div :class="fontClass" style="font-size: xx-small">{{compareText}} <span style="float: right;margin-right: 10px">{{resultCardProps.compare}}%</span></div>
</div>
</template>

<script setup lang="ts">
import {onMounted, PropType, ref} from "vue";

interface ResultCardProps {
  name: string;
  value: number;
  compare: number;
}
const props = defineProps({
  resultCardProps: {
    type: Object as PropType<ResultCardProps>,
    required: true
  }
})

const compareText=ref()
const lineClass=ref()
const fontClass=ref()
const backgroundColor=ref()

if(props.resultCardProps.compare>0){
  compareText.value="↑高于同行"
  lineClass.value="red"
  fontClass.value="fontRed"
}
else if(props.resultCardProps.compare<0){
  compareText.value="↓低于同行"
  lineClass.value="green"
  fontClass.value="fontGreen"
}else {
  compareText.value="→同行持平"
  lineClass.value="grey"
  fontClass.value="fontGrey"
}

switch (props.resultCardProps.name) {
  case "CO2":
    backgroundColor.value="color1"
    break;
  case "CH4":
    backgroundColor.value="color2"
    break;
  case "N2O":
    backgroundColor.value="color3"
    break;
  default:
    backgroundColor.value="color4"
    break;
}
</script>