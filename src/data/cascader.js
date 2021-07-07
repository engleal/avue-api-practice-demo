const titleSource = 'avue-cascader'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'options',
		desc: '数据源',
		dataType: 'array',
		params: '-',
		value: `[{value: "",label: "",children:[]}]`,
		defaultValue: '-'
	},
	{
		attribute: 'value / v-model',
		desc: '选中项绑定的值',
		dataType: 'array',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'placeholder',
		desc:
			'输入框占位文本(element的默认值为请选择，avue的默认值为空，所以必须手动指定不然就是空)',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: ''
	},
	{
		attribute: 'size',
		desc: '尺寸',
		dataType: 'string',
		params: '-',
		value: 'medium/small/mini',
		defaultValue: '-'
	},
	{
		attribute: 'emitPath',
		desc:
			'在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	},
	{
		attribute: 'clearable',
		desc: '是否显示清空的图标',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'expandTrigger',
		desc: '次级菜单的打开方式',
		dataType: 'string',
		params: '-',
		value: 'hover/click',
		defaultValue: 'hover'
	},
	{
		attribute: 'showAllLevels',
		desc: '是否显示完整的路径还是显示最后一级,默认完整显示',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	},
	{
		attribute: 'filterable',
		desc: '是否打开搜索功能,默认打开',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	},
	{
		attribute: 'separator',
		desc: '选项分隔符',
		dataType: 'string',
		params: '-',
		value: '',
		defaultValue: '/'
	},
	{
		attribute: 'disabled',
		desc: '是否禁用input，禁用clearable将为false，即使设置了值',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'tags',
		desc: '多选模式有效，表示是否折叠多个选项只保留一个显示,默认不折叠',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'changeOnSelect',
		desc:
			'取消父子节点的关联。多选模式下，能否只选择某个节点，而不是选择整个节点链，默认不断开',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	}
]

const eventsList = []

const anchorSource = [
	{
		name: '基本用法',
		anchorPoint: '#JCYF'
	},
	{
		name: 'API 属性',
		anchorPoint: '#ATTRIBUTES'
	}
	// {
	//     name: "API 事件",
	//     anchorPoint: "#EVENTS"
	// }
]

export const CascaderData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
