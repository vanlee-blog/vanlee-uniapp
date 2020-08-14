<template>
	<view class="page">
		<view class="img-view min-col" v-if="!showSwiper"><image src="https://yayxs.github.io/head.jpg" mode="widthFix" class="avatar"></image></view>
		<!-- <swiper v-if="showSwiper" indicator-dots="true">
			<swiper-item v-for="(img,key) in imgUrls" :key="key">
				<image :src="img" />
			</swiper-item>
		</swiper> -->
		<view class="con"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showSwiper: false,
			imgUrls: ['https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg', 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg'],
			items: [
				{
					value: 'img',
					name: '静态图',
					checked: true
				},
				{
					value: 'swiper',
					name: '轮播图',
					checked: false
				}
			]
		};
	},
	methods: {
		radioChange(e) {
			this.showSwiper = e.detail.value === 'swiper';
		}
	}
};
</script>

<style scoped>
image,
swiper,
.img-view {
	width: 750upx;
	height: 400upx;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}
.avatar {
	margin-bottom: 30upx;
	width: 160upx;
	height: 160upx;
	border-radius: 50%;
	border: 6upx solid #ffffff;
}
.con {
}
.page-section-title {
	margin-top: 50upx;
}
</style>
