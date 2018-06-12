import axios from 'axios'
/**
 * 添加安装地址
 */
export function creatInstallationAddress(options){
  return axios.get('accounts/info/create/',{
    params: options
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((res) => {

  })
}

/**
 * 查询宽带安装地址
 */
export function queryInstallationAddress(options){
  return axios.get('accounts/info/query/',{
    params: options
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((res) => {

  })
}
