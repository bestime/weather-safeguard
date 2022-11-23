<script setup lang="ts">
import { time } from 'console';
import { computed, nextTick, onBeforeUnmount, ref } from 'vue';
import Swiper from 'swiper'
import BScroll from '@better-scroll/core'
import Scrollbar from '@better-scroll/scroll-bar'
import ObserveDOM from '@better-scroll/observe-dom'
import MouseWheel from '@better-scroll/mouse-wheel'



export interface TimeItem {
  value: string,  
  data?: Record<string, any>
}

BScroll.use(Scrollbar)
BScroll.use(ObserveDOM)
BScroll.use(MouseWheel)
BScroll.use(MouseWheel)

const oDom = ref<HTMLDivElement>()

let iSwiper: BScroll;
const activeIndex = ref(-1)

onBeforeUnmount(function () {

})

const props = withDefaults(defineProps<{
  data: TimeItem[],
  defaultSelect?: 'first' | 'lasat' | string
  format?: string
}>(), {
  defaultSelect: 'last',
  format: '年,月,日,时,分,秒,毫秒'
})



const timeList = computed(function () {
  const res = props.data.map(function (item) {
    return item.value
  })
  res.sort(function (a, b) {
    return new Date(a).getTime() - new Date(b).getTime()
  })
  
  const format = props.format.split(',')
  const times = bestime.timeLine(res, format as [])
  nextTick(updateSwiper)
  return times
})

async function updateSwiper () {

  if(!iSwiper) {
    iSwiper = new BScroll(oDom.value!, {
      scrollX: true,
      scrollY: false,
      probeType: 3,
      observeDOM: true,
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300
      },
    });
  } else {
    iSwiper.refresh()
  }

  let toIndex = -1
  if(props.defaultSelect === 'first') {
    toIndex = 0
  } else if(props.defaultSelect === 'last') {
    toIndex = props.data.length - 1
  } else {
    toIndex = timeList.value.findIndex(function (item) {
      return item.value === props.defaultSelect 
    })
  }

  scrollTo(toIndex) 
} 


function scrollTo (index: number) {
  if(index<0) return;
  if(!oDom.value) return;
  activeIndex.value = index
  const toEleIndex = index-1
  

  const oLis = oDom.value.getElementsByTagName('li')
  const oTargetDom = oLis[toEleIndex]
  iSwiper.scrollToElement(oTargetDom, 500, false, false)
}

function toPrev () {
  const idx = bestime.changeIndex(props.data.length-1, activeIndex.value, -1)
  scrollTo(idx)
}

function toNext () {
  const idx = bestime.changeIndex(props.data.length-1, activeIndex.value, 1)
  scrollTo(idx)
}

</script>
<template>
  <div class="TimeWidget">
    <div class="body">
      <!-- <div class="left-slot"></div> -->
      <div class="right">
        <div class="top-slot">
          <slot name="top"/>
        </div>
        <div class="time-bar">
          <div class="btn-icon play-btn"></div>
          <div class="btn-icon play-prev" @click="toPrev"></div>
          
          <div class="swiper" ref="oDom">
          
            <ul v-if="timeList.length>0">

              <template v-for="(item, index) in timeList" :key="item.timestamp">
                <el-tooltip
                  class="box-item"
                  effect="light"
                  :content="item.value"
                  placement="top"
                >
                <li @click="scrollTo(index)" :class="{'is-active': activeIndex === index}">
                  {{ item.label }}
                </li>
                  
                </el-tooltip>
                
              </template>
            </ul>
            <div class="no-times" v-if="timeList.length<1">暂无数据</div>
          </div>
          <div class="btn-icon play-next" @click="toNext"></div>
        </div>
      </div>
      
      
    </div>
  </div>
  
</template>

<style scoped lang="scss">
.TimeWidget {
  background-color: rgba(17, 18, 22, 0.8);  
  max-width: 100%;
  border: none;
  margin: 0;
  padding: 0;
  border-radius: 6px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    user-select: none;
    word-break:keep-all;
    white-space: nowrap;
    display: inline-block;
    font-size: 0;
    border:rgba(131, 132, 136, 1) solid 1px;
  }
  li {
    display: inline-block;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-right:rgba(131, 132, 136, 1) solid 1px;
    
    font-size: 14px;
    color:white;
    padding: 6px 12px;
    cursor: pointer;
    transition: 0,15s;
    position: relative;    
    z-index: 1; 
    &:nth-last-of-type(1) {
      border-right: none;
    }
    
    &:hover {      
      box-shadow: 0 0 0 1px #feae01;
      z-index: 2;
      border-color: transparent;      
    }
    &.is-active {
      box-shadow: 0 0 0 1px #feae01;
      background-color: #feae01;
      border-color: #feae01;
      z-index: 2;
    }
  }

  .left-slot {
    padding: 20px;
    border-right: red solid 1px;
    align-self: stretch;
  }
  .top-slot {
    padding: 15px 25px 0 25px;
  }
  .time-bar {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .swiper {
      flex: 1;
      flex-shrink: 0;
      overflow: hidden;
      padding: 0;
      margin: 10px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
  }
  .play-btn {
    word-break: keep-all;
    margin: 0 10px;
  }

  .right {
    flex: 1;
  }

  .btn-icon {
    width: 34px;
    height: 34px;
    background-image: url("/static/images/icon-01.png");
    cursor: pointer;
    transition: 0.15s;
    &:hover {
      transform: scale(0.9);
      opacity: 0.8;
    }
  }
  .play-btn {
    background-position: -58px 0;
  }
  .play-prev {
    background-position: -93px 0;
  }
  .play-next {
    background-position: -128px 0;
  }

  .no-times {
    font-size:12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#9d9d9d;
    flex: 1;
    
    
  }
}
</style>