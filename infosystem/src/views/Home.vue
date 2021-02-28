<template>
  <div class="homePage" @click="handleClick">
    <!-- 两栏布局  左边定宽右边自适应 -->
    <div class="nav_list">
      <div class="title">学生管理</div>
      <router-link :to="{ name: 'studentlist' }" class="stuList">学生列表</router-link>
      <router-link :to="{ name: 'addStu' }" class="addStu">添加学生</router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  methods: {
    ...mapMutations(["changeQuit"]),
    handleClick() {
      if(this.quit) {
        this.$store.commit("changeQuit")
      }
    },
  },
  computed: {
    ...mapState(["quit"])
  }
};
</script>

<style scoped>
.homePage {
  width: 100vw;
  height: 100vh;
}
.nav_list {
  width: 12vw;
  height: 100vh;
  background: #02b6fd;
  float: left;
}
.title {
    padding-left: 1.2vw;
}
.title,
.stuList,
.addStu {
    color: #fff;
    line-height: 35px;
}
.stuList,
.addStu {
    display: block;
    margin-left: 2vw;
}
a.router-link-exact-active {
  font-weight: bold;
}
.main {
    width: 88vw;
    padding-left: 12vw;
    color: #000;
}
</style>