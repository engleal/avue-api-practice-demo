<template>
  <div style="padding: 30px">
    <rc-crud ref="crud" v-model="tableFrom" :data="data" :option="option2">
      <template slot="search">
        <button>search部分的自定义按钮</button>
      </template>
    </rc-crud>
  </div>
</template>
<script>
export default {
	name: '',
	components: {},
	data() {
		return {
			tableFrom: {},
			data: [
				{
					name: '张三',
					age: '18'
				}
			],
			option2: {
				card: true,

				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true,
						searchLabelWidth: 120
					},
					{
						label: '年级',
						prop: 'age',
						search: true,
						searchLabelWidth: 110
					}
				]
			}
		}
	},
	// 生命周期
	created() {},
	methods: {}
}
</script>
<style scoped></style>
