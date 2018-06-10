import axios from 'axios'
/**
 * 创建订单
 */
export function creatOrder(options){
  return axios.get('payment/order/create/',{
    params: options
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((res) => {

  })
}
