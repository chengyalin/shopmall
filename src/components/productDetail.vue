<template>
  <!--产品详情-->
  <div class="productDetail">
    <headBar title="商品详情"></headBar>
    <!--banner图-->
    <div class="bannerBox">
      <van-swipe class="bannerImgBox" :autoplay="6000" vertical >
        <van-swipe-item v-for="(item, index) in detail.image_info" :key="index">
          <img  :src="'http://tianyi.zhongkakeji.com/media/' + item.image" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="detailInfo">
      <h2 class="title">{{detail.title}}  <span class="preferential" @click="showMaskMain = true">优惠详情</span></h2>
      <p class="detailDesc">{{detail.descp}}</p>
      <p class="price">￥{{detail.price}}</p>
      <!--优惠详情弹框内容-->
      <van-popup v-model="showMaskMain" >
        <div class="showMainPopupBox">
          <h2>优惠说明：</h2>
          1、山东区域用户购买优点智能门锁E1，可在山东17地市免费享受1年的100M光纤宽带，同时赠送1年的联通高清电视；<br>
          2、山东区域用户购买优点智能门锁C1，可在山东17地市享受350元的宽带补贴，或享受300元话费补贴，该补贴不可兑换现金。<br>
          3、山东区域用户购买优点智能门锁C1N，可在山东17地市享受250元的宽带补贴，或享受200元话费补贴，该补贴不可兑换现金。
          <h2>特别提醒：</h2>
          1、办理宽带需收取用户终端设备押金100元（包括ONU设备、IPTV机顶盒等）；若办理拆机，用户需将租用的终端设备退回联通营业厅，同时办理押金退还手续。<br>
          2、下单前，请咨询联通客服10010，确认预装宽带小区的资源。<br>
          3、对于本优惠条款，有疑问，请咨询：13325136435;QQ:3314136281<br>
        </div>
      </van-popup>
    </div>
    <div class="selectPro" @click="goGood">
      <span class="chooseWord">规格</span>
      <span class="selctInfo">{{orderData.colorTitle}}{{orderData.netWorkTitle}}{{orderData.value}}{{orderData.totalPrice}}{{orderData.goodsNum}}</span>
      <img src="/static/img/goforward.png" alt="" class="goChoose">
    </div>
    <div class="proDdescripton">
      <p @click="tabChange(index)"  v-for="(item,index) in tabArray" :key="index"><span :class="{'active': isActive === index}">{{item}}</span></p>
    </div>
    <div class="proDdescriptonInfo">
      <!--概述-->
      <!--参数-->
      <div class="tabContent" v-show="isActive === 0"><img v-lazy="'http://tianyi.zhongkakeji.com/media/' + detail.detail_info" alt="" class="introPro"></div>
      <div class="tabContent" v-show="isActive === 1"><img v-lazy="'http://tianyi.zhongkakeji.com/media/' + detail.parameter_image"  alt="" class="introPro"></div>

    </div>
    <div class="footerBtn">
      <a href="tel:13325136435" class="telZX">
        <img src="/static/img/telicon.png" alt="">
        <p>电话咨询</p>
      </a>
      <!--<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3314136281&site=qq&menu=yes" class="qqZX"> pc网页唤起qq-->
      <a target="_blank" href="mqqwpa://im/chat?chat_type=wpa&uin=3314136281&version=1&src_type=web&web_src=oicqzone.com" class="qqZX">
        <img src="/static/img/qqicon.png" alt="">
        <p>QQ咨询</p>
      </a>
      <div class="footerR" @click="handleBuy">
        <van-row>
          <van-col span="24">
            <van-button bottom-action>立刻购买</van-button>
          </van-col>
        </van-row>
      </div>
    </div>
    <!--加载-->
    <!--商品选择-->
    <van-popup v-model="goodShow" position="right" :overlay="false" class="goods-box">
      <product-detail-screen :data="detail" @orderInfo="order"></product-detail-screen>
    </van-popup>
    <van-loading v-if="LoadingOk" type="spinner" color="black" class="loadPosition" />

  </div>
</template>

<script>
  import headBar from './headBar'
  import { productDetail } from 'api/product'
  import ProductDetailScreen from 'components/productDetailScreen'

  export default {
    name: 'productDetail',
    components:{
      headBar,
      ProductDetailScreen
    },
    data () {
      return {
        tabArray:['概 述','参数'],
        sildeList: [],
        LoadingOk: true,
        isActive: 0,
        detail:{},
        loginBoxShow:false,
        goodShow: false,

        orderData:{},
        showMaskMain: false //优惠详情
      }
    },
    created () {

    },
    mounted () {
      this.getDetail()
    },
    methods: {
      order (data) {
        console.log(data)
        this.goodShow = false;
        this.orderData = data[0];
      },
      goGood(){
        this.goodShow = true;
      },
      tabChange (index) {
        this.isActive = index

      },
      //从首页商品列表跳转的获取产品id
      getDetail(){
        let options = {
          product_id: this.$route.query.productId
        }
        productDetail(options).then(res =>{
          if(res.data.ok){
            this.detail = res.data.data
            this.LoadingOk = false
          }
        })
      },

      handleBuy () {
        //点击购买，如果没有选择商品则提示选择商品
        if(this.orderData.colorTitle === undefined){
          this.$toast('没有选择商品详细的类型');
          return;
        }
        //如果选择了商品就跳到orderInfo界面
        this.orderData.title = this.detail.title//将商品标题传到orderInfo
        this.orderData.price = this.detail.price//将商品单价传到orderInfo
        this.$router.push({
          name: `orderInfo`,
          params: this.orderData //路由传参
        })

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bannerBox{width:100%; height: 210px;margin: 0 auto;}
  .bannerImgBox{display: block;width:100%; height: 210px;}
  .bannerImgBox img{display: block; width:210px;height: 210px;margin: 0 auto;}

  .detailInfo{padding: 10px;border-bottom:1px solid rgba(240,240,240,1);}
  .title{color:rgba(0,0,0,1);font-size: 18px;line-height:26px;padding-right:0.8rem;}
  .detailDesc{color:rgba(155,155,155,1);font-size: 14px;line-height:22px;}
  .price{color:rgba(245,4,34,1);font-size: 20px;}
  .preferential{font-size: 16px;color: #666;font-weight: normal;position:absolute;right: 10px ;color: rgba(245,4,34,1);}

  .selectPro{height: 44px;line-height: 44px;border-bottom: 10px solid rgba(247,247,247,1);}
  .chooseWord{display: inline-block;color: #787878;float: left;margin: 0 10px}
  .selctInfo{display: inline-block;width: 2.80rem;color:rgba(0,0,0,1);font-size: 15px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
  .goChoose{display: inline-block;float: right;width: 8px;height: 14px;padding:14px 12px 14px 0;}

  .proDdescripton{border-bottom: 1px solid #e5e5e5;height: 38px;line-height: 38px;}
  .proDdescripton p{display: inline-block; font-size:14px;color:rgba(0,0,0,1);width: 50%;float: left;text-align: center;}
  .proDdescripton span.active{border-bottom: 2px solid rgba(225,70,59,1);padding:0 10px 10px;}

  .introPro{max-width: 100%;display: block;margin: 0 auto;}

  .footerBtn{width: 100%; position: fixed;bottom: 0;left: 0;background-color: #fff;}
  .telZX{width: 50px;height: 50px;float: left;text-align: center;padding-left: 10px;display: block;}
  .telZX img{display: block;width:18px;height: 18px;margin: 6px auto;}
  .telZX p{font-size: 0.12rem;color: #666;}
  .qqZX{width: 50px;height: 50px;float: left;text-align: center;padding-left: 10px;display: block;}
  .qqZX img{display: block;width:18px;height: 18px;margin: 6px auto;}
  .qqZX p{font-size: 0.12rem;color: #666;}
  .footerBtn .footerR{float: right;width: 60%;}


  .productDetail{padding-bottom: 50px;}

  .loadPosition{position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);}
  .goods-box{width: 100%;height: 100%;overflow: scroll;}

  .showMainPopupBox{padding: 0.2rem;
    width: 3rem;
    height: 5rem;
    overflow-y: scroll;
    font-size: 14px;line-height: 24px;
    color: #666;
  }
  .showMainPopupBox h2{
    font-size: 18px;color: #333;height: 30px;line-height: 30px;
  }
</style>
