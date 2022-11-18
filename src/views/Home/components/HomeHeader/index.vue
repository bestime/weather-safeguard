<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { isActiveRouter } from "@/utils/common";
import { requestFileFromLocal } from "@/request";
const router = useRouter();
const route = useRoute();
const navList = ref<{
  name: string,
  routeName: string
}[]>([]);

onMounted(async function () {
  navList.value = await requestFileFromLocal('/static/json/home-header-config.json')
})

function jump(name: string) {
  router.push({ name });
}
</script>

<template>
  <div class="HomeHeader">
    <div class="logo">气象保障系统</div>
    <ul class="navs">
      <li
        v-for="item in navList"
        :key="item.routeName"
        @click="jump(item.routeName)"
        :class="{ 'is-active': isActiveRouter(item.routeName, route) }"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="user">
      <p>admin</p>
      <b>2022-11-14 13:05:43</b>
    </div>
  </div>
</template>

<style scoped lang="scss">
.HomeHeader {
  height: 70px;
  background-color: #111216;
  display: flex;
  align-items: center;
  .navs {
    flex: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: stretch;
    li {
      font-size: 20px;
      align-self: stretch;
      color: white;
      margin: 0 100px 0 0;
      user-select: none;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.15s;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        transition: 0.15s;
        background-color: #efb000;
        transform: scale(0);
      }
      &.is-active {
        color: #efb000;
        &::after {
          transform: scale(1);
        }
        
      }
    }
  }

  .logo {
    margin: 0 0 0 80px;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 400;
    line-height: normal;
    color: white;
    &::before {
      width: 42px;
      height: 38px;
      content: "";
      margin-right: 10px;
      background-image: url("/static/images/icon-01.png");
    }
  }

  .user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
      font-size: 16px;
      color: white;
      display: flex;
      align-items: center;
      line-height: normal;
      margin: 0;
      padding: 0;
      &::before {
        width: 14px;
        height: 17px;
        content: "";
        margin-right: 5px;
        background-image: url("/static/images/icon-01.png");
        background-position: -43px 0;
      }
    }

    b {
      font-size: 12px;
      color: white;
      font-weight: normal;
      margin: 5px 0 0 0;
    }
  }
}
</style>
