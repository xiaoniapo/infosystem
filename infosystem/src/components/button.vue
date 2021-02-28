<template>
  <div class="btn">
      <button class="success" @click.prevent="success">
        <slot></slot>
      </button>
      <button class="fail" @click.prevent="reset">重置</button>
  </div>
</template>

<script>
export default {
  methods: {
    success() {
      this.$emit("successBtn");
    },
    reset() {
      this.$emit("resetContent");
    }
  }
}
</script>

<style scoped>
.btn {
  text-align: center;
  user-select: none;
}
.btn button {
  margin: 0 5px;
  border: none;
  outline: none;
  cursor: pointer;
  width: 80px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
}
.success {
  background: #85CE61;
}
.fail {
  background: #F78989;
}
</style>