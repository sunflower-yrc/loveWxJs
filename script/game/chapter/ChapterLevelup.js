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
exports.ChapterLevelup = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataObject_1 = require("../tools/DataObject");
var GameMgr_1 = require("../common/mgr/GameMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ChapterLevelup = function () {
    var _classDecorators = [ccclass('ChapterLevelup')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var ChapterLevelup = _classThis = /** @class */ (function (_super) {
        __extends(ChapterLevelup_1, _super);
        function ChapterLevelup_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ChapterLevelup_1.prototype.btn_go = function (event, data) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var type = parseInt(data);
            if (type == 0) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Task, { "type": 2 }); //1 每日任务  2 主线任务
            }
            else if (type == 1 || type == 2) {
                //开箱
                GameMgr_1.GameMgr.Instance.mapManager.moveToCar();
            }
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ChapterLevelup);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Chapter);
        };
        ChapterLevelup_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ChapterLevelup);
        };
        ChapterLevelup_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.ChapterLevelup);
        };
        return ChapterLevelup_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ChapterLevelup");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ChapterLevelup = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ChapterLevelup = _classThis;
}();
exports.ChapterLevelup = ChapterLevelup;