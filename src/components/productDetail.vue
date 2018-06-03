<template>
  <!--产品详情-->
  <div class="productDetail">
    <div class="detailBanner">
      <van-swipe :autoplay="3000" vertical>
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
