let titleSource = "avue-notice";

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
        attribute: "",
        desc: "",
        dataType: "",
        params: "-",
        value:"-",
        defaultValue: "-"
    },
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

export let NoticeData = {
    title:titleSource,
    subTitle:subTitleSource,
    effectDesc:effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene:sceneSource
};
