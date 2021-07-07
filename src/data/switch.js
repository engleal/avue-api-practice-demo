const titleSource = 'avue-switch'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'dic',
		desc: '数据源',
		dataType: 'array',
		params: '-',
		value: `array=[{
            // switch关闭状态
            {
                lable:"",
                value:""
            },
            // switch开启状态
            {
                lable:"",
                value:""
            },
        }]`,
		defaultValue: '-'
	},
	{
		attribute: 'activeIconClass',
		desc:
			'switch打开时所显示图标的类名,设置这个值将导致dic的第二个对象属性失效',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'inactiveIconClass',
		desc:
			'switch关闭时所显示图标的类名,设置这个值将导致dic的第一个对象属性失效',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'activeColor',
		desc: 'switch打开时的背景色',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '#409EFF'
	},
	{
		attribute: 'inactiveColor',
		desc: 'switch关闭时的背景色',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '#C0CCDA'
	},
	{
		attribute: 'len',
		desc: 'switch 的宽度（像素）',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '40'
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
		attribute: 'readonly',
		desc: '是否只读',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'size',
		desc: '输入框尺寸',
		dataType: 'string',
		params: '-',
		value: 'large|small|mini',
		defaultValue: '-'
	}
]

const eventsList = [
	{
		attribute: 'change',
		desc: 'switch切换触发的事件',
		dataType: 'function',
		params: '1、value：切换时候的值',
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

export const SwitchData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
