const titleSource = 'avue-crud'

const subTitleSource = '表格组件'

const effectDescSource = '表格展示组件'

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: ['需要展示表格数据的']
}

const attributesList = [
	{
		attribute: 'option',
		desc: '表格配置对象，参看下方option配置',
		dataType: 'object',
		params: '-',
		value: `option={
            // 函数或者字符串 行数据的key，优化table渲染，可以使用Function(row)或者String
            rowKey:"",
            // 布尔值 不确定性 默认false
            indeterminate:false
            // 字符串 table大小 默认值 small medium/small/mini
            size:'medium',
            // 布尔值 是否懒加载子节点数据 默认值false
            lazy:true,
            // 数组 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。 
            // 对象 渲染嵌套数据的配置选项 默认值 { hasChildren: 'hasChildren', children: 'children' }
            treeProps:{ hasChildren: 'hasChildren', children: 'children' }
            expandRowKeys:[],
            // 布尔值 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 布尔值 默认值 false
            defaultExpandAll:false,
            // 布尔值 是否要高亮当前行 默认false
            highlightCurrentRow:false,
            // 布尔值 是否在表尾显示合计行 默认值 false
            showSummary:false,
            // 布尔值 是否显示斑马纹 默认值false
            stripe:false,
            // 布尔值 是否显示表头 默认值 true
            showHeader:true,
            // 对象 默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序 {prop:"xxx",order:ascending | descending}
            defaultSort:{},
            // 布尔值 列的宽度是否自撑开 默认值 true
            fit:true,
            // 字符串或者数字 table高度，默认为 'auto'高度自动
            height:'auto',
            // 字符串或者数字 table最大高度
            maxHeight:"auto"
            // 字符串或者数字 table宽度 默认100%
            width:'100%',
            // 布尔值 是否带有纵向边框 默认值 false
            border:false,
            // 字符串 空数据文字 默认值为空
            emptyText:"",
            // 对象 page对象
            page:{

            },
            // 列表项
            column:[
                {
                    // 字符串 显示的标题
                    label:"",
                    // 字符串 最小宽度
                    minWidth:'',
                    // 字符串 el-table-column的宽度
                    width:"",
                    // 函数 列标题 Label 区域渲染使用的 Function
                    renderHeader:()=>{},
                    // 字符串 对齐方式 left/center/right 默认值left
                    align:"center",
                    // 字符串 表头对齐方式，若不设置该项，则使用表格的对齐方式	left/center/right
                    headerAlign:"center"
                    // 字符串 对应列内容的字段名，也可以使用 property 属性
                    prop:"",

                }
            ]
        }`,
		defaultValue: '-'
	},
	{
		attribute: 'sortBy',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'sortOrders',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'sortMethod',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'spanMethod',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'summaryMethod',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'rowStyle',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'cellStyle',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'beforeClose',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'beforeOpen',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'rowClassName',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'cellClassName',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'headerCellClassName',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'uploadBefore',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'uploadAfter',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'uploadDelete',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'uploadPreview',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'uploadError',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'uploadExceed',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'permission',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'value',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'showColumn',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'search',
		desc: '关于搜索区域的配置',
		dataType: 'object',
		params: '-',
		value: `searchObject={

        }`,
		defaultValue: '-'
	},
	{
		attribute: 'page',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'tableLoading',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'disabled',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	},
	{
		attribute: 'data',
		desc: '',
		dataType: '',
		params: '-',
		value: ``,
		defaultValue: '-'
	}
]

const eventsList = [
	{
		attribute: 'search-change',
		desc: '搜索事件',
		dataType: 'function',
		params: '-',
		value: '1、form：搜索部分的form参数 2、done:',
		defaultValue: '(form,done) => { }'
	},
	{
		attribute: 'search-reset',
		desc: '重置事件',
		dataType: 'function',
		params: '-',
		value: '1、form：搜索部分的form参数',
		defaultValue: '(form) => { }'
	}
]

const optionList = [
	{
		attribute: 'card',
		desc: '是否显示成卡片模式',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'searchShow',
		desc: '初始是否显示seach区域',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	},
	{
		attribute: 'seach',
		desc:
			'是search部分的form结构，search部分是由一个form组成的这个就是这个form的v-model 暂时未测验成功',
		dataType: 'object',
		params: '-',
		value: '-',
		defaultValue: '{}'
	},
	{
		attribute: 'searchIcon',
		desc: '是否启用展开收缩按钮需要和seachIndex配合使用 默认值false',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'searchIndex',
		desc: '配置收缩时候的展示的个数 默认为2',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '2'
	},
	{
		attribute: 'searchSpan',
		desc: '设置搜索项的宽度，范围为0-24 默认值6',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '6'
	},
	{
		attribute: 'searchGutter',
		desc: '设置搜索项的之间的间隔宽度 未实验成功',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: ''
	},
	{
		attribute: 'searchLabelWidth',
		desc: '设置搜索项的label的宽度 默认值80',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '80'
	},
	{
		attribute: 'searchLabelPosition',
		desc: '设置搜索项的label的文字的摆放位置是左是中还是右 默认值right',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: 'right'
	},
	{
		attribute: 'searchCheckStrictly',
		desc: '是否严格的遵守父子节点不互相关联 默认值false 未测试',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'searchSize',
		desc: '设置搜索项的大小 范围为medium/small/mini',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: ''
	},
	{
		attribute: 'searchBtnText',
		desc: '提交按钮文案',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: 'search'
	},
	{
		attribute: 'searchBtnIcon',
		desc: '提交按钮的icon',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: ''
	},
	{
		attribute: 'searchBtn',
		desc: '是否显示提交按钮',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	},
	{
		attribute: 'emptyBtnText',
		desc: '清空按钮文案',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: 'empty'
	},
	{
		attribute: 'emptyBtnIcon',
		desc: '清空按钮的icon',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: ''
	},
	{
		attribute: 'emptyBtn',
		desc: '是否显示清空按钮',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	},
	{
		attribute: 'searchMenuSpan',
		desc: '设置包提交按钮和清空按钮容器的大小(0-24) 默认值24',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '24'
	},
	{
		attribute: 'searchMenuPosition',
		desc:
			'设置提交按钮和清空按钮在容器中的摆放位置（left|center|right）默认值left',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: 'center'
	},
	{
		attribute: 'searchEnter',
		desc: '是否开启回车事件',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'enter',
		desc: '是否开启回车事件',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'addBtn',
		desc: '是否显示增加的按钮',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'addBtnText',
		desc: '增加按钮文字',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: 'add'
	},
	{
		attribute: 'dateBtn',
		desc: '是否显示date选择器',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'printBtn',
		desc: '是否显示打印按钮',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'printBtnText',
		desc: '打印按钮的文案',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: 'print'
	},
	{
		attribute: 'excelBtn',
		desc: '是否显示转excel按钮',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'excelBtnText',
		desc: '转化成excel按钮的文案',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: 'excel'
	},
	{
		attribute: 'refreshBtn',
		desc: '是否显示刷新按钮',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'columnBtn',
		desc: '是否显示侧边栏的穿梭框按钮',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'searchShowBtn',
		desc: '是否显示操控搜索区域的按钮',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'filterBtn',
		desc: '',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},

	{
		attribute: 'addTitle',
		desc: '点击新增按钮时候，dialog-from的标题',
		dataType: 'string',
		params: '-',
		value: '',
		defaultValue: ''
	},
	{
		attribute: 'viewTitle',
		desc: '点击查看按钮时候，dialog-from的标题',
		dataType: 'string',
		params: '-',
		value: '',
		defaultValue: ''
	},
	{
		attribute: 'editTitle',
		desc: '点击编辑按钮时候，dialog-from的标题',
		dataType: 'string',
		params: '-',
		value: '',
		defaultValue: ''
	},

	{
		attribute: '',
		desc: '',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: ''
	},
	{
		attribute: '',
		desc: '',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: ''
	},
	{
		attribute: '',
		desc: '',
		dataType: 'array',
		params: '-',
		value: '-',
		defaultValue: '[]'
	}
]

const columnOptionList = [
	{
		attribute: 'search',
		desc: '一旦配置search为true，此对象将作为搜索区域的某一项进行展示',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'type',
		desc: '配置form组件的类型，可以为value类型值',
		dataType: 'string',
		params: '-',
		value:
			'img|array|url|time|timerange|dates|date|datetime|datetimerange|daterange|time|timerange|week|month|monthrange|year|password|textarea|search|tree|number|icon|color|table|map|select|checkbox|cascader|radio|upload',
		defaultValue: '-'
	},
	{
		attribute: 'searchRange',
		desc: '当type为date,datetime,time时有效，意为是否开启范围搜索',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'searchSpan',
		desc: '同option.searchSpan',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchGutter',
		desc: '同option.searchGutter',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchLabelWidth',
		desc: '同option.searchLabelWidth',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchLabelPosition',
		desc: '同option.searchLabelPosition',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchTip',
		desc: '搜索提示内容',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'placeholder',
		desc: '提示内容',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'label',
		desc: 'form对象的label标题',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchPlaceholder',
		desc: '如果type等于search时生效，效果等同于placeholder',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'filterable',
		desc: '',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: '-'
	},
	{
		attribute: 'minWidth',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'width',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'align',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'headerAlign',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'prop',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'display',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'hide',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchTipPlacement',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchFilterMethod',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchCheckStrictly',
		desc: '同option.searchCheckStrictly',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchTags',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'tags',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchRow',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'row',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchSize',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'size',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchClearable',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'clearable',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchRules',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'rules',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchDisabled',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'disabled',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchReadonly',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'readonly',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'searchValue',
		desc: '搜索部分的默认值',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'value',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: '',
		desc: '',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: '',
		desc: '',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: ''
	},
	{
		attribute: '',
		desc: '',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: ''
	},
	{
		attribute: '',
		desc: '',
		dataType: 'array',
		params: '-',
		value: '-',
		defaultValue: '[]'
	}
]

const slotSource = [
	{
		attribute: 'menuLeft',
		desc:
			'搜索区域下面列表上面的按钮操作区域的左边自定义区域，可以塞入你想要的塞的东西',
		dataType: '-',
		params: '-',
		value: '-',
		defaultValue: '-'
	}
]

const anchorSource = [
	{
		name: '基本用法',
		anchorPoint: '#JCYF'
	},
	{
		name: 'API 属性',
		anchorPoint: '#ATTRIBUTES'
	},
	{
		name: 'API option',
		anchorPoint: '#OPTION'
	},
	{
		name: 'API option.column',
		anchorPoint: '#COLUMNOPTION'
	},
	{
		name: 'API 事件',
		anchorPoint: '#EVENTS'
	}
]

export const TableData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	option: optionList,
	columnOption: columnOptionList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
