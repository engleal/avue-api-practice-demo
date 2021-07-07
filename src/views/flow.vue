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
            <el-button 
              type="primary" 
              @click="$refs.flow.addNode('测试节点')"
            >添加节点</el-button
            >
            <el-button @click="handledeleteNode">删除节点</el-button>
            <avue-flow
              ref="flow"
              :height="600"
              :width="1200"
              :option="option"
              v-model="form"
            >
              <template slot-scope="scope" slot="header">
                <i
                  class="el-icon-delete"
                  @click="$refs.flow.deleteNode(scope.node.id)"
                ></i>
                自定义头部
              </template>
              <div slot-scope="{ node }">
                <span>自定义{{ (node || {}).name }}</span>
              </div>
            </avue-flow>
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
	name: 'Flow',
	// 过滤器
	filters: {},
	data() {
		return {
			title: ComponentSource.flow.title,
			subTitle: ComponentSource.flow.subTitle,
			effectDesc: ComponentSource.flow.effectDesc,
			scene: ComponentSource.flow.scene,
			anchorSource: ComponentSource.flow.anchor,
			codeSnippet: '',
			aVueValue: '我是内容',
			attributesSource: ComponentSource.flow.attributes,
			eventSource: ComponentSource.flow.events,
			count: 0,
			form: '',
			option: {
				name: '流程A',
				nodeList: [
					{
						id: 'nodeA',
						name: '流程A-节点A',
						left: 39,
						top: 110
					},
					{
						id: 'nodeB',
						name: '流程A-节点B',
						left: 340,
						top: 161
					},
					{
						id: 'nodeC',
						name: '流程A-节点C',
						left: 739,
						top: 161
					},
					{
						id: 'nodeD',
						name: '节点D',
						left: 739,
						top: 20
					}
				],
				lineList: [
					{
						from: 'nodeA',
						to: 'nodeB'
					},
					{
						from: 'nodeB',
						to: 'nodeC'
					},
					{
						from: 'nodeC',
						to: 'nodeD'
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
		handleFlowInput(event) {
			console.log('handleFlowInput-event', event)
		},
		handleFlowClick(event) {
			console.log('handleFlowClick-event', event)
		},
		handleAddNode(nodeName) {
			this.refs.flow.nodeAdd('测试节点')
		},
		handledeleteNode(nodeId) {
			this.refs.flow.deleteNode('nodeD')
		}
	}
}
</script>
<style scoped></style>
