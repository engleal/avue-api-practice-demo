const titleSource = 'avue-keyboard'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'ele',
		desc: '和键盘通信的input的id属性',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'keys',
		desc: '指定键盘的键位的数据源，多维数组，每一组都是一排',
		dataType: 'array',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'theme',
		desc: '设置主题',
		dataType: 'string',
		params: '-',
		value: 'default/dark/green/classic',
		defaultValue: 'default'
	},
	{
		attribute: 'type',
		desc: '设置键盘类型，总共有三种默认键盘、数字键盘和手机键盘',
		dataType: 'string',
		params: '-',
		value: 'default/number/mobile',
		defaultValue: 'default'
	},
	{
		attribute: 'fixedBottomCenter',
		desc: '是否固定在底部',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'rebind',
		desc: '',
		dataType: '',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	}
]

const eventsList = [
	{
		attribute: '',
		desc: '',
		dataType: '',
		params: '',
		value: '-',
		defaultValue: '() => { }'
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

export const KeyboardData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
