import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import register from "./views/Register.vue"

const routes = [{
        path: "/",
        redirect: "/home"
    },
    {
        path: "/register",
        component: register,
        name: "register"
    },
    {
        path: '/login',
        component: () => import("./views/Login.vue"),
        name: "login"
    },
    {
        path: "/home",
        component: () => import( /* webpackChunkName: 'home'*/ "./views/Home.vue"),
        name: "home",
        meta: {
            requireLogin: true, //用于验证当前界面是否需要验证
        },
        redirect: "/home/studentlist",
        children: [{
            path: "studentlist",
            name: "studentlist",
            component: () => import( /* webpackChunkName: 'home'*/ "./views/StudentList.vue")
        },{
            path: "addStu",
            name: "addStu",
            component: () => import("./views/addStu.vue")
        }]
    },
    {
        path: "/notFound",
        component: () => import("./views/NotFound.vue")
    },
    {
        path: "/mask",
        component: () => import("./components/Mask.vue")
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
})
//导航前置守卫
router.beforeEach((to, from, next) => {
    //导航去不存在的页面
    if(to.matched.length === 0) {
        next("/notFound")
    }
    //判断是否需要验证
    const res = to.matched.filter(item => item.meta.requireLogin);
    if(res.length) {
        //获取当前的服务器返回的信息
        const loginMes = JSON.parse(localStorage.getItem("login"));
        if(loginMes) {
            if(loginMes.status === "fail") {
                alert(loginMes.msg);
                return;
            }
        } else {
            next("/login");
        }
    }
    next();
})

export default router;