<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import VerticalTab, {
  VerticalTabItem,
} from "./components/VerticalTab/index.vue";
import SearchBasic from "./components/SearchBasic/index.vue";
import FilterItem from "@/components/FilterItem/index.vue";
import { requestFileFromLocal } from "@/request";
import PagerForElPlusWithJava from '@/components/PagerForElPlusWithJava/index.vue';
import PagerData from '@/components/PagerForElPlusWithJava/utils/PagerData';

const elementList = ref<any[]>([]);
const cndList = ref<any[]>([]);
const tableData = ref<any[]>(new Array(30).fill({name: '测试'}));
  const iPager = ref(new PagerData([20, 30, 50]));
const searchQuery = reactive({
  element: '',
  cond: '',
  result: '',
})
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

onMounted(async function () {
  elementList.value = await requestFileFromLocal("/static/json/3.json");
  cndList.value = await requestFileFromLocal("/static/json/4.json");

  iPager.value.update(100, 3)


});

function updateView () {
  console.log("更新表格数据")
}
</script>

<template>
  <div class="ClimatologicalStatistics">
    <VerticalTab v-model="currentTimeType" :data="timeTab" />
    <SearchBasic />
    <div class="right-box">
      <div class="top">
        <b class="prev-label">筛选</b>
        <FilterItem name="要素">
          <el-select
            v-model="searchQuery.element"
            placeholder="请选择"
            style="width: 110px"
          >
            <el-option
              v-for="item in elementList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </FilterItem>
        <FilterItem name="条件">
          <el-select
            v-model="searchQuery.cond"
            placeholder="请选择"
            style="width: 110px"
          >
            <el-option
              v-for="item in cndList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
          <el-input v-model="searchQuery.result" style="width: 120px;margin-left: 5px;">
            <template #append>℃</template>
          </el-input>
        </FilterItem>

        <el-button type="primary" style="margin-left: 20px;">查询</el-button>
        <el-button type="success">导出</el-button>
      </div>
      <div class="table-title">2021年5月20日 09时-2021年10月3日 08时各站点数据逐时分析</div>
      <div class="table-room">
        <el-table stripe :data="tableData" height="100%" class="g-theme-element-plus-01">
          <el-table-column prop="name" label="站号" width="150" />
          <el-table-column prop="name" label="站点"/>
          <el-table-column prop="name" label="最高温度"/>
          <el-table-column prop="name" label="最高温度出现时间" min-width="170px"/>
          <el-table-column prop="name" label="降水"/>
          <el-table-column prop="name" label="最低温度"/>
          <el-table-column prop="name" label="最低温度出现时间" min-width="170px"/>
          <el-table-column prop="name" label="最小湿度"/>
          <el-table-column prop="name" label="最小湿度出现时间" min-width="170px"/>
          <el-table-column prop="name" label="最低气压"/>
          <el-table-column prop="name" label="最低气压出现时间" min-width="170px"/>
          <el-table-column prop="name" label="最高气压"/>
          <el-table-column prop="name" label="最高气压出现时间" min-width="170px"/>
          <el-table-column fixed="right" label="操作" width="80">
            <template #default>
              <el-button type="primary" size="small">按钮</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <PagerForElPlusWithJava :options="iPager.elPlusViewsQuery" @on-change="updateView" />
    </div>
    
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
  .top {
    display: flex;
    align-items: center;
  }
  .right-box {
    flex: 1;
    width: 0;
    background-color: white;
    margin: 2px 2px 2px 10px;
    align-self: stretch;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    padding: 20px;
    display: flex;
    flex-direction: column;
    b.prev-label {
      font-size: 20px;
      margin-right: 20px;
    }
  }
  .table-title {
    font-size: 20px;
    color: rgba(17, 18, 22, 1);
    margin: 30px 0 20px 0;
    border-left: rgba(17, 18, 22, 1) solid 6px;
    line-height: 1;
    padding: 0 0 0 10px;
  }

  .table-room {
    flex: 1;
    height: 0;
    border: rgba(239, 176, 0, 1) solid 1px;
    flex-shrink: 0;
  }
}
</style>
