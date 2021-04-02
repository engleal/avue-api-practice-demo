let titleSource = "avue-form";

let subTitleSource = "表单验证";

let effectDescSource = "表单验证组件";

let sceneSource = {
    title: "何时使用",
    desc: "",
    features: ["需要验证表单输入是时使用"]
};

let attributesList = [
    {
        attribute: "formWidth",
        desc: "整个avue-from包裹容器的宽度",
        dataType: "string",
        params: "-",
        value: "-",
        defaultValue: "-"
    },
    {
        attribute: "statusIcon",
        desc: "是否显示表单控件校验的小图标，x或者√的图标",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "labelSuffix",
        desc:
            "表单域标签的后缀,会在avue-from的子表单控件上的label后面加上这个字段",
        dataType: "number",
        params: "-",
        value: "",
        defaultValue: "-"
    },
    {
        attribute: "labelPosition",
        desc:
            "表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width，",
        dataType: "string",
        params: "-",
        value: "left | right | top",
        defaultValue: "right"
    },
    {
        attribute: "labelWidth",
        desc: '在form上统一设置label的宽度,如"120px"',
        dataType: "string",
        params: "-",
        value: "",
        defaultValue: "-"
    },
    {
        attribute: "size",
        desc: "	用于控制该表单内组件的尺寸，值为：medium / small / mini",
        dataType: "string",
        params: "-",
        value: "medium/small/mini",
        defaultValue: "-"
    },
    {
        attribute: "gutter",
        desc: "设置每个表单项项的左右margin",
        dataType: "",
        params: "-",
        value: "-",
        defaultValue: "-"
    },
    {
        attribute: "readonly",
        desc: "是否只读",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: ""
    },
    {
        attribute: "disabled",
        desc: "禁止表单控件",
        dataType: "boolean",
        params: "-",
        value: "true/false",
        defaultValue: "false"
    },
    {
        attribute: "detail",
        desc: "设置为true，将隐藏所有表单控件 出去不可聚焦模式",
        dataType: "",
        params: "",
        value: "true/false",
        defaultValue: ""
    },
    {
        attribute: "boxType",
        desc: "当前模式时添加还是修改还是浏览 值会影响组件渲染的情况",
        dataType: "string",
        params: "-",
        value: "add|edit|view",
        defaultValue: "-"
    },
    {
        attribute: "menuSpan",
        desc: "栅格占据的列数",
        dataType: "number",
        params: "-",
        value: "-",
        defaultValue: "24"
    },
    {
        attribute: "menuPosition",
        desc: "按钮显示的位置,默认值为center",
        dataType: "string",
        params: "-",
        value: "left|right|center",
        defaultValue: "center"
    },
    {
        attribute: "submitText",
        desc: "提交按钮的文字",
        dataType: "string",
        params: "-",
        value: "-",
        defaultValue: "提交"
    },
    {
        attribute: "emptyText",
        desc: "重置按钮的文字",
        dataType: "string",
        params: "-",
        value: "-",
        defaultValue: "清空"
    },
    {
        attribute: "span",
        desc: "栅格占据的列数",
        dataType: "number",
        params: "-",
        value: "-",
        defaultValue: "12"
    },
    {
        attribute: "printBtn",
        desc: "",
        dataType: "",
        params: "-",
        value: "-",
        defaultValue: ""
    },
    {
        attribute: "mockBtn",
        desc: "",
        dataType: "",
        params: "-",
        value: "-",
        defaultValue: ""
    },
    {
        attribute: "submitBtn",
        desc: "",
        dataType: "",
        params: "-",
        value: "-",
        defaultValue: ""
    },
    {
        attribute: "emptyBtn",
        desc: "",
        dataType: "",
        params: "-",
        value: "-",
        defaultValue: ""
    },
    {
        attribute: "submitText",
        desc: "",
        dataType: "",
        params: "-",
        value: "-",
        defaultValue: ""
    },
    {
        attribute: "emptyText",
        desc: "",
        dataType: "",
        params: "-",
        value: "-",
        defaultValue: ""
    },
    {
        attribute: "submitIcon",
        desc: "",
        dataType: "",
        params: "-",
        value: "-",
        defaultValue: ""
    },
    {
        attribute: "emptyIcon",
        desc: "",
        dataType: "",
        params: "-",
        value: "-",
        defaultValue: ""
    },
    {
        attribute: "group",
        desc: `设置分组的column`,
        dataType: "array",
        params: "-",
        value: `group: [
            {
              // 组名前的icon
              icon: "el-icon-info",
              // 组名
              label: "分组1",
              // 是否展开
              collapse: false,
              // 是否显示右边的小箭头是否能收起展开整个分组 默认为true
              arrow:true,
              // 是否展示整个分组
              display:true,
              // 组的prop
              prop: "group1",
              column: [
                {
                  label: "内容1",
                  placeholder: "请输入用户名",
                  prop: "text1"
                }
              ]
            },
            {
              icon: "el-icon-info",
              label: "分组2",
              arrow: false,
              prop: "group2",
              column: [
                {
                  label: "选项卡2",
                  placeholder: "请输入用户名",
                  prop: "text2"
                },
                {
                  label: "选项卡3",
                  placeholder: "请输入用户名",
                  prop: "text3"
                }
              ]
            }
          ]`,
        defaultValue: "-"
    },
    {
        attribute: "column",
        desc: `表单输入项的数据`,
        dataType: "array",
        params: "-",
        value:`column: [
            {
              // lable文字
              label: "用户名",
              // prop
              prop: "username",
              // 提示文案
              placeholder: "请输入用户名",
              // hover时的提示tooltip文字
              tip: "提示文字",
              // 该项columnItem是否显示
              display: true,
              // 栅格占据的列数
              span:10,
              // 栅格左侧的间隔格数
              offset: 2,
              // 自定义className
              className: "cutormer-col",
              // 校验规则 参见：https://github.com/yiminghe/async-validator
              rules: [
                {
                  // 是否必填
                  required: true,
                  message: "请输入用户名",
                  trigger: "blur"
                }
              ]
            }
          ]`,
        defaultValue: "[]"
    }
];

let unKhowsAttributerList = [
    {
        attribute: "tabs",
        desc: "???",
        dataType: "",
        params: "-",
        value:"-",
        defaultValue: ""
    },
    {
        attribute: "tabsActive",
        desc: "???",
        dataType: "",
        params: "-",
        defaultValue: ""
    },
    {
        attribute: "addDisplay",
        desc: "???",
        dataType: "",
        params: "-",
        defaultValue: ""
    },
    {
        attribute: "editDisplay",
        desc: "???",
        dataType: "",
        params: "-",
        defaultValue: ""
    },
    {
        attribute: "viewDisplay",
        desc: "???",
        dataType: "",
        params: "-",
        defaultValue: ""
    },
    {
        attribute: "addDisabled",
        desc: "???",
        dataType: "",
        params: "-",
        defaultValue: ""
    },
    {
        attribute: "editDisabled",
        desc: "???",
        dataType: "",
        params: "-",
        defaultValue: ""
    },
    {
        attribute: "addDetail",
        desc: "???",
        dataType: "",
        params: "-",
        defaultValue: ""
    },
    {
        attribute: "editDetail",
        desc: "???",
        dataType: "",
        params: "-",
        defaultValue: ""
    },
    {
        attribute: "tabsType",
        desc: "",
        dataType: "-",
        params: "-",
        defaultValue: "-"
    }
];

let eventsList = [
    {
        attribute: "tab-click",
        desc: "",
        dataType: "",
        params: "",
        defaultValue: ""
    },
    {
        attribute: "submit",
        desc: "",
        dataType: "",
        params: "",
        defaultValue: ""
    },
    {
        attribute: "handleMock",
        desc: "",
        dataType: "",
        params: "",
        defaultValue: ""
    },
    {
        attribute: "handlePrint",
        desc: "",
        dataType: "",
        params: "",
        defaultValue: ""
    },
    {
        attribute: "resetForm",
        desc: "",
        dataType: "",
        params: "",
        defaultValue: ""
    },
    {
        attribute: "",
        desc: "",
        dataType: "",
        params: "",
        defaultValue: ""
    },
    {
        attribute: "",
        desc: "",
        dataType: "",
        params: "",
        defaultValue: ""
    },
    {
        attribute: "",
        desc: "",
        dataType: "",
        params: "",
        defaultValue: ""
    },

    {
        attribute: "",
        desc: "",
        dataType: "",
        params: "",
        defaultValue: ""
    },
    {
        attribute: "",
        desc: "",
        dataType: "",
        params: "",
        defaultValue: ""
    },
    {
        attribute: "",
        desc: "",
        dataType: "",
        params: "",
        defaultValue: ""
    },
    {
        attribute: "",
        desc: "",
        dataType: "",
        params: "",
        defaultValue: ""
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
        name: "API 事件(列表包含部分原生事件)",
        anchorPoint: "#Events"
    }
];

export let FormData = {
    title: titleSource,
    subTitle: subTitleSource,
    effectDesc: effectDescSource,
    attributes: attributesList,
    events: eventsList,
    anchor: anchorSource,
    scene: sceneSource
};
