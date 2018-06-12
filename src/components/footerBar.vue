<template>
  <!--添加地址页-->
  <div class="footerBar">
    <div class="footerNav">
      <router-link to="/indexPage" class="navTab">
        <i class="footerIconOne"></i>
        <p>首页</p>
      </router-link>
      <router-link to="screening" class="navTab">
        <i class="footerIconTwo"></i>
        <p>筛选</p>
      </router-link>
      <router-link to="selfOrder" class="navTab">
        <i class="footerIconThree"></i>
        <p>个人</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footerBar',
    data() {
      return {

    }
  },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footerNav {position: fixed;width: 100%;height: 50px;background-color: #fff;left: 0;bottom: 0;z-index: 999;border-top:1px solid #FFEFEF;}
  .navTab{width: 33.33%;float: left;text-align: center;}
  .navTab .footerIconOne{display: block;margin:6px auto;width: 21px; height: 18px;background: url("/static/img/navhomeGray.png") no-repeat;background-size: cover;}
  .navTab .footerIconTwo{display: block;margin:6px auto;width: 18px; height: 18px;background: url("/static/img/navslectGray.png") no-repeat;background-size: cover;}
  .navTab .footerIconThree{display: block;margin:6px auto;width: 18px; height: 18px;background: url("/static/img/navselfGray.png") no-repeat;background-size: cover;}
  .navTab p{font-size: 14px;color: #999;}
  .router-link-active p{color: red;}
  .router-link-active .footerIconOne{display: block;margin:6px auto;width: 21px; height: 18px;background: url("/static/img/navhome.png") no-repeat;background-size: cover;}
  .router-link-active .footerIconTwo{display: block;margin:6px auto;width: 18px; height: 18px;background: url("/static/img/navslect.png") no-repeat;background-size: cover;}
  .router-link-active .footerIconThree{display: block;margin:6px auto;width: 18px; height: 18px;background: url("/static/img/navself.png") no-repeat;background-size: cover;}
</style>
