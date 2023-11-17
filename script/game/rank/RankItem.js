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
exports.RankItem = void 0;
var cc_1 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var DataObject_1 = require("../tools/DataObject");
var houseRateData_1 = require("../common/tableData/houseRateData");
var LangData_1 = require("../common/tableData/LangData");
var GameResPath_1 = require("../common/config/GameResPath");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var cc_2 = require("cc");
var cc_3 = require("cc");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var RankItem = function () {
    var _classDecorators = [ccclass('RankItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var RankItem = _classThis = /** @class */ (function (_super) {
        __extends(RankItem_1, _super);
        function RankItem_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RankItem_1.prototype.init = function (data, rankType) {
            this.data = data;
            ViewUtil_1.ViewUtil.setLabelStringByName("ranking", this.node, data.ranking);
            ViewUtil_1.ViewUtil.setLabelStringByName("name", this.node, data.nike_name);
            ViewUtil_1.ViewUtil.setLabelStringByName("count", this.node, data.value);
            if (data.avatar_url != "") {
                ViewUtil_1.ViewUtil.setHeadIcon(data.avatar_url, "mask/head", this.node);
            }
            else {
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("mask/head", this.node, GameResPath_1.GameResPath.getHeadImgPath(), BundleConfig_1.default.instance.guiBundle.name);
            }
            if (rankType == DataObject_1.RankType.houseGradeRank) {
                var houseData = new houseRateData_1.houseRateData(data.value);
                ViewUtil_1.ViewUtil.setLabelStringByName("count", this.node, new LangData_1.LangData(houseData.rateName).getDesc());
            }
            else {
                ViewUtil_1.ViewUtil.setLabelStringByName("count", this.node, data.value);
            }
            this.setRuaids(this.node.getChildByName("mask"));
        };
        //设置圆角
        RankItem_1.prototype.setRuaids = function (node) {
            var maskNode = node;
            var mask = node.getComponent(cc_2.Mask);
            mask.type = cc_2.Mask.Type.GRAPHICS_RECT;
            var uiTransform = maskNode.getComponent(cc_3.UITransform);
            var width = uiTransform.width;
            var height = uiTransform.height;
            var anchorX = uiTransform.anchorX;
            var anchorY = uiTransform.anchorY;
            var graphics = mask.subComp;
            graphics.clear();
            var x = -width * anchorX;
            var y = -height * anchorY;
            graphics.roundRect(x, y, width, height, 20);
            graphics.fill();
        };
        return RankItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "RankItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RankItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RankItem = _classThis;
}();
exports.RankItem = RankItem;
