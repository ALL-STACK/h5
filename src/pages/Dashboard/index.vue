<style scoped lang="less">
.guide {
  border-radius: 6px;
  padding: 24px;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff),
    linear-gradient(70deg, #ddf4ff 32%, #dafbe1);
  border: thin solid @color-border-default;
  display: flex;
  .icon-cross {
    font-size: 16px;
    padding-top: 4px;
  }
  .btn {
    margin-right: 8px;
  }
  // align-items: baseline;
}
.text-normal {
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
  margin-bottom: 4px;
}
.color-fg-muted {
  color: @color-fg-muted;
  font-size: 15px;
}
.content {
  font-size: 15px;
}
</style>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { Button, Icon, Popup, Form, Field, Circle } from "vant";

const state = reactive({
  show: true,
  showPopup: false,
  username: "",
  password: "",
});

function handleClick() {
  state.show = !state.show;
}

function onPopup() {
  state.showPopup = !state.showPopup;
}

function onSubmit(values) {
  console.log("values: ", values);
}
</script>

<template>
  <div v-if="state.show">
    <div class="guide">
      <div>
        <h3 class="text-normal">Learn Git and GitHub without any code!</h3>
        <p class="color-fg-muted">
          Using the Hello World guide, you’ll create a repository, start a
          branch, write comments, and open a pull request.
        </p>
        <div>
          <Button type="primary" class="btn" @click="onPopup">Read the guide</Button>
          <!-- <Button type="default">Start a project</Button> -->
        </div>
        <!-- <Circle :current-rate="10" :rate="30" :stroke-width="60" text="宽度定制" /> -->
      </div>
      <div class="icon-cross">
        <Icon class="icon-cross" name="cross" @click="handleClick" />
      </div>
    </div>
    <div></div>
    <Popup position="bottom" @close="() => (state.showPopup = false)" :show="state.showPopup">
      <div class="content">xxx</div>
      <div>xxx</div>
      <div>xxx</div>
    </Popup>
  </div>
</template>
