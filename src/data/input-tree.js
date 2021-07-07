const titleSource = 'avue-input-tree'

const subTitleSource = '选择输入框'

const effectDescSource = '点击选择一个tree型数据，支持单选和多选'

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: ['当数据像树一样的结构时，想要获取最深层的子数据时使用']
}

const attributesList = [
	{
		attribute: 'value',
		desc: '绑定值',
		dataType: '',
		params: '-',
		value: '',
		defaultValue: '-'
	},
	{
		attribute: 'lazy',
		desc: '是否懒加载子节点，需与 load 方法结合使用',
		dataType: 'Boolean',
		params: '-',
		value: '-',
		defaultValue: 'false'
	},
	{
		attribute: 'leafOnly',
		desc:
			'是否只是叶子节点,影响tree组件选中节点之后的返回值是否只是叶子节点的值',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'tags',
		desc: '多选时是否将选中值按文字的形式展示',
		dataType: 'Boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'limit',
		desc: '多选时用户最多可以选择的项目数，为 0 则不限制',
		dataType: 'Number',
		params: '-',
		value: '-',
		defaultValue: '0'
	},
	{
		attribute: 'size',
		desc: '输入框尺寸',
		dataType: 'string',
		params: '-',
		value: 'medium/small/mini',
		defaultValue: '-'
	},
	{
		attribute: 'multiple',
		desc: '是否支持多选，当multiple为true时，将开启tree组件的showCheckBox属性',
		dataType: 'Boolean',
		params: '-',
		value: 'treu/false',
		defaultValue: 'false'
	},
	{
		attribute: 'expandOnClickNode',
		desc:
			'是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
		dataType: 'Boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	},
	{
		attribute: 'filter',
		desc: '是否开启过滤模式',
		dataType: 'Boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	},
	{
		attribute: 'filterText',
		desc: '当filter为true时生效，过滤模式下的占位符',
		dataType: 'String',
		params: '-',
		value: '-',
		defaultValue: '输入关键字进行过滤'
	},
	{
		attribute: 'checkStrictly',
		desc:
			'在multiple为true的情况下，是否严格的遵循父子不互相关联的做法，默认为 false',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'accordion',
		desc: '是否每次只打开一个同级树节点展开',
		dataType: 'Boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'parent',
		desc:
			'是否不禁用父类选中，此情况只在dic属性中children的属性值为有值时才生效，将会影响dic属性的每个对象，默认添加$parent属性',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	},
	{
		attribute: 'defaultExpandedKeys',
		desc: '默认展开的节点的 key 的数组',
		dataType: 'array',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'iconClass',
		desc: '自定义树节点的图标',
		dataType: 'String',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'defaultCheckedKeys',
		desc: '默认勾选的节点的 key 的数组',
		dataType: 'array',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'defaultExpandAll',
		desc: '是否默认展开所有节点',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'typeformat',
		desc:
			'影响select控件的value属性，是一个函数用来处理选中数据显示的值。比如你选中了某一项，你可以应用这个函数对这个值进行自定义显示，比如结果 + -- 之类的',
		dataType: 'Function',
		params: '1、item:dic的每一项 2、option的label属性值 3、option的value属性',
		value: '',
		defaultValue: '-'
	},
	{
		attribute: 'separator',
		desc: '',
		dataType: 'string',
		params: '-',
		value: '',
		defaultValue: '-'
	},
	{
		attribute: 'disabled',
		desc: '是否禁用',
		dataType: 'Boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'dataType',
		desc: '数据类型',
		dataType: 'string',
		params: '-',
		value: 'array/string/number',
		defaultValue: '-'
	},
	{
		attribute: 'clearable',
		desc: '是否可以清空选项',
		dataType: 'Boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'dic',
		desc: '展示数据',
		dataType: 'Array',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'placeholder',
		desc: '占位符',
		dataType: 'String',
		params: '-',
		value: '-',
		defaultValue: '请选择'
	},
	{
		attribute: 'props',
		desc: 'dic展示数据的数据的配置项，见下表',
		dataType: 'Object',
		params: '-',
		value: '-',
		defaultValue: '{}'
	},
	{
		attribute: 'nodeClick',
		desc: '',
		dataType: 'Function',
		params: '-',
		value: '',
		defaultValue: '-'
	},
	{
		attribute: 'treeLoad',
		desc:
			'只有当lazy为true时才生效。tree节点加载数据钩子函数，注意要调用callBack函数,callBack做了数据返回的操作',
		dataType: 'Function',
		params: '1、node:节点 2、callBack：回调函数',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'checked',
		desc: 'tree控件的值发生变化时触发的钩子函数',
		dataType: 'Function',
		params:
			'1、checkedNodes:选中的节点 2、checkedKeys:选中的key 3、halfCheckedNodes 4、halfCheckedKeys ',
		value: '-',
		defaultValue: '-'
	}
]

const attributeOptionList = [
	{
		attribute: 'label',
		desc: '指定节点标签为节点对象的某个属性值',
		dataType: 'string, function(data, node)',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'children',
		desc: '指定子树为节点对象的某个属性值',
		dataType: '-',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'disabled',
		desc: '指定节点选择框是否禁用为节点对象的某个属性值',
		dataType: 'boolean, function(data, node)',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'isLeaf',
		desc: '指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效',
		dataType: 'boolean, function(data, node)',
		params: '-',
		value: '-',
		defaultValue: '-'
	}
]

const eventsList = [
	{
		attribute: 'focus',
		desc: '	当 input 获得焦点时触发',
		dataType: 'Function',
		params: 'event',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'blur',
		desc: '当 input 失去焦点时触发',
		dataType: 'Function',
		params: 'event',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'click',
		desc: '当 select 被点击时触发',
		dataType: 'function',
		params: 'event',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'input',
		desc: '当tree控件的值发生改变时触发',
		dataType: 'function',
		params: '1、result：选中的结果',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'change',
		desc: '当tree控件的值发生改变时触发',
		dataType: 'function',
		params: '1、result：选中的结果',
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
		name: 'API 事件',
		anchorPoint: '#EVENTS'
	}
]

export const InputTreeData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	attributeOption: attributeOptionList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
