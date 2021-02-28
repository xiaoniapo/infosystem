<template>
  <div class="register">
    <form class="register_box">
      <h2>register</h2>
      <div class="account">
        <label>
          <span> 账号:</span>
          <input type="text" placeholder="请输入账号" v-model="account" />
        </label>
      </div>
      <div class="username">
        <label>
          <span> 用户名:</span>
          <input type="text" placeholder="请输入用户名" v-model="username" />
        </label>
      </div>
      <div class="pwd">
        <label>
          <span> 密码:</span>
          <input type="text" placeholder="请输入密码" v-model="password" />
        </label>
      </div>
      <div class="repwd">
        <label>
          <span> 确认密码:</span>
          <input type="text" placeholder="请确认密码" v-model="rePassword" />
        </label>
      </div>
      <my-btn @successBtn="registe" @resetContent="reset" content="注册"></my-btn>
      <div class="login" @click="toLogin">
        <span>已有账号，去登陆</span>
      </div>
    </form>
  </div>
</template>

<script>
import myBtn from "../components/button.vue";
export default {
  components: {
    myBtn,
  },
  data() {
    return {
      account: "",
      username: "",
      password: "",
      rePassword: "",
    };
  },
  methods: {
    registe() {
      const { account, username, password, rePassword } = this;
      if (password !== rePassword) {
        alert("两次输入的密码不一致");
        return;
      }
      this.$http
        .register({
          account,
          username,
          password,
          rePassword,
        })
        .then((data) => {
          console.log(data);
          localStorage.setItem("login", JSON.stringify(data)); //存储当前服务器所反馈的信息
          localStorage.setItem("userMes", JSON.stringify({
            user: this.account,
            pwd: this.password,
          }));//存储当前的登录信息到本地
          this.$router.replace("/home");
        });
    },
    toLogin() {
      this.$router.push("/login");
    },
    reset() {
      this.account = "";
      this.username = "";
      this.password = "";
      this.rePassword = "";
    }
  },
};
</script>

<style scoped>
.register {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/bg.jpg");
  background-size: 100% 100%;
  position: relative;
  user-select: none;
}
.register_box {
  width: 600px;
  height: 400px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  margin: auto;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.register_box h2 {
  line-height: 40px;
  margin: 10px 0;
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid #fff;
}
.account,
.username,
.pwd,
.repwd {
  line-height: 50px;
  margin: 10px 0;
  padding-left: 30px;
  font-size: 18px;
}
.account span,
.username span,
.pwd span,
.repwd span {
  display: inline-block;
  width: 80px;
}
.account input,
.username input,
.pwd input,
.repwd input {
  height: 32px;
  width: 350px;
  outline: none;
  margin-left: 15px;
  padding-left: 10px;
  border-radius: 5px;
}
.registe_btn {
  width: 80px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  background-image: linear-gradient(90deg, green, yellow, red);
  outline: none;
  border: none;
  cursor: pointer;
  transform: translateX(260px);
}
.login {
  text-align: center;
  margin-top: 15px;
  color: #02b6fd;
  text-decoration: #02b6fd underline;
}
.login span {
  cursor: pointer;
}
</style>