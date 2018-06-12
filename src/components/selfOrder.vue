<template>
  <div class="selfOrder">
    <headBar title="个人订单"></headBar>
    <div class="userInfo">
      <img src="/static/img/touxiang.png" alt="" class="userlLogo">
      <span class="userPhone">{{userInfo.phone}}</span>
      <p class="exit" @click="exit"><img src="/static/img/out.png" alt=""> <br> <span class="exitWord">注销</span></p>
    </div>
    <h2 class="title">我的订单</h2>
    <!--有订单状态，点击订单跳转到订单详情-->
    <div class="myOrderList"  v-if="data.length > 0">
      <ul>
        <li>
          <a href="javascript:;" @click="goselfOrderDetail(item)" v-for="(item, index) in data" :key="index">
            <div class="myShopOrder">
              <p class="orderNum">订单号：{{item.order_id}} <span class="state">{{item.order_status}}</span></p>
              <div class="productOrderList">
                <img :src="'http://tianyi.zhongkakeji.com/media/' + item.product_info.product_image" alt="" class="proLeft">
                <div class="proCenter">
                  <p class="name">{{item.product_info.product_title}}</p>
                  <p class="proInfo">{{item.product_info.product_mode}} 共{{item.count}}件商品</p>
                  <p class="dataTime">{{item.create_time }}</p>
                </div>
                <div class="proRight">
                  <p class="oldPrice">￥{{item.total_fee}}</p>
                  <p class="price">￥{{item.product_info.product_price}}</p>
                </div>
              </div>
            </div>
          </a>

        </li>
      </ul>
    </div>
    <!--没有任何订单时的状态-->
    <div class="noOneOrder" v-if="data.length === 0">
      <img src="/static/img/noOrder.png" alt="" class="noOrderImg">
      <p class="noOrderInfo">你还没有订单哦</p>
      <p class="goShoping" @click="IndexPageGo">去挑选</p>
    </div>
    <!--如果没有登录要提示登录框-->
    <phoneLogin v-show="phoneLoginShow" @login="loginFn" @close="closeLogin"></phoneLogin>
    <!--关闭登录框提示登录或者跳转首页-->
    <div class="twoBtnMask" v-show="twoBtnMaskShow">
      <div class="maskWhite"></div>
      <div class="mask"></div>
      <div class="twoBtn">
        <router-link to="/"><button class="goHome">去首页</button></router-link>
        <button class="goLogin" @click="phoneLoginShowRe">我要登录</button>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>

  import headBar from './headBar'
  import footerBar from './footerBar'
  import phoneLogin from './phoneLogin'
  import { UserInfo } from 'common/js/common'
  import { creatSelfOrder } from 'api/selforder'
  export default {
    name: 'selfOrder',
    components: {
      headBar,
      footerBar,
      phoneLogin
    },
    data () {
      return {
        myOrderListShow: true,
        phoneLoginShow: false,//手机登录框
        twoBtnMaskShow :false,//再次点击登录框
        creatSelfOrder: [],
        data:[],
        userInfo:'',
        orderData:{}
      }
    },
    mounted () {
      this.data = this.$route.params;
      this.userInfo = UserInfo();
      if(this.userInfo === '') {
        this.phoneLoginShow = true;
        return;
      }
      this.getSelfOrderList();
    },
    methods: {
      loginFn(val){
        this.phoneLoginShow = false;
        this.userInfo = UserInfo();
        this.$nextTick(_ =>{
          this.getSelfOrderList();
        })
      },
      closeLogin(){
        this.phoneLoginShow = false;
        this.twoBtnMaskShow = true;
      },
      phoneLoginShowRe(){
        this.phoneLoginShow = true;
        this.twoBtnMaskShow = false;
      },
      getSelfOrderList(){
        const data = this.data;
        let options = {
          //user_id: this.userInfo.user_id,
          user_id: 4,
        }
        creatSelfOrder(options).then(res =>{
          console.log(res);
          if(res.data.ok){
            this.data = res.data.data
            console.log(this.data)
          }
        })
      },
      goselfOrderDetail (item) {
        console.log(item)
        this.$router.push({
          name: `selfOrderDetail`,
          params: item
        })
      },
      IndexPageGo () {
        this.$router.push({name: 'indexPage'})
      },
      exit () {
        this.$toast('成功退出')
        localStorage.removeItem('userInfo');
        this.twoBtnMaskShow = true;
        this.userInfo = UserInfo();

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

  .myOrderList{padding-bottom: 50px;}
  .myShopOrder{}
  .orderNum{height:34px;line-height:34px;font-size:14px;color: #000;padding-left: 20px;border-bottom:1px solid rgba(247,247,247,1)}
  .orderNum .state{float: right;padding-right: 30px;}

  .productOrderList{width:100%;height: auto;overflow: hidden; border-bottom: 10px solid rgba(247,247,247,1);}
  .proLeft{display: block;float: left; width: 80px;height: 80px;border: 1px solid rgba(247,247,247,1);margin: 0.20rem;}

  .proCenter{float: left;width: 1.45rem;overflow: hidden;}
  .name{font-size: 16px;color:rgba(0,0,0,1);margin: 20px 0 4px;}
  .proInfo{font-size: 12px;color:rgba(216,216,216,1);}
  .dataTime{font-size: 12px;color:rgba(216,216,216,1);margin-top: 18px;}

  .proRight{float: right;width: 80px;}
  .oldPrice{font-size: 16px;margin: 20px 0 4px}
  .price{font-size: 14px; color: rgba(216,216,216,1);text-decoration: line-through;}


  .mask{width: 100%;height: 100%;background-color: #000;opacity: .7;position: fixed;top:0;left:0;z-index: 1000;}
  .maskWhite{width: 100%;height: 100%;background-color: #000;opacity: .7;position: fixed;top:0;left:0;z-index: 999;}
  .twoBtn{width: 300px;border-radius: 5px; background-color: #fff; position: fixed;top: 50%;left: 50%;transform:translate(-50%,-50%);z-index: 1001;}
  .twoBtn .goHome{display: block; width: 180px;height: 50px;text-align: center;color: #fff;background-color: #E1463B;border: none;border-radius: 5px;margin: 30px auto;}
  .twoBtn .goLogin{display: block; width: 180px;height: 50px;text-align: center;color: #fff;background-color: #E1463B;border: none;border-radius: 5px;margin: 30px auto;}
</style>
