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
            <avue-tree
              :permission="getPermission"
              :loading="loading"
              :option="option"
              :data="data"
              v-model="form"
              @node-click="nodeClick"
              @update="update"
              @save="save"
              @del="del"
            >
              <span slot-scope="{ node, data }" class="el-tree-node__label">
                <span>
                  <i class="el-icon-user-solid"></i>
                  {{ (node || {}).label }}
                </span>
              </span>
              <template slot-scope="scope" slot="menu">
                <div
                  class="avue-tree__item"
                  @click.native="tip(scope.node, scope.data)"
                >
                  自定义按钮
                </div>
              </template>
            </avue-tree>
          </template>
          <!-- <div slot="sourceCode">
            <pre>
              <code class="language-xml line-numbers">{{ codeSnippet }}</code>
            </pre>
          </div> -->
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
	name: 'Tree',
	// 过滤器
	filters: {},
	data() {
		return {
			title: ComponentSource.tree.title,
			subTitle: ComponentSource.tree.subTitle,
			effectDesc: ComponentSource.tree.effectDesc,
			scene: ComponentSource.tree.scene,
			anchorSource: ComponentSource.tree.anchor,
			codeSnippet: '',
			aVueValue: '我是内容',
			attributesSource: ComponentSource.tree.attributes,
			eventSource: ComponentSource.tree.events,
			form: {},
			loading: true,
			data: [
				{
					value: 0,
					label: '一级部门',
					children: [
						{
							value: 1,
							label: '一级部门1'
						},
						{
							value: 2,
							label: '一级部门2'
						}
					]
				},
				{
					value: 3,
					label: '二级部门',
					children: [
						{
							value: 4,
							label: '二级部门1'
						},
						{
							value: 5,
							label: '二级部门2'
						}
					]
				}
			],
			option: {
				title: '我是标题',
				filterText: '搜索关键字自定义',
				defaultExpandAll: true,
				formOption: {
					labelWidth: 100,
					column: [
						{
							label: '自定义项',
							prop: 'label'
						}
					]
				},
				props: {
					labelText: '标题',
					label: 'label',
					value: 'value',
					children: 'children'
				}
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
	mounted() {
		setTimeout(() => {
			this.loading = false
		}, 2000)
	},
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
		getPermission(key, data) {
			if (key === 'addBtn' && data.value === 0) {
				return false
			}
			return true
		},
		tip(node, data) {
			this.$message.success(JSON.stringify(data))
		},
		del(data, done) {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			})
				.then(() => {
					this.$message.success('删除回调')
					done()
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					})
				})
		},
		update(node, data, done, loading) {
			this.$message.success('更新回调')
			done()
		},
		save(node, data, done, loading) {
			this.$message.success('新增回调')
			this.form.id = new Date().getTime()
			this.form.value = new Date().getTime()
			this.form.children = []
			done()
		},
		nodeClick(data) {
			this.$message.success(JSON.stringify(data))
		},
		filterNodeMethod(value, data) {
			if (!value) return true
			return data.label.indexOf(value) !== -1
		}
	}
}
</script>
<style scoped></style>
