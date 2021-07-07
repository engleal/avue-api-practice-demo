const titleSource = 'avue-article'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'data',
		desc: '',
		dataType: 'object',
		params: '-',
		value: `{
            title: "xxx",
            meta: "xxx",
            lead: "xxx",
            body: "xxx"
        }`,
		defaultValue: '{}'
	},
	{
		attribute: 'props',
		desc: '',
		dataType: 'object',
		params: '-',
		value: `propsDefault = {
            title: "title",
            meta: "meta",
            lead: "lead",
            body: "body",
          }`,
		defaultValue: `propsDefault = {
            title: "title",
            meta: "meta",
            lead: "lead",
            body: "body"
          }`
	},
	{
		attribute: 'option',
		desc: '',
		dataType: 'object',
		params: '-',
		value: '',
		defaultValue: `option:{
            props:{
                
            }
        }`
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
]

export const ArticleData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
