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
exports.PassLevelItem = void 0;
var cc_1 = require("cc");
var DropMgr_1 = require("../mgr/DropMgr");
var DataObject_1 = require("../tools/DataObject");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var HttpPost_1 = require("../tools/HttpPost");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var cc_2 = require("cc");
var cc_3 = require("cc");
var TipCommonItem_1 = require("../../comm/TipCommonItem");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var PassLevelItem = function () {
    var _classDecorators = [ccclass('PassLevelItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _reward1_decorators;
    var _reward1_initializers = [];
    var _reward2_decorators;
    var _reward2_initializers = [];
    var PassLevelItem = _classThis = /** @class */ (function (_super) {
        __extends(PassLevelItem_1, _super);
        function PassLevelItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.reward1 = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _reward1_initializers, null));
            _this.reward2 = __runInitializers(_this, _reward2_initializers, null);
            _this.itemDropData1 = null;
            _this.itemDropData2 = null;
            return _this;
        }
        PassLevelItem_1.prototype.init = function (data, passData, isList) {
            var _a, _b;
            if (isList === void 0) { isList = true; }
            this.data = data;
            if (!isList) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("lock", this.reward2, !passData.upPassIsBuy);
                this.setShowUI();
                return;
            }
            // let passData = new PassData(data.id);
            var canGet = false;
            if (passData.passLevel > this.data.level) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("linePre", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lineNext", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("gray", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("can", this.node, true);
                canGet = true;
            }
            else if (passData.passLevel == this.data.level) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("linePre", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lineNext", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("gray", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("can", this.node, true);
                canGet = true;
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("linePre", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lineNext", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("gray", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("can", this.node, false);
            }
            if (data.levelReward1 == "0") {
                this.reward1.active = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("yes1", this.node, false);
            }
            else {
                this.reward1.active = true;
                this.reward1.getComponent(cc_3.UIOpacity).opacity = (!data.isCanGet1 && canGet) ? 150 : 255;
                this.itemDropData1 = DropMgr_1.DropMgr.getDropData(data.levelReward1);
                var tip1 = (_a = this.reward1.getChildByName("icon")) === null || _a === void 0 ? void 0 : _a.getComponent(TipCommonItem_1.TipCommonItem);
                tip1 === null || tip1 === void 0 ? void 0 : tip1.initData(this.itemDropData1[0]);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.reward1, this.itemDropData1[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("num", this.reward1, "" + this.itemDropData1[0].dropAmount);
                ViewUtil_1.ViewUtil.setNodeActiveByName("show", this.reward1, data.isCanGet1);
                ViewUtil_1.ViewUtil.setNodeActiveByName("not", this.reward1, !data.isCanGet1);
                ViewUtil_1.ViewUtil.setNodeActiveByName("yes1", this.node, !data.isCanGet1 && canGet);
                this.reward1.getComponent(cc_2.Button).interactable = Boolean(data.isCanGet1);
            }
            this.reward2.getComponent(cc_3.UIOpacity).opacity = (!data.isCanGet2 && canGet) ? 150 : 255;
            this.itemDropData2 = DropMgr_1.DropMgr.getDropData(data.levelReward2);
            var tip2 = (_b = this.reward2.getChildByName("icon")) === null || _b === void 0 ? void 0 : _b.getComponent(TipCommonItem_1.TipCommonItem);
            tip2 === null || tip2 === void 0 ? void 0 : tip2.initData(this.itemDropData2[0]);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.reward2, this.itemDropData2[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("num", this.reward2, "" + this.itemDropData2[0].dropAmount);
            ViewUtil_1.ViewUtil.setNodeActiveByName("show", this.reward2, data.isCanGet2);
            ViewUtil_1.ViewUtil.setNodeActiveByName("not", this.reward2, !data.isCanGet2);
            ViewUtil_1.ViewUtil.setNodeActiveByName("lock", this.reward2, !passData.upPassIsBuy);
            ViewUtil_1.ViewUtil.setLabelStringByName("level", this.node, data.level);
            this.reward2.getComponent(cc_2.Button).interactable = Boolean(data.isCanGet2);
            ViewUtil_1.ViewUtil.setNodeActiveByName("yes2", this.node, !data.isCanGet2 && canGet && passData.upPassIsBuy);
        };
        PassLevelItem_1.prototype.setShowUI = function () {
            if (this.data.levelReward1 == "0") {
                this.reward1.active = false;
            }
            else {
                this.reward1.active = true;
                this.itemDropData1 = DropMgr_1.DropMgr.getDropData(this.data.levelReward1);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.reward1, this.itemDropData1[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("num", this.reward1, "" + this.itemDropData1[0].dropAmount);
            }
            this.itemDropData2 = DropMgr_1.DropMgr.getDropData(this.data.levelReward2);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.reward2, this.itemDropData2[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("num", this.reward2, "" + this.itemDropData2[0].dropAmount);
            ViewUtil_1.ViewUtil.setLabelStringByName("level", this.node, this.data.level);
        };
        PassLevelItem_1.prototype.getReward = function (ev, type) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.passGetLevelReward(this.data.id, type, function (data) {
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.Pass;
                dropInfo.UIID = [GameUIConfig_1.UIID.Pass];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateDataPass, data);
            });
        };
        return PassLevelItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PassLevelItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _reward1_decorators = [property(cc_1.Node)];
        _reward2_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _reward1_decorators, { kind: "field", name: "reward1", static: false, private: false, access: { has: function (obj) { return "reward1" in obj; }, get: function (obj) { return obj.reward1; }, set: function (obj, value) { obj.reward1 = value; } }, metadata: _metadata }, _reward1_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reward2_decorators, { kind: "field", name: "reward2", static: false, private: false, access: { has: function (obj) { return "reward2" in obj; }, get: function (obj) { return obj.reward2; }, set: function (obj, value) { obj.reward2 = value; } }, metadata: _metadata }, _reward2_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PassLevelItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PassLevelItem = _classThis;
}();
exports.PassLevelItem = PassLevelItem;
