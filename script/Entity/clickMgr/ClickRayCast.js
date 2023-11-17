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
exports.ClickRayCast = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameMgr_1 = require("../../game/common/mgr/GameMgr");
var FloorMgr_1 = require("../floor/FloorMgr");
var FloorsMgr_1 = require("../floor/FloorsMgr");
var FurnitureEnum_1 = require("../furniture/FurnitureEnum");
var SceneMgr_1 = require("../scene/SceneMgr");
var SdkPlatform_1 = require("../../game/platform/SdkPlatform");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ClickRayCast = function () {
    var _classDecorators = [ccclass('ClickRayCast')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var ClickRayCast = _classThis = /** @class */ (function (_super) {
        __extends(ClickRayCast_1, _super);
        function ClickRayCast_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isDrag = false;
            _this.touchStartPos = null;
            _this.touchMoveCount = 0;
            _this.clickTime = -1;
            /**点击位置 */
            _this.clickPos = null;
            _this.lockTime = false;
            _this.floorCache = new Map();
            _this.plotFloorCache = new Map();
            return _this;
        }
        ClickRayCast_1.prototype.onLoad = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    GameMgr_1.GameMgr.Instance.clickRayCast = this;
                    return [2 /*return*/];
                });
            });
        };
        ClickRayCast_1.prototype.resetFloorCache = function () {
            this.floorCache.clear();
            this.plotFloorCache.clear();
        };
        ClickRayCast_1.prototype.touchStart = function (_a) {
            var x = _a.x, y = _a.y;
        };
        ClickRayCast_1.prototype.touchMove = function (_a) {
            var _b, _c, _d, _e, _f, _g, _h;
            var x = _a.x, y = _a.y;
            try {
                var isSetPlot = false;
                var minPos = null;
                var minPosNode = null;
                if (((_b = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _b === void 0 ? void 0 : _b.blockType) == FurnitureEnum_1.BlockType.Plot || ((_c = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _c === void 0 ? void 0 : _c.blockType) == FurnitureEnum_1.BlockType.ManorBuff) {
                    for (var _i = 0, _j = this.getComponent(SceneMgr_1.SceneMgr).plotPosParent[0].getComponentsInChildren(FloorMgr_1.FloorMgr).filter(function (i) { return !i.obstacle; }); _i < _j.length; _i++) {
                        var i = _j[_i];
                        var _k = i.node.getWorldPosition(), nodeX = _k.x, nodeY = _k.y;
                        var temp = Math.pow((nodeX - x), 2) + Math.pow((nodeY - y), 2);
                        if (minPos == null || minPos > temp) {
                            minPos = temp;
                            minPosNode = i;
                        }
                    }
                }
                else {
                    var posParant = this.getComponent(SceneMgr_1.SceneMgr).posParant.filter(function (v) { return v.active; });
                    for (var key in posParant) {
                        this.curFloorArr = (_d = this.floorCache.get(key)) !== null && _d !== void 0 ? _d : undefined;
                        if (!this.curFloorArr) {
                            this.curFloorArr = posParant[key].getComponentsInChildren(FloorMgr_1.FloorMgr).filter(function (v) { return !v.obstacle; });
                            this.curFloorArr && this.floorCache.set(key, this.curFloorArr);
                        }
                        for (var _l = 0, _m = this.curFloorArr; _l < _m.length; _l++) {
                            var i = _m[_l];
                            var _o = i.node.getWorldPosition(), nodeX = _o.x, nodeY = _o.y;
                            var temp = Math.pow((nodeX - x), 2) + Math.pow((nodeY - y), 2);
                            if (minPos == null || minPos > temp) {
                                //console.log("🚀 ~ file: ClickRayCast.ts:61 ~ ClickRayCast ~ touchMove ~ minPos:", minPos?.toFixed(),temp.toFixed())
                                minPos = temp;
                                minPosNode = i;
                            }
                        }
                    }
                    if (GameMgr_1.GameMgr.Instance.manorMode) {
                        for (var _p = 0, _q = this.getComponent(SceneMgr_1.SceneMgr).plotPosParent[0].getComponentsInChildren(FloorMgr_1.FloorMgr).filter(function (i) { return !i.obstacle; }); _p < _q.length; _p++) {
                            var i = _q[_p];
                            var _r = i.node.getWorldPosition(), nodeX = _r.x, nodeY = _r.y;
                            var temp = Math.pow((nodeX - x), 2) + Math.pow((nodeY - y), 2);
                            if (minPos == null || minPos > temp) {
                                minPos = temp;
                                isSetPlot = true;
                                minPosNode = i;
                            }
                        }
                    }
                }
                /**如果超过判断范围 */
                if (minPos && minPos > FloorsMgr_1.maxMinPos) {
                    FloorsMgr_1.FloorsMgr.Instance.HideAllFloorSprite();
                    if (((_e = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _e === void 0 ? void 0 : _e.type) == FurnitureEnum_1.FurnitureTypeEnum.Role || ((_f = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _f === void 0 ? void 0 : _f.type) == FurnitureEnum_1.FurnitureTypeEnum.Pet) {
                        GameMgr_1.GameMgr.Instance.sceneMgr.offShadowAllFurnitures();
                    }
                    /**家具变红 */
                    if (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) {
                        GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.redThis();
                    }
                    GameMgr_1.GameMgr.Instance.mapManager.inSrict = false;
                    // SdkPlatform.furnitureClk(`moveOutMax minPos:${minPos}`, 1);
                    //console.log("🚀 ~ file: ClickRayCast.ts:123 ~ ClickRayCast ~  moveOutMax minPos>", minPos);
                    return;
                }
                GameMgr_1.GameMgr.Instance.mapManager.inSrict = true;
                var PosIndex = minPosNode.PosIndex;
                if (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) {
                    var item = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem;
                    if (PosIndex.x != item.settlePos.x || PosIndex.y != item.settlePos.y)
                        SdkPlatform_1.SdkPlatform.furnitureClk("".concat(item.itemId, " moveTo:").concat(PosIndex.x, "_").concat(PosIndex.y, "_").concat(PosIndex.room), 1);
                }
                if (isSetPlot)
                    (_g = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _g === void 0 ? void 0 : _g.updatePos(PosIndex, FurnitureEnum_1.TouchState.TouchMove, true);
                else
                    (_h = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _h === void 0 ? void 0 : _h.updatePos(PosIndex, FurnitureEnum_1.TouchState.TouchMove, false);
                if (this.isDrag) {
                    GameMgr_1.GameMgr.Instance.sceneMgr.hideMoveArrow(true);
                }
            }
            catch (error) {
                Oops_1.oops.log.logBusiness(error);
            }
        };
        ClickRayCast_1.prototype.touchEnd = function (event, _a) {
            var _b, _c, _d, _e, _f, _g;
            var x = _a.x, y = _a.y;
            var isSetPlot = false;
            this.clickTime = -1;
            if (!this.isDrag && GameMgr_1.GameMgr.Instance.manorMode && !GameMgr_1.GameMgr.Instance.ConstructionState) {
                var worldPos = event.getUILocation();
                this.selectPlot(GameMgr_1.GameMgr.Instance.sceneMgr.checkAllInPosNode(worldPos));
            }
            if (this.lockTime == true) {
                this.lockTime = false;
                return;
            }
            if (!this.isDrag) {
                this.isDrag = false;
                //没拖动的点击结束，如果没有选择家具，就选中家具，如果是有家具了，就直接反选
                var worldPos = event.getUILocation();
                if (!GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) {
                    /**等待clickTime小于0才能点击到人物 */
                    if (!GameMgr_1.GameMgr.Instance.ConstructionState) {
                        return;
                    }
                    this.selectTop(GameMgr_1.GameMgr.Instance.sceneMgr.checkAllInPosNode(worldPos));
                }
                else {
                    if (GameMgr_1.GameMgr.Instance.clickItem.isEditWallDeco) {
                        var results = GameMgr_1.GameMgr.Instance.sceneMgr.checkAllInPosNode(worldPos);
                        if (results && results.length > 0) {
                            if (results[0] != GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) {
                                this.saveAndOffItem();
                                this.selectTop(results);
                            }
                        }
                        else {
                            this.saveAndOffItem();
                        }
                    }
                    else {
                        GameMgr_1.GameMgr.Instance.clickItem.setOffClickItem();
                    }
                }
                return;
            }
            else {
                if (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem)
                    GameMgr_1.GameMgr.Instance.sceneMgr.checkShowMoveArrows(GameMgr_1.GameMgr.Instance.clickItem.furnitureItem);
            }
            var minPos;
            var minPosNode = null;
            if (((_b = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _b === void 0 ? void 0 : _b.blockType) == FurnitureEnum_1.BlockType.Plot || ((_c = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _c === void 0 ? void 0 : _c.blockType) == FurnitureEnum_1.BlockType.ManorBuff) {
                for (var _i = 0, _h = this.getComponent(SceneMgr_1.SceneMgr).plotPosParent[0].getComponentsInChildren(FloorMgr_1.FloorMgr).filter(function (i) { return !i.obstacle; }); _i < _h.length; _i++) {
                    var i = _h[_i];
                    var _j = i.node.getWorldPosition(), nodeX = _j.x, nodeY = _j.y;
                    var temp = Math.pow((nodeX - x), 2) + Math.pow((nodeY - y), 2);
                    if (minPos == null || minPos > temp) {
                        minPos = temp;
                        minPosNode = i;
                    }
                }
            }
            else {
                for (var key in this.getComponent(SceneMgr_1.SceneMgr).posParant) {
                    if (!GameMgr_1.GameMgr.Instance.sceneMgr.posParant[key].active) {
                        break;
                    }
                    for (var _k = 0, _l = this.getComponent(SceneMgr_1.SceneMgr).posParant[key].getComponentsInChildren(FloorMgr_1.FloorMgr).filter(function (i) { return !i.obstacle; }); _k < _l.length; _k++) {
                        var i = _l[_k];
                        var _m = i.node.getWorldPosition(), nodeX = _m.x, nodeY = _m.y;
                        var temp = Math.pow((nodeX - x), 2) + Math.pow((nodeY - y), 2);
                        if (minPos == null || minPos > temp) {
                            minPos = temp;
                            minPosNode = i;
                        }
                    }
                }
                if (GameMgr_1.GameMgr.Instance.manorMode) {
                    for (var _o = 0, _p = this.getComponent(SceneMgr_1.SceneMgr).plotPosParent[0].getComponentsInChildren(FloorMgr_1.FloorMgr).filter(function (i) { return !i.obstacle; }); _o < _p.length; _o++) {
                        var i = _p[_o];
                        var _q = i.node.getWorldPosition(), nodeX = _q.x, nodeY = _q.y;
                        var temp = Math.pow((nodeX - x), 2) + Math.pow((nodeY - y), 2);
                        if (minPos == null || minPos > temp) {
                            minPos = temp;
                            isSetPlot = true;
                            minPosNode = i;
                        }
                    }
                }
            }
            if (minPos && minPos > FloorsMgr_1.maxMinPos) {
                if (((_d = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _d === void 0 ? void 0 : _d.type) == FurnitureEnum_1.FurnitureTypeEnum.Role || ((_e = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _e === void 0 ? void 0 : _e.type) == FurnitureEnum_1.FurnitureTypeEnum.Pet) {
                    GameMgr_1.GameMgr.Instance.sceneMgr.offShadowAllFurnitures();
                }
                FloorsMgr_1.FloorsMgr.Instance.HideAllFloorSprite();
                return;
            }
            var PosIndex = minPosNode.PosIndex;
            if (isSetPlot)
                (_f = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _f === void 0 ? void 0 : _f.updatePos(PosIndex, FurnitureEnum_1.TouchState.TouchEnd, true);
            else
                (_g = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _g === void 0 ? void 0 : _g.updatePos(PosIndex, FurnitureEnum_1.TouchState.TouchEnd, false);
        };
        ClickRayCast_1.prototype.saveAndOffItem = function () {
            GameMgr_1.GameMgr.Instance.sceneMgr.saveAndHideMoveArrow();
            GameMgr_1.GameMgr.Instance.clickItem.setOffClickItem();
        };
        ClickRayCast_1.prototype.update = function (dt) {
            if (this.clickTime >= 0) {
                if (this.clickTime >= 0 && this.clickTime - dt < 0) {
                    // this.touchEnd(this.clickPos);
                    if (!GameMgr_1.GameMgr.Instance.clickRayCast.isDrag) {
                        this.selectTop(GameMgr_1.GameMgr.Instance.sceneMgr.checkAllInPosNode((0, cc_1.v2)(this.clickPos.x, this.clickPos.y)));
                        this.lockTime = true;
                    }
                    // if(GameMgr.Instance.manorMode)
                    //     console.log(GameMgr.Instance.sceneMgr.checkAllPlotInPosNode(v2(this.clickPos.x, this.clickPos.y)));
                }
                this.clickTime -= dt;
            }
        };
        ClickRayCast_1.prototype.selectTop = function (results) {
            if (results && results.length > 0) {
                if (GameMgr_1.GameMgr.Instance.ConstructionState || (!GameMgr_1.GameMgr.Instance.ConstructionState && results[0].plotId == 0)) {
                    var furnitureMgr = results[0];
                    var canPut = furnitureMgr.clicked();
                    //console.log(canPut);
                    canPut && GameMgr_1.GameMgr.Instance.sceneMgr.checkShowMoveArrows(furnitureMgr);
                    SdkPlatform_1.SdkPlatform.furnitureClk("canPut:".concat(canPut, ",id:").concat(furnitureMgr.itemId, ",").concat(furnitureMgr.settlePos.x, "_").concat(furnitureMgr.settlePos.y, "_").concat(furnitureMgr.settlePos.room, ",type:").concat(furnitureMgr.type));
                }
                //     const furnitureMgr = results[0]
                //     if(furnitureMgr.plotId!=0)
                //     {
                //         furnitureMgr.baseClick();
                //     }else{
                //         const canPut = furnitureMgr.clicked();
                //         canPut && GameMgr.Instance.sceneMgr.checkShowMoveArrows(furnitureMgr);
                //         SdkPlatform.furnitureClk(`canPut:${canPut},id:${furnitureMgr.itemId},${furnitureMgr.settlePos.x}_${furnitureMgr.settlePos.y}_${furnitureMgr.settlePos.room},type:${furnitureMgr.type}`);
                //     }
                // }
            }
        };
        ClickRayCast_1.prototype.selectPlot = function (results) {
            if (results && results.length > 0) {
                var furnitureMgr = results[0];
                if (furnitureMgr.plotId != 0) {
                    furnitureMgr.baseClick();
                    return;
                }
            }
        };
        return ClickRayCast_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ClickRayCast");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ClickRayCast = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ClickRayCast = _classThis;
}();
exports.ClickRayCast = ClickRayCast;
// window.minPos = 0;
