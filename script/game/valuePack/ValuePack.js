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
exports.ValuePack = void 0;
var cc_1 = require("cc");
var Role_1 = require("../dress/Role");
var GlobalData_1 = require("../common/tableData/GlobalData");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var DataObject_1 = require("../tools/DataObject");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var HttpPost_1 = require("../tools/HttpPost");
var DropMgr_1 = require("../mgr/DropMgr");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../common/mgr/GameMgr");
var DataMgr_1 = require("../mgr/DataMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ValuePack = function () {
    var _classDecorators = [ccclass('ValuePack')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var ValuePack = _classThis = /** @class */ (function (_super) {
        __extends(ValuePack_1, _super);
        function ValuePack_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.role = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _role_initializers, null));
            return _this;
        }
        ValuePack_1.prototype.start = function () {
            this.initUI();
            SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.ValuePack);
        };
        ValuePack_1.prototype.onAdded = function (data) {
            this.data = data;
        };
        ValuePack_1.prototype.initUI = function () {
            var suit = new GlobalData_1.GlobalData(22).value;
            this.role.getComponent(Role_1.Role).showSuitSkin(suit);
        };
        ValuePack_1.prototype.getReward = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.ValuePack, function (adsTipType) {
                HttpPost_1.HttpPost.instance.videoReward(function (data) {
                    SingletonModuleComp_1.smc.account.AccountModel.videoReward = 1;
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateValuePack);
                    //显示掉落
                    var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                    var dropInfo = new DataObject_1.DropInfo();
                    dropInfo.dropData = dropDatas;
                    dropInfo.UIID.push(GameUIConfig_1.UIID.LimitGift);
                    if (_this.data && _this.data.callFun) {
                        dropInfo.UIID.push(GameUIConfig_1.UIID.LevelGift);
                    }
                    DataMgr_1.DataMgr.updateUserData(data.userGrade, null, null);
                    _this.closeView();
                    dropInfo.dropFrom = DataObject_1.DropFrom.ValuePack;
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                    Oops_1.oops.gui.release(GameUIConfig_1.UIID.ValuePack);
                });
            });
        };
        ValuePack_1.prototype.closeView = function () {
            if (!Oops_1.oops.storage.get("valuePack")) {
                Oops_1.oops.storage.set("valuePack", 1);
            }
            if (this.data.callFun) {
                this.data.callFun.call(this.data.target);
            }
            else {
                if (GameMgr_1.GameMgr.Instance.tips[0]) {
                    Oops_1.oops.gui.open(GameMgr_1.GameMgr.Instance.tips[0]);
                    GameMgr_1.GameMgr.Instance.tips.splice(0, 1);
                }
            }
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ValuePack);
        };
        ValuePack_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.ValuePack);
        };
        return ValuePack_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ValuePack");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _role_decorators = [property(Role_1.Role)];
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ValuePack = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ValuePack = _classThis;
}();
exports.ValuePack = ValuePack;
