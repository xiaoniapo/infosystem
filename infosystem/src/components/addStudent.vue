<template>
  <div class="add">
    <form>
      <h2>添加学生</h2>
      <div class="name">
        <label>
          <span>姓名: </span>
          <input type="text" v-model="mes.name" />
        </label>
      </div>
      <div class="sex">
        <span>性别:</span>
        <label>
          <input type="radio" name="sex" value="0" v-model="mes.sex" />男
        </label>
        <label>
          <input type="radio" name="sex" value="1" v-model="mes.sex" />女
        </label>
      </div>
      <div class="email">
        <label>
          <span>邮箱:</span>
          <input type="text" v-model="mes.email" />
        </label>
      </div>
      <div class="sNo">
        <label>
          <span>学号:</span>
          <input type="text" v-model="mes.sNo" />
        </label>
      </div>
      <div class="age">
        <label>
          <span>出生年月:</span>
          <input type="text" v-model.number="mes.birth" />
        </label>
      </div>
      <div class="phone">
        <label>
          <span>电话号码:</span>
          <input type="text" v-model="mes.phone" />
        </label>
      </div>
      <div class="address">
        <label>
          <span>家庭地址:</span>
          <input type="text" v-model="mes.address" />
        </label>
      </div>
      <my-btn
        @successBtn="commit"
        @resetContent="reset"
        :firstBtn="firstBtn"
        :secondBtn="secondBtn"
      >
      </my-btn>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import myBtn from "./button.vue";
export default {
  props: {
    firstBtn: {
      type: String,
    },
    secondBtn: {
      type: String,
    },
    nouse: {
      type: Boolean,
      default: false,
    },
  },
  computed: mapState(["curStu"]),
  data() {
    return {
      mes: {
        name: "",
        sex: 0,
        email: "",
        sNo: "",
        birth: "",
        phone: "",
        address: "",
      },
    };
  },
  mounted() {
    if(this.firstBtn === "修改"){
        const myMes = this.curStu;
        const { mes } = this;
        for (const prop in myMes) {
          mes[prop] = myMes[prop];
        }
    }
  },
  components: {
    myBtn,
  },
  methods: {
    commit() {
      if (this.firstBtn === "添加") {
        //表示添加当前学生信息
        this.$store.dispatch("addStu", { reset: this.reset });
      } else if (this.firstBtn === "修改") {

        //表示编辑学生信息
        this.$store.dispatch("editStu");
        this.$emit("myclick", true);
      }
    },
    reset() {
      if (this.nouse) {
        this.$emit("myclick", true);
      } else {
        const { mes } = this;
        mes.name = "";
        mes.sex = 0;
        mes.email = "";
        mes.sNo = "";
        mes.birth = "";
        mes.phone = "";
        mes.address = "";
      }
    },
  },
  watch: {
    mes: {
      deep: true,
      handler(newVal) {
        this.$store.commit("changeCurStu", { stu: newVal });
      },
    },
  },
};
</script>

<style scoped>
.add {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
}
form {
  width: 400px;
  margin: 0 auto;
}
form > div {
  height: 40px;
  line-height: 40px;
  margin-left: 20px;
}
form > div span {
  display: inline-block;
  width: 80px;
  text-align: right;
  vertical-align: middle;
}
form > div input[type="text"] {
  width: 180px;
  margin-left: 30px;
  outline: none;
  height: 20px;
  padding-left: 5px;
}
form > div input[value="0"] {
  margin-left: 30px;
}
form h2 {
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  text-align: center;
}
.btn {
  text-align: center;
}
.btn button {
  width: 60px;
  height: 26px;
  border-radius: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 10px;
  background-image: linear-gradient(90deg, green, yellow, red);
}
</style>