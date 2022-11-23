<script setup lang="ts">
export interface RightInfoItem {
  name: string
  element: string
  datetime: string
  remark: string
}
const props = withDefaults(defineProps<{
  data?: RightInfoItem
}>(), {
  data: function () {
    return {
      name: '-',
      element: '-',
      datetime: '-',
      remark: '-',
    }
  }
})
</script>


<template>
  <div class="RightInfo">
    <ul>
      <li>
        <b>数据：</b>
        <p>{{ props.data.name }}</p>
      </li>
      <li>
        <b>要素：</b>
        <p>{{ props.data.element }}</p>
      </li>
      <li>
        <b>时间：</b>
        <p>{{ props.data.datetime }}</p>
      </li>
      <li>
        <b>说明：</b>
        <p>{{ props.data.remark }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.RightInfo {
  background-color: rgba(17, 18, 22, 0.8);
  border-radius: 8px;
  padding:10px 15px;
  position: absolute;
  right: 10px;
  top: 10px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    font-size: 14px;
    color: white;
    margin: 5px 0;
    display: flex;
    align-items: flex-start;
    b {
      font-weight: normal;
    }
    p {
      line-height: normal;
      margin: 0;
      padding: 0;
      max-width: 300px;
      text-align: justify;
    }
  }
}
</style>