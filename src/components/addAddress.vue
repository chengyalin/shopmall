<template>
    <!--添加地址页-->
    <div class="addAdress">
      <div class="navBar"><img src="/static/img/goBack.png" alt="" class="goBack"> <p class="navName">添加地址</p></div>

      <div class="van-cell van-hairline van-field">
        <div class="van-cell__title"><span>收货人</span></div>
        <div class="van-cell__value"><input type="text" maxlength="15" placeholder="名字" class="van-field__control"></div>
      </div>
      <div class="van-cell van-hairline van-field">
        <div class="van-cell__title"><span>联系电话</span></div>
        <div class="van-cell__value"><input type="tel" placeholder="手机或固定电话" class="van-field__control"></div>
      </div>
      <div class="van-cell van-hairline van-field van-field--has-icon">
        <div class="van-cell__title"><span>详细地址</span></div>
        <div class="van-cell__value">
          <textarea placeholder="请输入详细地址信息，如道路 门牌号小区号" maxlength="200" rows="2" class="van-field__control" style="height: 48px;"></textarea>
          <div class="van-field__icon"><div>
          </div>
          </div>
        </div>
      </div>
      <div class="footerBtn">
        <van-row>
          <van-col span="12">
            <van-button bottom-action>保存</van-button>
          </van-col>
        </van-row>
      </div>
    </div>
</template>

<script>
export default {
  name: 'addAdress',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar{height: 50px;line-height: 50px;background:rgba(247,247,247,1);}
.goBack{display: block; width: 8px;height: 14px;padding: 4px;position: absolute;top: 16px;left: 20px;}
.navName{font-size: 18px;color:rgba(0,0,0,1);text-align: center;height: 50px;line-height: 50px;}


.footerBtn{width: 100%; position: fixed;bottom: 0;left: 0;}
.footerBtn .van-button--bottom-action{background-color: rgba(225,70,59,1);}
</style>
