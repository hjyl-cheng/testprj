// 1.创建5个组件
import Vue from "vue"
import VueRouter from "vue-router"

// 全局注册两个组件 router-link router-view
Vue.use(VueRouter)

// 2.注册路由表
let routes = [
    {
        path: "/home",
        component: () => import('../components/Home/Home.vue'),
        meta: {
            // 路由元信息
            isCache: true,
            title: "首页"
        }
    },
    {
        path: "/category",
        component: () => import('../components/Category/Category.vue'),
        meta: {
            isCache: false,
            title: "分类"
        }
    },
    {
        path: "/buy",
        component: () => import('../components/Buy/Buy.vue'),
        meta: {
            isCache: false,
            title: "值得买"
        }
    },
    {
        path: "/shopping",
        component: () => import('../components/Shopping/Shopping.vue')
    },
    {
        path: "/mine",
        component: () => import('../components/Mine/Mine.vue')
    }
]

// 3.定义路由
let router = new VueRouter({
    routes
})

//4.导出路由
export default router;