/**
 * @Author  lotuso
 * @Date    2020/9/4 14:01
 * @Version 1.0
 */
'use strict'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// state 数据容器
const state = {}
// mutations 同步更新操作
const mutations = {}
// actions 异步更新操作
const actions = {}
// getters 数据获取操作
const getters = {}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store
