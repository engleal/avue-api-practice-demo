let titleSource = "avue-flow";

let subTitleSource = "";

let effectDescSource = "";

let sceneSource = {
    title: "何时使用",
    desc: "",
    features: [
        ""
    ]
};

let attributesList = [
    {
        attribute: "value",
        desc: "flow的选中的值，值为option的nodeList的数据对象的id属性值",
        dataType: "string",
        params: "-",
        value:"-",
        defaultValue: "-"
    },
    {
        attribute: "option",
        desc: "flow的数据对象和线条对象的配置对象",
        dataType: "object",
        params: "-",
        value:`option={
            nodeList:[
                {
                    // value值就是和这个值进行比较的
                    id:"",
                    // 几点名字
                    name:"",
                    // 节点左上角left坐标
                    left:"",
                    // 节点左上角top坐标
                    top:"",
                    // 是否不展示 默认false
                    display:false
                }
            ],
            lineList:[
                {
                    // nodeList的name属性,起点
                    from:"",
                    // nodeList的name属性，终点
                    to:""
                }
            ]
        }`,
        defaultValue: "-"
    },
    {
        attribute: "width",
        desc: "flow的宽度",
        dataType: "string | number",
        params: "-",
        value:"-",
        defaultValue: "100%"
    },
    {
        attribute: "height",
        desc: "flow的高度",
        dataType: "string | number",
        params: "-",
        value:"-",
        defaultValue: "100%"
    }
];

let eventsList = [
    {
        attribute: "click",
        desc: "flow的节点对象的点击事件",
        dataType: "function",
        params: "无",
        value:"1、node:nodeList的数据对象",
        defaultValue: "(node) => { }"
    },
    {
        attribute: "nodeAdd",
        desc: "新增节点事件,用法是：this.refs.xxx.addNode(nodeName)",
        dataType: "function",
        params: "",
        value:"-",
        defaultValue: "() => { }"
    },
    {
        attribute: "deleteNode",
        desc: "删除节点事件，用法是this.refs.xxx.deleteNode(nodeId)",
        dataType: "function",
        params: "",
        value:"",
        defaultValue: "() => { }"
    },
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

export let FlowData = {
    title:titleSource,
    subTitle:subTitleSource,
    effectDesc:effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene:sceneSource
};
