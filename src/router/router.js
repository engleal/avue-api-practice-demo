import Affix from '@/views/affix'
import InputArray from '@/views/array'
import Article from '@/views/article'
import Avatar from '@/views/avatar'
import Card from '@/views/card'
import Cascader from '@/views/cascader'
import Chat from '@/views/chat'
import Checkbox from '@/views/checkbox'
import Clipboard from '@/views/clipboard'
import Code from '@/views/code'
import Comment from '@/views/comment'
import CountUp from '@/views/count-up'
import DataBox from '@/views/data-box'
import DataCard from '@/views/data-card'
import DataCardText from '@/views/data-card-text'
import DataDisplay from '@/views/data-display'
import DataIcons from '@/views/data-icons'
import DataImgText from '@/views/data-img-text'
import DataOperaText from '@/views/data-opera-text'
import DataPanel from '@/views/data-panel'
import DataPay from '@/views/data-pay'
import DataPrice from '@/views/data-price'
import DataProgress from '@/views/data-progress'
import DataRotate from '@/views/data-rotate'
import DataTabs from '@/views/data-tabs'
import Date from '@/views/date'
import Draggable from '@/views/draggable'
import Else from '@/views/else'
import Empty from '@/views/empty'
import ExportExcel from '@/views/export-excel'
import ExportXlsx from '@/views/export-xlsx'
import Flow from '@/views/flow'
import Form from '@/views/form'
import ImagePreview from '@/views/image-preview'
import Input from '@/views/input'
import InputColor from '@/views/input-color'
import InputIcon from '@/views/input-icon'
import InputMap from '@/views/input-map'
import InputNumber from '@/views/input-number'
import InputTable from '@/views/input-table'
import InputTree from '@/views/input-tree'
import Keyboard from '@/views/keyboard'
import License from '@/views/license'
import Login from '@/views/login'
import Notice from '@/views/notice'
import NProgress from '@/views/nprogress'
import Print from '@/views/print'
import Radio from '@/views/radio'
import Rate from '@/views/rate'
import ScreenShot from '@/views/screenshot'
import Search from '@/views/search'
import Select from '@/views/select'
import Sign from '@/views/sign'
import Skeleton from '@/views/skeleton'
import Slider from '@/views/slider'
import Switch from '@/views/switch'
import Table from '@/views/table'
import Tabs from '@/views/tabs'
import TextEllipsis from '@/views/text-ellipsis'
import Time from '@/views/time'
import Tree from '@/views/tree'
import Verify from '@/views/verify'
import Video from '@/views/video'
import Watermark from '@/views/watermark'

// 其他组件
const partGroup = {
	groupName: '其他组件',
	groupKey: 'group5',
	list: [
		{
			path: '/tree',
			name: 'avue-tree',
			component: Tree,
			desc: '树形'
		},
		{
			path: '/tabs',
			name: 'avue-tabs',
			component: Tabs,
			desc: '选项卡'
		},
		{
			path: '/search',
			name: 'avue-search',
			component: Search,
			desc: '搜索'
		},
		{
			path: '/affix',
			name: 'avue-affix',
			component: Affix,
			desc: '图钉'
		},
		{
			path: '/avatar',
			name: 'avue-avatar',
			component: Avatar,
			desc: '头像'
		},
		{
			path: '/textEllipsis',
			name: 'avue-text-ellipsis',
			component: TextEllipsis,
			desc: '超出文本省略'
		},
		{
			path: '/empty',
			name: 'avue-empty',
			component: Empty,
			desc: '空状态'
		},
		{
			path: '/exportExcel',
			name: 'exportExcel',
			component: ExportExcel,
			desc: '导出excel'
		},
		{
			path: '/watermark',
			name: 'watermark',
			component: Watermark,
			desc: '全局水印'
		},
		{
			path: '/clipboard',
			name: 'clipboard',
			component: Clipboard,
			desc: '复制到剪贴板'
		},
		{
			path: '/imagePreview',
			name: 'imagePreview',
			component: ImagePreview,
			desc: '图片预览'
		},
		{
			path: '/draggable',
			name: 'avue-draggable',
			component: Draggable,
			desc: '拖拽'
		},
		{
			path: '/card',
			name: 'avue-card',
			component: Card,
			desc: '卡片'
		},
		{
			path: '/countUp',
			name: 'avue-count-up',
			component: CountUp,
			desc: '数字动画'
		},
		{
			path: '/code',
			name: 'avue-code',
			component: Code,
			desc: '代码高亮'
		},
		{
			path: '/comment',
			name: 'avue-comment',
			component: Comment,
			desc: '评论'
		},
		{
			path: '/article',
			name: 'avue-article',
			component: Article,
			desc: '文章'
		},
		{
			path: '/skeleton',
			name: 'avue-skeleton',
			component: Skeleton,
			desc: '骨架屏'
		},
		{
			path: '/flow',
			name: 'avue-flow',
			component: Flow,
			desc: '流程'
		},
		{
			path: '/sign',
			name: 'avue-sign',
			component: Sign,
			desc: '电子签名'
		},
		{
			path: '/license',
			name: 'avue-license',
			component: License,
			desc: '授权证书'
		},
		{
			path: '/chat',
			name: 'avue-chat',
			component: Chat,
			desc: '客服聊天'
		},
		{
			path: '/nProgress',
			name: 'nProgress',
			component: NProgress,
			desc: '进度条'
		},
		{
			path: '/exportXlsx',
			name: 'exportXlsx',
			component: ExportXlsx,
			desc: '导出'
		},
		{
			path: '/print',
			name: 'print',
			component: Print,
			desc: '打印'
		},
		{
			path: '/verify',
			name: 'avue-verify',
			component: Verify,
			desc: '验证码'
		},
		{
			path: '/video',
			name: 'avue-video',
			component: Video,
			desc: '摄像头'
		},
		{
			path: '/screenShot',
			name: 'screenShot',
			component: ScreenShot,
			desc: '屏幕截图'
		},
		{
			path: '/notice',
			name: 'avue-notice',
			component: Notice,
			desc: '消息通知'
		},
		{
			path: '/keyboard',
			name: 'avue-keyboard',
			component: Keyboard,
			desc: '键盘组件'
		},
		{
			path: '/login',
			name: 'avue-login',
			component: Login,
			desc: '登录组件'
		}
	]
}

// 数据展示组件
const dataGroup = {
	groupName: '数据展示',
	groupKey: 'group4',
	list: [
		{
			path: '/dataPrice',
			name: 'avue-data-price',
			component: DataPrice
		},
		{
			path: '/dataPanel',
			name: 'avue-data-panel',
			component: DataPanel
		},
		{
			path: '/dataImgText',
			name: 'avue-data-imgtext',
			component: DataImgText
		},
		{
			path: '/dataRotate',
			name: 'avue-data-rotate',
			component: DataRotate
		},
		{
			path: '/dataProgress',
			name: 'avue-data-progress',
			component: DataProgress
		},
		{
			path: '/dataOperaText',
			name: 'avue-data-operatext',
			component: DataOperaText
		},
		{
			path: '/dataIcons',
			name: 'avue-data-icons',
			component: DataIcons
		},
		{
			path: '/dataDisplay',
			name: 'avue-data-display',
			component: DataDisplay
		},
		{
			path: '/dataCardText',
			name: 'avue-data-cardtext',
			component: DataCardText
		},
		{
			path: '/dataCard',
			name: 'avue-data-card',
			component: DataCard
		},
		{
			path: '/dataBox',
			name: 'avue-data-box',
			component: DataBox
		},
		{
			path: '/dataTabs',
			name: 'avue-data-tabs',
			component: DataTabs
		},
		{
			path: '/dataPay',
			name: 'avue-data-pay',
			component: DataPay
		}
	]
}

// 表格组件
const tableGroup = {
	groupName: '表格组件',
	groupKey: 'group3',
	list: [
		{
			path: '/table',
			name: 'avue-crud',
			component: Table,
			desc: '表格组件'
		}
	]
}

// 表单组件
const formGroup = {
	groupName: '表单组件',
	groupKey: 'group2',
	list: [
		{
			path: '/form',
			name: 'avue-form',
			component: Form,
			desc: '表单组件'
		}
	]
}

// 单组件分组
const inputGroup = {
	groupName: '单组件',
	groupKey: 'group1',
	list: [
		{
			path: '/cascader',
			name: 'avue-cascader',
			component: Cascader,
			desc: '级联选择框'
		},
		{
			path: '/slider',
			name: 'avue-slider',
			component: Slider,
			desc: '滑动框'
		},
		{
			path: '/rate',
			name: 'avue-rate',
			component: Rate,
			desc: '评价框'
		},
		{
			path: '/time',
			name: 'avue-time',
			component: Time,
			desc: '时间选择器'
		},
		{
			path: '/date',
			name: 'avue-date',
			component: Date,
			desc: '日期选择器'
		},
		{
			path: '/switch',
			name: 'avue-switch',
			component: Switch,
			desc: '开关'
		},
		{
			path: '/checkbox',
			name: 'avue-checkbox',
			component: Checkbox,
			desc: '多选'
		},
		{
			path: '/radio',
			name: 'avue-radio',
			component: Radio,
			desc: '单选'
		},
		{
			path: '/select',
			name: 'avue-select',
			component: Select,
			desc: '选择框'
		},
		{
			path: '/inputArray',
			name: 'avue-array',
			component: InputArray,
			desc: '数组输入框'
		},

		{
			path: '/inputTable',
			name: 'avue-input-table',
			component: InputTable,
			desc: '表格选择器'
		},
		{
			path: '/inputMap',
			name: 'avue-input-map',
			component: InputMap,
			desc: '地图选择器'
		},
		{
			path: '/inputIcon',
			name: 'avue-input-icon',
			component: InputIcon,
			desc: '图标选择器'
		},
		{
			path: '/inputColor',
			name: 'avue-input-color',
			component: InputColor,
			desc: '颜色选择器'
		},
		{
			path: '/inputNumber',
			name: 'avue-input-number',
			component: InputNumber,
			desc: '数字框'
		},
		{
			path: '/inputTree',
			name: 'avue-input-tree',
			component: InputTree,
			desc: '树形选择器'
		},
		{
			path: '/input',
			name: 'avue-input',
			component: Input,
			desc: '输入框'
		}
	]
}

// 其他
const elseGroup = {
	groupName: 'else组件',
	groupKey: 'group7',
	list: [
		{
			path: '/else',
			name: 'else',
			component: Else,
			desc: 'else组件'
		}
	]
}

// 路由信息
export const routerList = [
	...elseGroup.list,
	...partGroup.list,

	...dataGroup.list,

	...tableGroup.list,

	...formGroup.list,

	...inputGroup.list,
	{
		path: '/',
		redirect: '/cascader'
	}
]

// nav信息
export const navList = groupSort([
	inputGroup,
	formGroup,
	tableGroup,
	dataGroup,
	partGroup,
	elseGroup
])

// 排序算法
function groupSort(params) {
	var groupList = [...params]
	groupList.forEach(group => {
		group.list &&
			group.list.sort(function(current, next) {
				if (current.name < next.name) {
					return -1
				} else {
					return 1
				}
			})
	})
	return groupList
}
