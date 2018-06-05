<template>
  <!--订单信息界面-->
  <div class="orderInfo">
    <div class="navBar"><img src="/static/img/goBack.png" alt="" class="goBack"> <p class="navName">订单信息</p></div>
    <div class="myShopOrder">
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
    <div class="ordInfo">
      <h2 class="name">收货信息 <span class="goChange">修改 <img src="/static/img/goforward.png" alt=""></span></h2>
      <p class="chooseInfo">王志武爱打鼓 </p>
      <p class="chooseInfo">187 7888 7827 </p>
      <p class="chooseInfo">清华大学研究院a211 </p>
    </div>
    <div class="ordInfo">
      <h2 class="name">赠送宽带 <span class="goChange">修改</span></h2>
      <p class="chooseInfo">王志武爱打鼓 </p>
      <p class="chooseInfo">187 7888 7827 </p>
      <p class="chooseInfo">清华大学研究院a211 </p>
    </div>
    <div class="ordInfo">
      <h2 class="name">开具发票 <span class="goChange">修改</span></h2>
      <p class="chooseInfo">王志武爱打鼓 </p>
      <p class="chooseInfo">187 7888 7827 </p>
      <p class="chooseInfo">清华大学研究院a211 </p>
    </div>
    <div class="ordInfo bordNone">
      <h2 class="name">支付方式</h2>
      <div  class="radioSlect">
        <div class="van-radio-group">
          <div class="radioStyle van-radio inputWidth">
            <span class="van-radio__input">
              <input type="radio" class="van-radio__control" value="1">
              <i class="van-icon van-icon-checked"></i>
            </span>
            <span class="van-radio__label"><img src="/static/img/weixin.png" alt="" class="wxLogo">微信支付</span>
          </div>
          <div  class="radioStyle van-radio inputWidth">
            <span class="van-radio__input">
              <input type="radio" class="van-radio__control" value="2">
              <i class="van-icon van-icon-check"></i>
            </span><span class="van-radio__label"><img src="/static/img/zhifubao.png" alt="" class="zfbLogo">支付宝</span>
          </div>
        </div>
      </div>
    </div>
    <div class="goPay">
      <p class="price">需支付 <span>￥2699</span></p>
      <p class="payBtn">去支付</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navBar{height: 50px;line-height: 50px;background:rgba(247,247,247,1);}
  .goBack{display: block; width: 8px;height: 14px;padding: 4px;position: absolute;top: 16px;left: 20px;}
  .navName{font-size: 18px;color:rgba(0,0,0,1);text-align: center;height: 50px;line-height: 50px;}

  .myShopOrder{}
  .productOrderList{width:100%;height: auto;overflow: hidden; border-bottom: 10px solid rgba(247,247,247,1);}
  .proLeft{display: block;float: left; width: 80px;height: 80px;border: 1px solid rgba(247,247,247,1);margin: 20px;}

  .proCenter{float: left;}
  .proCenter .name{font-size: 16px;color:rgba(0,0,0,1);margin: 20px 0 4px;}
  .proInfo{font-size: 12px;color:rgba(216,216,216,1);}
  .dataTime{font-size: 12px;color:rgba(216,216,216,1);margin-top: 18px;}

  .proRight{float: right;width: 80px;}
  .oldPrice{font-size: 16px;margin: 20px 0 4px}
  .price{font-size: 14px; color: rgba(216,216,216,1);}

  .ordInfo{padding: 10px 0;margin: 0 20px; border-bottom: 1px solid rgba(247,247,247,1);height: auto;overflow: hidden;}
  .ordInfo .name{line-height: 30px;font-size: 16px;color:rgba(0,0,0,1);}
  .goChange{float: right;color: #D0D0D0;}
  .goChange img{width: 8px;height: 14px;}
  .chooseInfo{font-size: 14px;color: #717171;line-height: 22px;}

  .bordNone{border: none;}
  .inputWidth{width: 50%;float: left;}
  .wxLogo{display: inline-block; width: 30px;height: 25px;vertical-align: middle;}
  .zfbLogo{display: inline-block; width: 29px;height: 29px;vertical-align: middle;}

  .goPay{position: fixed;bottom: 0;left: 0;height: 50px;line-height: 50px;width: 100%;background-color: #fff;border-top: 1px solid rgba(247,247,247,1);}
  .price{width: 50%;float: left;font-size: 14px;text-align: center}
  .price span{font-size: 20px;color:rgba(0,0,0,1);}
  .payBtn{width: 50%;float: right;text-align: center;color: #fff;background-color: rgba(225,70,59,1);font-size: 16px;}
</style>
