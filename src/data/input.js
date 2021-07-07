const titleSource = 'avue-input'

const subTitleSource = '输入框'

const effectDescSource = '通过鼠标或键盘输入内容，是最基础的表单域的包装。'

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: [
		'需要用户输入表单域内容时。',
		'提供组合型输入框，带搜索的输入框，还可以进行大小选择。'
	]
}

const attributesList = [
	{
		attribute: 'value',
		desc: '输入框内容',
		dataType: 'string',
		params: '-',
		value: '',
		defaultValue: '-'
	},
	{
		attribute: 'maxlength',
		desc: '最大输入长度',
		dataType: 'number',
		params: '-',
		value: '',
		defaultValue: '-'
	},
	{
		attribute: 'minlength',
		desc: '最小输入长度',
		dataType: 'number',
		params: '-',
		value: '',
		defaultValue: '-'
	},
	{
		attribute: 'showPassword',
		desc: '是否显示切换密码图标',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'true'
	},
	{
		attribute: 'showWordLimit',
		desc:
			'是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'prefixIcon',
		desc: '输入框头部图标',
		dataType: 'string(element-icon) | slot(name=prefix)',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'suffixIcon',
		desc: '输入框尾部图标',
		dataType: 'string(element-icon) | slot(name=suffix)',
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
		attribute: 'placeholder',
		desc: '输入框占位文本',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'autosize',
		desc:
			'自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
		dataType: 'boolean | object',
		params: '-',
		value: 'true/false | { minRows: xx, maxRows: xx }',
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
		attribute: 'autocomplete',
		desc: '自动补全',
		dataType: 'string',
		params: '-',
		value: 'on|off',
		defaultValue: 'off'
	},
	{
		attribute: 'prepend',
		desc: '前置文字(只接受文字Avue源码定死了)',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	},
	{
		attribute: 'append',
		desc: '后置文字(只接受文字Avue源码定死了)',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	}
]

const eventsList = [
	{
		attribute: 'prependClick',
		desc: '前置文字点击事件',
		dataType: 'function',
		params: '-',
		value: '-',
		defaultValue: '() => { }'
	},
	{
		attribute: 'appendClick',
		desc: '后置文字点击事件',
		dataType: 'function',
		params: '-',
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

export const InputData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
