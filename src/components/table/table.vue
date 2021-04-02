<template>
  <div v-if="dataSource.length" class="table-wrapper" :id="id">
    <h2 class="title">{{title}}</h2>
    <div class="table-body-wrapper">
      <table class="rc-table" v-if="dataSource.length">
        <thead v-if="defaultColumns.length">
          <tr>
            <th v-for="(item) in defaultColumns" :key="item.dataIndex">
              <span v-if="item.name">{{item.name}}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row) in dataSource" :key="row.key">
            <td v-for="(value,key,index) in row" :key="index">{{value}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { column } from "./header-data";
export default {
  name: "rocky-core-table",
  data() {
    return {
      defaultColumns: []
    };
  },
  props: {
    id: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  // 生命周期
  created() {
    this.defaultColumns = this.columns.length ? this.columns : column;
  },
  methods: {
    exampleClickEvent() {
      console.log("exampleClickEvent 点击事件");
    }
  }
};
</script>
<style scoped>
.table-wrapper {
  width: 100%;
}
.table-wrapper h2 {
  margin-bottom: 16px;
}
.table-body-wrapper {
  width: 100%;
  border: 1px solid var(--mian-border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
}
.table-wrapper .rc-table {
  width: 100%;
  text-align: left;
}
.rc-table thead th,
.rc-table tbody td {
  padding: 16px;
  min-width: 120px;
  max-width: 400px;
  overflow-wrap: break-word;
}
.rc-table thead th {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  background: #fafafa;
  border-bottom: 1px solid var(--mian-border-color);
}
rc-table tbody tr {
  color: rgba(0, 0, 0, 0.65);
  border-bottom: 1px solid var(--mian-border-color);
}
rc-table tbody tr:last-child {
  border-bottom: none;
}
rc-table tbody tr:hover {
  background-color: #ebf7ff;
}
.rc-table tbody tr:nth-child(odd) {
  background: #fff;
}
.rc-table tbody tr:nth-child(even) {
  background: #fafafa;
}
</style>