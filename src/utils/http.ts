// axios基础封装

import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000

})

// 拦截器

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // 从pinia获取token
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
     return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()
    // 统一错误提示
     ElMessage({
        type: 'error',
        message: e.response.data.message
     })
    //  401token失效处理
    // 1. 清除本地用户数据
    // 2. 跳转登录页
    if(e.response.status === 401){
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)

})

export default httpInstance