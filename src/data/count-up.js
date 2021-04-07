let titleSource = "avue-count-up";

let subTitleSource = "";

let effectDescSource = "";

let sceneSource = {
    title: "何时使用",
    desc: "",
    features: [""]
};

let attributesList = [
    {
        attribute: "animation",
        desc: "是否开启动画，开启动画后将以动画变化的形式达到最终值，如果为false将只显示end的值，其他属性都将失效",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "true"
    },
    {
        attribute: "start",
        desc: "数字的起点",
        dataType: "number",
        params: "-",
        value: "-",
        defaultValue: "0"
    },
    {
        attribute: "end",
        desc: "数字的终点",
        dataType: "number",
        params: "-",
        value: "-",
        defaultValue: "-"
    },
    {
        attribute: "decimals",
        desc: "小数位数,默认0",
        dataType: "number",
        params: "-",
        value: "-",
        defaultValue: "0"
    },
    {
        attribute: "duration",
        desc: "从start到end需要的时间,默认单位s",
        dataType: "number",
        params: "-",
        value: "-",
        defaultValue: "2"
    },
    {
        attribute: "options",
        desc: "countUp的其他配置项",
        dataType: "object",
        params: "-",
        value: `options={
            // 小数点的分隔符，默认，
            decimal:"..",
            // 前置文字 默认空
            prefix:"前置",
            // 后置文字 默认空
            suffix:"后置",
            // 开启千分位分割效果的分隔符，默认，
            separator:"/",
            // 是否开启千分位分隔效果 默认true
            useGrouping:false
        }`,
        defaultValue: ""
    }
];

let eventsList = [
    {
        attribute: "callback",
        desc: "动画开始时候执行的函数",
        dataType: "function",
        params: "无",
        value: "-",
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

export let CountUpData = {
    title: titleSource,
    subTitle: subTitleSource,
    effectDesc: effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene: sceneSource
};
