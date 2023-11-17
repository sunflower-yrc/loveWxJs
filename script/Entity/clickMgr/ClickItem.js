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
exports.ClickItem = exports.CursorHeight = void 0;
var cc_1 = require("cc");
var FurnitureMgr_1 = require("../furniture/FurnitureMgr");
var FurnitureEnum_1 = require("../furniture/FurnitureEnum");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameMgr_1 = require("../../game/common/mgr/GameMgr");
var FloorsMgr_1 = require("../floor/FloorsMgr");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameEvent_1 = require("../../game/common/config/GameEvent");
var SingletonModuleComp_1 = require("../../game/common/ecs/SingletonModuleComp");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
exports.CursorHeight = 180;
var ClickItem = function () {
    var _classDecorators = [ccclass('ClickItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _roleOnFurniture_decorators;
    var _roleOnFurniture_initializers = [];
    var _cursorNode_decorators;
    var _cursorNode_initializers = [];
    var ClickItem = _classThis = /** @class */ (function (_super) {
        __extends(ClickItem_1, _super);
        function ClickItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.furnitureItem = (__runInitializers(_this, _instanceExtraInitializers), null);
            _this.role = null;
            _this.pet = null;
            _this.roleOnFurniture = __runInitializers(_this, _roleOnFurniture_initializers, null);
            _this.cursorNode = __runInitializers(_this, _cursorNode_initializers, null);
            _this.grayNode = null;
            _this.activeChildNode = null;
            /**是否为编辑墙饰模式*/
            _this.isEditWallDeco = false;
            return _this;
        }
        ClickItem_1.prototype.onLoad = function () {
            GameMgr_1.GameMgr.Instance.clickItem = this;
            this.node.parent = null;
        };
        ClickItem_1.prototype.onDestroy = function () {
        };
        ClickItem_1.prototype.setSelectItem = function (furnitureMgr) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.furnitureItem = furnitureMgr;
                    this.updatePosToCenter();
                    GameMgr_1.GameMgr.Instance.sceneMgr.setOpacity();
                    GameMgr_1.GameMgr.Instance.MapClickable = false;
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ClickItem);
                    return [2 /*return*/];
                });
            });
        };
        ClickItem_1.prototype.setRole = function (furnitureMgr) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.furnitureItem = furnitureMgr;
                    GameMgr_1.GameMgr.Instance.DragRoleMode = true;
                    this.updatePosToCenter();
                    GameMgr_1.GameMgr.Instance.MapClickable = false;
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ClickItem);
                    return [2 /*return*/];
                });
            });
        };
        ClickItem_1.prototype.setPet = function (furnitureMgr) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.furnitureItem = furnitureMgr;
                    GameMgr_1.GameMgr.Instance.DragPetMode = true;
                    this.updatePosToCenter();
                    GameMgr_1.GameMgr.Instance.MapClickable = false;
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ClickItem);
                    return [2 /*return*/];
                });
            });
        };
        /**反选 */
        ClickItem_1.prototype.setOffClickItem = function (readyDestroy) {
            var _a, _b, _c;
            if (readyDestroy === void 0) { readyDestroy = false; }
            //点击确认的时候
            //引导
            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide && this.furnitureItem && SingletonModuleComp_1.smc.guide.GuideModel.step <= 9) {
                if (SingletonModuleComp_1.smc.guide.GuideModel.step == 8) {
                    SingletonModuleComp_1.smc.guide.GuideView.next();
                }
                SingletonModuleComp_1.smc.guide.GuideView.next();
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FurnitureGuideTis);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowFurnitureBtns, true);
            }
            /**设置原来转向 */
            (_a = this.furnitureItem) === null || _a === void 0 ? void 0 : _a.setRotate(GameMgr_1.GameMgr.Instance.originRotate);
            /**回到原来位置 */
            (_b = this.furnitureItem) === null || _b === void 0 ? void 0 : _b.updatePos(GameMgr_1.GameMgr.Instance.originPos, FurnitureEnum_1.TouchState.TouchEnd, GameMgr_1.GameMgr.Instance.originIsPlotType);
            //取消虚化
            GameMgr_1.GameMgr.Instance.sceneMgr.offShadowAllFurnitures();
            if (!readyDestroy)
                /**重新设定位置  存储*/
                (_c = this.furnitureItem) === null || _c === void 0 ? void 0 : _c.setExtend();
            // 替换地板或墙纸图片
            if (this.furnitureItem && (this.furnitureItem.blockType == FurnitureEnum_1.BlockType.FLOORTILE ||
                this.furnitureItem.blockType == FurnitureEnum_1.BlockType.WALLPAPER) && !readyDestroy) {
                this.furnitureItem.getActiveSp().enabled = false;
            }
            GameMgr_1.GameMgr.Instance.sceneMgr.resetButtonCache();
            //初始化
            this.node.parent = null;
            this.furnitureItem = null;
            this.role = null;
            this.pet = null;
            this.activeChildNode = null;
            this.cursorNode.active = false;
            // this.cursorNode.parent = null;
            GameMgr_1.GameMgr.Instance.originPos = null;
            GameMgr_1.GameMgr.Instance.originRotate = null;
            GameMgr_1.GameMgr.Instance.originIsPlotType = null;
            FloorsMgr_1.FloorsMgr.Instance.HideAllFloorSprite();
            GameMgr_1.GameMgr.Instance.sceneMgr.setOpacity();
            GameMgr_1.GameMgr.Instance.MapClickable = true;
            if (GameMgr_1.GameMgr.Instance.DragRoleMode)
                GameMgr_1.GameMgr.Instance.DragRoleMode = false;
            if (GameMgr_1.GameMgr.Instance.DragPetMode)
                GameMgr_1.GameMgr.Instance.DragPetMode = false;
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ClickItem);
        };
        ClickItem_1.prototype.updatePosToCenter = function () {
            var _a, _b;
            if (this.role) {
                this.node.parent = this.role.node;
                this.node.position = new cc_1.Vec3(0, 0);
                var tempPos = this.node.worldPosition;
                this.node.parent = (_a = GameMgr_1.GameMgr.Instance.clickItem.node.parent) === null || _a === void 0 ? void 0 : _a.parent;
                this.node.worldPosition = tempPos;
            }
            if (this.furnitureItem) {
                this.node.parent = this.furnitureItem.node;
                this.node.position = new cc_1.Vec3(0, 0);
                var tempPos = this.node.worldPosition;
                this.node.parent = (_b = GameMgr_1.GameMgr.Instance.clickItem.node.parent) === null || _b === void 0 ? void 0 : _b.parent;
                this.node.worldPosition = tempPos;
            }
        };
        ClickItem_1.prototype.update = function () {
            var _a, _b;
            if (this.role) {
                this.cursorNode.worldPosition = this.role.node.worldPosition;
                this.cursorNode.worldPosition = this.cursorNode.worldPosition.add(new cc_1.Vec3(0, exports.CursorHeight, 0));
                this.cursorNode.active = true;
            }
            else if (this.furnitureItem) {
                if (this.furnitureItem.blockType == FurnitureEnum_1.BlockType.WALLDECORATE || this.furnitureItem.blockType == FurnitureEnum_1.BlockType.WALLPAPER) {
                    var room = this.furnitureItem.settlePos.room;
                    var x = ViewUtil_1.ViewUtil.getRelativePos(this.furnitureItem.getActiveNode(), (_b = (_a = GameMgr_1.GameMgr.Instance.sceneMgr) === null || _a === void 0 ? void 0 : _a.furnitureParentMgrs[room]) === null || _b === void 0 ? void 0 : _b.node).x;
                    // If the x position of this.node is greater than 0, rotate furnitureItem to the right
                    if (x > 0) {
                        this.furnitureItem.rotateToRight();
                    }
                    // If the x position of this.node is less than 0, rotate furnitureItem to the left
                    else if (x < 0) {
                        this.furnitureItem.rotateToLeft();
                    }
                }
                this.cursorNode.worldPosition = this.furnitureItem.getActiveNode().worldPosition;
                this.cursorNode.worldPosition = this.cursorNode.worldPosition.add(new cc_1.Vec3(0, exports.CursorHeight, 0));
                this.cursorNode.active = true;
            }
            else {
                this.cursorNode.active = false;
            }
        };
        return ClickItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ClickItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _roleOnFurniture_decorators = [property(FurnitureMgr_1.FurnitureMgr)];
        _cursorNode_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _roleOnFurniture_decorators, { kind: "field", name: "roleOnFurniture", static: false, private: false, access: { has: function (obj) { return "roleOnFurniture" in obj; }, get: function (obj) { return obj.roleOnFurniture; }, set: function (obj, value) { obj.roleOnFurniture = value; } }, metadata: _metadata }, _roleOnFurniture_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cursorNode_decorators, { kind: "field", name: "cursorNode", static: false, private: false, access: { has: function (obj) { return "cursorNode" in obj; }, get: function (obj) { return obj.cursorNode; }, set: function (obj, value) { obj.cursorNode = value; } }, metadata: _metadata }, _cursorNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ClickItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ClickItem = _classThis;
}();
exports.ClickItem = ClickItem;
