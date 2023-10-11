import request from '@/utils/http'

export const getOrderAPI = (id:string) => {
  return request({
    url: `/member/order/${id}`
  })
}