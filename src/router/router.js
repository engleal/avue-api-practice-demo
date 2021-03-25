import Input from "@/views/input";
import InputTree from "@/views/input-tree";
import InputNumber from "@/views/input-number";
import InputColor from "@/views/input-color";
import InputIcon from "@/views/input-icon";
import InputMap from "@/views/input-map";
import InputTable from "@/views/input-table";
import InputArray from "@/views/array";
import Select from "@/views/select";
import Radio from "@/views/radio";
import Checkbox from "@/views/checkbox";
import Switch from "@/views/switch";
import Date from "@/views/date";
import Time from "@/views/time";
import Rate from "@/views/rate";
import Slider from "@/views/slider";
import Cascader from "@/views/cascader";

import Form from "@/views/form";

import Table from "@/views/table";

import DataPay from "@/views/data-pay";
import DataTabs from "@/views/data-tabs";
import DataBox from "@/views/data-box";
import DataCard from "@/views/data-card";
import DataCardText from "@/views/data-card-text";
import DataDisplay from "@/views/data-display";
import DataIcons from "@/views/data-icons";
import DataOperaText from "@/views/data-opera-text";
import DataProgress from "@/views/data-progress";
import DataRotate from "@/views/data-rotate";
import DataImgText from "@/views/data-img-text";
import DataPanel from "@/views/data-panel";
import DataPrice from "@/views/data-price";

import Login from "@/views/login";
import Keyboard from "@/views/keyboard";
import Notice from "@/views/notice";
import ScreenShot from "@/views/screenshot";
import Video from "@/views/video";
import Verify from "@/views/verify";
import Print from "@/views/print";
import ExportXlsx from "@/views/export-xlsx";
import NProgress from "@/views/nprogress";
import Chat from "@/views/chat";
import License from "@/views/license";
import Sign from "@/views/sign";
import Flow from "@/views/flow";
import Skeleton from "@/views/skeleton";
import Article from "@/views/article";
import Comment from "@/views/comment";
import Code from "@/views/code";
import CountUp from "@/views/count-up";
import Card from "@/views/card";
import Draggable from "@/views/draggable";
import ImagePreview from "@/views/image-preview";
import Clipboard from "@/views/clipboard";
import Watermark from "@/views/watermark";
import ExportExcel from "@/views/export-excel";
import Empty from "@/views/empty";
import TextEllipsis from "@/views/text-ellipsis";
import Avatar from "@/views/avatar";
import Affix from "@/views/affix";
import Search from "@/views/search";
import Tabs from "@/views/tabs";
import Tree from "@/views/tree";

let mobileGroup = [];

// 其他组件
let partGroup = {
    groupName: "其他组件",
    groupKey: "group5",
    list: [
        {
            path: "/tree",
            name: "tree",
            component: Tree,
            desc:"树形"
        },
        {
            path: "/tabs",
            name: "tabs",
            component: Tabs,
            desc:"选项卡"
        },
        {
            path: "/search",
            name: "search",
            component: Search,
            desc:"搜索"
        },
        {
            path: "/affix",
            name: "affix",
            component: Affix,
            desc:"图钉"
        },
        {
            path: "/avatar",
            name: "avatar",
            component: Avatar,
            desc:"头像"
        },
        {
            path: "/textEllipsis",
            name: "textEllipsis",
            component: TextEllipsis,
            desc:"超出文本省略"
        },
        {
            path: "/empty",
            name: "empty",
            component: Empty,
            desc:"空状态"
        },
        {
            path: "/exportExcel",
            name: "exportExcel",
            component: ExportExcel,
            desc:"导出excel"
        },
        {
            path: "/watermark",
            name: "watermark",
            component: Watermark,
            desc:"全局水印"
        },
        {
            path: "/clipboard",
            name: "clipboard",
            component: Clipboard,
            desc:"复制到剪贴板"
        },
        {
            path: "/imagePreview",
            name: "imagePreview",
            component: ImagePreview,
            desc:"图片预览"
        },
        {
            path: "/draggable",
            name: "draggable",
            component: Draggable,
            desc:"拖拽"
        },
        {
            path: "/card",
            name: "card",
            component: Card,
            desc:"卡片"
        },
        {
            path: "/countUp",
            name: "countUp",
            component: CountUp,
            desc:"数字动画"
        },
        {
            path: "/code",
            name: "code",
            component: Code,
            desc:"代码高亮"
        },
        {
            path: "/comment",
            name: "comment",
            component: Comment,
            desc:"评论"
        },
        {
            path: "/article",
            name: "article",
            component: Article,
            desc:"文章"
        },
        {
            path: "/skeleton",
            name: "skeleton",
            component: Skeleton,
            desc:"骨架屏"
        },
        {
            path: "/flow",
            name: "flow",
            component: Flow,
            desc:"流程"
        },
        {
            path: "/sign",
            name: "sign",
            component: Sign,
            desc:"电子签名"
        },
        {
            path: "/license",
            name: "license",
            component: License,
            desc:"授权证书"
        },
        {
            path: "/chat",
            name: "chat",
            component: Chat,
            desc:"客服聊天"
        },
        {
            path: "/nProgress",
            name: "nProgress",
            component: NProgress,
            desc:"进度条"
        },
        {
            path: "/exportXlsx",
            name: "exportXlsx",
            component: ExportXlsx,
            desc:"导出"
        },
        {
            path: "/print",
            name: "print",
            component: Print,
            desc:"打印"
        },
        {
            path: "/verify",
            name: "verify",
            component: Verify,
            desc:"验证码"
        },
        {
            path: "/video",
            name: "video",
            component: Video,
            desc:"摄像头"
        },
        {
            path: "/screenShot",
            name: "screenShot",
            component: ScreenShot,
            desc:"屏幕截图"
        },
        {
            path: "/notice",
            name: "notice",
            component: Notice,
            desc:"消息通知"
        },
        {
            path: "/keyboard",
            name: "keyboard",
            component: Keyboard,
            desc:"键盘组件"
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            desc:"登录组件"
        }
    ]
};

// 数据展示组件
let dataGroup = {
    groupName: "数据展示",
    groupKey: "group4",
    list: [
        {
            path: "/dataPrice",
            name: "dataPrice",
            component: DataPrice
        },
        {
            path: "/dataPanel",
            name: "dataPanel",
            component: DataPanel
        },
        {
            path: "/dataImgText",
            name: "dataImgText",
            component: DataImgText
        },
        {
            path: "/dataRotate",
            name: "dataRotate",
            component: DataRotate
        },
        {
            path: "/dataProgress",
            name: "dataProgress",
            component: DataProgress
        },
        {
            path: "/dataOperaText",
            name: "dataOperaText",
            component: DataOperaText
        },
        {
            path: "/dataIcons",
            name: "dataIcons",
            component: DataIcons
        },
        {
            path: "/dataDisplay",
            name: "dataDisplay",
            component: DataDisplay
        },
        {
            path: "/dataCardText",
            name: "dataCardText",
            component: DataCardText
        },
        {
            path: "/dataCard",
            name: "dataCard",
            component: DataCard
        },
        {
            path: "/dataBox",
            name: "dataBox",
            component: DataBox
        },
        {
            path: "/dataTabs",
            name: "dataTabs",
            component: DataTabs
        },
        {
            path: "/dataPay",
            name: "dataPay",
            component: DataPay
        }
    ]
};

// 表格组件
let tableGroup = {
    groupName: "表格组件",
    groupKey: "group3",
    list: [
        {
            path: "/table",
            name: "table",
            component: Table,
            desc:"表格组件"
        }
    ]
};

// 表单组件
let formGroup = {
    groupName: "表单组件",
    groupKey: "group2",
    list: [
        {
            path: "/form",
            name: "form",
            component: Form,
            desc:"表单组件"
        }
    ]
};

// 单组件分组
let inputGroup = {
    groupName: "单组件",
    groupKey: "group1",
    list: [
        {
            path: "/cascader",
            name: "cascader",
            component: Cascader,
            desc:"级联选择框"
        },
        {
            path: "/slider",
            name: "slider",
            component: Slider,
            desc:"滑动框"
        },
        {
            path: "/rate",
            name: "rate",
            component: Rate,
            desc:"评价框"
        },
        {
            path: "/time",
            name: "time",
            component: Time,
            desc:"时间选择器"
        },
        {
            path: "/date",
            name: "date",
            component: Date,
            desc:"日期选择器"
        },
        {
            path: "/switch",
            name: "switch",
            component: Switch,
            desc:"开关"
        },
        {
            path: "/checkbox",
            name: "checkbox",
            component: Checkbox,
            desc:"多选"
        },
        {
            path: "/radio",
            name: "radio",
            component: Radio,
            desc:"单选"
        },
        {
            path: "/select",
            name: "select",
            component: Select,
            desc:"选择框"
        },
        {
            path: "/inputArray",
            name: "inputArray",
            component: InputArray,
            desc:"数组输入框"
        },



        {
            path: "/inputTable",
            name: "inputTable",
            component: InputTable,
            desc:"表格选择器"
        },
        {
            path: "/inputMap",
            name: "inputMap",
            component: InputMap,
            desc:"地图选择器"
        },
        {
            path: "/inputIcon",
            name: "inputIcon",
            component: InputIcon,
            desc:"图标选择器"
        },
        {
            path: "/inputColor",
            name: "inputColor",
            component: InputColor,
            desc:"颜色选择器"
        },
        {
            path: "/inputNumber",
            name: "inputNumber",
            component: InputNumber,
            desc:"数字框"
        },
        {
            path: "/inputTree",
            name: "inputTree",
            component: InputTree,
            desc:"树形选择器"
        },
        {
            path: "/input",
            name: "input",
            component: Input,
            desc:"输入框"
        }
    ]
};

// 路由信息
export let routerList = [
    ...partGroup.list,

    ...dataGroup.list,

    ...tableGroup.list,

    ...formGroup.list,

    ...inputGroup.list,
    {
        path: "/",
        redirect: "/cascader"
    }
];

// nav信息
export let navList = groupSort([
    inputGroup,
    formGroup,
    tableGroup,
    dataGroup,
    partGroup,
]);

// 排序算法
function groupSort(params) {
    var groupList = [...params] 
    groupList.forEach((group)=>{
        group.list && group.list.sort(function(current,next){
            if(current.name < next.name){
                return -1
            }else{
                return 1
            }
        })
    })
    return groupList
}



