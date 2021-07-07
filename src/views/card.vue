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
            <avue-card
              :option="option"
              :data="data"
              @row-click="tip"
              @row-add="tip"
            >
              <template slot="menu" slot-scope="scope">
                <span @click.stop="tip(scope.row, scope.index)">操作1</span>
                <span @click.stop="tip(scope.row, scope.index)">操作2</span>
              </template>
            </avue-card>
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
	name: 'Card',
	// 过滤器
	filters: {},
	data() {
		return {
			title: ComponentSource.card.title,
			subTitle: ComponentSource.card.subTitle,
			effectDesc: ComponentSource.card.effectDesc,
			scene: ComponentSource.card.scene,
			anchorSource: ComponentSource.card.anchor,
			codeSnippet: '',
			attributesSource: ComponentSource.card.attributes,
			eventSource: ComponentSource.card.events,
			option: {
				// addBtn:false,
				props: {
					img: 'img',
					title: 'title',
					info: 'text'
				}
			},
			data: [
				{
					title: 'Alipay',
					text:
						'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
					img:
						'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
				},
				{
					title: 'Angular',
					text:
						'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
					img:
						'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png'
				},
				{
					title: 'Ant Design',
					text:
						'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
					img:
						'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png'
				},
				{
					title: 'Ant Design Pro',
					text:
						'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
					img:
						'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png'
				},
				{
					title: 'Bootstrap',
					text:
						'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
					img:
						'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png'
				},
				{
					title: 'React',
					text:
						'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
					img:
						'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png'
				},
				{
					title: 'Vue',
					text:
						'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
					img:
						'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png'
				},
				{
					title: 'Webpack',
					text:
						'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
					img:
						'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
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
		tip(row, index) {
			this.$message.success('查看控制台')
			console.log(row, index)
		}
	}
}
</script>
<style scoped></style>
