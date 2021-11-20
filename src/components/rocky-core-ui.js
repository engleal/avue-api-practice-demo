import RockyCoreAffix from './affix/affix'
import RockyBasicContent from './basic-content/basic-content'
import RockyCoreCodeCard from './code-card/code-card'
import RockyCoreHeader from './header/header'
import RockyCoreMarkdown from './markdown/markdown'
import RockyMask from './mask/index'
import RockyCoreNav from './nav/nav'
import RockyTable from './table/table'
import RockyTheme from './theme/index'
import RockyTimeLine from './time-line/time-line'
// 组件对象 用于组件注册
const components = {
	'rc-basic-content': RockyBasicContent,
	'rc-header': RockyCoreHeader,
	'rc-nav': RockyCoreNav,
	'rc-affix': RockyCoreAffix,
	'rc-markdown': RockyCoreMarkdown,
	'rc-code-card': RockyCoreCodeCard,
	'rc-time-line': RockyTimeLine,
	'rc-table': RockyTable,
	'rc-theme': RockyTheme,
	'rc-mask': RockyMask
}
export function install(Vue) {
	Object.keys(components).forEach(key => {
		Vue.component(key, components[key])
	})
}
