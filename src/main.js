import '@/assets/css/global.css'
import '@/assets/css/prism-plugins.css'
import '@/assets/css/prism.css'
import '@/assets/css/theme.css'
import '@/assets/css/variable.css'
import '@/assets/icon/iconfont.css'
import { iconfontUrl, iconfontVersion } from '@/config/icon'
import { loadStyle } from '@/utils/util'
import { Integrations } from '@sentry/tracing'
import * as Sentry from '@sentry/vue'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Prism from 'prismjs'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import App from './App'
import RockyCore from './components/index'
import router from './router'
Vue.use(Avue, {
	size: 'small',
	menuType: 'text'
})
Vue.use(VueAxios, 'axios')
Vue.use(Element)

Prism.highlightAll()
Vue.use(RockyCore)
Sentry.init({
	Vue,
	dsn: 'https://127496a59f874c30a9785fe18f4f2b78@sentry.io/5627082',
	integrations: [new Integrations.BrowserTracing()],
	tracesSampleRate: 1.0,
	logErrors: true,
	attachProps: true
})
// 动态加载阿里云字体库
iconfontVersion.forEach(ele => {
	loadStyle(iconfontUrl.replace('$key', ele))
})
Vue.config.productionTip = false
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
