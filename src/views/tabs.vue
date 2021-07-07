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
            <avue-tabs :option="option" @change="handleChange"></avue-tabs>
            <span v-if="type.prop === 'tab1'">选项卡内容1</span>
            <span v-else-if="type.prop === 'tab2'">选项卡内容2</span>
            <span v-else-if="type.prop === 'tab3'">选项卡内容3</span>vv
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
          id="ATTRIBUTEOPTION"
          :data-source="attributeOptionsSource"
          title="API option"
        ></rc-table>
        <rc-table
          id="ATTRIBUTEOPTIONCOLUMN"
          :data-source="attributeOptionColumnSource"
          title="API option.column"
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
import ComponentSource from './index'
export default {
	name: 'Tabs',
	// 过滤器
	filters: {},
	data() {
		return {
			title: ComponentSource.tabs.title,
			subTitle: ComponentSource.tabs.subTitle,
			effectDesc: ComponentSource.tabs.effectDesc,
			scene: ComponentSource.tabs.scene,
			anchorSource: ComponentSource.tabs.anchor,
			codeSnippet: '',
			aVueValue: '我是内容',
			attributesSource: ComponentSource.tabs.attributes,
			attributeOptionsSource: ComponentSource.tabs.attributeOption,
			attributeOptionColumnSource: ComponentSource.tabs.attributeColumn,
			eventSource: ComponentSource.tabs.events,
			type: {},
			option: {
				column: [
					{
						icon: 'el-icon-info',
						label: '选项卡1',
						prop: 'tab1'
					},
					{
						icon: 'el-icon-warning',
						label: '选项卡2',
						prop: 'tab2'
					},
					{
						icon: 'el-icon-question',
						label: '选项卡3',
						prop: 'tab3'
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
	created() {
		this.type = this.option.column[0]
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
		handleChange(column) {
			this.type = column
			this.$message.success(JSON.stringify(column))
		}
	}
}
</script>
<style scoped></style>
