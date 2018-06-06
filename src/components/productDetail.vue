<template>
  <!--产品详情-->
  <div class="productDetail">
    <headBar title="订单详情"></headBar>
    <!--banner图-->
    <div class="bannerBox">
      <van-swipe class="bannerImgBox" :autoplay="6000" vertical >
        <van-swipe-item v-for="(item, index) in detail.image_info" :key="index">
          <img  :src="'http://tianyi.zhongkakeji.com/media/' + item.image" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="detailInfo">
      <h2 class="title">{{detail.title}}</h2>
      <p class="detailDesc">{{detail.descp}}</p>
      <p class="price">￥{{detail.price}}</p>
    </div>
    <div class="selectPro">
      <span class="chooseWord">已选</span>
      <span class="selctInfo">还没有选择商品详细的类型</span>
      <router-link to="/productDetailScreen"><img src="/static/img/goforward.png" alt="" class="goChoose"></router-link>
    </div>
    <div class="proDdescripton">
      <p><span :class="{'active': isActive}">概 述</span></p>
      <p><span>参数</span></p>
    </div>
    <div class="footerBtn" @click="handleBuy">
      <van-row>
        <van-col span="12">
          <van-button bottom-action>立刻购买</van-button>
        </van-col>
      </van-row>
    </div>
    <!--加载-->
    <van-loading v-if="LoadingOk" type="spinner" color="black" class="loadPosition" />
    <!--点击购买，如果没有选择商品则提示选择商品-->
  </div>
</template>

<script>
  import headBar from './headBar'
  import { productDetail } from 'api/product'

  export default {
    name: 'productDetail',
    components:{
      headBar
    },
    data () {
      return {
        sildeList: [],
        LoadingOk: true,
        isActive: true,
        detail:{},
        loginBoxShow:false
      }
    },
    created () {
      this.fetchSlideList()
    },
    mounted(){
      this.getDetail()
    },
    methods: {
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
        this.$toast('没有选择商品详细的类型');
        //如果选择了商品就跳到orderInfo界面

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navBar{height: 50px;line-height: 50px;background:rgba(247,247,247,1);}
  .goBack{display: block; width: 8px;height: 14px;padding: 4px;position: absolute;top: 16px;left: 20px;}
  .navName{font-size: 18px;color:rgba(0,0,0,1);text-align: center;height: 50px;line-height1: 50px;}

  .bannerBox{width:100%; height: 210px;margin: 0 auto;}
  .bannerImgBox{display: block;width:100%; height: 210px;}
  .bannerImgBox img{width:100%;height: 210px;}

  .detailInfo{padding: 10px;border-bottom:1px solid rgba(240,240,240,1);}
  .title{color:rgba(0,0,0,1);font-size: 18px;line-height:26px;}
  .detailDesc{color:rgba(155,155,155,1);font-size: 14px;line-height:22px;}
  .price{color:rgba(245,4,34,1);font-size: 20px;}

  .selectPro{height: 44px;line-height: 44px;border-bottom: 10px solid rgba(247,247,247,1);}
  .chooseWord{display: inline-block;color: #787878;float: left;margin: 0 10px}
  .selctInfo{display: inline-block;width: 280px;color:rgba(0,0,0,1);font-size: 15px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
  .goChoose{display: inline-block;float: right;width: 8px;height: 14px;padding:14px 12px;}

  .proDdescripton{border-bottom: 1px solid #e5e5e5;height: 38px;line-height: 38px;}
  .proDdescripton p{display: inline-block; font-size:14px;color:rgba(0,0,0,1);width: 50%;float: left;text-align: center;}
  .proDdescripton span.active{border-bottom: 2px solid rgba(225,70,59,1);padding:0 10px 10px;}

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
