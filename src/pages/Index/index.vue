<style scoped lang="less">
</style>

<script setup lang="ts">
import Nav from '@/components/Nav/index.vue';
import { ref, watch } from 'vue';

const navKey = ref(0);
console.log('=== ',navKey.value);

function handleClick() {

}

</script>

<template>
  <div>
     <div v-if="navKey === 0">首页</div>
    <div v-if="navKey === 1">消息</div>
    <div v-if="navKey === 2">我的</div>
    <Nav :navKey="navKey" :handleClick="handleClick" />
  </div>
</template>
