const titleSource = 'avue-slider'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'disabled',
		desc: '是否禁用',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'step',
		desc: '步长',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '1'
	},
	{
		attribute: 'min',
		desc: '最小值',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '0'
	},
	{
		attribute: 'max',
		desc: '最大值',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '100'
	},
	{
		attribute: 'range',
		desc:
			'是否开启范围选择,起点和终点都可以自由选择，注意此时v-model绑定的值将是一个数组',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'showStops',
		desc: '是否显示断点，设置断点必须有step属性的存在，以step的值作为断点',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'showInput',
		desc: '是否在slider的右边显示一个输入框',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'formatTooltip',
		desc: '格式化tooltip的显示值',
		dataType: 'function',
		params: '1、value：要格式化的值',
		value: '-',
		defaultValue: '(value)=> value'
	}
]

const eventsList = [
	{
		attribute: 'change',
		desc: 'v-model的值发生改变就会触发',
		dataType: 'function',
		params: '1、value：slider的值',
		value: '',
		defaultValue: '(value) => { }'
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

export const SliderData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
