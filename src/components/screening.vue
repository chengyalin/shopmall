<template>
  <!--刷选-->
  <div class="screening">
    <headBar title="智能家居"></headBar>
    <div class="leftBar">
      <p @click="leftTabBarChange(item,index)" class="nameNav" :class="{'active':isActive === index}" v-for="(item,index) in productArray">
        <span v-if="index===0">新品</span>
        <span v-else>{{item.title}}</span>
      </p>
    </div>
    <div class="rightBox">
      <div class="proMain" v-for="(item,index) in productArray" v-show="isActive===index">
        <h2 class="name">
          <span v-if="index===0">新品</span>
          <span v-else>{{item.title}}</span>
        </h2>
        <div class="proList" v-if="index===0">
          <router-link tag="div" class="proBox" :to="{path:'/productDetail',query: {productId: info.product_id}}" v-for="(info,index) in item" :key="index">
            <img :src="'http://tianyi.zhongkakeji.com/media/' + info.image" alt="" class="proImg">
            <p class="title">{{info.title}}</p>
          </router-link>
          <!--					<p v-show="productArray.length === 0">暂无数据...</p>-->
        </div>
        <div class="proList" v-else>
          <router-link tag="div" class="proBox" :to="{path:'/productDetail',query: {productId: info.product_id}}" v-for="(info,index) in item.product_list" :key="index">
            <img :src="'http://tianyi.zhongkakeji.com/media/' + info.image" alt="" class="proImg">
            <p class="title">{{info.title}}</p>
          </router-link>
          <p v-show="item.product_list.length === 0">暂无数据...</p>
        </div>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
  import headBar from './headBar'
  import footerBar from './footerBar'
  import { productList } from 'api/product'
  import { productListOther } from 'api/product'
  export default {
    name: 'screening',
    components: {
      headBar,
      footerBar
    },
    data() {
      return {
        leftTabBar: [],
        isActive: 0,
        productArray: [],
        letTitle: '',
      }
    },
    mounted() {
      this.getProductList();

    },
    methods: {
      leftTabBarChange(item, index) {
        this.letTitle = item;
        this.isActive = index;
      },
      getProductList() {
        productList().then(res => {
          if(res.data.ok) {
            this.productArray.push(res.data.data);
            this.getProductListOther();
          }
        })
      },
      getProductListOther() {
        productListOther().then(res => { //其他分类另外一个接口
          if(res.data.ok) {
            res.data.data.map(item => {
              this.productArray.push(item);
            })
            console.log(this.productArray)
          }
        })
      },
    }
  }
</script>
<style scoped>
  .leftBar {
    height: calc(100vh - 100px);
    width: 75px;
    position: fixed;
    top: 50px;
    left: 0;
    border-right: 1px solid rgba(247, 247, 247, 1);
  }

  .nameNav {
    width: 75px;
    height: 20px;
    line-height: 20px;
    margin: 30px auto;
    text-align: center;
  }

  .nameNav.active {
    border-left: 4px solid rgba(225, 70, 59, 1);
    width: 71px;
  }

  .nameNav.active span {
    color: rgba(0, 0, 0, 1);
  }

  .nameNav span {
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .rightBox {
    padding-left: 86px;
    height: auto;
    overflow: hidden;
    padding-bottom: 50px;
  }

  .proList {}

  .proMain {
    text-align: center;
    margin-bottom: 20px;
    clear: both;
    margin: 20px 0;
    height: 40px;
    line-height: 40px;
  }

  .proMain span {
    border-bottom: 2px solid rgba(225, 70, 59, 1);
    padding-bottom: 4px;
  }

  .proBox {
    width: 0.91rem;
    float: left;
    margin: 6px 0;
  }

  .proImg {
    display: block;
    width: 0.80rem;
    height: 0.8rem;
    margin: 0 auto 4px;
  }

  .title {
    font-size: 12px;
    color: rgba(110, 110, 110, 1);
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 30px;
    line-height: 30px;
  }
</style>
