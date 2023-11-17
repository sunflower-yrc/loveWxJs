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
exports.Advert = void 0;
var cc_1 = require("cc");
var DataObject_1 = require("../tools/DataObject");
var GameMgr_1 = require("../common/mgr/GameMgr");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Advert = function () {
    var _classDecorators = [ccclass('Advert')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _not_decorators;
    var _not_initializers = [];
    var _speed_decorators;
    var _speed_initializers = [];
    var Advert = _classThis = /** @class */ (function (_super) {
        __extends(Advert_1, _super);
        function Advert_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.curAdsType = (__runInitializers(_this, _instanceExtraInitializers), DataObject_1.AdsTipType.nothing);
            _this.not = __runInitializers(_this, _not_initializers, null);
            _this.speed = __runInitializers(_this, _speed_initializers, null);
            return _this;
        }
        Advert_1.prototype.onAdded = function (data) {
            this.data = data;
        };
        Advert_1.prototype.start = function () {
            ViewUtil_1.ViewUtil.setLabelStringByName("lay/num", this.node, "x" + SingletonModuleComp_1.smc.account.AccountModel.vm.noAdsTicket);
        };
        Advert_1.prototype.chose = function () {
            this.speed.active = !this.speed.active;
        };
        //不加速看广告
        Advert_1.prototype.notSpeedAdvert = function () {
            if (this.speed.active) {
                GameMgr_1.GameMgr.Instance.adsTipType = DataObject_1.AdsTipType.look;
            }
            SdkPlatform_1.SdkPlatform.showAdsFun(this.data.adType, DataObject_1.AdsTipType.look, this.data.complete, this.data.failed);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Advert);
        };
        //加速不看广告
        Advert_1.prototype.speedAdvert = function () {
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.noAdsTicket > 0) {
                if (this.speed.active) {
                    GameMgr_1.GameMgr.Instance.adsTipType = DataObject_1.AdsTipType.jump;
                }
                SdkPlatform_1.SdkPlatform.adsSpeed(this.data.adType, this.data.complete);
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Advert);
            }
            else {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("advert.tipNot"));
            }
        };
        Advert_1.prototype.closeView = function () {
            if (this.data.failed) {
                this.data.failed();
            }
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Advert);
        };
        return Advert_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Advert");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _not_decorators = [property(cc_1.Node)];
        _speed_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _not_decorators, { kind: "field", name: "not", static: false, private: false, access: { has: function (obj) { return "not" in obj; }, get: function (obj) { return obj.not; }, set: function (obj, value) { obj.not = value; } }, metadata: _metadata }, _not_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _speed_decorators, { kind: "field", name: "speed", static: false, private: false, access: { has: function (obj) { return "speed" in obj; }, get: function (obj) { return obj.speed; }, set: function (obj, value) { obj.speed = value; } }, metadata: _metadata }, _speed_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Advert = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Advert = _classThis;
}();
exports.Advert = Advert;
