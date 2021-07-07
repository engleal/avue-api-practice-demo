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
            <el-input v-model="text" placeholder="内容">
              <template slot="append">
                <el-button color="primary" @click="copyText">复制</el-button>
              </template>
            </el-input>
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
	name: 'Clipboard',
	// 过滤器
	filters: {},
	data() {
		return {
			title: ComponentSource.clipboard.title,
			subTitle: ComponentSource.clipboard.subTitle,
			effectDesc: ComponentSource.clipboard.effectDesc,
			scene: ComponentSource.clipboard.scene,
			anchorSource: ComponentSource.clipboard.anchor,
			codeSnippet: '',
			text: '',
			attributesSource: ComponentSource.clipboard.attributes,
			eventSource: ComponentSource.clipboard.events
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
		copyText() {
			this.$Clipboard({
				text: this.text
			})
				.then(() => {
					this.$message.success('复制成功')
				})
				.catch(() => {
					this.$message.error('复制失败')
				})
		}
	}
}
</script>
<style scoped></style>
