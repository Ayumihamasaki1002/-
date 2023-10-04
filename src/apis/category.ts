import request from '@/utils/http'


export const getCategoryAPI = (id:string) => {

    return request({
        url:'/category',
        params:{
           id
        }
    })

}


/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id:string): any => {
    return request({
      url:'/category/sub/filter',
      params:{
        id
      }
    })
  }
  