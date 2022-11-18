<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
const oDom = ref<HTMLDivElement>()

let iMap: any;


onMounted(function () {
  iMap = new maptalks.Map(oDom.value, {
    zoom: 4,
    control: false,
    center: [106.405, 29.576389],
    baseLayer: new maptalks.TileLayer('base', {
      urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      subdomains: ["a","b","c","d"],
    })
  })
})



onBeforeMount(function () {
  iMap?.remove()
})

</script>

<template>
  <div class="BasicMap" ref="oDom"></div>
</template>

<style scoped lang="scss">
.BasicMap {
  min-width: 100px;
  min-height: 100px;
  background-color: #eee; 
}
</style>