<template>
  <div class="time-line">
    <div v-for="(item,index) in dataSource" :key="index" class="anchor-link">
      <a :href="item.anchorPoint">{{item.name}}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "rocky-core-time-line",
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  // 生命周期
  created() {},
  methods: {
    exampleClickEvent: function() {
      console.log("exampleClickEvent 点击事件");
    }
  }
};
</script>
<style scoped>
.time-line {
  position: relative;
  padding-left: 16px;
  border-left: 1px solid #e8eaec;
}
.time-line::before {
  content: "";
  display: inline-block;
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid #2d8cf0;
  background-color: #fff;
  left: -6px;
  transition: all 0.2s ease-in-out;
  top: 12px;
}
.anchor-link {
  height: 32px;
  line-height: 32px;
  position: relative;
}

.anchor-link a {
  color: #00A4FF;
  font-size: 12px;
}
.anchor-link a:hover {
  font-weight: 700;
}
</style>