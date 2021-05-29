<template>
	<div>
		<br v-for="count in 30" :key="count" />
		我是 slideToload 组件
		<br v-for="count in 30" :key="count+30" />
	</div>

</template>

<script>
	export default {
		name: 'slideToload',
		data() {
			return {
				appOld: '',
				marginHeight: 2,
				arrivefoot: false,
				footmonitor: () => {
					if (!this.arrivefoot)
						this.scrollOnFoot()
				}
			}
		},
		methods: {
			scrollOnFoot() {
				let scrollHeight =scrollHeight|| document.documentElement.scrollHeight
				// console.log(scrollHeight)
				let clientHeight =clientHeight|| document.documentElement.clientHeight
				// console.log(clientHeight)
				let scrollTop = document.documentElement.scrollTop
				console.log(scrollTop)
				

				if (scrollHeight <= clientHeight + scrollTop + this.marginHeight) {

					this.arrivefoot = true
					var app = document.getElementById("app")

					this.appOld = this.appOld || app.innerHTML

					var element = `<div id='mount-el'>装载 元素</div>`

					app.innerHTML += element
					var elRoot = document.getElementById("mount-el")
					//装载 元素
					mountfooter(elRoot)
				} else {
					app = document.getElementById("app")
					if (this.appOld !== '' && this.appOld !== app.innerHTML) {
						this.arrivefoot = false
						app.innerHTML = this.appOld
						this.appOld = ''
					}
				}

				function mountfooter(elRoot) {
					if (elRoot) {
						var initialX = 0
						var initialY = 0
						var app = document.getElementById("app")
						
						// FnState 变量声明 
						/*
						  0 : 初始状态
						  1 : 点击中 移动中
						  2 : 达到 or 超过 预计限值 100px 
						*/
						var FnState = 0
						
						//cacheStyle 缓冲样式 点击时 鼠标全局样式
						var cacheStyle=document.createElement("style")
						cacheStyle.innerHTML="*{cursor:default}"
						
						var mousedownFn = (el) => {

							initialX = initialX || el.pageX
							initialY = initialY || el.pageY
							console.log("鼠标初始位置：\nX--" + initialX + "\nY--" + initialY)

							//鼠标点击 状态
							FnState = 1

							console.log("点击中" + FnState)
							//对 app 添加 鼠标移动项
							app.addEventListener("mousemove", mousemoveFn, false)
							//对 app 下达 up 指令
							app.addEventListener("mouseup", mouseupFn, false)
							//取消字段选择功能
							document.onselectstart = function() {
								return false;
							};
							//添加 鼠标全局样式  --点击时 
							document.head.appendChild(cacheStyle)
						}

						var mouseupFn = () => {
							FnState = FnState === 2 ? FnState : 0
							console.log("松开了" + FnState)
							initialX = 0
							initialY = 0
							console.log("重置initialX 和 initialY\n  initialX:"+initialX+"\n  initialY:"+initialY)
							//移除 app 鼠标移动项
							app.removeEventListener("mousemove", mousemoveFn, false)
							//移除 app up 指令
							app.removeEventListener("mouseup", mouseupFn, false)
							//恢复字段选择功能
							document.onselectstart = function() {
								return true;
							};
							//移除 鼠标全局样式  --松开了
							document.head.appendChild(cacheStyle)
							
							
							if (FnState === 2) {
								FnState = 0
								console.log("\n........\n\n成功 模拟跳转 域\n\n........\n")
							}
						}


						var mousemoveFn = (el) => {
							// var varX = el.pageX
							var varY = el.pageY
							
							//点击移动中
							FnState = 1
							// console.log("鼠标移动位置：\nX--" + varX + "\nY--" + varY)
							if (initialY >= varY + 100) {
								FnState = 2
								console.log("鼠标 移出 点击范围 50px 先请求 松开鼠标")

							}
						}

						//对 元素 下达 down 指令 
						elRoot.addEventListener("mousedown", mousedownFn, false)
					} else {
						console.log("sorry  mountfooter got none element")
					}
				}
			}
		},
		mounted() {
			window.onscroll = this.footmonitor
		}
	}
</script>

<style>
</style>
