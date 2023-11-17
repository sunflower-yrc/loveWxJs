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
exports.PetTravelTool = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DropMgr_1 = require("../mgr/DropMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var PetRewardData_1 = require("./PetRewardData");
var DataMgr_1 = require("../mgr/DataMgr");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var PetTravelTool = function () {
    var _classDecorators = [ccclass('PetTravelTool')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _toolBuyNode_decorators;
    var _toolBuyNode_initializers = [];
    var _selectNode_decorators;
    var _selectNode_initializers = [];
    var PetTravelTool = _classThis = /** @class */ (function (_super) {
        __extends(PetTravelTool_1, _super);
        function PetTravelTool_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.serverData = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.items = [];
            _this.toolBuyNode = __runInitializers(_this, _toolBuyNode_initializers, void 0);
            _this.selectNode = __runInitializers(_this, _selectNode_initializers, void 0);
            _this.selectIdx = 0;
            return _this;
        }
        PetTravelTool_1.prototype.onAdded = function (data) {
            this.serverData = data;
            this.items = ViewUtil_1.ViewUtil.findChildByName("root/bg/content", this.node).children;
            this.uiRefresh();
        };
        PetTravelTool_1.prototype.uiRefresh = function () {
            var _this = this;
            for (var i = 0; i < this.items.length; i++) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("showItem/addSp", this.items[i], this.serverData.travel[i].count <= 0);
                ViewUtil_1.ViewUtil.setNodeActiveByName("showItem/nameLabel", this.items[i], this.serverData.travel[i].count > 0);
                ViewUtil_1.ViewUtil.setLabelStringByName("showItem/nameLabel", this.items[i], this.serverData.travel[i].count);
                var rewardData = PetRewardData_1.PetRewardData.getAllData().find(function (x) { return x.id == _this.serverData.travel[i].id; });
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.items[i], GameResPath_1.GameResPath.getPetRewardIconsPath(rewardData.rewardIcon), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("nameLabel", this.items[i], rewardData.getName());
                ViewUtil_1.ViewUtil.setLabelStringByName("desc", this.items[i], rewardData.getDesc1());
            }
        };
        PetTravelTool_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetTravelTool);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePetMain);
        };
        //空手出行
        PetTravelTool_1.prototype.btn_noToolTravel = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.petTravelBegin(this.serverData.petId, 0, function (data) {
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetTravelTool);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePetMain);
                //更新数据
                DataMgr_1.DataMgr.updateUserData(null, null, data.taskList);
            }, function (data) {
                Oops_1.oops.gui.toast(data.msg);
            });
        };
        //选择道具出行
        PetTravelTool_1.prototype.btn_ToolTravel = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.petTravelBegin(this.serverData.petId, this.serverData.travel[this.selectIdx].id, function (data) {
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetTravelTool);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePetMain);
                //更新数据
                DataMgr_1.DataMgr.updateUserData(null, null, data.taskList);
            }, function (data) {
                Oops_1.oops.gui.toast(data.msg);
            });
        };
        PetTravelTool_1.prototype.btn_Use = function (event, data) {
            var _this = this;
            var idx = Number(data);
            this.selectNode.setWorldPosition(new cc_1.Vec3(this.selectNode.worldPosition.x, this.items[idx].getWorldPosition().y, this.selectNode.worldPosition.z));
            this.selectIdx = idx;
            if (this.serverData.travel[idx].count <= 0) {
                this.toolBuyNode.active = true;
                ViewUtil_1.ViewUtil.findChildByName("BuyConfirm", this.node).getComponent(cc_1.Animation).play();
                var reward = PetRewardData_1.PetRewardData.getAllData().find(function (x) { return x.id == _this.serverData.travel[idx].id; });
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/name", this.toolBuyNode, reward.getName());
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("root/bg/rank/icon", this.toolBuyNode, GameResPath_1.GameResPath.getPetRewardIconsPath(reward.rewardIcon), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/cost_bg/amount", this.toolBuyNode, this.serverData.travel[idx].price);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("root/bg/rank", this.toolBuyNode, GameResPath_1.GameResPath.getQualityBgPath(reward.rewardRank.toString()), BundleConfig_1.default.instance.guiBundle.name);
            }
        };
        PetTravelTool_1.prototype.btn_closeBuyNode = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.toolBuyNode.active = false;
        };
        PetTravelTool_1.prototype.btn_buy = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.petTravelBuy(this.serverData.travel[this.selectIdx].id, function (data) {
                var dData = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dData;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                data.petId = _this.serverData.petId;
                _this.onAdded(data);
                _this.toolBuyNode.active = false;
            });
        };
        PetTravelTool_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.PetTravelTool);
        };
        return PetTravelTool_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PetTravelTool");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _toolBuyNode_decorators = [property(cc_2.Node)];
        _selectNode_decorators = [property(cc_2.Node)];
        __esDecorate(null, null, _toolBuyNode_decorators, { kind: "field", name: "toolBuyNode", static: false, private: false, access: { has: function (obj) { return "toolBuyNode" in obj; }, get: function (obj) { return obj.toolBuyNode; }, set: function (obj, value) { obj.toolBuyNode = value; } }, metadata: _metadata }, _toolBuyNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _selectNode_decorators, { kind: "field", name: "selectNode", static: false, private: false, access: { has: function (obj) { return "selectNode" in obj; }, get: function (obj) { return obj.selectNode; }, set: function (obj, value) { obj.selectNode = value; } }, metadata: _metadata }, _selectNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PetTravelTool = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetTravelTool = _classThis;
}();
exports.PetTravelTool = PetTravelTool;
