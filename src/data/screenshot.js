const titleSource = 'ScreenShot'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: '',
		desc: '',
		dataType: '',
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
		params: '无',
		defaultValue: '() => { }'
	},
	{
		attribute: 'appendClick',
		desc: '后置文字点击事件',
		dataType: 'function',
		params: '无',
		defaultValue: '() => { }'
	}
]

const anchorSource = [
	{
		attribute: '',
		desc: '',
		dataType: '',
		params: '-',
		value: '-',
		defaultValue: '-'
	}
]

export const ScreenShotData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
