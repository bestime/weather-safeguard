<script setup lang="ts">
export interface VerticalTabItem {
  id: string,
  icon: string,
  name: string
}
const props = defineProps<{
  modelValue: string,
  data: VerticalTabItem[]
}>()

const emits = defineEmits<{
  (ev: 'update:modelValue', id: string):void
}>()

function onSelect (data: VerticalTabItem) {
  emits('update:modelValue', data.id)
}
</script>

<template>
  <div class="VerticalTab">
    <ul>
      <li v-for="item in props.data" :key="item.id" :class="{'is-active': item.id === props.modelValue}" @click="onSelect(item)">
        <i></i>
        <b>{{item.name}}</b>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.VerticalTab {
  width: 60px;
  position:relative;
  z-index:2;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    user-select: none;
    border-right: rgba(131, 132, 136, 1) solid 1px;
  }
  li {
    cursor: pointer;
    background-color: rgba(54, 54, 54, 1);
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: rgba(131, 132, 136, 1) solid 1px;
    position: relative;
    transition: 0.15s;
    
    i {
      content: '';
      width: 16px;
      height: 20px;
      background-image: url("/static/images/icon-01.png");
      background-position: -163px 0;
      margin-bottom: 5px;
    }
    &::after {
      content: '';
      width: 0;
      height: 0;
      border-left: 10px solid rgba(239, 176, 0, 1);
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      position: absolute;
      left: 100%;
      top: 50%;
      margin-top: -5px;
      display: none;
    }
    &:nth-of-type(1) {
      border-top-left-radius: 6px;
      border-top-width: 0;  
    }
    &:nth-last-of-type(1) {
      border-bottom-left-radius: 6px;
    }
    b{
      font-weight: normal;
      font-size: 18px;
      color: white;
      writing-mode: vertical-lr;
    }
    &:hover {
      background-color: rgba(239, 176, 0, 1);
    }
    &.is-active {
      background-color: rgba(239, 176, 0, 1);
      &::after {
        display: inline-block;
      }
    }
  }
}
</style>