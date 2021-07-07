const titleSource = 'avue-rate'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'max',
		desc: '最大分值',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '5'
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
		attribute: 'disabled',
		desc: '是否禁用',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'texts',
		desc: '辅助文字数组，数组的长度等于max属性的值',
		dataType: 'array',
		params: '-',
		value: '-',
		defaultValue: "['极差', '失望', '一般', '满意', '惊喜']"
	},
	{
		attribute: 'showText',
		desc: '是否显示辅助文字',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'colors(array)',
		desc: 'icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色',
		dataType: 'array',
		params: '-',
		value: '-',
		defaultValue: "['#F7BA2A', '#F7BA2A', '#F7BA2A']"
	},
	{
		attribute: 'iconClasses',
		desc: 'icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名.',
		dataType: 'array',
		params: '-',
		value: '-',
		defaultValue: "['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']"
	},
	{
		attribute: 'voidIconClass',
		desc: '未选中 icon 的类名',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: 'el-icon-star-off'
	}
]

const eventsList = [
	{
		attribute: 'change',
		desc: 'rate组件的分值发生改变时触发',
		dataType: 'function',
		params: '1、value：rate的分值',
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

export const RateData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
