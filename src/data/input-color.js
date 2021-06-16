let titleSource = "avue-input-color";

let subTitleSource = "图标选择输入框";

let effectDescSource = "";

let preface = "主要是一个el-input和el-color-picker组成";

let sceneSource = {
    title: "何时使用",
    desc: "",
    features: ["选择icon时可以使用"]
};

let attributesList = [
    {
        attribute: "placeholder",
        desc: "输入框占位文本",
        dataType: "string",
        params: "-",
        value: "-",
        defaultValue: "-"
    },
    {
        attribute: "size",
        desc: "输入框尺寸",
        dataType: "string",
        params: "-",
        value: "medium / small / mini",
        defaultValue: "-"
    },
    {
        attribute: "disabled",
        desc: "禁用",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "clearable",
        desc: "是否可清空",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "true"
    },
    {
        attribute: "change",
        desc: "-",
        dataType: "function",
        params: "-",
        value: "-",
        defaultValue: "-"
    }
];

let eventsList = [
    {
        attribute: "input",
        desc: "-",
        dataType: "-",
        params: "-",
        value: "-",
        defaultValue: "-"
    },
    {
        attribute: "change",
        desc: "-",
        dataType: "-",
        params: "-",
        value: "-",
        defaultValue: "-"
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

export let InputColorData = {
    title: titleSource,
    subTitle: subTitleSource,
    effectDesc: effectDescSource,
    preface:preface,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene: sceneSource
};
