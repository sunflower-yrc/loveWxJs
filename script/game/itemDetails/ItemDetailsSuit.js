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
exports.ItemDetailsSuit = void 0;
var cc_1 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var CommonItem_1 = require("../chapter/CommonItem");
var DressData_1 = require("../common/tableData/DressData");
var FurnitureData_1 = require("../common/tableData/FurnitureData");
var DataObject_1 = require("../tools/DataObject");
var ItemDetails_1 = require("./ItemDetails");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var SuitData_1 = require("../common/tableData/SuitData");
var cc_2 = require("cc");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ItemDetailsSuit = function () {
    var _classDecorators = [ccclass('ItemDetailsSuit')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = ItemDetails_1.ItemDetails;
    var _instanceExtraInitializers = [];
    var _layoutName_decorators;
    var _layoutName_initializers = [];
    var _layoutScore_decorators;
    var _layoutScore_initializers = [];
    var ItemDetailsSuit = _classThis = /** @class */ (function (_super) {
        __extends(ItemDetailsSuit_1, _super);
        function ItemDetailsSuit_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.layoutName = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _layoutName_initializers, void 0));
            _this.layoutScore = __runInitializers(_this, _layoutScore_initializers, void 0);
            return _this;
        }
        ItemDetailsSuit_1.prototype.showInfo = function () {
            var _a;
            _super.prototype.showInfo.call(this);
            var suitId = 0;
            if (this.itemDetailsData.dropData.type == DataObject_1.DropType.Furniture) {
                var furniture = new FurnitureData_1.FurnitureData(this.itemDetailsData.dropData.dropId);
                suitId = furniture.furnitureSuit;
            }
            else if (this.itemDetailsData.dropData.type == DataObject_1.DropType.Dress) {
                var dress = new DressData_1.DressData(this.itemDetailsData.dropData.dropId);
                suitId = dress.dressSuit;
            }
            var suitData = new SuitData_1.SuitData(suitId);
            var item = ViewUtil_1.ViewUtil.findNode("commonItem", this.node);
            (_a = item.getComponent(CommonItem_1.CommonItem)) === null || _a === void 0 ? void 0 : _a.initData(this.itemDetailsData.dropData, false);
            if (this.itemDetailsData.dropData.type == DataObject_1.DropType.Furniture) {
                var furniture = new FurnitureData_1.FurnitureData(this.itemDetailsData.dropData.dropId);
                ViewUtil_1.ViewUtil.setLabelStringByName("score", this.node, furniture.furnitureMark.toString());
                ViewUtil_1.ViewUtil.setLabelStringByName("desc", this.node, furniture.getDesc());
            }
            else if (this.itemDetailsData.dropData.type == DataObject_1.DropType.Dress) {
                var dress = new DressData_1.DressData(this.itemDetailsData.dropData.dropId);
                ViewUtil_1.ViewUtil.setLabelStringByName("score", this.node, dress.dressMark.toString());
                ViewUtil_1.ViewUtil.setLabelStringByName("desc", this.node, dress.getDesc());
            }
            //套装信息
            var getSuitOwned = suitData.getSuitOwned();
            //名字
            ViewUtil_1.ViewUtil.setLabelStringByName("suit/suit_name", this.node, suitData.getName());
            var names = suitData.getSuitItemNames();
            var listName = this.layoutName.children;
            for (var i = 0; i < listName.length; i++) {
                var element = listName[i];
                var c = new cc_2.Color(250, 147, 149);
                if (getSuitOwned[i]) {
                    ViewUtil_1.ViewUtil.setLabelString(element, names[i], { color: c });
                }
                else {
                    ViewUtil_1.ViewUtil.setLabelString(element, names[i]);
                }
            }
            //数量
            ViewUtil_1.ViewUtil.setLabelStringByName("suit/amount", this.node, "(".concat(suitData.ownedAmount, "/").concat(names.length, ")"));
            //分数
            var scores = suitData.getSuitScores();
            var listScore = this.layoutScore.children;
            for (var i = 0; i < listScore.length; i++) {
                var element = listScore[i];
                var c = new cc_2.Color(152, 195, 126);
                if (suitData.ownedAmount >= parseInt(scores[i][0])) {
                    ViewUtil_1.ViewUtil.setLabelString(element, Oops_1.oops.language.getLangByID("furniture.suitScoreDesc", scores[i][0], scores[i][1]), { color: c });
                }
                else {
                    ViewUtil_1.ViewUtil.setLabelString(element, Oops_1.oops.language.getLangByID("furniture.suitScoreDesc", scores[i][0], scores[i][1]));
                }
            }
        };
        return ItemDetailsSuit_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ItemDetailsSuit");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _layoutName_decorators = [property(cc_1.Node)];
        _layoutScore_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _layoutName_decorators, { kind: "field", name: "layoutName", static: false, private: false, access: { has: function (obj) { return "layoutName" in obj; }, get: function (obj) { return obj.layoutName; }, set: function (obj, value) { obj.layoutName = value; } }, metadata: _metadata }, _layoutName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _layoutScore_decorators, { kind: "field", name: "layoutScore", static: false, private: false, access: { has: function (obj) { return "layoutScore" in obj; }, get: function (obj) { return obj.layoutScore; }, set: function (obj, value) { obj.layoutScore = value; } }, metadata: _metadata }, _layoutScore_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ItemDetailsSuit = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ItemDetailsSuit = _classThis;
}();
exports.ItemDetailsSuit = ItemDetailsSuit;
