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
exports.WishFurnitureItem = void 0;
var cc_1 = require("cc");
var DataObject_1 = require("../tools/DataObject");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameResPath_1 = require("../common/config/GameResPath");
var DataMgr_1 = require("../mgr/DataMgr");
var ButtonPlus_1 = require("../tools/ButtonPlus");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var DropMgr_1 = require("../mgr/DropMgr");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameEvent_1 = require("../common/config/GameEvent");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var WishFurnitureItem = function () {
    var _classDecorators = [ccclass('WishFurnitureItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var WishFurnitureItem = _classThis = /** @class */ (function (_super) {
        __extends(WishFurnitureItem_1, _super);
        function WishFurnitureItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.decorateOwnedData = null;
            _this.isNew = false;
            return _this;
        }
        WishFurnitureItem_1.prototype.initData = function (data) {
            this.decorateOwnedData = data;
            if (this.decorateOwnedData) {
                //有值
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath(this.decorateOwnedData.furnitureData.grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.node, GameResPath_1.GameResPath.getFurnitureListIconsPath(this.decorateOwnedData.furnitureData.id.toString()), BundleConfig_1.default.instance.guiBundle.name);
                this.isNew = DataMgr_1.DataMgr.getDecorateNewState(DataObject_1.DropType.Furniture, this.decorateOwnedData.furnitureData.id) == 1;
                // this.refreshNewState();
                this.refreshAmont();
            }
            else {
                //空的
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath("0"), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.clearSpriteFrameByName("icon", this.node);
                ViewUtil_1.ViewUtil.setNodeActiveByName("new", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("amount", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lineup", this.node, false);
            }
            //绑定明细
            var btnCom = this.getComponent(ButtonPlus_1.default);
            if (btnCom) {
                btnCom.addLongClick(this.onLongPressThis.bind(this), this.onLongPressEndThis.bind(this), this);
            }
        };
        /**
         * 刷新家具摆放和剩余数量
         */
        WishFurnitureItem_1.prototype.refreshAmont = function () {
            if (this.decorateOwnedData) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("amount", this.node, true);
                ViewUtil_1.ViewUtil.setLabelStringByName("amount", this.node, this.decorateOwnedData.leftAmount.toString());
                var gray = this.decorateOwnedData.leftAmount <= 0;
                ViewUtil_1.ViewUtil.setSpriteGray(this.node, gray);
                ViewUtil_1.ViewUtil.setSpriteGrayByName("icon", this.node, gray);
                var isLineup = this.decorateOwnedData.lineupCount > 0;
                ViewUtil_1.ViewUtil.setNodeActiveByName("lineup", this.node, isLineup);
                if (isLineup) {
                    ViewUtil_1.ViewUtil.setLabelStringByName("lineup/count", this.node, this.decorateOwnedData.lineupCount.toString());
                }
            }
        };
        WishFurnitureItem_1.prototype.onLongPressThis = function (event) {
            if (this.decorateOwnedData) {
                var touchPos = event.getUILocation();
                var dropData = void 0;
                if (this.decorateOwnedData.furnitureData) {
                    dropData = DropMgr_1.DropMgr.getDropInfo(DataObject_1.DropType.Furniture, this.decorateOwnedData.furnitureData.id, 0);
                }
                else {
                    dropData = DropMgr_1.DropMgr.getDropInfo(DataObject_1.DropType.Dress, this.decorateOwnedData.dressData.id, 0);
                }
                var itemDetailsData = new DataObject_1.ItemDetailsData();
                itemDetailsData.dropData = dropData;
                itemDetailsData.touchPos = touchPos;
                DataMgr_1.DataMgr.OpenItemDetails(itemDetailsData);
            }
        };
        WishFurnitureItem_1.prototype.onLongPressEndThis = function (event) {
            DataMgr_1.DataMgr.CloseItemDetails();
        };
        WishFurnitureItem_1.prototype.btn_click = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.decorateOwnedData) {
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.WishFurniture, this.decorateOwnedData);
            }
        };
        return WishFurnitureItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "WishFurnitureItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WishFurnitureItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WishFurnitureItem = _classThis;
}();
exports.WishFurnitureItem = WishFurnitureItem;
