<style scoped lang="less">
@import url("./index.less");

.tab-wrapper {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 25px;
  bottom: 12px;
  font-size: 24px;
  overflow: hidden;
  justify-content: space-around;
  z-index: 999;
  :deep(.van-tabbar-item__icon, .van-icon) {
    margin-bottom: 0;
    font-size: 28px;
  }
  :deep(.van-tabbar-item) {
    flex: none;
    padding: 0 6px;
  }
}

</style>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import defaultSetting from '@/defaultSetting';

const props = defineProps<{ navKey: number, handleClick: (navKey: number) => void }>();

watch(props, (one, two) => {
  // console.log('=> ', one.navKey, two.navKey);
});

</script>

<template>
    <Tabbar class="tab-wrapper" v-model="navKey" :active-color="defaultSetting.themeColor" inactive-color="gray" style="">
      <TabbarItem icon="home-o" @click="() => handleClick(navKey)" />
      <TabbarItem icon="search" @click="() => handleClick(navKey)" />
      <TabbarItem icon="friends-o" @click="() => handleClick(navKey)" />
    </Tabbar>
</template>
