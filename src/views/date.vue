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
            <avue-date
              v-model="value"
              :picker-options="pickerOptions"
              format="yyyy年MM月dd日"
              value-format="yyyy-MM-dd"
              placeholder="请选择日期"
              type="date"
              @focus="handleFocus"
              @blur="handleBlur"
              @click="handleClick"
            ></avue-date>
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
	name: 'Date',
	// 过滤器
	filters: {},
	data() {
		return {
			title: ComponentSource.date.title,
			subTitle: ComponentSource.date.subTitle,
			effectDesc: ComponentSource.date.effectDesc,
			scene: ComponentSource.date.scene,
			anchorSource: ComponentSource.date.anchor,
			attributesSource: ComponentSource.date.attributes,
			eventSource: ComponentSource.date.events,
			codeSnippet: '',
			value: '2020-01-01',
			pickerOptions: {
				disabledDate(time) {
					return time.getTime() > Date.now()
				},
				shortcuts: [
					{
						text: '今天',
						onClick(picker) {
							console.log('picker', picker)
							picker.$emit('pick', new Date())
						}
					},
					{
						text: '昨天',
						onClick(picker) {
							const date = new Date()
							date.setTime(date.getTime() - 3600 * 1000 * 24)
							picker.$emit('pick', date)
						}
					},
					{
						text: '一周前',
						onClick(picker) {
							const date = new Date()
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
							picker.$emit('pick', date)
						}
					}
				]
			}
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
		handleFocus(p1, p2) {},
		handleBlur(p1, p2) {},
		handleClick() {}
	}
}
</script>
<style scoped></style>
