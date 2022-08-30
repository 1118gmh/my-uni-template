import App from './App'
import store from '@/store/index.js'

//挂载全局http请求
import request from '@/common/request.js'
Vue.prototype.$http = request.globalRequest;
Vue.prototype.$upload = request.globalUpload;

Vue.prototype.$store = store;


import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()