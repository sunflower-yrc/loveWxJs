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
exports.ResNetDetectMgr = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var EventReport_1 = require("../../Global/EventReport");
var HttpPost_1 = require("../tools/HttpPost");
var ccclass = cc_1._decorator.ccclass;
var ResNetDetectMgr = function () {
    var _classDecorators = [ccclass('ResNetDetectMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var ResNetDetectMgr = _classThis = /** @class */ (function (_super) {
        __extends(ResNetDetectMgr_1, _super);
        function ResNetDetectMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.inShowLoading = false;
            _this.inSchedule = false;
            _this.loadCache = new Map();
            _this.lastNetTipShow = 0;
            _this.lastNetLoadingShow = 0;
            _this.NET_SHOW_GAP = 10000;
            _this.DELAY_TIME = 3;
            _this.checkShowLoadingRes = function () {
                if (_this.loadCache.size > 0) {
                    var values = _this.loadCache.entries();
                    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                        var _a = values_1[_i], k = _a[0], v = _a[1];
                        if ((Date.now() - v) >= _this.DELAY_TIME * 1000) {
                            _this.showLoadingRes(k);
                            break;
                        }
                    }
                }
            };
            _this.showLoadingRes = function (key) {
                if (!_this.inShowLoading) {
                    _this.inShowLoading = true;
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.NetLoadingRes, { key: key, message: Oops_1.oops.language.getLangByID("loadingTips.netLoadError") }, {
                        onRemoved: function () {
                            _this.inShowLoading = false;
                        }
                    });
                }
            };
            _this.addSchelude = function (key) {
                if (!_this.inSchedule && !_this.inShowLoading) {
                    var curTime = Date.now();
                    if (_this.lastNetLoadingShow == 0 || (curTime - _this.lastNetLoadingShow) > _this.NET_SHOW_GAP) { //10s 内防止重复
                        _this.lastNetLoadingShow = curTime;
                        _this.scheduleOnce(_this.checkShowLoadingRes, _this.DELAY_TIME);
                        _this.inSchedule = true;
                    }
                }
                _this.loadCache.set(key, Date.now());
            };
            _this.delSchelude = function () {
                _this.inSchedule = false;
                _this.unschedule(_this.showLoadingRes);
            };
            return _this;
        }
        ResNetDetectMgr_1.prototype.onLoadComplete = function (err, key, url) {
            if (err != null && err.message == '404') {
                HttpPost_1.HttpPost.instance.eventReport({ event: EventReport_1.EVENT_REPORT.spriteFrameError, extra: { err: { message: err.message, stack: err.stack }, path: url } });
                var curTime = Date.now();
                if (this.lastNetTipShow == 0 || (curTime - this.lastNetTipShow) > this.NET_SHOW_GAP) { //10s 内防止重复
                    this.lastNetTipShow = curTime;
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("loadingTips.netLoadError"));
                }
            }
            this.loadCache.delete(key);
        };
        return ResNetDetectMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ResNetDetectMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ResNetDetectMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ResNetDetectMgr = _classThis;
}();
exports.ResNetDetectMgr = ResNetDetectMgr;
