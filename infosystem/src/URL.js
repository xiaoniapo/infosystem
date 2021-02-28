//存放所有的请求地址
export default {
    login: {
        address: '/api/student/stuLogin',
        methods: "post",
    },
    register: {
        address: '/api/student/stuRegister',
        methods: "post"
    },
    addStu: {
        address: '/api/student/addStudent',
        methods: "get"
    },
    allStu: {
        address: '/api/student/findAll',
        methods: "get"
    },
    delStu: {
        address: "/api/student/delBySno",
        methods: "get",
    },
    pageStu: {
        address: "/api/student/findByPage",
        methods: "get"
    }
}