<template>
	<view class="container">
		<view class="mine-header">
			<view class="avatar f-c"><image src="https://yayxs.github.io/head.jpg" mode="widthFix" lazy-load="true" class="image"></image></view>
			<view class="right-info">
				<view class="name">yayxs</view>
				<view class="id">
					<view class="id-num">ID:0000001</view>
					<view class="main-page" @click="handleToHomePage">个人主页></view>
				</view>
				<view class="flow">
					<view class="">关注 2</view>
					<view class="">被关注 2</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { uniBadge } from '@dcloudio/uni-ui';
export default {
	data() {
		return {};
	},
	methods: {
		handleToHomePage() {
			console.log(`跳转到个人主页`);
			const navigateOpts = {
				url: '/pages/home-page/home-page'
			};
			uni.navigateTo(navigateOpts);
		}
	},
	components: {
		uniBadge
	}
};
</script>

<style lang="scss" scoped>
.mine-header {
	display: flex;
	width: 100%;
	height: 200upx;
	background-color: rgba(79, 202, 79, 1);
	.avatar {
		flex: 1;

		.image {
			width: 150upx;
			height: 150upx;
			border-radius: 50%;
			border: 5upx solid #ffffff;
		}
	}
	.right-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 15upx 0 15upx;
		flex: 2;
		// background-color: pink;
		color: #ffffff;
		font-weight: 500;
		.id {
			display: flex;
			justify-content: space-between;
			padding: 0 15upx 0 0;
		}
		.flow {
			width: 100%;
			border-top: 2upx solid #fff;
			display: flex;
			view {
				margin-right: 30upx;
			}
		}
	}
}
</style>
