// 引入封装的axios
import { request } from "./request";

// 封装首页的路由
export function getHomeMultidata() {
    return request({
        url: '/home/multidata',
        method: 'GET'
    })
}
// 获取商品路由
export function getHomeGoods(type,page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}