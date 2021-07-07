const titleSource = 'avue-card'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'gutter',
		desc: '设置每个row项的左右margin',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '20'
	},
	{
		attribute: 'span',
		desc: '设置每个col项的span值',
		dataType: 'number',
		params: '-',
		value: '-',
		defaultValue: '8'
	},
	{
		attribute: 'props',
		desc: 'data数据的相关对象的key配置的对象',
		dataType: 'object',
		params: '-',
		value: `{
            img: "img",
            title: "title",
            info: "info"
          }`,
		defaultValue: `{
            img: "img",
            title: "title",
            info: "info"
          }`
	},
	{
		attribute: 'data',
		desc: '卡片的数据，注意data属性的value项中的对象的key可用通过props进行指定',
		dataType: 'object',
		params: '-',
		value: `[
            {
                img:'xx',
                title:'xx',
                info:'xx'
            }
        ]`,
		defaultValue: '[]'
	},
	{
		attribute: 'option',
		desc: '配置是否显示无数据的添加按钮',
		dataType: 'object',
		params: '-',
		value: `{
            addBtn：true
        }`,
		defaultValue: '{}'
	},
	{
		attribute: 'slot(menu)',
		desc:
			'在card的标闭合标签中指定slot的值为name，将可以显示一个底部的显示区域，还可以拿到row和index值',
		dataType: 'html',
		params: '-',
		value: `-`,
		defaultValue: '-'
	}
]

const eventsList = [
	{
		attribute: 'row-add',
		desc: '空card添加数据的触发函数',
		dataType: 'function',
		params: '-',
		value: '-',
		defaultValue: '() => { }'
	},
	{
		attribute: 'row-click',
		desc: 'card的点击函数',
		dataType: 'function',
		params: '-',
		value: '1、row：data的每一条数据 2、index：这是第几条数据',
		defaultValue: '(row,index) => { }'
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

export const CardData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
