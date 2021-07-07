const titleSource = 'avue-checkbox'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'all',
		desc: '是否显示全选按钮',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'disabled',
		desc: '是否禁用checkbox',
		dataType: 'boolean',
		params: '',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'min',
		desc: '可被勾选的 checkbox 的最小数量',
		dataType: 'number',
		params: '',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'max',
		desc: '可被勾选的 checkbox 的最大数量',
		dataType: 'number',
		params: '',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'dic',
		desc: '数据源',
		dataType: 'array',
		params: '-',
		value: `array=[{
            // 后台的数据值
            value:"",
            // 要禁用的数据项的
            disabled:true,
            // 显示的值
            label:""
        }`,
		defaultValue: '-'
	},
	{
		attribute: 'readonly',
		desc: '是否只读',
		dataType: 'boolean',
		params: '',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'border',
		desc: '是否显示边框',
		dataType: 'boolean',
		params: '',
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
	}
]

const eventsList = []

const anchorSource = [
	{
		name: '基本用法',
		anchorPoint: '#JCYF'
	},
	{
		name: 'API 属性',
		anchorPoint: '#ATTRIBUTES'
	}
	// {
	//     name: "API 事件",
	//     anchorPoint: "#EVENTS"
	// }
]

export const CheckboxData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
