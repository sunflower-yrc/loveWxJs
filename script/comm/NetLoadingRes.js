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
exports.NetLoadingRes = void 0;
var cc_1 = require("cc");
var ViewUtil_1 = require("../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var Oops_1 = require("../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../game/common/config/GameUIConfig");
var GameEvent_1 = require("../game/common/config/GameEvent");
var ccclass = cc_1._decorator.ccclass;
var NetLoadingRes = function () {
    var _classDecorators = [ccclass('NetLoadingRes')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var NetLoadingRes = _classThis = /** @class */ (function (_super) {
        __extends(NetLoadingRes_1, _super);
        function NetLoadingRes_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.key = "";
            _this.MAX_TIMEOUT = 15; //15s 自动移除，防止超过时间
            return _this;
        }
        NetLoadingRes_1.prototype.onAdded = function (param) {
            if (param) {
                ViewUtil_1.ViewUtil.setLabelStringByName("tips", this.node, param.message);
                this.key = param.key;
                if (param.timeOut)
                    this.MAX_TIMEOUT = param.timeOut;
            }
            Oops_1.oops.timer.scheduleOnce(this.btn_close, this.MAX_TIMEOUT);
        };
        NetLoadingRes_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.SpriteFrameComplete, this.handlerClose, this);
        };
        NetLoadingRes_1.prototype.handlerClose = function (event, args) {
            if (args.key == this.key) {
                this.btn_close();
            }
        };
        NetLoadingRes_1.prototype.btn_close = function () {
            Oops_1.oops.timer.unschedule(this.btn_close);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.NetLoadingRes);
        };
        return NetLoadingRes_1;
    }(_classSuper));
    __setFunctionName(_classThis, "NetLoadingRes");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NetLoadingRes = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NetLoadingRes = _classThis;
}();
exports.NetLoadingRes = NetLoadingRes;
