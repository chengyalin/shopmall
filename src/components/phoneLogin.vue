<template>
  <div class="phoneLogin">
    <div class="loginBox">
      <div class="mask"></div>
      <div class="loginMain">
        <div class="loginBar">
          <!--<img src="/static/img/goBack.png" alt="" class="goBackIcon">-->
          <p class="navName">{{title}}</p>
          <img src="/static/img/close.png" alt="" class="close" @click="loginBoxHide">
        </div>
        <!--输入手机号-->
        <div class="loginWrite" v-show="WritephoneNumShow">
          <input type="text" class="telNum" placeholder="输入手机号" v-model="phoneNum">
        </div>
        <!--输入验证码-->
        <div class="loginWrite" v-show="WriteSendWordShow">
          <p class="sendWord">发送验证码至{{phoneNum}}</p>
          <input type="text" class="verification" placeholder="输入验证码" v-model="verifyNum">
          <button class="sendBtn" @click="send">
            <span  class="send" v-if="!sendMsgDisabled && !reGet">发送验证码</span>
            <span  class="reGet" v-if="!sendMsgDisabled && reGet">重新获取</span>
            <span class="countdown" v-if="sendMsgDisabled">{{rTime+'s'}}</span>
          </button>
        </div>
        <button class="loginBtn" @click="sureBtn">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { sendCode, login } from 'api/login'
  export default {
    name: 'phoneLogin',
    data() {
      return {
        title: '输入手机号',
        WritephoneNumShow: true,
        WriteSendWordShow: false,
        phoneNum: '', //手机号
        verifyNum: '', //验证码
        errorHintShow: false,
        reGet: false, // 重新获取
        rTime: 60, // 发送验证码倒计时
        sendMsgDisabled: false, // 发送验证码按钮状态

        isLogin: false,
      }
    },
    methods: {
      //手机号码发送倒计时
      send() {
        let that = this;
        let options = {
          phone: that.phoneNum
        }
        sendCode(options).then(res => {
          if(res.data.ok) {
            this.$toast("获取成功");
            this.isLogin = true;
            that.sendMsgDisabled = true;
            let rTime = that.rTime;
            // 倒计时
            let interval = window.setInterval(() => {
              if(--that.rTime <= 0) {
                that.rTime = rTime
                that.sendMsgDisabled = false
                that.reGet = true // 重新获取按钮
                window.clearInterval(interval)
              }
            }, 1000)
          }
        })

      },
      loginBoxHide() {
        this.$emit('close',false)

      },
      sureBtn() {
        let phoneNum = this.phoneNum //手机号
        let verifyNum = this.verifyNum //验证码
        let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/; //手机号正则验证
        if(!this.isLogin) {
          if(!phoneNum) { //未输入手机号
            this.$toast("请输入手机号码")
            return
          }
          if(!reg.test(phoneNum)) { //手机号不合法
            this.$toast("手机号码不合法，请重新输入")
          }
          if(reg.test(phoneNum)) { //手机号码正确则出现验证码弹出框
            this.WritephoneNumShow = false //手机号码框隐藏
            this.WriteSendWordShow = true //验证码弹出框显示
            this.title = '获取验证码'
          }
        } else {
          if(verifyNum === '') {
            this.$toast("请输入验证码")
            return;
          }
          let options = {
            phone: phoneNum,
            code: verifyNum
          }
          login(options).then(res => {
            if(res.data.ok) {
              this.$toast("登录成功")
              // localStorage.setItem("user_id", res.data.data.user_id);
              // localStorage.setItem("phone", res.data.data.phone);
              localStorage.setItem("userInfo", JSON.stringify(res.data.data));
              this.$emit('login',false);
//							this.$router.push({
//								path: "/indexPage"
//							});
            }
          })
        }

      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginBox{}
.loginBox .mask{width: 100%;height: 100%;background-color: #000;opacity: .7;position: fixed;top:0;left:0;z-index: 1000;}
.loginMain{width: 300px;border-radius: 5px; background-color: #fff; position: fixed;top: 50%;left: 50%;transform:translate(-50%,-50%);z-index: 1001;}
.loginBar{}
.goBackIcon{display: block; width: 8px;height: 14px;padding: 4px;position: absolute;top: 16px;left: 20px;}
.navName{font-size: 18px;color:rgba(0,0,0,1);text-align: center;height: 50px;line-height: 50px;}
.close{display: block; width: 14px;height: 14px;padding: 4px;position: absolute;top: 16px;right: 20px;}
.loginWrite{padding: 5px 20px 70px;}
.telNum{display: block;border: none; border-bottom:1px solid rgba(240,240,240,1);width: 240px;padding: 10px;}

.loginBtn{border: none;width: 300px;border-radius:0 0 5px 5px; height: 50px;color: #fff; background:rgba(225,70,59,1);position: absolute;left: 0;bottom: 0;}

.sendWord{color: #797979;text-align: center;margin: 0 auto 10px;}
.verification{display: inline-block;border: none; border-bottom:1px solid rgba(240,240,240,1);width: 150px;padding: 10px;}

.sendBtn{border: none;background-color: #fff;float: right;}
.send{display: inline-block; border:1px solid rgba(225,70,59,1);font-size: 14px;color: #E1463B;padding: 5px 8px;background-color: #fff;margin-top: 10px;}
.reGet{display: inline-block; border:1px solid rgba(225,70,59,1);font-size: 14px;color: #E1463B;padding: 5px 8px;background-color: #fff;margin-top: 10px;}
.countdown{display: inline-block; float: right;margin-right: 27px;text-align: center;margin-top: 14px;}

</style>
