<template>
  <div :id="id" class="code-card-component-contaier">
    <div class="effect-area">
      <div v-if="title" class="code-explain">
        <div class="title">{{ title }}</div>
        <span>{{ desc }}</span>
      </div>
      <div class="effect-show">
        <slot name="effect"></slot>
      </div>
    </div>
    <div v-if="$slots.sourceCode" class="sourceCode-area">
      <div class="sourceCode-operation">
        <div class="square-four-conners-unicode" @click="showAllSourceCode">
          <span>&#9974;</span>
        </div>
      </div>
      <div class="code-body">
        <slot name="sourceCode"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	name: 'rocky-core-card',
	props: {
		title: {
			type: String,
			default: ''
		},
		desc: {
			type: String,
			default: ''
		},
		id: {
			type: String,
			default: ''
		}
	},
	data: function() {
		return {}
	},
	// 计算属性
	computed: {},
	// 生命周期
	created() {},
	methods: {
		// 展开所有的源码
		showAllSourceCode: function() {
			console.log('showAllSourceCode')
		}
	}
}
</script>
<style scoped>
.code-card-component-contaier {
	background-color: #fff;
	border: 1px solid #ececec;
	border-radius: 4px;
	margin-bottom: 100px;
	margin-top: 32px;
	display: flex;
}
.code-card-component-contaier:hover {
	box-shadow: 2px 2px 9px rgba(140, 140, 140, 0.35);
}
.code-card-component-contaier .effect-area,
.code-card-component-contaier .sourceCode-area {
	flex: 1;
}
.code-card-component-contaier .sourceCode-area {
	border-left: 1px dashed #ececec;
}
.code-card-component-contaier pre {
	display: flex;
	align-items: center;
	white-space: pre-wrap; /* css3.0 */
	white-space: -moz-pre-wrap; /* Firefox */
	white-space: -pre-wrap; /* Opera 4-6 */
	white-space: -o-pre-wrap; /* Opera 7 */
	word-wrap: break-word; /* Internet Explorer 5.5+ */
	background-color: transparent;
	padding: 0;
}
.code-card-component-contaier code {
	padding: 5px 15px;
}
.effect-area .effect-show {
	padding: 42px 24px 50px;
	border-top: 1px solid #ececec;
}
.effect-area .code-explain {
	position: relative;
	padding: 24px 24px 12px;
}
.effect-area .code-explain .title {
	position: absolute;
	top: -15px;
	padding: 0 20px 0 10px;
	left: 14px;
	font-weight: 700;
	font-size: 20px;
	background-color: #fff;
}

.sourceCode-area .sourceCode-operation {
	height: 40px;
	padding: 0 12px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	border-bottom: 1px solid #ececec;
}
.sourceCode-operation .square-four-conners-unicode {
	padding: 0 5px;
	cursor: pointer;
	-webkit-user-select: none;
}
.sourceCode-operation .square-four-conners-unicode span {
	font-size: 24px;
	color: rgb(0, 0, 0);
	font-style: normal;
	font-weight: bold;
}
.sourceCode-operation .square-four-conners-unicode:hover span {
	color: #00a4ff;
}

.sourceCode-area .code-body {
	height: auto;
	overflow: hidden;
	transition: all 0.5s linear;
}
</style>
