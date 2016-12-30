// 引用模板
import index from '../components/index.vue'
import login from '../components/login.vue'

// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/login',
    component: login
  }
]
