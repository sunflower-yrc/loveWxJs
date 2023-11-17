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
exports.ItemDetails = void 0;
var cc_1 = require("cc");
var DataMgr_1 = require("../mgr/DataMgr");
var DataObject_1 = require("../tools/DataObject");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ItemDetails = function () {
    var _classDecorators = [ccclass('ItemDetails')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var ItemDetails = _classThis = /** @class */ (function (_super) {
        __extends(ItemDetails_1, _super);
        function ItemDetails_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ItemDetails_1.prototype.onAdded = function (param) {
            this.itemDetailsData = param;
            //中心为原点的坐标
            var centeredPos = this.itemDetailsData.touchPos.subtract(DataMgr_1.DataMgr.getScreenCenter());
            //判断是否超过屏幕
            var bgTransform = this.getComponent(cc_1.UITransform);
            var bgWidth = bgTransform === null || bgTransform === void 0 ? void 0 : bgTransform.width;
            var bgHeight = bgTransform === null || bgTransform === void 0 ? void 0 : bgTransform.height;
            if (this.itemDetailsData.orientationType == DataObject_1.DetaisOrientationType.Default) {
                //上下显示  上面空间足够就朝上显示，不够的时候朝下显示
                //UI边缘的x位置
                var edgeX = bgWidth / 2 + Math.abs(centeredPos.x);
                //UI边缘与屏幕边缘的差值
                var diffX = edgeX - DataMgr_1.DataMgr.getScreenCenter().x;
                if (diffX > 0) {
                    //超过边缘
                    if (centeredPos.x < 0) {
                        //超过了左边
                        centeredPos.x += (diffX + 10);
                    }
                    else {
                        //超过了右边
                        centeredPos.x -= (diffX + 10);
                    }
                }
                //再看上下 优先考虑上  上不足再往下显示
                if (centeredPos.y > 0) {
                    var edgeY = centeredPos.y + bgHeight + 100;
                    var diffY = edgeY - DataMgr_1.DataMgr.getScreenCenter().y;
                    if (diffY > 0) {
                        //超过上边缘 向下显示
                        centeredPos.y -= (bgHeight / 2 + 100);
                    }
                    else {
                        //向上偏移100
                        centeredPos.y += (bgHeight / 2 + 100);
                    }
                }
                else {
                    //向上偏移100
                    centeredPos.y += (bgHeight / 2 + 100);
                }
            }
            else if (this.itemDetailsData.orientationType == DataObject_1.DetaisOrientationType.Left) {
                //左  考虑屏幕上下边缘
                centeredPos.x += (bgWidth / 2 + 100);
            }
            else if (this.itemDetailsData.orientationType == DataObject_1.DetaisOrientationType.Right) {
                //右  考虑屏幕上下边缘
                centeredPos.x -= (bgWidth / 2 + 100);
            }
            if (this.itemDetailsData.orientationType == DataObject_1.DetaisOrientationType.Left || this.itemDetailsData.orientationType == DataObject_1.DetaisOrientationType.Right) {
                var edgeY = bgHeight / 2 + Math.abs(centeredPos.y);
                //UI边缘与屏幕边缘的差值
                var diffY = edgeY - DataMgr_1.DataMgr.getScreenCenter().y;
                if (diffY > 0) {
                    //超过边缘
                    if (centeredPos.y < 0) {
                        //超过了下边
                        centeredPos.y += (diffY + 10);
                    }
                    else {
                        //超过了上边
                        centeredPos.y -= (diffY + 10);
                    }
                }
            }
            var showPos = new cc_1.Vec3(centeredPos.x, centeredPos.y, 0);
            this.node.setPosition(showPos);
            this.showInfo();
        };
        ItemDetails_1.prototype.showInfo = function () {
        };
        return ItemDetails_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ItemDetails");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ItemDetails = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ItemDetails = _classThis;
}();
exports.ItemDetails = ItemDetails;
