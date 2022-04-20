<style scoped lang="less">
@import url("@/utils/utils.less");
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
  .btn-wrapper {
    display: flex;
    margin-top: 12px;
  }
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
.d-block {
  margin-top: 8px;
  margin-bottom: 24px;
  .title {
    font-size: 16px;
    margin-bottom: 4px;
    font-weight: 400;
  }
  .box {
    padding: 32px 8px 16px 8px;
    border: thin @color-border-default solid;
    background-color: @color-canvas-default;
    border-radius: 6px;
    .input-wrapper {
      display: flex;
      border-radius: 6px;
      margin-top: 4px;
      margin-bottom: 16px;
      .search-input {
        width: 100%;
        border-radius: inherit;
        outline: none;
        background: @color-canvas-inset;
        border: 1px solid @color-border-default;
        box-shadow: none;
        padding: 5px 12px;
        font-size: 14px;
        // color: #fff;
        &::-webkit-input-placeholder {
          /* WebKit browsers */
          color: #8c959f;
        }
        &:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #fff;
        }
        &::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #fff;
        }
        &:-ms-input-placeholder {
          /* Internet Explorer 10+ */
          color: #fff;
        }
      }
    }
    .source {
      font-size: 14px;
      display: flex;
      align-items: center;
      margin-top: 8px;
      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
    .show-more {
      font-size: 12px;
      padding: 16px 8px;
      margin-top: 16px;
      border-top: thin @color-border-default solid;
      color: @color-fg-muted;
    }
  }
}
.loading {
  position: absolute;
  top: calc(50% - 37px);
  left: calc(50% - 15px);
}
</style>

<script setup lang="ts">
import { reactive, ref, h } from "vue";
import { Button, Icon, Popup, Loading, Field, Overlay } from "vant";

const MyComponent = {
  data() {
    return {
      num: '2xx'
    }
  },
  // template: `<div>{{ num }}</div>`,
  render() {
    return h('span', {}, this.num)
  }
}

const state = reactive({
  show: true,
  showPopup: false,
  username: "",
  password: "",
  showMore: false,
  loadingMore: false,
  repositories: [
    {
      repositoryName: "ALL-STACK / plugin-qiankun-demo",
      icon: "https://avatars.githubusercontent.com/u/24264872?s=40&u=feaa3600c008a7875229adc019ef1de076cd3be3&v=4",
    },
    {
      repositoryName: "ALL-STACK / dcp-static",
      icon: "https://avatars.githubusercontent.com/u/24264872?s=40&u=feaa3600c008a7875229adc019ef1de076cd3be3&v=4",
    },
    {
      repositoryName: "ALL-STACK / qiankun-slave-umi",
      icon: "https://avatars.githubusercontent.com/u/24264872?s=40&u=feaa3600c008a7875229adc019ef1de076cd3be3&v=4",
    },
    {
      repositoryName: "ALL-STACK / qiankun-master",
      icon: "https://avatars.githubusercontent.com/u/24264872?s=40&u=feaa3600c008a7875229adc019ef1de076cd3be3&v=4",
    },
    {
      repositoryName: "umijs / plugins",
      icon: "https://avatars.githubusercontent.com/u/33895495?s=40&v=4",
    },
    {
      repositoryName: "ALL-STACK / qiankun-slave-vue",
      icon: "https://avatars.githubusercontent.com/u/24264872?s=40&u=feaa3600c008a7875229adc019ef1de076cd3be3&v=4",
    },
    {
      repositoryName: "ALL-STACK / umi-web",
      icon: "https://avatars.githubusercontent.com/u/24264872?s=40&u=feaa3600c008a7875229adc019ef1de076cd3be3&v=4",
    },
  ],
  mock: ['1', MyComponent, '3']
});

const restRepos = [
  {
    repositoryName: "ALL-STACK / h5",
    icon: "https://avatars.githubusercontent.com/u/24264872?s=40&u=feaa3600c008a7875229adc019ef1de076cd3be3&v=4",
  },
  {
    repositoryName: "ant-design / pro-components",
    icon: "https://avatars.githubusercontent.com/u/24264872?s=40&u=feaa3600c008a7875229adc019ef1de076cd3be3&v=4",
  },
  {
    repositoryName: "umijs / umi",
    icon: "https://avatars.githubusercontent.com/u/33895495?s=40&v=4",
  },
  {
    repositoryName: "youzan / vant",
    icon: "https://avatars.githubusercontent.com/u/11404085?s=40&v=4",
  },
  {
    repositoryName: "ALL-STACK / sdk-web-ui",
    icon: "https://avatars.githubusercontent.com/u/24264872?s=40&u=feaa3600c008a7875229adc019ef1de076cd3be3&v=4",
  },
  {
    repositoryName: "ALL-STACK / webapp-meituan",
    icon: "https://avatars.githubusercontent.com/u/24264872?s=40&u=feaa3600c008a7875229adc019ef1de076cd3be3&v=4",
  },
];

function handleClick() {
  state.show = !state.show;
}

function onPopup() {
  state.showPopup = !state.showPopup;
}

function onSubmit(values) {
  console.log("values: ", values);
}

async function showMore() {
  state.loadingMore = true;
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(""), 2000 * 1);
  });
  state.showMore = !state.showMore;
  state.loadingMore = false;
  state.repositories = [...state.repositories, ...restRepos];
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
        <div class="btn-wrapper">
          <Button type="primary" class="btn" @click="onPopup">Read the guide</Button>
          <Button type="default">Start a project</Button>
        </div>
      </div>
      <div class="icon-cross">
        <Icon class="icon-cross" name="cross" @click="handleClick" />
      </div>
    </div>
  </div>
  <div class="d-block">
    <h2 class="title">Repositories</h2>
    <div class="box">
      <div class="input-wrapper">
        <input type="text" class="search-input" placeholder="Find a repository…" />
      </div>
      <ul>
        <li v-for="repository in state.repositories" class="source">
          <img :src="repository.icon" />
          <span>{{ repository.repositoryName }}</span>
        </li>
      </ul>
      <div class="show-more" v-if="!state.showMore" @click="showMore">
        <span>Show more</span>
      </div>
    </div>
  </div>
  <div class="d-block">
    <h2 class="title">Recent activity</h2>
    <div class="box">
      <div v-for="item in state.mock">
        <!-- {{  typeof item === "string" ? item : <item /> }} -->
        <span v-if="typeof item === 'string'">{{ item }}</span>
        <span v-else>
          <my-component />
        </span>
      </div>
    </div>
  </div>
  <Popup position="bottom" @close="() => (state.showPopup = false)" :show="state.showPopup">
    <div class="content">xxx</div>
    <div>xxx</div>
    <div>xxx</div>
  </Popup>
  <Overlay :show="state.loadingMore">
    <Loading class="loading" type="spinner" color="#fff" />
  </Overlay>
</template>
