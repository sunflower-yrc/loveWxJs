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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMgr = void 0;
var cc_1 = require("cc");
var FurnitureEnum_1 = require("../furniture/FurnitureEnum");
var FurnitureMgr_1 = require("../furniture/FurnitureMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var DEFAULT_POS = new cc_1.Vec3(0, 0, 0);
var roleMgr = function () {
    var _classDecorators = [ccclass('roleMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _onFurniture_decorators;
    var _onFurniture_initializers = [];
    var roleMgr = _classThis = /** @class */ (function (_super) {
        __extends(roleMgr_1, _super);
        function roleMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // @property(sp.Skeleton)
            _this.role = (__runInitializers(_this, _instanceExtraInitializers), null);
            _this.boy = [];
            _this.girl = [];
            _this.size = { xH: 1, yW: 1 };
            _this.blockPos = [];
            _this.blockType = FurnitureEnum_1.BlockType.Role;
            _this.onFurniture = __runInitializers(_this, _onFurniture_initializers, null);
            return _this;
            // /**
            //  *  刷新位置
            //  * @param pos 位置
            //  * @param touchState 触摸状态
            //  * @returns 
            //  */
            // updatePos({ x, y }: math.Vec3, pos: SettlePos, touchState: TouchState) {
            //     return
            //     // if (touchState != TouchState.TouchEnd) {
            //     //     return;
            //     // }
            //     let isValid = true;
            //     // this.settlePos = pos;
            //     this.updateBlocks();
            //     //**占地色块显示 */
            //     isValid = this.freshFloorSprites();
            //     // if (isValid) {
            //     //     // 检查新的位置是否在允许的范围内
            //     //     for (const i of this.blockPos) {
            //     //         isValid = GameMgr.Instance.isPositionValid(i);
            //     //         if (!isValid) {
            //     //             break;
            //     //         }
            //     //     }
            //     // }
            //     if (isValid) {
            //         FloorsMgr.Instance.GetFloorByPos(pos)!.settle(this.node);
            //         this.node.setPosition(DEFAULT_POS);
            //         const tempWorldPos = this.node.worldPosition;
            //         // this.ZIdx = this.calculateZIndex();
            //         GameMgr.Instance.sceneMgr.setChild(this);
            //         GameMgr.Instance.sceneMgr.setOpacity();
            //         this.node.worldPosition = tempWorldPos;
            //         if (touchState == TouchState.TouchEnd) {
            //             GameMgr.Instance.originPos = this.settlePos;
            //             // GameMgr.Instance.originRotate = this.direction;
            //             // this.action();
            //             // FloorsMgr.Instance.HideAllFloorSprite();
            //         }
            //         // /**修正 */
            //         GameMgr.Instance.clickItem.updatePosToCenter();
            //         // GameMgr.Instance.mapManager.setScreenToNode2(this.node);
            //     }
            //     // this.offRedThis();
            //     // this.centerPos = null!;
            //     // this.extendTimes = 0;
            //     // this.setExtend();
            //     // GameMgr.Instance.lastBlocks = this.blockPos;
            //     // checkSpriteColor
            //     // this.ZIdx = this.calculateZIndex();
            //     // this.state = FurnitureStateEnum.None;
            //     return isValid;
            // }
            // /**更新占地面积 */
            // updateBlocks(): void {
            //     let { x, y, room } = this.settlePos;
            //     const { xH, yW } = this.size; // 获取家具的宽度和高度
            //     let positions: Array<SettlePos> = [];
            //     for (let i = 0; i < xH; i++) {
            //         for (let j = 0; j < yW; j++) {
            //             let pos: SettlePos = { x: 0, y: 0, room };
            //             // switch (this.direction) {
            //             //     case FurnitureDirectionEnum.Left:
            //             //         pos = { x: x + i, y: y - j, room };
            //             //         break;
            //             //     case FurnitureDirectionEnum.LeftTop:
            //             //         pos = { x: x - j, y: y - i, room };
            //             //         break;
            //             //     case FurnitureDirectionEnum.RightTop:
            //             //         pos = { x: x - i, y: y + j, room };
            //             //         break;
            //             //     case FurnitureDirectionEnum.Right:
            //             //         pos = { x: x + j, y: y + i, room };
            //             //         break;
            //             //     default:
            //             //         break;
            //             // }
            //             positions.push(pos);
            //         }
            //     }
            //     this.blockPos = positions;
            //     // this.getCenter();
            // }
            // freshFloorSprites() {
            //     FloorsMgr.Instance.HideAllFloorSprite();
            //     return FloorsMgr.Instance.checkSpritesColor(this);
            // }
        }
        Object.defineProperty(roleMgr_1.prototype, "settlePos", {
            // start() {
            //     this.boy = smc.account.AccountModel.dressBoy;
            //     this.girl = smc.account.AccountModel.dressGirl;
            //     this.role = this.getComponent(sp.Skeleton)!;
            //     ViewUtil.findChildByName("touchPos", this.node)?.on("click", () => {
            //         GameMgr.Instance.clickItem.setRole(this);
            //         // this.role.setAnimation(0, "Stand idle", true);
            //     }, this);
            //     this.dress()
            // }
            get: function () {
                return this.onFurniture.settlePos;
            },
            enumerable: false,
            configurable: true
        });
        // dress() {
        //     //女
        //     for (let i = 0; i < this.girl.length; i++) {
        //         const element = this.girl[i];
        //         if (element != 0) {
        //             console.log("dress role:", element);
        //             //该位置有
        //             let dressData = new DressData(element);
        //             let skinSlots = StringUtil.stringToArray1(dressData.skinSlot);
        //             for (let j = 0; j < skinSlots.length; j++) {
        //                 const slot = skinSlots[j];
        //                 // console.log(dressData.skin, "  ++++  ",slot);
        //                 this.changeSlot(this.role, dressData.skin, slot, slot);
        //             }
        //         }
        //     }
        // }
        /**
        * @param skinName 要替换的部件皮肤名称
        * @param slotName 要替换的部件的插槽名称
        * @param targetAttaName  Spine中皮肤占位符的名字
        */
        roleMgr_1.prototype.changeSlot = function (role, skinName, slotName, targetAttaName) {
            //查找局部皮肤
            var skeletonData = role.skeletonData.getRuntimeData();
            var targetSkin = skeletonData.findSkin(skinName);
            //查找局部皮肤下的插槽与附件
            var targetSkinSlotIndex = skeletonData.findSlotIndex(slotName);
            var atta = targetSkin === null || targetSkin === void 0 ? void 0 : targetSkin.getAttachment(targetSkinSlotIndex, targetAttaName);
            //查找全身皮肤下的插槽
            var curSlot = role.findSlot(slotName);
            // console.log("=======" , slotName, curSlot);
            //替换全身皮肤插槽的附件
            curSlot && curSlot.setAttachment(atta);
        };
        return roleMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "roleMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _onFurniture_decorators = [property(FurnitureMgr_1.FurnitureMgr)];
        __esDecorate(null, null, _onFurniture_decorators, { kind: "field", name: "onFurniture", static: false, private: false, access: { has: function (obj) { return "onFurniture" in obj; }, get: function (obj) { return obj.onFurniture; }, set: function (obj, value) { obj.onFurniture = value; } }, metadata: _metadata }, _onFurniture_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        roleMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return roleMgr = _classThis;
}();
exports.roleMgr = roleMgr;
