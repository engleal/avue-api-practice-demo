<template>
  <div id="app">
    <rc-header></rc-header>
    <div class="app-body">
      <div class="nav-container">
        <rc-nav :dateSource="navData"></rc-nav>
      </div>
      <div class="app-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      navData: [
        {
          groupName: "单组件",
          groupKey: "group1",
          list: [
            {
              key: "group1_input",
              name: "input",
              chinese: "输入框",
              url: "xxx"
            },
            {
              key: "group1_inputTree",
              name: "inputTree",
              chinese: "选择输入框",
              url: "xxx"
            },
            {
              key: "group1_inputColor",
              name: "inputColor",
              chinese: "颜色输入框",
              url: "xxx"
            },
            {
              key: "group1_inputIcon",
              name: "inputIcon",
              chinese: "图标选择器",
              url: "xxx"
            },
            {
              key: "group1_inputMap",
              name: "inputMap",
              chinese: "地图选择器",
              url: "xxx"
            },
            {
              key: "group1_inputTable",
              name: "inputTable",
              chinese: "表格选择器",
              url: "xxx"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
#app {
  background-color: #fff;
}
.app-body {
  overflow: hidden;
  margin-top: 40px;
}
.nav-container {
  width: 300px;
  float: left;
}
.app-content {
  margin-left: 300px;
  padding: 0 80px;
  width: -webkit-fill-available;
  /* background-color: aquamarine; */
}
</style>
