<template>
  <div class="btn">
    <button class="success" @click.prevent="success">
      {{ firstBtn }}
    </button>
    <button class="fail" @click.prevent="reset">
      {{ secondBtn }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    firstBtn: {
      type: String,
      required: true,
    },
    secondBtn: {
      type: String,
      required: true,
    },
  },
  methods: {
    success() {
      this.$emit("successBtn");
    },
    reset() {
      this.$emit("resetContent");
    },
  },
};
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
  height: 24px;
  line-height: 24px;
  border-radius: 12px;
}
.success {
  background: #85ce61;
}
.fail {
  background: #f78989;
}
</style>