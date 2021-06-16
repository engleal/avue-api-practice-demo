<template>
    <div style="padding:30px">
        <crud :dataSource="list"></crud>
        <br />
        <span>list:{{ list }}</span>
        <br />

        <button @click="changeList">修改data数据</button>
    </div>
</template>
<script>
import Crud from "@/components/rc-crud/index";
export default {
    name: "",
    components: {
        Crud
    },
    data() {
        return {
            list: [
                {
                    name: "ganyian",
                    age: 24,
                    key: "0"
                }
            ],
            visible: false
        };
    },
    // 生命周期
    created() {},
    methods: {
        changeList() {
            let data = this.list;
            let callback = data => {
                data.map((item, index) => {
                    if (item.children && item.children.length !== 0) {
                        callback(item.children);
                    } else {
                        item.children = [
                            {
                                name: "ganyian" + Math.random(0, 100) * 100,
                                age: 24 + Math.random(0, 100) * 100,
                                key: "0" + Math.random(0, 100) * 100
                            }
                        ];
                    }
                });
            };
            // console.log("callback", callback)
            callback(data);
            console.log("data", data);
            // this.list = data
            this.$set(this.list, 0, data[0]);
            console.log("list", this.list);
            // data.push({
            //     name: "ganyian" + Math.random(0, 100),
            //     age: 24 + Math.random(0, 100),
            //     key: "0" + Math.random(0, 100)
            // });
            // this.list = data
            // this.visible = !this.visible;
        }
    }
};
</script>
<style scoped></style>
