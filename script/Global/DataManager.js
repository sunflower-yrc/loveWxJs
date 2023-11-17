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
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("../game/common/base/Singleton");
var Oops_1 = require("../../../extensions/oops-plugin-framework/assets/core/Oops");
var FurnitureEnum_1 = require("../Entity/furniture/FurnitureEnum");
var FurnitureVO_1 = require("../Entity/furniture/FurnitureVO");
var HttpPost_1 = require("../game/tools/HttpPost");
var ViewUtil_1 = require("../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameMgr_1 = require("../game/common/mgr/GameMgr");
var FurnitureMgr_1 = require("../Entity/furniture/FurnitureMgr");
var BundleConfig_1 = require("../game/common/bundle/BundleConfig");
var SingletonModuleComp_1 = require("../game/common/ecs/SingletonModuleComp");
var GameEvent_1 = require("../game/common/config/GameEvent");
var GameUIConfig_1 = require("../game/common/config/GameUIConfig");
var DataObject_1 = require("../game/tools/DataObject");
var ObjectUtil_1 = require("../../../extensions/oops-plugin-framework/assets/core/utils/ObjectUtil");
var Collection_1 = require("../../../extensions/oops-plugin-framework/assets/libs/collection/Collection");
var DataMgr_1 = require("../game/mgr/DataMgr");
var TypeGlobalData_1 = require("../game/common/tableData/TypeGlobalData");
var TriggerData_1 = require("../game/common/tableData/TriggerData");
var DropMgr_1 = require("../game/mgr/DropMgr");
var EventData_1 = require("../game/common/tableData/EventData");
var FurnitureData_1 = require("../game/common/tableData/FurnitureData");
var OutEventData_1 = require("../game/common/tableData/OutEventData");
var StringUtil_1 = require("../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var EventTriggerData_1 = require("../game/businessEvent/EventTriggerData");
var FloorsMgr_1 = require("../Entity/floor/FloorsMgr");
var SceneEnum_1 = require("../Entity/scene/SceneEnum");
var ManorFacilitiesData_1 = require("../game/manor/ManorFacilitiesData");
var ManorPlantData_1 = require("../game/manor/ManorPlantData");
var EventReport_1 = require("./EventReport");
var DataManager = /** @class */ (function (_super) {
    __extends(DataManager, _super);
    function DataManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.feedbackDataFurnitureOwnedData = null;
        _this.outsideFurnitureFeedBackData = null;
        _this.feedbackDataDressOwnedData = null;
        _this.manorSeedBagData = new Collection_1.Collection();
        _this.manorPlotState = new Collection_1.Collection();
        _this.manorFanciData = new Collection_1.Collection();
        _this.manorTempPlantData = new Collection_1.Collection();
        _this.prefabMap = new Map();
        _this.textureMap = new Map();
        /**当前选择的章节 */
        _this.curChapter = "1";
        /**路由数据 */
        _this.routers = [];
        /**是否是搬家，用于重新解析数据时判断是否需要放入背包 */
        _this.isMoveHouse = false;
        // 新增房间管理
        _this.roomMap = new Map();
        _this.goToFuncData = null;
        return _this;
    }
    Object.defineProperty(DataManager, "Instance", {
        get: function () {
            return _super.GetInstance.call(this);
        },
        enumerable: false,
        configurable: true
    });
    //二次跳转管控（处理从庄园出发的跳转）
    DataManager.prototype.goToFuncSecond = function () {
        if (this.goToFuncData != null) {
            DataMgr_1.DataMgr.gotoFunction(this.goToFuncData[0], this.goToFuncData[1]);
            this.goToFuncData = null;
        }
    };
    DataManager.prototype.getRoom = function (roomName, needInit) {
        if (needInit === void 0) { needInit = false; }
        roomName = roomName !== null && roomName !== void 0 ? roomName : this.curChapter;
        //console.log(this.roomMap);
        var room = this.roomMap.get(roomName);
        if (!room && needInit) {
            this.init(roomName);
        }
        return this.roomMap.get(roomName);
    };
    DataManager.prototype.init = function (roomName) {
        roomName = roomName !== null && roomName !== void 0 ? roomName : this.curChapter;
        this.roomMap.set(roomName, {
            blockPosMap: new Map(),
            floorBlockPosMap: new Map(),
            wallpaperBlockPosMap: new Map(),
            plotBlockPosMap: new Map()
        });
    };
    DataManager.prototype.copy = function (roomName) {
        var result = { blockPosMap: {}, floorBlockPosMap: {}, wallpaperBlockPosMap: {}, plotBlockPosMap: {} };
        var room = this.getRoom(roomName);
        //console.log(room,roomName)
        if (room) {
            if (room.blockPosMap.size > 0) {
                for (var _i = 0, _a = room.blockPosMap.entries(); _i < _a.length; _i++) {
                    var _b = _a[_i], pos = _b[0], vo = _b[1];
                    result.blockPosMap[pos] = { id: vo.id, direction: vo.direction };
                }
            }
            if (room.floorBlockPosMap.size > 0) {
                for (var _c = 0, _d = room.floorBlockPosMap.entries(); _c < _d.length; _c++) {
                    var _e = _d[_c], pos = _e[0], vo = _e[1];
                    result.floorBlockPosMap[pos] = { id: vo.id, direction: vo.direction };
                }
            }
            if (room.wallpaperBlockPosMap.size > 0) {
                for (var _f = 0, _g = room.wallpaperBlockPosMap.entries(); _f < _g.length; _f++) {
                    var _h = _g[_f], pos = _h[0], vo = _h[1];
                    result.wallpaperBlockPosMap[pos] = { id: vo.id, direction: vo.direction, offsetY: vo.offsetY };
                }
            }
            if (room.plotBlockPosMap.size > 0) {
                for (var _j = 0, _k = room.plotBlockPosMap.entries(); _j < _k.length; _j++) {
                    var _l = _k[_j], pos = _l[0], vo = _l[1];
                    result.plotBlockPosMap[pos] = { id: vo.id, direction: vo.direction, land_id: vo.land_id };
                }
            }
        }
        return result;
    };
    /**初始化庄园 */
    DataManager.prototype.initManor = function (serverData) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var i, i, i_1, element, item, id, main, second, map, value, valueAll;
            var _this = this;
            return __generator(this, function (_b) {
                this.manorPlotState = new Collection_1.Collection();
                ManorFacilitiesData_1.ManorFacilitiesData.getAllPlotData().forEach(function (e) {
                    _this.manorPlotState.set(e.id, new DataObject_1.PlotState(e.id, 2, 0, 0, 0, 0, [], 0));
                });
                for (i = 0; i < serverData.manorLand.length; i++) {
                    this.manorPlotState.get(serverData.manorLand[i].land_id).status = serverData.manorLand[i].status;
                    this.manorPlotState.get(serverData.manorLand[i].land_id).seed_id = serverData.manorLand[i].seed_id;
                    this.manorPlotState.get(serverData.manorLand[i].land_id).updateTime = serverData.manorLand[i].update_time;
                    this.manorPlotState.get(serverData.manorLand[i].land_id).watering_cd = serverData.manorLand[i].watering_cd;
                    this.manorPlotState.get(serverData.manorLand[i].land_id).watering_status = serverData.manorLand[i].watering_status;
                    this.manorPlotState.get(serverData.manorLand[i].land_id).updateEvent(serverData.manorLand[i].eventList);
                    this.manorPlotState.get(serverData.manorLand[i].land_id).maturetion_time = serverData.manorLand[i].maturetion_time;
                }
                //初始化庄园设施
                this.manorFanciData = new Collection_1.Collection();
                for (i = 0; i < serverData.buffList.length; i++) {
                    this.manorFanciData.set(serverData.buffList[i].buff_id, serverData.buffList[i].level);
                }
                //是否初始化背包？
                if (serverData.furnitureBackpack) {
                    DataManager.Instance.setGloalFurnitureData();
                    for (i_1 = 0; i_1 < serverData.furnitureBackpack.length; i_1++) {
                        element = serverData.furnitureBackpack[i_1];
                        item = new DataObject_1.DecorateOwnedData();
                        id = element.id;
                        item.furnitureData = new FurnitureData_1.FurnitureData(id);
                        item.lineupCount = element.lineupCount;
                        item.leftAmount = element.leftAmount;
                        item.isNew = DataMgr_1.DataMgr.getDecorateNewState(DataObject_1.DropType.Furniture, id);
                        main = item.furnitureData.valueType;
                        second = item.furnitureData.furnitureType;
                        map = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData.get(main);
                        value = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData.get(main).get(second);
                        value.push(item);
                        map.set(second, value);
                        SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData.set(main, map);
                        valueAll = (_a = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData.get(main)) === null || _a === void 0 ? void 0 : _a.get(0);
                        valueAll === null || valueAll === void 0 ? void 0 : valueAll.push(item);
                        //家具套装列表
                        if (item.furnitureData.furnitureSuit > 0) {
                            SingletonModuleComp_1.smc.account.AccountModel.furnitureSuitList.push(id);
                        }
                    }
                }
                if (serverData.moneyTreeTime)
                    SingletonModuleComp_1.smc.account.AccountModel.manorTreeLastGetTime = serverData.moneyTreeTime;
                return [2 /*return*/];
            });
        });
    };
    //更新设施
    DataManager.prototype.updateManorBuff = function (buffList) {
        for (var i = 0; i < buffList.length; i++) {
            this.manorFanciData.set(buffList[i].buff_id, buffList[i].level);
        }
        if (GameMgr_1.GameMgr.Instance.manorMode) {
            //更新所有的土地view
            FloorsMgr_1.FloorsMgr.Instance.getAllAbleManorBuffFloorMgrs().forEach(function (e) {
                if (e && e.ManorBuffFurniture)
                    e.ManorBuffFurniture.updatePlotState();
            });
        }
    };
    //更新摇钱树状态
    DataManager.prototype.updateManorTreeState = function () {
        FloorsMgr_1.FloorsMgr.Instance.getAllAbleManorBuffFloorMgrs().find(function (x) { return x.ManorBuffFurniture.plotId == 4001; }).ManorBuffFurniture.updatePlotState();
    };
    //更新土地
    DataManager.prototype.updatePlotState = function (manorLand) {
        for (var i = 0; i < manorLand.length; i++) {
            this.manorPlotState.get(manorLand[i].land_id).status = manorLand[i].status;
            this.manorPlotState.get(manorLand[i].land_id).seed_id = manorLand[i].seed_id;
            this.manorPlotState.get(manorLand[i].land_id).updateTime = manorLand[i].update_time;
            this.manorPlotState.get(manorLand[i].land_id).watering_cd = manorLand[i].watering_cd;
            this.manorPlotState.get(manorLand[i].land_id).watering_status = manorLand[i].watering_status;
            this.manorPlotState.get(manorLand[i].land_id).updateEvent(manorLand[i].eventList);
            this.manorPlotState.get(manorLand[i].land_id).maturetion_time = manorLand[i].maturetion_time;
        }
        if (GameMgr_1.GameMgr.Instance.manorMode) {
            //更新所有的土地view
            FloorsMgr_1.FloorsMgr.Instance.getAllAblePlotFloorMgrs().forEach(function (e) {
                if (e && e.plotFurnitureMgr)
                    e.plotFurnitureMgr.updatePlotState();
            });
        }
    };
    /**搬家  */
    DataManager.prototype.moveHouse = function (from, to) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var fromKey, toKey, empty, oldData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isMoveHouse = true;
                        fromKey = from.toString();
                        toKey = to.toString();
                        empty = { blockPosMap: {}, floorBlockPosMap: {}, wallpaperBlockPosMap: {}, plotBlockPosMap: {} };
                        oldData = (_a = this.roomMap.get(fromKey)) !== null && _a !== void 0 ? _a : empty;
                        this.roomMap.set(toKey, oldData);
                        // await this.uploadData(to + "");
                        // await this.uploadData(from + "");
                        return [4 /*yield*/, this.uploadData({ to: to, from: from })];
                    case 1:
                        // await this.uploadData(to + "");
                        // await this.uploadData(from + "");
                        _b.sent();
                        this.init(from + "");
                        return [2 /*return*/, Promise.resolve(true)];
                }
            });
        });
    };
    DataManager.prototype.getBlockByPos = function (pos, roomName) {
        var _a;
        var x = pos.x, y = pos.y, room = pos.room;
        return (_a = this.getRoom(roomName)) === null || _a === void 0 ? void 0 : _a.blockPosMap.get("".concat(x, "-").concat(y, "-").concat(room));
    };
    DataManager.prototype.setBlcokByPos = function (pos, vo, roomName) {
        var _a;
        var x = pos.x, y = pos.y, room = pos.room;
        (_a = this.getRoom(roomName, true)) === null || _a === void 0 ? void 0 : _a.blockPosMap.set("".concat(x, "-").concat(y, "-").concat(room), vo);
    };
    DataManager.prototype.setFloorBlcokByPos = function (pos, vo, isFloorTile, roomName) {
        var _a;
        if (isFloorTile === void 0) { isFloorTile = false; }
        var x = pos.x, y = pos.y, room = pos.room;
        (_a = this.getRoom(roomName, true)) === null || _a === void 0 ? void 0 : _a.floorBlockPosMap.set("".concat(x, "-").concat(y, "-").concat(room).concat(isFloorTile ? "_0" : ""), vo);
    };
    DataManager.prototype.setWallpaperBlockByPos = function (pos, vo, isPaper, roomName) {
        var _a;
        if (isPaper === void 0) { isPaper = false; }
        var x = pos.x, y = pos.y, room = pos.room;
        (_a = this.getRoom(roomName, true)) === null || _a === void 0 ? void 0 : _a.wallpaperBlockPosMap.set("".concat(x, "-").concat(y, "-").concat(room, "_").concat(vo.direction == FurnitureEnum_1.FurnitureDirectionEnum.Right ? 1 : 0).concat(isPaper ? "_0" : ""), vo);
    };
    DataManager.prototype.setPlotBlcokByPos = function (pos, vo, roomName) {
        var _a;
        var x = pos.x, y = pos.y, room = pos.room;
        (_a = this.getRoom(roomName, true)) === null || _a === void 0 ? void 0 : _a.plotBlockPosMap.set("".concat(x, "-").concat(y, "-").concat(room), vo);
    };
    DataManager.prototype.removePlotBlockByPos = function (pos, roomName) {
        var _a;
        return (_a = this.getRoom(roomName)) === null || _a === void 0 ? void 0 : _a.plotBlockPosMap.delete(pos);
    };
    DataManager.prototype.removeBlockByPos = function (pos, roomName) {
        var _a;
        return (_a = this.getRoom(roomName)) === null || _a === void 0 ? void 0 : _a.blockPosMap.delete(pos);
    };
    DataManager.prototype.removeFloorBlockByPos = function (pos, isFloorTile, roomName) {
        var _a;
        if (isFloorTile === void 0) { isFloorTile = false; }
        return (_a = this.getRoom(roomName)) === null || _a === void 0 ? void 0 : _a.floorBlockPosMap.delete("".concat(pos).concat(isFloorTile ? "_0" : ""));
    };
    DataManager.prototype.removeWallpaperBlockByPos = function (pos, direction, isPaper, roomName) {
        var _a;
        if (isPaper === void 0) { isPaper = false; }
        return (_a = this.getRoom(roomName)) === null || _a === void 0 ? void 0 : _a.wallpaperBlockPosMap.delete("".concat(pos, "_").concat(direction == FurnitureEnum_1.FurnitureDirectionEnum.Right ? 1 : 0).concat(isPaper ? "_0" : ""));
    };
    DataManager.prototype.removeBlockByType = function (pos, furniture, roomName) {
        switch (furniture.blockType) {
            case FurnitureEnum_1.BlockType.NORMAL:
                if (!furniture.isPlotType)
                    this.removeBlockByPos(pos, roomName);
                else
                    this.removePlotBlockByPos(pos, roomName);
                break;
            case FurnitureEnum_1.BlockType.FLOOR:
                this.removeFloorBlockByPos(pos, false, roomName);
                break;
            case FurnitureEnum_1.BlockType.FLOORTILE:
                this.removeFloorBlockByPos(pos, true, roomName);
                break;
            case FurnitureEnum_1.BlockType.WALLDECORATE:
                this.removeWallpaperBlockByPos(pos, furniture.direction);
                break;
            case FurnitureEnum_1.BlockType.WALLPAPER:
                this.removeWallpaperBlockByPos(pos, furniture.direction, true);
                break;
            case FurnitureEnum_1.BlockType.ManorBuff:
            case FurnitureEnum_1.BlockType.Plot:
                this.removePlotBlockByPos(pos, roomName);
                break;
            default:
                break;
        }
    };
    /**读取加载设置 */
    DataManager.prototype.loadFurnitureSaveData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //清理所有原有家具
                        for (key in GameMgr_1.GameMgr.Instance.sceneMgr.furnitureParentMgrs) {
                            if (!GameMgr_1.GameMgr.Instance.sceneMgr.furnitureParentMgrs[key].node.active)
                                break;
                            GameMgr_1.GameMgr.Instance.sceneMgr.furnitureParentMgrs[key].getComponentsInChildren(FurnitureMgr_1.FurnitureMgr).forEach(function (furniture) {
                                if (furniture.node.active)
                                    furniture.putBack(true, true);
                            });
                        }
                        return [4 /*yield*/, this.parseJsonData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**重置存储数据 */
    DataManager.prototype.resetFurnitureSaveData = function () {
        var roomMapObj = {};
        roomMapObj = this.copy(this.curChapter);
        if (!GameMgr_1.GameMgr.Instance.manorMode) {
            if (parseInt(this.curChapter) == SceneEnum_1.SceneNames.ouside1 || parseInt(this.curChapter) == SceneEnum_1.SceneNames.ouside2) {
                SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureCache = roomMapObj;
            }
            else {
                SingletonModuleComp_1.smc.account.AccountModel.furnitureCache = roomMapObj;
            }
        }
        else {
            SingletonModuleComp_1.smc.account.AccountModel.manorCache = roomMapObj;
        }
        // oops.logB(roomMapObj, "beforeActiveSave");
    };
    DataManager.prototype.preSaveData = function () {
        var roomCopy = this.copy(this.curChapter);
        var data = JSON.stringify(roomCopy);
        return data;
    };
    /**缓存背包数据 */
    DataManager.prototype.backupDecorateOwnedData = function (oldDatas) {
        // this.feedbackDataFurnitureOwnedData = ObjectUtil.deepCopy(oldDatas);
        return ObjectUtil_1.ObjectUtil.deepCopy(oldDatas);
    };
    /**
     * 加载缓存的背包数据
     */
    DataManager.prototype.recoveryDecorateOwnedData = function (backupDatas, decorateType) {
        if (decorateType === void 0) { decorateType = DataObject_1.DecorateType.Furniture; }
        // 假设oldMap是要赋值的Map<number, Map<number, DecorateOwnedData[]>>类型
        // const oldMap = datas;
        // 假设newMap是要赋值的Map<number, Map<number, DecorateOwnedData[]>>类型
        // const newMap = new Collection<number, Collection<number, DecorateOwnedData[]>>();
        // 遍历第一层Map
        var data = !GameMgr_1.GameMgr.Instance.isOutside ? SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData :
            SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureOwnedData;
        if (decorateType == DataObject_1.DecorateType.Dress) {
            data = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData;
        }
        // for (const [key1, value1] of this.feedbackDataFurnitureOwnedData.entries()) {
        for (var _i = 0, _a = backupDatas.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], key1 = _b[0], value1 = _b[1];
            // 获取第一层Map
            var map1 = data.get(key1);
            if (!map1) {
                map1 = new Collection_1.Collection();
                data.set(key1, map1);
            }
            // 遍历第二层Map
            for (var _c = 0, _d = value1.entries(); _c < _d.length; _c++) {
                var _e = _d[_c], key2 = _e[0], value2 = _e[1];
                // 获取第二层Map
                var map2 = map1.get(key2);
                if (!map2) {
                    map2 = [];
                    map1.set(key2, map2);
                }
                for (var i in map2) {
                    if (!value2[i] || value2[i].leftAmount == undefined)
                        debugger;
                    map2[i].leftAmount = value2[i].leftAmount;
                    map2[i].lineupCount = value2[i].lineupCount;
                }
                // // 设置DecorateOwnedData数组
                // map2.length = 0;
                // map2.push(...value2);
            }
        }
    };
    DataManager.prototype.getOutSideFurnitureNum = function (data) {
        var result = 0;
        for (var blockPos in data) {
            var furnitureStates = data[blockPos];
            for (var key in furnitureStates) {
                result += 1;
            }
        }
        return result;
    };
    DataManager.prototype.parseJsonData = function (isInitManorBag) {
        if (isInitManorBag === void 0) { isInitManorBag = false; }
        return __awaiter(this, void 0, void 0, function () {
            var data, nodePromises, backPacks, _loop_1, blockPos;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (GameMgr_1.GameMgr.Instance.manorMode) {
                            data = SingletonModuleComp_1.smc.account.AccountModel.manorCache;
                        }
                        else {
                            if (GameMgr_1.GameMgr.Instance.isOutside)
                                data = SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureCache;
                            else
                                data = SingletonModuleComp_1.smc.account.AccountModel.furnitureCache;
                        }
                        /**重新赋值缓存数据 */
                        if (!GameMgr_1.GameMgr.Instance.manorMode) {
                            if (this.feedbackDataFurnitureOwnedData && !GameMgr_1.GameMgr.Instance.isOutside)
                                this.recoveryDecorateOwnedData(this.feedbackDataFurnitureOwnedData);
                            if (this.outsideFurnitureFeedBackData && GameMgr_1.GameMgr.Instance.isOutside)
                                this.recoveryDecorateOwnedData(this.outsideFurnitureFeedBackData);
                        }
                        else {
                            if (this.feedbackDataFurnitureOwnedData && !isInitManorBag)
                                this.recoveryDecorateOwnedData(this.feedbackDataFurnitureOwnedData);
                        }
                        nodePromises = [];
                        backPacks = [];
                        _loop_1 = function (blockPos) {
                            //console.log(blockPos);
                            var furnitureStates = data[blockPos];
                            var _loop_2 = function (key) {
                                var vo = furnitureStates[key];
                                var f = FurnitureData_1.FurnitureData.getAll().get(vo.id);
                                var url = "";
                                switch (f.furnitureType) {
                                    case FurnitureEnum_1.FurnitureTypeEnum.FloorTile:
                                    case FurnitureEnum_1.FurnitureTypeEnum.Wallpaper:
                                        url = "prefab/".concat(f.furnitureType);
                                        break;
                                    case FurnitureEnum_1.FurnitureTypeEnum.Door:
                                        url = "prefab/".concat(f.furnitureType + "-" + f.pixel);
                                        break;
                                    case FurnitureEnum_1.FurnitureTypeEnum.WallDecoration:
                                        url = "prefab/".concat(f.furnitureType + "-" + f.pixel);
                                        break;
                                    case FurnitureEnum_1.FurnitureTypeEnum.OtherWallDecorations:
                                        url = "prefab/".concat(f.furnitureType + "-" + f.pixel);
                                        break;
                                    case FurnitureEnum_1.FurnitureTypeEnum.Window:
                                        url = "prefab/".concat(f.furnitureType + "-" + f.pixel);
                                        break;
                                    case FurnitureEnum_1.FurnitureTypeEnum.Plot:
                                        url = "prefab/plot";
                                        break;
                                    case FurnitureEnum_1.FurnitureTypeEnum.ManorBuff1:
                                    case FurnitureEnum_1.FurnitureTypeEnum.ManorBuff2:
                                    case FurnitureEnum_1.FurnitureTypeEnum.ManorBuff3:
                                    case FurnitureEnum_1.FurnitureTypeEnum.ManorBuff4:
                                    case FurnitureEnum_1.FurnitureTypeEnum.ManorBillboard:
                                        url = "prefab/manorBuff";
                                        break;
                                    default:
                                        url = "prefab/".concat(f.pixel);
                                        break;
                                }
                                var nodePromise = ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(url, BundleConfig_1.default.instance.furniture.name)
                                    .then(function (node) { return __awaiter(_this, void 0, void 0, function () {
                                    var isPlotPos, furnitureMgr, furnitureData, furnitureSize, settlePosData, wallPosData, plotId, size, furnitureVO, spos;
                                    return __generator(this, function (_a) {
                                        isPlotPos = false;
                                        if (blockPos == "plotBlockPosMap")
                                            isPlotPos = true;
                                        furnitureMgr = node.getComponent(FurnitureMgr_1.FurnitureMgr);
                                        furnitureData = FurnitureData_1.FurnitureData.getAll().get(vo.id);
                                        furnitureSize = StringUtil_1.StringUtil.stringToArray5(furnitureData.pixel);
                                        settlePosData = StringUtil_1.StringUtil.stringToArray5(key);
                                        wallPosData = StringUtil_1.StringUtil.stringToArray6(settlePosData[2]);
                                        plotId = 0;
                                        if (furnitureData.furnitureType == FurnitureEnum_1.FurnitureTypeEnum.Plot || furnitureData.furnitureType == FurnitureEnum_1.FurnitureTypeEnum.ManorBuff1 || furnitureData.furnitureType == FurnitureEnum_1.FurnitureTypeEnum.ManorBuff2 || furnitureData.furnitureType == FurnitureEnum_1.FurnitureTypeEnum.ManorBuff3 || furnitureData.furnitureType == FurnitureEnum_1.FurnitureTypeEnum.ManorBuff4 || furnitureData.furnitureType == FurnitureEnum_1.FurnitureTypeEnum.ManorBillboard)
                                            plotId = vo.land_id;
                                        size = { xH: Number(furnitureSize[0]), yW: Number(furnitureSize[1]) };
                                        furnitureVO = new FurnitureVO_1.FurnitureVO({ id: vo.id, name: furnitureData.name + "", direction: vo.direction, type: furnitureData.furnitureType, settlePos: { x: Number(settlePosData[0]), y: Number(settlePosData[1]), room: Number(wallPosData[0]) }, size: size, land_id: plotId, offsetY: vo.offsetY, isPlotPos: isPlotPos });
                                        // Initialize the FurnitureMgr component with the FurnitureVO object
                                        furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.init(furnitureVO, false);
                                        //if (furnitureMgr?.checkCanPutOn()) {
                                        if (!DataManager.Instance.isMoveHouse || (furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.checkCanPutOn())) {
                                            furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.loadAsset();
                                            furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.setPosWithoutClicked(furnitureMgr.settlePos);
                                            furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.updateView();
                                            furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.setExtend();
                                            furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.updateActiveNodePos();
                                        }
                                        else {
                                            furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.putBack(false);
                                            spos = furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.settlePos;
                                            if (spos)
                                                backPacks.push(key);
                                        }
                                        return [2 /*return*/, node];
                                    });
                                }); })
                                    .catch(function (error) {
                                    console.error("Error while creating prefab node:", error);
                                });
                                nodePromises.push(nodePromise);
                            };
                            for (var key in furnitureStates) {
                                _loop_2(key);
                            }
                        };
                        //      const roomData = roomSvr[room];          
                        for (blockPos in data) {
                            _loop_1(blockPos);
                        }
                        return [4 /*yield*/, Promise.all(nodePromises)
                                .then(function (nodes) {
                                if (backPacks.length > 0) {
                                    /**如果存在玩家家具自动放入背包的情况，发送此事件 */
                                    HttpPost_1.HttpPost.instance.eventReport({ event: EventReport_1.EVENT_REPORT.furniturePack, extra: { "isMove": DataManager.Instance.isMoveHouse, "backPacks": backPacks, "house": data } });
                                }
                                DataManager.Instance.isMoveHouse = false;
                                FloorsMgr_1.FloorsMgr.Instance.HideAllFloorSprite();
                            })
                                .catch(function (error) {
                                console.error("Error while waiting for all promises:", error);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**移除二楼数据 */
    DataManager.prototype.removeSecFloorFurnitures = function () {
        return __awaiter(this, void 0, void 0, function () {
            var secFloorFurnitures, furnitureMgrs, putBackPromises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        /**因为是已经加过，所以要去除二层数据 */
                        //todo新增有二楼章节都需要跳过处理
                        if (SingletonModuleComp_1.smc.account.AccountModel.chapter != 3)
                            return [2 /*return*/];
                        secFloorFurnitures = GameMgr_1.GameMgr.Instance.sceneMgr.furnitureParentMgrs[1];
                        if (!secFloorFurnitures)
                            return [2 /*return*/];
                        furnitureMgrs = secFloorFurnitures.getComponentsInChildren(FurnitureMgr_1.FurnitureMgr);
                        putBackPromises = furnitureMgrs.filter(function (furnitureMgr) { return furnitureMgr.node.active; }).map(function (furnitureMgr) {
                            if (furnitureMgr.blockType != FurnitureEnum_1.BlockType.Role && furnitureMgr.blockType != FurnitureEnum_1.BlockType.Pet) {
                                furnitureMgr.putBack();
                            }
                        });
                        return [4 /*yield*/, Promise.all(putBackPromises)];
                    case 1:
                        _a.sent();
                        this.resetFurnitureSaveData();
                        DataManager.Instance.uploadData();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 保存家具装修状态
     */
    DataManager.prototype.uploadData = function (moveRome) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
                            // chapter = moveRome ?? this.curChapter;
                            var chapter, from = "0";
                            if (moveRome) {
                                chapter = moveRome.to;
                                from = moveRome.from;
                            }
                            else {
                                chapter = _this.curChapter;
                            }
                            /**取消选中状态 */
                            GameMgr_1.GameMgr.Instance.clickItem.setOffClickItem();
                            if (GameMgr_1.GameMgr.Instance.manorMode) {
                                DataManager.Instance.curChapter = "manorFurniture";
                                HttpPost_1.HttpPost.instance.manorFurniture(_this.preSaveData(), function (data) {
                                    GameMgr_1.GameMgr.Instance.originPos = null;
                                    GameMgr_1.GameMgr.Instance.originIsPlotType = null;
                                    _this.resetFurnitureSaveData();
                                    //刷新评分
                                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowHomeUI);
                                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FreshRoleExit, false);
                                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Furniture);
                                    resolve(true);
                                }, function () {
                                    resolve(false);
                                });
                            }
                            else {
                                var guide_id = 0;
                                if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide && SingletonModuleComp_1.smc.guide.GuideModel.step <= 11) {
                                    guide_id = 11;
                                }
                                HttpPost_1.HttpPost.instance.upUserFurniture(guide_id, _this.preSaveData(), from, chapter, function (data) {
                                    GameMgr_1.GameMgr.Instance.originPos = null;
                                    GameMgr_1.GameMgr.Instance.originIsPlotType = null;
                                    _this.resetFurnitureSaveData();
                                    if (GameMgr_1.GameMgr.Instance.isOutside) {
                                        //评分和当前可得金币
                                        SingletonModuleComp_1.smc.account.AccountModel.vm.outFurnitureScore = data.furnitureMarkOut;
                                        SingletonModuleComp_1.smc.account.AccountModel.outAvailableReward = data.availableReward;
                                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshOutsideUnlockList, data.unlockList);
                                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OutRewardRed);
                                    }
                                    else {
                                        //刷新主场景评分
                                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateFurnitureScore, data.furnitureMark);
                                    }
                                    //刷新评分
                                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowHomeUI);
                                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FreshRoleExit, false);
                                    //更新数据
                                    DataMgr_1.DataMgr.updateUserData(null, null, data.taskList);
                                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Furniture);
                                    resolve(true);
                                }, function () {
                                    resolve(false);
                                });
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    DataManager.prototype.createCounter = function () {
        var count = 0; // 定义一个私有变量
        function counter() {
            count++; // 修改私有变量
            Oops_1.oops.logB(count, "第几次抽奖了");
            return count;
        }
        return counter; // 返回内部函数
    };
    /**初始化背包分类 */
    DataManager.prototype.setGloalClassData = function (init) {
        if (init === void 0) { init = true; }
        //初始化初始进入的房间
        DataManager.Instance.updateSelectChapter();
        //所有分类
        TypeGlobalData_1.TypeGlobalData.setAllSubclasses();
        //初始化空的背包和红点数据
        TypeGlobalData_1.TypeGlobalData.allData.forEach(function (value, key) {
            var map = new Collection_1.Collection();
            var mapRed = new Collection_1.Collection();
            for (var i = 0; i < value.length; i++) {
                var element = parseInt(value[i]);
                map.set(element, []);
                mapRed.set(element, new DataObject_1.DecorateRedData());
            }
            if (key < DataObject_1.DecorateType.Dress) {
                if (init) {
                    //家具
                    SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData.set(key, map);
                    SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.set(key, mapRed);
                }
                else {
                    //外出家具
                    SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureOwnedData.set(key, map);
                }
            }
            else {
                if (init) {
                    //装饰
                    SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData.set(key, map);
                    SingletonModuleComp_1.smc.account.AccountModel.dressRedData.set(key, mapRed);
                }
            }
        });
    };
    //只初始化背包中家具的部分
    DataManager.prototype.setGloalFurnitureData = function () {
        //所有分类
        TypeGlobalData_1.TypeGlobalData.setAllSubclasses();
        //初始化空的背包和红点数据
        TypeGlobalData_1.TypeGlobalData.allData.forEach(function (value, key) {
            var map = new Collection_1.Collection();
            var mapRed = new Collection_1.Collection();
            for (var i = 0; i < value.length; i++) {
                var element = parseInt(value[i]);
                map.set(element, []);
                mapRed.set(element, new DataObject_1.DecorateRedData());
            }
            if (key < DataObject_1.DecorateType.Dress) {
                //家具
                SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData.set(key, map);
                SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.set(key, mapRed);
            }
        });
    };
    /**设置事件数据 */
    DataManager.prototype.setEventList = function (eventList) {
        //事件系统
        if (SingletonModuleComp_1.smc.account.AccountModel.eventList.array.length > 0) {
            for (var i in eventList) {
                if (Object.prototype.hasOwnProperty.call(eventList, i)) {
                    var triggerData = eventList[i];
                    var trigger = SingletonModuleComp_1.smc.account.AccountModel.eventList.get(triggerData.trigger_id);
                    trigger.eventId = triggerData.event_id;
                    trigger.eventStatus = triggerData.status;
                    trigger.startTime = triggerData.created_at;
                    trigger.triggerStatus = 1;
                    if (triggerData.event_id != 0) {
                        if (!trigger.eventData)
                            trigger.eventData = new EventData_1.EventData(triggerData.event_id, triggerData.trigger_id);
                        else {
                            trigger.eventData.initNewEvent(triggerData.event_id, triggerData.trigger_id);
                        }
                    }
                    SingletonModuleComp_1.smc.account.AccountModel.eventList.set(parseInt(triggerData.trigger_id), trigger);
                }
            }
        }
        else {
            var _loop_3 = function (i) {
                if (Object.prototype.hasOwnProperty.call(eventList, i)) {
                    var triggerData_1 = eventList[i];
                    var trigger = new TriggerData_1.TriggerData(parseInt(triggerData_1.trigger_id));
                    trigger.eventId = triggerData_1.event_id;
                    trigger.eventStatus = triggerData_1.status;
                    trigger.startTime = triggerData_1.created_at;
                    var triggerEvent = EventTriggerData_1.EventTriggerData.getAllData().find(function (x) { return x.id == triggerData_1.trigger_id; });
                    trigger.triggerLimit = triggerEvent.triggerLimit;
                    trigger.triggerType = triggerEvent.triggerType;
                    trigger.typeValue = triggerEvent.typeValue;
                    trigger.triggerStatus = 1;
                    if (triggerData_1.event_id != 0) {
                        if (!trigger.eventData)
                            trigger.eventData = new EventData_1.EventData(triggerData_1.event_id, triggerData_1.trigger_id);
                        else {
                            trigger.eventData.initNewEvent(triggerData_1.event_id, triggerData_1.trigger_id);
                        }
                    }
                    SingletonModuleComp_1.smc.account.AccountModel.eventList.set(parseInt(triggerData_1.trigger_id), trigger);
                }
            };
            for (var i in eventList) {
                _loop_3(i);
            }
        }
        // if (!smc.account.AccountModel.eventInit)
        // else
    };
    /**获取外出奖励 */
    DataManager.prototype.getOutReward = function (eventId, cb) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            HttpPost_1.HttpPost.instance.getOutReward(eventId, function (data) { return __awaiter(_this, void 0, void 0, function () {
                var dropData, dropInfo, event;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            dropData = DropMgr_1.DropMgr.getDropData(data.reward);
                            dropInfo = new DataObject_1.DropInfo();
                            dropInfo.dropData = dropData;
                            dropInfo.dropFrom = DataObject_1.DropFrom.Outside;
                            return [4 /*yield*/, Oops_1.oops.gui.openAsync(GameUIConfig_1.UIID.Drop, dropInfo)];
                        case 1:
                            _a.sent();
                            event = TriggerData_1.TriggerData.getTriggerByEventId(eventId)[0].eventData;
                            DataManager.Instance.setEventList(data.eventList);
                            GameMgr_1.GameMgr.Instance.sceneMgr.removeRoleAndBubble(event);
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FreshEventBtns);
                            SingletonModuleComp_1.smc.account.AccountModel.outEventOverArray.push(eventId);
                            resolve(); // 方法完成后调用 resolve()
                            cb && cb();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    /**
     * 获取户外数据
     * 进入户外场景前调用
     */
    DataManager.prototype.getUserOutSideFurniture = function (eventData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                HttpPost_1.HttpPost.instance.getUserFurniture(eventData.id, function (data) {
                    var _a, _b;
                    DataManager.Instance.setGloalClassData(false);
                    //家具摆放数据
                    SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureCache = data.furniture;
                    SingletonModuleComp_1.smc.account.AccountModel.openBoxTimesMax = data.openBoxTimesMax;
                    //家具背包
                    for (var i = 0; i < data.furnitureBackpack.length; i++) {
                        var element = data.furnitureBackpack[i];
                        var item = new DataObject_1.DecorateOwnedData();
                        var id = element.id;
                        item.furnitureData = new FurnitureData_1.FurnitureData(id);
                        item.lineupCount = element.lineupCount;
                        item.leftAmount = element.leftAmount;
                        var main = item.furnitureData.valueType;
                        var second = item.furnitureData.furnitureType;
                        var value = (_a = SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureOwnedData.get(main)) === null || _a === void 0 ? void 0 : _a.get(second);
                        value === null || value === void 0 ? void 0 : value.push(item);
                        var valueAll = (_b = SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureOwnedData.get(main)) === null || _b === void 0 ? void 0 : _b.get(0);
                        valueAll === null || valueAll === void 0 ? void 0 : valueAll.push(item);
                    }
                    //console.log(smc.account.AccountModel.outsideFurnitureCache);
                    //外出开箱数据设置
                    SingletonModuleComp_1.smc.account.AccountModel.outOpenBoxTime = data.openBoxInfo.openBoxTime;
                    SingletonModuleComp_1.smc.account.AccountModel.outTodayOpenTimes = data.openBoxInfo.todayOpenTimes;
                    SingletonModuleComp_1.smc.account.AccountModel.outBoxConfigKey = data.openBoxInfo.configKey;
                    SingletonModuleComp_1.smc.account.AccountModel.outSurplusOpenTimes = data.openBoxInfo.surplusOpenTimes;
                    //评分和当前可得金币
                    SingletonModuleComp_1.smc.account.AccountModel.vm.outFurnitureScore = data.furnitureMarkOut;
                    SingletonModuleComp_1.smc.account.AccountModel.outAvailableReward = data.availableReward;
                    /**当前外出事件结束参数 */
                    GameMgr_1.GameMgr.Instance.outsideEventData = eventData;
                    if (!eventData.outEventData)
                        eventData.outEventData = new OutEventData_1.OutEventData(eventData.id);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshOutsideUnlockList, data.unlockList);
                    GameMgr_1.GameMgr.Instance.readyGoto = true;
                    //跳转
                    DataMgr_1.DataMgr.gotoFunction([], eventData.jumpUi);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OutRewardRed);
                });
                return [2 /*return*/];
            });
        });
    };
    DataManager.prototype.getUserRoomFurniture = function (chapter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                chapter = chapter !== null && chapter !== void 0 ? chapter : this.curChapter;
                this.resetFurnitureSaveData();
                if (this.getRoom(chapter) == null) { //没有数据则请求一次，有数据不请求
                    HttpPost_1.HttpPost.instance.switchRoom(chapter, function (value) {
                        SingletonModuleComp_1.smc.account.AccountModel.furnitureCache = value;
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshRoomFurniture, { room: chapter });
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    DataManager.prototype.gotoChapter = function () {
        this.routers.unshift(this.curChapter);
        if (this.routers.length > 2) { //最多缓存2个场景历史,
            this.routers.pop();
        }
    };
    DataManager.prototype.updateSelectChapter = function (chapter) {
        this.curChapter = chapter !== null && chapter !== void 0 ? chapter : SingletonModuleComp_1.smc.account.AccountModel.chapter.toString();
        this.getUserRoomFurniture(this.curChapter);
    };
    DataManager.prototype.goBack = function () {
        DataManager.Instance.routers.shift();
        var backChapter = DataManager.Instance.routers[0];
        DataManager.Instance.routers.length = 0;
        return backChapter;
    };
    //庄园初始化+刷新种子背包
    DataManager.prototype.updateManorSeedBag = function (data) {
        var _this = this;
        ManorPlantData_1.ManorPlantData.getAllData().forEach(function (e) {
            _this.manorSeedBagData.set(e.id, 0);
        });
        for (var i = 0; i < data.length; i++) {
            this.manorSeedBagData.set(data[i].id, data[i].num);
        }
    };
    //庄园种植消耗种子
    DataManager.prototype.ManorUseSeed = function (seedId) {
        if (this.manorSeedBagData.has(seedId) && this.manorSeedBagData.get(seedId) > 0)
            this.manorSeedBagData.set(seedId, this.manorSeedBagData.get(seedId) - 1);
    };
    //庄园购买消耗种子
    DataManager.prototype.ManorAddSeed = function (seedId, num) {
        if (this.manorSeedBagData.has(seedId))
            this.manorSeedBagData.set(seedId, this.manorSeedBagData.get(seedId) + num);
    };
    //查找数量
    DataManager.prototype.getManorSeedNumById = function (id) {
        if (this.manorSeedBagData.has(id))
            return this.manorSeedBagData.get(id);
        else
            return 0;
    };
    //获取种子背包全部有效数据
    DataManager.prototype.getManorSeedBag = function () {
        var result = [];
        this.manorSeedBagData.forEach(function (value, key) {
            result.push(key);
        });
        return result;
    };
    //获取种子背包农作物数据
    DataManager.prototype.getManorSeedCropBag = function () {
        var result = [];
        this.manorSeedBagData.forEach(function (value, key) {
            var _a;
            if (((_a = ManorPlantData_1.ManorPlantData.getAllData().find(function (x) { return x.id == key; })) === null || _a === void 0 ? void 0 : _a.plantType) == 1)
                result.push(key);
        });
        return result;
    };
    //获取种子背包农作物数据
    DataManager.prototype.getManorSeedFlowerBag = function () {
        var result = [];
        this.manorSeedBagData.forEach(function (value, key) {
            var _a;
            if (((_a = ManorPlantData_1.ManorPlantData.getAllData().find(function (x) { return x.id == key; })) === null || _a === void 0 ? void 0 : _a.plantType) == 2)
                result.push(key);
        });
        return result;
    };
    //获取庄园设施等级
    DataManager.prototype.getManorFanciLevel = function (id) {
        var _a;
        if (((_a = ManorFacilitiesData_1.ManorFacilitiesData.getAllData().find(function (x) { return x.id == id; })) === null || _a === void 0 ? void 0 : _a.type) == 1)
            return 1;
        else
            return this.manorFanciData.get(id);
    };
    return DataManager;
}(Singleton_1.default));
exports.default = DataManager;
