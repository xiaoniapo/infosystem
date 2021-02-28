<template>
  <div class="personal">
    <ul class="user" @click.stop="handleClick">
      <li class="iconfont" :class="[quit ? 'bottom' : 'left']">{{ userName }}</li>
      <li class="quit" v-if="quit" @click.stop="quitUser">退出</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      userName: JSON.parse(localStorage.getItem("userMes")).user,
    };
  },
  methods: {
    ...mapMutations({
      handleClick: "changeQuit"
    }),
    quitUser() {
      const res = window.confirm("确认退出嘛？亲");
      if (res) {
        localStorage.removeItem("login");
        localStorage.removeItem("userMes");
        this.$router.replace("/login");
      }
    },
  },
  computed: {
    ...mapState(["quit"]),
  }
};
</script>

<style scoped>
.personal {
  height: 30px;
  line-height: 30px;
  background: #ffa500;
  user-select: none;
  position: relative;
}
.user {
  position: absolute;
  padding-right: 15px;
  right: 0;
  cursor: pointer;
  z-index: 1;
}
.user li {
  height: 30px;
  font-size: 14px;
}
.quit {
  background: #ffa500;
}
.left::after {
  content: "\eb21";
}
.bottom::after {
  content: "\e615";
}
</style>