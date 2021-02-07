<template>
  <div class="code-card-component-contaier">
    <div class="effect-show">
      <slot name="effect"></slot>
    </div>
    <div v-if="title" class="code-explain">
      <div class="title">{{title}}</div>
      <span>{{desc}}</span>
    </div>
    <div class="code-box-actions" @click="changeButtonStatus">
      <span>{{buttonText}}</span>
    </div>
    <!-- <transition name="code-snippet"> -->
      <div class="code-body" :class="{'active':isOpen}">
        <slot name="code"></slot>
      </div>
    <!-- </transition> -->
  </div>
</template>
<script>
export default {
  name: "rocky-core-card",
  data: function() {
    return {
      isOpen: false
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    }
  },
  // 生命周期
  created() {},
  // 计算属性
  computed: {
    buttonText: function() {
      return this.isOpen ? "隐藏代码" : "显示代码";
    }
  },
  methods: {
    changeButtonStatus: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
<style scoped>
.code-card-component-contaier {
  background-color: #fff;
  border: 1px solid #ececec;
  border-radius: 4px;
  margin-bottom: 60px;
  overflow: hidden;
}
.code-card-component-contaier pre {
  display: flex;
  align-items: center;
  white-space: pre-wrap; /* css3.0 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
.effect-show {
  padding: 42px 24px 50px;
}
.code-explain {
  position: relative;
  border-top: 1px solid #ececec;
  border-bottom: 1px dashed #ececec;
  padding: 18px 24px 12px;
}
.code-explain .title {
  position: absolute;
  top: -12px;
  padding: 0 20px 0 10px;
  left: 14px;
  background-color: #fff;
}
.code-snippet-enter,.code-snippet-leave-to {
  height: 0;
  transition: all 0.5s linear;
}
.code-snippet-enter-to,.code-snippet-leave {
  height: auto;
  transition: all 0.5s linear;
}

.code-body {
  height: 0;
  overflow: hidden;
  transition: all 0.5s linear;
}
.code-body.active {
  height: auto;
}
.code-box-actions {
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.code-box-actions:hover {
  background-color: #f9fafc;
  color: #409eff;
}
</style>