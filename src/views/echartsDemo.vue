<template>
	<div style="width: 500px;height: 500px;">
		<div id="age_chart" style="width: 100%;height: 100%;">

		</div>
		<div width="100px" height="100px" color="blue" style="width: 100px;height: 100px;background-color: #7e007e;">
			123
		</div>
		<slideToload></slideToload>


		<div id="slideImg">
		</div>



		测试专用br
		<br v-for="count in 30" :key="count" />


	</div>
</template>

<script>
	import slideToload from '../components/slideToload.vue'
	export default {
		name: 'echartsdemo',
		data() {

			return {}

		},
		components: {
			slideToload
		},
		mounted() {
			// this.initCharts()
		},

		methods: {
			initCharts() {
				var myechart = this.$echarts.init(document.getElementById('age_chart'), "dark")
				myechart.setOption({
					title: {
						text: '在Vue中使用echarts'
					},
					tooltip: {},
					xAxis: {
						data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}]
				})
			}

		}

	}
</script>
<style scoped="scoped">
	#slideImg {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-image: url('../assets/区域显示.jpg');
		background-size: contain;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-position: center center;
	}
</style>
