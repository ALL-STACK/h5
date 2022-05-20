<style scoped lang="less">
@import url("./index.less");
</style>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import defaultSetting from '@/defaultSetting';

const props = defineProps<{ navKey: number }>();

watch(props, (one, two) => {
  // console.log('=> ', one.navKey, two.navKey);
});

const active = ref(0);

function handleClick() {
  console.log('navKey:', props.navKey);
  
}
</script>

<template>
    <Tabbar v-model="navKey" :active-color="defaultSetting.themeColor" inactive-color="gray">
      <TabbarItem icon="home-o" @click="handleClick">主页</TabbarItem>
      <TabbarItem icon="search" @click="handleClick">消息</TabbarItem>
      <TabbarItem icon="friends-o" @click="handleClick">我的</TabbarItem>
    </Tabbar>
</template>
