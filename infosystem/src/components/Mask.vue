<template>
  <div class="mask" @click="handleClick">
    <add-student :firstBtn="firstBtn" :secondBtn="secondBtn" :nouse="nouse" @myclick="click"></add-student>
  </div>
</template>

<script>
import addStudent from "./addStudent";
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    firstBtn: {
      type: String,
    },
    secondBtn: {
      type: String,
    },
  },
  data() {
    return {
      nouse: true
    }
  },
  components: {
    addStudent,
  },
  methods: {
    handleClick(e) {
      if (e.target.className === "mask") {
        this.$emit("isshow");
      }
    },
    click(type) {
      console.log(type)
      type && this.$emit("isshow")
    }
  },
  
};
</script>

<style scoped>
.mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.5);
}
</style>