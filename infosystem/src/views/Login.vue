<template>
  <div class="login">
    <div class="login_box">
      <h2>Login</h2>
      <div class="user iconfont">
        <input type="text" placeholder="请输入用户名" v-model="user" />
      </div>
      <div class="pwd iconfont">
        <input type="password" placeholder="请输入密码" v-model="pwd" />
      </div>
      <div class="login-btn" @click="toHome">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      pwd: "",
    };
  },
  methods: {
    toHome() {
      this.$http
        .post(
          `/api/student/stuLogin?appkey=${this.appkey}&account=${this.user}&password=${this.pwd}`
        )
        .then((data) => {
          localStorage.setItem("msg", JSON.stringify(data));
          this.$router.replace({
            path: "/home_page",
            name: "home_page",
          });
        })
        .catch((err) => {
          console.log(err);
        });
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

  position: relative;
}

.login_box {
  width: 500px;
  height: 360px;
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.login_box h2 {
  width: 100%;
  line-height: 35px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  border-bottom: 1px solid #fff;
}
.user,
.pwd {
  width: 90%;
  margin: 0 auto;
}
.user::before {
  content: "\e603";
  vertical-align: middle;
  color: #fff;
}
.pwd::before {
  content: "\e601";
  vertical-align: middle;
  color: #fff;
}
.user input,
.pwd input {
  width: 80%;
  height: 36px;
  border-radius: 5px;
  outline: none;
  padding-left: 8px;
  font-size: 16px;
  margin-left: 16px;
}

.login-btn {
  width: 150px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  margin: 0px auto;
  color: #fff;
  background-image: linear-gradient(90deg, red, blue);
  cursor: pointer;
}
</style>