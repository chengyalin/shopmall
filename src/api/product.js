import axios from 'axios'
/**
 * 产品列表列表
 */
export function productList(options){
  return axios.get('product/product/list/').then((res) => {
    return Promise.resolve(res)
  }).catch((res) => {

  })
}


/**
 * 产品详情
 */
export function productDetail(options){
  return axios.get('product/product/query/',{
    params: options
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((res) => {

  })
}

/**
 * 产品筛选的新品和首页产品列表一个接口，取is_hot字段
 * 产品筛选的其他分类接口是http://tianyi.zhongkakeji.com/product/product_category/list/
 */
export function productListOther(options){
  return axios.get('product/product_category/list/',{
    params: options
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((res) => {

  })
}
