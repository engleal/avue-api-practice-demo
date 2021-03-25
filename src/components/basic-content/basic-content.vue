<template>
  <div class="basic-content">
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="anchor-wrapper">
      <div class="anchor-content">
        <slot name="anchor"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rocky-core-basic-content",
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
.basic-content {
  display: flex;
  width: 100%;
}
.basic-content .content {
  flex:1;
  padding: 0 25px;
}
.basic-content .anchor-wrapper {
  width: 270px;
}
.basic-content .anchor-wrapper .anchor-content {
  position: fixed;
  top: 104px;
  right: 16px;
  width: 270px;
}
</style>