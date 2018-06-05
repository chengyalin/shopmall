<template>
    <div class="headBar">
      <div class="navBar"><img src="/static/img/goBack.png" alt="" class="goBack"><p class="navName">{{title}}</p></div>
    </div>
</template>

<script>
export default {
  name: 'footerBar',
  props:{
  	title:{
  		type:String,
  		defalut: ''
  	}
  },
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

</style>
