<script setup lang="ts">
import HomeHeader from './components/HomeHeader/index.vue'
</script>

<template>
  <div class="Home">
    <HomeHeader/>
    <RouterView/>
  </div>
</template>

<style scoped lang="scss">
  .Home {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
  }
  </style>
  
