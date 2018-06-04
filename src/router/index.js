import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
import indexPageMore from '@/components/indexPageMore'
import productDetail from '@/components/productDetail'
import productDetailScreen from '@/components/productDetailScreen'
import orderInfo from '@/components/orderInfo'
import addAddress from '@/components/addAddress'
import invoice from '@/components/invoice'
import selfOrder from '@/components/selfOrder'
import selfOrderDetail from '@/components/selfOrderDetail'
import screening from '@/components/screening'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/indexPageMore',
      name: 'indexPageMore',
      component: indexPageMore
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/productDetailScreen',
      name: 'productDetailScreen',
      component: productDetailScreen
    },
    {
      path: '/orderInfo',
      name: 'orderInfo',
      component: orderInfo
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: addAddress
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: invoice
    },
    {
      path: '/selfOrder',
      name: 'selfOrder',
      component: selfOrder
    },
    {
      path: '/selfOrderDetail',
      name: 'selfOrderDetail',
      component: selfOrderDetail
    },
    {
      path: '/screening',
      name: 'screening',
      component: screening
    }
  ]
})
