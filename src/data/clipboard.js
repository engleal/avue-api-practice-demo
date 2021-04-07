let titleSource = "Clipboard";

let subTitleSource = "";

let effectDescSource = "";

let sceneSource = {
    title: "何时使用",
    desc: "",
    features: [""]
};

let attributesList = [];

let eventsList = [
    {
        attribute: `this.$Clipboard({text:"xx"}).then(res=>{
            
        })`,
        desc: "复制事件，返回一个promise，resolve返回不带参数，reject不带参数",
        dataType: "function",
        params: "{text: ''}",
        value: "1、object:对象结构，对象内部只有一个属性text表示需要复制的文字",
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

export let ClipboardData = {
    title: titleSource,
    subTitle: subTitleSource,
    effectDesc: effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene: sceneSource
};
