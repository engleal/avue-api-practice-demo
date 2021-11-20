<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <!-- <div class="mask__wrapper"></div> -->
  </transition>
</template>
<script>
export default {
	name: 'Mask',
	data() {
		return {}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	beforeDestroy() {},
	methods: {
		// 动画进入完成
		afterEnter() {
			this.$emit('opened')
		},
		// 动画离开完成
		afterLeave() {
			this.$emit('closed')
		}
	}
}
</script>
<style scoped>
.mask__wrapper {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: auto;
	margin: 0;
	background-color: rgba(0, 0, 0, 0.1);
}
</style>

<style scoped>
.dialog-fade-enter-active {
	animation: dialog-fade-in 0.3s;
}

.dialog-fade-leave-active {
	animation: dialog-fade-out 0.3s;
}

@keyframes dialog-fade-in {
	0% {
		transform: translate3d(0, -20px, 0);
		opacity: 0;
	}
	100% {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
}

@keyframes dialog-fade-out {
	0% {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
	100% {
		transform: translate3d(0, -20px, 0);
		opacity: 0;
	}
}
</style>
