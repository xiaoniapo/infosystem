<template>
  <div v-if="exist" :class="[type, fade]" class="alert">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      exist: true, //表示是否在页面显示当前元素
      show: true, //表示是进入动画还是离开动画
    };
  },
  computed: {
    fade() {
      return this.show ? "fade-in" : "fade-out";
    },
  },
};
</script>

<style scoped>
.alert {
  width: 260px;
  height: 60px;
  line-height: 60px;
  position: fixed;
  top: 30px;
  left: calc(50% - 130px);
  text-align: center;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
}
.success {
  background-color: #67c23a;
}
.fail {
  background-color: #f56c6c;
}
.fade-in {
  animation: fadeIn 0.5s forwards;
}
.fade-out {
  animation: fadeOut 0.5s forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    top: -100px;
  }
  to {
    opacity: 1;
    top: 30px;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
    top: 30px;
  }
  to {
    opacity: 0;
    top: -100px;
  }
}
</style>