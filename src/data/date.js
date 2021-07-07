const titleSource = 'avue-date'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'type',
		desc: '显示类型',
		dataType: 'string',
		params: '-',
		value:
			'year|month|date|dates| week|datetime|datetimerange|daterange|monthrange',
		defaultValue: 'date'
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
		attribute: 'unlinkPanels',
		desc: '选择时间范围时有效吗，是否允许各自面板单独切换月份',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
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
		attribute: 'defaultValue',
		desc: '默认显示的时间',
		dataType: 'date',
		params: '-',
		value: '可被new Date()解析',
		defaultValue: '-'
	},
	{
		attribute: 'defaultTime',
		desc: `范围选择时选中日期所使用的当日内具体时刻，如["12:00:00","18:00:00"]`,
		dataType: 'string[]',
		params: '-',
		vaule: '',
		defaultValue: '-'
	},
	{
		attribute: 'rangeSeparator',
		desc: '选择范围时的分隔符',
		dataType: 'string',
		params: '-',
		value: '',
		defaultValue: '-'
	},
	{
		attribute: 'startPlaceholder',
		desc: '范围选择时开始日期的占位内容',
		dataType: 'string',
		params: '-',
		value: '',
		defaultValue: '-'
	},
	{
		attribute: 'endPlaceholder',
		desc: '范围选择时结束日期的占位内容',
		dataType: 'string',
		params: '-',
		value: '',
		defaultValue: '-'
	},
	{
		attribute: 'format',
		desc: '显示在输入框中的格式',
		dataType: 'string',
		params: '-',
		value:
			'详情见：https://element.eleme.cn/#/zh-CN/component/date-picker#ri-qi-ge-shi',
		defaultValue: 'yyyy-MM-dd'
	},
	{
		attribute: 'clearable',
		desc: '是否显示清除按钮',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
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
		attribute: 'pickerOptions',
		desc: '当前时间日期选择器特有的选项',
		dataType: 'object',
		params: '-',
		value: `pickerOptions = {
            // 设置快捷选项
            shortcuts: {
                text: "",
                onClick: () => {}
            },
            // 设置禁用状态，参数为当前日期，要求返回 Boolean
            disabledData: now => {},
            // 设置日期的 className
            cellClassName: date => {},
            // 周起始日
            firstDayOfWeek: 7,
            // 选中日期后会执行的回调，只有当 type为daterange 或 datetimerange 才生效
            onPick: (maxDate, minDate) => {}
        }`,
		defaultValue: '{}'
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
		desc: '范围选择时结束日期的占位内容',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	}
]

const eventsList = [
	{
		attribute: 'blur',
		desc: '失去焦点事件',
		dataType: 'function',
		params: '(date,this)',
		value: '-',
		defaultValue: '() => { }'
	},
	// 这个focus事件，会在失去焦点的时候触发一次
	{
		attribute: 'focus',
		desc: '获取焦点事件',
		dataType: 'function',
		params: '(date,this)',
		value: '-',
		defaultValue: '() => { }'
	}
	// 这个函数触发有点问题 foucus时会触发 没什么意义
	// {
	//     attribute: "click",
	//     desc: "",
	//     dataType: "function",
	//     params: "",
	//     value:"-",
	//     defaultValue: "() => { }"
	// }
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

export const DateData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
