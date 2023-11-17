"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
// import { Asset } from '../../../@types/packages/engine/@types/editor-extends';
// const util = Editor.require('util');
// console.log(util.inspect(Editor.Utils, { depth: null }));
var assetFolderPath = 'db://assets/res/furnitureItems/prefab';
var bed = '11001.prefab';
/**
 * @zh 如果希望兼容 3.3 之前的版本可以使用下方的代码
 * @en You can add the code below if you want compatibility with versions prior to 3.3
 */
// Editor.Panel.define = Editor.Panel.define || function(options: any) { return options }
module.exports = Editor.Panel.define({
    listeners: {
        show: function () { console.log('show'); },
        hide: function () { console.log('hide'); },
    },
    template: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/template/default/index.html'), 'utf-8'),
    style: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/style/default/index.css'), 'utf-8'),
    $: {
        app: '#app',
        prefab: '#prefab',
        create: '#create',
    },
    methods: {
        hello: function () {
            if (this.$.app) {
                this.$.app.innerHTML = 'hello';
                console.log('[cocos-panel-html.default]: hello');
            }
        },
    },
    ready: function () {
        var _this = this;
        if (this.$.app) {
            this.$.app.innerHTML = 'Create Your Furniture Prefab';
        }
        this.$.prefab.addEventListener('change', function (data) {
            // $event.target.value
            _this.$.app.innerHTML = '试试开始';
            console.log('[cocos-panel-html.default]: 试试开始', data);
            console.log(_this.$.prefab); // <section class="test">
            var element = document.getElementById(_this.$.prefab.id);
            // set value
            // element.value = '03721795-84b1-4dcd-8eb3-c8e6b88ee535';
            // get value
            // const assetUuid = element.value;
            console.log('[cocos-panel-html.default]: 试试' + element);
            // this.dump.value.label.value = this.$.testInput.value;
            // this.$.test.dispatch('change-dump');
        });
        // 监听 input 上的提交事件，当 input 提交数据的时候，更新 dump 数据，并使用 prop 发送 change-dump 事件
        this.$.create.addEventListener('confirm', function (event) { return __awaiter(_this, void 0, void 0, function () {
            var uuid, prefabUuid, newUUID, done, dump;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uuid = Editor.Selection.getSelected("node")[0];
                        console.log('[cocos-panel-html.default]: Node UUID =', uuid);
                        prefabUuid = this.$.prefab.getAttribute('value');
                        console.log('[cocos-panel-html.default]: Prefab UUID =', prefabUuid);
                        return [4 /*yield*/, Editor.Message.request('scene', 'create-node', {
                                assetUuid: prefabUuid,
                                unlinkPrefab: true,
                                parent: uuid,
                                keepWorldTransform: false,
                            })];
                    case 1:
                        newUUID = _a.sent();
                        console.log("新节点uuid", newUUID);
                        return [4 /*yield*/, Editor.Message.request('scene', 'reset-node', newUUID)];
                    case 2:
                        done = _a.sent();
                        console.log("重置节点", done);
                        return [4 /*yield*/, Editor.Message.request('scene', 'query-node-tree', newUUID)];
                    case 3:
                        dump = _a.sent();
                        console.log("新节点uuid", dump);
                        return [2 /*return*/];
                }
            });
        }); });
    },
    beforeClose: function () { },
    close: function () { },
});
