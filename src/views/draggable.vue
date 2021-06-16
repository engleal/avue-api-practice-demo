<template>
 <div class="page-container">
   <rc-basic-content>
     <template slot="content">
       <rc-markdown
         :title="title"
         :subTitle="subTitle"
         :effectDesc="effectDesc"
         :scene="scene"
       ></rc-markdown>
       <rc-code-card title="基本用法" desc="基本使用。" id="JCYF">
         <template slot="effect">
           <div style="position:relative;height:400px;" @mousedown="handleMouseDown">
             <avue-draggable :width="obj.width" :height="obj.height" :left="obj.left" :top="obj.top" id="draggable" ref="draggable" @focus="handleFocus" @blur="handleBlur">
              <div style="width:200px;height:200px;background:red">
              </div>
            </avue-draggable>
           </div>
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
  name: "Draggable",
  data() {
    return {
        title: ComponentSource.draggable.title,
        subTitle: ComponentSource.draggable.subTitle,
        effectDesc: ComponentSource.draggable.effectDesc,
        scene: ComponentSource.draggable.scene,
        anchorSource: ComponentSource.draggable.anchor,
        codeSnippet: "",
        obj:{
          width:200,
          height:200,
          left:300,
          top:200
        },
        attributesSource: ComponentSource.draggable.attributes,
        eventSource: ComponentSource.draggable.events
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
  beforeDestroy(){},
  // 实例销毁后
  destroyed(){},
  // 方法合集
  methods: {
      //获取焦点
    handleFocus ({index, left, top, width, height }) {
      console.log(index, left, top, width, height)
    },
    //失去焦点
    handleBlur ({index, left, top, width, height }) {
      console.log(index, left, top, width, height)
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