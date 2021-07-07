const titleSource = 'ImagePreview'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = []

const eventsList = [
	{
		attribute: 'this.$ImagePreview(imgs), index)',
		desc: '预览事件',
		dataType: 'function',
		params: `imgs:[
            {
                thumbUrl:"xx"
            }
        ]`,
		value: '1、imgs:图片数组 2、index:img的下标',
		defaultValue: '() => { }'
	}
]

const anchorSource = [
	{
		name: '基本用法',
		anchorPoint: '#JCYF'
	},
	{
		name: 'API 事件',
		anchorPoint: '#EVENTS'
	}
]

export const ImagePreviewData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
