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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassPaskItem = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var TaskData_1 = require("../common/tableData/TaskData");
var DropMgr_1 = require("../mgr/DropMgr");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var HttpPost_1 = require("../tools/HttpPost");
var GameEvent_1 = require("../common/config/GameEvent");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var DataObject_1 = require("../tools/DataObject");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataMgr_1 = require("../mgr/DataMgr");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var PassPaskItem = function () {
    var _classDecorators = [ccclass('PassPaskItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _pro_decorators;
    var _pro_initializers = [];
    var PassPaskItem = _classThis = /** @class */ (function (_super) {
        __extends(PassPaskItem_1, _super);
        function PassPaskItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.data = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.pro = __runInitializers(_this, _pro_initializers, null);
            return _this;
        }
        PassPaskItem_1.prototype.init = function (data) {
            this.data = data;
            this.setTaskData();
        };
        PassPaskItem_1.prototype.setTaskData = function () {
            this.taskData = new TaskData_1.TaskData(this.data.taskId, this.data.taskId1);
            var itemDropData = DropMgr_1.DropMgr.getDropData(this.taskData.item);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("item/icon", this.node, itemDropData[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("item/num", this.node, "x" + itemDropData[0].dropAmount);
            ViewUtil_1.ViewUtil.setLabelStringByName("plat/exp", this.node, (this.data.completed > this.taskData.getMainTaskValue() ?
                this.taskData.getMainTaskValue() : this.data.completed) + "/" + this.taskData.getMainTaskValue());
            ViewUtil_1.ViewUtil.setLabelStringByName("dec", this.node, this.taskData.getMainTaskDesc());
            this.pro.fillRange = this.data.completed / this.taskData.getMainTaskValue();
            if (this.data.isGetReward) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/btn_get", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/btn_goto", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/getted", this.node, true);
            }
            else {
                if (this.data.status == 1) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/btn_get", this.node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/btn_goto", this.node, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/getted", this.node, false);
                }
                else {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/btn_get", this.node, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/btn_goto", this.node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/getted", this.node, false);
                }
            }
        };
        PassPaskItem_1.prototype.getTaskReward = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.passGetTaskReward(this.data.taskId, function (data) {
                //显示掉落
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateDataPass, data);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.TaskProPass, data);
            });
        };
        //跳转
        PassPaskItem_1.prototype.gotoBtnFun = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            DataMgr_1.DataMgr.gotoFunction([GameUIConfig_1.UIID.Pass], this.taskData.jump);
        };
        return PassPaskItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PassPaskItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _pro_decorators = [property(cc_1.Sprite)];
        __esDecorate(null, null, _pro_decorators, { kind: "field", name: "pro", static: false, private: false, access: { has: function (obj) { return "pro" in obj; }, get: function (obj) { return obj.pro; }, set: function (obj, value) { obj.pro = value; } }, metadata: _metadata }, _pro_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PassPaskItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PassPaskItem = _classThis;
}();
exports.PassPaskItem = PassPaskItem;
