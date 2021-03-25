import RockyBasicContent from "./basic-content/basic-content";
import RockyCoreHeader from "./header/header";
import RockyCoreNav from "./nav/nav";
import RockyCoreAffix from "./affix/affix";
import RockyCoreMarkdown from "./markdown/markdown";
import RockyCoreCodeCard from "./code-card/code-card";
import RockyTimeLine from "./time-line/time-line";
import RockyTable from "./table/table";

// 组件对象 用于组件注册
const components = {
    "rc-basic-content": RockyBasicContent,
    "rc-header": RockyCoreHeader,
    "rc-nav": RockyCoreNav,
    "rc-affix": RockyCoreAffix,
    "rc-markdown": RockyCoreMarkdown,
    "rc-code-card": RockyCoreCodeCard,
    "rc-time-line":RockyTimeLine,
    "rc-table":RockyTable
};
export function install(Vue) {
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
}
