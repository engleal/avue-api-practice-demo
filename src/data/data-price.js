let titleSource = "avue-data-price";

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
        desc: "输入框内容",
        dataType: "string",
        params: "-",
        defaultValue: "-"
    },
    {
        attribute: "maxlength",
        desc: "最大输入长度",
        dataType: "number",
        params: "-",
        defaultValue: "-"
    },
    {
        attribute: "minlength",
        desc: "最小输入长度",
        dataType: "number",
        params: "-",
        defaultValue: "-"
    },
    {
        attribute: "showPassword",
        desc: "是否显示切换密码图标",
        dataType: "boolean",
        params: "-",
        defaultValue: "true"
    },
    {
        attribute: "showWordLimit",
        desc:
            '是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效',
        dataType: "boolean",
        params: "-",
        defaultValue: "false"
    },
    {
        attribute: "prefixIcon",
        desc: "输入框头部图标",
        dataType: "string(element-icon) | slot(name=prefix)",
        params: "-",
        defaultValue: "-"
    },
    {
        attribute: "suffixIcon",
        desc: "输入框尾部图标",
        dataType: "string(element-icon) | slot(name=suffix)",
        params: "-",
        defaultValue: "-"
    },
    {
        attribute: "readonly",
        desc: "是否只读",
        dataType: "boolean",
        params: "-",
        defaultValue: "false"
    },
    {
        attribute: "placeholder",
        desc: "输入框占位文本",
        dataType: "string",
        params: "-",
        defaultValue: "-"
    },
    {
        attribute: "autosize",
        desc:
            '自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
        dataType: "boolean | object",
        params: "-",
        defaultValue: "false"
    },
    {
        attribute: "disabled",
        desc: "是否禁用",
        dataType: "boolean",
        params: "-",
        defaultValue: "false"
    },
    {
        attribute: "autocomplete",
        desc: "自动补全(on | off)",
        dataType: "string",
        params: "-",
        defaultValue: "off"
    },
    {
        attribute: "prepend",
        desc: "前置文字(只接受文字Avue源码定死了)",
        dataType: "string",
        params: "-",
        defaultValue: "-"
    },
    {
        attribute: "append",
        desc: "后置文字(只接受文字Avue源码定死了)",
        dataType: "string",
        params: "-",
        defaultValue: "-"
    }
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

export let DataPriceData = {
    title:titleSource,
    subTitle:subTitleSource,
    effectDesc:effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene:sceneSource
};
