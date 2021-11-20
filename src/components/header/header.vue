<template>
  <div class="container">
    <div class="header-body">
      <div class="left-logo">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt
          class="logo-image"
        />
      </div>
      <div class="right-operate">
        <span class="item theme-item" @click="handleThemeChange">
          <i :class="theme"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
const LIGHTTHEME = 'el-avue-rijianmoshi'
const DARKTHEME = 'el-avue-dark'
export default {
	name: 'rocky-core-header',
	props: {
		exampleProp: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			theme: LIGHTTHEME
		}
	},
	methods: {
		// 改变主题
		handleThemeChange() {
			if (this.theme === LIGHTTHEME) {
				this.theme = DARKTHEME
			} else {
				this.theme = LIGHTTHEME
			}
		}
	}
}
</script>

<style scoped>
.container {
	box-shadow: 0 2px 8px #f0f1f2;
}
.header-body {
	height: 64px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 20px;
	overflow: hidden;
}
.left-logo {
	width: 300px;
}
.left-logo .logo-image {
	height: 32px;
}
.right-operate {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.right-operate .item {
	margin: 0 10px;
}
.right-operate .item i {
	font-size: 24px;
}
</style>
