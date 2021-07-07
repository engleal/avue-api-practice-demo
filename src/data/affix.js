const titleSource = 'avue-affix'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'id',
		desc: '父标签的id属性值，可以为字符串也可以为html元素，默认为window',
		dataType: 'string | dom',
		params: '',
		value: '',
		defaultValue: 'window'
	},
	{
		attribute: 'offsetBottom',
		desc:
			'距离窗口顶部达到指定偏移量后触发,如果同时存在offsetTop，那么offsetBottom优先级更高，以offsetBottom为准',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '0'
	},
	{
		attribute: 'offsetTop',
		desc: '距离窗口顶部底部指定偏移量后触发',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '0'
	}
]

const eventsList = [
	{
		attribute: 'on-change',
		desc: '',
		dataType: 'function',
		params: '无',
		value: '',
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

export const AffixData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
