<template>
  <div class="table_list">
    <table v-if="stuList.length">
      <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>邮箱</th>
          <th>学号</th>
          <th>年龄</th>
          <th>手机号</th>
          <th>住址</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in stuList" :key="student.sNo">
          <td>{{ student.name }}</td>
          <td>{{ student.sex | toSex }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.sNo }}</td>
          <td>{{ student.birth | toAge }}</td>
          <td>{{ student.phone }}</td>
          <td>{{ student.address }}</td>
          <td>
            <my-btn @successBtn="edit(student)" @resetContent="del(student.sNo, index)" firstBtn="编辑" secondBtn="删除"></my-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <span v-else>抱歉，当前还没有数据哦</span>
    <my-mask v-if="show" :show="show" @isshow="toshow" firstBtn="修改" secondBtn="取消"></my-mask>
  </div>
</template>

<script>
import { mapState } from "vuex";
import myBtn from "./button.vue";
import myMask from "./Mask.vue";
export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState({
      stuList: "studentList",
      nowPage: "nowPage",
    }),
  },
  components: {
    myBtn,
    myMask
  },
  methods: {
    toshow() {
      this.show = !this.show;
    },
    edit(stu) {
      //弹出遮罩层
      this.toshow();
      //修改数据
      this.$store.commit("changeCurStu", { stu });//表示当前数据
      //填充数据
    },
    del(sNo, index) {
      //删除当前学生信息
      const isDel = window.confirm("确认删除当前学生信息？");
      if (isDel) {
        this.$store.dispatch("delStu", { sNo, index });
      } else {
        return;
      }
    },
  },
  filters: {
    toSex(num) {
      return num === 0 ? "男" : "女";
    },
    toAge(birth) {
      const curYear = new Date().getFullYear();
      return curYear - birth;
    },
  },
};
</script>

<style scoped>
table {
  user-select: none;
}
tbody tr {
  border-bottom: 1px solid #000;
}
tr th,
tr td {
  height: 30px;
  line-height: 30px;
  text-align: center;
}
tr th:nth-child(1),
tr th:nth-child(2),
tr th:nth-child(5) {
  width: 4vw;
}
tr th:nth-child(3),
tr th:nth-child(4),
tr th:nth-child(6),
tr th:nth-child(7) {
  width: 15vw;
}
tr th:nth-child(8) {
  width: 16vw;
}
tr th:nth-child(n + 1) {
  background: #add8e6;
}
tr th:nth-child(2n) {
  background: #b399ff;
}
.success,
.fail {
  border: none;
  width: 58px;
  height: 24px;
  line-height: 24px;
  margin: 0 0.5vw;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
}
.success {
  background: green;
}
.fail {
  background: red;
}
</style>