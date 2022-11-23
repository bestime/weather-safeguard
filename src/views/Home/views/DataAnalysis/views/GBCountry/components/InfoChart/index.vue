<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, onUnmounted, ref } from "vue";
import * as echarts from 'echarts';
import { getOptions } from './index'
import { requestFileFromLocal } from "@/request";
const dChartDom = ref<HTMLDivElement>()

let iChart: echarts.ECharts | undefined;

onMounted(function () {
  nextTick(function () {
    updateChart()
  })  
})

onBeforeUnmount(function () {
  iChart?.dispose()
})

async function updateChart () {
  const data = await requestFileFromLocal('/static/json/chart-test-data.json')
  if(!iChart) {
    iChart = echarts.init(dChartDom.value!);
  }
  const options = getOptions(data)
  console.log("options", options)
  iChart.setOption(options)
}
</script>


<template>
  <div class="InfoChart">
    <div class="title">这里是标题文字</div>
    <div style="height: 400px" ref="dChartDom"></div>
  </div>
</template>

<style scoped lang="scss">
.InfoChart {
  .title {
    font-size: 18px;
    color: white;
    text-align: center;
    margin: 0 0 10px 0;
  }
}
</style>