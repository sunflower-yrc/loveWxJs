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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetFurniture = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var cc_4 = require("cc");
var cc_5 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameEvent_1 = require("../../../game/common/config/GameEvent");
var GameMgr_1 = require("../../../game/common/mgr/GameMgr");
var Pet_1 = require("../../../game/pet/Pet");
var PetExcelData_1 = require("../../../game/pet/PetExcelData");
var FloorsMgr_1 = require("../../floor/FloorsMgr");
var FurnitureEnum_1 = require("../FurnitureEnum");
var FurnitureMgr_1 = require("../FurnitureMgr");
var ccclass = cc_5._decorator.ccclass, property = cc_5._decorator.property;
var PetFurniture = function () {
    var _classDecorators = [ccclass('PetFurniture')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = FurnitureMgr_1.FurnitureMgr;
    var _instanceExtraInitializers = [];
    var _leftNode_decorators;
    var _leftNode_initializers = [];
    var _rightNode_decorators;
    var _rightNode_initializers = [];
    var _leftTNode_decorators;
    var _leftTNode_initializers = [];
    var _rightTNode_decorators;
    var _rightTNode_initializers = [];
    var _otherFace_decorators;
    var _otherFace_initializers = [];
    var _instancePos_decorators;
    var _instancePos_initializers = [];
    var _twoFace_decorators;
    var _twoFace_initializers = [];
    var PetFurniture = _classThis = /** @class */ (function (_super) {
        __extends(PetFurniture_1, _super);
        function PetFurniture_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.leftNode = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _leftNode_initializers, null));
            _this.rightNode = __runInitializers(_this, _rightNode_initializers, null);
            _this.leftTNode = __runInitializers(_this, _leftTNode_initializers, null);
            _this.rightTNode = __runInitializers(_this, _rightTNode_initializers, null);
            _this.otherFace = __runInitializers(_this, _otherFace_initializers, null);
            _this.instancePos = __runInitializers(_this, _instancePos_initializers, null);
            _this.twoFace = __runInitializers(_this, _twoFace_initializers, false);
            _this.blockType = FurnitureEnum_1.BlockType.Pet;
            _this.size = { xH: 1, yW: 1 };
            _this.nowPlayAnim = "";
            _this.twe = null;
            _this.withRole = false;
            _this.petId = null;
            _this.inRoom = false;
            _this.leftTime = 0;
            return _this;
        }
        PetFurniture_1.prototype.onLoad = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.FreshRoleExit, this.freshConstructionState, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.FreshPetSkin, this.freshPetDress, this);
        };
        PetFurniture_1.prototype.setPetId = function (roleId, skin) {
            var _this = this;
            this.withRole = false;
            this.petId = roleId;
            this.petData = PetExcelData_1.PetExcelData.getAllData().find(function (x) { return x.id == _this.petId; });
            this.Pet.initSpin(this.petId, skin);
        };
        PetFurniture_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.FreshRoleExit, this.freshConstructionState, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.FreshPetSkin, this.freshPetDress, this);
            // oops.timer.unRegister(this.timeId);
            if (this.twe)
                this.twe.stop();
        };
        /** 设置回场景 */
        PetFurniture_1.prototype.setOnThis = function () {
            this.clicked(false);
            this.updatePos(this.settlePos, FurnitureEnum_1.TouchState.TouchEnd, this.isPlotType);
            GameMgr_1.GameMgr.Instance.clickItem.setOffClickItem();
        };
        /**暂时隐藏或生成 */
        PetFurniture_1.prototype.freshConstructionState = function (event, args) {
            // if (this.petId && this.petId != RoleEnum.boy && this.petId != RoleEnum.girl && !this.inRoom) {
            //     this.node.active = !args;
            //     return;
            // }
            if (args) {
                this.setOffExtend();
                this.node.parent = null;
            }
        };
        Object.defineProperty(PetFurniture_1.prototype, "Pet", {
            get: function () {
                return this.getActiveNode().getComponentInChildren(Pet_1.Pet);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PetFurniture_1.prototype, "Spine", {
            get: function () {
                return this.getActiveNode().getComponentInChildren(cc_3.sp.Skeleton);
            },
            enumerable: false,
            configurable: true
        });
        //被点击
        PetFurniture_1.prototype.clicked = function (extend) {
            if (extend === void 0) { extend = true; }
            GameMgr_1.GameMgr.Instance.clickItem.setPet(this);
            /**上一次放置位置 */
            this.originSettlePos = this.settlePos;
            // /**上一次防止位置 */
            /**初始位置 */
            GameMgr_1.GameMgr.Instance.originPos = this.settlePos;
            GameMgr_1.GameMgr.Instance.originIsPlotType = this.isPlotType;
            GameMgr_1.GameMgr.Instance.originRotate = this.direction;
            if (extend) {
                //取消占地
                this.setOffExtend();
                this.action();
                GameMgr_1.GameMgr.Instance.mapManager.moveScreenToNode(this.getActiveNode(), 0);
            }
            if (!this.isPlotType)
                return this.freshFloorSprites();
            else
                return this.freshPlotFloorSprites();
        };
        PetFurniture_1.prototype.freshFloorSprites = function () {
            FloorsMgr_1.FloorsMgr.Instance.HideAllFloorSprite();
            return FloorsMgr_1.FloorsMgr.Instance.checkSpritesColor(this);
        };
        //接触互动状态
        PetFurniture_1.prototype.resetPetState = function () {
            this.withRole = false;
            console.log("pet data is", this.petData);
            this.freshPetState(this.petData.getAwaitActName());
        };
        /**
         *  刷新位置
         * @param pos 位置
         * @param touchState 触摸状态
         * @returns
         */
        PetFurniture_1.prototype.updatePos = function (pos, touchState, posType) {
            if ((this.settlePos.x == pos.x && this.settlePos.y == pos.y) && touchState != FurnitureEnum_1.TouchState.TouchEnd) {
                return false;
            }
            GameMgr_1.GameMgr.Instance.clickRayCast.lockTime = false;
            var isValid = true;
            this.settlePos = pos;
            this.isPlotType = posType;
            this.updateBlocks();
            GameMgr_1.GameMgr.Instance.greenFurniture = null;
            GameMgr_1.GameMgr.Instance.sceneMgr.offShadowAllFurnitures();
            //**占地色块显示 */
            if (!this.isPlotType)
                isValid = this.freshFloorSprites();
            else
                isValid = this.freshPlotFloorSprites();
            if (isValid) {
                if (!this.isPlotType)
                    FloorsMgr_1.FloorsMgr.Instance.GetFloorByPos(pos).settle(this.node);
                else
                    FloorsMgr_1.FloorsMgr.Instance.GetPlotFloorByPos(pos).settle(this.node);
                this.node.setPosition(cc_4.Vec3.ZERO);
                var tempWorldPos = this.node.worldPosition;
                this.ZIdx = this.calculateZIndex();
                GameMgr_1.GameMgr.Instance.sceneMgr.setChild(this, false);
                GameMgr_1.GameMgr.Instance.sceneMgr.setOpacity();
                this.node.worldPosition = tempWorldPos;
                if (touchState == FurnitureEnum_1.TouchState.TouchEnd) {
                    if (GameMgr_1.GameMgr.Instance.greenFurniture) {
                        this.settlePos = GameMgr_1.GameMgr.Instance.greenFurniture.settlePos;
                        if (!this.withRole) {
                            var randomAct = this.petData.getInteractionAct();
                            this.withRole = true;
                            GameMgr_1.GameMgr.Instance.greenFurniture.setPetOnThis(this, randomAct[1]);
                            this.freshPetState(randomAct[0]);
                        }
                    }
                    else {
                        this.freshPetState(this.petData.getAwaitActName());
                    }
                    this.originSettlePos = this.settlePos;
                    GameMgr_1.GameMgr.Instance.originPos = this.settlePos;
                    GameMgr_1.GameMgr.Instance.originIsPlotType = this.isPlotType;
                    GameMgr_1.GameMgr.Instance.originRotate = this.direction;
                    GameMgr_1.GameMgr.Instance.sceneMgr.manageAllNodeOrder(); //人物拖拽松手时调用一次全局排序
                    //this.action();
                }
                /**修正 */
                //GameMgr.Instance.clickItem.updatePosToCenter();
            }
            this.offColorThis();
            this.centerPos = null;
            return isValid;
        };
        /**直接生成到目标位置 */
        PetFurniture_1.prototype.setPosWithoutClicked = function (pos) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.inRoom = true;
                    _super.prototype.setPosWithoutClicked.call(this, pos);
                    //const furniture = FloorsMgr.Instance.GetFloorByPos(pos)!.furnitureMgr;
                    this.setExtend();
                    return [2 /*return*/];
                });
            });
        };
        PetFurniture_1.prototype.redThis = function () {
        };
        PetFurniture_1.prototype.offColorThis = function () {
        };
        PetFurniture_1.prototype.shadowThis = function () {
        };
        PetFurniture_1.prototype.offShadowThis = function () {
        };
        PetFurniture_1.prototype.freshPetDress = function () {
        };
        PetFurniture_1.prototype.freshPetState = function (petAni) {
            this.Spine.setAnimation(0, petAni, true);
            this.nowPlayAnim = petAni;
        };
        /**播放气泡浮动 */
        PetFurniture_1.prototype.playSpeedUpNodeAni = function () {
            var _this = this;
            var btnNode = ViewUtil_1.ViewUtil.getChildByName("btn", this.node);
            this.twe = (0, cc_2.tween)(btnNode).to(0.5, { position: new cc_4.Vec3(btnNode.position.x, btnNode.position.y - 10, btnNode.position.z) })
                .to(0.5, { position: new cc_4.Vec3(btnNode.position.x, btnNode.position.y + 10, btnNode.position.z) }).call(function () {
                if (btnNode.active)
                    _this.twe.start();
            }).start();
        };
        PetFurniture_1.prototype.bubbleClick = function () {
        };
        /**隐藏气泡 */
        PetFurniture_1.prototype.hideBubble = function () {
            /**存在气泡按钮 */
            var bubbleExistBtn = ViewUtil_1.ViewUtil.getChildByName("btn", this.node);
            bubbleExistBtn.active = false;
        };
        /**显示气泡 */
        PetFurniture_1.prototype.showBubbleWithEvent = function (event) {
        };
        /**显示对话 */
        PetFurniture_1.prototype.showBubble = function (talkData) {
        };
        /**移除气泡事件 */
        PetFurniture_1.prototype.removeBubbleEvent = function (event) {
        };
        PetFurniture_1.prototype._checkEventBubbleState = function () {
        };
        /**移除气泡事件 */
        PetFurniture_1.prototype.removeTalkBubble = function (talkData) {
        };
        /**删除角色 */
        PetFurniture_1.prototype.removeRole = function () {
            // if (this.petId != RoleEnum.girl && this.petId != RoleEnum.boy && !this.inRoom)
            //     this.node.destroy();
        };
        PetFurniture_1.prototype.removeAllBubbleEvent = function () {
        };
        return PetFurniture_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PetFurniture");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _leftNode_decorators = [property(cc_5.Node)];
        _rightNode_decorators = [property(cc_5.Node)];
        _leftTNode_decorators = [property(cc_5.Node)];
        _rightTNode_decorators = [property(cc_5.Node)];
        _otherFace_decorators = [property(cc_5.Node)];
        _instancePos_decorators = [property(cc_4.Vec3)];
        _twoFace_decorators = [property(cc_1.CCBoolean)];
        __esDecorate(null, null, _leftNode_decorators, { kind: "field", name: "leftNode", static: false, private: false, access: { has: function (obj) { return "leftNode" in obj; }, get: function (obj) { return obj.leftNode; }, set: function (obj, value) { obj.leftNode = value; } }, metadata: _metadata }, _leftNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rightNode_decorators, { kind: "field", name: "rightNode", static: false, private: false, access: { has: function (obj) { return "rightNode" in obj; }, get: function (obj) { return obj.rightNode; }, set: function (obj, value) { obj.rightNode = value; } }, metadata: _metadata }, _rightNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _leftTNode_decorators, { kind: "field", name: "leftTNode", static: false, private: false, access: { has: function (obj) { return "leftTNode" in obj; }, get: function (obj) { return obj.leftTNode; }, set: function (obj, value) { obj.leftTNode = value; } }, metadata: _metadata }, _leftTNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rightTNode_decorators, { kind: "field", name: "rightTNode", static: false, private: false, access: { has: function (obj) { return "rightTNode" in obj; }, get: function (obj) { return obj.rightTNode; }, set: function (obj, value) { obj.rightTNode = value; } }, metadata: _metadata }, _rightTNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _otherFace_decorators, { kind: "field", name: "otherFace", static: false, private: false, access: { has: function (obj) { return "otherFace" in obj; }, get: function (obj) { return obj.otherFace; }, set: function (obj, value) { obj.otherFace = value; } }, metadata: _metadata }, _otherFace_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _instancePos_decorators, { kind: "field", name: "instancePos", static: false, private: false, access: { has: function (obj) { return "instancePos" in obj; }, get: function (obj) { return obj.instancePos; }, set: function (obj, value) { obj.instancePos = value; } }, metadata: _metadata }, _instancePos_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _twoFace_decorators, { kind: "field", name: "twoFace", static: false, private: false, access: { has: function (obj) { return "twoFace" in obj; }, get: function (obj) { return obj.twoFace; }, set: function (obj, value) { obj.twoFace = value; } }, metadata: _metadata }, _twoFace_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PetFurniture = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetFurniture = _classThis;
}();
exports.PetFurniture = PetFurniture;
