<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()


function jumpTo (routeName: string) {
  router.push({
    name: routeName
  })
}


</script>

<template>
  <RouterView/>
</template>

<style scoped lang="scss">

</style>
