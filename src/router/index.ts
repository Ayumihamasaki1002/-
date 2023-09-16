// createRouter : 创建router实例
// createWebHistory : 创建history模式的路由



import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login/index.vue'
import layout from '@/views/layout/index.vue'
import home from '@/views/home/index.vue'
import category from '@/views/category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: layout,
      children:[
        {
          path:'',
          component:home
        
        },
        {
          path:'/category',
          component:category

        }
      ]

    },
    {
      path:'/login',
      component: login
    }
  ]
})

export default router
