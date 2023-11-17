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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloorsMgr = exports.maxMinPos = exports.gridWH = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var Vec3Util_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/Vec3Util");
var Singleton_1 = require("../../game/common/base/Singleton");
var GameMgr_1 = require("../../game/common/mgr/GameMgr");
var DataManager_1 = require("../../Global/DataManager");
var FurnitureEnum_1 = require("../furniture/FurnitureEnum");
// interface BlockState {
//     block: boolean;
//     floorBlock: boolean;
//     wallpaperBlock: boolean;
// }
exports.gridWH = {
    Hight: 83.01354,
    Wide: 137.74308,
};
/**大于这个值就是超出区域了 */
exports.maxMinPos = 2200;
var FloorsMgr = /** @class */ (function (_super) {
    __extends(FloorsMgr, _super);
    function FloorsMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.floorPosMap = new Map();
        _this.plotFloorPosMap = new Map();
        _this.activeSpriteFloor = [];
        return _this;
    }
    /**获取所有还可以放物品的格子 */
    FloorsMgr.prototype.getAllFloorMgrs = function () {
        var allFloors = Array.from(this.floorPosMap.values());
        return allFloors.filter(function (floorMgr) { return !floorMgr.block && !floorMgr.roleOnFurnitureMgr; });
    };
    //获取所有可以放种子的格子
    FloorsMgr.prototype.getAllPlotFloorMgrs = function () {
        var result = [];
        var allFloors = Array.from(this.plotFloorPosMap.values());
        allFloors.forEach(function (e) {
            if (!e.block && e.plotFurnitureMgr && DataManager_1.default.Instance.manorPlotState.get(e.plotFurnitureMgr.plotId).status == 0 && !DataManager_1.default.Instance.manorTempPlantData.has(e.plotFurnitureMgr.plotId)) {
                if (!DataManager_1.default.Instance.manorPlotState.get(e.plotFurnitureMgr.plotId).eventList.has(2) || DataManager_1.default.Instance.manorPlotState.get(e.plotFurnitureMgr.plotId).eventList.get(2).start_time > Oops_1.oops.timer.getServerTime())
                    result.push(e);
            }
        });
        return result;
    };
    //获取指定地块的引用
    FloorsMgr.prototype.getAimPlotFloorMgrs = function (plotId) {
        var result = null;
        var allFloors = Array.from(this.plotFloorPosMap.values());
        allFloors.forEach(function (e) {
            if (!e.block && e.plotFurnitureMgr && e.plotFurnitureMgr.plotId == plotId)
                result = e;
        });
        return result;
    };
    //获取所有已经解锁的土地
    FloorsMgr.prototype.getAllAblePlotFloorMgrs = function () {
        var allFloors = Array.from(this.plotFloorPosMap.values());
        return allFloors.filter(function (floorMgr) { return !floorMgr.block && floorMgr.plotFurnitureMgr && DataManager_1.default.Instance.manorPlotState.get(floorMgr.plotFurnitureMgr.plotId).status != 2; });
    };
    //获取所有解锁的庄园设施
    FloorsMgr.prototype.getAllAbleManorBuffFloorMgrs = function () {
        var allFloors = Array.from(this.plotFloorPosMap.values());
        return allFloors.filter(function (floorMgr) { return !floorMgr.block && (floorMgr.ManorBuffFurniture); });
    };
    //获取所有庄园土地和设施
    FloorsMgr.prototype.getAllHasPlantFloorsMgrs = function () {
        var allFloors = Array.from(this.plotFloorPosMap.values());
        return allFloors.filter(function (floorMgr) { return !floorMgr.block && (floorMgr.plotFurnitureMgr || floorMgr.ManorBuffFurniture); });
    };
    //获取所有庄园土地
    FloorsMgr.prototype.getAllPlotFloorsMgrs = function () {
        var allFloors = Array.from(this.plotFloorPosMap.values());
        return allFloors.filter(function (floorMgr) { return !floorMgr.block && floorMgr.plotFurnitureMgr; });
    };
    /**获取所有已经放物品的格子 */
    FloorsMgr.prototype.getAllFurnitureOnFloorMgrs = function () {
        var allFloors = Array.from(this.floorPosMap.values());
        return allFloors.filter(function (floorMgr) { return floorMgr.block; });
    };
    FloorsMgr.prototype.findFurnitureById = function (id) {
        var allBlockFloorsArray = this.getAllFurnitureOnFloorMgrs();
        var result = null;
        allBlockFloorsArray.forEach(function (e) {
            if (e.furnitureMgr && e.furnitureMgr.itemId && e.furnitureMgr.itemId == id && result == null)
                result = e.furnitureMgr;
        });
        return result;
    };
    FloorsMgr.prototype.findRandomFurnitureById = function (id) {
        var furnitureHasFurnitures = this.getAllFurnitureOnFloorMgrs().filter(function (i) { return i.furnitureMgr; });
        var furnitureList = furnitureHasFurnitures.filter(function (i) { return i.furnitureMgr.itemId == id && i.furnitureMgr.ifCanRoleOn(); });
        if (furnitureList.length) {
            var index = Math.floor(Math.random() * furnitureList.length);
            return furnitureList[index];
        }
        return null;
    };
    /**随机获取一个空位置 */
    FloorsMgr.prototype.getRandFloorMgr = function () {
        var allFloors = this.getAllFloorMgrs();
        var randIndex = Math.floor(Math.random() * allFloors.length);
        return allFloors[randIndex];
    };
    /**获取指定数量的空位置 */
    FloorsMgr.prototype.getRandFloorMgrs = function (num) {
        var allFloors = this.getAllFloorMgrs();
        if (allFloors.length < num) {
            return [];
        }
        var randFloorMgrs = [];
        for (var i = 0; i < num; i++) {
            var randIndex = Math.floor(Math.random() * allFloors.length);
            randFloorMgrs.push(allFloors[randIndex]);
            allFloors.splice(randIndex, 1);
        }
        return randFloorMgrs;
    };
    Object.defineProperty(FloorsMgr, "Instance", {
        get: function () {
            return _super.GetInstance.call(this);
        },
        enumerable: false,
        configurable: true
    });
    FloorsMgr.prototype.GetFloorByPos = function (pos) {
        try {
            if (typeof pos == "string") {
                return this.floorPosMap.get(pos);
            }
            var x = pos.x, y = pos.y, room = pos.room;
            return this.floorPosMap.get("".concat(x, "-").concat(y, "-").concat(room));
        }
        catch (error) {
            Oops_1.oops.log.trace("pos\uFF1A".concat(pos, " ") + error);
        }
    };
    FloorsMgr.prototype.GetPlotFloorByPos = function (pos) {
        try {
            if (typeof pos == "string") {
                return this.plotFloorPosMap.get(pos);
            }
            var x = pos.x, y = pos.y, room = pos.room;
            return this.plotFloorPosMap.get("".concat(x, "-").concat(y, "-").concat(room));
        }
        catch (error) {
            Oops_1.oops.log.trace("pos\uFF1A".concat(pos, " ") + error);
        }
    };
    FloorsMgr.prototype.CheckPos = function (data, furniture) {
        var flag = true;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var i = data_1[_i];
            var x = i.x, y = i.y, room = i.room;
            if (furniture.blockType == FurnitureEnum_1.BlockType.Plot || furniture.blockType == FurnitureEnum_1.BlockType.ManorBuff || (furniture.isPlotType)) {
                var floorMgr = this.GetPlotFloorByPos("".concat(x, "-").concat(y, "-").concat(room));
                if (!floorMgr) {
                    flag = false;
                    break;
                }
                else {
                    if (floorMgr.floorBlock) {
                        flag = false;
                    }
                }
            }
            else {
                var floorMgr = this.floorPosMap.get("".concat(x, "-").concat(y, "-").concat(room));
                if (!floorMgr) {
                    flag = false;
                    break;
                }
                if (floorMgr) {
                    switch (furniture.blockType) {
                        case FurnitureEnum_1.BlockType.FLOOR:
                            if (floorMgr.floorBlock) {
                                flag = false;
                            }
                            break;
                        case FurnitureEnum_1.BlockType.FLOORTILE:
                            if (floorMgr.canSetFloorTile && floorMgr.FloorTileBlock) {
                                flag = false;
                            }
                            break;
                        case FurnitureEnum_1.BlockType.WALLDECORATE:
                            if (i.x !== 1 && i.y !== 1) {
                                flag = false;
                                break;
                            }
                            if (furniture.direction == FurnitureEnum_1.FurnitureDirectionEnum.Left) {
                                if (floorMgr.leftWallDecorateBlock) {
                                    flag = false;
                                    break;
                                }
                            }
                            else if (furniture.direction == FurnitureEnum_1.FurnitureDirectionEnum.Right) {
                                if (floorMgr.rightWallDecorateBlock) {
                                    flag = false;
                                    break;
                                }
                            }
                            break;
                        case FurnitureEnum_1.BlockType.WALLPAPER:
                            if (i.x !== 1 && i.y !== 1) {
                                flag = false;
                                break;
                            }
                            if (furniture.direction == FurnitureEnum_1.FurnitureDirectionEnum.Left) {
                                if (floorMgr.leftWallPaperBlock && floorMgr.canSetWallPaper) {
                                    flag = false;
                                    break;
                                }
                            }
                            else if (furniture.direction == FurnitureEnum_1.FurnitureDirectionEnum.Right) {
                                if (floorMgr.rightWallPaperBlock && floorMgr.canSetWallPaper) {
                                    flag = false;
                                    break;
                                }
                            }
                            break;
                        case FurnitureEnum_1.BlockType.NORMAL:
                            if (floorMgr.block) {
                                flag = false;
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        return flag;
    };
    /**设置摆放数据 */
    FloorsMgr.prototype.SetFloorsBlock = function (data, flag, furniture) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        //console.log("SetFloorsBlock",flag,furniture.itemId,furniture.isPlotType);
        if (furniture.blockType == FurnitureEnum_1.BlockType.FLOORTILE) {
            if (this.CheckPos([furniture.settlePos], furniture)) {
                var i = furniture.settlePos;
                var floorMgr = this.floorPosMap.get("".concat(i.x, "-").concat(i.y, "-").concat(i.room));
                if (floorMgr) {
                    floorMgr.setFlagByType(flag, furniture);
                }
                if (!flag) {
                    DataManager_1.default.Instance.removeBlockByType("".concat(i.x, "-").concat(i.y, "-").concat(i.room), furniture);
                }
            }
            else if (flag == false) {
                var i = furniture.settlePos;
                var floorMgr = this.floorPosMap.get("".concat(i.x, "-").concat(i.y, "-").concat(i.room));
                if (floorMgr) {
                    floorMgr.setFlagByType(flag, furniture);
                }
                if (!flag) {
                    DataManager_1.default.Instance.removeBlockByType("".concat(i.x, "-").concat(i.y, "-").concat(i.room), furniture);
                }
            }
            return;
        }
        if (furniture.blockType == FurnitureEnum_1.BlockType.Plot || furniture.blockType == FurnitureEnum_1.BlockType.ManorBuff || (furniture.isPlotType && (furniture.blockType != FurnitureEnum_1.BlockType.Pet && furniture.blockType != FurnitureEnum_1.BlockType.Role))) {
            if (this.CheckPos([furniture.settlePos], furniture)) {
                //let i = furniture.settlePos;
                data.forEach(function (e) {
                    var floorMgr = _this.plotFloorPosMap.get("".concat(e.x, "-").concat(e.y, "-").concat(e.room));
                    if (floorMgr) {
                        floorMgr.setFlagByType(flag, furniture);
                    }
                    //不存在收回土地这种情况
                    if (!flag) {
                        DataManager_1.default.Instance.removePlotBlockByPos("".concat(e.x, "-").concat(e.y, "-").concat(e.room));
                    }
                });
            }
            else if (flag == false) {
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var i = data_2[_i];
                    var floorMgr = this.GetPlotFloorByPos("".concat(i.x, "-").concat(i.y, "-").concat(i.room));
                    if (floorMgr) {
                        floorMgr.setFlagByType(flag, furniture);
                    }
                    if (!flag) {
                        DataManager_1.default.Instance.removePlotBlockByPos("".concat(i.x, "-").concat(i.y, "-").concat(i.room));
                    }
                }
            }
            return;
        }
        if (furniture.isPlotType && (furniture.blockType == FurnitureEnum_1.BlockType.Pet || furniture.blockType == FurnitureEnum_1.BlockType.Role)) {
            if (this.CheckPos(data, furniture)) {
                data.forEach(function (e) {
                    var floorMgr = _this.GetPlotFloorByPos("".concat(e.x, "-").concat(e.y, "-").concat(e.room));
                    if (floorMgr) {
                        floorMgr.setFlagByType(flag, furniture);
                    }
                    if (!flag) {
                        DataManager_1.default.Instance.removePlotBlockByPos("".concat(e.x, "-").concat(e.y, "-").concat(e.room));
                    }
                });
                // for (const i of data) {
                // }
            }
            else if (flag == false) {
                for (var _a = 0, data_3 = data; _a < data_3.length; _a++) {
                    var i = data_3[_a];
                    var floorMgr = this.GetPlotFloorByPos("".concat(i.x, "-").concat(i.y, "-").concat(i.room));
                    if (floorMgr) {
                        floorMgr.setFlagByType(flag, furniture);
                    }
                    if (!flag) {
                        DataManager_1.default.Instance.removePlotBlockByPos("".concat(i.x, "-").concat(i.y, "-").concat(i.room));
                    }
                }
            }
        }
        // console.log("flag is",data,flag,furniture);
        if (this.CheckPos(data, furniture)) {
            data.forEach(function (e) {
                var floorMgr = _this.GetFloorByPos("".concat(e.x, "-").concat(e.y, "-").concat(e.room));
                if (floorMgr) {
                    floorMgr.setFlagByType(flag, furniture);
                }
                if (!flag) {
                    DataManager_1.default.Instance.removeBlockByType("".concat(e.x, "-").concat(e.y, "-").concat(e.room), furniture);
                }
            });
            // for (const i of data) {
            // }
        }
        else if (flag == false) {
            for (var _b = 0, data_4 = data; _b < data_4.length; _b++) {
                var i = data_4[_b];
                var floorMgr = this.GetFloorByPos("".concat(i.x, "-").concat(i.y, "-").concat(i.room));
                if (floorMgr) {
                    floorMgr.setFlagByType(flag, furniture);
                }
                if (!flag) {
                    DataManager_1.default.Instance.removeBlockByType("".concat(i.x, "-").concat(i.y, "-").concat(i.room), furniture);
                }
            }
        }
    };
    /**检查所有的显示节点是否可放置 */
    FloorsMgr.prototype.CheckAllFloorSpritePassable = function () {
        var flag = true;
        for (var _i = 0, _a = this.activeSpriteFloor; _i < _a.length; _i++) {
            var floorMgr = _a[_i];
            if (!floorMgr.isBlue()) {
                flag = false;
                break;
            }
        }
        return flag;
    };
    /**隐藏所有的显示节点 */
    FloorsMgr.prototype.HideAllFloorSprite = function () {
        this.activeSpriteFloor.forEach(function (floorMgr) {
            floorMgr.hideSprite();
        });
        this.activeSpriteFloor = [];
    };
    FloorsMgr.prototype.checkPlotSpritesColor = function (furniture) {
        var _a, _b;
        var flag = true;
        switch (furniture.blockType) {
            case FurnitureEnum_1.BlockType.NORMAL:
            case FurnitureEnum_1.BlockType.Pet:
            case FurnitureEnum_1.BlockType.Role:
            case FurnitureEnum_1.BlockType.ManorBuff:
            case FurnitureEnum_1.BlockType.Plot:
                for (var _i = 0, _c = furniture.blockPos; _i < _c.length; _i++) {
                    var pos = _c[_i];
                    if (!((_a = this.GetPlotFloorByPos(pos)) === null || _a === void 0 ? void 0 : _a.checkSpriteColor(furniture)))
                        flag = false;
                }
                for (var _d = 0, _e = furniture.blockPos; _d < _e.length; _d++) {
                    var pos = _e[_d];
                    (_b = this.GetPlotFloorByPos(pos)) === null || _b === void 0 ? void 0 : _b.setSpriteCan(flag);
                }
                break;
            case FurnitureEnum_1.BlockType.FLOORTILE:
            case FurnitureEnum_1.BlockType.WALLDECORATE:
            case FurnitureEnum_1.BlockType.WALLPAPER:
            case FurnitureEnum_1.BlockType.FLOOR:
                flag = false;
                break;
        }
        return flag;
    };
    /**检查地面 */
    FloorsMgr.prototype.checkSpritesColor = function (furniture) {
        var _a, _b, _c, _d, _e, _f, _g;
        var flag = true;
        switch (furniture.blockType) {
            case FurnitureEnum_1.BlockType.Pet:
            case FurnitureEnum_1.BlockType.Role:
                if (!((_a = this.GetFloorByPos(furniture.settlePos)) === null || _a === void 0 ? void 0 : _a.checkSpriteColor(furniture))) {
                    flag = false;
                }
                else {
                    // if (!this.GetPlotFloorByPos(furniture.settlePos)?.checkSpriteColor(furniture)) {
                    //     flag = false;
                    // } 
                }
                break;
            case FurnitureEnum_1.BlockType.FLOORTILE:
                if (!((_b = this.GetFloorByPos(furniture.settlePos)) === null || _b === void 0 ? void 0 : _b.checkSpriteColor(furniture))) {
                    flag = false;
                }
                else {
                }
                for (var _i = 0, _h = furniture.blockPos; _i < _h.length; _i++) {
                    var pos = _h[_i];
                    (_c = this.GetFloorByPos(pos)) === null || _c === void 0 ? void 0 : _c.setSpriteCan(flag);
                }
                break;
            case FurnitureEnum_1.BlockType.WALLPAPER:
                if (!((_d = this.GetFloorByPos(furniture.settlePos)) === null || _d === void 0 ? void 0 : _d.checkSpriteColor(furniture))) {
                    flag = false;
                }
                else {
                }
                for (var _j = 0, _k = furniture.blockPos; _j < _k.length; _j++) {
                    var pos = _k[_j];
                    (_e = this.GetFloorByPos(pos)) === null || _e === void 0 ? void 0 : _e.setSpriteCan(flag);
                }
                break;
            default:
                for (var _l = 0, _m = furniture.blockPos; _l < _m.length; _l++) {
                    var pos = _m[_l];
                    if (!((_f = this.GetFloorByPos(pos)) === null || _f === void 0 ? void 0 : _f.checkSpriteColor(furniture)))
                        flag = false;
                }
                for (var _o = 0, _p = furniture.blockPos; _o < _p.length; _o++) {
                    var pos = _p[_o];
                    (_g = this.GetFloorByPos(pos)) === null || _g === void 0 ? void 0 : _g.setSpriteCan(flag);
                }
                break;
        }
        return flag;
    };
    FloorsMgr.prototype.backtrackingPlot = function (furnitureMgr) {
        var flag = false;
        //首先查看默认的能不能放？
        var settlePos = { x: 1, y: 12, room: 0, dis: 0 };
        if (furnitureMgr.updatePos(settlePos, FurnitureEnum_1.TouchState.TouchEnd, furnitureMgr.isPlotType)) {
            flag = true;
        }
        if (!flag) {
            //进行查找
            //遍历规则变成从中心点向周围查找
            //1先获取屏幕中心点
            var gameCanvas = cc_1.view.getVisibleSize();
            var centerPos = new cc_1.Vec3(gameCanvas.width / 2, gameCanvas.height / 2);
            var arr = [];
            var roomSize = GameMgr_1.GameMgr.Instance.sceneMgr.plotsSize[0];
            for (var i_1 = 1; i_1 <= roomSize.x; i_1++) {
                for (var j = 1; j <= roomSize.y; j++) {
                    var settlePos_1 = { x: i_1, y: j, room: 0, dis: 0 };
                    settlePos_1.dis = Vec3Util_1.Vec3Util.distance(centerPos, this.GetPlotFloorByPos(settlePos_1).node.worldPosition);
                    arr.push(settlePos_1);
                }
            }
            arr.sort(function (a, b) { return a.dis - b.dis; });
            /**默认转向 */
            furnitureMgr.setRotate(FurnitureEnum_1.FurnitureDirectionEnum.Left);
            for (var i = 0; i < arr.length; i++) {
                if (furnitureMgr.updatePos({ x: arr[i].x, y: arr[i].y, room: arr[i].room }, FurnitureEnum_1.TouchState.TouchEnd, furnitureMgr.isPlotType)) {
                    flag = true;
                    break;
                }
                if (flag)
                    break;
            }
        }
        return flag;
    };
    /**
     * 回溯算法，查找可放置家具的位置
     * @param x 家具占用x的位置
     * @param y 家具占用y的位置
     * @returns 可放置家具的位置数组
     */
    FloorsMgr.prototype.backtracking = function (furnitureMgr) {
        var flag = false;
        if (furnitureMgr.blockType == FurnitureEnum_1.BlockType.WALLPAPER) {
            return this.backtrackingWallPaper(furnitureMgr);
        }
        //遍历规则变成从中心点向周围查找
        //1先获取屏幕中心点
        var gameCanvas = cc_1.view.getVisibleSize();
        var centerPos = new cc_1.Vec3(gameCanvas.width / 2, gameCanvas.height / 2);
        var arr = [];
        if (GameMgr_1.GameMgr.Instance.manorMode && (furnitureMgr.blockType == FurnitureEnum_1.BlockType.Plot || furnitureMgr.blockType == FurnitureEnum_1.BlockType.ManorBuff)) {
            var roomSize = GameMgr_1.GameMgr.Instance.sceneMgr.plotsSize[0];
            for (var i_2 = 1; i_2 <= roomSize.x; i_2++) {
                for (var j = 1; j <= roomSize.y; j++) {
                    var settlePos = { x: i_2, y: j, room: 0, dis: 0 };
                    settlePos.dis = Vec3Util_1.Vec3Util.distance(centerPos, this.GetPlotFloorByPos(settlePos).node.worldPosition);
                    arr.push(settlePos);
                }
            }
            arr.sort(function (a, b) { return a.dis - b.dis; });
            /**默认转向 */
            furnitureMgr.setRotate(FurnitureEnum_1.FurnitureDirectionEnum.Left);
            for (var i = 0; i < arr.length; i++) {
                if (furnitureMgr.updatePos({ x: arr[i].x, y: arr[i].y, room: arr[i].room }, FurnitureEnum_1.TouchState.TouchEnd, furnitureMgr.isPlotType)) {
                    flag = true;
                    break;
                }
                if (flag)
                    break;
            }
        }
        else {
            for (var key in GameMgr_1.GameMgr.Instance.sceneMgr.posParant) {
                if (!GameMgr_1.GameMgr.Instance.sceneMgr.posParant[key].active) {
                    break;
                }
                var roomSize = GameMgr_1.GameMgr.Instance.sceneMgr.roomSize[parseInt(key)];
                for (var i_3 = 1; i_3 <= roomSize.x; i_3++) {
                    for (var j = 1; j <= roomSize.y; j++) {
                        var settlePos = { x: i_3, y: j, room: parseInt(key), dis: 0 };
                        settlePos.dis = Vec3Util_1.Vec3Util.distance(centerPos, this.GetFloorByPos(settlePos).node.worldPosition);
                        arr.push(settlePos);
                    }
                }
            }
            arr.sort(function (a, b) { return a.dis - b.dis; });
            /**默认转向 */
            furnitureMgr.setRotate(FurnitureEnum_1.FurnitureDirectionEnum.Left);
            for (var i = 0; i < arr.length; i++) {
                if (furnitureMgr.updatePos({ x: arr[i].x, y: arr[i].y, room: arr[i].room }, FurnitureEnum_1.TouchState.TouchEnd, furnitureMgr.isPlotType)) {
                    flag = true;
                    break;
                }
                if (flag)
                    break;
            }
            if (!flag) {
                furnitureMgr.setRotate();
                for (var i = 0; i < arr.length; i++) {
                    if (furnitureMgr.updatePos({ x: arr[i].x, y: arr[i].y, room: arr[i].room }, FurnitureEnum_1.TouchState.TouchEnd, furnitureMgr.isPlotType)) {
                        flag = true;
                        break;
                    }
                    if (flag)
                        break;
                }
            }
        }
        var leftFloors = FloorsMgr.Instance.getAllFloorMgrs().length;
        if (leftFloors - (furnitureMgr.size.xH * furnitureMgr.size.yW) < 3 && furnitureMgr.blockType == FurnitureEnum_1.BlockType.NORMAL) {
            Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.need3Pos"));
            flag = false;
        }
        else if (!flag) {
            Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.cannotPutAnything"));
        }
        return flag;
    };
    /**
     * 回溯算法，查找可放置家具的位置
     * @param x 家具占用x的位置
     * @param y 家具占用y的位置
     * @returns 可放置家具的位置数组
     */
    FloorsMgr.prototype.backtrackingWallPaper = function (furnitureMgr) {
        var flag = false;
        for (var key in GameMgr_1.GameMgr.Instance.sceneMgr.posParant) {
            if (!GameMgr_1.GameMgr.Instance.sceneMgr.posParant[key].active) {
                break;
            }
            /**默认转向 */
            furnitureMgr.setRotate(FurnitureEnum_1.FurnitureDirectionEnum.Right);
            var roomSize = GameMgr_1.GameMgr.Instance.sceneMgr.roomSize[parseInt(key)];
            for (var j = 1; j <= roomSize.y; j++) {
                var settlePos = { x: 1, y: j, room: parseInt(key) };
                if (furnitureMgr.updatePos(settlePos, FurnitureEnum_1.TouchState.TouchEnd, furnitureMgr.isPlotType)) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                furnitureMgr.setRotate(FurnitureEnum_1.FurnitureDirectionEnum.Left);
                for (var i = 1; i <= roomSize.x; i++) {
                    // for (let j = 1; j <= roomSize.y; j++) {
                    var settlePos = { x: i, y: 1, room: parseInt(key) };
                    if (furnitureMgr.updatePos(settlePos, FurnitureEnum_1.TouchState.TouchEnd, furnitureMgr.isPlotType)) {
                        flag = true;
                        break;
                    }
                }
            }
            if (flag)
                break;
        }
        var leftFloors = FloorsMgr.Instance.getAllFloorMgrs().length;
        if (leftFloors - (furnitureMgr.size.xH * furnitureMgr.size.yW) < 3 && furnitureMgr.blockType == FurnitureEnum_1.BlockType.NORMAL) {
            Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.need3Pos"));
            flag = false;
        }
        else if (!flag) {
            Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.cannotPutAnything"));
        }
        return flag;
    };
    FloorsMgr.prototype.checkCanPutOn = function (furniture) {
        var _a, _b, _c, _d, _e;
        var flag = true;
        switch (furniture.blockType) {
            case FurnitureEnum_1.BlockType.Pet:
            case FurnitureEnum_1.BlockType.Role:
                if (!((_a = this.GetFloorByPos(furniture.settlePos)) === null || _a === void 0 ? void 0 : _a.checkCanPutOn(furniture))) {
                    flag = false;
                }
                break;
            case FurnitureEnum_1.BlockType.FLOORTILE:
                if (!((_b = this.GetFloorByPos(furniture.settlePos)) === null || _b === void 0 ? void 0 : _b.checkCanPutOn(furniture))) {
                    flag = false;
                }
                break;
            case FurnitureEnum_1.BlockType.WALLPAPER:
                if (!((_c = this.GetFloorByPos(furniture.settlePos)) === null || _c === void 0 ? void 0 : _c.checkCanPutOn(furniture))) {
                    flag = false;
                }
                break;
            case FurnitureEnum_1.BlockType.ManorBuff:
            case FurnitureEnum_1.BlockType.Plot:
                if (!((_d = this.GetPlotFloorByPos(furniture.settlePos)) === null || _d === void 0 ? void 0 : _d.checkCanPutOn(furniture))) {
                    flag = false;
                }
                break;
            default:
                for (var _i = 0, _f = furniture.blockPos; _i < _f.length; _i++) {
                    var pos = _f[_i];
                    if (!((_e = this.GetFloorByPos(pos)) === null || _e === void 0 ? void 0 : _e.checkCanPutOn(furniture)))
                        flag = false;
                }
                break;
        }
        return flag;
    };
    return FloorsMgr;
}(Singleton_1.default));
exports.FloorsMgr = FloorsMgr;
