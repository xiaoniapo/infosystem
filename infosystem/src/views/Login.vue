<template>
  <div class="login">
    <form class="login_box">
      <h2>Login</h2>
      <div class="user">
        <label>
          <i class="iconfont">&#xe603;</i>
          <input type="text" placeholder="请输入账号" v-model="user" />
        </label>
      </div>
      <div class="pwd">
        <label>
          <i class="iconfont">&#xe601;</i>
          <input type="password" placeholder="请输入密码" v-model="pwd" />
        </label>
      </div>
      <my-btn @successBtn="toHome" @resetContent="reset" firstBtn="登录" secondBtn="重置"></my-btn>
      <div class="register" @click="toRegiste">
        <span>还没有账号，去注册</span>
      </div>
    </form>
  </div>
</template>

<script>
import myBtn from "../components/button.vue";
export default {
  data() {
    return {
      user: "",
      pwd: "",
    };
  },
  components: {
    myBtn,
  },
  methods: {
    toHome() {
        this.$http
          .login({
            account: this.user,
            password: this.pwd,
          })
          .then((data) => {
            localStorage.setItem("login", JSON.stringify(data));//存储当前服务器所反馈的信息
            localStorage.setItem("userMes", JSON.stringify({
              user: this.user,
              pwd: this.pwd
            }));//存储当前的登录信息到本地
            this.$router.replace("/home");
          })
          .catch((err) => {
            console.log(err);
          });
    },
    toRegiste() {
      this.$router.push("/register");
    },
    reset() {
      this.user = "";
      this.pwd = "";
    },
  },
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/bg.jpg");
  background-size: 100% 100%;
  user-select: none;
  position: relative;
}

.login_box {
  width: 500px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login_box h2 {
  width: 100%;
  line-height: 35px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  border-bottom: 1px solid #fff;
  padding: 10px 0;
}
.user,
.pwd {
  width: 90%;
  line-height: 50px;
  margin: 15px auto;
}
.user input,
.pwd input {
  width: 80%;
  height: 36px;
  border-radius: 5px;
  outline: none;
  padding-left: 8px;
  font-size: 16px;
  margin-left: 20px;
}

.btn {
  text-align: center;
}

.login-btn,
.reset {
  width: 80px;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;
  background-image: linear-gradient(90deg, green, yellow, red);
  cursor: pointer;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
  border: none;
  outline: none;
}
.register {
  text-align: center;
  color: rgb(2, 182, 253);
  text-decoration: rgb(2, 182, 253) underline;
  cursor: pointer;
  margin-top: 20px;
}
.register span {
  cursor: pointer;
}
</style>