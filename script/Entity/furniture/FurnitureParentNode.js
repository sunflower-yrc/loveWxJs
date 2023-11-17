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
exports.FurnitureParentMgr = void 0;
var cc_1 = require("cc");
var GameMgr_1 = require("../../game/common/mgr/GameMgr");
var FurnitureEnum_1 = require("./FurnitureEnum");
var FurnitureMgr_1 = require("./FurnitureMgr");
var PetFurniture_1 = require("./Furnitures/PetFurniture");
var RoleOnFurniture_1 = require("./Furnitures/RoleOnFurniture");
var SdkPlatform_1 = require("../../game/platform/SdkPlatform");
var PlotMgr_1 = require("./Furnitures/PlotMgr");
var ManorBuffFurniture_1 = require("./Furnitures/ManorBuffFurniture");
var cc_2 = require("cc");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var FurnitureParentMgr = function () {
    var _classDecorators = [ccclass('FurnitureParentMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var FurnitureParentMgr = _classThis = /** @class */ (function (_super) {
        __extends(FurnitureParentMgr_1, _super);
        function FurnitureParentMgr_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FurnitureParentMgr_1.prototype.setChild = function (furniture, manage) {
            if (manage === void 0) { manage = true; }
            if (furniture.node.parent != this.node)
                furniture.node.setParent(this.node);
            if (manage)
                this.manageNodeOrder();
        };
        // Add a method to manage node order based on the z-axis
        FurnitureParentMgr_1.prototype.manageNodeOrder = function () {
            var _a;
            var children = this.node.getComponentsInChildren(FurnitureMgr_1.FurnitureMgr);
            children.sort(function (a, b) {
                return a.ZIdx - b.ZIdx;
            });
            children.sort(function (a, b) {
                if (a.blockType != FurnitureEnum_1.BlockType.NORMAL && a.blockType != FurnitureEnum_1.BlockType.Role && a.blockType != FurnitureEnum_1.BlockType.Pet && a.blockType != FurnitureEnum_1.BlockType.Plot && a.blockType != FurnitureEnum_1.BlockType.ManorBuff) {
                    return 0;
                }
                if (b.blockType != FurnitureEnum_1.BlockType.NORMAL && b.blockType != FurnitureEnum_1.BlockType.Role && b.blockType != FurnitureEnum_1.BlockType.Pet && b.blockType != FurnitureEnum_1.BlockType.Plot && b.blockType != FurnitureEnum_1.BlockType.ManorBuff) {
                    return 0;
                }
                return a.getMax_Y() - b.getMax_Y();
            });
            //使用冒泡排序试一下？
            for (var i = 0; i < children.length - 1; i++) {
                for (var j = 0; j < children.length - 1 - i; j++) {
                    if (this.sortTest(children[j], children[j + 1]) == 1)
                        _a = [children[j + 1], children[j]], children[j] = _a[0], children[j + 1] = _a[1];
                }
            }
            for (var i = 0; i < children.length; i++) {
                children[i].node.setSiblingIndex(i);
            }
        };
        /**测试排序？ */
        FurnitureParentMgr_1.prototype.sortTest = function (a, b) {
            if (a.blockType != FurnitureEnum_1.BlockType.NORMAL && a.blockType != FurnitureEnum_1.BlockType.Role && a.blockType != FurnitureEnum_1.BlockType.Pet && a.blockType != FurnitureEnum_1.BlockType.Plot && a.blockType != FurnitureEnum_1.BlockType.ManorBuff) {
                return 0;
            }
            if (b.blockType != FurnitureEnum_1.BlockType.NORMAL && b.blockType != FurnitureEnum_1.BlockType.Role && a.blockType != FurnitureEnum_1.BlockType.Pet && b.blockType != FurnitureEnum_1.BlockType.Plot && b.blockType != FurnitureEnum_1.BlockType.ManorBuff) {
                return 0;
            }
            var result = -99;
            var check = false;
            b.blockPos.forEach(function (e) {
                if (!check) {
                    check = (e.x >= a.getMax_X() && e.y > a.getMax_Y()) || (e.x > a.getMax_X() && e.y >= a.getMax_Y());
                }
            });
            if (!check) {
                check = ((a.getMin_X() == b.getMax_X()) || (a.getMin_X() < b.getMax_X() && a.getMax_X() > b.getMax_X())) && (b.getMax_Y() > a.getMax_Y());
            }
            if (!check) {
                check = ((a.getMin_Y() == b.getMax_Y()) || (a.getMin_Y() < b.getMax_Y() && a.getMax_Y() > b.getMax_Y())) && (b.getMax_X() > a.getMax_X());
            }
            if (check)
                result = -1;
            else
                result = 1;
            return result;
        };
        /**虚化所有家具 */
        FurnitureParentMgr_1.prototype.shadowAllFurnitures = function () {
            var children = this.node.getComponentsInChildren(FurnitureMgr_1.FurnitureMgr);
            children.map(function (furniture) {
                furniture.shadowThis();
            });
            GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.offShadowThis();
        };
        /**取消虚化所有家具 */
        FurnitureParentMgr_1.prototype.offShadowAllFurnitures = function () {
            var children = this.node.getComponentsInChildren(FurnitureMgr_1.FurnitureMgr);
            children.map(function (furniture) {
                furniture.offShadowThis();
            });
        };
        FurnitureParentMgr_1.prototype.checkAllInPosNode = function (worldPos, index) {
            if (GameMgr_1.GameMgr.Instance.isTakePhoto)
                return [];
            var results = [];
            var children;
            if (GameMgr_1.GameMgr.Instance.ConstructionState) {
                children = this.node.getComponentsInChildren(FurnitureMgr_1.FurnitureMgr);
            }
            else {
                /**roleOnFurniture */
                children = this.node.getComponentsInChildren(RoleOnFurniture_1.RoleOnFurniture);
                children = children.concat(this.node.getComponentsInChildren(PetFurniture_1.PetFurniture));
                if (GameMgr_1.GameMgr.Instance.manorMode) {
                    children = children.concat(this.node.getComponentsInChildren(PlotMgr_1.PlotMgr));
                    children = children.concat(this.node.getComponentsInChildren(ManorBuffFurniture_1.ManorBuffFurniture));
                }
            }
            children.map(function (furniture) {
                var polygon = furniture.polygon;
                var activeNode = polygon.node;
                var targetPos = activeNode.getComponent(cc_1.UITransform).convertToNodeSpaceAR(new cc_1.Vec3(worldPos.x, worldPos.y));
                activeNode === null || activeNode === void 0 ? void 0 : activeNode.getComponent(cc_1.PolygonCollider2D);
                if (polygon) {
                    // 获取PolygonCollider2D的坐标顶点列表
                    var points = polygon.points;
                    if (points && points.length > 0) {
                        // 使用pointInPolygon方法检测是否在PolygonCollider2D内
                        var isInside = cc_1.Intersection2D.pointInPolygon((0, cc_2.v2)(targetPos.x, targetPos.y), points);
                        if (isInside) {
                            // 点击位置在PolygonCollider2D内
                            // 这里可以执行相关的逻辑
                            results.push(furniture);
                        }
                    }
                }
            });
            SdkPlatform_1.SdkPlatform.furnitureClk("resultSum:".concat(results.length, ",layer:").concat(index, ",x:").concat(worldPos.x.toFixed(), ",y:").concat(worldPos.y.toFixed()));
            results.sort(function (a, b) { return b.ZIdx - a.ZIdx; });
            return results;
        };
        return FurnitureParentMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "FurnitureParentMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FurnitureParentMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FurnitureParentMgr = _classThis;
}();
exports.FurnitureParentMgr = FurnitureParentMgr;
