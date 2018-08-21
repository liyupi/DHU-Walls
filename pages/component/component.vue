<template>
	<view class="index">
		<swiper autoplay="true" indicator-dots="true" circular="true" style="height: 300px;">
			<swiper-item v-for="(img,key) in imgUrls" :key="key">
				<image :src="img" style="height: 300px;" />
			</swiper-item>
		</swiper>
		<view class="text" hover-class="uni-list-cell-hover">
			第 <text class="uni-badge uni-badge-danger uni-badge-inverted">{{blockNum}}</text>个砖块已经产生啦~
			<text style="float:right;">我要搬砖</text>
		</view>
		<view class="uni-grid-10">
			<view class="uni-grid-10-item" hover-class="uni-grid-10-item-hover" v-for="(item,index) in walls" :key="index" :class="index % 5 === 4 ? 'no-border-right' : ''">
				<image class="uni-grid-10-image" :src="item.img"></image>
				<text class="uni-grid-10-text">{{item.title}}</text>
			</view>
		</view>
		<view class="text" id="message-list-title" hover-class="uni-list-cell-hover">
			- 最新涂鸦 -
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.cover"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{value.title}}</view>
						<view class="uni-media-list-text-bottom">
							<text>#1000001 </text>
							<text>{{value.author_name}} </text>
							<text>{{value.published_at}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	var dateUtils = require('../../common/util.js').dateUtils;
	
	export default {
		data() {
			return {
				blockNum: 100000,
				imgUrls: [
					'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
					'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
					'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg'
				],
				walls: [{
					title: "表白墙",
					img: "../../static/c1.png"
				},{
					title: "表黑墙",
					img: "../../static/c1.png"
				},{
					title: "爱心墙",
					img: "../../static/c1.png"
				},{
					title: "大佬墙",
					img: "../../static/c1.png"
				},{
					title: "心得墙",
					img: "../../static/c1.png"
				},{
					title: "萌物墙",
					img: "../../static/c1.png"
				},{
					title: "商品墙",
					img: "../../static/c1.png"
				},{
					title: "互助墙",
					img: "../../static/c1.png"
				},{
					title: "问答墙",
					img: "../../static/c1.png"
				},{
					title: "通知墙",
					img: "../../static/c1.png"
				}],
				listData: []
			}
		},
		onShareAppMessage() {
			return {
				title: '欢迎体验uni-app',
				path: '/pages/component/component'
			}
		},
		onLoad() {
			this.getList();
		},
		methods: {
			trigerCollapse(e) {
				for (let i = 0, len = this.lists.length; i < len; ++i) {
					if (e === i) {
						this.lists[i].open = !this.lists[i].open;
					} else {
						this.lists[i].open = false;
					}
				}
			},
			getList() {
				var data = {
					column: "id,post_id,title,author_name,cover,published_at" //需要的字段名
				};
				console.log(this.last_id);
				if (this.last_id) { //说明已有数据，目前处于上拉加载
					data.minId = this.last_id;
					data.time = new Date().getTime() + "";
					data.pageSize = 10;
				}
				uni.request({
					url: 'https://spider.dcloud.net.cn/api/news',
					data: data,
					success: (data) => {
						if (data.statusCode == 200) {
							let list = this.setTime(data.data);
							this.listData = this.reload ? list : this.listData.concat(list);
							this.last_id = list[list.length - 1].id;
							this.reload = false;
						}
					},
					fail: (data, code) => {
						console.log('fail'+JSON.stringify(data));
					}
				})
			},
			setTime: function (items) {
				var newItems = [];
				items.forEach((e) => {
					newItems.push({
						author_name: e.author_name,
						cover: e.cover,
						id: e.id,
						post_id: e.post_id,
						published_at: dateUtils.format(e.published_at),
						title: e.title
					});
				});
				return newItems;
			}
		}
	}
</script>

<style>
	@import "../../common/uni.css";

	#message-list-title {
		text-align: center;
		color: #555;
	}

	.index {
		padding-bottom: 1px;
	}

	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list:before {
		height: 0;
	}
	/* 十宫格 */

	.uni-grid-10 {
		background: #F7F7F7;
		width: 750px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		border-top: 2px solid #eee;
	}

	.uni-grid-10-item {
		width: 150px;
		height: 150px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-bottom: 2px solid;
		border-right: 2px solid;
		border-color: #eee;
		box-sizing: border-box;
	}

	.uni-grid-10-image {
		width: 100px;
		height: 100px;
	}

	.uni-grid-10-text {
		width: 150px;
		line-height: 30px;
		height: 30px;
		text-align: center;
		font-size: 30px;
	}

	.uni-grid-10-item-hover {
		background: rgba(0, 0, 0, 0.1);
	}
	
	.text{
		margin: 10px;
		padding: 0 20px;
		background-color: #F7F7F7;
		height: 70px;
		line-height: 70px;
		color: #000;
		font-size: 30px;
	}
</style>
