import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

// 1.安排插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
    {
        path: '',
        redirect: '/home',
        meta: {
            tabBar: true
        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            tabBar: true
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            tabBar: true
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            tabBar: true
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            tabBar: true
        }
    },
    {
        path: '/detail/:iid',
        component: Detail,
        meta: {
            tabBar: false
        }
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router