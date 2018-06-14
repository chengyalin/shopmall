<template>
    <!--添加地址页-->
    <div class="addAdress">
      <div class="headBar">
        <div class="navBar"><p class="navName">添加地址</p></div>
      </div>
      <div class="van-cell van-hairline van-field">
        <div class="van-cell__title"><span>收货人</span></div>
        <div class="van-cell__value"><input type="text" maxlength="15" placeholder="名字" class="van-field__control" v-model="receiver"></div>
      </div>
      <div class="van-cell van-hairline van-field">
        <div class="van-cell__title"><span>联系电话</span></div>
        <div class="van-cell__value"><input type="tel" placeholder="手机或固定电话" class="van-field__control" v-model="reciverPhone"></div>
      </div>
      <div class="van-cell van-hairline van-field van-field--has-icon">
        <div class="van-cell__title"><span>详细地址</span></div>
        <div class="van-cell__value">
          <textarea placeholder="请输入详细地址信息，如道路 门牌号小区号" maxlength="200" rows="2" class="van-field__control" style="height: 48px;" v-model="reciverAddress"></textarea>
          <div class="van-field__icon"><div>
          </div>
          </div>
        </div>
      </div>
      <!--<div class="valuezhi">
        {{reciver}} <br>
        {{reciverPhone}}<br>
        {{reciverAddress}}<br>
      </div>-->
      <div class="footerBtn" @click="saveBtn">
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
import { UserId } from 'common/js/common'
import { creatAddress } from 'api/address'
import {UserInfo} from "../common/js/common";
export default {
  //name: 'addAdress',
  components: {
    headBar
  },
  data () {
    return {
      receiver: '',
      reciverPhone: '',
      reciverAddress: '',
      userInfo:'',
      data:{}
    }
  },
  mounted(){
    this.userInfo = UserInfo();
  },
  methods: {
    saveBtn () {
      if(this.receiver === ''){
        this.$toast('请填写收货人');
        return;
      }
      if(this.reciverPhone === ''){
        this.$toast('请填写电话号码');
        return;
      }
      if(this.reciverAddress === ''){
        this.$toast('请填写详细地址');
        return;
      }
      this.getAddress();
    },
    getAddress(){
      let options = {
        user_id: this.userInfo.user_id,
        receiver:this.receiver,
        address:this.reciverAddress,
        re_phone:this.reciverPhone
      }
      creatAddress(options).then(res =>{
        console.log(res);
        if(res.data.ok){
          this.$toast('添加地址成功');
          /*this.$router.push({
            name: `orderInfo`,
            params: this.data
          })*/
          this.$emit('addAdress',res.data.data);
        }
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .headBar{height: 50px;line-height: 50px;width: 100%;}
  .navBar{height: 50px;line-height: 50px;width: 100%;background:rgba(247,247,247,1);position: fixed;top:0;left: 0;z-index: 10;}
  .goBack{display: block; width: 8px;height: 14px;padding: 4px;position: absolute;top: 16px;left: 20px;}
  .navName{font-size: 18px;color:rgba(0,0,0,1);text-align: center;height: 50px;line-height: 50px;}

.footerBtn{width: 100%; position: fixed;bottom: 0;left: 0;}

</style>
