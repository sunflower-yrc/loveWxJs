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
exports.StoreBoxConfirm = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataObject_1 = require("../tools/DataObject");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var StoreBoxConfirm = function () {
    var _classDecorators = [ccclass('StoreBoxConfirm')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var StoreBoxConfirm = _classThis = /** @class */ (function (_super) {
        __extends(StoreBoxConfirm_1, _super);
        function StoreBoxConfirm_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.boxId = -1;
            _this.callback = null;
            _this.currency = [];
            return _this;
        }
        StoreBoxConfirm_1.prototype.onAdded = function (param) {
            this.itemData = param.data;
            this.boxId = param.boxId;
            this.callback = param.callback;
            //名称
            ViewUtil_1.ViewUtil.setLabelStringByName("bg/name", this.node, Oops_1.oops.language.getLangByID("store.box".concat(this.boxId)));
            //图标
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("bg/icon", this.node, GameResPath_1.GameResPath.getStoreSuitBoxPath(this.boxId.toString()), BundleConfig_1.default.instance.guiBundle.name);
            //价格
            this.currency = StringUtil_1.StringUtil.stringToArray5(this.itemData.cost);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("cost_bg", this.node, GameResPath_1.GameResPath.getDropIconsPath(parseInt(this.currency[0])), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("cost_bg/amount", this.node, "x" + this.currency[2]);
        };
        StoreBoxConfirm_1.prototype.btn_buy = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (parseInt(this.currency[0]) == DataObject_1.DropType.Coins) {
                if (parseInt(this.currency[2]) > SingletonModuleComp_1.smc.account.AccountModel.vm.coin) {
                    //金币不足
                    // oops.gui.toast(oops.language.getLangByID("common.notEnoughCoins"));
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.JumpTip, { closeView: GameUIConfig_1.UIID.Store, type: DataObject_1.JumpTipType.cion });
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreBoxConfirm);
                    return;
                }
            }
            else if (parseInt(this.currency[0]) == DataObject_1.DropType.Jewel) {
                if (parseInt(this.currency[2]) > SingletonModuleComp_1.smc.account.AccountModel.vm.jewel) {
                    //钻石不足
                    // oops.gui.toast(oops.language.getLangByID("common.notEnoughJewels"));
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.JumpTip, { closeView: GameUIConfig_1.UIID.Store, type: DataObject_1.JumpTipType.diamond });
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreBoxConfirm);
                    return;
                }
            }
            if (this.callback) {
                this.callback();
            }
        };
        StoreBoxConfirm_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreBoxConfirm);
        };
        return StoreBoxConfirm_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StoreBoxConfirm");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StoreBoxConfirm = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StoreBoxConfirm = _classThis;
}();
exports.StoreBoxConfirm = StoreBoxConfirm;
