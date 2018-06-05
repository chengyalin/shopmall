<template>
    <!--添加地址页-->
    <div class="footerBar">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="shop" @click="indexPageGo">
          <span>首页</span>
          <template slot="icon" slot-scope="props">
            <img :src="props.active ? icon.active : icon.normal" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="chat" @click="invoiceGo">筛选</van-tabbar-item>
        <van-tabbar-item icon="records" @click="selfOrderGo">个人</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
export default {
  name: 'footerBar',
  data () {
    return {
      active: 0,
      icon: {
        normal: '/static/img/navselfGray.png',
        active: '/static/img/navself.png'
      }
    }
  },
  methods: {
    indexPageGo () {
      this.router.push({
        name: 'indexPage'
      })
    },
    invoiceGo () {
      this.$router.push({
        name: 'screening'
      })
    },
    selfOrderGo () {
      this.$router.push({
        name: 'selfOrder'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footerBar{position: fixed;width: 100%;height: 50px;background-color: #fff;left: 0;bottom: 0;z-index: 999;}
</style>
