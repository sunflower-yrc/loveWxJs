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
exports.FloorTileMgr = void 0;
var cc_1 = require("cc");
var BundleConfig_1 = require("../../../game/common/bundle/BundleConfig");
var GameResPath_1 = require("../../../game/common/config/GameResPath");
var FloorsMgr_1 = require("../../floor/FloorsMgr");
var FurnitureMgr_1 = require("../FurnitureMgr");
var ResMgr_1 = require("../../../game/mgr/ResMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var FloorTileMgr = function () {
    var _classDecorators = [ccclass('FloorTileMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = FurnitureMgr_1.FurnitureMgr;
    var _instanceExtraInitializers = [];
    var _xPos_decorators;
    var _xPos_initializers = [];
    var _yPos_decorators;
    var _yPos_initializers = [];
    var _turnable_decorators;
    var _turnable_initializers = [];
    var _leftNode_decorators;
    var _leftNode_initializers = [];
    var _secondFloorNode_decorators;
    var _secondFloorNode_initializers = [];
    var _polygonArr_decorators;
    var _polygonArr_initializers = [];
    var FloorTileMgr = _classThis = /** @class */ (function (_super) {
        __extends(FloorTileMgr_1, _super);
        function FloorTileMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.xPos = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _xPos_initializers, 0));
            _this.yPos = __runInitializers(_this, _yPos_initializers, 0);
            _this.turnable = __runInitializers(_this, _turnable_initializers, false);
            _this.leftNode = __runInitializers(_this, _leftNode_initializers, null);
            // type: FurnitureTypeEnum = FurnitureTypeEnum.Carpet;
            _this.secondFloorNode = __runInitializers(_this, _secondFloorNode_initializers, null);
            _this.polygonArr = __runInitializers(_this, _polygonArr_initializers, []);
            return _this;
            // setFloorTile() {
            //     //替换地板图片
            //     if (this.furnitureItem && this.furnitureItem.blockType == BlockType.FLOORTILE && !readyDestroy) {
            //         const spriteFrame = this.furnitureItem!.getActiveSp()!.spriteFrame!;
            //         const pos = this.furnitureItem!.settlePos!;
            //         // new texture
            //         FloorsMgr.Instance.GetFloorByPos(pos)!.floorTileSp.spriteFrame! = spriteFrame;
            //         this.furnitureItem!.getComponentInChildren(Sprite)!.enabled = false;
            //         // spriteFrame
            //         // const spriteFrame = this.furnitureItem?.getComponentInChildren(Sprite)?.spriteFrame;
            //         // GameMgr.Instance.sceneMgr.FloorTileSprites[]
            //         // this.furnitureItem?.settlePos.room
            //     }
            // }
            // init(data: FurnitureVO) {
            //     super.init(data);
            // }
            // setOffExtend() {
            //     try {
            //         FloorsMgr.Instance.SetFloorsBlock(this.blockPos, false, this.blockType);
            //     } catch (error) {
            //         oops.log.logBusiness(error);
            //     }
            //     this.blockPos = [];
            // }
            // updateBlocks() {
            //     const { x, y, room: z } = this.settlePos;
            //     let pos: SettlePos = { x, y, room: z };
            //     let pos1: SettlePos = { x: x + 1, y: y, room: z };
            //     let pos2: SettlePos = { x: x, y: y - 1, room: z };
            //     let pos3: SettlePos = { x: x + 1, y: y - 1, room: z };
            //     this.blockPos = [pos, pos1, pos2, pos3];
            // }
        }
        //被点击
        FloorTileMgr_1.prototype.clicked = function (extend) {
            if (extend === void 0) { extend = true; }
            var flag = _super.prototype.clicked.call(this, extend);
            this.getComponentInChildren(cc_1.Sprite).enabled = true;
            //  const sp = FloorsMgr.Instance.GetFloorByPos(this.settlePos)!
            if (extend) {
                var sp = FloorsMgr_1.FloorsMgr.Instance.GetFloorByPos(this.settlePos).floorTileSp.spriteFrame;
                if (sp) {
                    this.getActiveNode().getComponent(cc_1.Sprite).spriteFrame = sp;
                    return flag;
                }
            }
            //  else {
            ResMgr_1.ResMgr.setSingleSpriteFrame(this.getActiveNode(), GameResPath_1.GameResPath.getFurniturePutIconsPath(this.itemId + ""), BundleConfig_1.default.instance.furniture.name);
            // }
            return flag;
        };
        Object.defineProperty(FloorTileMgr_1.prototype, "polygon", {
            // async init(data: FurnitureVO, extend: boolean = true) {
            //     super.init(data, extend);
            //     // this.getActiveNode()!.getComponent(Sprite)!.spriteFrame = 
            //     // await ViewUtil.setSingleSpriteFrameByName()getFurniturePutIconsPath
            //     // ViewUtil.setSingleSpriteFrame(this.getActiveNode()!, GameResPath.getFurniturePutIconsPath(this.itemId + ""), BundleConfig.instance.guiBundle.name);
            // }
            // /**设置占地面积 */
            // setExtend() {
            //     ViewUtil.setSingleSpriteFrame(this.getActiveNode()!, GameResPath.getFurniturePutIconsPath(this.itemId + ""), BundleConfig.instance.guiBundle.name);
            //     this.updateBlocks();
            //     FloorsMgr.Instance.SetFloorsBlock(this.blockPos, true, this);
            //     this.saveData();
            // }
            /**获取当前的图片 */
            // getActiveNode(): Node | undefined {
            //     let activeNode;
            //     let direction = this.direction;
            //     switch (direction) {
            //         case FurnitureDirectionEnum.Left:
            //             activeNode = this.leftNode;
            //             break;
            //         case FurnitureDirectionEnum.Right:
            //             activeNode = this.rightNode;
            //             break;
            //         case FurnitureDirectionEnum.LeftTop:
            //             activeNode = this.leftTNode;
            //             break;
            //         case FurnitureDirectionEnum.RightTop:
            //             activeNode = this.rightTNode;
            //             break;
            //         default:
            //             break;
            //     }
            //     return activeNode;
            // }
            /**获取polygon */
            get: function () {
                var floorMgr = FloorsMgr_1.FloorsMgr.Instance.GetFloorByPos(this.settlePos);
                var polygonIndex = 0;
                if (floorMgr && floorMgr.polygonType != null) {
                    polygonIndex = floorMgr.polygonType;
                }
                var polygonArr = this.getComponentsInChildren(cc_1.PolygonCollider2D);
                return polygonArr[polygonIndex];
            },
            enumerable: false,
            configurable: true
        });
        return FloorTileMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "FloorTileMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _xPos_decorators = [property(cc_1.CCInteger)];
        _yPos_decorators = [property(cc_1.CCInteger)];
        _turnable_decorators = [property(cc_1.CCBoolean)];
        _leftNode_decorators = [property(cc_1.Node)];
        _secondFloorNode_decorators = [property(cc_1.Node)];
        _polygonArr_decorators = [property(cc_1.PolygonCollider2D)];
        __esDecorate(null, null, _xPos_decorators, { kind: "field", name: "xPos", static: false, private: false, access: { has: function (obj) { return "xPos" in obj; }, get: function (obj) { return obj.xPos; }, set: function (obj, value) { obj.xPos = value; } }, metadata: _metadata }, _xPos_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _yPos_decorators, { kind: "field", name: "yPos", static: false, private: false, access: { has: function (obj) { return "yPos" in obj; }, get: function (obj) { return obj.yPos; }, set: function (obj, value) { obj.yPos = value; } }, metadata: _metadata }, _yPos_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _turnable_decorators, { kind: "field", name: "turnable", static: false, private: false, access: { has: function (obj) { return "turnable" in obj; }, get: function (obj) { return obj.turnable; }, set: function (obj, value) { obj.turnable = value; } }, metadata: _metadata }, _turnable_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _leftNode_decorators, { kind: "field", name: "leftNode", static: false, private: false, access: { has: function (obj) { return "leftNode" in obj; }, get: function (obj) { return obj.leftNode; }, set: function (obj, value) { obj.leftNode = value; } }, metadata: _metadata }, _leftNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _secondFloorNode_decorators, { kind: "field", name: "secondFloorNode", static: false, private: false, access: { has: function (obj) { return "secondFloorNode" in obj; }, get: function (obj) { return obj.secondFloorNode; }, set: function (obj, value) { obj.secondFloorNode = value; } }, metadata: _metadata }, _secondFloorNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _polygonArr_decorators, { kind: "field", name: "polygonArr", static: false, private: false, access: { has: function (obj) { return "polygonArr" in obj; }, get: function (obj) { return obj.polygonArr; }, set: function (obj, value) { obj.polygonArr = value; } }, metadata: _metadata }, _polygonArr_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FloorTileMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FloorTileMgr = _classThis;
}();
exports.FloorTileMgr = FloorTileMgr;
