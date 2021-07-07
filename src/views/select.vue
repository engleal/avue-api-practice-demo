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
          <template slot="effect">
            <avue-select
              v-model="value"
              :dic="dic"
              placeholder="请选择内容"
              @focus="handleFocus"
              @blur="handleBlur"
            ></avue-select>
          </template>
          <div slot="sourceCode">
            <pre>
              <code class="language-xml line-numbers">{{ codeSnippet }}</code>
            </pre>
          </div>
        </rc-code-card>
        <rc-code-card id="FZYF" title="group用法" desc="分组用法">
          <template slot="effect">
            <avue-select
              v-model="value2"
              :group="true"
              :dic="dic2"
              placeholder="请选择内容"
            ></avue-select>
          </template>
          <div slot="sourceCode">
            <pre>
              <code class="language-xml line-numbers">{{ codeSnippet }}</code>
            </pre>
          </div>
        </rc-code-card>
        <rc-table
          id="ATTRIBUTES"
          :data-source="attributesSource"
          title="API 属性"
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
	name: 'Select',
	// 过滤器
	filters: {},
	data() {
		return {
			title: ComponentSource.select.title,
			subTitle: ComponentSource.select.subTitle,
			effectDesc: ComponentSource.select.effectDesc,
			scene: ComponentSource.select.scene,
			anchorSource: ComponentSource.select.anchor,
			attributesSource: ComponentSource.select.attributes,
			eventSource: ComponentSource.select.events,
			codeSnippet: '',
			value: '',
			dic: [
				{
					label: '选项1',
					desc: '描述1',
					value: 0
				},
				{
					label: '选项2',
					desc: '描述2',
					value: 1
				}
			],
			value2: '',
			dic2: [
				{
					label: '进口水果',
					groups: [
						{
							disabled: true,
							label: '蛇果',
							value: '0',
							desc: '进口'
						},
						{
							disabled: true,
							label: '牛油果',
							value: '0',
							desc: '进口'
						}
					]
				},
				{
					label: '国产水果',
					groups: [
						{
							disabled: false,
							label: '苹果',
							value: '3',
							desc: '陕西'
						},
						{
							disabled: false,
							label: '香梨',
							value: '4',
							desc: '新疆'
						}
					]
				}
			]
		}
	},
	// 计算属性 一个数据受多个数据影响
	computed: {},
	// 监听属性 一个数据影响多个数据
	watch: {},
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
		handleFocus(p1, p2) {
			console.log('foucus-p1', p1)
			console.log('foucus-p2', p2)
		},
		handleBlur(p1, p2) {
			console.log('blur-p1', p1)
			console.log('blur-p2', p2)
		}
	}
}
</script>
<style scoped></style>
