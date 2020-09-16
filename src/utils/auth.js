/**
 * @Author  lotuso
 * @Date    2020/9/4 14:14
 * @Version 1.0
 */

import storage from "@/utils/storage";

const TOKEN = 'LCF_TOKEN'

const auth = {
    token() {
        return storage.get(TOKEN)
    },
    setToken(token) {
        return storage.set(TOKEN, token)
    },
    removeToken() {
        return storage.remove(TOKEN)
    }
}

export default auth
