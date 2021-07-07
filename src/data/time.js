const titleSource = 'avue-time'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'v-model',
		desc: '绑定值',
		dataType: 'date(TimePicker)',
		params: '-',
		value: '-',
		defaultValue: '-'
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
		attribute: 'type',
		desc: '是否禁用',
		dataType: 'string',
		params: '-',
		value: "''/timerange",
		defaultValue: ' '
	},
	{
		attribute: 'size',
		desc: '输入框尺寸',
		dataType: 'string',
		params: '-',
		value: 'large|small|mini',
		defaultValue: '-'
	},
	{
		attribute: 'defaultValue',
		desc: '可选，选择器打开时默认显示的时间',
		dataType: 'string | array',
		params: '-',
		value: 'date对象值',
		defaultValue: '-'
	},
	{
		attribute: 'rangeSeparator',
		desc: '选择范围时的分隔符',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: "'-'"
	},
	{
		attribute: 'arrowControl',
		desc: '是否允许使用箭头进行上下控制',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: "'-'"
	},
	{
		attribute: 'startPlaceholder',
		desc: '范围选择时开始日期的占位内容',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'endPlaceholder',
		desc: '范围选择时结束日期的占位内容',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
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
		attribute: 'format',
		desc: '显示在输入框中的格式',
		dataType: 'string',
		params: '-',
		value: '小时：HH，分：mm，秒：ss，AM/PM A',
		defaultValue: "'HH:mm:ss'"
	},
	{
		attribute: 'valueFormat',
		desc: '可选，绑定值的格式。不指定则绑定值为 Date 对象',
		dataType: 'string',
		params: '-',
		value:
			'详情见：https://element.eleme.cn/#/zh-CN/component/date-picker#ri-qi-ge-shi',
		defaultValue: '-'
	},
	{
		attribute: 'placeholder',
		desc: '输入框占位文本',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	}
]

const eventsList = [
	// 有个问题，滑动选择的时候也会触发这个函数
	{
		attribute: 'change',
		desc: '用户确认选定的值时触发',
		dataType: 'function',
		params: '1、date：value-format指定的格式的字符串',
		value: '-',
		defaultValue: '(date) => { }'
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

export const TimeData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
