<template>
    <div class="infoManage">
        <table>
            <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>出生年月</th>
                <th>学号</th>
                <th>性别</th>
                <th>邮箱</th>
                <th>电话号码</th>
                <th>家庭地址</th>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mesList: []
        }
    },
    mounted() {
        this.$http.get(`/api/student/findAll?appkey=${this.appkey}`).then(data => {
            console.log(data)
        })
    }
}
</script>

<style scoped>
table {
    border: 1px solid;
}
</style>