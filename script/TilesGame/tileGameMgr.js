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
exports.tileGameMgr = exports.TileType = exports.JumpType = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../extensions/oops-plugin-framework/assets/core/Oops");
var Singleton_1 = require("../game/common/base/Singleton");
var GameEvent_1 = require("../game/common/config/GameEvent");
var HttpPost_1 = require("../game/tools/HttpPost");
var tile_1 = require("./tile");
var cc_2 = require("cc");
var EventReport_1 = require("../Global/EventReport");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var JumpType;
(function (JumpType) {
    JumpType[JumpType["idle"] = 0] = "idle";
    JumpType[JumpType["running"] = 1] = "running";
    JumpType[JumpType["end"] = 2] = "end";
})(JumpType || (exports.JumpType = JumpType = {}));
var TileType;
(function (TileType) {
    TileType[TileType["nomal"] = 1] = "nomal";
    TileType[TileType["mask"] = 2] = "mask";
})(TileType || (exports.TileType = TileType = {}));
var tileGameMgr = function () {
    var _classDecorators = [ccclass('tileGameMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Singleton_1.default;
    var tileGameMgr = _classThis = /** @class */ (function (_super) {
        __extends(tileGameMgr_1, _super);
        function tileGameMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pilePosParent = null;
            _this.animParrentNode = null;
            _this.removeAnimNode = null;
            _this.flyNode = null;
            _this.spine = null;
            // pileChildren: Node[] = [];
            _this.removeAnims = [];
            _this.nowIdx = 0;
            // result: number[] = [];
            /**1500毫秒 */
            _this.initTime = 1300;
            _this.targetPos = null;
            _this.allLayoutNode = [];
            _this.layers = [];
            _this.tilesDivByLayer = [];
            _this.guideStepList = [];
            _this._totalCount = 0;
            _this.isJump = false;
            _this.isIdle = false;
            _this.maskLen = 0;
            _this.maskCount = [];
            _this.colorCount = {};
            _this.isAni = false;
            _this.usingTool = false;
            _this.timeTool = 0;
            _this.tileWH = {
                width: 79,
                height: 100
            };
            /**掉落动画 */
            _this.fallingAnim = true;
            _this.maxPileNum = 7;
            return _this;
        }
        Object.defineProperty(tileGameMgr_1.prototype, "totalCount", {
            // eliminating: boolean;
            get: function () {
                return this._totalCount;
            },
            set: function (value) {
                this._totalCount = value;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshTileTotalNum);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(tileGameMgr_1, "Instance", {
            get: function () {
                return _super.GetInstance.call(this);
            },
            enumerable: false,
            configurable: true
        });
        tileGameMgr_1.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.tilesDivByLayer = [];
                    this.colorCount = {};
                    this.isAni = false;
                    this.layers = [];
                    this.allLayoutNode = [];
                    this.nowIdx = 0;
                    this.pilePosParent = null;
                    this.totalCount = 0;
                    this.maxPileNum = 7;
                    this.guideStepList = [16, 17, 18];
                    this.fallingAnim = true;
                    return [2 /*return*/];
                });
            });
        };
        //是否可提示
        tileGameMgr_1.prototype.checkGameEnd = function () {
            var unchosenTiles = [];
            var idx = this.tilesDivByLayer.length - 1;
            while (unchosenTiles.length <= 0 && idx >= 0) {
                var items = this.tilesDivByLayer[idx];
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var t = items_1[_i];
                    if (!t.isChooese) {
                        unchosenTiles.push(t);
                    }
                }
                idx--;
            }
            if (unchosenTiles.length <= 0) {
                // oops.logB("游戏应该结束了");
                this.usingTool = false;
                return false;
            }
            else {
                return true;
            }
        };
        // Define a method to get a random tile name for the hint feature
        tileGameMgr_1.prototype.getRandomTilePrompt = function () {
            return __awaiter(this, void 0, void 0, function () {
                var allPileTile, TilesDivByType, _i, allPileTile_1, i, maxNum, itemId, i, allTiles, unchosenTiles, idx, items, _a, items_2, t, randomIndex, i, item;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            allPileTile = this.pilePosParent.getComponentsInChildren(tile_1.tile);
                            TilesDivByType = {};
                            if (allPileTile.length > 0) {
                                for (_i = 0, allPileTile_1 = allPileTile; _i < allPileTile_1.length; _i++) {
                                    i = allPileTile_1[_i];
                                    if (!TilesDivByType[i.itemId]) {
                                        TilesDivByType[i.itemId] = [];
                                        TilesDivByType[i.itemId].push(i);
                                    }
                                    else {
                                        TilesDivByType[i.itemId].push(i);
                                    }
                                }
                            }
                            maxNum = 0;
                            itemId = 0;
                            for (i in TilesDivByType) {
                                if (maxNum < TilesDivByType[i].length) {
                                    maxNum = TilesDivByType[i].length;
                                    itemId = parseInt(i);
                                }
                            }
                            allTiles = [];
                            if (maxNum > 0) {
                                // if ((allPileTile.length + 3 - maxNum) > this.maxPileNum) {
                                //     // oops.logB("不够位置使用提示道具了");
                                //     this.usingTool = false;
                                //     return false;
                                // }
                                allTiles = allTiles.concat(TilesDivByType[itemId]);
                            }
                            else {
                                unchosenTiles = [];
                                idx = this.tilesDivByLayer.length - 1;
                                while (unchosenTiles.length <= 0 && idx >= 0) {
                                    items = this.tilesDivByLayer[idx];
                                    for (_a = 0, items_2 = items; _a < items_2.length; _a++) {
                                        t = items_2[_a];
                                        if (!t.isChooese) {
                                            unchosenTiles.push(t);
                                        }
                                    }
                                    idx--;
                                }
                                if (unchosenTiles.length <= 0) {
                                    // oops.logB("游戏应该结束了");
                                    this.usingTool = false;
                                    return [2 /*return*/, false];
                                }
                                randomIndex = Math.floor(Math.random() * unchosenTiles.length);
                                itemId = unchosenTiles[randomIndex].itemId;
                            }
                            allTiles = allTiles.concat(this.findTheSameTile(itemId));
                            i = maxNum;
                            _b.label = 1;
                        case 1:
                            if (!(i < 3)) return [3 /*break*/, 4];
                            item = allTiles[i];
                            item.resetSprite(true);
                            return [4 /*yield*/, this.flyToPos(item.node)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [4 /*yield*/, this.checkEliminatable()];
                        case 5:
                            _b.sent();
                            tileGameMgr.Instance.usingTool = false;
                            this.setGrayNode();
                            return [2 /*return*/, true];
                    }
                });
            });
        };
        /**找到同样的块 */
        tileGameMgr_1.prototype.findTheSameTile = function (itemID) {
            var Tiles = [];
            // Tiles.push(item);
            for (var i = this.tilesDivByLayer.length - 1; i >= 0; i--) {
                var items = this.tilesDivByLayer[i];
                for (var _i = 0, items_3 = items; _i < items_3.length; _i++) {
                    var t = items_3[_i];
                    if (t.itemId == itemID && !t.isChooese) {
                        Tiles.push(t);
                    }
                }
            }
            return Tiles;
        };
        /**初始化有多少个方块 */
        tileGameMgr_1.prototype.setTotalNum = function () {
            this.totalCount = 0;
            for (var i = 0; i < this.layers.length; i++) {
                for (var j = 0; j < this.layers[i].length; j++) {
                    for (var k = 0; k < this.layers[i][j].length; k++) {
                        if (this.layers[i][j][k] > 0) {
                            this.totalCount++;
                        }
                    }
                }
            }
        };
        tileGameMgr_1.prototype.getRandomColor = function () {
            var _this = this;
            var colors = Object.keys(this.colorCount).filter(function (id) { return _this.colorCount[parseInt(id)] > 0; }).map(function (id) { return parseInt(id); });
            if (colors.length === 0) {
                return null;
            }
            var totalWeight = 0;
            for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
                var color_1 = colors_1[_i];
                totalWeight += this.colorCount[color_1];
            }
            var randomWeight = Math.floor(Math.random() * totalWeight);
            var currentWeight = 0;
            for (var _a = 0, colors_2 = colors; _a < colors_2.length; _a++) {
                var color_2 = colors_2[_a];
                currentWeight += this.colorCount[color_2];
                if (randomWeight < currentWeight) {
                    this.colorCount[color_2]--;
                    return color_2;
                }
            }
            return null;
        };
        // 
        tileGameMgr_1.prototype.getRandTileColor = function (uniqueNums, totalLength) {
            var arr = Array.from({ length: totalLength }, function (_, i) { return i + 1; });
            var selectedIds = [];
            while (selectedIds.length < uniqueNums) {
                var randomIndex = Math.floor(Math.random() * arr.length);
                var randomId = arr[randomIndex];
                if (!selectedIds.includes(randomId)) {
                    selectedIds.push(randomId);
                }
            }
            return selectedIds;
        };
        tileGameMgr_1.prototype.setTypes = function () {
            var arr = Array.from({ length: this.totalCount }, function (_, i) { return 1; });
            var num = 0;
            while (num < this.maskLen) {
                var randomIndex = Math.floor(Math.random() * arr.length);
                if (arr[randomIndex] != TileType.mask) {
                    arr[randomIndex] = TileType.mask;
                    num++;
                }
            }
            this.maskCount = arr;
        };
        tileGameMgr_1.prototype.getRandomType = function () {
            var randomIndex = Math.floor(Math.random() * this.maskCount.length);
            return this.maskCount.splice(randomIndex, 1)[0];
        };
        // Define a method that takes a multidimensional array as a parameter
        tileGameMgr_1.prototype.setColors = function (getTypeNums, totalLength) {
            // let count = 0; // Record the number of 1s
            var selectedIds = this.getRandTileColor(getTypeNums, totalLength); // Store the color array
            // const colorCount: { [key: number]: number } = {};
            for (var _i = 0, selectedIds_1 = selectedIds; _i < selectedIds_1.length; _i++) {
                var id = selectedIds_1[_i];
                this.colorCount[id] = 0;
            }
            var count = 0;
            for (var _a = 0, selectedIds_2 = selectedIds; _a < selectedIds_2.length; _a++) {
                var colorId = selectedIds_2[_a];
                this.colorCount[colorId] += 3;
                count += 3;
            }
            while (count < this.totalCount) {
                var randomIndex = Math.floor(Math.random() * selectedIds.length);
                var randomId = selectedIds[randomIndex];
                if (this.colorCount[randomId] % 3 === 0) {
                    this.colorCount[randomId] += 3;
                    count += 3;
                }
                else if (this.colorCount[randomId] % 3 === 1) {
                    this.colorCount[randomId] += 2;
                    count += 2;
                }
                else {
                    this.colorCount[randomId] += 1;
                    count += 1;
                }
            }
        };
        // The above code generates an array of numbers from 1 to 50, and then randomly selects 24 unique numbers from that array. The selected numbers are stored in the selectedIds array.
        // checkTileClickable(layerIndex: number, row: number, col: number): boolean {
        //     return this.layers[layerIndex][row][col] === 1;
        //   }
        /**飞到目标子节点 */
        tileGameMgr_1.prototype.flyToPos = function (node, idx) {
            if (idx === void 0) { idx = this.nowIdx; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve) {
                            if (!node || !node.isValid) {
                                _this.usingTool = false;
                                _this.isIdle = false;
                                return;
                            }
                            var Tile = node.getComponent(tile_1.tile);
                            if (!Tile) {
                                _this.usingTool = false;
                                _this.isIdle = false;
                                return false;
                            }
                            Tile.gray(false);
                            Tile.isChooese = true;
                            var target = _this.pilePosParent.children[idx];
                            if (!target) {
                                _this.usingTool = false;
                                _this.isIdle = false;
                                return false;
                            }
                            var targetPos = target.getWorldPosition();
                            if (node.parent != _this.pilePosParent) {
                                var tempPos = node.getWorldPosition();
                                node.parent = _this.pilePosParent;
                                node.worldPosition = tempPos;
                                _this.isIdle = false;
                            }
                            _this.nowIdx++;
                            if (node.worldPosition.x == targetPos.x && node.worldPosition.y == targetPos.y) {
                                resolve();
                                return;
                            }
                            // node.setScale(new Vec3(1, 1, 1));
                            (0, cc_1.tween)(node)
                                .to(0.15, { worldPosition: targetPos, scale: new cc_1.Vec3(0.8, 0.8, 0.8) })
                                .call(function () {
                                resolve();
                            })
                                .start();
                        })];
                });
            });
        };
        /**检查是否能飞回原始位置节点 */
        tileGameMgr_1.prototype.canFlyBackToPos = function () {
            var Tile = this.pilePosParent.getComponentsInChildren(tile_1.tile)[this.nowIdx - 1];
            if (!Tile) {
                return false;
            }
            return true;
        };
        /**飞回原始位置节点 */
        tileGameMgr_1.prototype.flyBackToPos = function () {
            var _this = this;
            var Tile = this.pilePosParent.getComponentsInChildren(tile_1.tile)[this.nowIdx - 1];
            if (!Tile)
                return false;
            var node = Tile.node;
            this.nowIdx--;
            var tempPos = node.getWorldPosition();
            node.parent = this.allLayoutNode[Tile.zIdx];
            node.worldPosition = tempPos;
            (0, cc_1.tween)(node)
                .to(0.15, { worldPosition: Tile.originPos, scale: new cc_1.Vec3(1, 1, 1) })
                .call(function () {
                Tile.isChooese = false;
                _this.setGrayNode();
                Tile.resetSprite();
                // let tempPos = node.getWorldPosition();
                // node.worldPosition = tempPos;
                _this.Reorganize();
                _this.sortTiles(Tile.zIdx);
            })
                .start();
            return true;
        };
        /**排列层级 */
        tileGameMgr_1.prototype.sortTiles = function (zIdx) {
            var nodesToSort = [];
            for (var _i = 0, _a = this.allLayoutNode[zIdx].getComponentsInChildren(tile_1.tile); _i < _a.length; _i++) {
                var i = _a[_i];
                nodesToSort.push(i.node);
            }
            nodesToSort.sort(function (a, b) {
                var aName = parseInt(a.name);
                var bName = parseInt(b.name);
                if (aName < bName) {
                    return -1;
                }
                if (aName > bName) {
                    return 1;
                }
                return 0;
            });
            for (var i = 0; i < nodesToSort.length; i++) {
                nodesToSort[i].setSiblingIndex(i);
            }
        };
        /**检查是否可以消除 */
        tileGameMgr_1.prototype.checkEliminatable = function () {
            return __awaiter(this, void 0, void 0, function () {
                var flag, itemIds, _i, _a, i, countMap, _b, itemIds_1, id, allNeedRemove, countMapObj, _c, _d, _e, id, count, maxRemoveCount, nodesToRemove, _f, _g, i, _h, allNeedRemove_1, nodesToRemove, world;
                return __generator(this, function (_j) {
                    switch (_j.label) {
                        case 0:
                            flag = false;
                            itemIds = [];
                            if (this.isIdle) {
                            }
                            for (_i = 0, _a = this.pilePosParent.getComponentsInChildren(tile_1.tile).filter(function (i) { return !i.isRemoved; }); _i < _a.length; _i++) {
                                i = _a[_i];
                                itemIds.push(i.itemId);
                            }
                            countMap = new Map();
                            for (_b = 0, itemIds_1 = itemIds; _b < itemIds_1.length; _b++) {
                                id = itemIds_1[_b];
                                if (countMap.has(id)) {
                                    countMap.set(id, countMap.get(id) + 1);
                                }
                                else {
                                    countMap.set(id, 1);
                                }
                            }
                            this.Reorganize();
                            allNeedRemove = [];
                            countMapObj = {};
                            for (_c = 0, _d = countMap.entries(); _c < _d.length; _c++) {
                                _e = _d[_c], id = _e[0], count = _e[1];
                                countMapObj[id] = count;
                                if (count >= 3) {
                                    maxRemoveCount = 3;
                                    flag = true;
                                    nodesToRemove = [];
                                    for (_f = 0, _g = this.pilePosParent.getComponentsInChildren(tile_1.tile); _f < _g.length; _f++) {
                                        i = _g[_f];
                                        if (maxRemoveCount <= 0)
                                            break;
                                        if (i.itemId === id) {
                                            nodesToRemove.push(i.node);
                                            maxRemoveCount--;
                                        }
                                    }
                                    allNeedRemove.push(nodesToRemove);
                                    // if (tileGameMgr.Instance.totalCount == 3) {
                                    // HttpPost.instance.eventReport({ event: EVENT_REPORT.tileGameError, extra: { countMap: countMapObj } })
                                    // }
                                }
                            }
                            _h = 0, allNeedRemove_1 = allNeedRemove;
                            _j.label = 1;
                        case 1:
                            if (!(_h < allNeedRemove_1.length)) return [3 /*break*/, 4];
                            nodesToRemove = allNeedRemove_1[_h];
                            world = nodesToRemove[1].worldPosition;
                            return [4 /*yield*/, this.removeNodes(nodesToRemove)];
                        case 2:
                            _j.sent();
                            this.flyNodeTarget(world);
                            _j.label = 3;
                        case 3:
                            _h++;
                            return [3 /*break*/, 1];
                        case 4: return [4 /*yield*/, this.Reorganize()];
                        case 5:
                            _j.sent();
                            if (this.totalCount <= 0) {
                                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.TileGameWin);
                            }
                            this.checkLose();
                            return [2 /*return*/, flag];
                    }
                });
            });
        };
        tileGameMgr_1.prototype.checkLose = function () {
            var fail = false;
            if (this.pilePosParent.getComponentsInChildren(tile_1.tile).filter(function (i) { return !i.isRemoved; }).length >= this.maxPileNum) {
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.TileGameLose);
                fail = true;
            }
            if (this.totalCount == 3 && (this.pilePosParent.getComponentsInChildren(tile_1.tile).filter(function (i) { return !i.isRemoved; }).length == 3)) {
                var tileData = this.pilePosParent.getComponentsInChildren(tile_1.tile);
                var result = {};
                for (var i = 0; i < tileData.length; i++) {
                    result[tileData[i].itemId] = tileData[i].toObject();
                }
                HttpPost_1.HttpPost.instance.eventReport({ event: EventReport_1.EVENT_REPORT.tileGameError, extra: { errInfo: "小游戏无法错误", info: result, fail: fail } });
            }
        };
        tileGameMgr_1.prototype.removeNodes = function (nodesToRemove) {
            return __awaiter(this, void 0, void 0, function () {
                var promises;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            promises = nodesToRemove.map(function (node, index) { return node.getComponent(tile_1.tile).remove(_this, index); });
                            // console.log("node", nodesToRemove);
                            return [4 /*yield*/, Promise.all(promises)];
                        case 1:
                            // console.log("node", nodesToRemove);
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**重新规整pileParent下面所有的tile到指定位置，并重置当前最大的this.idx */
        tileGameMgr_1.prototype.Reorganize = function () {
            return __awaiter(this, void 0, void 0, function () {
                var nodesToReorganize, tmpArr, _i, tmpArr_1, i;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.nowIdx = 0;
                            nodesToReorganize = [];
                            tmpArr = this.customSort();
                            for (_i = 0, tmpArr_1 = tmpArr; _i < tmpArr_1.length; _i++) {
                                i = tmpArr_1[_i];
                                nodesToReorganize.push(i.node);
                            }
                            return [4 /*yield*/, Promise.all(nodesToReorganize.map(function (node) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.flyToPos(node)];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**整理元素 */
        tileGameMgr_1.prototype.customSort = function (arr) {
            // const count: { [key: number]: number } = {}; // 统计每个元素出现的次数
            // arr.forEach((v) => {
            //     count[v.itemId] = (count[v.itemId] || 0) + 1;
            // });
            if (arr === void 0) { arr = this.pilePosParent.getComponentsInChildren(tile_1.tile); }
            // const sortedCount = Object.entries(count)
            //     .sort((a, b) => b[1] - a[1])
            //     .map(([num, freq]) => Number(num)); // 按照出现次数降序排序
            // const result: tile[] = [];
            // sortedCount.forEach((num) => {
            //     const items = arr.filter((v) => v.itemId === num);
            //     result.push(...items);
            // });
            var count = {}; // 统计每个元素出现的次数
            arr.forEach(function (v) {
                count[v.itemId] = (count[v.itemId] || 0) + 1;
            });
            var sortedCount = Object.entries(count).sort(function (a, b) { return b[1] - a[1] || Number(a[0]) - Number(b[0]); }); // 按照出现次数和元素大小进行排序
            var result = [];
            sortedCount.forEach(function (_a) {
                var num = _a[0], freq = _a[1];
                var items = arr.filter(function (v) { return v.itemId === Number(num); });
                result.push.apply(result, items);
                // 或者使用下面的方式将重复项展开到结果数组中：
                // result.push(...(Array(freq).fill(items).flat()));
            });
            return result;
        };
        // /**变灰 */
        // setGrayNode() {
        //     for (let i = this.allLayoutNode.length - 1; i >= 0; i--) {
        //         // const element = array[index];
        //         for (const j of this.allLayoutNode[i].getComponentsInChildren(tile)) {
        //             j.gray(false);
        //         }
        //     }
        // }
        tileGameMgr_1.prototype.setGrayNode = function (itemWidth, itemHeight) {
            // this.tilesDivByLayer = 
            var _this = this;
            if (itemWidth === void 0) { itemWidth = this.tileWH.width; }
            if (itemHeight === void 0) { itemHeight = this.tileWH.height; }
            // 从后往前遍历, 因为最后添加的都在上面, 所以检查上面的区域是否被占了就ok
            var posMap = new Map();
            for (var i = this.tilesDivByLayer.length - 1; i >= 0; i--) {
                var items = this.tilesDivByLayer[i];
                var _loop_1 = function (item) {
                    if (!item.isChooese) {
                        // 检查是否有中心点重复的
                        var replicate_1 = false;
                        if (posMap.has(item.node.worldPosition)) {
                            replicate_1 = true;
                            item.gray(true);
                        }
                        else {
                            // 遍历检查是否有重叠部分的
                            posMap.forEach(function (_, key) {
                                if (_this.isReplicate(JSON.parse(key), item.node.worldPosition, itemWidth, itemHeight)) {
                                    replicate_1 = true;
                                    item.gray(true);
                                }
                            });
                            if (item.isValid)
                                posMap.set(JSON.stringify(item.node.worldPosition), true);
                        }
                        if (!replicate_1) {
                            item.gray(false);
                        }
                    }
                    else {
                    }
                };
                for (var _i = 0, items_4 = items; _i < items_4.length; _i++) {
                    var item = items_4[_i];
                    _loop_1(item);
                }
            }
        };
        // 检查是否重叠, 通过判断中心点的距离
        tileGameMgr_1.prototype.isReplicate = function (vec1, vec2, itemWidth, itemHeight) {
            //做容错处理itemWidth - 1
            return Math.abs(Math.floor(vec1.x) - Math.floor(vec2.x)) < (itemWidth - 1) && Math.abs(Math.floor(vec1.y) - Math.floor(vec2.y)) < itemHeight;
        };
        /**洗牌 */
        tileGameMgr_1.prototype.shuffle = function () {
            var allTiles = [];
            for (var _i = 0, _a = this.tilesDivByLayer; _i < _a.length; _i++) {
                var items = _a[_i];
                for (var _b = 0, items_5 = items; _b < items_5.length; _b++) {
                    var i = items_5[_b];
                    if (!i.isChooese) {
                        allTiles.push(i);
                    }
                }
            }
            // 随机交换所有的allTiles的sprite节点
            var len = allTiles.length;
            for (var i = 0; i < len; i++) {
                var randomIdx = Math.floor(Math.random() * len);
                // const tempSprite = allTiles[i].node.getChildByName("sprite")!.getComponent(Sprite)!.spriteFrame;
                var tempId = allTiles[i].itemId;
                var type = allTiles[i].type;
                // allTiles[i].node.getChildByName("sprite")!.getComponent(Sprite)!.spriteFrame = allTiles[randomIdx].node.getChildByName("sprite")!.getComponent(Sprite)!.spriteFrame;
                allTiles[i].itemId = allTiles[randomIdx].itemId;
                allTiles[i].type = allTiles[randomIdx].type;
                // allTiles[randomIdx].node.getComponentInChildren(Sprite)!.spriteFrame = tempSprite;
                allTiles[randomIdx].itemId = tempId;
                allTiles[randomIdx].type = type;
                allTiles[i].reset();
                allTiles[randomIdx].reset();
            }
        };
        tileGameMgr_1.prototype.resetAllTiles = function () {
        };
        tileGameMgr_1.prototype.flyNodeTarget = function (pos) {
            var _this = this;
            if (!pos) {
                return;
            }
            var fly = (0, cc_2.instantiate)(tileGameMgr.Instance.flyNode);
            fly.parent = this.pilePosParent;
            fly.setWorldPosition(pos);
            (0, cc_1.tween)(fly).to(0.4, { worldPosition: this.targetPos }).call(function () {
                var _a;
                (_a = fly.parent) === null || _a === void 0 ? void 0 : _a.removeChild(fly);
                _this.spine.setAnimation(0, "animation2", false);
                _this.spine.setCompleteListener(function () {
                    _this.spine.setAnimation(0, "animation", true);
                    _this.spine.setCompleteListener(function () {
                    });
                });
                fly.destroy();
            }).tag(101).start();
        };
        tileGameMgr_1.prototype.showRemoveAmi = function (pos) {
            var _loop_2 = function (i) {
                var spine = this_1.removeAnims[i];
                if (!spine.node.active) {
                    spine.node.active = true;
                    spine.node.setWorldPosition(pos);
                    spine.setAnimation(0, "animation", false);
                    spine.setCompleteListener(function () {
                        spine.node.active = false;
                        spine.setCompleteListener(function () {
                        });
                    });
                    return { value: void 0 };
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.removeAnims.length; i++) {
                var state_1 = _loop_2(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        };
        tileGameMgr_1.prototype.destroy = function () {
            tileGameMgr.Instance.init();
            tileGameMgr.Instance.animParrentNode = null;
            tileGameMgr.Instance.targetPos = null;
            tileGameMgr.Instance.spine = null;
            tileGameMgr.Instance.removeAnims.length = 0;
            tileGameMgr.Instance.removeAnimNode = null;
            tileGameMgr.Instance.flyNode = null;
        };
        return tileGameMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "tileGameMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        tileGameMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return tileGameMgr = _classThis;
}();
exports.tileGameMgr = tileGameMgr;
