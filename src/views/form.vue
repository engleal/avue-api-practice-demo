<template>
  <div class="page-container">
    <rc-basic-content>
      <template slot="content">
        <rc-markdown :title="title" :subTitle="subTitle" :effectDesc="effectDesc" :scene="scene"></rc-markdown>
        <rc-code-card title="基本用法" desc="基本使用。" id="JCYF">
          <template slot="effect">
            <avue-form ref="form" v-model="obj0" :option="option0" @change="handleChange">
              <template slot="menuForm">
                <el-button icon="el-icon-user" type="primary">提 交</el-button>
                <el-button icon="el-icon-delete">清 空</el-button>
              </template>
            </avue-form>
          </template>
          <div slot="source-code">
            <pre>
              <code class="language-xml line-numbers">{{codeSnippet}}</code>
           </pre>
          </div>
        </rc-code-card>
        <rc-table title="API 属性(option)" id="ATTRIBUTES" :dataSource="attributesSource"></rc-table>
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
  name: "Form",
  data() {
    return {
      title: ComponentSource.form.title,
      subTitle: ComponentSource.form.subTitle,
      effectDesc: ComponentSource.form.effectDesc,
      scene: ComponentSource.form.scene,
      anchorSource: ComponentSource.form.anchor,
      attributesSource: ComponentSource.form.attributes,
      eventSource: ComponentSource.form.events,
      codeSnippet: ``,
      obj0: {},
      option0: {
        emptyBtn: false,
        submitBtn: false,
        statusIcon: true,
        labelSuffix: "(元)",
        menuPosition: "left",
        column: [
          {
            // lable文字
            label: "用户名",
            // prop
            prop: "username",
            // 提示文案
            placeholder: "请输入用户名",
            // hover时的提示tooltip文字
            tip: "提示文字",
            // 该项columnItem是否显示
            display: true,
            // 栅格占据的列数
            span: 10,
            // 栅格左侧的间隔格数
            offset: 2,
            // 自定义className
            className: "cutormer-col",
            // 校验规则 参见：https://github.com/yiminghe/async-validator
            rules: [
              {
                // 是否必填
                required: true,
                message: "请输入用户名",
                trigger: "blur"
              }
            ]
          }
        ],
        group: [
          {
            // 组名前的icon
            icon: "el-icon-info",
            // 组名
            label: "分组1",
            // 是否展开
            collapse: false,
            // 是否能收起 默认为true
            arrow: true,
            // 是否展示整个分组
            display: true,
            // 组的prop
            prop: "group1",
            column: [
              {
                label: "内容1",
                placeholder: "请输入用户名",
                prop: "text1"
              }
            ]
          },
          {
            icon: "el-icon-info",
            label: "分组2",
            arrow: false,
            prop: "group2",
            column: [
              {
                label: "选项卡2",
                placeholder: "请输入用户名",
                prop: "text2"
              },
              {
                label: "选项卡3",
                placeholder: "请输入用户名",
                prop: "text3"
              }
            ]
          }
        ]
      }
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
    handleChange(event) {
      console.log("event", event)
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