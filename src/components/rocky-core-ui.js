
import  RockyCoreHeader from './header';
import RockyCoreNav from './nav';
import RockyCoreAffix from './affix'
import RockyCoreMarkdown from './markdown'
import RockyCoreCodeCard from './code-card'
/** Header Component */
export let Header = RockyCoreHeader;
/** Nav Component */
export let Nav = RockyCoreNav;
/** Affix Component */
export let Affix = RockyCoreAffix;
// 组件对象 用于组件注册
const components = {    
    "rc-header":RockyCoreHeader,
    "rc-nav":RockyCoreNav,
    "rc-affix":RockyCoreAffix,
    "rc-markdown":RockyCoreMarkdown,
    "rc-code-card":RockyCoreCodeCard,
};
// console.log("components", components);
export function install (Vue) {
    Object.keys(components).forEach((key)=>{
        // console.log("key",key)
        Vue.component(key,components[key])
    })
};