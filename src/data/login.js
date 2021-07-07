const titleSource = 'avue-login'

const subTitleSource = ''

const effectDescSource = ''

const sceneSource = {
	title: '何时使用',
	desc: '',
	features: []
}

const attributesList = [
	{
		attribute: 'codesrc',
		desc: '数据配验证码输入框为图片模式时的图片地址',
		dataType: 'object',
		params: '-',
		value: '',
		defaultValue: '-'
	},
	{
		attribute: 'option',
		desc: '数据配置对象',
		dataType: 'object',
		params: '-',
		value: `option={
            // 设置label宽度
            labelWidth:number,
            // 验证码时间
            time:60,
            // 验证码类型
            codeType:'img' | 'phone',
            // login组件的宽度，支持百分比或者数字，默认100%
            width:string | number,
            // 输入框配置
            column:{
                // 用户名
                username:{
                    // lablel 字符串 默认 用户名
                    label:string,
                    // 输入框验证规则
                    rules:[],
                    // labelWidth
                    labelWidth:number,
                    // 是否隐藏
                    hide:boolean,
                    // tip
                    tip：string,
                    // 前置icon
                    prefixIcon：string,
                    // placeholder
                    placeholder:string,
                    // 自动完成 
                    autocomplete:boolean,
                    // 可以手动指定prop
                    prop:string
                },
                // 密码
                password:{
                    // lablel 字符串 默认 用户名
                    label:string,
                    // 输入框验证规则
                    rules:[],
                    // labelWidth
                    labelWidth:number,
                    // 是否隐藏
                    hide:boolean,
                    // tip
                    tip：string,
                    // 前置icon
                    prefixIcon：string,
                    // placeholder
                    placeholder:string,
                    // 自动完成 
                    autocomplete:boolean,
                    // 可以手动指定prop
                    prop:string
                },
                // 验证码
                code:{
                    // lablel 字符串 默认 用户名
                    label:string,
                    // 输入框验证规则
                    rules:[],
                    // labelWidth
                    labelWidth:number,
                    // 是否隐藏
                    hide:boolean,
                    // tip
                    tip：string,
                    // 前置icon
                    prefixIcon：string,
                    // placeholder
                    placeholder:string,
                    // 自动完成 
                    autocomplete:boolean,
                    // 可以手动指定prop
                    prop:string
                }

            }
        }`,
		defaultValue: '-'
	}
]

const eventsList = [
	{
		attribute: 'send',
		desc: '验证码发送函数',
		dataType: 'function',
		params: 'void',
		value: '',
		defaultValue: '() => { }'
	},
	{
		attribute: 'refresh',
		desc: '验证码刷新函数',
		dataType: 'function',
		params: 'void',
		value: '',
		defaultValue: '() => { }'
	},
	{
		attribute: 'submit',
		desc: '提交函数',
		dataType: 'function',
		params: 'form',
		value: '-',
		defaultValue: '(form) => { }'
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

export const LoginData = {
	title: titleSource,
	subTitle: subTitleSource,
	effectDesc: effectDescSource,
	attributes: attributesList,
	events: eventsList,
	anchor: anchorSource,
	scene: sceneSource
}
