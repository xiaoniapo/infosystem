<template>
  <div class="studentList">
    <personal-mes></personal-mes>
    <table-list></table-list>
    <stu-page :totalPage="totalPage" :nowPage="nowPage" @changePage="changePage"></stu-page>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import tableList from "../components/TableList.vue";
import personalMes from "../components/PersonalMes.vue";
import stuPage from "../components/Page.vue";
export default {
  components: {
    tableList,
    personalMes,
    stuPage,
  },
  mounted() {
    this.$store.dispatch("pageStu", { page: this.nowPage });
  },
  methods: {
    changePage(num) {
      this.$store.commit("changeNowPage", { num });
      this.$store.dispatch("pageStu", { page: this.nowPage });
    }
  },
  computed: {
    ...mapGetters({
      totalPage: "totalPage",
    }),
    ...mapState(["nowPage"]),
  },
};
</script>