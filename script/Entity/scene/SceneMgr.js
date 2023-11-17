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
exports.SceneMgr = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../../game/common/bundle/BundleConfig");
var GameEvent_1 = require("../../game/common/config/GameEvent");
var GameResPath_1 = require("../../game/common/config/GameResPath");
var GameUIConfig_1 = require("../../game/common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../../game/common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../../game/common/mgr/GameMgr");
var Tablenpc_1 = require("../../game/common/table/Tablenpc");
var ActivityData_1 = require("../../game/common/tableData/ActivityData");
var FurnitureData_1 = require("../../game/common/tableData/FurnitureData");
var OutEventData_1 = require("../../game/common/tableData/OutEventData");
var TalkData_1 = require("../../game/common/tableData/TalkData");
var TriggerData_1 = require("../../game/common/tableData/TriggerData");
var Role_1 = require("../../game/dress/Role");
var ManorFloorsMgr_1 = require("../../game/manor/ManorFloorsMgr");
var DataObject_1 = require("../../game/tools/DataObject");
var HttpPost_1 = require("../../game/tools/HttpPost");
var DataManager_1 = require("../../Global/DataManager");
var MapCache_1 = require("../../Global/MapCache");
var FloorMgr_1 = require("../floor/FloorMgr");
var FloorsMgr_1 = require("../floor/FloorsMgr");
var FurnitureEnum_1 = require("../furniture/FurnitureEnum");
var FurnitureMgr_1 = require("../furniture/FurnitureMgr");
var PetFurniture_1 = require("../furniture/Furnitures/PetFurniture");
var RoomMgr_1 = require("../room/RoomMgr");
var FurnitureUpDown_1 = require("../furniture/FurnitureUpDown");
var ManorPlantData_1 = require("../../game/manor/ManorPlantData");
var FurnitureVO_1 = require("../furniture/FurnitureVO");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var SceneMgr = function () {
    var _classDecorators = [ccclass('SceneMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _roles_decorators;
    var _roles_initializers = [];
    var _roleInitPos_decorators;
    var _roleInitPos_initializers = [];
    var _npcPosParent_decorators;
    var _npcPosParent_initializers = [];
    var _room_decorators;
    var _room_initializers = [];
    var _plots_decorators;
    var _plots_initializers = [];
    var _plantTimeNode_decorators;
    var _plantTimeNode_initializers = [];
    var _waterNode_decorators;
    var _waterNode_initializers = [];
    var SceneMgr = _classThis = /** @class */ (function (_super) {
        __extends(SceneMgr_1, _super);
        function SceneMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.roles = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _roles_initializers, []));
            _this.pet = [];
            _this.posParant = [];
            _this.plotPosParent = [];
            _this.furnitureParentMgrs = [];
            _this.plotsParentMgrs = [];
            /**楼层 */
            _this.floors = [];
            _this.roomSize = [];
            _this.plotsSize = [];
            _this.roleInitPos = __runInitializers(_this, _roleInitPos_initializers, null);
            _this.npcPosParent = __runInitializers(_this, _npcPosParent_initializers, null);
            _this.room = __runInitializers(_this, _room_initializers, null);
            _this.plots = __runInitializers(_this, _plots_initializers, null);
            _this.plantTimeNode = __runInitializers(_this, _plantTimeNode_initializers, null);
            _this.waterNode = __runInitializers(_this, _waterNode_initializers, null);
            _this.leftTime = -1;
            _this.timeId = null;
            _this.moveButton = null;
            _this.aimRoomNode = null;
            _this.buttonCache = [];
            _this.plantRemainTime = 0;
            _this.waterSpeedPlot = 0;
            return _this;
        }
        SceneMgr_1.prototype.onSecond = function () {
        };
        SceneMgr_1.prototype.onComplete = function () {
            this.showRoles();
            this.showPets();
        };
        SceneMgr_1.prototype.onLoad = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ManorMgr;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            GameMgr_1.GameMgr.Instance.isSceneLoaded = false;
                            GameMgr_1.GameMgr.Instance.sceneMgr = this;
                            GameMgr_1.GameMgr.Instance.nowActiveRole.clear();
                            if (GameMgr_1.GameMgr.Instance.manorMode) {
                                ManorMgr = this.plots.getComponent(ManorFloorsMgr_1.ManorFloorsMgr);
                                if (ManorMgr) {
                                    this.plotPosParent = ManorMgr.posParant;
                                    this.plotsParentMgrs = ManorMgr.furnitureParentMgrs;
                                    this.plotsSize = ManorMgr.roomSize;
                                }
                            }
                            return [4 /*yield*/, this.initRoom()];
                        case 1:
                            _a.sent();
                            Oops_1.oops.log.start("初始化位置");
                            return [4 /*yield*/, this.initPos().then(function () {
                                    Oops_1.oops.log.end("初始化位置");
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, DataManager_1.default.Instance.parseJsonData(GameMgr_1.GameMgr.Instance.manorMode)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.showRoles()];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.showPets()];
                        case 5:
                            _a.sent();
                            this.showNpcs();
                            // this.scheduleOnce(this.showNpcs, 0.5);
                            return [4 /*yield*/, this.guideOrNot()];
                        case 6:
                            // this.scheduleOnce(this.showNpcs, 0.5);
                            _a.sent();
                            DataManager_1.default.Instance.goToFuncSecond();
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.CheckStartTrigger);
                            GameMgr_1.GameMgr.Instance.isSceneLoaded = true;
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.OffBtns, this.hideNpcs, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.OnBtns, this.showNpc, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.HideNpcPos, this.hideNpc1, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.ShowNpcPos, this.showNpc1, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.RefreshRoomFurniture, this.refreshRoomFurniture, this);
                            return [2 /*return*/];
                    }
                });
            });
        };
        SceneMgr_1.prototype.refreshRoomFurniture = function (event, args) {
            if (DataManager_1.default.Instance.curChapter == args.room) {
                DataManager_1.default.Instance.parseJsonData();
            } //else if (DataManager.Instance.curChapter == "manorFurniture") {
            //     DataManager.Instance.parseJsonData();
            // }
        };
        SceneMgr_1.prototype.guideOrNot = function () {
            var _a;
            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.account.AccountModel.guideStep == 0) {
                //     // this.showBubble();
                //移动到星小满  开始新手引导
                GameMgr_1.GameMgr.Instance.mapManager.moveToStarXiaoman();
            }
            else {
                /**移动到中心 */
                GameMgr_1.GameMgr.Instance.mapManager.setScreenToCenter(this.node, 1.3);
                (_a = this.roles[0]) === null || _a === void 0 ? void 0 : _a.hideBubble();
            }
        };
        SceneMgr_1.prototype.initRoom = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, room, bundle, roomNode;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = GameResPath_1.GameResPath.getScenePathByName(DataManager_1.default.Instance.curChapter), room = _a.room, bundle = _a.bundle;
                                        return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(room, bundle)];
                                    case 1:
                                        roomNode = _b.sent();
                                        roomNode.parent = this.room;
                                        if (GameMgr_1.GameMgr.Instance.manorMode)
                                            roomNode.setPosition(new cc_1.Vec3(-214, 70, 0));
                                        this.initSceneMgrPropertys(roomNode);
                                        resolve(true);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                });
            });
        };
        SceneMgr_1.prototype.initSceneMgrPropertys = function (room) {
            var roomMgr = room.getComponent(RoomMgr_1.RoomMgr);
            if (roomMgr) {
                this.floors = roomMgr.floors;
                this.posParant = roomMgr.posParant;
                this.furnitureParentMgrs = roomMgr.furnitureParentMgrs;
                this.roomSize = roomMgr.roomSize;
                this.aimRoomNode = roomMgr.aimNode;
            }
        };
        SceneMgr_1.prototype.resetPetState = function () {
            this.pet.forEach(function (e) {
                e.resetPetState();
            });
        };
        SceneMgr_1.prototype.hideNpcs = function () {
            var npcs = ViewUtil_1.ViewUtil.getChildByName("map/roomParent/npcPos", this.node);
            if (npcs)
                npcs.active = false;
            var spinePos = ViewUtil_1.ViewUtil.getChildByName("map/roomParent/spinePos", this.node);
            if (spinePos)
                spinePos.active = false;
        };
        SceneMgr_1.prototype.showNpc = function () {
            var npcs = ViewUtil_1.ViewUtil.getChildByName("map/roomParent/npcPos", this.node);
            if (npcs)
                npcs.active = true;
            var spinePos = ViewUtil_1.ViewUtil.getChildByName("map/roomParent/spinePos", this.node);
            if (spinePos)
                spinePos.active = true;
        };
        SceneMgr_1.prototype.showNpc1 = function () {
            var _a, _b;
            if (this.npcPosParent)
                this.npcPosParent.active = true;
            if (this.node && this.node.getChildByName("map")) {
                var act = (_a = this.node.getChildByName("map")) === null || _a === void 0 ? void 0 : _a.getChildByName("acivity");
                if (act)
                    act.active = true;
                var mini = (_b = this.node.getChildByName("map")) === null || _b === void 0 ? void 0 : _b.getChildByName("miniGameNode");
                if (mini)
                    mini.active = true;
            }
        };
        SceneMgr_1.prototype.hideNpc1 = function () {
            var _a, _b;
            if (this.npcPosParent)
                this.npcPosParent.active = false;
            if (this.node && this.node.getChildByName("map")) {
                var act = (_a = this.node.getChildByName("map")) === null || _a === void 0 ? void 0 : _a.getChildByName("acivity");
                if (act)
                    act.active = false;
                var mini = (_b = this.node.getChildByName("map")) === null || _b === void 0 ? void 0 : _b.getChildByName("miniGameNode");
                if (mini)
                    mini.active = false;
            }
        };
        /**布置家具时显示/隐藏一些节点 */
        SceneMgr_1.prototype.showSomeItems = function (isShow) {
            if (isShow === void 0) { isShow = true; }
            ViewUtil_1.ViewUtil.setNodeActiveByName("bgMove", this.node, !isShow);
            ViewUtil_1.ViewUtil.findChildByName("map", this.node).getComponent(cc_1.Sprite).enabled = isShow;
            var miniGameNode = ViewUtil_1.ViewUtil.getChildByName("map/miniGameNode", this.node);
            if (miniGameNode)
                miniGameNode.active = isShow;
            //ViewUtil.setNodeActiveByName("map/miniGameNode", this.node, isShow);
            var npcPos = ViewUtil_1.ViewUtil.getChildByName("map/npcPos", this.node);
            if (npcPos)
                npcPos.active = isShow;
            //ViewUtil.setNodeActiveByName("map/npcPos", this.node, isShow);
            //ViewUtil.setNodeActiveByName("map/spinePos", this.node, isShow);
            var spinePos = ViewUtil_1.ViewUtil.getChildByName("map/spinePos", this.node);
            if (spinePos)
                spinePos.active = isShow;
            var font = ViewUtil_1.ViewUtil.getChildByName("map/font", this.node);
            if (font)
                font.active = isShow;
        };
        /**在屋子里显示npc */
        SceneMgr_1.prototype.showNpcs = function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var eventData, outEventData, floors, i, node, roleOnFurniture, floor, pos, npcTb, role;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!GameMgr_1.GameMgr.Instance.isOutside) return [3 /*break*/, 8];
                            eventData = GameMgr_1.GameMgr.Instance.outsideEventData;
                            outEventData = new OutEventData_1.OutEventData(eventData.id);
                            floors = FloorsMgr_1.FloorsMgr.Instance.getRandFloorMgrs(outEventData.npcs.length);
                            //布置墙纸和地板
                            ViewUtil_1.ViewUtil.setSingleSpriteFrame(ViewUtil_1.ViewUtil.findChildByName("floor1/Foundation/mask/transform/floorTile", this.room), GameResPath_1.GameResPath.getFurniturePutIconsPath(outEventData.senceFloor + ""), BundleConfig_1.default.instance.furniture.name);
                            ViewUtil_1.ViewUtil.setSingleSpriteFrame(ViewUtil_1.ViewUtil.findChildByName("floor1/wallLeft/left", this.room), GameResPath_1.GameResPath.getFurniturePutIconsPath(outEventData.senceWall + ""), BundleConfig_1.default.instance.furniture.name);
                            ViewUtil_1.ViewUtil.setSingleSpriteFrame(ViewUtil_1.ViewUtil.findChildByName("floor1/wallRight/right", this.room), GameResPath_1.GameResPath.getFurniturePutIconsPath(outEventData.senceWall + ""), BundleConfig_1.default.instance.furniture.name);
                            if (floors.length <= 0) {
                                return [2 /*return*/];
                            }
                            i = 0;
                            _b.label = 1;
                        case 1:
                            if (!(i < outEventData.npcs.length)) return [3 /*break*/, 7];
                            node = void 0;
                            if (!(parseInt(outEventData.npcs[i]) == DataObject_1.RoleEnum.boy)) return [3 /*break*/, 2];
                            node = this.roles[1].node;
                            return [3 /*break*/, 5];
                        case 2:
                            if (!(GameMgr_1.GameMgr.Instance.nowActiveRole.get(parseInt(outEventData.npcs[i])) && ((_a = GameMgr_1.GameMgr.Instance.nowActiveRole.get(parseInt(outEventData.npcs[i]))) === null || _a === void 0 ? void 0 : _a.node))) return [3 /*break*/, 3];
                            node = GameMgr_1.GameMgr.Instance.nowActiveRole.get(parseInt(outEventData.npcs[i])).node;
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getRoleOnFurniturePrefabPath(), BundleConfig_1.default.instance.furniture.name)];
                        case 4:
                            node = _b.sent();
                            _b.label = 5;
                        case 5:
                            roleOnFurniture = node.getComponent(FurnitureMgr_1.FurnitureMgr);
                            floor = floors[i];
                            if (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem == roleOnFurniture) {
                                return [3 /*break*/, 6];
                            }
                            pos = null;
                            pos = floor.PosIndex;
                            roleOnFurniture.freshRoleState(DataObject_1.RoleAnimType.StandIdle);
                            roleOnFurniture.node.active = true;
                            roleOnFurniture.setRoleId(parseInt(outEventData.npcs[i]));
                            //男主默认服务器那套
                            if (parseInt(outEventData.npcs[i]) == DataObject_1.RoleEnum.boy) {
                                roleOnFurniture.freshRoleDress(parseInt(outEventData.npcs[i]));
                            }
                            else {
                                npcTb = new Tablenpc_1.Tablenpc();
                                npcTb.init(parseInt(outEventData.npcs[i]));
                                role = node.getComponentsInChildren(Role_1.Role).filter(function (i) { return i.node.active == true; });
                                role[0].showSuitSkin(npcTb.npcDress);
                                roleOnFurniture.removeAllBubbleEvent();
                            }
                            GameMgr_1.GameMgr.Instance.nowActiveRole.set(parseInt(outEventData.npcs[i]), roleOnFurniture);
                            roleOnFurniture.originSettlePos = roleOnFurniture.settlePos;
                            roleOnFurniture.setPosWithoutClicked(pos);
                            _b.label = 6;
                        case 6:
                            i++;
                            return [3 /*break*/, 1];
                        case 7:
                            this.showNpcDialogue(eventData);
                            _b.label = 8;
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        /**显示npc气泡 */
        SceneMgr_1.prototype.showNpcDialogue = function (event) {
            if (!event.mapCache)
                event.mapCache = new MapCache_1.MapCache(event.id + "");
            var outEventData = new OutEventData_1.OutEventData(event.id);
            // 0-101-10201|1-102-10301|20-1002-10401|40-102-10501|60-101-10601|80-102-10701
            var canShowBubbleList = [];
            for (var _i = 0, _a = outEventData.talkArray; _i < _a.length; _i++) {
                var i = _a[_i];
                var parts = StringUtil_1.StringUtil.stringToArray5(i);
                var data = {
                    score: parts[0],
                    roleId: parts[1],
                    dialogId: parts[2],
                    furnitureId: Number(parts[3])
                };
                if (SingletonModuleComp_1.smc.account.AccountModel.vm.outFurnitureScore >= parseInt(data.score))
                    canShowBubbleList.push(data);
            }
            var _loop_1 = function (i) {
                var recordData = event.mapCache.get(i.score + i.roleId + i.dialogId);
                if (!recordData) {
                    var npc = GameMgr_1.GameMgr.Instance.nowActiveRole.get(parseInt(i.roleId));
                    if (npc) {
                        var talk = new TalkData_1.TalkData(parseInt(i.dialogId));
                        talk.talkCb = function () {
                            event.mapCache.set(i.score + i.roleId + i.dialogId, true);
                        };
                        npc.showBubble(talk);
                        //如果有互动家具id
                        if (i.furnitureId != 0 && FloorsMgr_1.FloorsMgr.Instance.findFurnitureById(i.furnitureId) != null) {
                            npc.setPosWithoutClicked(FloorsMgr_1.FloorsMgr.Instance.findFurnitureById(i.furnitureId).settlePos);
                            FloorsMgr_1.FloorsMgr.Instance.findFurnitureById(i.furnitureId).setRoleOnThis(npc);
                        }
                    }
                }
            };
            for (var _b = 0, canShowBubbleList_1 = canShowBubbleList; _b < canShowBubbleList_1.length; _b++) {
                var i = canShowBubbleList_1[_b];
                _loop_1(i);
            }
        };
        SceneMgr_1.prototype.showPets = function () {
            return __awaiter(this, void 0, void 0, function () {
                var floors, pos, url, i, i, nodePromise, i, nodePromise;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            floors = FloorsMgr_1.FloorsMgr.Instance.getRandFloorMgrs(SingletonModuleComp_1.smc.account.AccountModel.pet.length);
                            pos = null;
                            url = "prefab/pet";
                            if (!(this.pet.length < floors.length)) return [3 /*break*/, 5];
                            for (i = 0; i < this.pet.length; i++) {
                                this.pet[i].node.destroy();
                            }
                            this.pet = [];
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < floors.length)) return [3 /*break*/, 4];
                            pos = floors[i].PosIndex;
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(url, BundleConfig_1.default.instance.furniture.name)];
                        case 2:
                            nodePromise = _a.sent();
                            nodePromise.active = true;
                            nodePromise.getComponent(PetFurniture_1.PetFurniture).setPetId(SingletonModuleComp_1.smc.account.AccountModel.pet[i].petId, SingletonModuleComp_1.smc.account.AccountModel.pet[i].useSkinId);
                            nodePromise.getComponent(PetFurniture_1.PetFurniture).originSettlePos = nodePromise.getComponent(PetFurniture_1.PetFurniture).settlePos;
                            /**上一次放置位置 */
                            nodePromise.getComponent(PetFurniture_1.PetFurniture).setPosWithoutClicked(pos);
                            this.pet.push(nodePromise.getComponent(PetFurniture_1.PetFurniture));
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [3 /*break*/, 10];
                        case 5:
                            i = 0;
                            _a.label = 6;
                        case 6:
                            if (!(i < floors.length)) return [3 /*break*/, 10];
                            pos = floors[i].PosIndex;
                            if (!this.pet[i].node) return [3 /*break*/, 7];
                            this.pet[i].node.active = true;
                            this.pet[i].withRole = false;
                            this.pet[i].setPetId(SingletonModuleComp_1.smc.account.AccountModel.pet[i].petId, SingletonModuleComp_1.smc.account.AccountModel.pet[i].useSkinId);
                            this.pet[i].originSettlePos = this.pet[i].settlePos;
                            this.pet[i].setPosWithoutClicked(pos);
                            return [3 /*break*/, 9];
                        case 7: return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(url, BundleConfig_1.default.instance.furniture.name)];
                        case 8:
                            nodePromise = _a.sent();
                            nodePromise.active = true;
                            nodePromise.getComponent(PetFurniture_1.PetFurniture).setPetId(SingletonModuleComp_1.smc.account.AccountModel.pet[i].petId, SingletonModuleComp_1.smc.account.AccountModel.pet[i].useSkinId);
                            nodePromise.getComponent(PetFurniture_1.PetFurniture).originSettlePos = nodePromise.getComponent(PetFurniture_1.PetFurniture).settlePos;
                            /**上一次放置位置 */
                            nodePromise.getComponent(PetFurniture_1.PetFurniture).setPosWithoutClicked(pos);
                            this.pet[i] = (nodePromise.getComponent(PetFurniture_1.PetFurniture));
                            _a.label = 9;
                        case 9:
                            i++;
                            return [3 /*break*/, 6];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        /**显示角色 */
        SceneMgr_1.prototype.showRoles = function () {
            return __awaiter(this, void 0, void 0, function () {
                var table, floors, furnituresId, flag, item, towRoleActiveFurnitures, _i, furnituresId_1, i, table_1, randIdx, i, nowSetItem, i, floor, role, RandId, furnituresId_2, itemTable, pos;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            table = this.loadRoleActivityTime();
                            if (this.timeId) {
                                Oops_1.oops.timer.unRegister(this.timeId);
                            }
                            if (GameMgr_1.GameMgr.Instance.ConstructionState) {
                                this.leftTime = table.exchange;
                                this.timeId = Oops_1.oops.timer.register(this, "leftTime", this.onSecond, this.onComplete);
                                return [2 /*return*/];
                            }
                            else {
                                this.leftTime = table.exchange;
                                this.timeId = Oops_1.oops.timer.register(this, "leftTime", this.onSecond, this.onComplete);
                            }
                            floors = FloorsMgr_1.FloorsMgr.Instance.getRandFloorMgrs(2);
                            furnituresId = this.getActivitys(table);
                            flag = false;
                            item = null;
                            if (GameMgr_1.GameMgr.Instance.justShowGilr == false) {
                                towRoleActiveFurnitures = [];
                                for (_i = 0, furnituresId_1 = furnituresId; _i < furnituresId_1.length; _i++) {
                                    i = furnituresId_1[_i];
                                    if (i == "999999")
                                        continue;
                                    table_1 = new FurnitureData_1.FurnitureData(parseInt(i));
                                    if (table_1.interaction == 2) {
                                        towRoleActiveFurnitures.push(table_1.id + "");
                                    }
                                }
                                if (towRoleActiveFurnitures.length > 0) {
                                    randIdx = Math.floor(Math.random() * towRoleActiveFurnitures.length);
                                    item = FloorsMgr_1.FloorsMgr.Instance.findRandomFurnitureById(parseInt(towRoleActiveFurnitures[randIdx]));
                                    flag = true;
                                    for (i in furnituresId) {
                                        furnituresId[i] = towRoleActiveFurnitures[randIdx];
                                    }
                                }
                            }
                            nowSetItem = [];
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < (GameMgr_1.GameMgr.Instance.justShowGilr == true ? 1 : 2))) return [3 /*break*/, 4];
                            floor = floors[i];
                            if (!floor) return [3 /*break*/, 3];
                            role = this.roles[i];
                            if (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem == role) {
                                return [3 /*break*/, 3];
                            }
                            RandId = furnituresId[i];
                            if (!flag) {
                                item = FloorsMgr_1.FloorsMgr.Instance.findRandomFurnitureById(parseInt(RandId));
                            }
                            //改动
                            if (item) {
                                while (nowSetItem.indexOf(item.furnitureMgr) != -1) {
                                    furnituresId_2 = this.getActivitys(table);
                                    item = FloorsMgr_1.FloorsMgr.Instance.findRandomFurnitureById(parseInt(furnituresId_2[i]));
                                    break;
                                }
                                if (item) {
                                    itemTable = new FurnitureData_1.FurnitureData(item.furnitureMgr.itemId);
                                    if (itemTable.interaction == 1) {
                                        if (item && item.furnitureMgr)
                                            nowSetItem.push(item.furnitureMgr);
                                    }
                                }
                            }
                            pos = null;
                            if (item && SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && !SingletonModuleComp_1.smc.guide) {
                                pos = item.furnitureMgr.settlePos;
                            }
                            else {
                                pos = floor.PosIndex;
                                role.freshRoleState(DataObject_1.RoleAnimType.StandIdle);
                            }
                            if (role.node.active == false) {
                                role.node.active = true;
                                role.setRoleId(i == 0 ? DataObject_1.RoleEnum.girl : DataObject_1.RoleEnum.boy);
                                role.freshRoleDress();
                            }
                            GameMgr_1.GameMgr.Instance.nowActiveRole.set(i == 0 ? DataObject_1.RoleEnum.girl : DataObject_1.RoleEnum.boy, role);
                            role.originSettlePos = role.settlePos;
                            /**上一次放置位置 */
                            return [4 /*yield*/, role.setPosWithoutClicked(pos)];
                        case 2:
                            /**上一次放置位置 */
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**重新计算时间 */
        SceneMgr_1.prototype.recountSchedule = function () {
            var table = this.loadRoleActivityTime();
            Oops_1.oops.timer.unschedule(this.showRoles.bind(this));
            var waitTime = table.exchange;
            console.log("waitTime is" + waitTime);
            Oops_1.oops.timer.scheduleOnce(this.showRoles.bind(this), waitTime);
        };
        /**获取当前时间表数据 */
        SceneMgr_1.prototype.loadRoleActivityTime = function () {
            var nowTime = Oops_1.oops.timer.getServerTime();
            var secondOfDay = 24 * 60 * 60; // 每天的秒数
            return ActivityData_1.ActivityData.getCurrentSchedule(StringUtil_1.StringUtil.formatActivityTimeWithSec(nowTime % secondOfDay + (8 * 3600)));
        };
        /**获取当前的活动 */
        SceneMgr_1.prototype.getActivitys = function (table) {
            var furnitureIds = (table.furnitureId + "").split('|');
            var furnitureWeights = (table.furnitureWeight + "").split('|').map(Number);
            var totalWeight = furnitureWeights.reduce(function (prev, curr) { return prev + curr; }, 0);
            var result = [];
            for (var j = 0; j < 2; j++) { // 修改为循环两次
                var randomWeight = Math.floor(Math.random() * totalWeight);
                var furnitureId = '';
                for (var i = 0; i < furnitureWeights.length; i++) {
                    randomWeight -= furnitureWeights[i];
                    if (randomWeight < 0) {
                        furnitureId = furnitureIds[i];
                        break;
                    }
                }
                result.push(furnitureId);
            }
            return result;
        };
        SceneMgr_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.OffBtns, this.hideNpcs, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.OnBtns, this.showNpc, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.RefreshRoomFurniture, this.refreshRoomFurniture, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.HideNpcPos, this.hideNpcs, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.ShowNpcPos, this.showNpc, this);
            Oops_1.oops.timer.unschedule(this.showRoles.bind(this));
            Oops_1.oops.timer.unschedule(this.refreshPlantTime);
            // oops.timer.unRegister(this.showRoles.bind(this));
            Oops_1.oops.timer.unRegister(this.timeId);
        };
        /**设置子节点 */
        SceneMgr_1.prototype.setChild = function (furnitureMgr, manage) {
            var _a;
            if (manage === void 0) { manage = true; }
            var room = furnitureMgr.settlePos.room;
            (_a = this.furnitureParentMgrs[room]) === null || _a === void 0 ? void 0 : _a.setChild(furnitureMgr, manage);
        };
        //给位置标点,放入map
        SceneMgr_1.prototype.initPos = function () {
            FloorsMgr_1.FloorsMgr.Instance.floorPosMap.clear();
            var promises = [];
            if (GameMgr_1.GameMgr.Instance.manorMode) {
                var components = this.plotPosParent[0].getComponentsInChildren(FloorMgr_1.FloorMgr);
                var total = components.length;
                var n = 1;
                for (var i = 0; i < total; i++) {
                    var tempY = 25;
                    var rowNum = Math.ceil(n / tempY);
                    var columnNum = (n % tempY) == 0 ? tempY : (n % tempY);
                    var floorMgr = components[i];
                    var Pos = {
                        x: rowNum,
                        y: columnNum,
                        room: 0,
                    };
                    var p = floorMgr.initPlot(Pos);
                    promises.push(p);
                    n++;
                }
            }
            for (var index in this.posParant) {
                if (!this.floors[index].active) {
                    break;
                }
                var n = 1;
                var components = this.posParant[index].getComponentsInChildren(FloorMgr_1.FloorMgr);
                var total = components.length;
                for (var i = 0; i < total; i++) {
                    var tempY = this.roomSize[index].y;
                    var rowNum = Math.ceil(n / tempY);
                    var columnNum = (n % tempY) == 0 ? tempY : (n % tempY);
                    var floorMgr = components[i];
                    var Pos = {
                        x: rowNum,
                        y: columnNum,
                        room: parseInt(index),
                    };
                    var p = floorMgr.init(Pos);
                    promises.push(p);
                    n++;
                }
            }
            return Promise.all(promises);
        };
        SceneMgr_1.prototype.checkAllInPosNode = function (worldPos) {
            var results = [];
            var roomResult = {};
            var roomArr = [];
            for (var _i = 0, _a = this.furnitureParentMgrs; _i < _a.length; _i++) {
                var i = _a[_i];
                var tmpResult = i.checkAllInPosNode(worldPos, this.furnitureParentMgrs.indexOf(i));
                if (tmpResult && tmpResult.length > 0) {
                    tmpResult.sort(function (a, b) { return b.ZIdx - a.ZIdx; });
                    roomResult[tmpResult[0].settlePos.room] = tmpResult;
                    roomArr.push(tmpResult[0].settlePos.room);
                }
                roomArr.sort(function (a, b) { return b - a; });
            }
            for (var _b = 0, roomArr_1 = roomArr; _b < roomArr_1.length; _b++) {
                var room = roomArr_1[_b];
                var tmp = roomResult[room];
                results = results.concat(tmp);
            }
            return results;
        };
        SceneMgr_1.prototype.resetButtonCache = function () {
            this.buttonCache.length = 0;
        };
        // // Add a method to manage node order based on the z-axis
        SceneMgr_1.prototype.manageAllNodeOrder = function () {
            for (var _i = 0, _a = this.furnitureParentMgrs; _i < _a.length; _i++) {
                var i = _a[_i];
                i.manageNodeOrder();
            }
            if (GameMgr_1.GameMgr.Instance.manorMode)
                this.plotsParentMgrs[0].manageNodeOrder();
        };
        /**虚化所有家具 */
        SceneMgr_1.prototype.shadowAllFurnitures = function () {
            for (var _i = 0, _a = this.furnitureParentMgrs; _i < _a.length; _i++) {
                var i = _a[_i];
                i.shadowAllFurnitures();
            }
        };
        /**取消虚化所有家具 */
        SceneMgr_1.prototype.offShadowAllFurnitures = function () {
            for (var _i = 0, _a = this.furnitureParentMgrs; _i < _a.length; _i++) {
                var i = _a[_i];
                i.offShadowAllFurnitures();
            }
        };
        /**
         * 设置透明度
         * @param opacity 透明度
         */
        SceneMgr_1.prototype.setOpacity = function (opacity) {
            var _a;
            for (var i in this.floors) {
                if (opacity)
                    if (this.floors[i].getComponent(cc_1.UIOpacity)) {
                        this.floors[i].getComponent(cc_1.UIOpacity).opacity = opacity;
                        continue;
                    }
                if (!GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) {
                    if (this.floors[i].getComponent(cc_1.UIOpacity))
                        this.floors[i].getComponent(cc_1.UIOpacity).opacity = 255;
                    continue;
                }
                else {
                    if (parseInt(i) == ((_a = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _a === void 0 ? void 0 : _a.settlePos.room)) {
                        if (this.floors[i].getComponent(cc_1.UIOpacity)) {
                            this.floors[i].getComponent(cc_1.UIOpacity).opacity = 255;
                            continue;
                        }
                    }
                }
                if (this.floors[i].getComponent(cc_1.UIOpacity))
                    this.floors[i].getComponent(cc_1.UIOpacity).opacity = 110;
            }
        };
        /**显示气泡 */
        SceneMgr_1.prototype.showRoleAndBubble = function (event, eventStatus) {
            var _a;
            if (eventStatus === void 0) { eventStatus = 0; }
            return __awaiter(this, void 0, void 0, function () {
                var _b, node_1, npcPosNode_1, furniture, npcTb, role;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!event)
                                return [2 /*return*/];
                            if (event.eventType == TriggerData_1.EventTypeEnum.outside || event.eventType == TriggerData_1.EventTypeEnum.recoverItems || event.eventType == TriggerData_1.EventTypeEnum.adotPet || event.eventType == TriggerData_1.EventTypeEnum.businessEventDress || event.eventType == TriggerData_1.EventTypeEnum.businessEventFurniture) {
                                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FreshEventBtns);
                                // oops.message.dispatchEvent(GameEvent);
                            }
                            if (eventStatus != 1)
                                return [2 /*return*/];
                            _b = event.eventNpc;
                            switch (_b) {
                                case DataObject_1.RoleEnum.girl: return [3 /*break*/, 1];
                                case DataObject_1.RoleEnum.boy: return [3 /*break*/, 2];
                            }
                            return [3 /*break*/, 3];
                        case 1:
                            this.roles[0].showBubbleWithEvent(event);
                            return [3 /*break*/, 8];
                        case 2:
                            this.roles[1].showBubbleWithEvent(event);
                            return [3 /*break*/, 8];
                        case 3:
                            //创建角色
                            // const node = instantiate(this.roles[0].node);
                            if (!this.npcPosParent) {
                                return [3 /*break*/, 8];
                            }
                            npcPosNode_1 = ViewUtil_1.ViewUtil.findChildByName(event.eventNpc + "", this.npcPosParent);
                            if (!(npcPosNode_1.children.length > 0)) return [3 /*break*/, 4];
                            node_1 = npcPosNode_1.children[0];
                            return [3 /*break*/, 7];
                        case 4:
                            if (!(GameMgr_1.GameMgr.Instance.nowActiveRole.get(event.eventNpc) && ((_a = GameMgr_1.GameMgr.Instance.nowActiveRole.get(event.eventNpc)) === null || _a === void 0 ? void 0 : _a.node))) return [3 /*break*/, 5];
                            node_1 = GameMgr_1.GameMgr.Instance.nowActiveRole.get(event.eventNpc).node;
                            return [3 /*break*/, 7];
                        case 5: return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getRoleOnFurniturePrefabPath(), BundleConfig_1.default.instance.furniture.name)];
                        case 6:
                            node_1 = _c.sent();
                            _c.label = 7;
                        case 7:
                            node_1.parent = this.roleInitPos;
                            node_1.active = false;
                            furniture = node_1.getComponent(FurnitureMgr_1.FurnitureMgr);
                            if (furniture) {
                                GameMgr_1.GameMgr.Instance.nowActiveRole.set(event.eventNpc, furniture);
                                // node.parent 
                                node_1.position = cc_1.Vec3.ZERO;
                                npcTb = new Tablenpc_1.Tablenpc();
                                npcTb.init(event.eventNpc);
                                role = node_1.getComponentsInChildren(Role_1.Role).filter(function (i) { return i.node.active == true; });
                                role[0].enabledRefresh = true;
                                role[0].refreshSkin = npcTb.npcDress;
                                role[0].showSuitSkin(npcTb.npcDress);
                                node_1.active = true;
                                furniture.setRoleId(event.eventNpc);
                                furniture.showBubbleWithEvent(event);
                                this.scheduleOnce(function () {
                                    if (npcPosNode_1 && node_1.isValid && npcPosNode_1.isValid)
                                        node_1.parent = npcPosNode_1;
                                });
                            }
                            return [3 /*break*/, 8];
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        /**显示气泡 */
        SceneMgr_1.prototype.removeRoleAndBubble = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var node, npcPosNode, furniture;
                return __generator(this, function (_a) {
                    if (event.eventType == TriggerData_1.EventTypeEnum.outside || event.eventType == TriggerData_1.EventTypeEnum.businessEventDress || event.eventType == TriggerData_1.EventTypeEnum.businessEventFurniture) {
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FreshEventBtns);
                    }
                    switch (event.eventNpc) {
                        case DataObject_1.RoleEnum.girl:
                            this.roles[0].removeBubbleEvent(event);
                            break;
                        case DataObject_1.RoleEnum.boy:
                            this.roles[1].removeBubbleEvent(event);
                            break;
                        default:
                            if (!this.npcPosParent) {
                                break;
                            }
                            node = void 0;
                            npcPosNode = ViewUtil_1.ViewUtil.findChildByName(event.eventNpc + "", this.npcPosParent);
                            if (npcPosNode.children.length > 0) {
                                node = npcPosNode.children[0];
                            }
                            if (!node) {
                                return [2 /*return*/];
                            }
                            node.active = false;
                            furniture = node.getComponent(FurnitureMgr_1.FurnitureMgr);
                            if (furniture) {
                                furniture.removeBubbleEvent(event);
                            }
                            break;
                    }
                    return [2 /*return*/];
                });
            });
        };
        SceneMgr_1.prototype.upgradeUserRoom = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.initRoom()];
                        case 1:
                            _a.sent();
                            Oops_1.oops.log.start("更新房子: 初始化位置");
                            return [4 /*yield*/, this.initPos().then(function () {
                                    Oops_1.oops.log.end("更新房子: 初始化位置");
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, DataManager_1.default.Instance.parseJsonData()];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.showRoles()];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.showPets()];
                        case 5:
                            _a.sent();
                            this.destroyOldRoom();
                            this.guideOrNot();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SceneMgr_1.prototype.destroyOldRoom = function () {
            var oldRoom = this.room.children[0];
            oldRoom.destroy();
        };
        //放置摇钱树
        SceneMgr_1.prototype.setManorTree = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, pixel, size, url, node, furnitureMgr, vo, flag;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            GameMgr_1.GameMgr.Instance.manorTreeLock = true;
                            data = FurnitureData_1.FurnitureData.getAll().get(1101401);
                            pixel = StringUtil_1.StringUtil.stringToArray5(data.pixel);
                            size = {
                                xH: parseInt(pixel[0]),
                                yW: parseInt(pixel[1])
                            };
                            url = "prefab/manorBuff";
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(url, BundleConfig_1.default.instance.furniture.name)];
                        case 1:
                            node = _a.sent();
                            furnitureMgr = node.getComponent(FurnitureMgr_1.FurnitureMgr);
                            vo = new FurnitureVO_1.FurnitureVO({ id: data.id, name: data.name + "", direction: FurnitureEnum_1.FurnitureDirectionEnum.Left, type: data.furnitureType, settlePos: { x: 1, y: 1, room: 0 }, size: size, land_id: 4001, isPlotPos: true });
                            furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.init(vo, false);
                            furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.loadAsset();
                            furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.setPosWithoutClicked(furnitureMgr.settlePos);
                            flag = FloorsMgr_1.FloorsMgr.Instance.backtrackingPlot(furnitureMgr);
                            if (!flag) {
                                furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.putBack(false, true);
                            }
                            else {
                                furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.setExtend();
                                furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.updatePlotState();
                            }
                            FloorsMgr_1.FloorsMgr.Instance.HideAllFloorSprite();
                            GameMgr_1.GameMgr.Instance.mapManager.moveScreenToNode(furnitureMgr.getActiveNode(), 0);
                            //GameMgr.Instance.sceneMgr.checkShowMoveArrows(furnitureMgr!);
                            return [2 /*return*/, flag];
                    }
                });
            });
        };
        //关闭庄园小操作界面
        SceneMgr_1.prototype.closeManorOpNode = function () {
            this.waterNode.active = false;
            this.plantTimeNode.active = false;
        };
        //点击土地出现时间倒计时？
        SceneMgr_1.prototype.showPlantTime = function (plot, remainTimes) {
            if (this.plantTimeNode.active) {
                this.unschedule(this.refreshPlantTime);
                this.plantTimeNode.active = false;
                return;
            }
            this.plantRemainTime = remainTimes;
            ViewUtil_1.ViewUtil.setLabelStringByName("timeLabel", this.plantTimeNode, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.plantRemainTime));
            this.plantTimeNode.setWorldPosition(plot.cdNode.worldPosition);
            this.plantTimeNode.active = true;
            this.schedule(this.refreshPlantTime, 1);
        };
        //显示浇水的界面
        SceneMgr_1.prototype.showWaterUsePanel = function (plot) {
            if (this.waterNode.active) {
                this.waterNode.active = false;
                return;
            }
            this.waterSpeedPlot = plot.plotId;
            var plant = ManorPlantData_1.ManorPlantData.getAllData().find(function (x) { return x.id == DataManager_1.default.Instance.manorPlotState.get(plot.plotId).seed_id; });
            //刷新消耗和加速时间
            ViewUtil_1.ViewUtil.setLabelStringByName("consumeLabel", this.waterNode, plant.speedConsume.toString());
            //console.log(plant.speedValue / 100 * DataManager.Instance.manorPlotState.get(plot.plotId)!.maturetion_time);
            //console.log(StringUtil.formatTime(plant.speedValue / 100 * DataManager.Instance.manorPlotState.get(plot.plotId)!.maturetion_time));
            ViewUtil_1.ViewUtil.setLabelStringByName("timesLabel", this.waterNode, StringUtil_1.StringUtil.formatTime(plant.speedValue / 100 * DataManager_1.default.Instance.manorPlotState.get(plot.plotId).maturetion_time));
            this.waterNode.active = true;
            this.waterNode.setWorldPosition(plot.waterTipsNode.worldPosition);
        };
        //使用精力加速
        SceneMgr_1.prototype.btn_useWater = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            //判断精力是否充足
            var plant = ManorPlantData_1.ManorPlantData.getAllData().find(function (x) { return x.id == DataManager_1.default.Instance.manorPlotState.get(_this.waterSpeedPlot).seed_id; });
            if (plant.speedConsume > SingletonModuleComp_1.smc.account.AccountModel.manorPower) {
                HttpPost_1.HttpPost.instance.manorAdTimes(DataObject_1.DropType.ManorWater, function (data) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ComBuyPanel, [DataObject_1.DropType.ManorWater, data]);
                });
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.manorWaterPoor"));
                return;
            }
            HttpPost_1.HttpPost.instance.watering(this.waterSpeedPlot, 0, function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //console.log(data);
                    this.waterNode.active = false;
                    FloorsMgr_1.FloorsMgr.Instance.getAimPlotFloorMgrs(this.waterSpeedPlot).plotFurnitureMgr.playOpSpin(DataObject_1.PlotSpin.water);
                    DataManager_1.default.Instance.updatePlotState(data.manorLand);
                    SingletonModuleComp_1.smc.account.AccountModel.manorPower = data.manorPower;
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateManorPower);
                    return [2 /*return*/];
                });
            }); });
        };
        SceneMgr_1.prototype.refreshPlantTime = function () {
            if (this.plantRemainTime > 0) {
                this.plantRemainTime -= 1;
                ViewUtil_1.ViewUtil.setLabelStringByName("timeLabel", this.plantTimeNode, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.plantRemainTime));
            }
            else {
                this.plantTimeNode.active = false;
                this.unschedule(this.refreshPlantTime);
            }
        };
        SceneMgr_1.prototype.checkShowMoveArrows = function (furnitureMgr) {
            furnitureMgr && (furnitureMgr.isWallDeco ? this.showMoveArrow(furnitureMgr) : this.hideMoveArrow());
        };
        SceneMgr_1.prototype.saveAndHideMoveArrow = function () {
            this.hideMoveArrow(true);
        };
        SceneMgr_1.prototype.hideMoveArrow = function (isSave) {
            if (isSave === void 0) { isSave = false; }
            if (this.moveButton && this.moveButton.active) {
                var comp = this.moveButton.getComponent(FurnitureUpDown_1.FurnitureUpDown);
                isSave ? comp === null || comp === void 0 ? void 0 : comp.confirm() : comp === null || comp === void 0 ? void 0 : comp.cancel();
                this.moveButton.active = false;
            }
            GameMgr_1.GameMgr.Instance.clickItem.isEditWallDeco = false;
        };
        SceneMgr_1.prototype.showMoveArrow = function (furnitureMgr) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, activeNode;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.moveButton) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle('prefab/furniture/furnitureUpDown', BundleConfig_1.default.instance.guiBundle.name)];
                        case 1:
                            _a.moveButton = _b.sent();
                            _b.label = 2;
                        case 2:
                            this.room.insertChild(this.moveButton, 2);
                            this.moveButton.active = true;
                            activeNode = furnitureMgr.getActiveNode();
                            activeNode && (this.moveButton.setWorldPosition(activeNode.getWorldPosition()));
                            GameMgr_1.GameMgr.Instance.clickItem.isEditWallDeco = true;
                            return [2 /*return*/];
                    }
                });
            });
        };
        SceneMgr_1.prototype.updateArrowFace = function (arg0) {
            var _a, _b, _c;
            if (this.moveButton) {
                var room = arg0.settlePos.room;
                var x = ViewUtil_1.ViewUtil.getRelativePos(arg0.getActiveNode(), (_b = (_a = GameMgr_1.GameMgr.Instance.sceneMgr) === null || _a === void 0 ? void 0 : _a.furnitureParentMgrs[room]) === null || _b === void 0 ? void 0 : _b.node).x;
                var direction = (x > 0) ? FurnitureEnum_1.FurnitureDirectionEnum.Right : FurnitureEnum_1.FurnitureDirectionEnum.Left;
                (_c = this.moveButton.getComponent(FurnitureUpDown_1.FurnitureUpDown)) === null || _c === void 0 ? void 0 : _c.updateFace(direction);
            }
        };
        return SceneMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "SceneMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _roles_decorators = [property(FurnitureMgr_1.FurnitureMgr)];
        _roleInitPos_decorators = [property(cc_1.Node)];
        _npcPosParent_decorators = [property(cc_1.Node)];
        _room_decorators = [property(cc_1.Node)];
        _plots_decorators = [property(cc_1.Node)];
        _plantTimeNode_decorators = [property(cc_1.Node)];
        _waterNode_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _roles_decorators, { kind: "field", name: "roles", static: false, private: false, access: { has: function (obj) { return "roles" in obj; }, get: function (obj) { return obj.roles; }, set: function (obj, value) { obj.roles = value; } }, metadata: _metadata }, _roles_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _roleInitPos_decorators, { kind: "field", name: "roleInitPos", static: false, private: false, access: { has: function (obj) { return "roleInitPos" in obj; }, get: function (obj) { return obj.roleInitPos; }, set: function (obj, value) { obj.roleInitPos = value; } }, metadata: _metadata }, _roleInitPos_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _npcPosParent_decorators, { kind: "field", name: "npcPosParent", static: false, private: false, access: { has: function (obj) { return "npcPosParent" in obj; }, get: function (obj) { return obj.npcPosParent; }, set: function (obj, value) { obj.npcPosParent = value; } }, metadata: _metadata }, _npcPosParent_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _room_decorators, { kind: "field", name: "room", static: false, private: false, access: { has: function (obj) { return "room" in obj; }, get: function (obj) { return obj.room; }, set: function (obj, value) { obj.room = value; } }, metadata: _metadata }, _room_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _plots_decorators, { kind: "field", name: "plots", static: false, private: false, access: { has: function (obj) { return "plots" in obj; }, get: function (obj) { return obj.plots; }, set: function (obj, value) { obj.plots = value; } }, metadata: _metadata }, _plots_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _plantTimeNode_decorators, { kind: "field", name: "plantTimeNode", static: false, private: false, access: { has: function (obj) { return "plantTimeNode" in obj; }, get: function (obj) { return obj.plantTimeNode; }, set: function (obj, value) { obj.plantTimeNode = value; } }, metadata: _metadata }, _plantTimeNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _waterNode_decorators, { kind: "field", name: "waterNode", static: false, private: false, access: { has: function (obj) { return "waterNode" in obj; }, get: function (obj) { return obj.waterNode; }, set: function (obj, value) { obj.waterNode = value; } }, metadata: _metadata }, _waterNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SceneMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SceneMgr = _classThis;
}();
exports.SceneMgr = SceneMgr;
