// 封装购物车模块

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';


export const useCartStore =   defineStore('cart', ()=>{
    // 1. 定义state - cartList
    const cartList = ref<any[]>([]);
    // 2. 定义action - addCart
    const addCart = (goods:any) =>{

        //  添加购物车操作
        // 已添加过 count + 1
        // 没有添加过 - 直接push
        // 思路:通过匹配传递过来的商品对象中的skuId能不能在cartList中找到,找到就是添加过的
        const item =  cartList.value.find((item)=> goods.skuId === item.skuId)
        
        if(item){
            // 找到了
            item.count++
        }
        else{
            // 没有找到
            cartList.value.push(goods)
        }
    }

    const delCart = (skuId:string) =>{
        // 思路:
        // 1.找到要删除项的下标值 - splice   
        // const idx = cartList.value.findIndex((item)=> item.skuId === skuId)
        // cartList.value.splice(idx,1)

        // 2.使用数组的过滤方法 - filter 
        
        cartList.value =   cartList.value.filter((item)=> item.skuId !== skuId)
       
        
    }
    // 总数
    const allCount =  computed(()=>cartList.value.reduce((a,c)=>a + c.count,0))
    // 总价
    const allPrice =  computed(()=>cartList.value.reduce((a,c)=>a + c.count*c.price,0))

    return{
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice
    }
},
{
    persist: true,
  })