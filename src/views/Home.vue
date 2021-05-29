<template>
	<div class="Home">
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="empID" label="编号" width="180">
			</el-table-column>
			<el-table-column prop="empName" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="empPermanentAdd" label="地址">
			</el-table-column>
		</el-table>


	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: 'Home',
		data() {
			return {
				tableData: []
			}
		},
		methods: {
			getEmployeeData() {
				// this.$axios.get("/api/get/employee").then((source) => {
				// 	const data = source.data
				// 	console.log(data.data)
				// })
				
				this.$axios.get("/api/get/employee").then((res) => {
					const empdata = res.data
					// console.log(empdata)
					
					this.tableData=empdata.data
					console.log(this.tableData)
				})
			}
		},
		mounted() {
			this.getEmployeeData()
		}
	}
</script>
