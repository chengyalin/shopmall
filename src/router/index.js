import Vue from 'vue'
import Router from 'vue-router'
//import indexPage from '@/components/indexPage'
//import indexPageMore from '@/components/indexPageMore'
//import productDetail from '@/components/productDetail'
//import productDetailScreen from '@/components/productDetailScreen'
//import orderInfo from '@/components/orderInfo'
//import addAddress from '@/components/addAddress'
//import invoice from '@/components/invoice'
//import InstallationAddress from '@/components/InstallationAddress'
//import selfOrder from '@/components/selfOrder'
//import selfOrderDetail from '@/components/selfOrderDetail'
//import screening from '@/components/screening'
//import footerBar from '@/components/footerBar'
//import headBar from '@/components/headBar'

const indexPage = resolve => require(['components/indexPage.vue'], resolve)
const indexPageMore = resolve => require(['components/indexPageMore.vue'], resolve)
const productDetail = resolve => require(['components/productDetail.vue'], resolve)
const productDetailScreen = resolve => require(['components/productDetailScreen.vue'], resolve)
const orderInfo = resolve => require(['components/orderInfo.vue'], resolve)
const addAddress = resolve => require(['components/addAddress.vue'], resolve)
const invoice = resolve => require(['components/invoice.vue'], resolve);
const InstallationAddress = resolve => require(['components/InstallationAddress.vue'], resolve)
const selfOrder = resolve => require(['components/selfOrder.vue'], resolve)
const selfOrderDetail = resolve => require(['components/selfOrderDetail.vue'], resolve)
const screening = resolve => require(['components/screening.vue'], resolve)
const footerBar = resolve => require(['components/footerBar.vue'], resolve)
const headBar = resolve => require(['components/headBar.vue'], resolve)

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
      path: '/InstallationAddress',
      name: 'InstallationAddress',
      component: InstallationAddress
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
    },
    {
      path: '/footerBar',
      name: 'footerBar',
      component: footerBar
    },
    {
      path: '/headBar',
      name: 'headBar',
      component: headBar
    }
  ]
})
