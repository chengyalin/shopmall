<template>
    <!--添加发票-->
    <div class="invoice">
      <div class="navBar"><img src="/static/img/goBack.png" alt="" class="goBack"> <p class="navName">开具发票</p></div>

      <div class="radioSlect">
        <van-radio-group v-model="radio">
          <van-radio class="radioStyle" name="1">不需要发票</van-radio>
          <van-radio class="radioStyle" name="2">需要发票</van-radio>
        </van-radio-group>
      </div>

      <div class="comapnyAndSelf">
          <p><span :class="{'active': isActive}" @click="handleCompany">企业发票</span></p>
          <p><span :class="{'active': isActive}" @click="handleSelf">个人发票</span></p>
      </div>
      <!--企业发票-->
      <div class="componyInvoice">
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>输入抬头</span></div>
          <div class="van-cell__value"><input type="text" maxlength="15" placeholder="填写准确的纳税人识别号" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>税号</span></div>
          <div class="van-cell__value"><input type="tel" placeholder="输入纳税人识别号" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>单位位置</span></div>
          <div class="van-cell__value"><input type="tel" placeholder="填写准确的单位位置" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>开户银行</span></div>
          <div class="van-cell__value"><input type="tel" placeholder="收票单位开户银行" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>银行账号</span></div>
          <div class="van-cell__value"><input type="tel" placeholder="收票单位银行账户" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
        </div>
      </div>
      <!--个人发票-->
      <div class="selfInvoice">
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>电话号码</span></div>
          <div class="van-cell__value"><input type="text" maxlength="15" placeholder="输入电话号码" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>邮箱</span></div>
          <div class="van-cell__value"><input type="tel" placeholder="收票人电子邮箱" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
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
  name: 'invoice',
  data () {
    return {
      radio: '1',
      isActive: true
    }
  },
  methods: {
    handleCompany () {
      this.isActive = false
    },
    handleSelf () {
      this.isActive = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar{height: 50px;line-height: 50px;background:rgba(247,247,247,1);}
.goBack{display: block; width: 8px;height: 14px;padding: 4px;position: absolute;top: 16px;left: 20px;}
.navName{font-size: 18px;color:rgba(0,0,0,1);text-align: center;height: 50px;line-height: 50px;}

.comapnyAndSelf{border-bottom: 1px solid #e5e5e5;height: 38px;line-height: 38px;}
.comapnyAndSelf p{display: inline-block; font-size:14px;color:rgba(0,0,0,1);width: 50%;float: left;text-align: center;}
.comapnyAndSelf span.active{border-bottom: 2px solid rgba(225,70,59,1);padding:0 10px 10px;}

.radioSlect{padding: 5px 10px;}
.radioStyle{line-height: 20px;padding: 10px 0;}

.footerBtn{width: 100%; position: fixed;bottom: 0;left: 0;}
</style>
