<template>
		<view class="con">
			<view class="fir-row">
				<view class="name">yayxs</view>
				<view class="edit f-c">编辑个人资料</view>
			</view>
			<view class="sec-row ">
				<text>想什么就去做</text>
				<uni-icons type="arrowright"></uni-icons>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.con{
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 0 40upx 0 40upx;
	width: 100%;
	height: 200upx;
	background-color: #FFFFFF;
	border-bottom:1px solid #E5E5E5;
	.fir-row{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.name{
			font-weight: bold;
			font-size: 40upx;
		}
		.edit{
			border: 1px solid rgba(79, 202, 79, 1);
			border-radius: 20upx;
			color: rgba(79, 202, 79, 1);
			width: 200upx;
			height: 50upx;
			margin-right: 50upx;
		}
		
	}
	.sec-row{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 50upx;
	}
}
</style>
