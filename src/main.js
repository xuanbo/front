// 引入bootsrap
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min'
// 引入toastr
import './assets/toastr/css/toastr.min.css'
import toastr from './assets/toastr/js/toastr.min'
// 引用 vue 没什么要说的
import Vue from 'vue'
// 引用vue-resource
import VueResource from 'vue-resource'
// 使用vue-resource
Vue.use(VueResource);
// 引用路由
import VueRouter from 'vue-router'
// 光引用不成，还得使用
Vue.use(VueRouter)
// 入口文件为 src/App.vue 文件 所以要引用
import App from './App.vue'
// 引用路由配置文件
import routes from './config/routes'
// 使用配置文件规则
const router = new VueRouter({
  routes
})
// 引入vee-validate
import VeeValidate from 'vee-validate';
// 使用vee-validate
Vue.use(VeeValidate);
// 引入core
import core from './config/core'

// 绑定全局变量
Vue.prototype.$toastr = toastr;
Vue.prototype.$core = core;

// 创建Vue实例
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
});

// 对路由进行认证
core.authService(router)
