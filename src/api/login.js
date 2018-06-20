import axios from 'axios'
/**
 * 获取验证码
 */
export function sendCode(options){
  return axios.get('accounts/code/send/',{
    params: options
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((res) => {

  })
}

/**
 * 登录
 */

export function login(options){
  return axios.get('accounts/code/verify/',{
    params: options
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((res) => {

  })
}
