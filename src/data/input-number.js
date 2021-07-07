const titleSource = 'avue-input-number'

const subTitleSource = '数字输入框'

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: ['常用于购物车点击下单多件的场景使用']
}

const attributesList = [
	{
		attribute: 'precision',
		desc: '数值精度，也就是几位小数',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'placeholder',
		desc: '输入框默认 placeholder',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'size',
		desc: '计数器尺寸',
		dataType: 'string',
		params: '-',
		value: 'large/small',
		defaultValue: '-'
	},
	{
		attribute: 'minRows',
		desc: '设置计数器允许的最小值',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '-Infinity'
	},
	{
		attribute: 'maxRows',
		desc: '设置计数器允许的最大值',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: 'Infinity'
	},
	{
		attribute: 'step',
		desc: '计数器步长',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '1'
	},
	{
		attribute: 'disabled',
		desc: '是否禁用计数器',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'controlsPosition',
		desc: '控制按钮位置',
		dataType: 'string',
		params: '-',
		value: 'right',
		defaultValue: '-'
	},
	{
		attribute: 'controls',
		desc: '是否使用控制按钮',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	}
]

const eventsList = [
	{
		attribute: 'focus',
		desc: '聚焦函数',
		dataType: 'function',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'focus',
		desc: '获得聚焦函数',
		dataType: 'function',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'blur',
		desc: '失去焦点函数',
		dataType: 'function',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'click',
		desc: '数字输入框点击输入框',
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

export const InputNumberData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
