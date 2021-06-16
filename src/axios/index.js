

import axios from 'axios';
import NProgress from 'nprogress';
const instance = axios.create({
  validateStatus: function(status) {
    return status >= 200 && status <= 500 // 默认的
  },
  timeout: 3000,
  withCredentials: true
})

NProgress.configure({
  showSpinner: false
})
instance.interceptors.request.use(
  config => {
    // console.log('config：', config)
    // console.log("接口：",config.url )
    NProgress.start() // start progress bar
    const TENANT_ID = getStore({ name: 'tenantId' })
    const isToken = (config.headers || {}).isToken === false
    const token = store.getters.access_token
    if (token && !isToken) {
      config.headers['Authorization'] = 'Bearer ' + token // token
    }
    if (TENANT_ID) {
      config.headers['TENANT-ID'] = TENANT_ID // 租户ID
    }

    // headers中配置serialize为true开启序列化
    if (config.method === 'post' && config.headers.serialize) {
      config.data = serialize(config.data)
      delete config.data.serialize
    }

    if (config.method === 'get') {
      config.paramsSerializer = function(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }
    // console.log("接口参数为：",config.data || config.params )
    return config
  },
  error => {
    // console.log("axios.interceptors.request.use-error",error)
    return Promise.reject(error)
  }
)

// response拦截
instance.interceptors.response.use(
  res => {
    NProgress.done()
    const status = Number(res.status) || 200
    const message = res.data.msg || errorCode[status] || errorCode['default']
    if (status === 401) {
      Message({
        message: message,
        type: 'error'
      })
      store.dispatch('FedLogOut').then(() => {
        router.push({ path: '/login' })
      })
      return
    }

    if (status !== 200 || (res.data.code && res.data.code !== '00000')) {
      // console.log("axios-request-code-!200",res&& res.data)
      Message({
        message: message,
        type: 'error'
      })
      return Promise.reject(new Error(message))
    }
    // console.log("axios-request-success：",res&& res.data)
    return res
  },
  error => {
    // console.log("axios-request-error", error)
    NProgress.done()
    return Promise.reject(new Error(error))
  }
)

export default instance