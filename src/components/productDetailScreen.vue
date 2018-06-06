<template>
  <!--产品详情筛选-->
  <div class="productDetailScreen">
    <headBar title="选择商品"></headBar>
    <div class="myShopOrder">
      <div class="productOrderList">
        <img src="../assets/logo.png" alt="" class="proLeft">
        <div class="proCenter">
          <p class="name">优点智能锁 E1</p>
        </div>
        <div class="proRight">
          <p class="oldPrice">￥2699</p>
          <p class="price">￥2699</p>
        </div>
      </div>
    </div>

    <div class="chooseDesc">
      <div class="chooseMain">
        <h2 class="name">颜色选择</h2>
        <span class="chooseOne active"><i class="colorRed"></i><em>红古铜</em></span>
        <span class="chooseOne"><i class="silvery"></i><em>拉丝银</em></span>
        <span class="chooseOne"><i class="gold"></i><em>琥珀金</em></span>
      </div>
      <div class="chooseMain">
        <h2 class="name">联网方式选择</h2>
        <span class="chooseOne active"><em>蓝牙</em></span>
        <span class="chooseOne"><em>蓝牙zzzzzzzzzz</em></span>
      </div>
      <div class="chooseMain">
        <h2 class="name">门厚度选择</h2>
        <span class="chooseOne active"><em>30mmm-60mmm</em></span>
        <span class="chooseOne"><em>70mm-90mm</em></span>
      </div>
      <div class="chooseMain">
        <h2 class="name">选择数量</h2>
        <div class="chooseCountNum">
          <span class="reduceNum">-</span>
          <input type="text" class="showNumValue" value="1" readonly>
          <span class="addNum">+</span>
        </div>
      </div>
    </div>

    <div class="footerBtn">
      <van-row>
        <van-col span="12">
          <van-button bottom-action>确定</van-button>
        </van-col>
      </van-row>
    </div>
    <!--如果没有登录要提示登录框-->
    <div class="loginBox" v-show="loginBoxShow">
      <div class="mask"></div>
      <div class="loginMain">
        <div class="loginBar">
          <img src="/static/img/goBack.png" alt="" class="goBackIcon">
          <p class="navName">订单详情</p>
          <img src="/static/img/close.png" alt="" class="close">
        </div>
        <!--输入手机号-->
        <div class="loginWrite">
          <input type="text" class="telNum" placeholder="输入手机号">
          <p class="errorHint">手机号格式错误</p>
        </div>
        <!--输入验证码-->
        <div class="loginWrite">
          <p class="sendWord">发送验证码至182 9382 9922</p>
          <input type="text" class="verification" placeholder="输入验证码">
          <span class="send">发送验证</span><span class="countdown">60s</span>
          <p class="errorHint">手机号格式错误</p>
        </div>
        <button class="loginBtn">确定</button>
      </div>
    </div>
    <!--加载-->
    <van-loading v-if="LoadingOk" type="spinner" color="black" class="loadPosition" />
  </div>
</template>

<script>
import headBar from './headBar'
export default {
  name: 'productDetailScreen',
  components: {
    headBar
  },
  data () {
    return {
      loginBoxShow: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navBar{height: 50px;line-height: 50px;background:rgba(247,247,247,1);}
  .goBack{display: block; width: 8px;height: 14px;padding: 4px;position: absolute;top: 16px;left: 20px;}
  .navName{font-size: 18px;color:rgba(0,0,0,1);text-align: center;height: 50px;line-height1: 50px;}

 .myShopOrder{}
 .productOrderList{width:100%;height: auto;overflow: hidden; border-bottom: 10px solid rgba(247,247,247,1);}
 .proLeft{display: block;float: left; width: 80px;height: 80px;border: 1px solid rgba(247,247,247,1);margin: 20px;}

 .proCenter{float: left;}
 .name{font-size: 16px;color:rgba(0,0,0,1);margin: 20px 0 4px;}

 .proRight{float: right;width: 80px;}
 .oldPrice{font-size: 16px;margin: 20px 0 4px;color:rgba(0,0,0,1);}
 .price{font-size: 14px; color: #797979;text-decoration: line-through;}

 .chooseDesc{}
 .chooseMain{padding-left: 10px;}
 .chooseMain .name{font-size: 16px;color:rgba(0,0,0,1);height: 40px;line-height: 40px;margin-top: 10px;}
 .chooseOne{display: inline-block; border:1px solid rgba(232,232,232,1);border-radius: 4px;padding: 6px 15px;}
 .chooseOne i{display: block;width: 25px;height: 25px;border-radius: 50%;margin: 0 auto 6px;}
 .chooseOne .colorRed{background-color: #CD9082}
 .chooseOne .silvery{background-color: #BEBEBE;}
 .chooseOne .gold{background-color: #F5D168;}
 .chooseOne em{font-style: normal}
 .chooseOne.active{border:1px solid rgba(225,70,59,1);}

/* 加减数量*/
 .chooseCountNum{width: 130px;height: 28px;line-height: 28px;font-size: 16px;text-align: center;border:1px solid rgba(186,186,186,1);border-radius: 5px;}
 .reduceNum{display: inline-block; width: 44px;float: left;border-right:1px solid rgba(186,186,186,1);}
 .showNumValue{width: 40px;border: none;float: left;text-align: center;}
 .addNum{display: inline-block; width: 44px;float: right;border-left:1px solid rgba(186,186,186,1);}

 .loginBox{}
 .loginBox .mask{width: 100%;height: 100%;background-color: #000;opacity: .7;position: absolute;top:0;left:0;z-index: 99;}
 .loginMain{width: 300px;border-radius: 5px; background-color: #fff; position: fixed;top: 50%;left: 50%;transform:translate(-50%,-50%);z-index: 100;}
 .loginBar{}
 .goBackIcon{display: block; width: 8px;height: 14px;padding: 4px;position: absolute;top: 16px;left: 20px;}
 .navName{font-size: 18px;color:rgba(0,0,0,1);text-align: center;height: 50px;line-height: 50px;}
 .close{display: block; width: 14px;height: 14px;padding: 4px;position: absolute;top: 16px;right: 20px;}
 .loginWrite{padding: 5px 20px 70px;}
    .telNum{display: block;border: none; border-bottom:1px solid rgba(240,240,240,1);width: 240px;padding: 10px;}
    .errorHint{color: red;font-size: 14px;line-height: 30px;}
 .loginBtn{border: none;width: 300px;border-radius:0 0 5px 5px; height: 50px;color: #fff; background:rgba(225,70,59,1);position: absolute;left: 0;bottom: 0;}

 .sendWord{color: #797979;text-align: center;margin: 0 auto 10px;}
  .verification{display: inline-block;border: none; border-bottom:1px solid rgba(240,240,240,1);width: 150px;padding: 10px;}
  .send{display: inline-block; border:1px solid rgba(225,70,59,1);font-size: 14px;color: #E1463B;padding: 5px 8px;}
  .countdown{float: right;line-height: 50px;margin-right: 27px;}

 .footerBtn{width: 100%; position: fixed;bottom: 0;left: 0;}
 .loadPosition{position: fixed;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);}
</style>
