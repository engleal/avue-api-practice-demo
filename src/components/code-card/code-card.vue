<template>
  <div class="code-card-component-contaier" :id="id">
    <div class="effect-area">
      <div v-if="title" class="code-explain">
        <div class="title">{{title}}</div>
        <span>{{desc}}</span>
      </div>
      <div class="effect-show">
        <slot name="effect"></slot>
      </div>
    </div>
    <div class="source-code-area">
      <div class="source-code-operation">
        <div @click="showAllSourceCode" class="square-four-conners-unicode">
          <span>&#9974;</span>
        </div>
      </div>
      <div class="code-body">
        <slot name="source-code"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rocky-core-card",
  data: function() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    id:{
      type: String,
      default: ""
    }
  },
  // 生命周期
  created() {},
  // 计算属性
  computed: {},
  methods: {
    // 展开所有的源码
    showAllSourceCode: function() {
      console.log("showAllSourceCode");
    }
  }
};
</script>
<style scoped>
.code-card-component-contaier {
  background-color: #fff;
  border: 1px solid #ececec;
  border-radius: 4px;
  margin-bottom: 100px;
  margin-top: 32px;
  display: flex;
}
.code-card-component-contaier:hover {
  box-shadow: 2px 2px 9px rgba(140, 140, 140, 0.35);
}
.code-card-component-contaier .effect-area,
.code-card-component-contaier .source-code-area {
  flex: 1;
}
.code-card-component-contaier .source-code-area {
  border-left: 1px dashed #ececec;
}
.code-card-component-contaier pre {
  display: flex;
  align-items: center;
  white-space: pre-wrap; /* css3.0 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  background-color: transparent;
  padding: 0;
}
.code-card-component-contaier code {
  padding: 5px 15px;
}
.effect-area .effect-show {
  padding: 42px 24px 50px;
  border-top: 1px dashed #ececec;
}
.effect-area .code-explain {
  position: relative;
  padding: 24px 24px 12px;
}
.effect-area .code-explain .title {
  position: absolute;
  top: -15px;
  padding: 0 20px 0 10px;
  left: 14px;
  font-weight: 700;
  font-size: 20px;
  background-color: #fff;
}

.source-code-area .source-code-operation {
  height: 40px;
  padding: 0 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #ececec;
}
.source-code-operation .square-four-conners-unicode {
  padding: 0 5px;
  cursor: pointer;
  -webkit-user-select: none;
}
.source-code-operation .square-four-conners-unicode span {
  font-size: 24px;
  color: rgb(0, 0, 0);
  font-style: normal;
  font-weight: bold;
}
.source-code-operation .square-four-conners-unicode:hover span {
  color: #00a4ff;
}

.source-code-area .code-body {
  height: auto;
  overflow: hidden;
  transition: all 0.5s linear;
}
</style>