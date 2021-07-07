<template>
  <div class="page-container">
    <rc-basic-content>
      <template slot="content">
        <rc-markdown
          :title="title"
          :sub-title="subTitle"
          :effect-desc="effectDesc"
          :scene="scene"
        ></rc-markdown>
        <rc-code-card id="JCYF" title="基本用法" desc="基本使用。">
          <template slot="effect"> </template>
          <div slot="sourceCode">
            <pre>
              <code class="language-xml line-numbers">{{ codeSnippet }}</code>
            </pre>
          </div>
        </rc-code-card>
        <rc-table
          id="ATTRIBUTES"
          :data-source="attributesSource"
          title="API 属性(option)"
        ></rc-table>
        <rc-table
          id="EVENTS"
          :data-source="eventSource"
          title="API 事件"
        ></rc-table>
      </template>
      <template slot="anchor">
        <rc-time-line :data-source="anchorSource"></rc-time-line>
      </template>
    </rc-basic-content>
  </div>
</template>

<script>
import Prism from 'prismjs'
import ComponentSource from './index'
export default {
	name: 'Form',
	// 过滤器
	filters: {},
	data() {
		return {
			title: ComponentSource.form.title,
			subTitle: ComponentSource.form.subTitle,
			effectDesc: ComponentSource.form.effectDesc,
			scene: ComponentSource.form.scene,
			anchorSource: ComponentSource.form.anchor,
			attributesSource: ComponentSource.form.attributes,
			eventSource: ComponentSource.form.events,
			codeSnippet: ''
		}
	},
	// 计算属性 一个数据受多个数据影响
	computed: {},
	// 监听属性 一个数据影响多个数据
	watch: {},
	// 实例创建前 无el 无data
	beforeCreate() {},
	// 实例已经创建 无el 有数据观测、属性和方法的运算，watch/event事件回调，完成了data 数据的初始化
	created() {
		this.updateTableSource()
		this.tableSource2 = this.tableSource.slice(0, 2)
	},
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
		handleChange(event) {
			console.log('event', event)
		},
		updateTableSource() {
			const resultList = this.mapChildren(this.tableSource)
			console.log('resultList', resultList)
		},
		mapChildren(arr) {
			const newArr = []
			arr.forEach(item => {
				const obj = item
				if (item.children) {
					if (!item.children.length) {
						obj.hasChildren = false
					} else {
						// 保存对象children
						this.mapChildren(item.children)
						obj.hasChildren = true
					}
				}
				newArr.push(obj)
			})
			return newArr
		}
	}
}
</script>
<style scoped></style>
