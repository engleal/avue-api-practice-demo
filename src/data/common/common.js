export const commonAttrList = [
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
		attribute: 'placeholder',
		desc: '输入框占位文本',
		dataType: 'string',
		params: '-',
		value: '-',
		defaultValue: '-'
	}
]

export const commonEventList = [
	{
		attribute: 'blur',
		desc: '失去焦点事件',
		dataType: 'function',
		params: '',
		value: '-',
		defaultValue: '() => { }'
	},
	{
		attribute: 'focus',
		desc: '获取焦点事件',
		dataType: 'function',
		params: '',
		value: '-',
		defaultValue: '() => { }'
	}
]
