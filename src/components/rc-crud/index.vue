<template>
    <div>
        <avue-crud-d :dataSource="dataSource"></avue-crud-d>
    </div>
</template>

<script>
import AvueCrudD from "../avue-crud";

export default {
    name: "my-crud",
    components: {
        "avue-crud-d": AvueCrudD
    },
    data() {
        return {
        };
    },
    props: {
        dataSource: {
            type: Array,
            default: () => []
        }
    },
    watch: {
        
    },
    // 生命周期
    created() {},
    methods: {}
};
</script>
<style scoped></style>
