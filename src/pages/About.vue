<script setup="props, context" lang="ts">
import { ref, defineComponent, provide, reactive, onMounted } from "vue";
import { Button, Form, Field } from "vant";
import Son from "@/components/Son.vue";
import store from "@/store";

const state = reactive({
  count: 0,
  username: "",
  password: "",
  visible: false,
});

provide("state", state);

function onSubmit(values: any) {
  console.log(values);
}

function handleClick(e: number) {
  state.visible = !state.visible;
  state.count++;
}

onMounted(() => {
  console.log("onMounted: ", store);
});

function onStoreClick() {
  store.setMessageAction(state.count + 1);
}

// export default defineComponent({
//   data() {
//     return {
//       count: 0,
//       username: '',
//       password: ''
//     }
//   },
//   components: {
//     Button,
//     Form,
//     Field
//   },
//   methods: {
//     onSubmit(values: any) {
//       console.log(values)
//     }
//   },
//   setup(props) {
//     console.log('????????',props)
//   }
// })
</script>

<template>
  <div>about</div>
  <son @handleClick="handleClick" :count="state.count" :visible="state.visible">
    哈包儿
  </son>
  <br />
  <span>{{ state.count }}</span>
  <br />
  <Button type="warning" @click="() => (state.visible = !state.visible)">父</Button>
  <Button type="danger" @click="onStoreClick">点我哈{{store ?? '-'}}</Button>
  <Form @submit="onSubmit">
    <Field v-model="state.username" name="username" label="用户名" placeholder="用户名"
      :rules="[{ required: true, message: '必填' }]" />
    <Field v-model="state.password" type="password" name="pwd" label="密码" placeholder="密码"
      :rules="[{ required: true, message: '必填' }]" />
    <div style="margin: 16px">
      <Button round block type="primary" native-type="submit">提交</Button>
    </div>
  </Form>
  <router-view />
</template>
