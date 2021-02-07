<template>
  <div class="input-page-container">
    <rc-markdown title="Input" subtitle="输入框" effectDesc="通过鼠标或键盘输入内容，是最基础的表单域的包装。" :scene="scene"></rc-markdown>
    <rc-code-card title="基本用法" desc="基本使用。">
      <div slot="effect">
        <avue-input v-model="form" placeholder="请输入内容"></avue-input>
      </div>
      <div slot="code">
        <pre>
         <code class="language-xml line-numbers">{{codeSnippet}}</code>
        </pre>
      </div>
    </rc-code-card>
  </div>
</template>
<script>
import Prism from "prismjs";
export default {
  name: "InputPage",
  data() {
    return {
      scene: {
        title: "何时使用",
        desc: "",
        features: [
          "需要用户输入表单域内容时。",
          "提供组合型输入框，带搜索的输入框，还可以进行大小选择。"
        ]
      },
      codeSnippet: ""
    };
  },
  // 实例创建前 无el 无data
  beforeCreate() {},
  // 实例已经创建 无el 有数据观测、属性和方法的运算，watch/event事件回调，完成了data 数据的初始化
  created() {},
  // 虚拟dom阶段 生成html 未挂载
  beforeMount() {},
  // html 模板挂载到页面
  mounted() {
    this.codeSnippet = `<avue-input v-model="form" placeholder="请输入内容"></avue-input>`;
  },
  // 数据更新之前
  beforeUpdate() {},
  // 数据更新完成
  updated() {},
  // 实例销毁前
  beforeDestroy() {},
  // 实例销毁后
  destroyed() {},
  // 方法合集
  methods: {},
  // 计算属性 一个数据受多个数据影响
  computed: {},
  // 监听属性 一个数据影响多个数据
  watch: {},
  // 过滤器
  filters: {}
};
</script>
<style scoped>
</style>
