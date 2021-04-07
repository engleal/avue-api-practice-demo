<template>
  <div class="page-container">
    <rc-basic-content>
      <template slot="content">
        <rc-markdown :title="title" :subTitle="subTitle" :effectDesc="effectDesc" :scene="scene"></rc-markdown>
        <rc-code-card title="基本用法" desc="基本使用。" id="JCYF">
          <template slot="effect">
            <avue-comment :option="option" :data="data">
              <i class="el-icon-delete" @click="$message('自定义菜单')"></i>
            </avue-comment>
            <avue-comment :option="option" :data="data" reverse>
              <i class="el-icon-delete" @click="$message('自定义菜单')"></i>
            </avue-comment>
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
  name: "Comment",
  data() {
    return {
      title: ComponentSource.comment.title,
      subTitle: ComponentSource.comment.subTitle,
      effectDesc: ComponentSource.comment.effectDesc,
      scene: ComponentSource.comment.scene,
      anchorSource: ComponentSource.comment.anchor,
      codeSnippet: "",
      value: "我是内容",
      attributesSource: ComponentSource.comment.attributes,
      eventSource: ComponentSource.comment.events,
      data: {
        avatar:
          "http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96",
        author: "某人",
        body: `<p>那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？</p>
            <blockquote>妈：我打算在下个月和樱子结婚。</blockquote>`
      },
      option: {
        props: {
          avatar: "avatar",
          author: "author",
          body: "body"
        }
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