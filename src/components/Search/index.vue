<style scoped lang="less">
</style>

<script setup lang="ts">
import { Search, Toast } from 'vant';
import { ref } from 'vue';

const searchValue = ref(undefined);

function onSearch() {
  Toast.success("找到啦")
}

function onCancel() {
  // searchValue.value = undefined;
  // Toast.success("找到啦")
}

</script>

<template>
  <div>
    <Search v-model="searchValue" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
  </div>
</template>
