<template>
  <!--个人的订单详情-->
  <div class="selfOrderDetail">
    <div class="navBar"><img src="../assets/logo.png" alt="" class="goBack"> <p class="navName">订单详情</p></div>
    <p class="orderNum">订单号：10029039209 </p>
    <div class="stepBar">
      <van-steps :active="active">
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
    </div>
    <div class="receiveDetail">
      <p class="receiveInfo">收货信息：王王王王 187 78877777</p>
      <p class="receiveAddress">清华大学研究院 a211</p>
    </div>
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
  </div>
</template>

<script>
export default {
  name: 'selfOrderDetail',
  data () {
    return {
      active: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar{height: 50px;line-height: 50px;background:rgba(247,247,247,1);}
  .goBack{display: block; width: 8px;height: 14px;padding: 4px;position: absolute;top: 18px;left: 20px;}
  .navName{font-size: 18px;color:rgba(0,0,0,1);text-align: center;height: 50px;line-height: 50px;}

.orderNum{height:34px;line-height:34px;font-size:14px;color: #000;padding-left: 30px;border-bottom:1px solid rgba(247,247,247,1)}

.receiveDetail{border-top:1px solid rgba(247,247,247,1);border-bottom: 1px solid rgba(247,247,247,1);padding: 16px 20px;}
.receiveDetail p{font-size: 14px;color:rgba(0,0,0,1);line-height: 30px;}
  .receiveInfo{}
  .receiveAddress{}

.myShopOrder{}
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
