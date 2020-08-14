<template>
	<view>
		<view class="">
			测试录音
		</view>
		<view class="">
			<button @tap="startRecord">开始录音</button>
			<button @tap="endRecord">停止录音</button>
			<button @tap="playVoice">播放录音</button>
		</view>
	</view>
</template>

<script>
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();

	innerAudioContext.autoplay = true;
	export default {
		data() {
			return {
				text: 'uni-app',
				voicePath: ''
			};
		},
		onLoad() {
			let self = this;
			recorderManager.onStop(function(res) {
				console.log('recorder stop' + JSON.stringify(res));
				self.voicePath = res.tempFilePath;
			});
		},
		methods: {
			// 开始
			startRecord() {
				console.log(`开始录音`)
				recorderManager.start();
			},
			endRecord() {
				console.log(`停止录音`)
				recorderManager.stop();
			},
			playVoice() {
				console.log(`播放录音`)
				if (this.voicePath) {
					innerAudioContext.src = this.voicePath;
					innerAudioContext.play();
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
