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
            <el-form :inline="true">
              <el-form-item label="输入框1">
                <el-input
                  id="text"
                  ref="text"
                  v-model="text"
                  placeholder="点击我，完后用虚拟键盘输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="输入框2">
                <el-input
                  id="text2"
                  ref="text2"
                  v-model="text2"
                  placeholder="点击我，完后用虚拟键盘输入"
                ></el-input>
              </el-form-item>
            </el-form>
            <avue-keyboard
              ref="kb"
              :ele="ele"
              :keys="keys"
              :fixed-bottom-center="true"
              theme="green"
              style="width: 800px; height: 300px"
              @click="handleKeyboardClick"
            ></avue-keyboard>
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
	name: 'Keyboard',
	// 过滤器
	filters: {},
	data() {
		return {
			title: ComponentSource.keyboard.title,
			subTitle: ComponentSource.keyboard.subTitle,
			effectDesc: ComponentSource.keyboard.effectDesc,
			scene: ComponentSource.keyboard.scene,
			anchorSource: ComponentSource.keyboard.anchor,
			codeSnippet: '',
			aVueValue: '我是内容',
			attributesSource: ComponentSource.keyboard.attributes,
			eventSource: ComponentSource.keyboard.events,
			text: '',
			text2: '',
			ele: 'text',
			keys: [
				['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
				['a', 'b', 'c', 'd', 'Shift', '清空']
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
	mounted() {
		this.$refs.text.focus()
		// 自定义按键绑定click
		this.$refs.kb.bindClick('清空', () => {
			this[this.ele] = ''
		})

		// 模拟更换输入框
		setTimeout(() => {
			this.ele = 'text2'
		}, 5000)
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
		// 键盘点击
		handleKeyboardClick(key, val) {
			this[this.ele] = val
		}
	}
}
</script>
<style scoped></style>
