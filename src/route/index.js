/**
 * @Author  lotuso
 * @Date    2020/9/4 14:41
 * @Version 1.0
 */

import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

// 路由定义
const routes = []

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
