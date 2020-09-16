/**
 * @Author  lotuso
 * @Date    2020/9/4 14:12
 * @Version 1.0
 */

'use strict'

import auth from "@/utils/auth";
import axios from 'axios';
import {Message} from 'element-ui';

const config = {
    baseURL: process.env.baseURL,
    timeout: 120 * 1000,
    withCredentials: true,
}

const _axios = axios.create(config)

function errorMessage(error) {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '错误请求'
                break
            case 401:
                error.message = '未经授权'
                break
            case 403:
                error.message = '拒绝访问'
                break
            case 404:
                error.message = '请求错误,未找到资源'
                break
            case 405:
                error.message = '请求方法未经允许'
                break
            case 408:
                error.message = '请求超时'
                break
            case 500:
                error.message = '服务器端出错'
                break
            case 501:
                error.message = '网络未实现'
                break
            case 502:
                error.message = '网络错误'
                break
            case 503:
                error.message = '服务不可用'
                break
            case 504:
                error.message = '网络超时'
                break
            case 505:
                error.message = 'HTTP版本不支持该请求'
                break
            default:
                error.message = `连接错误${error.response.status}`
                break
        }
    } else {
        error.message = '连接服务器失败'
    }
    Message.error(error.message)
    return Promise.reject(error)
}

function runDownload(data, filename) {

    let downloadElement = document.createElement('a')

    let url = window.URL.createObjectURL(new Blob([data]))
    document.body.appendChild(downloadElement);
    downloadElement.href = url
    downloadElement.download = filename

    downloadElement.click()
    document.body.removeChild(downloadElement);
    window.URL.revokeObjectURL(url)
}

function isDownload(res) {
    if (res.headers) {
        switch (res.headers['content-type']) {
            case 'application/pdf': {
                const data = res.data;
                let filename = null
                let disposition = res.headers['content-disposition']

                if (disposition) {
                    try {
                        filename = disposition.split(";")[1].split('=')[1]
                    } catch (err) {
                        console.log('获取下载文件名失败')
                    }
                }
                runDownload(data, filename)
            }
        }
    }
}

_axios.interceptors.request.use(config => {
    //检查是否需要携带token
    if (auth.token()) {
        config.headers['Authorization'] = auth.token()
    }
    return config
}, error => errorMessage(error))

_axios.interceptors.response.use(res => {
    isDownload(res)
    return res
}, error => errorMessage(error))

export default {
    install(Vue) {
        Window.prototype.axios = _axios
        Vue.prototype.$axios = _axios
    }
}
