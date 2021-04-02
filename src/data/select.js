let titleSource = "avue-select";

let subTitleSource = "";

let effectDescSource = "";

let sceneSource = {
    title: "何时使用",
    desc: "",
    features: [""]
};

let attributesList = [
    {
        attribute: "size",
        desc: "输入框尺寸",
        dataType: "string",
        params: "-",
        value: "large|small|mini",
        defaultValue: "-"
    },
    {
        attribute: "loading",
        desc: "是否正在从远程获取数据",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "loadingText",
        desc: "远程加载时显示的文字",
        dataType: "string",
        params: "-",
        value: "-",
        defaultValue: "加载中"
    },
    {
        attribute: "multiple",
        desc: "是否支持多选",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "filterable",
        desc: "是否支持搜索",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "remote",
        desc: "是否开启远程搜索",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "readonly",
        desc: "是否只读",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "noMatchText",
        desc: `搜索条件无匹配时显示的文字，也可以使用slot="empty"设置`,
        dataType: "string",
        params: "-",
        value: "-",
        defaultValue: "无匹配数据"
    },
    {
        attribute: "noDataText",
        desc: '选项为空时显示的文字，也可以使用slot="empty"设置',
        dataType: "string",
        params: "-",
        value: "-",
        defaultValue: "无数据"
    },
    {
        attribute: "tags",
        desc: "多选时是否将选中值按文字的形式展示",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "clearable",
        desc: "是否显示清除按钮",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "disabled",
        desc: "是否禁用",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "placeholder",
        desc: "输入框占位文本",
        dataType: "string",
        params: "-",
        value: "-",
        defaultValue: "-"
    },
    {
        attribute: "limit",
        desc: "多选时用户最多可以选择的项目数",
        dataType: "number",
        params: "-",
        value: "-",
        defaultValue: "0"
    },
    {
        attribute: "allowCreate",
        desc: "在搜索模式下,是否允许创建搜索不到的选项并进行选中",
        dataType: "boolean",
        params: "",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "defaultFirstOption",
        desc: "是否默认选中第一条数据",
        dataType: "boolean",
        params: "",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "disabled",
        desc: "是否禁用",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "group",
        desc: "是否以分组形式进行渲染",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "dic",
        desc: "数据源",
        dataType: "array",
        params: "-",
        value: `array=[{
            // 后台的数据值
            value:"",
            // 要禁用的数据项的
            disabled:true,
            // 显示的值
            label:"",
            // 右边的描述文字
            desc:""
        }]`,
        defaultValue: "[]"
    },
    {
        attribute: "dic(group模式)",
        desc: "数据源，需要传入group属性，才能使用这个",
        dataType: "array",
        params: "-",
        value: `array=[
            {
                label:"",
                groups:[
                    {
                        disabled:false,
                        label:"",
                        value:"",
                        desc:""
                    }
                ]
            }
        ]`,
        defaultValue: "[]"
    }
];

let eventsList = [
    {
        attribute: "focus",
        desc: "获取焦点事件",
        dataType: "function",
        params: "1、value：当前选中的值 2、event：事件对象",
        value: "-",
        defaultValue: "() => { }"
    },
    {
        attribute: "blur",
        desc: "失去焦点事件",
        dataType: "function",
        params: "1、value：focus时选中的值 2、event：事件对象",
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

export let SelectData = {
    title: titleSource,
    subTitle: subTitleSource,
    effectDesc: effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene: sceneSource
};
