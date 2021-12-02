<script setup="props, context" lang="ts">
  import Head from '@/components/Head/index.vue'

</script>

<template>
  <Head />
  <div class="wrapper">
   <router-view />
  </div>
</template>

<style>
  .wrapper {
    padding: 0 16px;
    margin-top: 16px;
    
  }
</style>