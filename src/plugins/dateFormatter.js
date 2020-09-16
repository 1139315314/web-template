/**
 * @Author  lotuso
 * @Date    2020/9/4 14:11
 * @Version 1.0
 */
'use strict'
// import {format} from 'view-design/src/utils/date'
import {formatDate} from "element-ui/src/utils/date-util";

export default {
    install(Vue) {
        // Vue.prototype.$dateFormatter = (date, fmt = 'yyyy-MM-dd') => {
        //     return format(date, fmt)
        // }
        Vue.prototype.$dateFormatter = (date, format = 'yyyy-MM-dd') => {
            return formatDate(date, format)
        }
    },
}
