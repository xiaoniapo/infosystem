<template>
  <div id="app">
    <div class="left_nav" v-if="isLogin">
      <ul class="nav_box">
        <li
          v-for="item in list"
          :key="item.id"
          :class="{ underline: item.class }"
        >
          <router-link
            :to="{ name: item.name }"
            :class="[
              item.class,
              { iconfont: item.class },
              { white: !item.class },
            ]"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.$http.get("/nav_list.json").then((data) => {
      this.list = data.data;
    });
  },
  computed: {
    isLogin() {
      return this.$route.path !== "/login";
    },
  },
};
</script>

<style scoped>
#app::after {
  content: "";
  display: block;
  clear: both;
}
.left_nav {
  float: left;
}
.home_page::before {
  content: "\ec0b";
}
.data_statistics::before {
  content: "\e65a";
}
.info_manage::before {
  content: "\e608";
}
.user_manage::before {
  content: "\e633";
}
.nav_box {
  width: 14vw;
  height: 100vh;
  background: #18293b;
  box-sizing: border-box;
}
.nav_box li {
  line-height: 40px;
}
.nav_box li::before {
  padding-left: 10px;
}
.nav_box li.underline {
  border-bottom: 2px solid #fff;
}
.nav_box li a {
  color: #fff;
}
.nav_box li a::before {
  margin: 0 10px;
}
/* 表示没有字体图标的 */
.white {
  margin-left: 41px;
  font-size: 16px;
}
.nav_box li a.router-link-exact-active {
  color: #02b6fd;
  font-weight: bold;
}
.show {
  float: left;
  padding-left: 1vw;
}
</style>
