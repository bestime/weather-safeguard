<script setup lang="ts">
import { onMounted, ref } from "vue";



import LeftNavigation, { LeftNavigationItem } from '@/components/LeftNavigation/index.vue'
import { requestFileFromLocal } from "@/request";
import { useRouter } from "vue-router";
import { routes } from '@/router'
import { ElNotification } from 'element-plus'
const router = useRouter()

const navConfig = ref<LeftNavigationItem[]>([])
onMounted(async function () {
  navConfig.value = await requestFileFromLocal('/static/json/nav-01.json')
  console.log("导航", navConfig.value)
})

const currentTabId = ref('HOME_DATAANALYSIS_GBCOUNTRY')
const activeItem = ref<LeftNavigationItem>()









function onTabChange (item: LeftNavigationItem) {
  console.log("改变了", item, navConfig)
  const routeItem = bestime.deepFindItem(routes, function (ri) {
    return ri.name === item.id
  })
  if(!routeItem) {
    ElNotification.error(`${item.name}：未配置路由`)
    router.push({
      name: 'HOME_DATAANALYSIS'
    })

    return;
  }
  activeItem.value = bestime.cloneEasy(item)
  
  router.push({
    name: item.id
  })
}

</script>

<template>
  <div class="DataAnalysis">
    <div style="position: absolute;right:10px;top:10px;z-index: 5;">
      <!-- <h1>你好：{{currentTabId}}</h1> -->
    </div>
    <RouterView :info="activeItem"/> 
    <LeftNavigation :data="navConfig" v-model="currentTabId" @on-select="onTabChange"/>
  </div>
</template>

<style scoped lang="scss">
.DataAnalysis { 
  flex: 1;
  position:relative;
}
</style>