<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			// #endif
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/* 引入css */
	@import "./common/style/uni.css";
	@import './common/style/animate.css';
	@import './common/style/iconfont.css';
	/* ui 基础样式 */
	@import './common/style/main.css';
	@import './common/style/common.css'
</style>
