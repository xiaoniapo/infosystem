<template>
  <div class="mask">
      <add-student>编辑</add-student>
  </div>
</template>

<script>
import addStudent from "./addStudent";
export default {
    components: {
        addStudent,
    }
}
</script>

<style>
.mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, .5);
}
</style>