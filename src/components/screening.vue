<template>
  <!--刷选-->
  <div class="screening">
    <div class="leftBar">
      <p class="nameNav active"><span>新品</span></p>
      <p class="nameNav"><span>新品</span></p>
      <p class="nameNav"><span>新品</span></p>
      <p class="nameNav"><span>新品</span></p>
    </div>
    <div class="rightBox">
      <div class="proMain">
        <h2 class="name"><span>sssss</span></h2>
        <div class="proList">
          <div class="proBox">
            <img src="../assets/logo.png" alt="" class="proImg">
            <p class="title">智能锁 E1</p>
          </div>
          <div class="proBox">
            <img src="../assets/logo.png" alt="" class="proImg">
            <p class="title">智能锁 E1</p>
          </div>
          <div class="proBox">
            <img src="../assets/logo.png" alt="" class="proImg">
            <p class="title">智能锁 E1</p>
          </div>
          <div class="proBox">
            <img src="../assets/logo.png" alt="" class="proImg">
            <p class="title">智能锁 E1</p>
          </div>
        </div>
      </div>
      <div class="proMain">
        <h2 class="name"><span>sssss</span></h2>
        <div class="proList">
          <div class="proBox">
            <img src="../assets/logo.png" alt="" class="proImg">
            <p class="title">智能锁 E1</p>
          </div>
          <div class="proBox">
            <img src="../assets/logo.png" alt="" class="proImg">
            <p class="title">智能锁 E1</p>
          </div>
          <div class="proBox">
            <img src="../assets/logo.png" alt="" class="proImg">
            <p class="title">智能锁 E1</p>
          </div>
          <div class="proBox">
            <img src="../assets/logo.png" alt="" class="proImg">
            <p class="title">智能锁 E1</p>
          </div>
        </div>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
import footerBar from './footerBar'
export default {
  name: 'screening',
  components: {
    footerBar
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.leftBar{height:calc(100vh - 50px); width: 75px;position: fixed;top:0;left: 0;border-right: 1px solid rgba(247,247,247,1);}
  .nameNav{width: 75px;height: 20px;line-height: 20px;margin: 20px auto;text-align: center;}
  .nameNav.active{border-left: 4px solid rgba(225,70,59,1);width: 71px;}
  .nameNav.active span{color:rgba(0,0,0,1);}
  .nameNav span{font-size: 16px;color:rgba(0,0,0,1);}

.rightBox{padding-left: 86px;height: auto;overflow: hidden;padding-bottom: 50px;}
.proList{}
  .proMain{text-align: center;margin-bottom: 20px;clear: both;margin: 20px 0;height: 40px;line-height: 40px;}
  .proMain span{border-bottom: 2px solid rgba(225,70,59,1);padding-bottom: 4px;}

.proBox{width: 96px;float: left;margin: 6px 0;}
  .proImg{display: block;width: 80px;height: 80px;margin: 0 auto 4px;}
  .title{font-size: 12px;color:rgba(110,110,110,1);text-align: center;}
</style>
