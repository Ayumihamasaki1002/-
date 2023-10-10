// 管理用户数据相关

import { loginAPI } from '@/apis/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user',()=>{
    // 1. 定义管理用户数据的state
    const userInfo = ref({})
    const cartStore = useCartStore()
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async ( {account,password} ) => {
        const res = await loginAPI({account,password})
        userInfo.value = res.result 
        // 合并购物车操作
        mergeCartAPI( cartStore.cartList.map((item)=>{
            return{
                skuId:item.skuId,
                count:item.count,
                selected:item.selected
            }
        }))
        cartStore.updateAction()
    }
    // 退出时清除用户信息
    const clearUserInfo = () =>{
        userInfo.value = {}
        cartStore.clearCart()
    }



    // 3 以对象的格式把state和action return
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
{
    persist: true,
  }

)