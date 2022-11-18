<script setup lang="ts">
import { onMounted, ref } from "vue";
import BasicMap from '@/components/BasicMap/index.vue'
import ColorControl, { ColorControlData } from '@/components/ColorControl/index.vue'
import LeftNavigation, { LeftNavigationItem } from '@/components/LeftNavigation/index.vue'
import { requestFileFromLocal } from "@/request";

const navConfig = ref<LeftNavigationItem[]>([])
onMounted(async function () {
  navConfig.value = await requestFileFromLocal('/static/json/nav-01.json')
  console.log("导航", navConfig.value)
})

const currentTabId = ref('c-1')

const colorList = ref<ColorControlData>([
  {
    start: 0,
    end: 10,
    name: '低级',
    color: 'red'
  },
  {
    start: 10,
    end: 20,
    name: '中级',
    color: 'yellow'
  },
  {
    start: 20,
    end: 30,
    name: '高级',
    color: 'blue'
  },
  {
    start: 30,
    end: 40,
    name: '特级',
    color: 'pink'
  }
])

</script>

<template>
  <div class="DataAnalysis">
    <div style="position: absolute;right:10px;top:10px;z-index: 5;">
      <!-- <h1>你好：{{currentTabId}}</h1> -->
    </div>
    
    <BasicMap/>
    <ColorControl :data="colorList"/>
    <LeftNavigation :data="navConfig" v-model="currentTabId"/>
  </div>
</template>

<style scoped lang="scss">
.DataAnalysis { 
  flex: 1;
  position:relative;
  .BasicMap {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 0;

  }

  .ColorControl {
    position: absolute;    
    right: 20px;
    bottom: 20px;
  }
}
</style>