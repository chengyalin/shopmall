<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
  <div class="footerNavBar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">
        <span>自定义</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.active : icon.normal" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="chat">标签</van-tabbar-item>
      <van-tabbar-item icon="records">标签</van-tabbar-item>
    </van-tabbar>
  </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0,
      icon: {
        normal: '/static/img/navselfGray.png',
        active: '/static/img/navself.png'
      }
    }
  }
}
</script>

<style>
  *{margin: 0;padding: 0;}
  .footerNavBar{position: fixed;width: 100%;height: 50px;background-color: #fff;left: 0;bottom: 0;z-index: 999;}

</style>
