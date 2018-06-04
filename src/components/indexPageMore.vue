<template>
  <!--首页-->
  <div class="indexPageList">
    <div class="navBar"><img src="/static/img/goBack.png" alt="" class="goBack"> <p class="navName">优点商城</p></div>
    <!--产品列表-->
    <div class="shopList">
      <div class="productPlate">
        <h2 class="title"><span class="name">明星产品</span></h2>
        <div class="proList">
          <a href="">
            <i>折扣产品</i>
            <img  src="../assets/logo.png" alt="">
            <p class="name">优点智能锁 E1</p>
            <p class="info">ZigBee联网锁，安全守候</p>
            <p class="price">￥2699</p>
          </a>
          <a href="">
            <i>折扣产品</i>
            <img  src="../assets/logo.png" alt="">
            <p class="name">优点智能锁 E1</p>
            <p class="info">ZigBee联网锁，安全守候</p>
            <p class="price">￥2699</p>
          </a>
          <a href="">
            <i>折扣产品</i>
            <img  src="../assets/logo.png" alt="">
            <p class="name">优点智能锁 E1</p>
            <p class="info">ZigBee联网锁，安全守候</p>
            <p class="price">￥2699</p>
          </a>
          <a href="">
            <i>折扣产品</i>
            <img  src="../assets/logo.png" alt="">
            <p class="name">优点智能锁 E1</p>
            <p class="info">ZigBee联网锁，安全守候</p>
            <p class="price">￥2699</p>
          </a>
          <a href="">
            <i>折扣产品</i>
            <img  src="../assets/logo.png" alt="">
            <p class="name">优点智能锁 E1</p>
            <p class="info">ZigBee联网锁，安全守候</p>
            <p class="price">￥2699</p>
          </a>
          <a href="">
            <i>折扣产品</i>
            <img  src="../assets/logo.png" alt="">
            <p class="name">优点智能锁 E1</p>
            <p class="info">ZigBee联网锁，安全守候</p>
            <p class="price">￥2699</p>
          </a>
        </div>
      </div>
    </div>
    <!--加载-->
    <van-loading v-if="LoadingOk" type="spinner" color="black" class="loadPosition" />
  </div>
</template>

<script>
export default {
  name: 'indexPageList',
  data () {
    return {
      LoadingOk: true
    }
  },
  created () {
    this.fetchSlideList()
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar{height: 50px;line-height: 50px;background:rgba(247,247,247,1);}
.goBack{display: block; width: 8px;height: 14px;padding: 4px;position: absolute;top: 16px;left: 20px;}
.navName{font-size: 18px;color:rgba(0,0,0,1);text-align: center;height: 50px;line-height: 50px;}

.shopList{width: 375px;overflow: hidden;}
.title{height: 20px;line-height: 20px; padding:15px 8px;}
  .name{font-size: 18px;color: #000;}

.proList{padding-left: 8px;width: 385px;overflow: hidden; }
.proList a{display: block;width: 174px;height: 234px;border: 1px solid #FFEFEFEF;overflow: hidden;position: relative;float: left;margin-right: 8px;margin-bottom: 10px;}
.proList i{display: block; position: absolute;top:1px;left: 1px;font-size: 10px;color: #fff;text-align: center;font-style: normal;
  width:70px;
  height:20px;
  background:linear-gradient(90deg,rgba(225,70,59,1),rgba(255,125,48,1));
  border-radius:2px;
}
.proList img{display:block;width: auto;max-height: 140px;margin: 0 auto;margin-bottom: 10px;}
.proList p{line-height: 24px;}
  .name{font-size: 15px;color: #000;}
  .info{font-size: 12px;color: rgba(155,155,155,1);;}
  .price{font-size: 15px;color: rgba(245,4,34,1);}

.loadPosition{position: fixed;top:48%;left: 48%;}
</style>
