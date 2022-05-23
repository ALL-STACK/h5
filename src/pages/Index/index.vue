<style scoped lang="less">
</style>

<script setup lang="ts">
import Nav from '@/components/Nav/index.vue';
import Home from './Home/index.vue';
import Msg from './Msg/index.vue';
import Mine from './Mine/index.vue';
import { ref, reactive } from 'vue';

const state = reactive({
  navKey: 0
});
// console.log('=== ',navKey.value);

function handleClick(navKey: number) {
  state.navKey = navKey;
  console.log('点了我', navKey);
  
}

</script>

<template>
  <div>
    <div v-if="state.navKey === 0"><Home /></div>
    <div v-if="state.navKey === 1"><Msg /></div>
    <div v-if="state.navKey === 2"><Mine /></div>
    <Nav :navKey="state.navKey" :handleClick="handleClick" />
  </div>
</template>
