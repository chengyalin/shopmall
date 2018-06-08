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
    <div class="selectPro" @click="goGood">
      <span class="chooseWord">已选</span>
      <span class="selctInfo">还没有选择商品详细的类型</span>
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
    <div class="footerBtn" @click="handleBuy">
      <van-row>
        <van-col span="24">
          <van-button bottom-action>立刻购买</van-button>
        </van-col>
      </van-row>
    </div>
    <!--加载-->
    <!--商品选择-->
    <van-popup v-model="goodShow" position="right" :overlay="false" class="goods-box">
      <product-detail-screen :data="detail"></product-detail-screen>
    </van-popup>
    <van-loading v-if="LoadingOk" type="spinner" color="black" class="loadPosition" />
    <!--点击购买，如果没有选择商品则提示选择商品-->
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
      }
    },
    created () {

    },
    mounted () {
      this.getDetail()
    },
    methods: {
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
        this.$toast('没有选择商品详细的类型');
        //如果选择了商品就跳到orderInfo界面

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

  .introPro{max-width: 100%;display: block;}

  .footerBtn{width: 100%; position: fixed;bottom: 0;left: 0;}
  .loadPosition{position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);}
  .goods-box{width: 100%;height: 100%;}
</style>
