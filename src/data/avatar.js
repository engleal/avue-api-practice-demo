let titleSource = "avue-avatar";

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
        attribute: "src",
        desc: "头像图片",
        dataType: "string",
        params: "-",
        value:"-",
        defaultValue: "-"
    },
    {
        attribute: "icon",
        desc: "icon图片的类名,若和src同时存在，src优先级高",
        dataType: "string",
        params: "-",
        value:"-",
        defaultValue: "-"
    },
    {
        attribute: "shape",
        desc: "头像是形状",
        dataType: "string",
        params: "-",
        value:'circle || 9square',
        defaultValue: "circle"
    },
    {
        attribute: "size",
        desc: "头像的大小，此值会决定avue-avatar的闭合标签里面的文字的font-size,还会影响缩放的程度",
        dataType: "string | number",
        params: "-",
        value:"[ small | large | default ] | number",
        defaultValue: "default"
    },
];

let eventsList = [
];

let anchorSource = [
    {
        name: "基本用法",
        anchorPoint: "#JCYF"
    },
    {
        name: "API 属性",
        anchorPoint: "#ATTRIBUTES"
    }
];

export let AvatarData = {
    title:titleSource,
    subTitle:subTitleSource,
    effectDesc:effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene:sceneSource
};
