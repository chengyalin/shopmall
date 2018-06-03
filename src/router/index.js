import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
import login from '@/components/login'
/*import myCar from '@/components/myCar'*/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
/*    {
      path: '/myCar',
      name: 'myCar',
      component: myCar
    },*/
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    }
  ]
})
