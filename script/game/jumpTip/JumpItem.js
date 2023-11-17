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
exports.JumpItem = void 0;
var cc_1 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var LangData_1 = require("../common/tableData/LangData");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var DataMgr_1 = require("../mgr/DataMgr");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var JumpItem = function () {
    var _classDecorators = [ccclass('JumpItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var JumpItem = _classThis = /** @class */ (function (_super) {
        __extends(JumpItem_1, _super);
        function JumpItem_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JumpItem_1.prototype.init = function (data, closeView) {
            this.data = data;
            this.closeView = closeView;
            ViewUtil_1.ViewUtil.setNodeActiveByName("show", this.node, Boolean(data.isRecommend));
            ViewUtil_1.ViewUtil.setLabelStringByName("name", this.node, new LangData_1.LangData(data.name).getDesc());
            ViewUtil_1.ViewUtil.setLabelStringByName("dec", this.node, new LangData_1.LangData(data.desc).getDesc());
            ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getJumpBgPath(data.sourceBg), BundleConfig_1.default.instance.guiBundle.name);
        };
        JumpItem_1.prototype.gotoBtn = function () {
            var _this = this;
            if (this.closeView) {
                if (this.closeView == GameUIConfig_1.UIID.TileGame) {
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.JumpTip);
                    var jumpId_1 = this.data.jumpId;
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ConfirmWindow, { callback: function () {
                            DataMgr_1.DataMgr.gotoFunction([_this.closeView], jumpId_1);
                        }, text: Oops_1.oops.language.getLangByID("jumpTip.endGame") });
                    return;
                }
                DataMgr_1.DataMgr.gotoFunction([GameUIConfig_1.UIID.JumpTip, this.closeView], this.data.jumpId);
            }
            else {
                DataMgr_1.DataMgr.gotoFunction([GameUIConfig_1.UIID.JumpTip], this.data.jumpId);
            }
        };
        return JumpItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "JumpItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JumpItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JumpItem = _classThis;
}();
exports.JumpItem = JumpItem;
