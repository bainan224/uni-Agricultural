import Vue from 'vue'
import App from './App'
import store from './store/index.js'


import util from '@/common/util.js';


//挂载vuex
Vue.prototype.$store = store

Vue.config.productionTip = false

// 引入全局组件（分隔条和无内容组件）
import divider from './components/common/divider.vue';
Vue.component('divider', divider)
import noThing from './components/common/no-thing.vue';
Vue.component('no-thing', noThing)

// 挂载助手函数库
import $U from './common/util.js';
Vue.prototype.$U = $U

// 引入请求库
import $H from './common/request.js';
Vue.prototype.$H = $H

//对点击事件进行挂载
import { dianji } from './common/common'
Vue.prototype.$dianji = dianji;

//文字滚动
import screenTextScroll from './components/screenScrollText/screenTextScroll.vue'

Vue.component('textscroll',screenTextScroll)

//对util.js进行导入
Vue.prototype.$util = util;

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()