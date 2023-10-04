import request from '@/utils/http'


export const getCategoryAPI = (id:string) => {

    return request({
        url:'/category',
        params:{
           id
        }
    })

}