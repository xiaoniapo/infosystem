import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login from "./views/Login.vue";

const routes = [{
        path: "/",
        redirect: "/login"
    },
    {
        path: '/login',
        component: Login,

    },
    {
        path: "/home_page",
        component: () => import("./views/Home_page.vue"),
        name: "home_page"
    },
    {
        path: "/data_statistics",
        component: () => import("./views/Data_statistics.vue"),
        name: "data_statistics"
    },
    {
        path: "/info_manage",
        component: () => import("./views/info_manage.vue"),
        name: "info_manage"
    },
    {
        path: "/list_show",
        component: () => import("./views/List_show.vue"),
        name: "list_show"
    },
    {
        path: "/user_manage",
        component: () => import("./views/User_manage.vue"),
        name: "user_manage"
    },
    {
        path: "/user_statistics",
        component: () => import("./views/User_statistics.vue"),
        name: "user_statistics"
    },
    {
        path: "/type_statistics",
        name: "type_statistics",
        component: () => import("./views/Type_statistics.vue")
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
})
//导航前置守卫
router.beforeEach((to, from, next) => {
    //模拟验证账号和密码
    // if (from.path === "/login") {
    //     const msg = JSON.parse(localStorage.getItem("msg"))
    //     if(msg.msg === "找不到该用户") {
    //         alert("账号有误");
    //         return;
    //     }
    //     if(msg.msg === "密码错误") {
    //         alert("密码错误");
    //         return;
    //     }
    // }
    next();
    
})

export default router;