const titleSource = 'avue-input-icon'

const subTitleSource = '图标选择输入框'

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: ['选择小图标时可以使用']
}

const attributesList = [
	{
		attribute: 'placeholder',
		desc: '输入框占位文本',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'size',
		desc: '输入框尺寸',
		dataType: 'string',
		params: '-',
		value: 'medium / small / mini',
		defaultValue: '-'
	},
	{
		attribute: 'disabled',
		desc: '禁用',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'clearable',
		desc: '是否可清空',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'readonly',
		desc: '是否只读',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'iconList',
		desc: '初始的图片的数组',
		dataType: 'array',
		params: '-',
		value: '-',
		defaultValue: '[]'
	},
	{
		attribute: 'change',
		desc: '-',
		dataType: 'function',
		params: '-',
		value: '-',
		defaultValue: '-'
	}
]

const eventsList = [
	{
		attribute: 'change',
		desc: '-',
		dataType: 'function',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'input',
		desc: '-',
		dataType: 'function',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'click',
		desc: '-',
		dataType: 'function',
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
		name: 'API 事件',
		anchorPoint: '#EVENTS'
	}
]

export const InputIconData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
