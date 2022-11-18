<script setup lang="ts">
import { computed } from 'vue'

export type ColorControlData = {
  start: number
  end: number
  name: string
  color: string  
}[]

const props = defineProps<{
  data: ColorControlData
}>()

const sortData = computed(function () {
  const _tmp = bestime.cloneEasy(props.data)
  _tmp.sort(function (a, b) {
    return b.start - a.start
  })
  return _tmp
})

const gradientColorStyle = computed(function () {
  const colors = sortData.value.map(function (item) {
    return item.color;
  })
  if(colors.length>1) {
    return {
      'background-image': `linear-gradient(${colors.join(',')})`
    }
  } else {
    return {
      'background-color': colors.join(',')
    }
  }

 
})

</script>

<template>
  <div class="ColorControl">
    <ul :style="gradientColorStyle">
      <li v-for="(item, index) in sortData" :key="index">
        <i>{{item.end}}</i>
        <b>{{item.start}}</b>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.ColorControl {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 30px;
    border-radius: 20px;
    border: rgba(0,0,0,0.5) solid 1px;
    box-shadow: 0 0 5px rgba(0,0,0,0.4);
  }
  li {
    font-size: 12px;
    color: white;
    height: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 0 1px transparent;
    transform: 0.3s;
    user-select: none;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 0 1px black;
    }
    
    
    b {
      display: none;
      font-weight: normal;
      line-height: normal;
    }
    i {
      transform: translateY(-50%);
      line-height: normal;
      font-style: normal;
    }
    &:nth-of-type(1) {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      padding-top: 10px;
      i {
        transform: translateY(-5px);
      }
    }
    &:nth-last-of-type(1) {
      padding-bottom: 8px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      b {
        display: block;
        margin: 0;
        transform: translateY(-2px);
      }
    }
  }
}
</style>