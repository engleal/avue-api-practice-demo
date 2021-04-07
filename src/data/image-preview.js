let titleSource = "ImagePreview";

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
];

let eventsList = [
    {
        attribute: "this.$ImagePreview(imgs), index)",
        desc: "预览事件",
        dataType: "function",
        params:`imgs:[
            {
                thumbUrl:"xx"
            }
        ]`,
        value: "1、imgs:图片数组 2、index:img的下标",
        defaultValue: "() => { }"
    },
];

let anchorSource = [
    {
        name: "基本用法",
        anchorPoint: "#JCYF"
    },
    {
        name: "API 事件",
        anchorPoint: "#EVENTS"
    }
];

export let ImagePreviewData = {
    title:titleSource,
    subTitle:subTitleSource,
    effectDesc:effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene:sceneSource
};
