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
exports.StoreRefresh = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var StoreRefresh = function () {
    var _classDecorators = [ccclass('StoreRefresh')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _bg_decorators;
    var _bg_initializers = [];
    var StoreRefresh = _classThis = /** @class */ (function (_super) {
        __extends(StoreRefresh_1, _super);
        function StoreRefresh_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.bg = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _bg_initializers, void 0));
            _this.costType = DataObject_1.DropType.Jewel;
            _this.costAmount = 0;
            return _this;
        }
        StoreRefresh_1.prototype.onAdded = function (data) {
            this.storeRefreshData = data;
            var costData = StringUtil_1.StringUtil.stringToArray5(this.storeRefreshData.cost);
            this.costType = parseInt(costData[0]);
            this.costAmount = parseInt(costData[2]);
            //花费
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("btn_cost/icon", this.bg, GameResPath_1.GameResPath.getDropIconsPath(this.costType), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("btn_cost/amount", this.bg, costData[2]);
            //广告是否可以用
            ViewUtil_1.ViewUtil.setButtonEnabledByName("btn_ad", this.bg, this.storeRefreshData.adLeftTimes > 0);
            SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.StoreRefresh);
        };
        StoreRefresh_1.prototype.btn_cost = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.jewel < this.costAmount) {
                //钻石不够
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.notEnoughJewels"));
                return;
            }
            //钻石刷新
            HttpPost_1.HttpPost.instance.refreshShopList(this.storeRefreshData.shopType + 1, 2, function (data) {
                if (_this.costType == DataObject_1.DropType.Jewel) {
                    //扣钻石
                    SingletonModuleComp_1.smc.account.AccountModel.vm.jewel -= _this.costAmount;
                }
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshStoreList, (data));
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreRefresh);
            });
        };
        StoreRefresh_1.prototype.btn_ad = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            //看完广告
            SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.StoreRefresh, function () {
                HttpPost_1.HttpPost.instance.refreshShopList(_this.storeRefreshData.shopType + 1, 1, function (data) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshStoreList, (data));
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreRefresh);
                });
            });
        };
        StoreRefresh_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreRefresh);
        };
        return StoreRefresh_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StoreRefresh");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _bg_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _bg_decorators, { kind: "field", name: "bg", static: false, private: false, access: { has: function (obj) { return "bg" in obj; }, get: function (obj) { return obj.bg; }, set: function (obj, value) { obj.bg = value; } }, metadata: _metadata }, _bg_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StoreRefresh = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StoreRefresh = _classThis;
}();
exports.StoreRefresh = StoreRefresh;
