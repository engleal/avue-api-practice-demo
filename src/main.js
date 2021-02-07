// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Avue from '@smallwei/avue';

import '@/assets/css/global.css'
import '@/assets/css/theme.css'
import '@/assets/css/variable.css'

import '@smallwei/avue/lib/index.css';
Vue.use(Avue,{locale:'en'});

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

import Prism from 'prismjs'
import '@/assets/css/prism.css'  
import '@/assets/css/prism-plugins.css' 
Prism.highlightAll()
import RockyCore from './components/index'
Vue.use(RockyCore)

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
