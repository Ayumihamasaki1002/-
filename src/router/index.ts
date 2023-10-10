// createRouter : 创建router实例
// createWebHistory : 创建history模式的路由

import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import Login from '@/views/login/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Datail from '@/views/Detail/index.vue'
import Cartlist from '@/views/Cartlist/index.vue'
import Checkout from '@/views/Checkout/index.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'category',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path:'detail/:id',
          component: Datail
        },
        {
          path:'cartlist',
          component: Cartlist
        },
        {
          path:'checkout',
          component: Checkout
        }
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },

  ],
  // 路由行为定义
  scrollBehavior () {
    return{
      top:0
    }
  }

})

export default router
