<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import TimeWidget from '@/components/TimeWidget/index.vue';
import ColorControl, { ColorControlData } from '@/components/ColorControl/index.vue'
import BasicMap from '@/components/BasicMap/index.vue'
import HorizontalTab, { horizontalTabItem } from '@/components/HorizontalTab/index.vue'
import RightInfo from '../../components/RightInfo/index.vue'
import LeftNavigation, { LeftNavigationItem } from '@/components/LeftNavigation/index.vue'
import InfoChart from './components/InfoChart/index.vue'
import PenSBT from './utils/PenSBT'
import PenMarker from './utils/PenMarker'
import { requestFileFromLocal } from "@/request";
const props = defineProps<{
  info?: LeftNavigationItem
}>()

let penSbt: PenSBT | undefined;
let penMarker: PenMarker | undefined;
let isUnmounted = false
const iMap = ref<any>()

const tabList = ref<horizontalTabItem[]>([])
const currentTab = ref('2')

function onMarkerClick () {
  bottomDrawerVisible.value = true
}

function onMapReady (v: any) {
  iMap.value = v
  penSbt = new PenSBT(v)
  penMarker = new PenMarker(v, {
    onMarkerClick
  })
  updateSBT()
  updateMarkers()
}

onMounted(async function () {  
  timeList.value = await requestFileFromLocal('/static/json/times.json')
  tabList.value = await requestFileFromLocal('/static/json/2.json')
})





onUnmounted(function () {
  isUnmounted = true
  penSbt?.dispose()
  penMarker?.dispose()
  
})

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
const bottomDrawerVisible = ref(false)
const timeList = ref<any[]>([])
  const radios = ref('A')
const checkSDT = ref(true)
const checkSBT = ref(true)


async function updateMarkers () {
  if(!penMarker) return
  if(checkSDT.value) {
    const data = await requestFileFromLocal('/static/json/500000_full.json')
    if(isUnmounted || !penMarker) return;
    penMarker.setGeoJson(data)
    penMarker.show()
  } else {
    penMarker.hide()
  }
}
async function updateSBT () {
  if(!penSbt) return;
  if(checkSBT.value) {
    const data = await requestFileFromLocal('/static/json/geo.json')
    if(isUnmounted || !penSbt) return;
    penSbt.setGeoJson(data)
    penSbt.show()
  } else {
    penSbt.hide()
  }
  
}

</script>

<template>
  <div class="GBCountry">
    <div class="bottom-room">
      <div class="time-center">
        <TimeWidget :data="timeList" format="年,月,日,时">
          <template #top>
            <div class="opers-box">
              <el-radio-group v-model="radios">
                <el-radio label="A" class="g-theme-element-plus-01">最高气温</el-radio>
                <el-radio label="B" class="g-theme-element-plus-01">最低气温</el-radio>
              </el-radio-group>
              <div class="checks-room">
                <el-checkbox @change="updateMarkers" v-model="checkSDT" label="散点图" size="large" class="g-theme-element-plus-01" />
                <el-checkbox @change="updateSBT" v-model="checkSBT" label="色斑图" size="large" class="g-theme-element-plus-01" />
              </div>
            </div>
          </template>
        </TimeWidget>
      </div>
      <ColorControl :data="colorList"/>
    </div>
    <BasicMap @on-ready="onMapReady"/>
    <RightInfo v-if="props.info?.data" :data="props.info?.data"/>
    <HorizontalTab :data="tabList" v-model="currentTab"/>


  <el-drawer destroy-on-close size="auto" v-model="bottomDrawerVisible" direction="btt" custom-class="g-theme-element-plus-01">
    <InfoChart/>
  </el-drawer>
  </div>
</template>

<style scoped lang="scss">
.GBCountry {
  .bottom-room {
    position: absolute;
    left: 180px;
    right: 10px;
    bottom: 10px;
    // background-color: red;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .time-center {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      width: 0;
      margin-right: 20px;
    }
    .opers-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .checks-room {
      margin: 0 0 0 40px;
    }
  }
  .BasicMap {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  .HorizontalTab {
    position: absolute;
    left: 200px;
    top: 20px;
    z-index: 2;
  }
}
</style>