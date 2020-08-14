<template>
	<view>
		<canvas style="width: 750upx; height: 200px;" canvas-id="canvasIdFlag" disable-scroll="false" @touchstart="handleTouchStart"
		 @touchmove="handleTouchMove" @touchend="handleTouchEnd" @touchcancel="handleTouchCancel" @longtap="handleLongTap"
		 @error="handleErr"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onReady() {
			console.log(`onready触发`)
			this.draw()
		},
		methods: {

			handleTouchStart() {
				console.log(`手指触摸动作开始`)
			},
			handleTouchMove() {
				console.log(`手指触摸动作移动`)
			},
			handleTouchEnd() {
				console.log(`手指触摸动作结束`)
			},
			handleTouchCancel() {
				console.log(`手指触摸动作被打断`)
			},
			handleLongTap() {
				console.log(`长按`)
			},
			handleErr() {
				console.log(`发生错误的时候`)
			},
			draw() {
				let context = uni.createCanvasContext('canvasIdFlag')
				context.setStrokeStyle("#00ff00")
				context.setLineWidth(5)
				context.rect(0, 0, 200, 200)
				context.stroke()
				context.setStrokeStyle("#ff0000")
				context.setLineWidth(2)
				context.moveTo(160, 100)
				context.arc(100, 100, 60, 0, 2 * Math.PI, true)
				context.moveTo(140, 100)
				context.arc(100, 100, 40, 0, Math.PI, false)
				context.moveTo(85, 80)
				context.arc(80, 80, 5, 0, 2 * Math.PI, true)
				context.moveTo(125, 80)
				context.arc(120, 80, 5, 0, 2 * Math.PI, true)
				context.stroke()
				context.draw()
			}

		}
	}
</script>

<style lang="scss" scoped>

</style>
