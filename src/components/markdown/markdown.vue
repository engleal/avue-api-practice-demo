<template>
  <section class="markdown-component-conatainer">
    <h1>
      {{ title }}
      <span class="subtitle">{{ subTitle }}</span>
      <p class="effectDesc">{{ effectDesc }}</p>
    </h1>
    <h2 v-if="preface" class="scene">
      前言
      <p style="margin-left: 36px;">{{ preface }}</p>
    </h2>
    <h2 class="scene">
      {{ scene.title }}
      <p>{{ scene.desc }}</p>
      <ul v-if="scene.features.length" class="features">
        <li v-for="(scene, index) in scene.features" :key="index">
          <span>{{ scene }}</span>
        </li>
      </ul>
    </h2>
    <h2>代码演示</h2>
  </section>
</template>
<script>
export default {
	name: 'rocky-core-markdown',
	props: {
		title: {
			type: String,
			default: ''
		},
		subTitle: {
			type: String,
			default: ''
		},
		effectDesc: {
			type: String,
			default: ''
		},
		preface: {
			type: String,
			default: ''
		},
		scene: {
			title: {
				type: String,
				default: '何时使用'
			},
			desc: {
				type: String,
				default: ''
			},
			features: {
				type: Array,
				default: []
			},
			type: Object,
			default: () => {}
		}
	},
	// 生命周期
	created() {},
	methods: {
		exampleClickEvent: function() {
			console.log('exampleClickEvent 点击事件')
		}
	}
}
</script>
<style scoped>
.markdown-component-conatainer {
}
h1 {
	margin-top: 8px;
	margin-bottom: 20px;
	color: rgba(0, 0, 0, 0.85);
	font-weight: 500;
	font-size: 30px;
}
p {
	margin: 14px 0;
	line-height: 32px;
	color: rgba(0, 0, 0, 0.85);
	font-size: 14px;
}
h1 .subtitle {
	margin-left: 12px;
}

h2 {
	font-size: 24px;
	line-height: 32px;
	color: rgba(0, 0, 0, 0.85);
	font-weight: 500;
	margin: 38px 0 14px;
}
.scene {
}
.scene .features {
	margin-left: 36px;
	color: rgba(0, 0, 0, 0.85);
	font-size: 14px;
}
.scene .features li {
	list-style-type: circle;
}
</style>
