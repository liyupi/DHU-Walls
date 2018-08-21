<template>
	<view class="index">
		<view class="page-body">
			<view class="page-section page-section-spacing">
				<view class="text-box" scroll-y="true">
					<text>{{text}}</text>
				</view>
			</view>
		</view>
		<view class="page-section">
			<view class="page-section-title">带清除按钮的输入框</view>
			<view class="uni-list">
				<view class="uni-list-cell">
					<input class="uni-input" placeholder="带清除按钮的输入框" maxlength="12" :value="inputClearValue" @input="bindClearInput" />
					<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				showClearIcon: false,
				inputClearValue: ""
			}
		},
		onShareAppMessage() {
			return {
				title: '欢迎体验uni-app',
				path: '/pages/API/API'
			}
		},
		methods: {
			goDetailPage(e) {
				let url = ~e.indexOf('platform') ? e : '/pages/API/' + e + '/' + e;
				uni.navigateTo({
					url: url
				})
			},
			bindClearInput: function (e) {
				this.inputClearValue = e.target.value;
				if (e.target.value.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			clearIcon: function () {
				this.inputClearValue = "";
				this.showClearIcon = false;
			}

		}
	}
</script>

<style>
	@import "../../common/uni.css";
	@import "../../common/icon.css";

	.index {
		padding-bottom: 1px;
	}

	.text-box {
		margin-bottom: 70px;
		padding: 40px 0;
		display: flex;
		min-height: 300px;
		background-color: #FFFFFF;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 30px;
		color: #353535;
		line-height: 46px;
	}

	.page-section {
		margin-bottom: 20px;
	}

	.page-body {
		padding-bottom: 40px;
	}

	.uni-list-cell {
		padding: 0 30px;
	}

	.uni-input {
		flex: 1;
	}

	.uni-icon {
		color: #999;
	}
</style>
