<style scoped lang="less">
.home-wrapper {
  position: relative;
  .home-banner-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    // & > img {
    //   filter: blur(5px);
    // }
    .welcome-wrapper {
      position: absolute;
      left: 24px;
      bottom: calc(100% - 170px);
      color: #fff;
      .welcome-text {
        font-size: 12px;
        margin-bottom: 12px;
      }
      .welcome-name {
        font-size: 24px;
      }
    }
  }
  .home-content {
    // border: thin red solid;
    z-index: 2;
    height: 100vh;
    position: absolute;
    top: 200px;
    width: 100%;
    background-color: #fff;
    border-radius: 30px 30px 0 0;
  }
}
</style>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';

  const _this = this;


  onMounted(() => {
    console.log('2');
    
    const ref = _this;
    console.log('???', ref);
    
  });

  onBeforeUnmount(() => {

  })

</script>

<template>
  <div class="home-wrapper">
    <div class="home-banner-wrapper">
      <img
        src="https://img.xiaopiu.com/userImages/img259635180cbac5330.jpg"
        alt=""
      />
      <div class="welcome-wrapper">
        <div class="welcome-text">欢迎回来!</div>
        <div class="welcome-name">All Stack</div>
      </div>
    </div>
    <div class="home-content" ref="home-content">
      
    </div>
  </div>
</template>
