// 封装购物车模块

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useUserStore } from './user';
import { insertCartAPI, findNewCartAPI, delCartAPI } from '@/apis/cart';



export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);


    const updateAction = async () => {
        const res = await findNewCartAPI()
        cartList.value = res.result
    }
    
    // 1. 定义state - cartList
    const cartList = ref<any[]>([]);
    // 2. 定义action - addCart
    const addCart = async (goods: any) => {
        //  添加购物车操作
        // 已添加过 count + 1
        // 没有添加过 - 直接push
        // 思路:通过匹配传递过来的商品对象中的skuId能不能在cartList中找到,找到就是添加过的
        const {skuId, count} = goods
        if(isLogin.value){
            //登录之后的加入购物车逻辑
            await  insertCartAPI({skuId, count})
            updateAction()

        }
        else{
            // 本地逻辑
            const item = cartList.value.find((item) => goods.skuId === item.skuId)

            if (item) {
                // 找到了
                item.count++
            }
            else {
                // 没有找到
                cartList.value.push(goods)
            }

        }

     
    }


    // 清除功能
    const delCart = async (skuId:any) => {
        // 思路:
        // 1.找到要删除项的下标值 - splice   
        // const idx = cartList.value.findIndex((item)=> item.skuId === skuId)
        // cartList.value.splice(idx,1)

        // 2.使用数组的过滤方法 - filter 
        if(isLogin.value){
            await delCartAPI([skuId])
            updateAction()
        }
        else{
            cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
        }
    }


    // 清除购物车功能
    const clearCart =  () => {
        cartList.value = []
    }
    // 总数
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    // 总价
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))


    // 单选框
    const singleCheck = (skuId: string, selected: boolean) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }

    const isAll = computed(()=>cartList.value.every((item) => item.selected)) 

    // 全选功能
    const checkAll = (selected:boolean) => {
        cartList.value.forEach((item) => {
            item.selected = selected
        })
    }

    // 筛选功能
    const selectCount =  computed(()=>cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0))
    const selectPrice =  computed(()=>cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    
    


    return {
        addCart,
        delCart,
        clearCart,
        singleCheck,
        checkAll,
        updateAction,
        cartList,
        allCount,
        allPrice,
        isAll,
        selectCount,
        selectPrice,
    }
},
    {
        persist: true,
    })