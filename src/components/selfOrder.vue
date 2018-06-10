<template>
  <div class="selfOrder">
    <headBar title="个人订单"></headBar>
    <div class="userInfo">
      <img src="/static/img/touxiang.png" alt="" class="userlLogo">
      <span class="userPhone">13477677735</span>
      <p class="exit"><img src="/static/img/out.png" alt=""> <br> <span class="exitWord">注销</span></p>
    </div>
    <h2 class="title">我的订单</h2>
    <!--没有任何订单时的状态-->
    <div class="noOneOrder">
      <img src="../assets/logo.png" alt="" class="noOrderImg">
      <p class="noOrderInfo">你还没有订单哦</p>
      <p class="goShoping" @click="IndexPageGo">去挑选</p>
    </div>
    <!--有订单状态，点击订单跳转到订单详情-->
    <div class="myOrderList">
        <ul>
          <li @click="selfOrderDetailGo">
            <div class="myShopOrder">
              <p class="orderNum">订单号：10029039209 <span class="state">配送中</span></p>
              <div class="productOrderList">
                <img src="../assets/logo.png" alt="" class="proLeft">
                <div class="proCenter">
                    <p class="name">优点智能锁 E1</p>
                    <p class="proInfo">蓝牙版 共1件商品</p>
                    <p class="dataTime">2018.02.04 19:48</p>
                </div>
                <div class="proRight">
                  <p class="oldPrice">￥2699</p>
                  <p class="price">￥2699</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
    </div>
    <!--如果没有登录要提示登录框-->
    <phoneLogin v-show="phoneLoginShow" @login="loginFn" @close="closeLogin"></phoneLogin>
    <footerBar></footerBar>
  </div>
</template>
<script>

import headBar from './headBar'
import footerBar from './footerBar'
import phoneLogin from './phoneLogin'
import { UserInfo } from 'common/js/common'
import { creatSelfOrder } from 'api/product'
export default {
  name: 'selfOrder',
  components: {
    headBar,
    footerBar,
    phoneLogin
  },
  data () {
    return {
      //showMyOrder: true
      creatSelfOrder: [],
    }
  },
  mounted () {
    this.data = this.$route.params;
    this.userInfo = UserInfo();
    this.getSelfOrderList()
  },
  methods: {
      getSelfOrderList(){
        let data = this.data;
        let options = {
          user_id: this.userInfo.user_id,
          channel: this.radio,
          product_id:data.product_id,
          user_id:data.user_id,
          value_id:data.value_id,
          color_id:data.color_id,
          total_fee:data.total_fee,
          mode_id:data.mode_id,
        }
      creatSelfOrder(options).then(res =>{
        if(res.data.ok){
          this.creatSelfOrder = res.data.data;
        }
      })
    },
    selfOrderDetailGo () {
      this.$router.push({name: 'selfOrderDetail'})
    },
    IndexPageGo () {
      this.$router.push({name: 'indexPage'})
    }
  }
}
</script>
<style scoped>
.userInfo{height: 110px;}
  .userlLogo{display: inline-block;width: 46px;height: 46px;border-radius: 50%;margin: 30px 20px 30px 30px;float: left;}
  .userPhone{display: inline-block;vertical-align: middle;line-height: 110px;float: left;}
  .exit{display: inline-block;width: 40px;height:80px;float: right;margin-top: 30px;margin-right: 30px;}
  .exit img{display: inline-block;width: 24px;height: 24px;}
  .exit .exitWord{color:rgba(165,165,165,1);font-size: 12px;}
  .title{height: 40px;line-height: 40px;padding-left: 20px; font-size:16px;color:rgba(0,0,0,1);border-top: 10px solid rgba(247,247,247,1);border-bottom: 10px solid rgba(247,247,247,1);}

.noOneOrder{width: 116px;height: 200px;margin: 30px auto 0;text-align: center;}
  .noOrderImg{display: block;width: 116px;height: 116px;margin-bottom: 10px;}
  .noOrderInfo{font-size: 14px;color:rgba(0,0,0,1);}
  .goShoping{font-size: 14px;color:rgba(225,70,59,1);line-height:30px;}

.myOrderList{}
.myShopOrder{}
.orderNum{height:34px;line-height:34px;font-size:14px;color: #000;padding-left: 30px;border-bottom:1px solid rgba(247,247,247,1)}
.orderNum .state{float: right;padding-right: 30px;}

.productOrderList{width:100%;height: auto;overflow: hidden; border-bottom: 10px solid rgba(247,247,247,1);}
.proLeft{display: block;float: left; width: 80px;height: 80px;border: 1px solid rgba(247,247,247,1);margin: 20px;}

.proCenter{float: left;}
  .name{font-size: 16px;color:rgba(0,0,0,1);margin: 20px 0 4px;}
  .proInfo{font-size: 12px;color:rgba(216,216,216,1);}
  .dataTime{font-size: 12px;color:rgba(216,216,216,1);margin-top: 18px;}

.proRight{float: right;width: 80px;}
  .oldPrice{font-size: 16px;margin: 20px 0 4px}
  .price{font-size: 14px; color: rgba(216,216,216,1);}

</style>
