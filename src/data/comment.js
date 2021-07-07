const titleSource = 'avue-comment'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'reverse',
		desc:
			'是否反向排列，就是flex布局的row和row-reverse的效果，就是avatar的内容区域的换位置',
		dataType: 'boolean',
		params: '-',
		value: 'true/false',
		defaultValue: 'false'
	},
	{
		attribute: 'data',
		desc:
			'数据对象，是个数组,数组对象的每个key值都可以用props或者option的props进行配置',
		dataType: 'array',
		params: '-',
		value: '-',
		defaultValue: '[]'
	},
	{
		attribute: 'props',
		desc: 'data的数据对象的每个key的配置，只支持3个key,avatar、author和body',
		dataType: 'object',
		params: '-',
		value: `props={
            avatar:'',
            author:'',
            body:''
        }`,
		defaultValue: `props={
            avatar: "avatar",
            author: "author",
            body: "body"
        }`
	},
	{
		attribute: 'option',
		desc: '配置对象，目前只支持props',
		dataType: 'object',
		params: '-',
		value: `option={
            props:{

            }
        }`,
		defaultValue: '{}Q+QQ'
	}
]

const eventsList = [
	{
		attribute: 'prependClick',
		desc: '前置文字点击事件',
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

export const CommentData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
