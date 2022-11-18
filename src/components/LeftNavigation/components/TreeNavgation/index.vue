<script setup lang="ts">
import { LeftNavigationItem } from "../../index.vue";

const props = withDefaults(
  defineProps<{
    level?: number;
    currentId?: string;
    chains?: string[];
    data: LeftNavigationItem[];
  }>(),
  {
    level: 0,
  }
);

const emit = defineEmits<{
  (ev: 'on-select', id: LeftNavigationItem):void
}>()

function onSelect (item: LeftNavigationItem) {
  emit('on-select', item)
}


</script>

<template>
  <ul class="TreeNavgation" :class="{ 'is-child': props.level > 0 }">
    <li v-for="item in props.data" :key="item.id">
      <p class="name" :class="{ 'is-active': props.chains?.includes(item.id) }" @click="onSelect(item)">
        <span :icon="item.iconName"></span>
        <b>{{ item.name }}</b>
      </p>
      <Index
        @on-select="onSelect"
        :chains="props.chains"
        :currentId="props.currentId"
        :level="props.level + 1"
        v-if="item.children && item.children.length > 0"
        :data="item.children"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.TreeNavgation {
  list-style: none;
  margin: 0;
  padding: 0;
  user-select: none;
  &.is-child {
    p {
      span {
        width: 32px;
        height: 32px;
        margin: 0 20px 0 11px;
        &::before {
          width: 22px;
          height: 22px;
        }
      }

      b {
        border-radius: 13px;
        line-height: 26px;
        height: 26px;
        font-size: 12px;
        padding: 0 8px;
      }
    }
  }
  p {
    padding: 0;
    margin: 0;
    line-height: normal;
    font-size: 16px;
    color: #353535;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &.is-active {
      b,
      span {
        background-color: rgba(239, 176, 0, 1);
      }
    }
    span {
      width: 44px;
      height: 44px;
      transition: 0.15s;
      margin: 0 5px 0 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      &::before {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        font-size: 16px;
        content: "";
        display: inline-block;
        background-image: url("/static/images/icon-01.png");
      }
      &[icon="nav_01"]::before {
        background-position: 0 -39px;
      }
      &[icon="nav_02"]::before {
        background-position: 0 -72px;
      }
      &[icon="nav_03"]::before {
        background-position: -23px -72px;
      }
      &[icon="nav_04"]::before {
        background-position: -33px -39px;
      }
      &[icon="nav_05"]::before {
        background-position: -46px -72px;
      }
      &[icon="nav_06"]::before {
        background-position: -69px -72px;
      }
      &[icon="nav_07"]::before {
        background-position: -92px -72px;
      }
      &[icon="nav_08"]::before {
        background-position: -66px -39px;
      }
      &[icon="nav_09"]::before {
        background-position: -115px -72px;
      }
      &[icon="nav_10"]::before {
        background-position: -138px -72px;
      }
      &[icon="nav_11"]::before {
        background-position: -161px -72px;
      }
      &[icon="nav_12"]::before {
        background-position: -99px -39px;
      }
      &[icon="nav_13"]::before {
        background-position: 0 -95px;
      }
      &[icon="nav_14"]::before {
        background-position: -23px -95px;
      }
      &[icon="nav_15"]::before {
        background-position: -132px -39px;
      }
    }
    b {
      word-break: keep-all;
      white-space: nowrap;
      transition: 0.15s;
      border-radius: 15px;
      line-height: 30px;
      height: 30px;
      font-size: 18px;
      padding: 0 12px;
      font-weight: normal;
      position: relative;
    }
  }

  li {
    cursor: pointer;
    font-size: 0;
    padding: 0;
    margin: 5px 0 0 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
