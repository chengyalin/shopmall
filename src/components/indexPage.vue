<template>
	<!--首页-->
	<div class="indexPage">
		<!--banner图-->
		<div class="bannerBox">
			<van-swipe class="bannerImgBox" :autoplay="6000">
				<van-swipe-item v-for="(item, index) in sildeList" :key="index">
					<img :src="item.img" alt="">
				</van-swipe-item>
			</van-swipe>
		</div>
		<!--产品列表-->
		<div class="shopList">
			<div class="productPlate">
				<h2 class="title"><span class="name">明星产品</span><router-link class="showMore" to="/indexPageMore" >更多 ></router-link></h2>
				<div class="proList">
					<a href="">
						<i>折扣产品</i>
						<img src="../assets/logo.png" alt="">
						<p class="name">优点智能锁 E1</p>
						<p class="info">ZigBee联网锁，安全守候</p>
						<p class="price">￥2699</p>
					</a>
					<a href="">
						<i>折扣产品</i>
						<img src="../assets/logo.png" alt="">
						<p class="name">优点智能锁 E1</p>
						<p class="info">ZigBee联网锁，安全守候</p>
						<p class="price">￥2699</p>
					</a>
					<a href="">
						<i>折扣产品</i>
						<img src="../assets/logo.png" alt="">
						<p class="name">优点智能锁 E1</p>
						<p class="info">ZigBee联网锁，安全守候</p>
						<p class="price">￥2699</p>
					</a>
					<a href="">
						<i>折扣产品</i>
						<img src="../assets/logo.png" alt="">
						<p class="name">优点智能锁 E1</p>
						<p class="info">ZigBee联网锁，安全守候</p>
						<p class="price">￥2699</p>
					</a>
					<a href="">
						<i>折扣产品</i>
						<img src="../assets/logo.png" alt="">
						<p class="name">优点智能锁 E1</p>
						<p class="info">ZigBee联网锁，安全守候</p>
						<p class="price">￥2699</p>
					</a>
					<a href="">
						<i>折扣产品</i>
						<img src="../assets/logo.png" alt="">
						<p class="name">优点智能锁 E1</p>
						<p class="info">ZigBee联网锁，安全守候</p>
						<p class="price">￥2699</p>
					</a>
				</div>
			</div>
		</div>
		<footerBar></footerBar>
		<!--加载-->
		<van-loading v-if="LoadingOk" type="spinner" color="black" class="loadPosition" />
	</div>
</template>

<script>
	import footerBar from './footerBar'
	import { bannerList } from 'api/banner'
	export default {
		name: 'indexPage',
		components: {
			footerBar
		},
		data() {
			return {
				sildeList: [],
				LoadingOk: true
			}
		},
		created() {
			this.fetchSlideList()
		},
		methods: {
			//banner图填数据
			fetchSlideList() {
				let options = {
					is_terminal: 'False'
				}
				let STATIC_URL = 'http://www.zhongkakeji.com/'
				bannerList(options).then(({data}) => {
					if(data.ok) {
						this.sildeList = data.data.map(i => {
							return {
								img: (STATIC_URL + i.image)
							}
						}).sort((a, b) => a.order > b.order)
						this.LoadingOk = false
					}
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bannerBox {
		width: 360px;
		height: 210px;
		margin: 0 auto;
	}
	
	.bannerImgBox {
		display: block;
		width: 360px;
		height: 210px;
		border-radius: 10px;
	}
	
	.bannerImgBox img {
		width: 360px;
		height: 188px;
		border-radius: 10px;
	}
	
	.shopList {
		width: 375px;
		overflow: hidden;
	}
	
	.title {
		height: 20px;
		line-height: 20px;
		padding: 15px 8px;
	}
	
	.name {
		font-size: 18px;
		color: #000;
	}
	
	.showMore {
		display: inline-block;
		font-size: 14px;
		color: rgba(225, 70, 59, 1);
		float: right;
	}
	
	.proList {
		padding-left: 8px;
		width: 385px;
		overflow: hidden;
		height: 486px;
	}
	
	.proList a {
		display: block;
		width: 174px;
		height: 234px;
		border: 1px solid #FFEFEF;
		overflow: hidden;
		position: relative;
		float: left;
		margin-right: 8px;
		margin-bottom: 10px;
	}
	
	.proList i {
		display: block;
		position: absolute;
		top: 1px;
		left: 1px;
		font-size: 10px;
		color: #fff;
		text-align: center;
		font-style: normal;
		width: 70px;
		height: 20px;
		background: linear-gradient(90deg, rgba(225, 70, 59, 1), rgba(255, 125, 48, 1));
		border-radius: 2px;
	}
	
	.proList img {
		display: block;
		width: auto;
		max-height: 140px;
		margin: 0 auto;
		margin-bottom: 10px;
	}
	
	.proList p {
		line-height: 24px;
	}
	
	.name {
		font-size: 15px;
		color: #000;
	}
	
	.info {
		font-size: 12px;
		color: rgba(155, 155, 155, 1);
		;
	}
	
	.price {
		font-size: 15px;
		color: rgba(245, 4, 34, 1);
	}
	
	.indexPage {
		padding-bottom: 50px;
	}
	
	.loadPosition {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>