/**
 * @Author  lotuso
 * @Date    2020/9/4 14:14
 * @Version 1.0
 */

const storage = {
    set(key, value) {
        if (typeof value === 'object') {
            value = JSON.stringify(value)
        }
        sessionStorage.setItem(key, value)
    },
    get(key) {
        let value = sessionStorage.getItem(key)
        if (value && value.startsWith('{')) {
            value = JSON.parse(value)
        }
        return value
    },
    remove(key) {
        sessionStorage.removeItem(key)
    },
    clear() {
        sessionStorage.clear()
    }
}

export default storage;
