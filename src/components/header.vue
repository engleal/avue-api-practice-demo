<template>
  <div class="container">
    <div class="header-body">
      <div class="left-logo">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt class="logo-image">
      </div>
      <div class="right-operate">暂不确定右边</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rocky-core-header",
  props: {
    exampleProp: {
      type: String,
      default: ""
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
.container{
      box-shadow: 0 2px 8px #f0f1f2;
}
.header-body {
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  overflow: hidden;
}
.left-logo {
  width: 300px;
}
.left-logo .logo-image{
  height: 32px;
}
.right-operate {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
