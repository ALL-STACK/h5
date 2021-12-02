import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import 'amfe-flexible';
// import '@/utils/rem';
import routes from '@/routes/index';
import '@/assets/reset.less';
import './global.less';

const vue = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

vue.use(router).mount('#app')
