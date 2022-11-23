<script setup lang="ts">
import { requestFileFromLocal } from '@/request';
import { onMounted, ref } from 'vue';
import ColumnSelect from '../ColumnSelect/index.vue'

const defaultProps = {
  children: 'children',
  label: 'label',
}

const startTime = ref('')
const endTime = ref('')

const stationList = ref<any[]>([])



onMounted(async function () {
  stationList.value = await requestFileFromLocal("/static/json/test-tree.json")
})





</script>

<template>
  <div class="SearchBasic">
    <div class="sb-title time">时间</div>
    <ul class="time-range">
      <li>
        <b>开始日期</b>
        <el-date-picker
          v-model="startTime"
          type="datetime"
          placeholder="请选择"
        />
      </li>
      <li>
        <b>结束日期</b>
        <el-date-picker
          v-model="endTime"
          type="datetime"
          placeholder="请选择"
        />
      </li>
    </ul>
    <div class="sb-title station">站点</div>

    <el-tree
      
        :data="stationList"
        show-checkbox
        default-expand-all
        node-key="id"
        :props="defaultProps"
        class="g-sccrollbar-theme-01 g-theme-element-plus-01 station-tree"
      />

      
    <ColumnSelect/>
  </div>
</template>

<style scoped lang="scss">
.SearchBasic {
  align-self: stretch;
  width: 249px;
  box-sizing: border-box;
  background-color: rgba(34, 34, 34, 1);
  border-radius: 0 4px 4px 4px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  .sb-title {
    font-size: 18px;
    color: white;
    display: flex;
    align-items: center;
    margin: 0 20px 20px 20px;
    padding: 30px 0 0 0;
    
    &::before {
      content: '';
      width: 22px;
      height: 22px;
      background-image: url("/static/images/icon-01.png");
      margin-right: 10px;
      
    }
    &.time::before {
      background-position: -165px -21px;
    }
    &.station {
      border-top: rgba(237, 237, 237, 1) dashed 1px;
      &::before {
        background-position: -165px -44px;
      }
    }
  }

  .time-range {
    margin: 0 0px 20px 30px;
    padding: 0;
    list-style: none;
    li {
      margin: 10px 0;
      &:nth-of-type(1) {
        margin-top: 0;
      }
      b {
        display: block;
        font-size: 14px;
        color: white;
        word-break: keep-all;
        margin: 0 0 5px 0;
      }
      :deep(.el-date-editor) {
        width: 196px;
      }
    }
  }
  .station-tree {
    flex: 1;
    overflow: auto;
    overflow-x: hidden;
    margin: 0 20px 0px 20px;
  }
}
</style>