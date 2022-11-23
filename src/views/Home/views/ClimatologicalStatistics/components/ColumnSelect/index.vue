<script setup lang="ts">
import { requestFileFromLocal } from "@/request";
import { onMounted, ref } from "vue";

const checkAll = ref(false);
const checkedColumns = ref<string[]>([]);
const columnList = ref<any[]>([]);
const isIndeterminate = ref(true);
const handleCheckAllChange = (val: boolean) => {
  checkedColumns.value = val ? columnList.value.map((c) => c.id) : [];
  isIndeterminate.value = false;
};

const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === columnList.value.length;
  isIndeterminate.value =
    checkedCount > 0 && checkedCount < columnList.value.length;
};

onMounted(async function () {
  columnList.value = await requestFileFromLocal("/static/json/1.json");
});
</script>

<template>
  <div class="ColumnSelect g-sccrollbar-theme-01 ">
    <el-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
      class="g-theme-element-plus-01"
      >全选</el-checkbox
    >
    <el-checkbox-group
      style="margin-left: 20px;"
      v-model="checkedColumns"
      @change="handleCheckedCitiesChange"
    >
      <el-checkbox class="g-theme-element-plus-01" v-for="item in columnList" :key="item.id" :label="item.id">
        {{ item.name }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<style scoped lang="scss">
.ColumnSelect {
  background-color: rgb(75, 76, 80);
  border-radius: 6px;
  margin: 10px 20px 20px 20px;
  height: 250px;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 20px;
}
</style>
