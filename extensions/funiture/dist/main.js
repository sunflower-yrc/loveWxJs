"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unload = exports.load = exports.listeners = exports.methods = void 0;
// @ts-ignore
const package_json_1 = __importDefault(require("../package.json"));
/**
 * @en
 * @zh 为扩展的主进程的注册方法
 */
exports.methods = {
    openPanel() {
        Editor.Panel.open(package_json_1.default.name);
    },
    onConfirm() {
        // Editor.Panel.open(packageJSON.name);
        console.log('[cocos-panel-html.default]: 试试开始');
        const element = document.getElementById('#asset');
        // set value
        // element.value = '03721795-84b1-4dcd-8eb3-c8e6b88ee535';
        // get value
        // const assetUuid = element.value;
        console.log('[cocos-panel-html.default]: 试试' + element);
        // this.clickedNumber++;
    }
    // createPrefab() {
    //     Editor.Panel.open(packageJSON.name);
    // },
    // // vue object
    // methods = {
    // };
};
exports.listeners = {
    /**
     * 面板隐藏的时候触发
     */
    hide() {
        console.log(`hide: ${this.hidden}`);
    },
    /**
     * 面板显示的时候触发
     */
    show() {
        console.log(`hide: ${this.hidden}`);
    },
    /**
     * 面板大小更改的时候触发
     */
    resize() {
        console.log(`height: ${this.clientHeight}`);
        console.log(`width: ${this.clientWidth}`);
    },
};
/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
function load() { }
exports.load = load;
/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
function unload() { }
exports.unload = unload;
