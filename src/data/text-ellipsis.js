const titleSource = 'avue-text-ellipsis'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'width',
		desc: '容器宽度',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'height',
		desc: '容器高度',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'text',
		desc: '需要操作的文本',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'isLimitHeight',
		desc: 'isLimitHeight',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	},
	{
		attribute: 'useTooltip',
		desc: '是否使用useTooltip',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'placement',
		desc: '设置useTooltip的方位',
		dataType: 'string',
		params: '-',
		value:
			'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
		defaultValue: 'bottom'
	}
]

const eventsList = [
	{
		attribute: 'show',
		desc: '当isLimitHeight为true，文本全部展示的时候',
		dataType: 'function',
		params: '无',
		value: '-',
		defaultValue: '() => { }'
	},
	{
		attribute: 'hide',
		desc: '当isLimitHeight为true，文本省略的时候',
		dataType: 'function',
		params: '无',
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

export const TextEllipsisData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
