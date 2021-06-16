let titleSource = "ScreenShot";

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
        attribute: "prependClick",
        desc: "前置文字点击事件",
        dataType: "function",
        params: "无",
        defaultValue: "() => { }"
    },
    {
        attribute: "appendClick",
        desc: "后置文字点击事件",
        dataType: "function",
        params: "无",
        defaultValue: "() => { }"
    }
];

let anchorSource = [
    {
        attribute: "",
        desc: "",
        dataType: "",
        params: "-",
        value:"-",
        defaultValue: "-"
    },
];

export let ScreenShotData = {
    title:titleSource,
    subTitle:subTitleSource,
    effectDesc:effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene:sceneSource
};
