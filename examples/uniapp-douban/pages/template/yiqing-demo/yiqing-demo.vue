<template>
	<view class="qiun-columns">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt"><view class="qiun-title-dot-light">疫情地图</view></view>
		<view class="qiun-charts"><canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas></view>
	</view>
</template>

<script>
import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js';
var _self;
var canvaPie = null;

import dataChart from '@/static/json/data.json'
export default {
	data() {
		return {
			cWidth: '',
			cHeight: '',
			pixelRatio: 1,
			serverData: ''
		};
	},
	methods: {
		async getServerData() {
			const res = await dataChart.data
			console.log(res)
		},
		showPie(canvasId, chartData) {
			canvaPie = new uCharts({
				  $this:_self,
				  canvasId: canvasId,
				  type: 'map',
				  fontSize:11,
				  padding:[0,0,0,0],
				  legend:{
				    show:false
				  },
				  background:'#FFFFFF',
				  pixelRatio:_self.pixelRatio,
				  series: chartData.series,
				  width: _self.cWidth*_self.pixelRatio,
				  height: _self.cHeight*_self.pixelRatio,
				  extra: {
				    map: {
				      border:true,
				      borderWidth:1,
				      borderColor:'#666666',
				      fillOpacity:0.6
				    }
				  }
			});
		},
		touchPie(e) {
			canvaPie.showToolTip(e, {
				format: function(item) {
					return item.name + ':' + item.data;
				}
			});
		}
	},
	onLoad() {
		_self = this;
		this.cWidth = uni.upx2px(750);
		this.cHeight = uni.upx2px(500);
		this.getServerData();
	}
};
</script>

<style scoped>
page {
	background: #f2f2f2;
	width: 750upx;
	overflow-x: hidden;
}
.qiun-padding {
	padding: 2%;
	width: 96%;
}
.qiun-wrap {
	display: flex;
	flex-wrap: wrap;
}
.qiun-rows {
	display: flex;
	flex-direction: row !important;
}
.qiun-columns {
	display: flex;
	flex-direction: column !important;
}
.qiun-common-mt {
	margin-top: 10upx;
}
.qiun-bg-white {
	background: #ffffff;
}
.qiun-title-bar {
	width: 96%;
	padding: 10upx 2%;
	flex-wrap: nowrap;
}
.qiun-title-dot-light {
	border-left: 10upx solid #0ea391;
	padding-left: 10upx;
	font-size: 32upx;
	color: #000000;
}
.qiun-charts {
	width: 750upx;
	height: 500upx;
	background-color: #ffffff;
}
.charts {
	width: 750upx;
	height: 500upx;
	background-color: #ffffff;
}
</style>
