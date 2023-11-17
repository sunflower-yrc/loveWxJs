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
exports.FloorMgr = void 0;
var cc_1 = require("cc");
var FloorsMgr_1 = require("./FloorsMgr");
var FurnitureEnum_1 = require("../furniture/FurnitureEnum");
var GameMgr_1 = require("../../game/common/mgr/GameMgr");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameResPath_1 = require("../../game/common/config/GameResPath");
var BundleConfig_1 = require("../../game/common/bundle/BundleConfig");
var RoleOnFurniture_1 = require("../furniture/Furnitures/RoleOnFurniture");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var FloorMgr = function () {
    var _classDecorators = [ccclass('FloorMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _obstacle_decorators;
    var _obstacle_initializers = [];
    var _noWall_decorators;
    var _noWall_initializers = [];
    var _canSetFloorTile_decorators;
    var _canSetFloorTile_initializers = [];
    var _canSetWallPaper_decorators;
    var _canSetWallPaper_initializers = [];
    var _floorTileSp_decorators;
    var _floorTileSp_initializers = [];
    var _leftWallPaperSp_decorators;
    var _leftWallPaperSp_initializers = [];
    var _rightWallPaperSp_decorators;
    var _rightWallPaperSp_initializers = [];
    var _polygonType_decorators;
    var _polygonType_initializers = [];
    var FloorMgr = _classThis = /** @class */ (function (_super) {
        __extends(FloorMgr_1, _super);
        function FloorMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //位置
            _this.PosIndex = (__runInitializers(_this, _instanceExtraInitializers), {
                x: 0,
                y: 0,
                room: 0
            });
            //被占用
            _this.block = false;
            //土地占用
            _this.plotBlock = false;
            //地板占用
            _this.floorBlock = false;
            //墙饰品占用
            _this.wallDecorateBlock = false;
            //左墙饰品占用
            _this.leftWallDecorateBlock = false;
            //右墙饰品占用
            _this.rightWallDecorateBlock = false;
            //左墙纸占用
            _this.leftWallPaperBlock = false;
            //右墙纸占用
            _this.rightWallPaperBlock = false;
            /**地板占用 */
            _this.FloorTileBlock = false;
            _this.furnitureMgr = null;
            _this.plotFurnitureMgr = null;
            _this.ManorBuffFurniture = null;
            // 不能安置的颜色
            _this.cannotSettleColor = new cc_1.Color("#D75956");
            // 可以安置的颜色
            _this.canSettleColor = new cc_1.Color("#45B6FD");
            _this.furnitureData = null;
            _this.roleOnFurnitureMgr = null;
            _this.petOnFurnitureMgr = null;
            _this.floorTileFurnitureMgr = null;
            _this.leftWallPaperFurnitureMgr = null;
            _this.rightWallPaperFurnitureMgr = null;
            /**设定障碍 */
            _this.obstacle = __runInitializers(_this, _obstacle_initializers, false);
            /**非墙区域 */
            _this.noWall = __runInitializers(_this, _noWall_initializers, false);
            /**可以放置地板 */
            _this.canSetFloorTile = __runInitializers(_this, _canSetFloorTile_initializers, false);
            /**可以放置地板 */
            _this.canSetWallPaper = __runInitializers(_this, _canSetWallPaper_initializers, false);
            /**放置图片组件 */
            _this.floorTileSp = __runInitializers(_this, _floorTileSp_initializers, null);
            /**放置图片组件 */
            _this.leftWallPaperSp = __runInitializers(_this, _leftWallPaperSp_initializers, null);
            /**放置图片组件 */
            _this.rightWallPaperSp = __runInitializers(_this, _rightWallPaperSp_initializers, null);
            // @property({
            //     tooltip: '放置ID'
            // })
            _this.polygonType = __runInitializers(_this, _polygonType_initializers, 0);
            _this.sprite = null;
            return _this;
        }
        FloorMgr_1.prototype.init = function (pos) {
            return __awaiter(this, void 0, void 0, function () {
                var x, y, room;
                return __generator(this, function (_a) {
                    x = pos.x, y = pos.y, room = pos.room;
                    this.PosIndex = pos;
                    FloorsMgr_1.FloorsMgr.Instance.floorPosMap.set("".concat(x, "-").concat(y, "-").concat(room), this);
                    this.sprite = this.node.getComponent(cc_1.Sprite);
                    if (this.obstacle) {
                        // console.log(this.node.worldPosition)
                        this.setBlock();
                        this.setWallpaperBlock();
                        this.setLeftWallDecorateBlock();
                        this.setRightWallDecorateBlock();
                        this.setFloorBlock();
                        this.setPlotBlock();
                    }
                    //初始化墙
                    if (this.noWall) {
                        this.setLeftWallDecorateBlock();
                        this.setRightWallDecorateBlock();
                        this.setLeftWallPaperBlock();
                        this.setRightWallPaperBlock();
                    }
                    if (x == 1 && y == 1) {
                        if (!this.leftWallPaperSp) {
                            this.setLeftWallPaperBlock();
                            this.setLeftWallDecorateBlock();
                        }
                        if (!this.rightWallPaperSp) {
                            this.setRightWallPaperBlock();
                            this.setRightWallDecorateBlock();
                        }
                    }
                    else {
                        if (x == 1) {
                            this.setLeftWallDecorateBlock();
                        }
                        if (y == 1) {
                            this.setRightWallDecorateBlock();
                        }
                    }
                    return [2 /*return*/];
                });
            });
        };
        FloorMgr_1.prototype.initPlot = function (pos) {
            return __awaiter(this, void 0, void 0, function () {
                var x, y, room;
                return __generator(this, function (_a) {
                    x = pos.x, y = pos.y, room = pos.room;
                    this.PosIndex = pos;
                    FloorsMgr_1.FloorsMgr.Instance.plotFloorPosMap.set("".concat(x, "-").concat(y, "-").concat(room), this);
                    this.sprite = this.node.getComponent(cc_1.Sprite);
                    if (this.obstacle) {
                        this.setBlock();
                        this.setPlotBlock();
                        this.setWallpaperBlock();
                        this.setLeftWallDecorateBlock();
                        this.setRightWallDecorateBlock();
                        this.setFloorBlock();
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * 设置当前格子是否为障碍
         * @param flag 是否为障碍
         */
        FloorMgr_1.prototype.setBlock = function (flag) {
            if (flag === void 0) { flag = true; }
            this.block = flag;
        };
        /**
            * 设置当前格子是否为土地障碍
            * @param flag 是否为障碍
            */
        FloorMgr_1.prototype.setPlotBlock = function (flag) {
            if (flag === void 0) { flag = true; }
            this.plotBlock = flag;
        };
        /**
         * 设置当前格子是否为墙纸障碍
         * @param flag 是否为墙纸障碍
         */
        FloorMgr_1.prototype.setWallpaperBlock = function (flag) {
            if (flag === void 0) { flag = true; }
            this.wallDecorateBlock = flag;
        };
        /**
         * 设置当前格子左侧是否为墙饰障碍
         * @param flag 是否为墙饰障碍
         */
        FloorMgr_1.prototype.setLeftWallDecorateBlock = function (flag) {
            if (flag === void 0) { flag = true; }
            this.leftWallDecorateBlock = flag;
        };
        /**
         * 设置当前格子右侧是否为墙饰障碍
         * @param flag 是否为墙饰障碍
         */
        FloorMgr_1.prototype.setRightWallDecorateBlock = function (flag) {
            if (flag === void 0) { flag = true; }
            this.rightWallDecorateBlock = flag;
        };
        /**
         * 设置当前格子左侧是否为墙纸障碍
         * @param flag 是否为墙纸障碍
         */
        FloorMgr_1.prototype.setLeftWallPaperBlock = function (flag) {
            if (flag === void 0) { flag = true; }
            this.leftWallPaperBlock = flag;
            if (flag == false) {
                if (this.leftWallPaperSp)
                    this.leftWallPaperSp.spriteFrame = null;
            }
            else {
                if (this.leftWallPaperSp)
                    ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.leftWallPaperSp.node, GameResPath_1.GameResPath.getFurniturePutIconsPath(this.leftWallPaperFurnitureMgr.itemId + ""), BundleConfig_1.default.instance.furniture.name);
            }
        };
        /**
         * 设置当前格子右侧是否为墙纸障碍
         * @param flag 是否为墙纸障碍
         */
        FloorMgr_1.prototype.setRightWallPaperBlock = function (flag) {
            if (flag === void 0) { flag = true; }
            this.rightWallPaperBlock = flag;
            if (flag == false) {
                if (this.rightWallPaperSp)
                    this.rightWallPaperSp.spriteFrame = null;
            }
            else {
                if (this.rightWallPaperSp)
                    ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.rightWallPaperSp.node, GameResPath_1.GameResPath.getFurniturePutIconsPath(this.rightWallPaperFurnitureMgr.itemId + ""), BundleConfig_1.default.instance.furniture.name);
            }
        };
        /**
         * 设置当前格子是否为地板障碍
         * @param flag 是否为地板障碍
         */
        FloorMgr_1.prototype.setFloorBlock = function (flag) {
            if (flag === void 0) { flag = true; }
            this.floorBlock = flag;
        };
        /**
         * 设置当前格子是否为地砖障碍
         * @param flag 是否为地砖障碍
         */
        FloorMgr_1.prototype.setFloorTileBlock = function (flag) {
            if (flag === void 0) { flag = true; }
            this.FloorTileBlock = flag;
            if (flag == false) {
                if (this.floorTileSp)
                    this.floorTileSp.spriteFrame = null;
            }
            else {
                if (this.floorTileSp)
                    ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.floorTileSp.node, GameResPath_1.GameResPath.getFurniturePutIconsPath(this.floorTileFurnitureMgr.itemId + ""), BundleConfig_1.default.instance.furniture.name);
            }
        };
        /**
         * 根据家具类型设置格子的障碍属性
         * @param flag 是否为障碍
         * @param furniture 家具
         */
        FloorMgr_1.prototype.setFlagByType = function (flag, furniture) {
            if (flag === void 0) { flag = true; }
            //console.log(flag,furniture.blockType,furniture.itemId,furniture.isPlotType)
            switch (furniture.blockType) {
                case FurnitureEnum_1.BlockType.Plot:
                    if (flag)
                        this.plotFurnitureMgr = furniture;
                    else
                        this.plotFurnitureMgr = null;
                    this.setPlotBlock(flag);
                    break;
                case FurnitureEnum_1.BlockType.ManorBuff:
                    if (flag)
                        this.ManorBuffFurniture = furniture;
                    else
                        this.ManorBuffFurniture = null;
                    this.setPlotBlock(flag);
                    break;
                case FurnitureEnum_1.BlockType.NORMAL:
                    if (flag == true) {
                        this.furnitureMgr = furniture;
                    }
                    else {
                        this.furnitureMgr = null;
                    }
                    if (!furniture.isPlotType)
                        this.setBlock(flag);
                    else
                        this.setPlotBlock(flag);
                    break;
                case FurnitureEnum_1.BlockType.Role:
                    if (flag == true) {
                        this.roleOnFurnitureMgr = furniture;
                    }
                    else {
                        this.roleOnFurnitureMgr = null;
                    }
                    break;
                case FurnitureEnum_1.BlockType.Pet:
                    if (flag == true) {
                        this.petOnFurnitureMgr = furniture;
                    }
                    else {
                        this.petOnFurnitureMgr = null;
                    }
                    break;
                case FurnitureEnum_1.BlockType.FLOOR:
                    this.setFloorBlock(flag);
                    break;
                case FurnitureEnum_1.BlockType.FLOORTILE:
                    if (flag == true) {
                        this.floorTileFurnitureMgr = furniture;
                    }
                    else {
                        this.floorTileFurnitureMgr = null;
                    }
                    this.setFloorTileBlock(flag);
                    break;
                case FurnitureEnum_1.BlockType.WALLDECORATE:
                    if (furniture.direction == FurnitureEnum_1.FurnitureDirectionEnum.Left)
                        this.setLeftWallDecorateBlock(flag);
                    if (furniture.direction == FurnitureEnum_1.FurnitureDirectionEnum.Right)
                        this.setRightWallDecorateBlock(flag);
                    this.setWallpaperBlock(flag);
                    break;
                case FurnitureEnum_1.BlockType.WALLPAPER:
                    switch (furniture.direction) {
                        case FurnitureEnum_1.FurnitureDirectionEnum.Left:
                            this.leftWallPaperFurnitureMgr = furniture;
                            this.setLeftWallPaperBlock(flag);
                            break;
                        case FurnitureEnum_1.FurnitureDirectionEnum.Right:
                            this.rightWallPaperFurnitureMgr = furniture;
                            this.setRightWallPaperBlock(flag);
                            break;
                    }
                    break;
                default:
                    break;
            }
        };
        /**
         * 将节点放置在格子上
         * @param node 节点
         */
        FloorMgr_1.prototype.settle = function (node) {
            node.setParent(this.node);
        };
        /**是否可以放置 */
        FloorMgr_1.prototype.checkCanPutOn = function (furniture) {
            var _a;
            if (!this.isValid)
                return;
            var flag = true;
            //console.log(this.block);
            switch (furniture.blockType) {
                case FurnitureEnum_1.BlockType.Plot:
                    if (this.plotBlock)
                        flag = false;
                    break;
                case FurnitureEnum_1.BlockType.ManorBuff:
                    if (this.plotBlock)
                        flag = false;
                    break;
                case FurnitureEnum_1.BlockType.NORMAL:
                    if (this.block) {
                        flag = false;
                    }
                    break;
                case FurnitureEnum_1.BlockType.WALLDECORATE:
                    if (furniture.direction == FurnitureEnum_1.FurnitureDirectionEnum.Left) {
                        //检查左边
                        if (this.leftWallDecorateBlock) {
                            flag = false;
                        }
                    }
                    else {
                        //检查右边
                        if (this.rightWallDecorateBlock) {
                            flag = false;
                        }
                    }
                    break;
                case FurnitureEnum_1.BlockType.WALLPAPER:
                    if (furniture.direction == FurnitureEnum_1.FurnitureDirectionEnum.Left) {
                        //检查左边
                        if (this.leftWallPaperBlock || !this.canSetWallPaper) {
                            flag = false;
                        }
                    }
                    else {
                        //检查右边
                        if (this.rightWallPaperBlock || !this.canSetWallPaper) {
                            flag = false;
                        }
                    }
                    break;
                case FurnitureEnum_1.BlockType.FLOOR:
                    if (this.floorBlock) {
                        flag = false;
                    }
                    break;
                case FurnitureEnum_1.BlockType.FLOORTILE:
                    if (this.FloorTileBlock || !this.canSetFloorTile) {
                        flag = false;
                    }
                    break;
                case FurnitureEnum_1.BlockType.All:
                    if (this.floorBlock || this.wallDecorateBlock || this.block) {
                        flag = false;
                    }
                    break;
                case FurnitureEnum_1.BlockType.Role:
                    //console.log("this.block is",this.block,this.furnitureMgr)
                    if (this.block || this.plotBlock) {
                        if (!this.furnitureMgr) {
                            //地板颜色改变
                            flag = false;
                            break;
                        }
                        if (!this.furnitureMgr.interaction || !(GameMgr_1.GameMgr.Instance.clickItem.furnitureItem && this.furnitureMgr.ifCanRoleOn(GameMgr_1.GameMgr.Instance.clickItem.furnitureItem))) {
                            //不可放在家具上，满人了
                            flag = false;
                        }
                        else {
                            //可放在家具上
                            this.sprite.color = this.canSettleColor;
                        }
                    }
                    else {
                        if (this.roleOnFurnitureMgr) {
                            //角色重叠也是会变红
                            flag = false;
                        }
                        if (this.petOnFurnitureMgr) {
                            //宠物重叠也是会变红
                            flag = false;
                        }
                    }
                    break;
                case FurnitureEnum_1.BlockType.Pet:
                    if (this.block || this.plotBlock) {
                        //地板颜色改变
                        flag = false;
                    }
                    else {
                        if (this.roleOnFurnitureMgr) {
                            if (!((_a = this.roleOnFurnitureMgr.node.getComponent(RoleOnFurniture_1.RoleOnFurniture)) === null || _a === void 0 ? void 0 : _a.withPet)) {
                                //可以拖到角色上
                                flag = true;
                            }
                            else {
                                flag = false;
                            }
                        }
                        if (this.petOnFurnitureMgr) {
                            //宠物重叠也是会变红
                            flag = false;
                        }
                        else {
                            //地板变蓝
                        }
                    }
                    break;
                default:
                    break;
            }
            return flag;
        };
        /**检测颜色 */
        FloorMgr_1.prototype.checkSpriteColor = function (furniture) {
            var _a, _b, _c, _d;
            if (!this.isValid || !this.sprite)
                return;
            var flag = true;
            switch (furniture.blockType) {
                case FurnitureEnum_1.BlockType.ManorBuff:
                case FurnitureEnum_1.BlockType.Plot:
                    if (this.plotBlock) {
                        this.sprite.color = this.cannotSettleColor;
                        flag = false;
                    }
                    else {
                        this.sprite.color = this.canSettleColor;
                    }
                    break;
                case FurnitureEnum_1.BlockType.NORMAL:
                    if (this.block || this.plotBlock) {
                        this.sprite.color = this.cannotSettleColor;
                        flag = false;
                    }
                    else {
                        this.sprite.color = this.canSettleColor;
                    }
                    break;
                case FurnitureEnum_1.BlockType.WALLDECORATE:
                    if (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.direction == FurnitureEnum_1.FurnitureDirectionEnum.Left) {
                        //检查左边
                        if (this.leftWallDecorateBlock) {
                            this.sprite.color = this.cannotSettleColor;
                            flag = false;
                        }
                        else {
                            this.sprite.color = this.canSettleColor;
                        }
                    }
                    else {
                        //检查右边
                        if (this.rightWallDecorateBlock) {
                            this.sprite.color = this.cannotSettleColor;
                            flag = false;
                        }
                        else {
                            this.sprite.color = this.canSettleColor;
                        }
                    }
                    break;
                case FurnitureEnum_1.BlockType.WALLPAPER:
                    if (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.direction == FurnitureEnum_1.FurnitureDirectionEnum.Left) {
                        //检查左边
                        if (this.leftWallPaperBlock || !this.canSetWallPaper) {
                            this.sprite.color = this.cannotSettleColor;
                            flag = false;
                        }
                        else {
                            this.sprite.color = this.canSettleColor;
                        }
                    }
                    else {
                        //检查右边
                        if (this.rightWallPaperBlock || !this.canSetWallPaper) {
                            this.sprite.color = this.cannotSettleColor;
                            flag = false;
                        }
                        else {
                            this.sprite.color = this.canSettleColor;
                        }
                    }
                    break;
                case FurnitureEnum_1.BlockType.FLOOR:
                    if (this.floorBlock) {
                        this.sprite.color = this.cannotSettleColor;
                        flag = false;
                    }
                    else {
                        this.sprite.color = this.canSettleColor;
                    }
                    break;
                case FurnitureEnum_1.BlockType.FLOORTILE:
                    if (this.FloorTileBlock || !this.canSetFloorTile) {
                        this.sprite.color = this.cannotSettleColor;
                        flag = false;
                    }
                    else {
                        this.sprite.color = this.canSettleColor;
                    }
                    break;
                case FurnitureEnum_1.BlockType.All:
                    if (this.floorBlock || this.wallDecorateBlock || this.block) {
                        this.sprite.color = this.cannotSettleColor;
                        flag = false;
                    }
                    else {
                        this.sprite.color = this.canSettleColor;
                    }
                    break;
                case FurnitureEnum_1.BlockType.Role:
                    if (this.block || this.plotBlock) {
                        if (!this.furnitureMgr) {
                            this.sprite.color = this.cannotSettleColor;
                            //地板颜色改变
                            flag = false;
                            break;
                        }
                        if (!this.furnitureMgr.interaction || !this.furnitureMgr.ifCanRoleOn(GameMgr_1.GameMgr.Instance.clickItem.furnitureItem)) {
                            //不可放在家具上，满人了
                            this.sprite.color = this.cannotSettleColor;
                            (_a = this.furnitureMgr) === null || _a === void 0 ? void 0 : _a.redThis();
                            flag = false;
                        }
                        else {
                            //可放在家具上
                            this.sprite.color = this.canSettleColor;
                            (_b = this.furnitureMgr) === null || _b === void 0 ? void 0 : _b.greenThis();
                        }
                    }
                    else {
                        if (this.roleOnFurnitureMgr) {
                            //角色重叠也是会变红
                            this.sprite.color = this.cannotSettleColor;
                            flag = false;
                        }
                        if (this.petOnFurnitureMgr) {
                            //宠物重叠也是会变红
                            this.sprite.color = this.cannotSettleColor;
                            flag = false;
                        }
                        else {
                            //地板变蓝
                            this.sprite.color = this.canSettleColor;
                        }
                    }
                    break;
                case FurnitureEnum_1.BlockType.Pet:
                    if (this.block || this.plotBlock) {
                        this.sprite.color = this.cannotSettleColor;
                        //地板颜色改变
                        flag = false;
                    }
                    else {
                        if (this.roleOnFurnitureMgr) {
                            if (!((_c = this.roleOnFurnitureMgr.node.getComponent(RoleOnFurniture_1.RoleOnFurniture)) === null || _c === void 0 ? void 0 : _c.withPet)) {
                                (_d = this.roleOnFurnitureMgr) === null || _d === void 0 ? void 0 : _d.greenThisRole();
                                //可以拖到角色上
                                this.sprite.color = this.canSettleColor;
                                flag = true;
                            }
                            else {
                                this.sprite.color = this.cannotSettleColor;
                                flag = false;
                            }
                        }
                        if (this.petOnFurnitureMgr) {
                            //宠物重叠也是会变红
                            this.sprite.color = this.cannotSettleColor;
                            flag = false;
                        }
                        else {
                            //地板变蓝
                            this.sprite.color = this.canSettleColor;
                        }
                    }
                    break;
                default:
                    break;
            }
            this.sprite.enabled = true;
            FloorsMgr_1.FloorsMgr.Instance.activeSpriteFloor.push(this);
            return flag;
        };
        // /**检测颜色 */
        // setFloorColor(furniture: FurnitureMgr) {
        //     if (!this.isValid)
        //         return
        //     let flag = true;
        //     this.sprite.color = this.canSettleColor;
        //     this.sprite.enabled = true;
        //     FloorsMgr.Instance.activeSpriteFloor.push(this);
        //     return flag
        // }
        /**
         * 设置精灵是否可放置
         * @param can 是否可放置
         */
        FloorMgr_1.prototype.setSpriteCan = function (can) {
            if (!this.isValid || !this.sprite)
                return;
            if (can) {
                this.sprite.color = this.canSettleColor;
            }
            else {
                this.sprite.color = this.cannotSettleColor;
            }
            this.sprite.enabled = true;
            FloorsMgr_1.FloorsMgr.Instance.activeSpriteFloor.push(this);
        };
        /**
         * 隐藏精灵
         */
        FloorMgr_1.prototype.hideSprite = function () {
            this.sprite && (this.sprite.enabled = false);
        };
        /**
         * 判断精灵是否为蓝色
         * @returns 是否为蓝色
         */
        FloorMgr_1.prototype.isBlue = function () {
            if (this.sprite)
                return (this.sprite.color == this.canSettleColor);
        };
        return FloorMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "FloorMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _obstacle_decorators = [property({
                // type:CCBoolean,
                tooltip: '设定障碍'
            })];
        _noWall_decorators = [property({
                // type:CCBoolean,
                tooltip: '非墙区域'
            })];
        _canSetFloorTile_decorators = [property({
                // type:CCBoolean,
                tooltip: '可以放置地板位置'
            })];
        _canSetWallPaper_decorators = [property({
                // type:CCBoolean,
                tooltip: '可以放置墙纸位置'
            })];
        _floorTileSp_decorators = [property({
                type: cc_1.Sprite,
                tooltip: '可以放置节点的Sprite组件'
            })];
        _leftWallPaperSp_decorators = [property({
                type: cc_1.Sprite,
                tooltip: '可以放置节点的Sprite组件'
            })];
        _rightWallPaperSp_decorators = [property({
                type: cc_1.Sprite,
                tooltip: '可以放置节点的Sprite组件'
            })];
        _polygonType_decorators = [property({
                type: Number,
                tooltip: '多边形类型，0:普通类型，1：不规则'
            })];
        __esDecorate(null, null, _obstacle_decorators, { kind: "field", name: "obstacle", static: false, private: false, access: { has: function (obj) { return "obstacle" in obj; }, get: function (obj) { return obj.obstacle; }, set: function (obj, value) { obj.obstacle = value; } }, metadata: _metadata }, _obstacle_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _noWall_decorators, { kind: "field", name: "noWall", static: false, private: false, access: { has: function (obj) { return "noWall" in obj; }, get: function (obj) { return obj.noWall; }, set: function (obj, value) { obj.noWall = value; } }, metadata: _metadata }, _noWall_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _canSetFloorTile_decorators, { kind: "field", name: "canSetFloorTile", static: false, private: false, access: { has: function (obj) { return "canSetFloorTile" in obj; }, get: function (obj) { return obj.canSetFloorTile; }, set: function (obj, value) { obj.canSetFloorTile = value; } }, metadata: _metadata }, _canSetFloorTile_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _canSetWallPaper_decorators, { kind: "field", name: "canSetWallPaper", static: false, private: false, access: { has: function (obj) { return "canSetWallPaper" in obj; }, get: function (obj) { return obj.canSetWallPaper; }, set: function (obj, value) { obj.canSetWallPaper = value; } }, metadata: _metadata }, _canSetWallPaper_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _floorTileSp_decorators, { kind: "field", name: "floorTileSp", static: false, private: false, access: { has: function (obj) { return "floorTileSp" in obj; }, get: function (obj) { return obj.floorTileSp; }, set: function (obj, value) { obj.floorTileSp = value; } }, metadata: _metadata }, _floorTileSp_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _leftWallPaperSp_decorators, { kind: "field", name: "leftWallPaperSp", static: false, private: false, access: { has: function (obj) { return "leftWallPaperSp" in obj; }, get: function (obj) { return obj.leftWallPaperSp; }, set: function (obj, value) { obj.leftWallPaperSp = value; } }, metadata: _metadata }, _leftWallPaperSp_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rightWallPaperSp_decorators, { kind: "field", name: "rightWallPaperSp", static: false, private: false, access: { has: function (obj) { return "rightWallPaperSp" in obj; }, get: function (obj) { return obj.rightWallPaperSp; }, set: function (obj, value) { obj.rightWallPaperSp = value; } }, metadata: _metadata }, _rightWallPaperSp_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _polygonType_decorators, { kind: "field", name: "polygonType", static: false, private: false, access: { has: function (obj) { return "polygonType" in obj; }, get: function (obj) { return obj.polygonType; }, set: function (obj, value) { obj.polygonType = value; } }, metadata: _metadata }, _polygonType_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FloorMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FloorMgr = _classThis;
}();
exports.FloorMgr = FloorMgr;
