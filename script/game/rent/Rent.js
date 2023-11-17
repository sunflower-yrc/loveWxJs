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
exports.Rent = void 0;
var cc_1 = require("cc");
var RentItem_1 = require("./RentItem");
var List_1 = require("../tools/List");
var DataObject_1 = require("../tools/DataObject");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var HttpPost_1 = require("../tools/HttpPost");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var cc_2 = require("cc");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Rent = function () {
    var _classDecorators = [ccclass('Rent')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _list_decorators;
    var _list_initializers = [];
    var _refsh_decorators;
    var _refsh_initializers = [];
    var _helpTip_decorators;
    var _helpTip_initializers = [];
    var Rent = _classThis = /** @class */ (function (_super) {
        __extends(Rent_1, _super);
        function Rent_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.data = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.list = __runInitializers(_this, _list_initializers, null);
            _this.refsh = __runInitializers(_this, _refsh_initializers, null);
            _this.helpTip = __runInitializers(_this, _helpTip_initializers, null);
            _this.listData = [];
            _this.time = null;
            return _this;
        }
        Rent_1.prototype.onRenderList = function (item, index) {
            var _a;
            (_a = item.getComponent(RentItem_1.RentItem)) === null || _a === void 0 ? void 0 : _a.init(this.listData[index], this.data.refreshAt);
        };
        Rent_1.prototype.onLoad = function () {
        };
        Rent_1.prototype.start = function () {
            this.setRentList();
            this.setRefesh();
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateRentList, this.updateRentData, this);
            // ViewUtil.setLabelStringByName("helpDec", this.helpTip,oops.language.getLangByID("rent.useEnd"));
            SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.Rent);
        };
        Rent_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateRentList, this.updateRentData, this);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Rent);
        };
        Rent_1.prototype.onAdded = function (data) {
            this.data = data;
            this.rentListSort();
            this.setTimer();
        };
        Rent_1.prototype.updateRentData = function (event, data) {
            this.onAdded(data);
            this.setRentList();
            this.setRefesh();
        };
        Rent_1.prototype.setRefesh = function () {
            var reData = this.data.manualRefreshData;
            if (reData.refreshCount >= reData.refreshCountMax) {
                this.refsh.getComponent(cc_2.Button).interactable = false;
                ViewUtil_1.ViewUtil.setLabelStringByName("lab", this.refsh, Oops_1.oops.language.getLangByID("rent.useEnd"));
            }
            else {
                this.refsh.getComponent(cc_2.Button).interactable = true;
                ViewUtil_1.ViewUtil.setLabelStringByName("lab", this.refsh, Oops_1.oops.language.getLangByID("rent.refesh"));
            }
        };
        Rent_1.prototype.rentListSort = function () {
            var data = this.data.list.slice();
            this.listData = data;
        };
        Rent_1.prototype.setRentList = function () {
            this.list.numItems = this.listData.length;
        };
        Rent_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Rent);
            Oops_1.oops.timer.unRegister(this.timeId);
        };
        /**创建计时器 */
        Rent_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            this.time = this.data.refreshAt - curTime;
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        Rent_1.prototype.onSecond = function () {
        };
        Rent_1.prototype.onComplete = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.hireInfo(function (data) {
                _this.onAdded(data);
                _this.setRentList();
                _this.setRefesh();
            });
        };
        //刷新
        Rent_1.prototype.refeshBtn = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.TileGameProp2, function () {
                HttpPost_1.HttpPost.instance.hireRefresh(function (data) {
                    _this.onAdded(data);
                    _this.setRentList();
                    _this.setRefesh();
                });
            });
        };
        //玩法说明
        Rent_1.prototype.showTip = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.helpTip.active) {
                this.helpTip.active = false;
            }
            else {
                this.helpTip.active = true;
            }
        };
        return Rent_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Rent");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _list_decorators = [property(List_1.default)];
        _refsh_decorators = [property(cc_1.Node)];
        _helpTip_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _list_decorators, { kind: "field", name: "list", static: false, private: false, access: { has: function (obj) { return "list" in obj; }, get: function (obj) { return obj.list; }, set: function (obj, value) { obj.list = value; } }, metadata: _metadata }, _list_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _refsh_decorators, { kind: "field", name: "refsh", static: false, private: false, access: { has: function (obj) { return "refsh" in obj; }, get: function (obj) { return obj.refsh; }, set: function (obj, value) { obj.refsh = value; } }, metadata: _metadata }, _refsh_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _helpTip_decorators, { kind: "field", name: "helpTip", static: false, private: false, access: { has: function (obj) { return "helpTip" in obj; }, get: function (obj) { return obj.helpTip; }, set: function (obj, value) { obj.helpTip = value; } }, metadata: _metadata }, _helpTip_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Rent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.clickNum = 0;
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Rent = _classThis;
}();
exports.Rent = Rent;
