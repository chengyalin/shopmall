<template>
  <!--刷选-->
  <div class="goods">
    <headBar title="优点商城"></headBar>
    <div class="screening">
      <div class="leftBar" ref="menuWrapper">
        <!--:class="{'active':isActive === index}"-->
        <div>
          <p @click="selectMenu(index,$event)" :class="{'active':currentIndex===index}" class="nameNav" v-for="(item,index) in leftTabBar"><span>{{item}}</span></p>
        </div>

      </div>
      <div class="rightBox" ref="goodsWrapper">
        <div>
          <div class="proMain" v-for="(item,index) in listArray">
            <h2 class="name"><span>{{item.title}}</span></h2>
            <div class="proList">
              <router-link tag="div" class="proBox" :to="{path:'/productDetail',query: {productId: item.product_id}}" v-for="(info,index) in item.goods" :key="index">
                <img :src="'http://tianyi.zhongkakeji.com/media/' + info.image" alt="" class="proImg">
                <p class="title">{{info.title}}</p>
              </router-link>
              <!--					<p v-show="productArray.length === 0">暂无数据...</p>-->
            </div>
          </div>
        </div>

      </div>
    </div>
    <footerBar></footerBar>

  </div>

</template>
<script>
  import BScroll from 'better-scroll';

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

        listHeight: [],
        scrollY: 0,
        listArray: [{
          title: '新品',
          goods: [{
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }]
        }, {
          title: '智能',
          goods: [{
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }]
        }, {
          title: '家居',
          goods: [{
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }, {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }]
        }, {
          title: '灯具',
          goods: [{
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          },
            {
            category_id: 1,
            category_name: "智能门锁",
            count: 1,
            image: "media/product/product/image/1_4qbHeeh.jpg",
            is_discount: true,
            is_hot: true,
            order: 3,
            pre_info: "买智能门锁，送百兆联通宽带啦",
            pre_price: "1199",
            price: "1299",
            product_id: 4,
            title: "优点智能锁C1N",
          }]
        }],

      }
    },
    computed: {
      currentIndex() {
        for(let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      }
    },
    mounted() {
      //this.getProductList();
      this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();
      });

    },
    methods: {
      selectMenu(index, event) {
        console.log(index);
        if(!event._constructed) {
          return;
        }
        let foodList = this.$refs.goodsWrapper.getElementsByClassName('proMain');
        let el = foodList[index];
        console.log(el);

        this.foodsScroll.scrollToElement(el, 300);
      },
      getProductList() {
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
      },
      _initScroll() {
        console.log(this.$refs.menuWrapper)
        this.meunScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        console.log(this.meunScroll)
        this.foodsScroll = new BScroll(this.$refs.goodsWrapper, {
          click: true,
          probeType: 3
        });
        console.log(this.$refs.goodsWrapper)
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      _calculateHeight() {
        let foodList = this.$refs.goodsWrapper.getElementsByClassName('proMain');
        let height = 0;
        this.listHeight.push(height);
        for(let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      }
    }
  }
</script>
<style scoped>
  .screening {
    display: flex;
    position: absolute;
    top: 50px;
    bottom: 50px;
    width: 100%;
    overflow: hidden;
  }

  .leftBar {
    border-right: 1px solid rgba(247, 247, 247, 1);
    flex: 0 0 75px;
    width: 75px;
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
    padding-bottom: 100px;
  }


  .proMain {
    text-align: center;
    margin: 20px 0;
    /*margin-bottom: 20px;
        clear: both;

        line-height: 40px;*/
  }
  .proMain .name{
    line-height: 40px;
  }
  .proMain span {
    border-bottom: 2px solid rgba(225, 70, 59, 1);
    padding-bottom: 4px;
  }
  .proList{
    overflow: hidden;
  }
  .proBox {
    width: 96px;
    float: left;
    margin: 6px 0;
  }

  .proImg {
    display: block;
    width: 80px;
    height: 80px;
    margin: 0 auto 4px;
  }

  .title {
    font-size: 12px;
    color: rgba(110, 110, 110, 1);
    text-align: center;
  }
</style>
