import axios from 'axios'
/**
 * banner列表
 */
export function bannerList(options){
  return axios.get('product/ad/list/').then((res) => {
    return Promise.resolve(res)
  }).catch((res) => {

  })
}
