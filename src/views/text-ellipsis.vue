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
            <avue-text-ellipsis
              :text="text"
              :height="100"
              :width="200"
              :is-limit-height="isLimitHeight"
              :use-tooltip="true"
              :placement="top"
              @show="show"
              @hide="hide"
            >
              <el-tag slot="before" size="small">new</el-tag>
              <small slot="more">
                <span>...</span>
                <span 
                  class="link" 
                  @click="isLimitHeight = false"
                >查看更多</span
                >
              </small>
              <small
                v-if="!isLimitHeight"
                slot="after"
                class="link"
                @click="isLimitHeight = true"
              >收起</small
              >
            </avue-text-ellipsis>
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
	name: 'TextEllipsis',
	// 过滤器
	filters: {},
	data() {
		return {
			title: ComponentSource.textEllipsis.title,
			subTitle: ComponentSource.textEllipsis.subTitle,
			effectDesc: ComponentSource.textEllipsis.effectDesc,
			scene: ComponentSource.textEllipsis.scene,
			anchorSource: ComponentSource.textEllipsis.anchor,
			codeSnippet: '',
			aVueValue: '我是内容',
			attributesSource: ComponentSource.textEllipsis.attributes,
			eventSource: ComponentSource.textEllipsis.events,
			text:
				'《华盛顿自由灯塔报》几天前报道称，美国国防部官员透露中国近日进行第十次东风-41洲际导弹的试射活动，这次试射中东风-41导弹投射了多个弹头并成功命中中国西部靶场目标。',
			isLimitHeight: true
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
	methods: {}
}
</script>
<style scoped></style>
