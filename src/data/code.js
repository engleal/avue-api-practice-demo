const titleSource = 'avue-code'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'syntax',
		desc:
			'代码类型，avue内置了http、xml、javascript和css。更多的参考：https://fenxianglu.cn/highlight.html',
		dataType: 'string',
		params: '-',
		value:
			'1、http:代码类型为http 2、xml:代码类型为html 3、javascript：代码类型为js 4、css:代码类型为css',
		defaultValue: 'javascript'
	},
	{
		attribute: 'height',
		desc: '代码块高度',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '200'
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
	},
	{
		name: 'API 事件',
		anchorPoint: '#EVENTS'
	}
]

export const CodeData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
