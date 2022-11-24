<script setup lang="ts">
import PagerData, { PagerConfig } from './utils/PagerData';

const props = defineProps<{
  options: PagerConfig;
}>();

let _timer: NodeJS.Timeout;
const emit = defineEmits(['on-change']);

function emitChange() {
  clearTimeout(_timer);
  _timer = setTimeout(function () {
    emit('on-change');
  }, 100);
}
</script>

<template>
  <div class="PagerForElPlusWithJava">
    <slot/>
    <el-pagination
      class="g-theme-element-plus-01"
      v-model:currentPage="props.options.current"
      v-model:page-size="props.options.size"
      :page-sizes="props.options.sizes"
      :small="false"
      :background="true"
      layout="sizes, prev, pager, next"
      :total="props.options.total"
      @size-change="emitChange"
      @current-change="emitChange"
    />
  </div>
</template>

<style scoped lang="scss">
.PagerForElPlusWithJava {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 10px 0 0 0;
}
</style>
