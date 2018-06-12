<template>
  <!--刷选-->
  <div class="screening">
    <headBar title="优点商城"></headBar>
    <div class="leftBar">
      <p @click="leftTabBarChange(item,index)" class="nameNav" :class="{'active':isActive === index}" v-for="(item,index) in leftTabBar"><span>{{item}}</span></p>
    </div>
    <div class="rightBox">
      <div class="proMain">
        <h2 class="name"><span>{{letTitle}}</span></h2>
        <div class="proList">
          <router-link tag="div" class="proBox" :to="{path:'/productDetail',query: {productId: item.product_id}}" v-for="(item,index) in productArray" :key="index">
            <img :src="'http://tianyi.zhongkakeji.com/media/' + item.image" alt="" class="proImg">
            <p class="title">{{item.title}}</p>
          </router-link>
          <p v-show="productArray.length === 0">暂无数据...</p>
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
  export default {
    name: 'screening',
    components: {
      headBar,
      footerBar
    },
    data() {
      return {
        leftTabBar: ['新品', '智能', '家居', '灯具'],
        isActive: 0,
        productArray: [],
        letTitle:'新品',

        productType1: [],
        productType2: [],
        productType3: [],
        productType4: [],

      }
    },
    mounted() {
      this.getProductList();
    },
    methods: {
      leftTabBarChange(item,index) {
        this.letTitle = item;
        this.isActive = index;
        switch(index) {
          case 0:
            this.productArray = this.productType1;
            break;
          case 1:
            this.productArray = this.productType2;
            break;
          case 2:
            this.productArray = this.productType3;
            break;
          case 3:
            this.productArray = this.productType4;
            break;
        }
      },
      getProductList() {
        console.log(111)
        productList().then(res => {
          console.log(res)
          if(res.data.ok) {
            res.data.data.map(item => {
              if(item.category_id === 1) {
                this.productType1.push(item);
              }
              if(item.category_id === 2) {
                this.productType2.push(item);
              }
              if(item.category_id === 3) {
                this.productType3.push(item);
              }
              if(item.category_id === 4) {
                this.productType4.push(item);
              }
            })
            this.productArray = this.productType1;
          }
        })
      }
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
  }
</style>
