<template>
  <rc-mask>
    <light-theme v-if="theme === 'light'"></light-theme>
    <dark-theme v-if="theme === 'dark'"></dark-theme>
  </rc-mask>
</template>
<script>
import LightTheme from './light-theme.vue'
import DarkTheme from './dark-theme.vue'
export default {
	name: 'Theme',
	components: {
		LightTheme,
		DarkTheme
	},
	data() {
		return {
			// 当前主题 light | dark
			theme: 'light',
			// 是否显示主题
			showTheme: true
		}
	},
	computed: {},
	watch: {},
	created() {},
	methods: {
		// 显示主题
		show(theme) {
			this.theme = theme
			this.showTheme = true
		},
		// 关闭主题显示
		hide() {
			this.theme = ''
			this.showTheme = false
		}
	}
}
</script>
<style scoped></style>
