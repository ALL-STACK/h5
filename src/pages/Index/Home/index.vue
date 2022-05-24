<style scoped lang="less">
  @import url("./index.less");
</style>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

const myRef = ref<any>(null);
const scrollTop = ref<number>(0);


function handleScroll() {
  window.addEventListener("scroll", () => {
    scrollTop.value = window.scrollY;
  });
}

onMounted(() => {
  handleScroll();

});

watch(scrollTop, (newValue) => {

  myRef.value.style.filter = `blur(${(newValue / 20).toFixed(1)}px)`;

});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", () => { });
});
</script>

<template>
  <div class="home-wrapper">
    <div class="home-banner-wrapper">
      <img ref="myRef" src="https://img.xiaopiu.com/userImages/img259635180cbac5330.jpg" alt="" />
      <div class="welcome-wrapper">
        <div class="welcome-text">欢迎回来!</div>
        <div class="welcome-name">All Stack</div>
      </div>
    </div>
    <div class="home-content">
      <div>
        <div class="title-wrapper">
          <div class="title">服务中心</div>
          <div class="more">更多</div>
        </div>
        <div class="service-wrapper">
          <div>访客管理</div>
          <div>报事报修</div>
          <div>工单管理</div>
          <div>投诉建议</div>
        </div>
      </div>
      <div>
        <div class="title-wrapper">
          <div>消息通知</div>
          <div>更多</div>
        </div>
        <div>
          <div>
            。。。。
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
