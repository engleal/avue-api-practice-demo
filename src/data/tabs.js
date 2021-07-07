const titleSource = 'avue-tabs'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'option',
		desc: 'tab配置对象，参见下方API option',
		dataType: 'object',
		params: '-',
		value: '-',
		defaultValue: '{}'
	}
]

const optionList = [
	{
		attribute: 'positon',
		desc: '选项卡所在位置',
		dataType: 'string',
		params: '-',
		value: 'top/right/bottom/left',
		defaultValue: 'top'
	},
	{
		attribute: 'type',
		desc: 'tab风格类型',
		dataType: 'string',
		params: '-',
		value: 'card/border-card',
		defaultValue: '-'
	},
	{
		attribute: 'column',
		desc: 'tab的子项的配置对象，参见下面的API option.column',
		dataType: 'array',
		params: '-',
		value: '-',
		defaultValue: '[]'
	}
]

const columnList = [
	{
		attribute: 'icon',
		desc: 'tab的切换栏目的icon',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: ''
	},
	{
		attribute: 'label',
		desc: 'tab的切换栏目的显示文字',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'disabled',
		desc: 'tab的切换栏目是否被禁用',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: '-'
	}
]

const eventsList = [
	{
		attribute: 'change',
		desc: 'tab发生切换的触发函数',
		dataType: 'function',
		params: '-',
		value: '1、tabsObj:column的某个对象',
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

export const TabsData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	attributeOption: optionList,
	attributeColumn: columnList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
