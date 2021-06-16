let titleSource = "avue-draggable";

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
        attribute: "index",
        desc: "",
        dataType: "string/number",
        params: "-",
        value:"-",
        defaultValue: "-"
    },
    {
        attribute: "mask",
        desc: "",
        dataType: "boolean",
        params: "-",
        value:"true/false",
        defaultValue: "-"
    },
    {
        attribute: "scale",
        desc: "",
        dataType: "number",
        params: "-",
        value:"-",
        defaultValue: "1"
    },
    {
        attribute: "readonly",
        desc: "",
        dataType: "boolean",
        params: "-",
        value:"true/false",
        defaultValue: "false"
    },
    {
        attribute: "resize",
        desc: "",
        dataType: "boolean",
        params: "-",
        value:"true/false",
        defaultValue: "true"
    },
    {
        attribute: "disabled",
        desc: "",
        dataType: "boolean",
        params: "-",
        value:"true/false",
        defaultValue: "false"
    },
    {
        attribute: "step",
        desc: "",
        dataType: "number",
        params: "-",
        value:"-",
        defaultValue: "-"
    },
    {
        attribute: "zIndex",
        desc: "",
        dataType: "string/number",
        params: "-",
        value:"-",
        defaultValue: "-"
    },
    {
        attribute: "left",
        desc: "",
        dataType: "number",
        params: "-",
        value:"-",
        defaultValue: "0"
    },
    {
        attribute: "top",
        desc: "",
        dataType: "number",
        params: "-",
        value:"-",
        defaultValue: "0"
    },
    {
        attribute: "wdith",
        desc: "",
        dataType: "number",
        params: "-",
        value:"-",
        defaultValue: "-"
    },
    {
        attribute: "height",
        desc: "",
        dataType: "number",
        params: "-",
        value:"-",
        defaultValue: "-"
    }
];

let eventsList = [
    {
        attribute: "",
        desc: "",
        dataType: "",
        params: "-",
        value:"-",
        defaultValue: "-"
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

export let DraggableData = {
    title:titleSource,
    subTitle:subTitleSource,
    effectDesc:effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene:sceneSource
};
