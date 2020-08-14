<template>
	<view class="con">
		<nav-bar />
		<view class="group-discussion">
			<text class="left">我加入的</text>
			<view class="">
				<text>全部</text>
				<uni-icons type="forward"></uni-icons>
			</view>
		</view>
		<view class="sec-row">
			<block>
				<view class="hot-group" v-for="(item, index) in 5" :key="index">
					<view class="pic"></view>
					<view class="">热门小组</view>
				</view>
			</block>
		</view>

		<view class="group-discussion">
			<text class="left">小组讨论</text>
			<view class="">
				<text>我的讨论</text>
				<uni-icons type="forward"></uni-icons>
			</view>
		</view>
		<view class="feiyan" @click="handleToYq">
			<text class="iconfont icon-broadcast" style="color: rgba(79, 202, 79, 1); margin: 0 8upx;"></text>
			新型冠状病毒肺炎疫情消息汇总
		</view>
	</view>
</template>

<script>
import navBar from '@/components/nav-bar/nav-bar.nvue';
export default {
	data() {
		return {};
	},
	components: {
		navBar
	},
	methods: {
		handleToYq() {
			console.log(`跳转疫情`);
			uni.navigateTo({
				url:'/pages/template/yiqing-demo/yiqing-demo'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.con {
	background-color: #fff;
	.hot-group {
		padding: 0 15upx;
		.pic {
			height: 100upx;
			width: 100upx;
			border-radius: 12upx;
			background-color: rgba(79, 202, 79, 1);
		}
	}
	.sec-row{
		display: flex;
	}
	.group-discussion {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		padding: 0 15upx;

		height: 70upx;
		line-height: 70upx;
		.left {
			font-size: 32upx;
			font-weight: bold;
		}
	}
	.feiyan {
		border-top: 1upx solid #dcdcdc;
		background-color: #fff;
		height: 80upx;
		line-height: 80upx;
		padding: 0 15upx;
	}
}
</style>
