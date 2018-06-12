<template>
  <!--首页-->
  <div class="indexPage">
    <!--banner图-->
    <div class="bannerBox">
      <van-swipe class="bannerImgBox" :autoplay="6000">
        <van-swipe-item v-for="(item, index) in sildeList" :key="index">
          <img :src="item.img" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--产品列表-->
    <div class="shopList">
      <div class="productPlate">
        <h2 class="title"><span class="name">明星产品</span><router-link class="showMore" to="/indexPageMore" >更多 ></router-link></h2>
        <div class="proList">
          <router-link tag="a" :to="{path:'/productDetail',query: {productId: item.product_id}}" v-for="(item,index) in productList" :key="index">
            <i>折扣产品</i>
            <img :src="'http://tianyi.zhongkakeji.com/media/' + item.image" alt="">
            <p class="name">{{item.title}}</p>
            <p class="info">{{item.pre_info}}</p>
            <p class="price">{{item.price}}</p>
          </router-link>
        </div>
      </div>
    </div>
    <footerBar></footerBar>
    <!--加载-->
    <van-loading v-if="LoadingOk" type="spinner" color="black" class="loadPosition" />
  </div>
</template>

<script>
  import footerBar from './footerBar'
  import { bannerList } from 'api/banner'
  import { productList } from 'api/product'

  export default {
    name: 'indexPage',
    components: {
      footerBar
    },
    data() {
      return {
        sildeList: [],
        productList: [],
        LoadingOk: true
      }
    },
    created() {},
    mounted() {
      this.fetchSlideList();
      this.getProductList();

    },
    methods: {
      //banner图填数据
      fetchSlideList() {
        let options = {
          is_terminal: 'False'
        }
        let STATIC_URL = 'http://tianyi.zhongkakeji.com/media/'
        bannerList(options).then(({data}) => {
          if(data.ok) {
            this.sildeList = data.data.map(i => {
              console.log(i.image)
              return {
                img: (STATIC_URL + i.image)
              }
            }).sort((a, b) => a.order > b.order)
            this.LoadingOk = false
          }
        })
      },
      getProductList() {
        productList().then(res => {
          console.log(res);
          if(res.data.ok) {
            this.productList = res.data.data;
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bannerBox {width: 3.60rem;height: 210px;margin: 0 auto;border-radius: 10px;}
  .bannerImgBox {display: block;width: 3.60rem;height: 210px;border-radius: 10px;}
  .bannerImgBox img {width: 3.60rem;height: 188px;border-radius: 10px;}

  .shopList {width: 3.75rem;overflow: hidden;margin:0  auto;}
  .title {height: 20px;line-height: 20px;padding: 15px 0.1rem;}
  .name {font-size: 18px;color: #000;}
  .showMore {display: inline-block;font-size: 14px;color: rgba(225, 70, 59, 1);float: right;}
  .proList {padding-left: 8px;width: 3.85rem;overflow: hidden;height: 486px;}
  .proList a {display: block;width: 1.64rem;height: 234px;border: 1px solid #FFEFEF;overflow: hidden;position: relative;float: left;margin-right: 8px;margin-bottom: 10px;padding: 0 5px;}
  .proList i {display: block;position: absolute;top: 1px;left: 1px;font-size: 10px;color: #fff;text-align: center;font-style: normal;width: 70px;padding:4px 6px;background: linear-gradient(90deg, rgba(225, 70, 59, 1), rgba(255, 125, 48, 1));border-radius: 2px;}
  .proList img {display: block;width: auto;max-height: 140px;margin: 0 auto;margin-bottom: 10px;}
  .proList p {line-height: 24px;}

  .name {font-size: 15px;color: #000;}
  .info {font-size: 12px;color: rgba(155, 155, 155, 1);height: 30px;line-height: 30px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
  .price {font-size: 15px;color: rgba(245, 4, 34, 1);}
  .indexPage {padding-bottom: 50px;}

  .loadPosition {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
