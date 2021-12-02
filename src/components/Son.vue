
<script setup lang="ts">
  import { ref, watch, inject } from 'vue';
  import { Button } from 'vant';
  const props = defineProps<{ count: number, visible: boolean }>();

  const emit = defineEmits(['handleClick']);

  const myNum = ref(25);

  const state = inject('state');

  console.log('子： ',state)

  function sonClick(num: number) {
    emit('handleClick', num)
    // handleClick(num + 'x');
    // myNum.value ++;
    // handleClick && handleClick(count);
  }

  watch(props, (one, two) => {
    console.log(one.visible, two.visible)
  })

  // watchEffect(() => console.log('=> ',count))
</script>

<template>

  <h1>子组件</h1>
  <Button v-bind="props" @click="() => sonClick(count)" type="primary">点我加一</Button>
  <div class="count">{{ count }}</div>
  <slot />
  
</template>

<style scoped lang="less">
  @import url('@/components/son.less');
</style>
