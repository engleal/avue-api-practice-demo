<template>
  <div>
    固定组件
  </div>
</template>
<script>
export default {
	name: 'rocky-core-affix',
	props: {
		exampleProp: {
			type: String,
			default: ''
		}
	},
	// 生命周期
	created() {},
	methods: {
		exampleClickEvent: function() {
			console.log('exampleClickEvent 点击事件')
		}
	}
}
</script>
<style scoped></style>
