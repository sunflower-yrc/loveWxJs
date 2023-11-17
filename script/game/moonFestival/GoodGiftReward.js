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
exports.GoodGiftReward = void 0;
var cc_1 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var cc_2 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameEvent_1 = require("../common/config/GameEvent");
var DataObject_1 = require("../tools/DataObject");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var GoodGiftReward = function () {
    var _classDecorators = [ccclass('GoodGiftReward')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _haveNode_decorators;
    var _haveNode_initializers = [];
    var GoodGiftReward = _classThis = /** @class */ (function (_super) {
        __extends(GoodGiftReward_1, _super);
        function GoodGiftReward_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.haveNode = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _haveNode_initializers, null));
            _this.index = null;
            return _this;
        }
        GoodGiftReward_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateGoodGiftPos, this.setShow, this);
        };
        GoodGiftReward_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateGoodGiftPos, this.setShow, this);
        };
        GoodGiftReward_1.prototype.init = function (data, index, goodData) {
            this.index = index;
            this.goodData = goodData;
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.haveNode, data.iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("num", this.haveNode, "x" + data.dropAmount);
            if (index == goodData.selectId) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("have", this.haveNode, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("addBtn", this.haveNode, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("chose", this.haveNode, true);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("have", this.haveNode, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("addBtn", this.haveNode, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("chose", this.haveNode, false);
            }
            this.node.getComponent(cc_2.Button).interactable = Boolean(goodData.status == 1 || goodData.status == 4);
        };
        GoodGiftReward_1.prototype.getChose = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateGoodGiftPos, { index: this.index, day: this.goodData.day });
        };
        GoodGiftReward_1.prototype.setShow = function (ev, data) {
            if (data.day != this.goodData.day) {
                return;
            }
            if (data.index == this.index) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("have", this.haveNode, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("addBtn", this.haveNode, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("chose", this.haveNode, true);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("have", this.haveNode, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("addBtn", this.haveNode, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("chose", this.haveNode, false);
            }
        };
        return GoodGiftReward_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GoodGiftReward");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _haveNode_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _haveNode_decorators, { kind: "field", name: "haveNode", static: false, private: false, access: { has: function (obj) { return "haveNode" in obj; }, get: function (obj) { return obj.haveNode; }, set: function (obj, value) { obj.haveNode = value; } }, metadata: _metadata }, _haveNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GoodGiftReward = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GoodGiftReward = _classThis;
}();
exports.GoodGiftReward = GoodGiftReward;
