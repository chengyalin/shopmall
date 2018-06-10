import axios from 'axios'
/**
 * 添加地址
 */
export function creatAddress(options){
  return axios.get('accounts/userprofile/update/',{
    params: options
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((res) => {

  })
}
