// 引用模板
import index from '../components/index'
import login from '../components/login'
import notFound from '../components/notFound'
import userInfo from '../components/user/userInfo'

// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/user/userInfo',
    component: userInfo
  },
  {
    path: '*',
    component: notFound
  }
]
