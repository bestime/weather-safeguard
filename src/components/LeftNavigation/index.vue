<script setup lang="ts">
import { computed } from "vue";
import TreeNavgation from "./components/TreeNavgation/index.vue";


export interface LeftNavigationItem {
  name: string;
  id: string;
  iconName:
    | "nav_01"
    | "nav_02"
    | "nav_03"
    | "nav_04"
    | "nav_05"
    | "nav_06"
    | "nav_07"
    | "nav_08"
    | "nav_09"
    | "nav_10"
    | "nav_11"
    | "nav_12"
    | "nav_13"
    | "nav_14"
    | "nav_15"
  children?: LeftNavigationItem[];
}

const emit = defineEmits<{
  (ev: 'update:modelValue', id: string): void
}>()

const props = defineProps<{
  modelValue?: string
  data: LeftNavigationItem[];
}>();

const paths = computed(function () {
  const chain = bestime.deepFindTreePath(props.data, function (item) {
    return item.id === props.modelValue
  })
  return chain?.map(function (item) {
    return item.id
  }) || []
})

// 如果不是最后一项，则找到最后一项返回
function getLastItem (item: LeftNavigationItem): LeftNavigationItem {
  
  if(item.children && item.children.length>0) {
    item = getLastItem(item.children[0])
  }

  return item
}

function onSelect (item: LeftNavigationItem) {  
  item = getLastItem(item)
  // console.log("选中了", item)
  emit('update:modelValue', item.id)

}

</script>

<template>
  <div class="LeftNavigation">
    <div class="body">
      <TreeNavgation @on-select="onSelect" :chains="paths" :current-id="props.modelValue" :data="props.data" />
    </div>    
  </div>
</template>

<style lang="scss" scoped>
.LeftNavigation {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 2;
  pointer-events: none;
  .body {
    pointer-events: auto;
    background-color: rgba(17, 18, 22, 0.8);
    width: 52px;
    flex-shrink: 0;
    box-sizing: border-box;
    border-radius: 26px;
    padding: 0 0 5px 0;
  }
}
</style>
