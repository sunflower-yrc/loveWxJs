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
exports.ComBuyPanel = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../game/common/bundle/BundleConfig");
var GameEvent_1 = require("../game/common/config/GameEvent");
var GameResPath_1 = require("../game/common/config/GameResPath");
var GameUIConfig_1 = require("../game/common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../game/common/ecs/SingletonModuleComp");
var GlobalData_1 = require("../game/common/tableData/GlobalData");
var ManorLevelData_1 = require("../game/manor/ManorLevelData");
var SdkPlatform_1 = require("../game/platform/SdkPlatform");
var DataObject_1 = require("../game/tools/DataObject");
var HttpPost_1 = require("../game/tools/HttpPost");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ComBuyPanel = function () {
    var _classDecorators = [ccclass('ComBuyPanel')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _adBtn_decorators;
    var _adBtn_initializers = [];
    var _buyBtn_decorators;
    var _buyBtn_initializers = [];
    var ComBuyPanel = _classThis = /** @class */ (function (_super) {
        __extends(ComBuyPanel_1, _super);
        function ComBuyPanel_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.toolType = (__runInitializers(_this, _instanceExtraInitializers), null);
            _this.consumeNum = 0;
            _this.limitAdTimes = 0;
            _this.adBtn = __runInitializers(_this, _adBtn_initializers, null);
            _this.buyBtn = __runInitializers(_this, _buyBtn_initializers, null);
            return _this;
        }
        ComBuyPanel_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ComBuyPanel);
        };
        ComBuyPanel_1.prototype.onAdded = function (data) {
            this.toolType = data[0];
            this.serverData = data[1];
            var strs = [];
            if (this.toolType == 26)
                strs = StringUtil_1.StringUtil.stringToArray5(new GlobalData_1.GlobalData(43).value);
            else if (this.toolType == 27)
                strs = StringUtil_1.StringUtil.stringToArray5(new GlobalData_1.GlobalData(44).value);
            this.consumeNum = Number(strs[1]);
            this.limitAdTimes = Number(strs[0]);
            this.uirefresh();
        };
        ComBuyPanel_1.prototype.uirefresh = function () {
            this.adBtn.active = false;
            this.buyBtn.active = false;
            if (this.serverData.ad_times >= this.limitAdTimes) {
                ViewUtil_1.ViewUtil.setLabelStringByName("bg/des", this.node, Oops_1.oops.language.getLangByID("TileGame.DiamondDes", this.consumeNum));
                //刷新价格
                ViewUtil_1.ViewUtil.setLabelStringByName("layout/needNum", this.buyBtn, "x" + this.consumeNum);
                this.buyBtn.active = true;
            }
            else {
                ViewUtil_1.ViewUtil.setLabelStringByName("bg/des", this.node, Oops_1.oops.language.getLangByID("TileGame.ADRewardDes"));
                this.adBtn.active = true;
                ViewUtil_1.ViewUtil.setLabelStringByName("getTimes", this.adBtn, this.serverData.ad_times + "/" + this.limitAdTimes);
            }
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("bg/show/toolType", this.node, GameResPath_1.GameResPath.getDropIconsPath(this.toolType), BundleConfig_1.default.instance.guiBundle.name);
            var num = 0;
            if (this.toolType == 26)
                num = ManorLevelData_1.ManorLevelData.getAllData().find(function (x) { return x.id == SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel; }).getMoney;
            else if (this.toolType == 27)
                num = ManorLevelData_1.ManorLevelData.getAllData().find(function (x) { return x.id == SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel; }).getWater;
            ViewUtil_1.ViewUtil.setLabelStringByName("bg/show/numLabel", this.node, "x" + num);
        };
        ComBuyPanel_1.prototype.btn_ad = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var type = DataObject_1.AdRewardType.ManorCoin;
            if (this.toolType == 27)
                type = DataObject_1.AdRewardType.ManorWater;
            SdkPlatform_1.SdkPlatform.showAds(type, function () {
                HttpPost_1.HttpPost.instance.getCoinOrPower(_this.toolType, function (data) {
                    if (data.manorCoin)
                        SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin = data.manorCoin;
                    if (data.manorPower)
                        SingletonModuleComp_1.smc.account.AccountModel.manorPower = data.manorPower;
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateManorPower);
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ComBuyPanel);
                });
            });
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ComBuyPanel);
        };
        ComBuyPanel_1.prototype.btn_pay = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getCoinOrPower(this.toolType, function (data) {
                SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                if (data.manorCoin)
                    SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin = data.manorCoin;
                if (data.manorPower)
                    SingletonModuleComp_1.smc.account.AccountModel.manorPower = data.manorPower;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateManorPower);
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ComBuyPanel);
            });
        };
        return ComBuyPanel_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ComBuyPanel");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _adBtn_decorators = [property(cc_1.Node)];
        _buyBtn_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _adBtn_decorators, { kind: "field", name: "adBtn", static: false, private: false, access: { has: function (obj) { return "adBtn" in obj; }, get: function (obj) { return obj.adBtn; }, set: function (obj, value) { obj.adBtn = value; } }, metadata: _metadata }, _adBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _buyBtn_decorators, { kind: "field", name: "buyBtn", static: false, private: false, access: { has: function (obj) { return "buyBtn" in obj; }, get: function (obj) { return obj.buyBtn; }, set: function (obj, value) { obj.buyBtn = value; } }, metadata: _metadata }, _buyBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ComBuyPanel = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ComBuyPanel = _classThis;
}();
exports.ComBuyPanel = ComBuyPanel;
