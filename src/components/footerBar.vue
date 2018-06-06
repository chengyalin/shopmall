<template>
  <!--添加地址页-->
  <div class="footerBar">
    <van-tabbar v-model="active" >
      <van-tabbar-item icon="shop" to="/">
        <span>首页</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.activeIndex : icon.normalIndex" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="chat" to="screening">
        <span>筛选</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.activeScreen : icon.normalScreen" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="records" to="selfOrder">
        <span>个人</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.activeSelfOrder : icon.normalSelfOrder" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'footerBar',
    data() {
      return {
        active: 0,
        icon: {
          normalIndex: '/static/img/navhomeGray.png',
          activeIndex: '/static/img/navhome.png',

          activeScreen: '/static/img/navslect.png',
          normalScreen: '/static/img/navslectGray.png',

          activeSelfOrder:'/static/img/navself.png',
          normalSelfOrder:'/static/img/navselfGray.png',


        }
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footerBar {
    position: fixed;
    width: 100%;
    height: 50px;
    background-color: #fff;
    left: 0;
    bottom: 0;
    z-index: 999;
  }
</style>
