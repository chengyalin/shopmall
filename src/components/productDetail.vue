<template>
  <!--产品详情-->
  <div class="productDetail">
    <headBar title="订单详情"></headBar>
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
    <div class="selectPro">
      <span class="chooseWord">已选</span>
      <span class="selctInfo">选选选选选选选选选选选选选选选选选选选选选选选选选选选</span>
      <router-link to="/productDetailScreen"><img src="/static/img/goforward.png" alt="" class="goChoose"></router-link>
    </div>
    <div class="proDdescripton">
      <p><span :class="{'active': isActive}">概 述</span></p>
      <p><span :class="{'active': isActive}">参数</span></p>
    </div>
    <div class="footerBtn">
      <van-row>
        <van-col span="12">
          <van-button bottom-action>立刻购买</van-button>
        </van-col>
      </van-row>
    </div>
    <!--加载-->
    <van-loading v-if="LoadingOk" type="spinner" color="black" class="loadPosition" />
  </div>
</template>

<script>
import headBar from './headBar'
export default {
  name: 'productDetail',
  components: {
    headBar
  },
  data () {
    return {
      sildeList: [],
      LoadingOk: true,
      isActive: true
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


.footerBtn{width: 100%; position: fixed;bottom: 0;left: 0;}
.loadPosition{position: fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);}
</style>
