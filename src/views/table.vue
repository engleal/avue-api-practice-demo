<template>
	<div class="page-container">
		<rc-basic-content>
			<template slot="content">
				<rc-markdown
					:title="title"
					:subTitle="subTitle"
					:effectDesc="effectDesc"
					:scene="scene"
				></rc-markdown>
				<rc-code-card
					title="基本用法"
					desc="只设置data和option的最基本用法，option只包含column设置"
					id="JCYF"
				>
					<template slot="effect">
						<avue-crud v-model="form" :data="data" :option="option1"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.card"
					desc="option的card属性,设置将搜索区域和table区域呈现类似于卡片的模式。注意：需要设置column中最少一个对象为search:true或者设置option.seach对象存在值，不然搜索区域可能不展示"
					id="CPMS"
				>
					<template slot="effect">
						<avue-crud :data="data" :option="option2"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.searchShow"
					desc="option的searchShow属性,设置是否显示搜索区域，即使存在seach部分的form对象，如果seachShow为false,那么初始还是不显示"
					id="SEARCHSHOWYF"
				>
					<template slot="effect">
						<avue-crud :data="data" :option="option3"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.search"
					desc="设置option的search对象，等于设置seach部分的v-model的form初始数据"
					id="SEARCHYF"
				>
					<template slot="effect">
						<avue-crud
							:data="data"
							@update:search="handleInput"
							:option="option4"
						></avue-crud>
					</template>
					<!-- <div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div> -->
				</rc-code-card>
				<rc-code-card
					title="option.searchIcon和option.searchIndex"
					desc="option的searchIcon(布尔值)属性,设置是否启用收缩展开的功能，searchIndex属性,设置表示收缩时展示的个数"
					id="SEARCHICONANDSEARCHINDEXYF"
				>
					<template slot="effect">
						<avue-crud :data="data5" :option="option5"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.searchSpan"
					desc="option的searchSpan属性,设置搜索项的宽度。可以在option中设置，也可以设置option的column的对象中设置"
					id="SEARCHSPANYF"
				>
					<template slot="effect">
						<avue-crud :data="data" :option="option6"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.searchGutter"
					desc="option的searchGutter属性,设置搜索项的之间的宽度。可以在option中设置，也可以设置option的column的对象中设置"
					id="SEARCHGUTTERYF"
				>
					<template slot="effect">
						<avue-crud :data="data" :option="option7"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.searchLabelWidth"
					desc="option的searchLabelWidth属性,设置搜索项的label的宽度。可以在option中设置，也可以设置option的column的对象中设置"
					id="SEARCHLABELWIDTHYF"
				>
					<template slot="effect">
						<avue-crud :data="data" :option="option8"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.searchLabelPosition"
					desc="option的searchLabelPosition属性,设置搜索项的label的文字的位置。可以在option中设置，也可以设置option的column的对象中设置"
					id="SEARCHLABELPOSITIONYF"
				>
					<template slot="effect">
						<avue-crud :data="data" :option="option9"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.searchSize"
					desc="option的searchSize属性,设置搜索项的大小"
					id="SEARCHSIZEYF"
				>
					<template slot="effect">
						<avue-crud :data="data" :option="option10"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.searchBtn、searchBtnText、searchBtnIcon和option.emptyBtn、emptyBtnText、emptyBtnIcon"
					desc="option的searchBtn属性,设置是否显示提交按钮,searchBtnText属性设置提交按钮的文案,searchBtnIcon属性设置提交按钮的icon,emptyBtn同理"
					id="SEARCHSEARCHBTNANDEMPTYBTNYF"
				>
					<template slot="effect">
						<avue-crud :data="data" :option="option11"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.searchMenuSpan和option.searchMenuPosition"
					desc="option的searchMenuSpan属性,设置包提交按钮和清空按钮容器的大小(0-24);option的searchMenuPosition属性,设置提交按钮和清空按钮在容器中的摆放位置（left|center|right）"
					id="SEARCHMENUSPANANDSEARCHMENUPOSITIONYF"
				>
					<template slot="effect">
						<avue-crud :data="data" :option="option12"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.addBtn、printBtn、excelBtn和相关的按钮文案设置"
					desc="option的addBtn属性,设置是否显示增加的按钮;option的addBtnText属性,设置增加按钮的文案;其他同理"
					id="SEARCHADDBTNYF"
				>
					<template slot="effect">
						<avue-crud :data="data" :option="option15"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.dateBtn和option.refreshBtn"
					desc="option的dateBtn属性,设置是否显示date选择器;option的refreshBtn属性,设置是否显示刷新按钮;"
					id="SEARCHADDBTNYF"
				>
					<template slot="effect">
						<avue-crud :data="data" :option="option16"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.column.searchValue"
					desc="option的column子对象的searchValue属性,设置搜索的默认值"
					id="SEARCHCOLUMNSEARCHVALUEYF"
				>
					<template slot="effect">
						<avue-crud :data="data" :option="option13"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="option.column.searchRange"
					desc="option的column子对象的searchRange属性,只有当option.column子对象的type属性为date、datetime和time时才生效，意为开启范围选择"
					id="SEARCHCOLUMNSEARCHVALUEYF"
				>
					<template slot="effect">
						<avue-crud
							:data="data"
							:option="option14"
							@search-change="handleSearchChange"
						></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="附件上传"
					desc="option的column子对象的type=upload属性,设置upload-after进行结果的监听"
					id="SEARCHCOLUMNSEARCHVALUEYF"
				>
					<template slot="effect">
						<avue-crud
							ref="crud"
							:data="data17"
							:option="option17"
							@row-save="handleRowSave"
						></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="分页设置"
					desc="option.page(object)，设置分页参数。支持参数有page.total：总条数;page.pagerCount：超过多少条隐藏;page.currentPage：当前页码;page.pageSize：一页多少条;page.pageSizes：每页显示个数选择器的选项设置;page.layout：组件布局，子组件名用逗号分隔;page.background：是否为分页按钮添加背景色"
					id="OPTIONPAGE"
				>
					<template slot="effect">
						<avue-crud
							ref="crud"
							:data="data"
							:page="tablePage18"
							:option="option18"
							@row-save="handleRowSave"
						></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="配置checkbox"
					desc="option.colunmn的type的checkbox。通过dicData或者dicUrl进行配置数据源,通过column的对象props(object)配置label、value等字段对应的值。其他el-checkbox组件的属性都可以通过column对象传入"
					id="OPTIONTYPECHECKBOX"
				>
					<template slot="effect">
						<avue-crud
							ref="crud"
							:data="data19"
							:option="option19"
							@row-save="handleRowSave"
						></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
				<rc-code-card
					title="配置radio"
					desc="option.colunmn的type的radio。通过dicData或者dicUrl进行配置数据源,通过column的对象props(object)配置label、value、disabled等字段对应的值。border：是否显示边框"
					id="OPTIONTYPERADIO"
				>
					<template slot="effect">
						<avue-crud
							ref="crud"
							:data="data19"
							:option="option20"
							@row-save="handleRowSave"
						></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>
					<rc-code-card
					title="懒加载table"
					desc=""
					id=""
				>
					<template slot="effect">
						<avue-crud ref="crud" :option="option21" :data="data21" @tree-load="treeLoad" @row-save="rowSave" @row-update="rowUpdate"></avue-crud>
					</template>
					<div slot="source-code">
						<pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
					</div>
				</rc-code-card>

				<rc-table
					title="API 属性"
					id="ATTRIBUTES"
					:dataSource="attributesSource"
				></rc-table>
				<rc-table
					title="API option"
					id="OPTION"
					:dataSource="optionSource"
				></rc-table>
				<rc-table
					title="API option.column"
					id="COLUMNOPTION"
					:dataSource="columnOptionSource"
				></rc-table>
				<rc-table
					title="API 事件"
					id="EVENTS"
					:dataSource="eventSource"
				></rc-table>
			</template>
			<template slot="anchor">
				<rc-time-line :dataSource="anchorSource"></rc-time-line>
			</template>
		</rc-basic-content>
	</div>
</template>
<script>
import Prism from 'prismjs'
import ComponentSource from './index'
export default {
	name: 'Table',
	data() {
		return {
			title: ComponentSource.table.title,
			subTitle: ComponentSource.table.subTitle,
			effectDesc: ComponentSource.table.effectDesc,
			scene: ComponentSource.table.scene,
			anchorSource: ComponentSource.table.anchor,
			attributesSource: ComponentSource.table.attributes,
			optionSource: ComponentSource.table.option,
			columnOptionSource: ComponentSource.table.columnOption,
			eventSource: ComponentSource.table.events,
			codeSnippet: `<avue-crud :data="data" :option="option"></avue-crud>`,
			data: [
				{
					name: '张三',
					age: '18'
				}
			],
			option1: {
				column: [
					{
						label: '姓名',
						prop: 'name',
						addDisplay:true
					},
					{
						label: '年级',
						prop: 'age'
					}
				]
			},
			form:{},
			option2: {
				card: true,
				
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true,
						searchLabelWidth:120,
					},
					{
						label: '年级',
						prop: 'age',
						search: true,
						searchLabelWidth:110,
					}
				]
			},
			option3: {
				searchShow: false,
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true
					},
					{
						label: '年级',
						prop: 'age',
						search: true
					}
				]
			},
			option4: {
				search: {
					name: 'gan',
					age: 18 + ''
				},
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true
					},
					{
						label: '年龄',
						prop: 'age',
						search: true
					}
				]
			},
			option5: {
				searchIcon: true,
				searchIndex: 3,
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true
					},
					{
						label: '年龄',
						prop: 'age',
						search: true
					},
					{
						label: '性别',
						prop: 'sex',
						search: true
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true
					}
				]
			},
			data5: [
				{
					name: '张三',
					age: '18',
					sex: '男',
					hobby: '游戏'
				}
			],
			option6: {
				searchSpan: 16,
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true,
						searchSpan: 6
					},
					{
						label: '年龄',
						prop: 'age',
						search: true
					},
					{
						label: '性别',
						prop: 'sex',
						search: true
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true
					}
				]
			},
			option7: {
				searchGutter: 44,
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true,
						gutter: 24
					},
					{
						label: '年龄',
						prop: 'age',
						search: true,
						gutter: 34
					},
					{
						label: '性别',
						prop: 'sex',
						search: true,
						gutter: 44
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true
					}
				]
			},
			option8: {
				searchLabelWidth: 100,
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true,
						searchLabelWidth: 60
					},
					{
						label: '年龄',
						prop: 'age',
						search: true
					},
					{
						label: '性别',
						prop: 'sex',
						search: true
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true
					}
				]
			},
			option9: {
				searchLabelPosition: 'left',
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true,
						searchLabelPosition: 'center'
					},
					{
						label: '年龄',
						prop: 'age',
						search: true
					},
					{
						label: '性别',
						prop: 'sex',
						search: true
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true
					}
				]
			},
			option10: {
				searchSize: 'mini',
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true
					},
					{
						label: '年龄',
						prop: 'age',
						search: true
					},
					{
						label: '性别',
						prop: 'sex',
						search: true
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true
					}
				]
			},
			option11: {
				searchBtnText: '提交文字',
				searchBtn: true,
				searchBtnIcon: 'el-icon-upload2',
				emptyBtnText: '重置文字',
				emptyBtn: true,
				emptyBtnIcon: 'el-icon-download',
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true
					},
					{
						label: '年龄',
						prop: 'age',
						search: true
					},
					{
						label: '性别',
						prop: 'sex',
						search: true
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true
					}
				]
			},
			option12: {
				searchMenuSpan: 8,
				searchMenuPosition: 'left',
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true
					},
					{
						label: '年龄',
						prop: 'age',
						search: true
					},
					{
						label: '性别',
						prop: 'sex',
						search: true
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true
					}
				]
			},
			option13: {
				searchSpan: 16,
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true,
						searchValue: 'gan'
					},
					{
						label: '年龄',
						prop: 'age',
						search: true,
						searchValue: 18
					},
					{
						label: '性别',
						prop: 'sex',
						search: true,
						searchValue: '男'
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true,
						searchValue: '小说'
					}
				]
			},
			option14: {
				searchSpan: 16,
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true,
						searchValue: 'gan'
					},
					{
						label: '年龄',
						prop: 'age',
						search: true,
						searchValue: 18
					},
					{
						label: '性别',
						prop: 'sex',
						search: true,
						searchValue: '男'
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true,
						searchValue: '小说'
					},
					{
						label: '时间',
						prop: 'date',
						type: 'date',
						hide: true,
						search: true,
						searchRange: true
					}
				]
			},
			option15: {
				addBtnText: '增加数据',
				printBtn: true,
				// printBtnText: "打印数据",
				excelBtn: true,
				// excelBtnText: "转化EXCEL",
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true,
						searchValue: 'gan'
					},
					{
						label: '年龄',
						prop: 'age',
						search: true,
						searchValue: 18
					},
					{
						label: '性别',
						prop: 'sex',
						search: true,
						searchValue: '男'
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true,
						searchValue: '小说'
					},
					{
						label: '时间',
						prop: 'date',
						type: 'date',
						hide: true,
						search: true,
						searchRange: true
					}
				]
			},
			option16: {
				dateBtn: true,
				refreshBtn: true,
				columnBtn: true,
				filterBtn: true,
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true,
						searchValue: 'gan'
					},
					{
						label: '年龄',
						prop: 'age',
						search: true,
						searchValue: 18
					},
					{
						label: '性别',
						prop: 'sex',
						search: true,
						searchValue: '男'
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true,
						searchValue: '小说'
					},
					{
						label: '时间',
						prop: 'date',
						type: 'date',
						hide: true,
						search: true,
						searchRange: true
					}
				]
			},
			data17: [
				{
					icon: 'el-icon-platform-eleme',
					color: 'rgba(201, 37, 37, 1)',
					array: '1,2,3',
					video: '/images/logo-bg.jpg',
					href: 'https://www.baidu.com',
					string: '/images/logo-bg.jpg,/images/logo-bg.jpg',
					img:
						'https://avuejs.com/images/logo-bg.jpg,https://avuejs.com/images/logo-bg.jpg'
				}
			],
			option17: {
				viewBtn: true,
				align: 'center',
				menuAlign: 'center',
				border: true,
				addBtnText: '添加',
				column: [
					{
						label: '超链接',
						prop: 'href',
						type: 'url',
						addDisplay: true
					},
					{
						label: '图标',
						prop: 'icon',
						type: 'icon'
					},
					{
						label: '颜色',
						prop: 'color',
						type: 'color'
					},
					{
						label: '单图',
						prop: 'video',
						type: 'upload',
						listType: 'picture-img',
						span: 24,
						propsHttp: {
							home: 'https://avuejs.com'
						},
						tip: '只能上传jpg/png用户头像，且不超过500kb',
						action: '/imgupload',
						uploadBefore: () => {},
						uploadAfter: (res, show) => {
							console.log('res', res)
							show && show()
						}
					},
					{
						label: '图片',
						prop: 'img',
						dataType: 'string',
						type: 'img'
					},
					{
						label: '图片上传组件',
						prop: 'string',
						dataType: 'string',
						type: 'upload',
						propsHttp: {
							home: 'https://avuejs.com',
							res: 'data'
						},
						span: 24,
						listType: 'picture-card',
						tip: '只能上传jpg/png文件，且不超过500kb',
						action: '/imgupload'
					},
					{
						label: '数组',
						prop: 'array',
						dataType: 'number',
						propsHttp: {
							home: 'http://demo.cssmoban.com'
						},
						type: 'array'
					}
				]
			},
			option18: {
				searchSpan: 16,
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true,
						searchValue: 'gan'
					},
					{
						label: '年龄',
						prop: 'age',
						search: true,
						searchValue: 18
					},
					{
						label: '性别',
						prop: 'sex',
						search: true,
						searchValue: '男'
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true,
						searchValue: '小说'
					},
					{
						label: '时间',
						prop: 'date',
						type: 'date',
						hide: true,
						search: true,
						searchRange: true
					}
				]
			},
			tablePage18: {
				total: 18, // 总页数
				pagerCount: 7, //超过多少条隐藏
				currentPage: 1, // 当前页数
				pageSize: 10, // 每页显示多少条
				pageSizes: [10, 20, 30, 40, 50, 100],
				layout: 'total, sizes, prev, pager, next, jumper',
				background: true // 背景颜色
			},
			data19: [
				{
					name: '张三',
					age: '18',
					sex: '男',
					hobby: '游戏'
				}
			],
			option19: {
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true
					},
					{
						label: '年龄',
						prop: 'age',
						search: true
					},
					{
						label: '性别',
						prop: 'sex',
						search: true
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true,
						type: 'checkbox',
						//  配置数据源
						dicData: [
							{
								name: '游戏',
								id: 'game'
							},
							{
								name: '电影',
								id: 'movie'
							},
							{
								name: '音乐',
								vaidlue: 'mosic'
							}
						],
						props: {
							label: 'name',
							value: 'id'
						}
					}
				]
			},
			option20: {
				column: [
					{
						label: '姓名',
						prop: 'name',
						search: true
					},
					{
						label: '年龄',
						prop: 'age',
						search: true
					},
					{
						label: '性别',
						prop: 'sex',
						search: true,
						type: 'radio',
						dicData: [
							{
								text: '男',
								value: 'man'
							},
							{
								text: '女',
								value: 'woman'
							}
						],
						props: {
							label: 'text',
							value: 'value'
						}
					},
					{
						label: '爱好',
						prop: 'hobby',
						search: true,
						type: 'checkbox',
						//  配置数据源
						dicData: [
							{
								name: '游戏',
								id: 'game'
							},
							{
								name: '电影',
								id: 'movie'
							},
							{
								name: '音乐',
								vaidlue: 'mosic'
							}
						],
						props: {
							label: 'name',
							value: 'id'
						}
					}
				]
			},
			option21:{
        lazy:true,
        rowKey:'id',
        column:[{
          label:'ID',
          prop:'id'
        },{
          label:'姓名',
          prop:'name'
        },{
          label:'日期',
          prop:'date'
        },{
          label:'地址',
          prop:'address',
          overHidden:true
        }]
      },
      data21: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
			}]
		}
	},
	// 方法合集
	methods: {
		handleInput(form) {
			console.log('search-form', form)
		},
		handleSearchChange(form, done) {
			console.log('handleSearchChange-form', form)
			console.log('handleSearchChange-done', done)
		},
		handleRowSave(row, done, loading) {
			console.log('handleRowSave', row, done, loading)
		},
		handleUploadAfter(res, done, loading, column) {
			console.log('handleUploadAfter', res, done, loading, column)
		},
		 rowSave(row,done){
      row.id = new Date().getTime();
      done(row);
    },
    rowUpdate(row,index,done){
        done(row);
    },
    treeLoad(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([{
            id: new Date().getTime(),
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            hasChildren: true
          }
        ])
      }, 1000)
    }
	},
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
	// 计算属性 一个数据受多个数据影响
	computed: {},
	// 监听属性 一个数据影响多个数据
	watch: {},
	// 过滤器
	filters: {}
}
</script>
<style scoped></style>
