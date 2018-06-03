<template>
  <!--产品详情-->
  <div class="productDetail">
    <div class="navBar"><img src="/static/img/goBack.png" alt="" class="goBack"> <p class="navName">订单详情</p></div>
    <!--banner图-->
    <div class="bannerBox">
      <van-swipe class="bannerImgBox" :autoplay="6000" vertical >
        <van-swipe-item v-for="(item, index) in sildeList" :key="index">
          <img :src="item.img" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="detailInfo">
      <h2 class="title">优点智能锁 E1</h2>
      <p class="detailDesc">指纹认证，更添智能手机联动服务的安全、便利的高端产品</p>
      <p class="price">￥2699</p>
    </div>
    <!--加载-->
    <van-loading v-if="LoadingOk" type="spinner" color="black" class="loadPosition" />
  </div>
</template>

<script>
export default {
  name: 'productDetail',
  data () {
    return {
      sildeList: [],
      LoadingOk: true
    }
  },
  created () {
    this.fetchSlideList()
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
              img: (STATIC_URL + i.image)
            }
          }).sort((a, b) => a.order > b.order)
          this.LoadingOk = false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar{height: 50px;line-height: 50px;background:rgba(247,247,247,1);}
.goBack{display: block; width: 8px;height: 14px;padding: 4px;position: absolute;top: 16px;left: 20px;}
.navName{font-size: 18px;color:rgba(0,0,0,1);text-align: center;height: 50px;line-height: 50px;}

.bannerBox{width:100%; height: 210px;margin: 0 auto;}
.bannerImgBox{display: block;width:100%; height: 210px;}
.bannerImgBox img{width:100%;height: 210px;}

bannerBox .van-swipe__indicators--vertical{right: 10px;}
bannerBox .van-swipe__indicators{right: 50%;}

.detailInfo{padding: 10px;border-bottom:1px solid rgba(240,240,240,1);}
  .title{color:rgba(0,0,0,1);font-size: 18px;line-height:26px;}
  .detailDesc{color:rgba(155,155,155,1);font-size: 14px;line-height:22px;}
  .price{color:rgba(245,4,34,1);font-size: 20px;}
</style>
