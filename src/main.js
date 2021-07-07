// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/css/global.css'
import '@/assets/css/prism-plugins.css'
import '@/assets/css/prism.css'
import '@/assets/css/theme.css'
import '@/assets/css/variable.css'
import RcCrud from '@/components/crud'
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
Vue.use(VueAxios)
Vue.use(Element)

Prism.highlightAll()
// 注册全局RcCrud组件
Vue.component('RcCrud', RcCrud)
Vue.use(RockyCore)
Sentry.init({
	Vue,
	dsn: 'https://127496a59f874c30a9785fe18f4f2b78@sentry.io/5627082',
	integrations: [new Integrations.BrowserTracing()],
	tracesSampleRate: 1.0,
	logErrors: true,
	attachProps: true
})
Vue.config.productionTip = false
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
