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
            <p>
              <avue-count-up
                :end="1233.2"
                :start="200"
                :duration="10"
                :decimals="2"
                :options="options"
                :callback="handleCallback"
              ></avue-count-up>
            </p>
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
	name: 'CountUp',
	// 过滤器
	filters: {},
	data() {
		return {
			title: ComponentSource.countUp.title,
			subTitle: ComponentSource.countUp.subTitle,
			effectDesc: ComponentSource.countUp.effectDesc,
			scene: ComponentSource.countUp.scene,
			anchorSource: ComponentSource.countUp.anchor,
			codeSnippet: '',
			aVueValue: '我是内容',
			attributesSource: ComponentSource.countUp.attributes,
			eventSource: ComponentSource.countUp.events,
			options: {
				// 是否开启千分位分隔效果 默认true
				useGrouping: true,
				// 开启千分位分割效果的分隔符，默认，
				separator: '/',
				// 小数点的分隔符，默认，
				decimal: '..',
				// 前置文字 默认空
				prefix: '前置',
				// 后置文字 默认空
				suffix: '后置'
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
		handleCallback(event) {
			console.log('event', event)
		}
	}
}
</script>
<style scoped></style>
