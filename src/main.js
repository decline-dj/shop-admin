import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueRouter from 'vue-router';
import login from './pages/Login';
import admin from './pages/Admin'


Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: 'admin'
  },
  {
    path: '/Login',
    component: login,
    meta: '登陆页'
  }, {
    path: '/Admin',
    component: admin,
    meta: '商城首页'
  },
]

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')