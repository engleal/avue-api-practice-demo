let titleSource = "avue-crud";

let subTitleSource = "表格组件";

let effectDescSource = "表格展示组件";

let sceneSource = {
    title: "何时使用",
    desc: "",
    features: ["需要展示表格数据的"]
};

let attributesList = [
    {
        attribute: "option",
        desc: "表格配置对象",
        dataType: "object",
        params: "-",
        value: `option={
            // 函数或者字符串 行数据的key，优化table渲染，可以使用Function(row)或者String
            rowKey:"",
            // 布尔值 不确定性 默认false
            indeterminate:false
            // 字符串 table大小 默认值 small medium/small/mini
            size:'medium',
            // 布尔值 是否懒加载子节点数据 默认值false
            lazy:true,
            // 数组 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。 
            // 对象 渲染嵌套数据的配置选项 默认值 { hasChildren: 'hasChildren', children: 'children' }
            treeProps:{ hasChildren: 'hasChildren', children: 'children' }
            expandRowKeys:[],
            // 布尔值 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 布尔值 默认值 false
            defaultExpandAll:false,
            // 布尔值 是否要高亮当前行 默认false
            highlightCurrentRow:false,
            // 布尔值 是否在表尾显示合计行 默认值 false
            showSummary:false,
            // 布尔值 是否显示斑马纹 默认值false
            stripe:false,
            // 布尔值 是否显示表头 默认值 true
            showHeader:true,
            // 对象 默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序 {prop:"xxx",order:ascending | descending}
            defaultSort:{},
            // 布尔值 列的宽度是否自撑开 默认值 true
            fit:true,
            // 字符串或者数字 table高度，默认为 'auto'高度自动
            height:'auto',
            // 字符串或者数字 table最大高度
            maxHeight:"auto"
            // 字符串或者数字 table宽度 默认100%
            width:'100%',
            // 布尔值 是否带有纵向边框 默认值 false
            border:false,
            // 字符串 空数据文字 默认值为空
            emptyText:"",
            // 对象 page对象
            page:{

            },
            // 
        }`,
        defaultValue: "-"
    },
    {
        attribute: "sortBy",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "sortOrders",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "sortMethod",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "spanMethod",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "summaryMethod",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "rowStyle",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "cellStyle",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "beforeClose",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "beforeOpen",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "rowClassName",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "cellClassName",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "headerCellClassName",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "uploadBefore",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "uploadAfter",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "uploadDelete",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "uploadPreview",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "uploadError",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "uploadExceed",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "permission",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "value",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "showColumn",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "search",
        desc: "关于搜索区域的配置",
        dataType: "object",
        params: "-",
        value: `searchObject={

        }`,
        defaultValue: "-"
    },
    {
        attribute: "page",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "tableLoading",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "disabled",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    },
    {
        attribute: "data",
        desc: "",
        dataType: "",
        params: "-",
        value: ``,
        defaultValue: "-"
    }
];

let eventsList = [
    {
        attribute: "prependClick",
        desc: "前置文字点击事件",
        dataType: "function",
        params: "无",
        value: "",
        defaultValue: "() => { }"
    }
];

let anchorSource = [
    {
        name: "基本用法",
        anchorPoint: "#JCYF"
    },
    {
        name: "API 属性",
        anchorPoint: "#ATTRIBUTES"
    },
    {
        name: "API 事件",
        anchorPoint: "#EVENTS"
    }
];

export let TableData = {
    title: titleSource,
    subTitle: subTitleSource,
    effectDesc: effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene: sceneSource
};
