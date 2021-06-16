<template>
	<div class="page-container">
		<rc-basic-content>
			<template slot="content">
				<rc-markdown
					:title="title"
					:subTitle="subTitle"
					:effectDesc="effectDesc"
					:scene="scene"
				></rc-markdown>
				<rc-code-card title="基本用法" desc="基本使用。" id="JCYF">
					<template slot="effect">
						<avue-input-icon
							v-model="form"
							placeholder="请选择图标"
							:icon-list="iconList"
              @change="handleChange"
						></avue-input-icon>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-table
					title="API 属性"
					id="ATTRIBUTES"
					:dataSource="attributesSource"
				></rc-table>
				<rc-table
					title="API 事件"
					id="EVENTS"
					:dataSource="eventSource"
				></rc-table>
			</template>
			<template slot="anchor">
				<rc-time-line :dataSource="anchorSource"></rc-time-line>
			</template>
		</rc-basic-content>
	</div>
</template>
<script>
import Prism from 'prismjs'
import ComponentSource from './index'
export default {
	name: 'InputIcon',
	data() {
		return {
			title: ComponentSource.inputIcon.title,
			subTitle: ComponentSource.inputIcon.subTitle,
			effectDesc: ComponentSource.inputIcon.effectDesc,
			scene: ComponentSource.inputIcon.scene,
			anchorSource: ComponentSource.inputIcon.anchor,
			codeSnippet: '',
			attributesSource: ComponentSource.inputIcon.attributes,
			eventSource: ComponentSource.inputIcon.events,
			form: 'el-icon-info',
			iconList: [
				{
					label: '基本图标',
					list: [
						'el-icon-info',
						'el-icon-error',
						'el-icon-error',
						'el-icon-success',
						'el-icon-warning',
						'el-icon-question'
					]
				},
				{
					label: '方向图标',
					list: [
						'el-icon-info',
						'el-icon-back',
						'el-icon-arrow-left',
						'el-icon-arrow-down',
						'el-icon-arrow-right',
						'el-icon-arrow-up'
					]
				},
				{
					label: '符号图标',
					list: [
						'el-icon-plus',
						'el-icon-minus',
						'el-icon-close',
						'el-icon-check'
					]
				}
			]
		}
	},
	// 实例创建前 无el 无data
	beforeCreate() {},
	// 实例已经创建 无el 有数据观测、属性和方法的运算，watch/event事件回调，完成了data 数据的初始化
	created() {},
	// 虚拟dom阶段 生成html 未挂载
	beforeMount() {},
	// html 模板挂载到页面
	mounted() {},
	// 数据更新之前
	beforeUpdate() {},
	// 数据更新完成
	updated() {},
	// 实例销毁前
	beforeDestroy() {},
	// 实例销毁后
	destroyed() {},
	// 方法合集
	methods: {
    handleChange(item){
      console.log("item", item)
    }
  },
	// 计算属性 一个数据受多个数据影响
	computed: {},
	// 监听属性 一个数据影响多个数据
	watch: {},
	// 过滤器
	filters: {}
}
</script>
<style scoped></style>
