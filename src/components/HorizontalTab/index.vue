<script setup lang="ts">

export interface horizontalTabItem {
  id: string
  name: string
}

const emits = defineEmits<{
  (ev: 'update:modelValue', id: string):void
}>()

const props = defineProps<{
  modelValue: string
  data: horizontalTabItem[]
}>()

function onSelect (id: string) {
  emits('update:modelValue', id)
}
</script>

<template>
  <div class="HorizontalTab">
    <ul>
      <li v-for="item in props.data" :key="item.id" @click="onSelect(item.id)" :class="{'is-active': modelValue === item.id}">{{item.name}}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.HorizontalTab {
  background-color: rgba(17, 18, 22, 0.8);
  border-radius: 6px;
  overflow: hidden;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    user-select: none;
   
  }

  li {
    padding: 0 20px;
    margin: 0;
    height: 48px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    position:relative;
    transition: 0.15s;
    &:hover {
      z-index: 2;
      background-color: black;
    }
    &:not(:nth-of-type(1)) {
      border-left: rgba(131, 132, 136, 1) solid 1px;
    }
    &.is-active {
      background-color: rgba(239, 176, 0, 1);
      border-color: rgba(239, 176, 0, 1);
    }

  }
}
</style>