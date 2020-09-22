import Vue from 'vue'

import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

// import i18n from './lang' // internationalization
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
// import i18n from './lang/zh' // internationalization
// import zhCN   from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
// import VCharts from 'v-charts'
import '@/permission' // permission control

import VueI18n from 'vue-i18n'

Vue.use(VueI18n) // 通过插件的形式挂载
const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('element-ui/lib/locale/lang/zh-CN'),
    'en-US': require('element-ui/lib/locale/lang/en')    // 英文语言包
  }
})
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI) //df:这个貌似不生效，按网上说应该是只有admin的i18n分支可以，master新的也是不可以；基础班就也不行

// Vue.use(VCharts) //用于画图表
// Vue.use(Element, {
//   size: Cookies.get('size') || 'medium', // set element-ui default size
//   i18n: (key, value) => i18n.t(key, value)
// })
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router, //加载permission.js中的路由拦截（校验是否登录等）、动态设置网页标题等
  store,
  i18n,
  // i18n,
  render: h => h(App)
  //ES6 缩写语法，实际是render: function (createElement) { return createElement(App);} //h是createElement 缩写

})
