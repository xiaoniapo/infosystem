import Vue from "vue";
import Vuex from "vuex";
import api from "./http.js";

Vue.use(Vuex);


const store = new Vuex.Store({
    strict: true,
    state: {
        quit: false,//解决当点击页面其它位置师，也会将菜单栏隐藏

        count: 0,//表示总的数据量
        pageSize: 10,//每一页存放多少条数据
        studentList: [],//表示存放学生列表的数组
        nowPage: 1,//表示当前页
    },
    getters: {
        totalPage: state => Math.ceil(state.count / state.pageSize),//获取总共页数
    },
    mutations: {
        changeQuit(state) {
            state.quit = !state.quit;
        },
        getCount(state, { count }) {//修改count 
            state.count = count;
        },
        getStuList(state, { res }) {//修改学生列表
            state.studentList = res;
        },
        delStuList(state, { index }) {//删除在studentList中的某条数据
            state.studentList.splice(index, 1);
        },
        changeNowPage(state, { num }) {//修改当前页
            state.nowPage += num;
            if(state.nowPage < 1) {
                state.nowPage = 1;
            }
            if(state.nowPage > state.totalPage) {
                state.nowPage = state.totalPage;
            }
        },
    },
    actions: {
        async pageStu(context, { page }) {
            //发出请求
            const { commit, state } = context;
            const { data } = await api.pageStu({
                size: state.pageSize,
                page,
            });
            commit("getCount", { count: data.cont });
            commit("getStuList", { res: data.findByPage });
        }
    }
});

export default store;