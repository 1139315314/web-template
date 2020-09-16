/*
 *@Author  lotuso
 *@Date    2020/9/4 13:57
 *@Version 1.0
 */
'use strict'
import axios from "@/plugins/axios";
import DateFormatter from '@/plugins/dateFormatter'
import router from "@/route";
import store from "@/store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI, {
    transfer: true,
    size: 'small',
    capture: false
})
Vue.prototype.$message = ElementUI.Message

Vue.use(axios)

Vue.use(DateFormatter)

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
