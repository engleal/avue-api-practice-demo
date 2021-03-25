<template>
  <div class="page-container">
    <rc-basic-content>
      <template slot="content">
        <rc-markdown :title="title" :subTitle="subTitle" :effectDesc="effectDesc" :scene="scene"></rc-markdown>
        <rc-code-card title="基本用法" desc="基本使用。" id="JCYF">
          <template slot="effect">
            <avue-input
              :prependClick="prependClick"
              v-model="aVueValue"
              prepend="前置"
              append="后置"
              placeholder="请输入内容"
            ></avue-input>
          </template>
          <div slot="source-code">
            <pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
            </pre>
          </div>
        </rc-code-card>
        <rc-table title="属性" id="ATTRIBUTES" :dataSource="attributesSource"></rc-table>
        <rc-table title="事件" id="EVENTS" :dataSource="eventSource"></rc-table>
      </template>
      <template slot="anchor">
        <rc-time-line :dataSource="anchorSource"></rc-time-line>
      </template>
    </rc-basic-content>
  </div>
</template>
<script>
import Prism from "prismjs";
import ComponentSource from "./index";
export default {
  name: "Input",
  data() {
    return {
      title: ComponentSource.input.title,
      subTitle: ComponentSource.input.subTitle,
      effectDesc: ComponentSource.input.effectDesc,
      scene: ComponentSource.input.scene,
      anchorSource: ComponentSource.input.anchor,
      codeSnippet: "",
      aVueValue: "我是内容",
      attributesSource: ComponentSource.input.attributes,
      eventSource: ComponentSource.input.events
    };
  },
  // 实例创建前 无el 无data
  beforeCreate() {},
  // 实例已经创建 无el 有数据观测、属性和方法的运算，watch/event事件回调，完成了data 数据的初始化
  created() {
    // throw new Error("this is a bug")
  },
  // 虚拟dom阶段 生成html 未挂载
  beforeMount() {},
  // html 模板挂载到页面
  mounted() {
    // 注意：
    //      这个源码如果过长会导致页面显示有问题，记得注意换行
    this.codeSnippet = `<template>
  <div>
    <avue-input 
      :prependClick="prependClick" 
      v-model="aVueValue" 
      prepend="前置" 
      append="后置" 
      placeholder="请输入内容"
    ></avue-input>
  </div>
</template>`;
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
  methods: {
    prependClick(event) {
      console.log("prependClick", event);
    }
  },
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
