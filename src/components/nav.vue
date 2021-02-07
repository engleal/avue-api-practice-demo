<template>
  <div class="rc-nav-container">
    <nav>
      <li class="nav-group" v-for="(navGroupItem) in dateSource" :key="navGroupItem.groupKey">
        <h3>{{navGroupItem.groupName}}</h3>
        <ul>
          <li v-for="(navItem) in navGroupItem.list" :key="navItem.key">
            <span>{{navItem.name}}</span>
            <span class="chinese">{{navItem.chinese}}</span>
          </li>
        </ul>
      </li>
    </nav>
  </div>
</template>
<script>
export default {
  name: "rocky-core-nav",
  props: {
    dateSource: {
      type: Array,
      default: []
    }
  },
  // 生命周期
  created() {
    // console.log("this ", this.data);
    // this.navData = this.props.dateSource || [];
  },
  methods: {
    exampleClickEvent: function() {
      console.log("exampleClickEvent 点击事件");
    }
  }
};
</script>
<style scoped>
.rc-nav-container {
  padding: 16px 0;
  min-height: calc(100vh - 64px - 40px);
  border-right: 1px solid #ececec;
}
.rc-nav-container > nav {
}
.rc-nav-container .nav-group {
  padding: 0 40px;
  font-size: 14px;
  color: rgba(0,0,0,1);
}
.nav-group h3 {
  color: rgba(0,0,0,0.45);
  padding: 10px;
  border-bottom: 1px solid #ececec;
}
.nav-group ul {
  padding: 8px 0;
}
.nav-group li {
  height: 44px;
  padding-left: 10px;
  margin: 4px 0 8px;
  display: flex;
  align-items: center;
}
</style>