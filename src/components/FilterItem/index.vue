<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="FilterItem">
    <i>{{props.name}}：</i>
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.FilterItem {
  display: flex;
  align-items: center;
  i {
    font-style: normal;
    font-size: 16px;
    color: rgba(17, 18, 22, 1);
    font-weight: 600;
  }
  &+.FilterItem {
    margin-left: 20px;
  }
}
</style>