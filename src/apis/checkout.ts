import request from '@/utils/http'

// 获取详情接口
export const getCheckInfoAPI = async ()=>{
    return await request({
        url:'member/order/pre'
    })
}