<template>
  <div class="rc-nav-container">
    <nav>
      <li class="nav-group" v-for="(groupItem) in dataSource" :key="groupItem.groupKey">
        <h3>{{groupItem.groupName}}</h3>
        <ul>
          <router-link :to="navItem.path" v-for="(navItem) in groupItem.list" :key="navItem.name">
            <li :class="{'active':selected === navItem.name}" @click="navSelected(navItem.name)">
              <span>{{navItem.name}}</span>
              <span class="chinese">{{navItem.desc}}</span>
            </li>
          </router-link>
        </ul>
      </li>
    </nav>
  </div>
</template>
<script>
export default {
  name: "rocky-core-nav",
  data() {
    return {
      selected: ""
    };
  },
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    defaultSelected: {
      type: String,
      default: ""
    }
  },
  // 生命周期
  created() {
    // console.log("dataSource", this.dataSource);
    this.selected = this.defaultSelected ? this.defaultSelected : dataSource[0].list[0];
    // this.navData = this.props.dateSource || [];
  },
  methods: {
    navSelected: function(key) {
      this.selected = key;
      console.log("selected", this.selected);
    }
  }
};
</script>
<style scoped>
.rc-nav-container {
  padding: 16px 0;
  max-height: calc(100vh - 64px - 40px);
  border-right: 1px solid #ececec;
  overflow-x: hidden;
  overflow-y: auto;
}
.rc-nav-container .nav-group {
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
}
.nav-group h3 {
  padding: 10px 50px;
  color: rgba(0, 0, 0, 0.45);
  border-bottom: 1px solid #ececec;
}
.nav-group ul {
  margin: 8px 0;
}
.nav-group li {
  padding: 0 50px;
  height: 44px;
  margin: 4px 0 8px;
  display: flex;
  align-items: center;
}
.nav-group li.active {
  background-color: #e6f7ff;
  color: #1890ff;
}
.nav-group span:first-child{
  margin-right: 8px;
}
.nav-group span:last-child{
      white-space: nowrap;
}
</style>