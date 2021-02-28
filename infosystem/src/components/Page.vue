<template>
  <div class="pages">
    <button
      class="iconfont prev"
      :class="{ disabled: nowPage === 1 }"
      @click="changePage('prev')"
    ></button>

    <ul class="page" v-if="totalPage <= 7">
      <li
        v-for="page in totalPage"
        :key="page"
        :class="{ active: page === nowPage }"
        @click="changePage(page)"
      >
        {{ page }}
      </li>
    </ul>
    <ul class="page" v-else>
      <!-- 左端情况 -->
      <template v-if="nowPage <= 4">
        <li
          v-for="page in 6"
          :key="page"
          :class="{ active: page === nowPage }"
          @click="changePage(page)"
        >
          {{ page }}
        </li>
        <li
          class="right-arrow iconfont"
          @click="changePage('right-arrow')"
        ></li>
        <li
          :class="{ active: nowPage === totalPage }"
          @click="changePage(totalPage)"
        >
          {{ totalPage }}
        </li>
      </template>
      <!-- 右端情况 -->
      <template v-else-if="nowPage >= totalPage - 3">
        <li :class="{ active: nowPage === 1 }" @click="changePage(1)">1</li>
        <li class="left-arrow iconfont" @click="changePage('left-arrow')"></li>
        <li
          v-for="page in 6"
          :key="page"
          :class="{ active: page === nowPage }"
          @click="changePage(totalPage - 6 + page)"
        >
          {{ totalPage - 6 + page }}
        </li>
      </template>
      <!-- 中间情况 -->
      <template v-else>
        <li :class="{ active: nowPage === 1 }" @click="changePage(1)">1</li>
        <li class="left-arrow iconfont" @click="changePage('left-arrow')"></li>
        <li
          v-for="page in 5"
          :key="page"
          :class="{ active: page === 3 }"
          @click="changePage(nowPage - 3 + page)"
        >
          {{ nowPage - 3 + page }}
        </li>
        <li
          class="right-arrow iconfont"
          @click="changePage('right-arrow')"
        ></li>
        <li
          :class="{ active: nowPage === totalPage }"
          @click="changePage(totalPage)"
        >
          {{ totalPage }}
        </li>
      </template>
    </ul>
    <button
      class="iconfont next"
      @click="changePage('next')"
      :class="{ disabled: nowPage === totalPage }"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    nowPage: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      change: 5,//表示当点击了省略点的时候进行加减页的数量
    };
  },
  methods: {
    changePage(type) {
      const { totalPage, change } = this;
      let num = null;
      if (type === "prev") {
        if (this.nowPage === 1) {
          return;
        } else {
          num = -1;
        }
      } else if (type === "next") {
        if (this.nowPage === totalPage) {
          return;
        } else {
          num = 1
        }
      } else if (type === "left-arrow") {
        num = -change;
      } else if (type === "right-arrow") {
        num = change;
      } else {
        //数字情况
        num = type - this.nowPage;
      }
      this.$emit("changePage", num);//触发组件上绑定的自定义事件
    },
  },
};
</script>

<style>
.pages {
  margin: 20px auto;
  user-select: none;
  text-align: center;
}

.prev {
  padding-right: 12px;
}
.prev::before {
  content: "\fa17";
}
.next {
  padding-left: 12px;
}
.next::before {
  content: "\fa18";
}
.prev,
.next {
  outline: none;
  border: none;
  background: #fff;
}
.page {
  display: inline-block;
}
.page li,
.prev,
.next {
  padding: 0 4px;
  background: #fff;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  color: #303133;
}
.page li.active {
  color: #409eff;
}

.page li:hover,
.prev:hover,
.next:hover {
  color: #409eff;
}

.left-arrow::before,
.right-arrow::before {
  content: "\fa3c";
}
.left-arrow:hover::before {
  content: "\fa19";
}
.right-arrow:hover::before {
  content: "\fa1a";
}
.disabled {
  color: #c0c4cc;
  background-color: #fff;
  cursor: not-allowed;
}
</style>