"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoonTaskItem = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var TaskData_1 = require("../common/tableData/TaskData");
var cc_2 = require("cc");
var cc_3 = require("cc");
var cc_4 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var cc_5 = require("cc");
var DropMgr_1 = require("../mgr/DropMgr");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataMgr_1 = require("../mgr/DataMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var cc_6 = require("cc");
var GameResPath_1 = require("../common/config/GameResPath");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var MoonTaskItem = function () {
    var _classDecorators = [ccclass('MoonTaskItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _pro_decorators;
    var _pro_initializers = [];
    var _iconGet_decorators;
    var _iconGet_initializers = [];
    var _content_decorators;
    var _content_initializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var MoonTaskItem = _classThis = /** @class */ (function (_super) {
        __extends(MoonTaskItem_1, _super);
        function MoonTaskItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pro = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _pro_initializers, null));
            _this.iconGet = __runInitializers(_this, _iconGet_initializers, null);
            _this.content = __runInitializers(_this, _content_initializers, null);
            _this.item = __runInitializers(_this, _item_initializers, null);
            return _this;
        }
        MoonTaskItem_1.prototype.start = function () { };
        MoonTaskItem_1.prototype.init = function (data) {
            this.data = data;
            //状态 1:未完成 2:完成
            if (data.status == 1) {
                this.node.getComponent(cc_2.Sprite).color = new cc_5.Color(255, 255, 255, 255);
                this.content.getComponent(cc_6.Button).interactable = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("iconGet", this.node, false);
            }
            else {
                //是否已领取奖励（1：已领取 0：未领取）
                if (data.isGetReward) {
                    this.node.getComponent(cc_2.Sprite).color = new cc_5.Color(255, 255, 255, 150);
                    this.content.getComponent(cc_6.Button).interactable = false;
                    ViewUtil_1.ViewUtil.setNodeActiveByName("iconGet", this.node, false);
                }
                else {
                    this.node.getComponent(cc_2.Sprite).color = new cc_5.Color(255, 255, 255, 255);
                    this.content.getComponent(cc_6.Button).interactable = true;
                    ViewUtil_1.ViewUtil.setNodeActiveByName("iconGet", this.node, true);
                }
            }
            this.taskData = new TaskData_1.TaskData(data.type, data.taskId);
            ViewUtil_1.ViewUtil.setLabelStringByName("lbName", this.node, this.taskData.getMainTaskDesc());
            ViewUtil_1.ViewUtil.setLabelStringByName("lbProgress", this.node, data.completed > this.taskData.getMainTaskValue() ?
                this.taskData.getMainTaskValue() + "/" + this.taskData.getMainTaskValue() : data.completed + "/" + this.taskData.getMainTaskValue());
            this.pro.fillRange = (data.completed / this.taskData.getMainTaskValue());
            var itemDropData = DropMgr_1.DropMgr.getDropData(data.reward);
            this.onItemList(this.content, itemDropData);
        };
        //物品列表渲染
        MoonTaskItem_1.prototype.onItemList = function (parent, data) {
            var len = parent.children.length > data.length ?
                parent.children.length : data.length;
            for (var i = 0; i < len; i++) {
                var itemNode = void 0;
                if (parent.children[i] && data[i]) {
                    parent.children[i].active = true;
                    itemNode = parent.children[i];
                }
                else if (!parent.children[i] && data[i]) {
                    var item = (0, cc_4.instantiate)(this.item);
                    item.parent = parent;
                    itemNode = item;
                }
                else if (parent.children[i] && !data[i]) {
                    parent.children[i].active = false;
                    continue;
                }
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", itemNode, data[i].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("num", itemNode, "x" + data[i].dropAmount);
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(itemNode, GameResPath_1.GameResPath.getQualityBgPath(data[i].grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
            }
        };
        MoonTaskItem_1.prototype.getTaskReward = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.nationalDayGetTaskReward(this.data.taskId, function (data) {
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.MoonFestival;
                dropInfo.UIID = [GameUIConfig_1.UIID.MoonFestival];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateMoonTask, data.info);
                DataMgr_1.DataMgr.updateUserData(data.userGrade, null, null);
            });
        };
        return MoonTaskItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MoonTaskItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _pro_decorators = [property(cc_2.Sprite)];
        _iconGet_decorators = [property(cc_1.Node)];
        _content_decorators = [property(cc_1.Node)];
        _item_decorators = [property(cc_3.Prefab)];
        __esDecorate(null, null, _pro_decorators, { kind: "field", name: "pro", static: false, private: false, access: { has: function (obj) { return "pro" in obj; }, get: function (obj) { return obj.pro; }, set: function (obj, value) { obj.pro = value; } }, metadata: _metadata }, _pro_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _iconGet_decorators, { kind: "field", name: "iconGet", static: false, private: false, access: { has: function (obj) { return "iconGet" in obj; }, get: function (obj) { return obj.iconGet; }, set: function (obj, value) { obj.iconGet = value; } }, metadata: _metadata }, _iconGet_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: function (obj) { return "content" in obj; }, get: function (obj) { return obj.content; }, set: function (obj, value) { obj.content = value; } }, metadata: _metadata }, _content_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MoonTaskItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MoonTaskItem = _classThis;
}();
exports.MoonTaskItem = MoonTaskItem;
