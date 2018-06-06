import Vue from 'vue'
import App from './App'
import router from './router'
//import VueResource from 'vue-resource'/*vue1.0*/
//Vue.use(VueResource)
import axios from 'axios'
Vue.prototype.$http = axios
import Vuex from 'vuex'
Vue.use(Vuex)
import {Icon, Button, Swipe, SwipeItem, List, Checkbox, CheckboxGroup, Card, SubmitBar, Toast,Lazyload,Loading,Step, Steps,
  NavBar, AddressEdit, Tabbar, TabbarItem, Tab, Tabs,RadioGroup, Radio} from 'vant'
Vue.use(Icon)
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(List)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Card)
  .use(SubmitBar)
  .use(Toast)
  .use(Lazyload)
  .use(Loading)
  .use(Step)
  .use(Steps)
  .use(NavBar)
  .use(AddressEdit)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(RadioGroup)
  .use(Radio)

Vue.config.productionTip = false


axios.defaults.baseURL = 'http://tianyi.zhongkakeji.com/';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
