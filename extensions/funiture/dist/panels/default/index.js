"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
// import { Asset } from '../../../@types/packages/engine/@types/editor-extends';
// const util = Editor.require('util');
// console.log(util.inspect(Editor.Utils, { depth: null }));
const assetFolderPath = 'db://assets/res/furnitureItems/prefab';
const bed = '11001.prefab';
/**
 * @zh 如果希望兼容 3.3 之前的版本可以使用下方的代码
 * @en You can add the code below if you want compatibility with versions prior to 3.3
 */
// Editor.Panel.define = Editor.Panel.define || function(options: any) { return options }
module.exports = Editor.Panel.define({
    listeners: {
        show() { console.log('show'); },
        hide() { console.log('hide'); },
    },
    template: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/template/default/index.html'), 'utf-8'),
    style: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/style/default/index.css'), 'utf-8'),
    $: {
        app: '#app',
        prefab: '#prefab',
        create: '#create',
    },
    methods: {
        hello() {
            if (this.$.app) {
                this.$.app.innerHTML = 'hello';
                console.log('[cocos-panel-html.default]: hello');
            }
        },
    },
    ready() {
        if (this.$.app) {
            this.$.app.innerHTML = 'Create Your Furniture Prefab';
        }
        this.$.prefab.addEventListener('change', (data) => {
            // $event.target.value
            this.$.app.innerHTML = '试试开始';
            console.log('[cocos-panel-html.default]: 试试开始', data);
            console.log(this.$.prefab); // <section class="test">
            const element = document.getElementById(this.$.prefab.id);
            // set value
            // element.value = '03721795-84b1-4dcd-8eb3-c8e6b88ee535';
            // get value
            // const assetUuid = element.value;
            console.log('[cocos-panel-html.default]: 试试' + element);
            // this.dump.value.label.value = this.$.testInput.value;
            // this.$.test.dispatch('change-dump');
        });
        // 监听 input 上的提交事件，当 input 提交数据的时候，更新 dump 数据，并使用 prop 发送 change-dump 事件
        this.$.create.addEventListener('confirm', async (event) => {
            // console.log(Asset.getAssetInfoFromUrl(`${assetFolderPath}`));
            // Editor.assetdb.queryAssets(`${assetFolderPath}/**/*`, 'asset', (err, results) => {
            //     if (err) {
            //       Editor.error(err);
            //       return;
            //     }
            //     const assetInfo = results.find((result) => result.path.endsWith(assetFileName));
            //     if (assetInfo) {
            //       console.log(`[${assetInfo.name}] UUID: ${assetInfo.uuid}`);
            //     } else {
            //       console.log(`找不到名为 ${assetFileName} 的预制体文件`);
            //     }
            //   });
            // const type = Editor.Selection.getLastSelectedType();  // "asset"
            // console.log('[cocos-panel-html.default]: Node Type =', type);
            const uuid = Editor.Selection.getSelected("node")[0];
            console.log('[cocos-panel-html.default]: Node UUID =', uuid);
            const prefabUuid = this.$.prefab.getAttribute('value');
            console.log('[cocos-panel-html.default]: Prefab UUID =', prefabUuid);
            const newUUID = await Editor.Message.request('scene', 'create-node', {
                assetUuid: prefabUuid,
                unlinkPrefab: true,
                parent: uuid,
                keepWorldTransform: false,
            });
            console.log("新节点uuid", newUUID);
            const dump = await Editor.Message.request('scene', 'query-node-tree', newUUID);
            console.log("新节点uuid", dump);
            // 可用
            // const info = await Editor.Message.request('scene', 'query-node', uuid);
            // Editor.Message.broadcast('my-plugin:create-prefab-node', (event, args) => {
            //     query((prefabUuid) => {
            // Editor.Message.request('scene:create-node', {
            //     name: args.nodeName,
            //     parent: args.parentName,
            //     prefab: prefabUuid,
            //     position: cc.Vec2.ZERO,
            // });
            // });
            //   });
            // const panel: any = this;
            // this.$.app!.innerHTML = '试试开始';
            // console.log('[cocos-panel-html.default]: 试试开始', event);
            // console.log('[cocos-panel-html.default]: 试试开始', this.$.prefab?.attributes);
            // console.log('[cocos-panel-html.default]: 试试开始', panel.asset!);
            // console.log(this.$.prefab, "www", (this.$.prefab! as any).value); // <section class="test">
            // const element = document.getElementById((this.$.prefab! as any).value)!;
            // // set value
            // // element.value = '03721795-84b1-4dcd-8eb3-c8e6b88ee535';
            // // get value
            // // const assetUuid = element.value;
            // console.log('[cocos-panel-html.default]: 试试' + element);
            // // this.dump.value.label.value = this.$.testInput.value;
            // // this.$.test.dispatch('change-dump');
        });
    },
    beforeClose() { },
    close() { },
});
