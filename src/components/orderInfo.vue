<template>
  <!--订单信息界面-->
  <div class="orderInfo">
    <headBar title="订单信息"></headBar>
    <div class="myShopOrder">
      <div class="productOrderList">
        <img :src="data.image" alt="" class="proLeft">
        <div class="proCenter">
          <p class="name">{{data.title}}</p>
          <p class="proInfo">{{data.netWorkTitle}} 共{{data.goodsNum}}件商品</p>
          <!--<p class="dataTime">2018.02.04 19:48</p>-->
        </div>
        <div class="proRight">
          <p class="oldPrice">￥{{data.total_fee}}</p>
          <p class="price">￥{{data.price}}</p>
        </div>
      </div>
    </div>
    <div class="ordInfo">
      <h2 class="name">收货信息 <span class="goChange" @click="goChangeAddress">修改 <img src="/static/img/goforward.png" alt=""></span></h2>
      <p class="chooseInfo">{{userInfo.receiver}} </p>
      <p class="chooseInfo">{{userInfo.re_phone}} </p>
      <p class="chooseInfo">{{userInfo.address}} </p>
    </div>
    <div class="ordInfo">
      <h2 class="name">赠送宽带 <span class="goChange" @click="goInstallationAddress">修改 <img src="/static/img/goforward.png" alt=""></span></h2>
      <div class="broadbandBox" v-show="broadbandBoxShow">
        <p class="chooseInfo">{{broadband.nick}} </p>
        <p class="chooseInfo">{{broadband.phone}}</p>
        <p class="chooseInfo">{{broadband.id_card}} </p>
        <p class="chooseInfo">{{broadband.date}} </p>
        <p class="chooseInfo">{{broadband.address}} </p>
      </div>
    </div>
    <!--开具发票暂时不做-->
    <!--<div class="ordInfo">
      <h2 class="name">开具发票 <span class="goChange" @click="goInvoice">修改 <img src="/static/img/goforward.png" alt=""></span></h2>
      <p class="chooseInfo">王志武爱打鼓 </p>
      <p class="chooseInfo">187 7888 7827 </p>
      <p class="chooseInfo">清华大学研究院a211 </p>
    </div>-->
    <div class="ordInfo bordNone">
      <h2 class="name">支付方式</h2>
      <van-radio-group v-model="radio">
        <van-radio class="radioStyle" name="W"><img src="/static/img/weixin.png" alt="" class="wxLogo">微信支付</van-radio>
        <van-radio class="radioStyle" name="Z"><img src="/static/img/zhifubao.png" alt="" class="zfbLogo">支付宝</van-radio>
      </van-radio-group>
    </div>
    <div class="goPay">
      <p class="payPrice">需支付 <span>{{data.total_fee}}</span></p>
      <p class="payBtn" @click="goPay">去支付</p>
    </div>
    <!--添加地址-->
    <van-popup v-model="addAddressShow" position="right" :overlay="false" class="addAddressShow">
      <add-address :data="data" @addAdress="addAdressData"></add-address>
    </van-popup>
    <!--添加宽带安装地址-->
    <van-popup v-model="installAddressShow" position="right" :overlay="false" class="installAddressShow">
      <installation-address :data="data" @InstallationAddress="InstallationAddressData" @noAddress="installAddress"></installation-address>
    </van-popup>
  </div>
</template>

<script>
import headBar from './headBar'
import { creatOrder } from 'api/order'
import { UserInfo } from 'common/js/common'
import { creatAddress } from 'api/address'
import { queryInstallationAddress } from 'api/InstallationAddress'
import AddAddress from './addAddress'
import InstallationAddress from './InstallationAddress'

export default {
  name: 'orderInfo',
  components: {
    headBar,
    AddAddress,
    InstallationAddress
  },
  data () {
    return {
      radio: 'W',
      data:{},//接收数据
      userInfo:'',
      broadband:'',
      addAddressShow: false,
      installAddressShow: false,
      broadbandBoxShow : true
    }
  },
  mounted(){
    this.data = this.$route.params;
    if(this.data.colorTitle === undefined){//如果界面刷新就跳转到首页
      this.$router.push({
        name: `indexPage`
      })
      return;
    }
    this.userInfo = UserInfo();

    this.getInstallationAddress() //获取宽带更新地址
  },
  methods : {
    //添加地址
    addAdressData (data) {
      this.addAddressShow = false;

     this.userInfo.receiver = data.receiver;
     this.userInfo.re_phone = data.re_phone;
     this.userInfo.phone = data.phone;
     this.userInfo.address = data.address;
      localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      //this.data = data[0];
    },
    goChangeAddress(){
      this.addAddressShow = true;
    },

    //添加宽带地址
    InstallationAddressData () {
      this.installAddressShow = false;
      this.broadbandBoxShow = true;

      //this.data = data[0];
      this.getInstallationAddress();
    },
    installAddress(){//不安装宽带状态
      this.installAddressShow = false;//白色层，显示内容层
      this.broadbandBoxShow = false;
    },
    goInstallationAddress(){
      this.installAddressShow = true;
    },

    getInstallationAddress(){//获取宽带更新地址
      let options = {
        user_id: this.userInfo.user_id,
      }
      queryInstallationAddress(options).then(res =>{
        if(res.data.ok){
          this.broadband = res.data.data;
        }
      })
    },
    goPay(){
      //支付前如果没填写地址，提示填写地址
      /*if(this.userInfo.receiver === ''){
        this.$toast('请填写地址哦');
        return;
      }*/
      let data = this.data;
      let options = {
        channel: this.radio,
        product_id:data.product_id,
        user_id:data.user_id,
        value_id:data.value_id,
        color_id:data.color_id,
        total_fee:data.total_fee,
        mode_id:data.mode_id,
        count:data.goodsNum,
      }
      creatOrder(options).then(res =>{
        console.log(res);
        if(res.data.ok){
          this.data = res.data.data
        }
        window.location.href = this.data.pay_link
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .orderInfo{padding-bottom: 50px;}
  .myShopOrder{}
  .productOrderList{width:100%;height: auto;overflow: hidden; border-bottom: 10px solid rgba(247,247,247,1);}
  .proLeft{display: block;float: left; width: 80px;height: 80px;border: 1px solid rgba(247,247,247,1);margin: 20px;}

  .proCenter{float: left;}
  .proCenter .name{font-size: 16px;color:rgba(0,0,0,1);margin: 20px 0 4px;}
  .proInfo{font-size: 12px;color:rgba(216,216,216,1);}
  .dataTime{font-size: 12px;color:rgba(216,216,216,1);margin-top: 18px;}

  .proRight{float: right;width: 80px;}
  .oldPrice{font-size: 16px;margin: 20px 0 4px}
  .price{font-size: 14px; color: rgba(216,216,216,1);text-decoration: line-through;}

  .ordInfo{padding: 10px 0;margin: 0 20px; border-bottom: 1px solid rgba(247,247,247,1);height: auto;overflow: hidden;}
  .ordInfo .name{line-height: 30px;font-size: 16px;color:rgba(0,0,0,1);}
  .goChange{float: right;color: #D0D0D0;}
  .goChange img{width: 8px;height: 14px;}
  .chooseInfo{font-size: 14px;color: #717171;line-height: 22px;}

  .bordNone{border: none;}
  .radioStyle{width: 50%;float: left;}
  .wxLogo{display: inline-block; width: 30px;height: 25px;vertical-align: middle;}
  .zfbLogo{display: inline-block; width: 29px;height: 29px;vertical-align: middle;}

  .goPay{position: fixed;bottom: 0;left: 0;height: 50px;line-height: 50px;width: 100%;background-color: #fff;border-top: 1px solid rgba(247,247,247,1);}
  .payPrice{width: 50%;float: left;font-size: 14px;text-align: center}
  .payPrice span{font-size: 20px;color:rgba(0,0,0,1);}
  .payBtn{width: 50%;float: right;text-align: center;color: #fff;background-color: rgba(225,70,59,1);font-size: 16px;}

  .addAddressShow{width: 100%;height: 100%;overflow: scroll;}
  .installAddressShow{width: 100%;height: 100%;overflow: scroll;}
</style>
