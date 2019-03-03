import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueRouter from 'vue-router'
import Login from './pages/Login'
import Admin from './pages/Admin'
import GoodsList from './pages/goods/Goods-list'
import Category from './pages/category/Category'


Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.prototype.$axios = axios;


const routes = [{
    path: '/',
    redirect: 'admin'
  },
  {
    path: '/login',
    component: Login,
    meta: '登陆页'
  }, {
    path: '/admin',
    component: Admin,
    meta: '商城首页',
    redirect: '/admin/goods-list',
    children: [{
        path: 'goods-list',
        component: GoodsList,
        meta: '商品列表'
      },
      {
        path: 'category',
        component: Category,
        meta: '管理'
      }
    ]
  },
]




const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')