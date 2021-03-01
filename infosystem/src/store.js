import Vue from "vue";
import Vuex from "vuex";
import api from "./http.js";

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        quit: false, //解决当点击页面其它位置师，也会将菜单栏隐藏

        count: 0, //表示总的数据量
        pageSize: 10, //每一页存放多少条数据
        studentList: [], //表示存放学生列表的数组
        nowPage: 1, //表示当前页
        curStu: {
            name: "",
            sex: 0,
            email: "",
            sNo: "",
            birth: "",
            phone: "",
            address: "",
        }, //表示当前学生信息
    },
    getters: {
        totalPage: state => Math.ceil(state.count / state.pageSize), //获取总共页数
    },
    mutations: {
        changeQuit(state) {
            state.quit = !state.quit;
        },
        getCount(state, {
            count
        }) { //修改count 
            state.count = count;
        },
        getStuList(state, {
            res
        }) { //修改学生列表
            state.studentList = res;
        },
        delStuList(state, {
            index
        }) { //删除在studentList中的某条数据
            state.studentList.splice(index, 1);
        },
        changeNowPage(state, {
            num
        }) { //修改当前页
            state.nowPage += num;
            if (state.nowPage < 1) {
                state.nowPage = 1;
            }
            if (state.nowPage > state.totalPage) {
                state.nowPage = state.totalPage;
            }
        },
        changeCurStu(state, {
            stu
        }) { //就是将当前学生信息进行绑定
            state.curStu = stu;
        },
    },
    actions: {
        async pageStu(context, {
            page
        }) {
            //发出请求
            const {
                commit,
                state
            } = context;
            const {
                data
            } = await api.pageStu({
                size: state.pageSize,
                page,
            });
            commit("getCount", {
                count: data.cont
            });
            commit("getStuList", {
                res: data.findByPage
            });
        },
        async delStu(context, {
            sNo,
            index
        }) {
            const {
                commit,
                state,
                dispatch
            } = context;
            await api.delStu({
                sNo,
            }).then(res => {
                if (res.status === "success") {
                    if (state.studentList.length === 1) {
                        if (state.nowPage === 1) {
                            commit("getStuList", {
                                res: []
                            });
                        } else { //返回上一页
                            dispatch("pageStu", {
                                page: state.nowPage - 1
                            });
                        }
                    } else {
                        commit('delStuList', {
                            index,
                        });
                    }
                }
            }).catch(err => {
                console.log(err)
            });
        },
        async addStu(context, {
            reset
        }) {
            const {
                state
            } = context;
            const res = await api.addStu(state.curStu);
            if (res.status === "fail") {
                this._vm.$alert(res)
            } else {
                this._vm.$alert({ msg: "添加成功" })
                reset()
            }
        },
        async editStu(context) {
            const {
                state
            } = context
            const res = await api.editStu(state.curStu);
            if (res.status === "success") {
                //修改数据列表  
                let myIndex = null;
                state.studentList.forEach((item, index) => {
                    if(item.sNo === state.curStu.sNo) {
                        myIndex = index;
                    }
                })
                state.studentList.splice(myIndex, 1, state.curStu);
                //关闭遮罩层
            } else {
                this._vm.$alert(res)
            }
        }
    },
});

export default store;