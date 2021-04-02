<template>
  <div class="page-container">
    <rc-basic-content>
      <template slot="content">
        <rc-markdown :title="title" :subTitle="subTitle" :effectDesc="effectDesc" :scene="scene"></rc-markdown>
        <rc-code-card title="基本用法" desc="基本使用。" id="JCYF">
          <template slot="effect">
            <avue-date
              v-model="value"
              format="yyyy年MM月dd日"
              value-format="yyyy-MM-dd"
              placeholder="请选择日期"
              @focus="handleFocus"
              @blur="handleBlur"
              @click="handleClick"
            ></avue-date>
          </template>
          <div slot="source-code">
            <pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
          </div>
        </rc-code-card>
        <rc-table title="API 属性" id="ATTRIBUTES" :dataSource="attributesSource"></rc-table>
        <rc-table title="API 事件" id="EVENTS" :dataSource="eventSource"></rc-table>
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
  name: "Date",
  data() {
    return {
      title: ComponentSource.date.title,
      subTitle: ComponentSource.date.subTitle,
      effectDesc: ComponentSource.date.effectDesc,
      scene: ComponentSource.date.scene,
      anchorSource: ComponentSource.date.anchor,
      attributesSource: ComponentSource.date.attributes,
      eventSource: ComponentSource.date.events,
      codeSnippet: "",
      value: "2020-01-01"
    };
  },
  // 实例创建前 无el 无data
  beforeCreate() {},
  // 实例已经创建 无el 有数据观测、属性和方法的运算，watch/event事件回调，完成了data 数据的初始化
  created() {},
  // 虚拟dom阶段 生成html 未挂载
  beforeMount() {},
  // html 模板挂载到页面
  mounted() {},
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
    handleFocus(p1, p2) {
      console.log("focus-p1", p1);
      console.log("focus-p2", p2);
    },
    handleBlur(p1, p2) {
      console.log("blur-p1", p1);
      console.log("blur-p2", p2);
    },
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