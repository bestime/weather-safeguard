<script setup lang="ts">
import { ref } from "vue";
import VerticalTab, {
  VerticalTabItem,
} from "./components/VerticalTab/index.vue";
import SearchBasic from "./components/SearchBasic/index.vue";

const currentTimeType = ref("a");
const timeTab = ref<VerticalTabItem[]>([
  {
    id: "a",
    icon: "",
    name: "逐小时分析",
  },
  {
    id: "b",
    icon: "",
    name: "逐日分析",
  },
  {
    id: "c",
    icon: "",
    name: "逐月分析",
  },
  {
    id: "d",
    icon: "",
    name: "逐年分析",
  },
]);
</script>

<template>
  <div class="ClimatologicalStatistics">
    <VerticalTab v-model="currentTimeType" :data="timeTab" />
    <SearchBasic />
    <div class="right-box"></div>
  </div>
</template>

<style scoped lang="scss">
.ClimatologicalStatistics {
  flex: 1;
  height: 0;
  background-color: #ededed;
  display: flex;
  align-items: flex-start;
  padding: 2px;
  .right-box {
    flex: 1;
    background-color: white;
  }
}
</style>
