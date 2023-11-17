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
exports.UnlockItem = void 0;
var cc_1 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var ButtonPlus_1 = require("../tools/ButtonPlus");
var DataObject_1 = require("../tools/DataObject");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var UnlockItem = function () {
    var _classDecorators = [ccclass('UnlockItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _bgSp_decorators;
    var _bgSp_initializers = [];
    var _iconSp_decorators;
    var _iconSp_initializers = [];
    var _conditionLabel_decorators;
    var _conditionLabel_initializers = [];
    var UnlockItem = _classThis = /** @class */ (function (_super) {
        __extends(UnlockItem_1, _super);
        function UnlockItem_1() {
            // condition: number = null!;
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // gift: string = "";
            // unlockStatus: LockState = LockState.lock!;
            _this.data = (__runInitializers(_this, _instanceExtraInitializers), null);
            _this.bgSp = __runInitializers(_this, _bgSp_initializers, null);
            _this.iconSp = __runInitializers(_this, _iconSp_initializers, null);
            _this.conditionLabel = __runInitializers(_this, _conditionLabel_initializers, null);
            return _this;
        }
        UnlockItem_1.prototype.onLoad = function () {
            //绑定明细
            var btnCom = this.getComponent(ButtonPlus_1.default);
            if (btnCom) {
                btnCom.addLongClick(this.onLongPressThis.bind(this), this.onLongPressEndThis.bind(this), this);
            }
        };
        UnlockItem_1.prototype.init = function (data, islast) {
            if (islast === void 0) { islast = false; }
            this.data = data;
            if (islast)
                ViewUtil_1.ViewUtil.setNodeActiveByName("line", this.node, false);
            this.fresh();
        };
        UnlockItem_1.prototype.fresh = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("got", this.node, SingletonModuleComp_1.smc.account.AccountModel.vm.outFurnitureScore >= this.data.condition);
            this.conditionLabel.string = this.data.condition + "";
            // this.data.gift
            var data = DropMgr_1.DropMgr.getDropData(this.data.gift)[0];
            ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.iconSp.node, data.iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            switch (data.grade) {
                case 1:
                    this.bgSp.color = new cc_1.Color(DataObject_1.ColorList.normal);
                    break;
                case 2:
                    this.bgSp.color = new cc_1.Color(DataObject_1.ColorList.green);
                    break;
                case 3:
                    this.bgSp.color = new cc_1.Color(DataObject_1.ColorList.blue);
                    break;
                case 4:
                    this.bgSp.color = new cc_1.Color(DataObject_1.ColorList.orange);
                    break;
                default:
                    break;
            }
            // this.iconSp.spriteFrame = ViewUtil.get data.iconUrl;
        };
        UnlockItem_1.prototype.onLongPressThis = function (event) {
            var touchPos = event.getUILocation();
            var itemDetailsData = new DataObject_1.ItemDetailsData();
            var data = DropMgr_1.DropMgr.getDropData(this.data.gift)[0];
            itemDetailsData.dropData = data;
            itemDetailsData.touchPos = touchPos;
            itemDetailsData.orientationType = DataObject_1.DetaisOrientationType.Left;
            DataMgr_1.DataMgr.OpenItemDetails(itemDetailsData);
        };
        UnlockItem_1.prototype.onLongPressEndThis = function (event) {
            DataMgr_1.DataMgr.CloseItemDetails();
        };
        return UnlockItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "UnlockItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _bgSp_decorators = [property(cc_1.Sprite)];
        _iconSp_decorators = [property(cc_1.Sprite)];
        _conditionLabel_decorators = [property(cc_1.Label)];
        __esDecorate(null, null, _bgSp_decorators, { kind: "field", name: "bgSp", static: false, private: false, access: { has: function (obj) { return "bgSp" in obj; }, get: function (obj) { return obj.bgSp; }, set: function (obj, value) { obj.bgSp = value; } }, metadata: _metadata }, _bgSp_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _iconSp_decorators, { kind: "field", name: "iconSp", static: false, private: false, access: { has: function (obj) { return "iconSp" in obj; }, get: function (obj) { return obj.iconSp; }, set: function (obj, value) { obj.iconSp = value; } }, metadata: _metadata }, _iconSp_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _conditionLabel_decorators, { kind: "field", name: "conditionLabel", static: false, private: false, access: { has: function (obj) { return "conditionLabel" in obj; }, get: function (obj) { return obj.conditionLabel; }, set: function (obj, value) { obj.conditionLabel = value; } }, metadata: _metadata }, _conditionLabel_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UnlockItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UnlockItem = _classThis;
}();
exports.UnlockItem = UnlockItem;
