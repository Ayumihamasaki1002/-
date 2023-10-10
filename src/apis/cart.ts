// 封装购物车接口
import request from '@/utils/http'

// 加入购物车
export const insertCartAPI = ({skuId,count}) => {
    return request({
        url:'/member/cart',
        method:'post',
        data:{
            skuId,
            count
        }
    })
}


// 获取购物车列表
export const findNewCartAPI = ()=>{
    return request({
        url:'member/cart'
    })
}
// 删除购物车

export const delCartAPI = (ids:any)=>{
        return request({
            url:'/member/cart',
            method:'delete',
            data:{
                ids
            }
        })
    }


// 合并购物车
export const mergeCartAPI = (data:[])=>{
    return request({
        url:'/member/cart/merge',
        method:'post',
        data
    })
}
