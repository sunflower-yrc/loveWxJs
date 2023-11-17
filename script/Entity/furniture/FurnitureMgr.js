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
exports.FurnitureMgr = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../../game/common/bundle/BundleConfig");
var GameEvent_1 = require("../../game/common/config/GameEvent");
var SingletonModuleComp_1 = require("../../game/common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../../game/common/mgr/GameMgr");
var FurnitureData_1 = require("../../game/common/tableData/FurnitureData");
var DataObject_1 = require("../../game/tools/DataObject");
var DataManager_1 = require("../../Global/DataManager");
var FloorsMgr_1 = require("../floor/FloorsMgr");
var FurnitureBase_1 = require("./FurnitureBase");
var FurnitureEnum_1 = require("./FurnitureEnum");
var FurnitureExtend_1 = require("./FurnitureExtend");
var FurnitureVO_1 = require("./FurnitureVO");
var GameResPath_1 = require("../../game/common/config/GameResPath");
var ResMgr_1 = require("../../game/mgr/ResMgr");
var cc_2 = require("cc");
var env_1 = require("cc/env");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property, executeInEditMode = cc_1._decorator.executeInEditMode;
var ROTATE_STATE_POS = new cc_1.Vec3(0, 15, 0);
var MOVE_STATE_POS = new cc_1.Vec3(0, 250, 0);
var DEFAULT_POS = new cc_1.Vec3(0, 0, 0);
var SCALE_NORMAL = new cc_1.Vec3(1, 1, 1);
var SCALE_OPPOSITE = new cc_1.Vec3(-1, 1, 1);
var FurnitureMgr = function () {
    var _classDecorators = [ccclass('FurnitureMgr'), executeInEditMode];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = FurnitureBase_1.FurnitureBase;
    var FurnitureMgr = _classThis = /** @class */ (function (_super) {
        __extends(FurnitureMgr_1, _super);
        function FurnitureMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemId = null;
            _this.itemName = "";
            _this.turnable = true;
            _this.twoFace = true;
            _this.opposite = false;
            _this.state = FurnitureEnum_1.FurnitureStateEnum.None;
            _this.interaction = false;
            //roleAnimType: RoleAnimTypeInspectorEnum = null!;
            _this.originSettlePos = null;
            _this.isLRNormalLoaded = false;
            _this.isLRTopLoaded = false;
            _this.isLRNormalPreloaded = false;
            _this.isLRTopPreloaded = false;
            _this.blockType = FurnitureEnum_1.BlockType.NORMAL;
            _this._type = null;
            _this.otherFace = null;
            _this.direction = FurnitureEnum_1.FurnitureDirectionEnum.Left;
            _this.originWallPosMap = new Map();
            _this.offsetY = 0;
            _this.originOffsetY = 0;
            _this.isPlotType = false; //0 默认 1庄园
            _this.plotId = 0;
            _this.ZIdx = 0;
            _this.blockPos = [];
            return _this;
        }
        Object.defineProperty(FurnitureMgr_1.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (value) {
                switch (value) {
                    case FurnitureEnum_1.FurnitureTypeEnum.SeatAndSleep:
                    case FurnitureEnum_1.FurnitureTypeEnum.Cabinets:
                    case FurnitureEnum_1.FurnitureTypeEnum.EntertainmentAndDecoration:
                    case FurnitureEnum_1.FurnitureTypeEnum.OtherFurniture:
                    case FurnitureEnum_1.FurnitureTypeEnum.WallFurniture:
                        this.blockType = FurnitureEnum_1.BlockType.NORMAL;
                        break;
                    case FurnitureEnum_1.FurnitureTypeEnum.Carpet:
                        this.blockType = FurnitureEnum_1.BlockType.FLOOR;
                        break;
                    case FurnitureEnum_1.FurnitureTypeEnum.Wallpaper:
                        this.blockType = FurnitureEnum_1.BlockType.WALLPAPER;
                        break;
                    case FurnitureEnum_1.FurnitureTypeEnum.WallDecoration:
                    case FurnitureEnum_1.FurnitureTypeEnum.Window:
                    case FurnitureEnum_1.FurnitureTypeEnum.Door:
                    case FurnitureEnum_1.FurnitureTypeEnum.OtherWallDecorations:
                        this.blockType = FurnitureEnum_1.BlockType.WALLDECORATE;
                        break;
                    case FurnitureEnum_1.FurnitureTypeEnum.FloorTile:
                        this.blockType = FurnitureEnum_1.BlockType.FLOORTILE;
                        break;
                    case FurnitureEnum_1.FurnitureTypeEnum.Role:
                        this.blockType = FurnitureEnum_1.BlockType.Role;
                        break;
                    case FurnitureEnum_1.FurnitureTypeEnum.Pet:
                        this.blockType = FurnitureEnum_1.BlockType.Pet;
                        break;
                    case FurnitureEnum_1.FurnitureTypeEnum.ManorBillboard:
                    case FurnitureEnum_1.FurnitureTypeEnum.ManorBuff1:
                    case FurnitureEnum_1.FurnitureTypeEnum.ManorBuff2:
                    case FurnitureEnum_1.FurnitureTypeEnum.ManorBuff3:
                    case FurnitureEnum_1.FurnitureTypeEnum.ManorBuff4:
                        this.blockType = FurnitureEnum_1.BlockType.ManorBuff;
                        break;
                    case FurnitureEnum_1.FurnitureTypeEnum.Plot:
                        this.blockType = FurnitureEnum_1.BlockType.Plot;
                        break;
                    default:
                        debugger;
                        break;
                }
                this._type = value;
            },
            enumerable: false,
            configurable: true
        });
        FurnitureMgr_1.prototype.getMin_X = function () {
            var result = this.blockPos[0].x;
            this.blockPos.forEach(function (e) {
                if (e.x < result)
                    result = e.x;
            });
            return result;
        };
        FurnitureMgr_1.prototype.getMax_X = function () {
            var result = this.blockPos[0].x;
            this.blockPos.forEach(function (e) {
                if (e.x > result)
                    result = e.x;
            });
            return result;
        };
        FurnitureMgr_1.prototype.getMin_Y = function () {
            var result = this.blockPos[0].y;
            this.blockPos.forEach(function (e) {
                if (e.y < result)
                    result = e.y;
            });
            return result;
        };
        FurnitureMgr_1.prototype.getMax_Y = function () {
            var result = this.blockPos[0].y;
            this.blockPos.forEach(function (e) {
                if (e.y > result)
                    result = e.y;
            });
            return result;
        };
        Object.defineProperty(FurnitureMgr_1.prototype, "centerPos", {
            // centerPos!: SettlePos;
            get: function () {
                var biggisterPos = this.settlePos;
                for (var _i = 0, _a = this.blockPos; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (i.x + i.y > biggisterPos.x + biggisterPos.y) {
                        biggisterPos = i;
                    }
                }
                return biggisterPos;
            },
            set: function (v) {
            },
            enumerable: false,
            configurable: true
        });
        ;
        ;
        FurnitureMgr_1.prototype.init = function (data, extend) {
            var _a;
            if (extend === void 0) { extend = true; }
            return __awaiter(this, void 0, void 0, function () {
                var f;
                var _this = this;
                return __generator(this, function (_b) {
                    f = FurnitureData_1.FurnitureData.getAll().get(data.id);
                    if ((f === null || f === void 0 ? void 0 : f.furnitureType) != FurnitureEnum_1.FurnitureTypeEnum.FloorTile) {
                        if (f.furnitureType == FurnitureEnum_1.FurnitureTypeEnum.Window || f.furnitureType == FurnitureEnum_1.FurnitureTypeEnum.WallDecoration || f.furnitureType == FurnitureEnum_1.FurnitureTypeEnum.OtherWallDecorations) {
                            this.node.children.forEach(function (e) {
                                var tmpV3 = (0, cc_2.v3)(e.position.x, e.position.y + f.metopeHigh * 40);
                                _this.originWallPosMap.set(e.name, tmpV3);
                                e.setPosition(tmpV3);
                            });
                        }
                    }
                    //console.log("isPlotType",data.isPlotPos);
                    this.isPlotType = data.isPlotPos;
                    this.interaction = f.interaction > 0;
                    this.opposite = f.opposite == 0;
                    this.itemId = data.id;
                    this.itemName = data.name;
                    this.direction = data.direction;
                    this.type = data.furnitureType;
                    this.settlePos = data.settlePos;
                    this.plotId = data.land_id;
                    this.size = data.size;
                    this.originOffsetY = (_a = data.offsetY) !== null && _a !== void 0 ? _a : 0;
                    this.node.layer = 1 << 30;
                    this.node.children.forEach(function (e) {
                        e.layer = 1 << 30;
                    });
                    if (extend) {
                        this.setExtend();
                        // 在settle()方法中，设置物体的z轴坐标
                        this.ZIdx = this.calculateZIndex();
                        GameMgr_1.GameMgr.Instance.sceneMgr.manageAllNodeOrder(); //真正的父节点在这
                    }
                    else {
                        this.updateBlocks();
                    }
                    return [2 /*return*/];
                });
            });
        };
        FurnitureMgr_1.prototype.loadAsset = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var f, _a, isLRNormal, isLRTop, hasLRTop, dicNode;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!this.itemId) {
                                            resolve(false);
                                            return [2 /*return*/];
                                        }
                                        f = FurnitureData_1.FurnitureData.getAll().get(this.itemId);
                                        _a = [false, false, false], isLRNormal = _a[0], isLRTop = _a[1], hasLRTop = _a[2];
                                        if ((f === null || f === void 0 ? void 0 : f.furnitureType) != FurnitureEnum_1.FurnitureTypeEnum.FloorTile) {
                                            //初始化预设体对应的家具图片
                                            if (this.direction == FurnitureEnum_1.FurnitureDirectionEnum.Left || this.direction == FurnitureEnum_1.FurnitureDirectionEnum.Right) {
                                                isLRNormal = true;
                                            }
                                            dicNode = ViewUtil_1.ViewUtil.getChildByName("leftT", this.node);
                                            if (dicNode != null && (f === null || f === void 0 ? void 0 : f.opposite) == 1) {
                                                hasLRTop = true;
                                                if (this.direction == FurnitureEnum_1.FurnitureDirectionEnum.LeftTop || this.direction == FurnitureEnum_1.FurnitureDirectionEnum.RightTop) {
                                                    isLRTop = true;
                                                }
                                            }
                                        }
                                        if (!isLRNormal) return [3 /*break*/, 4];
                                        if (!!this.isLRNormalLoaded) return [3 /*break*/, 3];
                                        return [4 /*yield*/, ResMgr_1.ResMgr.setSingleSpriteFrameByName("left", this.node, GameResPath_1.GameResPath.getFurniturePutIconsPath(this.itemId + ""), BundleConfig_1.default.instance.furniture.name)];
                                    case 1:
                                        _b.sent();
                                        return [4 /*yield*/, ResMgr_1.ResMgr.setSingleSpriteFrameByName("right", this.node, GameResPath_1.GameResPath.getFurniturePutIconsPath(this.itemId + ""), BundleConfig_1.default.instance.furniture.name)];
                                    case 2:
                                        _b.sent();
                                        this.isLRNormalLoaded = true;
                                        resolve(true);
                                        return [3 /*break*/, 4];
                                    case 3:
                                        resolve(true);
                                        _b.label = 4;
                                    case 4:
                                        if (!isLRTop) return [3 /*break*/, 8];
                                        if (!!this.isLRTopLoaded) return [3 /*break*/, 7];
                                        return [4 /*yield*/, ResMgr_1.ResMgr.setSingleSpriteFrameByName("leftT", this.node, GameResPath_1.GameResPath.getFurniturePutIconsPath(this.itemId + "_1"), BundleConfig_1.default.instance.furniture.name)];
                                    case 5:
                                        _b.sent();
                                        return [4 /*yield*/, ResMgr_1.ResMgr.setSingleSpriteFrameByName("rightT", this.node, GameResPath_1.GameResPath.getFurniturePutIconsPath(this.itemId + "_1"), BundleConfig_1.default.instance.furniture.name)];
                                    case 6:
                                        _b.sent();
                                        this.isLRTopLoaded = true;
                                        resolve(true);
                                        return [3 /*break*/, 8];
                                    case 7:
                                        resolve(true);
                                        _b.label = 8;
                                    case 8:
                                        if (!isLRNormal) {
                                            if (!this.isLRNormalPreloaded)
                                                ResMgr_1.ResMgr.preload(GameResPath_1.GameResPath.getFurniturePutIconsPath(this.itemId + ""), BundleConfig_1.default.instance.furniture);
                                            this.isLRNormalPreloaded = true;
                                        }
                                        if (hasLRTop && !isLRTop) {
                                            if (!this.isLRTopPreloaded)
                                                ResMgr_1.ResMgr.preload(GameResPath_1.GameResPath.getFurniturePutIconsPath(this.itemId + "_1"), BundleConfig_1.default.instance.furniture);
                                            this.isLRTopPreloaded = true;
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                });
            });
        };
        // getRealCenter()
        // {
        //     let settle:SettlePos= { x: 1, y: 1, room:0 };
        //     let zeroPos=FloorsMgr.Instance.GetFloorByPos(settle)!.node.worldPosition;
        //     console.log(this.node!.worldPosition)
        //     let nodePos=this.getActiveNode()!.worldPosition;
        //     let dis=Math.sqrt((nodePos.x-zeroPos.x)*(nodePos.x-zeroPos.x)+(nodePos.y-zeroPos.y)*(nodePos.y-zeroPos.y));
        //     console.log("dis is",dis,this.node.name)
        //     return dis;
        // }
        /**获取当前的图片 */
        FurnitureMgr_1.prototype.getActiveNode = function () {
            var activeNode;
            var direction = this.direction;
            switch (direction) {
                case FurnitureEnum_1.FurnitureDirectionEnum.Left:
                    activeNode = this.leftNode;
                    break;
                case FurnitureEnum_1.FurnitureDirectionEnum.Right:
                    activeNode = this.rightNode;
                    break;
                case FurnitureEnum_1.FurnitureDirectionEnum.LeftTop:
                    activeNode = this.leftTNode;
                    break;
                case FurnitureEnum_1.FurnitureDirectionEnum.RightTop:
                    activeNode = this.rightTNode;
                    break;
                default:
                    break;
            }
            return activeNode;
        };
        FurnitureMgr_1.prototype.getActiveSp = function () {
            var node = this.getActiveNode();
            return node === null || node === void 0 ? void 0 : node.getComponent(cc_1.Sprite);
        };
        FurnitureMgr_1.prototype.greenThis = function () {
            var node = this.getActiveNode();
            if (node) {
                node.getComponent(cc_1.Sprite).color = new cc_1.Color(135, 247, 171, 255);
                GameMgr_1.GameMgr.Instance.greenFurniture = this;
            }
        };
        FurnitureMgr_1.prototype.greenThisRole = function () {
            var node = this.getActiveNode();
            if (node) {
                GameMgr_1.GameMgr.Instance.greenFurniture = this;
            }
        };
        FurnitureMgr_1.prototype.redThis = function () {
            var node = this.getActiveNode();
            if (node) {
                node.getComponent(cc_1.Sprite).color = new cc_1.Color(255, 190, 190, 255);
            }
        };
        FurnitureMgr_1.prototype.offColorThis = function () {
            var node = this.getActiveNode();
            if (node) {
                node.getComponent(cc_1.Sprite).color = new cc_1.Color(255, 255, 255, 255);
            }
        };
        FurnitureMgr_1.prototype.shadowThis = function () {
            var node = this.getActiveNode();
            if (node) {
                node.getComponent(cc_1.Sprite).color = new cc_1.Color(255, 255, 255, 190);
            }
        };
        FurnitureMgr_1.prototype.offShadowThis = function () {
            var node = this.getActiveNode();
            if (node) {
                node.getComponent(cc_1.Sprite).color = new cc_1.Color(255, 255, 255, 255);
            }
        };
        FurnitureMgr_1.prototype.setRoleId = function (roleId) {
        };
        //被点击
        FurnitureMgr_1.prototype.clicked = function (extend) {
            if (extend === void 0) { extend = true; }
            GameMgr_1.GameMgr.Instance.clickItem.setSelectItem(this);
            /**初始位置 */
            GameMgr_1.GameMgr.Instance.originPos = this.settlePos;
            GameMgr_1.GameMgr.Instance.originIsPlotType = this.isPlotType;
            GameMgr_1.GameMgr.Instance.originRotate = this.direction;
            if (extend) {
                //取消占地
                this.setOffExtend();
                this.action();
                Oops_1.oops.logB(this.itemId, "家具id");
                GameMgr_1.GameMgr.Instance.mapManager.moveScreenToNode(this.getActiveNode(), 0);
                // GameMgr.Instance.MapClickable = false;
            }
            GameMgr_1.GameMgr.Instance.sceneMgr.shadowAllFurnitures();
            var flag = this.freshFloorSprites();
            return flag;
        };
        /**检查是否能防止 */
        FurnitureMgr_1.prototype.freshFloorSprites = function () {
            FloorsMgr_1.FloorsMgr.Instance.HideAllFloorSprite();
            return FloorsMgr_1.FloorsMgr.Instance.checkSpritesColor(this);
        };
        /**检查是否可以放置，上面的函数会有修改格子颜色，和放置物品的操作，这里不用这些不必要操作 */
        FurnitureMgr_1.prototype.checkCanPutOn = function () {
            return FloorsMgr_1.FloorsMgr.Instance.checkCanPutOn(this);
        };
        /**
         *  刷新位置
         * @param pos 位置
         * @param touchState 触摸状态
         * @returns
         */
        FurnitureMgr_1.prototype.updatePos = function (pos, touchState, isPlotType) {
            if ((this.settlePos.x == pos.x && this.settlePos.y == pos.y) && touchState != FurnitureEnum_1.TouchState.TouchEnd) {
                return;
            }
            var isValid = true;
            this.settlePos = pos;
            this.isPlotType = isPlotType;
            this.updateBlocks();
            //**占地色块显示 */
            if (!this.isPlotType)
                isValid = this.freshFloorSprites();
            else
                isValid = this.freshPlotFloorSprites();
            if (isValid) {
                this.updateSettlePos(pos);
                GameMgr_1.GameMgr.Instance.sceneMgr.setOpacity();
                if (touchState == FurnitureEnum_1.TouchState.TouchEnd) {
                    GameMgr_1.GameMgr.Instance.originPos = this.settlePos;
                    GameMgr_1.GameMgr.Instance.originRotate = this.direction;
                    GameMgr_1.GameMgr.Instance.originIsPlotType = this.isPlotType;
                    this.action();
                    if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide && SingletonModuleComp_1.smc.guide.GuideModel.step == 8) {
                        SingletonModuleComp_1.smc.guide.GuideView.next();
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FurnitureGuideTis);
                    }
                }
                /**修正 */
                GameMgr_1.GameMgr.Instance.clickItem.updatePosToCenter();
            }
            this.offColorThis();
            this.centerPos = null;
            return isValid;
        };
        FurnitureMgr_1.prototype.freshPlotFloorSprites = function () {
            FloorsMgr_1.FloorsMgr.Instance.HideAllFloorSprite();
            return FloorsMgr_1.FloorsMgr.Instance.checkPlotSpritesColor(this);
        };
        /**直接生成到目标位置 */
        FurnitureMgr_1.prototype.setPosWithoutClicked = function (pos) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.settlePos = pos;
                    this.updateBlocks();
                    GameMgr_1.GameMgr.Instance.greenFurniture = null;
                    GameMgr_1.GameMgr.Instance.originIsPlotType = this.isPlotType;
                    GameMgr_1.GameMgr.Instance.originPos = this.settlePos;
                    GameMgr_1.GameMgr.Instance.originRotate = this.direction;
                    this.updateSettlePos(pos);
                    this.action(true);
                    this.offColorThis();
                    this.centerPos = null;
                    return [2 /*return*/];
                });
            });
        };
        FurnitureMgr_1.prototype.updateSettlePos = function (pos) {
            var _a, _b, _c, _d, _e, _f;
            // FloorsMgr.Instance.GetFloorByPos(pos)!.settle(this.node);
            this.node.setPosition(DEFAULT_POS);
            var tempWorldPos;
            var floorMgr;
            if (!this.isPlotType)
                floorMgr = FloorsMgr_1.FloorsMgr.Instance.GetFloorByPos(pos);
            else
                floorMgr = FloorsMgr_1.FloorsMgr.Instance.GetPlotFloorByPos(pos);
            if (floorMgr && floorMgr.node && floorMgr.node.isValid) {
                tempWorldPos = floorMgr.node.worldPosition;
                ;
                this.ZIdx = this.calculateZIndex();
                GameMgr_1.GameMgr.Instance.sceneMgr.setChild(this, true);
                this.node.worldPosition = tempWorldPos;
                if (this.type == FurnitureEnum_1.FurnitureTypeEnum.Wallpaper && FloorsMgr_1.FloorsMgr.Instance.GetFloorByPos(pos)) {
                    var tmpWdPos = void 0;
                    switch (this.direction) {
                        case FurnitureEnum_1.FurnitureDirectionEnum.Left:
                            tmpWdPos = (_c = (_b = (_a = FloorsMgr_1.FloorsMgr.Instance.GetFloorByPos(pos)) === null || _a === void 0 ? void 0 : _a.leftWallPaperSp) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.worldPosition;
                            tmpWdPos && (this.leftNode.worldPosition = tmpWdPos);
                            break;
                        case FurnitureEnum_1.FurnitureDirectionEnum.Right:
                            tmpWdPos = (_f = (_e = (_d = FloorsMgr_1.FloorsMgr.Instance.GetFloorByPos(pos)) === null || _d === void 0 ? void 0 : _d.rightWallPaperSp) === null || _e === void 0 ? void 0 : _e.node) === null || _f === void 0 ? void 0 : _f.worldPosition;
                            tmpWdPos && (this.rightNode.worldPosition = tmpWdPos);
                            break;
                    }
                }
            }
            else {
                console.log("没位置没位置");
                //处理幽灵家具
                this.putBackData();
            }
        };
        // updatePlotPos(pos: SettlePos, touchState: TouchState) {
        // }
        /**当前是否能互动 */
        FurnitureMgr_1.prototype.ifCanRoleOn = function (role) {
            var Nums = this.getActiveNode().getComponentsInChildren(FurnitureExtend_1.FurnitureExtend).length;
            var roles = this.getActiveNode().getComponentsInChildren(FurnitureMgr);
            // .getComponentsInChildren(RoleOnFurniture)!.length;
            if (roles.length >= Nums) {
                if (role && roles.indexOf(role) != -1) {
                    return true;
                }
                return false;
            }
            var f = FurnitureData_1.FurnitureData.getAll().get(this.itemId);
            if (roles.length >= f.interaction && roles.indexOf(role) == -1)
                return false;
            return true;
        };
        /**与角色互动 */
        FurnitureMgr_1.prototype.setPetOnThis = function (petFurniture, playerActName) {
            // if (!this.ifCanRoleOn(roleOnFurniture)) {
            //     const oldrole = this.getActiveNode()!.getComponentInChildren(FurnitureMgr);
            //     oldrole?.setPosWithoutClicked(roleOnFurniture.originSettlePos);
            // }
            //let f = FurnitureData.getAll().get(this.itemId);
            // this.getActiveNode()!.getComponentsInChildren(FurnitureExtend).find(i => (!i.getComponentInChildren(FurnitureMgr) && f?.interacationPos.indexOf(i.posId) != -1))?.node.addChild(roleOnFurniture.node);
            // //先确认随机动画
            this.freshRoleState2(playerActName);
            return true;
        };
        /**与角色互动 */
        FurnitureMgr_1.prototype.setRoleOnThis = function (roleOnFurniture) {
            var _a;
            if (!this.ifCanRoleOn(roleOnFurniture)) {
                var oldrole = this.getActiveNode().getComponentInChildren(FurnitureMgr);
                oldrole === null || oldrole === void 0 ? void 0 : oldrole.setPosWithoutClicked(roleOnFurniture.originSettlePos);
            }
            var f = FurnitureData_1.FurnitureData.getAll().get(this.itemId);
            //console.log(f?.interacationPos);
            (_a = this.getActiveNode().getComponentsInChildren(FurnitureExtend_1.FurnitureExtend).find(function (i) { return (!i.getComponentInChildren(FurnitureMgr) && (f === null || f === void 0 ? void 0 : f.interacationPos.indexOf(i.posId)) != -1); })) === null || _a === void 0 ? void 0 : _a.node.addChild(roleOnFurniture.node);
            //先确认随机动画
            roleOnFurniture.freshRoleState(f.getRoleAni());
            return true;
        };
        /**摆放动画 */
        FurnitureMgr_1.prototype.action = function (init) {
            if (init === void 0) { init = false; }
            if (!init)
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_FurnitureMove);
            // 在BedMgr类中添加以下代码
            // 在onLoad函数中添加以下代码
            var activeNode = this.getActiveNode();
            if ((activeNode === null || activeNode === void 0 ? void 0 : activeNode.scale.x) > 0) {
                activeNode.scale = new cc_1.Vec3(1, 1, 1);
                (0, cc_1.tween)(this.getActiveNode()).sequence((0, cc_1.tween)(this.getActiveNode()).by(0.1, { scale: new cc_1.Vec3(0.05, 0.05, 0.05) }).start(), (0, cc_1.tween)(this.getActiveNode()).to(0.1, { scale: new cc_1.Vec3(1, 1, 1) }).start()).start();
            }
            else {
                activeNode.scale = new cc_1.Vec3(-1, 1, 1);
                (0, cc_1.tween)(this.getActiveNode()).sequence((0, cc_1.tween)(this.getActiveNode()).by(0.1, { scale: new cc_1.Vec3(-0.05, 0.05, 0.05) }).start(), (0, cc_1.tween)(this.getActiveNode()).to(0.1, { scale: new cc_1.Vec3(-1, 1, 1) }).start()).start();
            }
        };
        /**更新占地面积 */
        FurnitureMgr_1.prototype.updateBlocks = function () {
            var _a = this.settlePos, x = _a.x, y = _a.y, room = _a.room;
            var _b = this.size, xH = _b.xH, yW = _b.yW; // 获取家具的宽度和高度
            var positions = [];
            for (var i = 0; i < xH; i++) {
                for (var j = 0; j < yW; j++) {
                    var pos = { x: 0, y: 0, room: room };
                    switch (this.direction) {
                        case FurnitureEnum_1.FurnitureDirectionEnum.Left:
                            pos = { x: x + i, y: y - j, room: room };
                            break;
                        case FurnitureEnum_1.FurnitureDirectionEnum.LeftTop:
                            pos = { x: x - j, y: y - i, room: room };
                            break;
                        case FurnitureEnum_1.FurnitureDirectionEnum.RightTop:
                            pos = { x: x - i, y: y + j, room: room };
                            break;
                        case FurnitureEnum_1.FurnitureDirectionEnum.Right:
                            pos = { x: x + j, y: y + i, room: room };
                            break;
                        default:
                            break;
                    }
                    positions.push(pos);
                }
            }
            this.blockPos = positions;
            this.getCenter();
        };
        /**
        * 根据当前blocksPos来判断当前的centerPos的x和y
        */
        FurnitureMgr_1.prototype.getCenter = function () {
            var _a = this.settlePos, x = _a.x, y = _a.y, room = _a.room;
            var minX = x, maxX = x, minY = y, maxY = y;
            for (var i = 0; i < this.blockPos.length; i++) {
                var pos = this.blockPos[i];
                if (pos.x < minX) {
                    minX = pos.x;
                }
                if (pos.x > maxX) {
                    maxX = pos.x;
                }
                if (pos.y < minY) {
                    minY = pos.y;
                }
                if (pos.y > maxY) {
                    maxY = pos.y;
                }
            }
            var centerX = (minX + maxX) / 2;
            centerX *= 0.99999;
            var centerY = (minY + maxY) / 2;
            if (this.direction == FurnitureEnum_1.FurnitureDirectionEnum.Right)
                centerY *= 0.99998;
            this.centerPos = { x: centerX, y: centerY, room: room };
        };
        /**保存数据 */
        FurnitureMgr_1.prototype.saveData = function () {
            var floorMgr;
            if (!this.isPlotType)
                floorMgr = FloorsMgr_1.FloorsMgr.Instance.GetFloorByPos(this.settlePos);
            else
                floorMgr = FloorsMgr_1.FloorsMgr.Instance.GetPlotFloorByPos(this.settlePos);
            if (floorMgr) {
                var vo = new FurnitureVO_1.FurnitureVO({ id: this.itemId, name: this.itemName, direction: this.direction, type: this.type, settlePos: this.settlePos, size: this.size, land_id: this.plotId, offsetY: this.originOffsetY, isPlotPos: this.isPlotType });
                var curChapter = DataManager_1.default.Instance.curChapter;
                switch (this.blockType) {
                    case FurnitureEnum_1.BlockType.NORMAL:
                        if (!this.isPlotType)
                            DataManager_1.default.Instance.setBlcokByPos(this.settlePos, vo, curChapter);
                        else
                            DataManager_1.default.Instance.setPlotBlcokByPos(this.settlePos, vo, curChapter);
                        break;
                    case FurnitureEnum_1.BlockType.FLOOR:
                        DataManager_1.default.Instance.setFloorBlcokByPos(this.settlePos, vo, false, curChapter);
                        break;
                    case FurnitureEnum_1.BlockType.FLOORTILE:
                        DataManager_1.default.Instance.setFloorBlcokByPos(this.settlePos, vo, true, curChapter);
                        break;
                    case FurnitureEnum_1.BlockType.WALLDECORATE:
                        DataManager_1.default.Instance.setWallpaperBlockByPos(this.settlePos, vo, false, curChapter);
                        break;
                    case FurnitureEnum_1.BlockType.WALLPAPER:
                        DataManager_1.default.Instance.setWallpaperBlockByPos(this.settlePos, vo, true, curChapter);
                        break;
                    case FurnitureEnum_1.BlockType.ManorBuff:
                    case FurnitureEnum_1.BlockType.Plot:
                        DataManager_1.default.Instance.setPlotBlcokByPos(this.settlePos, vo, curChapter);
                        break;
                    default:
                        break;
                }
            }
        };
        FurnitureMgr_1.prototype.putBackData = function (offExtend, noDecrease) {
            if (offExtend === void 0) { offExtend = true; }
            if (noDecrease === void 0) { noDecrease = false; }
            var _a = this.settlePos, x = _a.x, y = _a.y, room = _a.room;
            var curChapter = DataManager_1.default.Instance.curChapter;
            // let isFloorBlock = false;
            // let isWallpaperBlock = false;
            switch (this.blockType) {
                case FurnitureEnum_1.BlockType.FLOOR:
                    DataManager_1.default.Instance.removeFloorBlockByPos("".concat(x, "-").concat(y, "-").concat(room), false, curChapter);
                    break;
                case FurnitureEnum_1.BlockType.FLOORTILE:
                    DataManager_1.default.Instance.removeFloorBlockByPos("".concat(x, "-").concat(y, "-").concat(room), true, curChapter);
                    break;
                case FurnitureEnum_1.BlockType.WALLPAPER:
                    DataManager_1.default.Instance.removeWallpaperBlockByPos("".concat(x, "-").concat(y, "-").concat(room), this.direction, true, curChapter);
                    break;
                case FurnitureEnum_1.BlockType.WALLDECORATE:
                    DataManager_1.default.Instance.removeWallpaperBlockByPos("".concat(x, "-").concat(y, "-").concat(room), this.direction, false, curChapter);
                    break;
                case FurnitureEnum_1.BlockType.Plot:
                case FurnitureEnum_1.BlockType.ManorBuff:
                    DataManager_1.default.Instance.removePlotBlockByPos("".concat(x, "-").concat(y, "-").concat(room), curChapter);
                    break;
                default:
                    if (!this.isPlotType) {
                        DataManager_1.default.Instance.removeBlockByPos("".concat(x, "-").concat(y, "-").concat(room), curChapter);
                    }
                    else
                        DataManager_1.default.Instance.removePlotBlockByPos("".concat(x, "-").concat(y, "-").concat(room), curChapter);
                    break;
            }
            this.decrease();
        };
        /**
         *
         * 放回物品并清除占用的位置
         *
         * @param offExtend 是否取消占位,主要是根据是否已经妥善放好时候，才要false，如果不确定能否有位置摆放下去请用true
         * @param noDecrease 不减少,这个主要是界面统计用的
        */
        FurnitureMgr_1.prototype.putBack = function (offExtend, noDecrease) {
            if (offExtend === void 0) { offExtend = true; }
            if (noDecrease === void 0) { noDecrease = false; }
            return __awaiter(this, void 0, void 0, function () {
                var _a, x, y, room, curChapter;
                return __generator(this, function (_b) {
                    _a = this.settlePos, x = _a.x, y = _a.y, room = _a.room;
                    curChapter = DataManager_1.default.Instance.curChapter;
                    // let isFloorBlock = false;
                    // let isWallpaperBlock = false;
                    switch (this.blockType) {
                        case FurnitureEnum_1.BlockType.FLOOR:
                            DataManager_1.default.Instance.removeFloorBlockByPos("".concat(x, "-").concat(y, "-").concat(room), false, curChapter);
                            break;
                        case FurnitureEnum_1.BlockType.FLOORTILE:
                            DataManager_1.default.Instance.removeFloorBlockByPos("".concat(x, "-").concat(y, "-").concat(room), true, curChapter);
                            break;
                        case FurnitureEnum_1.BlockType.WALLPAPER:
                            DataManager_1.default.Instance.removeWallpaperBlockByPos("".concat(x, "-").concat(y, "-").concat(room), this.direction, true, curChapter);
                            break;
                        case FurnitureEnum_1.BlockType.WALLDECORATE:
                            DataManager_1.default.Instance.removeWallpaperBlockByPos("".concat(x, "-").concat(y, "-").concat(room), this.direction, false, curChapter);
                            break;
                        case FurnitureEnum_1.BlockType.Plot:
                        case FurnitureEnum_1.BlockType.ManorBuff:
                            DataManager_1.default.Instance.removePlotBlockByPos("".concat(x, "-").concat(y, "-").concat(room), curChapter);
                            break;
                        default:
                            if (!this.isPlotType)
                                DataManager_1.default.Instance.removeBlockByPos("".concat(x, "-").concat(y, "-").concat(room), curChapter);
                            else
                                DataManager_1.default.Instance.removePlotBlockByPos("".concat(x, "-").concat(y, "-").concat(room), curChapter);
                            break;
                    }
                    if (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem == this) {
                        GameMgr_1.GameMgr.Instance.clickItem.setOffClickItem(true);
                    }
                    else {
                        if (offExtend)
                            this.setOffExtend();
                    }
                    FloorsMgr_1.FloorsMgr.Instance.HideAllFloorSprite();
                    if (!noDecrease)
                        this.decrease();
                    this.node.destroy();
                    return [2 /*return*/];
                });
            });
        };
        /**减少 */
        FurnitureMgr_1.prototype.decrease = function () {
            var _a;
            var data = new FurnitureData_1.FurnitureData(this.itemId);
            var furnitureOwnedData = !GameMgr_1.GameMgr.Instance.isOutside ?
                SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData :
                SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureOwnedData;
            for (var _i = 0, _b = (_a = furnitureOwnedData.get(data.valueType)) === null || _a === void 0 ? void 0 : _a.get(data.furnitureType); _i < _b.length; _i++) {
                var i = _b[_i];
                if (i.furnitureData.id == this.itemId) {
                    i.leftAmount++;
                    i.lineupCount--;
                }
            }
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OutRewardRed);
        };
        /**
         * 计算物体的z轴坐标
         * @returns
         */
        FurnitureMgr_1.prototype.calculateZIndex = function () {
            if (this.blockType == FurnitureEnum_1.BlockType.FLOOR) {
                return FurnitureEnum_1.FurnitureLayer.Carpet;
            }
            if (this.blockType == FurnitureEnum_1.BlockType.FLOORTILE) {
                return FurnitureEnum_1.FurnitureLayer.FloorTile;
            }
            if (!this.centerPos) {
                this.centerPos = this.settlePos;
            }
            var _a = this.centerPos, x = _a.x, y = _a.y;
            var zIndex = (x + y);
            if (this.blockType == FurnitureEnum_1.BlockType.WALLDECORATE) {
                return FurnitureEnum_1.FurnitureLayer.WallDecoration + zIndex;
            }
            if (this.blockType == FurnitureEnum_1.BlockType.WALLPAPER) {
                return FurnitureEnum_1.FurnitureLayer.WallPaper + zIndex;
            }
            return FurnitureEnum_1.FurnitureLayer.Furniture + zIndex;
        };
        /**取消占地面积 */
        FurnitureMgr_1.prototype.setOffExtend = function () {
            try {
                FloorsMgr_1.FloorsMgr.Instance.SetFloorsBlock(this.blockPos, false, this);
            }
            catch (error) {
                Oops_1.oops.log.logBusiness(error);
            }
        };
        /**旋转 */
        FurnitureMgr_1.prototype.setRotate = function (direction) {
            this.offColorThis();
            this.rotate(direction);
            this.updateView();
            this.updateBlocks();
            this.freshFloorSprites();
            this.action();
            this.loadAsset();
        };
        FurnitureMgr_1.prototype.rotateToRight = function (auto) {
            if (auto === void 0) { auto = false; }
            if (this.direction == FurnitureEnum_1.FurnitureDirectionEnum.Right)
                return;
            this.direction = FurnitureEnum_1.FurnitureDirectionEnum.Right;
            this.updateView();
            if (!auto)
                this.updatePos(this.settlePos, FurnitureEnum_1.TouchState.TouchEnd, this.isPlotType);
            this.loadAsset();
        };
        FurnitureMgr_1.prototype.rotateToLeft = function (auto) {
            if (auto === void 0) { auto = false; }
            if (this.direction == FurnitureEnum_1.FurnitureDirectionEnum.Left)
                return;
            this.direction = FurnitureEnum_1.FurnitureDirectionEnum.Left;
            this.updateView();
            if (!auto)
                this.updatePos(this.settlePos, FurnitureEnum_1.TouchState.TouchEnd, this.isPlotType);
            this.loadAsset();
        };
        FurnitureMgr_1.prototype.rotate = function (direction) {
            if (direction != undefined) {
                this.direction = direction;
                return;
            }
            if (this.turnable)
                switch (this.direction) {
                    case FurnitureEnum_1.FurnitureDirectionEnum.Left:
                        this.direction = FurnitureEnum_1.FurnitureDirectionEnum.LeftTop;
                        if (this.opposite)
                            this.direction = FurnitureEnum_1.FurnitureDirectionEnum.Right;
                        break;
                    case FurnitureEnum_1.FurnitureDirectionEnum.LeftTop:
                        this.direction = FurnitureEnum_1.FurnitureDirectionEnum.RightTop;
                        break;
                    case FurnitureEnum_1.FurnitureDirectionEnum.RightTop:
                        this.direction = FurnitureEnum_1.FurnitureDirectionEnum.Right;
                        break;
                    case FurnitureEnum_1.FurnitureDirectionEnum.Right:
                        this.direction = FurnitureEnum_1.FurnitureDirectionEnum.Left;
                        if (this.opposite)
                            this.direction = FurnitureEnum_1.FurnitureDirectionEnum.Left;
                        break;
                    default:
                        break;
                }
        };
        /**刷新显示的节点 */
        FurnitureMgr_1.prototype.updateView = function () {
            if (this.turnable) {
                switch (this.direction) {
                    case FurnitureEnum_1.FurnitureDirectionEnum.Left:
                        if (this.leftNode) {
                            this.leftNode.active = true;
                        }
                        if (this.rightNode) {
                            this.rightNode.active = false;
                        }
                        if (this.rightTNode) {
                            this.rightTNode.active = false;
                        }
                        if (this.leftTNode) {
                            this.leftTNode.active = false;
                        }
                        if (this.twoFace && this.otherFace) {
                            this.otherFace.active = false;
                        }
                        break;
                    case FurnitureEnum_1.FurnitureDirectionEnum.LeftTop:
                        //todo 替换图 的scaleX变成-1
                        if (this.leftNode) {
                            this.leftNode.active = false;
                        }
                        if (this.rightNode) {
                            this.rightNode.active = false;
                        }
                        if (this.rightTNode) {
                            this.rightTNode.active = false;
                        }
                        if (this.leftTNode) {
                            this.leftTNode.active = true;
                        }
                        break;
                    case FurnitureEnum_1.FurnitureDirectionEnum.RightTop:
                        if (this.leftNode) {
                            this.leftNode.active = false;
                        }
                        if (this.rightNode) {
                            this.rightNode.active = false;
                        }
                        if (this.rightTNode) {
                            this.rightTNode.active = true;
                        }
                        if (this.leftTNode) {
                            this.leftTNode.active = false;
                        }
                        if (this.twoFace && this.otherFace) {
                            this.rightTNode.active = false;
                            this.otherFace.active = true;
                        }
                        break;
                    case FurnitureEnum_1.FurnitureDirectionEnum.Right:
                        if (this.leftNode) {
                            this.leftNode.active = false;
                        }
                        if (this.rightNode) {
                            this.rightNode.active = true;
                        }
                        if (this.rightTNode) {
                            this.rightTNode.active = false;
                        }
                        if (this.leftTNode) {
                            this.leftTNode.active = false;
                        }
                        break;
                }
            }
        };
        /**设置占地面积 */
        FurnitureMgr_1.prototype.setExtend = function () {
            this.updateBlocks();
            FloorsMgr_1.FloorsMgr.Instance.SetFloorsBlock(this.blockPos, true, this);
            this.saveData();
        };
        Object.defineProperty(FurnitureMgr_1.prototype, "polygon", {
            /**获取polygon */
            get: function () {
                return this.getActiveNode().getComponent(cc_1.PolygonCollider2D);
            },
            enumerable: false,
            configurable: true
        });
        FurnitureMgr_1.prototype.freshRoleState = function (roleAni) {
        };
        FurnitureMgr_1.prototype.freshRoleState2 = function (roleAni) {
        };
        /**显示气泡 */
        FurnitureMgr_1.prototype.showBubble = function (talkData) {
        };
        /**显示气泡 */
        FurnitureMgr_1.prototype.showBubbleWithEvent = function (event) {
        };
        /**移除事件气泡 */
        FurnitureMgr_1.prototype.removeBubbleEvent = function (event) {
        };
        /**移除所有事件气泡 */
        FurnitureMgr_1.prototype.removeAllBubbleEvent = function () {
        };
        /**隐藏气泡 */
        FurnitureMgr_1.prototype.hideBubble = function () {
        };
        FurnitureMgr_1.prototype.updateActiveNodePos = function () {
            var tmpNode = this.getActiveNode();
            if (tmpNode) {
                var originPos = this.originWallPosMap.get(tmpNode.name);
                originPos && tmpNode.setPosition(originPos.clone().add((0, cc_2.v3)(0, this.originOffsetY + this.offsetY, 0)));
            }
        };
        Object.defineProperty(FurnitureMgr_1.prototype, "isWallDeco", {
            get: function () {
                switch (this.type) {
                    case FurnitureEnum_1.FurnitureTypeEnum.WallDecoration:
                    case FurnitureEnum_1.FurnitureTypeEnum.Window:
                    case FurnitureEnum_1.FurnitureTypeEnum.OtherWallDecorations:
                        return true;
                    default:
                        return false;
                }
            } //关闭地块上的按钮点击
            ,
            enumerable: false,
            configurable: true
        });
        FurnitureMgr_1.prototype.closeBtnClick = function () {
        };
        //恢复地块的按钮点击
        FurnitureMgr_1.prototype.openBtnClick = function () {
        };
        //刷新土地状态
        FurnitureMgr_1.prototype.updatePlotState = function () {
        };
        //刷新角色穿着
        FurnitureMgr_1.prototype.freshRoleDress = function () {
        };
        //播放土地相关的操作动画 
        FurnitureMgr_1.prototype.playOpSpin = function (sp) {
        };
        //点击自己
        FurnitureMgr_1.prototype.baseClick = function () {
        };
        //配合种植缓存做的显示
        FurnitureMgr_1.prototype.showTempSeed = function () {
        };
        FurnitureMgr_1.prototype.onLoad = function () {
            if (env_1.EDITOR) {
                !this.leftNode && (this.leftNode = ViewUtil_1.ViewUtil.getChildByName('left', this.node));
                !this.leftTNode && (this.leftTNode = ViewUtil_1.ViewUtil.getChildByName('leftT', this.node));
                !this.rightNode && (this.rightNode = ViewUtil_1.ViewUtil.getChildByName('right', this.node));
                !this.rightTNode && (this.rightTNode = ViewUtil_1.ViewUtil.getChildByName('rightT', this.node));
            }
        };
        return FurnitureMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "FurnitureMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FurnitureMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FurnitureMgr = _classThis;
}();
exports.FurnitureMgr = FurnitureMgr;
