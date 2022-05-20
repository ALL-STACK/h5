import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import 'amfe-flexible';
import routes from '@/routes/index';
import '@/assets/reset.less';
import store from './store';
import App from './App.vue'
import './global.less';
// import '@/utils/rem';

const vue = createApp({
  ...App,
  data() {
    return {
      privateState: {},
      sharedState: store.state
    }
  }
});
// console.log(createWebHashHistory());

const router = createRouter({
  history: createWebHistory('/'),
  routes, 
})

vue.use(router).mount('#app')
