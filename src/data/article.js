let titleSource = "avue-article";

let subTitleSource = "";

let effectDescSource = "";

let sceneSource = {
    title: "何时使用",
    desc: "",
    features: [""]
};

let attributesList = [
    {
        attribute: "data",
        desc: "",
        dataType: "object",
        params: "-",
        value: `{
            title: "xxx",
            meta: "xxx",
            lead: "xxx",
            body: "xxx"
        }`,
        defaultValue: "{}"
    },
    {
        attribute: "props",
        desc: "",
        dataType: "object",
        params: "-",
        value: `propsDefault = {
            title: "title",
            meta: "meta",
            lead: "lead",
            body: "body",
          }`,
        defaultValue: `propsDefault = {
            title: "title",
            meta: "meta",
            lead: "lead",
            body: "body"
          }`
    },
    {
        attribute: "option",
        desc: "",
        dataType: "object",
        params: "-",
        value: "",
        defaultValue: `option:{
            props:{
                
            }
        }`
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

export let ArticleData = {
    title: titleSource,
    subTitle: subTitleSource,
    effectDesc: effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene: sceneSource
};
