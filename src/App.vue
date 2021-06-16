<template>
  <div id="app">
    <rc-header></rc-header>
    <div class="app-body">
      <div class="nav-container">
        <rc-nav :dataSource="navSource" :defaultSelected="selected"></rc-nav>
      </div>
      <div class="app-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { navList } from '@/router/router'
import { location } from '@/assets/utils/location'
export default {
  name: 'App',
  data: function () {
    return {
      navSource: navList
    }
  },
  computed: {
    selected () {
      return location.hash()
    }
  }
}
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
  width: -webkit-fill-available;
}
.page-container {
  max-height: calc(100vh - 64px - 40px);
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
