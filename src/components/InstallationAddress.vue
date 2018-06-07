<template>
    <!--添加宽带安装地址-->
    <div class="InstallationAddress">
      <headBar title="填写宽带安装地址"></headBar>
      <div class="radioSlect">
        <van-radio-group v-model="radio">
          <van-radio class="radioStyle" name="1" @click="writeAddrShow">买锁免费赠送宽带</van-radio>
          <van-radio class="radioStyle" name="2" @click="writeAddrHide">不需要免费宽带</van-radio>
        </van-radio-group>
      </div>

      <div class="comapnyAndSelf" v-show="writeAddr">
          <p><span :class="{'active': isActive}" >填写宽带安装地址</span></p>
      </div>
      <!--企业发票-->
      <div class="componyInvoice" v-show="writeAddr">
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>用户姓名</span></div>
          <div class="van-cell__value"><input type="text" maxlength="15" placeholder="请输入用户姓名" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>预约电话</span></div>
          <div class="van-cell__value"><input type="tel" placeholder="预约电话" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>身份证号码</span></div>
          <div class="van-cell__value"><input type="tel" placeholder="身份证号码" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>预约时间</span></div>
          <div class="van-cell__value"><input type="tel" placeholder="预约安装时间" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>所在市</span></div>
          <div class="van-cell__value"><input type="tel" placeholder="所在市" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>所在区</span></div>
          <div class="van-cell__value"><input type="text" maxlength="15" placeholder="所在区" class="van-field__control"></div>
        </div>
        <div class="van-cell van-hairline van-field">
          <div class="van-cell__title"><span>详细地址</span></div>
          <div class="van-cell__value">
            <textarea placeholder="请输入详细地址信息，如道路 门牌号小区号" maxlength="200" rows="2" class="van-field__control" style="height: 48px;"></textarea>
            <div class="van-field__icon"><div>
            </div>
            </div>
          </div>
        </div>
        <div class="van-cell van-hairline van-field">
        </div>
      </div>
      <div class="footerBtn">
        <van-row>
          <van-col span="24">
            <van-button bottom-action>保存</van-button>
          </van-col>
        </van-row>
      </div>
    </div>
</template>

<script>
  import headBar from './headBar'
export default {
  name: 'InstallationAddress',
  components :{
    headBar
  },
  data () {
    return {
      radio: '1',
      isActive: true,
      writeAddr:true
    }
  },
  methods: {
    writeAddrHide () {
      this.writeAddr = false
    },
    writeAddrShow () {
      this.writeAddr = true

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comapnyAndSelf{border-bottom: 1px solid #e5e5e5;height: 38px;line-height: 38px;}
.comapnyAndSelf p{display: inline-block; font-size:14px;color:rgba(0,0,0,1);width: 100%;float: left;text-align: center;}
.comapnyAndSelf span.active{border-bottom: 2px solid rgba(225,70,59,1);padding:0 10px 10px;}

.radioSlect{padding: 5px 10px;}
.radioStyle{line-height: 20px;padding: 10px 0;}

.footerBtn{width: 100%; position: fixed;bottom: 0;left: 0;}
</style>
