<template>
  <!--首页-->
  <div class="indexPage">
    <!--banner图-->
    <div class="bannerBox">
      <van-swipe class="bannerImgBox" :autoplay="6000">
        <van-swipe-item v-for="(item, index) in sildeList" :key="index">
          <img :src="item.img" alt="">
          <p>{{item.title}}</p>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--产品列表-->
    <div class="shopList">
      <a href="" class="proList" v-for="(product, index) in productList" :key="index">
        <img :src="product.makret_big_image" alt="" >
        <p>{{product.descp}}</p>
      </a>
    </div>
    <van-loading v-if="LoadingOk" type="spinner" color="black" />
  </div>
</template>

<script>
export default {
  name: 'indexPage',
  data () {
    return {
      sildeList: [],
      LoadingOk:true,
      productList:[]
    }
  },
  created () {
    this.fetchSlideList()
    this.productList()
  },
  methods: {
    //banner图填数据
    fetchSlideList () {
      const STATIC_URL = 'http://www.zhongkakeji.com/'
      this.$http.get(STATIC_URL + '/ad/ad/list/', {
        params: {
          is_terminal: 'False'
        }
      }).then(({data}) => {
        if (data.ok) {
          this.sildeList = data.data.map(i => {
            return {
              img: (STATIC_URL + i.image),
              title: i.title
            }
          }).sort((a, b) => a.order > b.order)
          this.LoadingOk = false
        }
      })
    },
    productList () {
      const STATIC_URL = 'http://www.zhongkakeji.com/'
      this.$http.get(STATIC_URL + '/product/market/product/list/').then(({data}) => {
        if (data.ok) {
          this.productList = data.data.map(i => {
            return {
              makret_big_image: (STATIC_URL + i.makret_big_image),
              descp: i.descp
            }
          }).sort((a, b) => a.order > b.order)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bannerImgBox{display: block;margin: 0 auto; height: 180px;}
.bannerImgBox img{width: 100%;height: 180px;}
.bannerImgBox p{position: absolute;left: 0;bottom: 0;z-index: 999;}

.proList{display: block;float: left; width: 160px;height: 200px;margin: 10px;}
.proList img{display: block;width: 160px;height: 200px;}
.proList p{font-size: 14px;color: red;text-align: center;}

</style>
