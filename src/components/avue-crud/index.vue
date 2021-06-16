<template>
    <div>avue-crud:{{ list }}</div>
</template>
<script>
export default {
    name: "avue-crud",
    data() {
        return {
            list: [],
            visible: false
        };
    },
    props: {
        dataSource: {
            type: Array,
            default: () => []
        }
    },
    watch: {
        dataSource: {
            handler() {
                console.log("触发监听-第三方组件");
                this.list = this.dataSource;
            },
            deep: true,
            immediate:true,
        }
    },
    // 生命周期
    created() {},
    methods: {
        exampleClickEvent() {
            console.log("exampleClickEvent 点击事件");
        }
    }
};
</script>
<style scoped></style>
