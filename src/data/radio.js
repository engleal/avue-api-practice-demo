const titleSource = 'avue-radio'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'size',
		desc: '输入框尺寸',
		dataType: 'string',
		params: '-',
		value: 'large|small|mini',
		defaultValue: '-'
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
		attribute: 'dic',
		desc: '数据源',
		dataType: 'array',
		params: ``,
		value: `array=[{
            // 后台的数据值
            value:"",
            // 要禁用的数据项的
            disabled:true,
            // 显示的值
            label:""
        }]`,
		efaultValue: '[]'
	},
	{
		attribute: 'border',
		desc: '是否显示边框',
		dataType: 'boolean',
		params: '-',
		defaultValue: 'false'
	},
	{
		attribute: 'readonly',
		desc: '是否只读',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	}
]

const eventsList = [
	{
		attribute: 'change',
		desc: '选中数据时触发',
		dataType: 'function',
		params: `1、value：dic数据源中对应数据的valueKey字段的值
        2、event：事件对象`,
		value: '',
		defaultValue: '(value,event) => { }'
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

export const RadioData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
