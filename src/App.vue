<script setup="props, context" lang="ts">
  import HeadLine  from '@/components/Head/index.vue'
  
</script>

<template>
  <!-- <head-line /> -->
  <div class="wrapper">
   <router-view />
  </div>
</template>

<style scoped lang="less">
  .wrapper {
    background-color: #fff;
    // padding: 0 16px;
    // margin-top: 16px;
  }
</style>