<template>
  <!--个人的订单详情-->
  <div class="selfOrderDetail">
    <headBar title="订单详情"></headBar>
    <p class="orderNum">订单号：{{data.order_id}}</p>
    <div class="stepBar">
      <van-steps :active="active" active-color>
        <van-step >买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
    </div>
    <div class="receiveDetail">
      <p class="receiveInfo">收货信息：</p>
      <p class="receiveInfo">收货人名称：{{data.user_info.receiver}}</p>
      <p class="receiveInfo">收货人电话：{{data.user_info.phone}}</p>
      <p class="receiveAddress">收货人地址：{{data.user_info.address}}</p>
    </div>
    <div class="myShopOrder">
      <div class="productOrderList">
        <img :src="'http://tianyi.zhongkakeji.com/media/' + data.product_info.product_image" alt="" class="proLeft">
        <div class="proCenter">
          <p class="name">{{data.product_info.product_title}}</p>
          <p class="proInfo">{{data.product_info.product_mode}} 共{{data.count}}件商品</p>
          <p class="dataTime">{{data.create_time }}</p>
        </div>
        <div class="proRight">
          <p class="oldPrice">￥{{data.total_fee}}</p>
          <p class="price">￥{{data.product_info.product_price}}</p>
        </div>
      </div>
    </div>
    <div class="receiveDetail">
      <p class="receiveInfo">宽带预约安装信息：</p>
      <p class="receiveInfo">用户姓名：{{data.net_info.name}}</p>
      <p class="receiveInfo">预约电话：{{data.net_info.phone}}</p>
      <p class="receiveInfo">身份证号码：{{data.net_info.id_card}}</p>
      <p class="receiveInfo">预约时间：{{data.net_info.date}}</p>
      <p class="receiveInfo">详细地址：{{data.net_info.address}}</p>
    </div>
    <a href="tel:15823257598" class="linkSale"><img src="/static/img/phone.png" alt="">15823257598</a>
    <a href="tel:053188687077" class="linkSale"><img src="/static/img/phone.png" alt="">053188687077</a>
  </div>
</template>

<script>
  import headBar from './headBar'
  import { UserInfo } from 'common/js/common'
export default {
  name: 'selfOrderDetail',
  components: {
    headBar
  },
  data () {
    return {
      active:'',
      data:{},
      userInfo:'',
    }
  },
  mounted () {
    console.log(this.$route.params);
    this.data = this.$route.params;
    this.userInfo = UserInfo();
    this.active = this.data.order_status
  },
  methods : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stepBar{padding: 0 10px;}

.orderNum{height:34px;line-height:34px;font-size:14px;color: #000;padding-left: 30px;border-bottom:1px solid rgba(247,247,247,1)}

.receiveDetail{border-top:1px solid rgba(247,247,247,1);border-bottom: 1px solid rgba(247,247,247,1);padding: 16px 20px;}
.receiveDetail p{font-size: 14px;color:rgba(0,0,0,1);line-height: 30px;}
  .receiveInfo{}
  .receiveAddress{}

.myShopOrder{}
.productOrderList{width:100%;height: auto;overflow: hidden; border-bottom: 10px solid rgba(247,247,247,1);}
.proLeft{display: block;float: left; width: 80px;height: 80px;border: 1px solid rgba(247,247,247,1);margin: 0.20rem;}

.proCenter{float: left;width: 1.45rem;overflow: hidden;}
.name{font-size: 16px;color:rgba(0,0,0,1);margin: 20px 0 4px;}
.proInfo{font-size: 12px;color:rgba(216,216,216,1);}
.dataTime{font-size: 12px;color:rgba(216,216,216,1);margin-top: 18px;}

.proRight{float: right;width: 80px;}
.oldPrice{font-size: 16px;margin: 20px 0 4px;color: rgba(0,0,0,1);}
.price{font-size: 14px; color: rgba(216,216,216,1);}

.linkSale{display: block;text-align: center;margin: 20px;color: #999;height: 18px; line-height: 18px;}
.linkSale img{display: inline-block;width: 18px;height: 18px;margin-right: 6px;vertical-align: middle;}
</style>
