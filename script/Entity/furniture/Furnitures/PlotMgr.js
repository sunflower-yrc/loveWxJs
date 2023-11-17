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
exports.PlotMgr = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var cc_4 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../../../game/common/bundle/BundleConfig");
var GameEvent_1 = require("../../../game/common/config/GameEvent");
var GameResPath_1 = require("../../../game/common/config/GameResPath");
var GameUIConfig_1 = require("../../../game/common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../../../game/common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../../../game/common/mgr/GameMgr");
var ManorFacilitiesData_1 = require("../../../game/manor/ManorFacilitiesData");
var ManorPlantData_1 = require("../../../game/manor/ManorPlantData");
var DataMgr_1 = require("../../../game/mgr/DataMgr");
var DataObject_1 = require("../../../game/tools/DataObject");
var HttpPost_1 = require("../../../game/tools/HttpPost");
var DataManager_1 = require("../../../Global/DataManager");
var FloorsMgr_1 = require("../../floor/FloorsMgr");
var FurnitureEnum_1 = require("../FurnitureEnum");
var FurnitureMgr_1 = require("../FurnitureMgr");
var ccclass = cc_4._decorator.ccclass, property = cc_4._decorator.property;
var PlotMgr = function () {
    var _classDecorators = [ccclass('PlotMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = FurnitureMgr_1.FurnitureMgr;
    var _instanceExtraInitializers = [];
    var _leftNode_decorators;
    var _leftNode_initializers = [];
    var _xPos_decorators;
    var _xPos_initializers = [];
    var _yPos_decorators;
    var _yPos_initializers = [];
    var _interaction_decorators;
    var _interaction_initializers = [];
    var _plantNode_decorators;
    var _plantNode_initializers = [];
    var _stateNode_decorators;
    var _stateNode_initializers = [];
    var _waterTipsNode_decorators;
    var _waterTipsNode_initializers = [];
    var _cdNode_decorators;
    var _cdNode_initializers = [];
    var _waterSpinNode_decorators;
    var _waterSpinNode_initializers = [];
    var _chucaoSpin_decorators;
    var _chucaoSpin_initializers = [];
    var _quchongSpin_decorators;
    var _quchongSpin_initializers = [];
    var _birdSpin_decorators;
    var _birdSpin_initializers = [];
    var _grassNode_decorators;
    var _grassNode_initializers = [];
    var _unlockTips_decorators;
    var _unlockTips_initializers = [];
    var PlotMgr = _classThis = /** @class */ (function (_super) {
        __extends(PlotMgr_1, _super);
        function PlotMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.leftNode = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _leftNode_initializers, null));
            _this.xPos = __runInitializers(_this, _xPos_initializers, 0);
            _this.yPos = __runInitializers(_this, _yPos_initializers, 0);
            _this.interaction = __runInitializers(_this, _interaction_initializers, false);
            _this.plantNode = __runInitializers(_this, _plantNode_initializers, null);
            _this.stateNode = __runInitializers(_this, _stateNode_initializers, null);
            _this.waterTipsNode = __runInitializers(_this, _waterTipsNode_initializers, null);
            _this.cdNode = __runInitializers(_this, _cdNode_initializers, null);
            _this.waterSpinNode = __runInitializers(_this, _waterSpinNode_initializers, null);
            _this.chucaoSpin = __runInitializers(_this, _chucaoSpin_initializers, null);
            _this.quchongSpin = __runInitializers(_this, _quchongSpin_initializers, null);
            _this.birdSpin = __runInitializers(_this, _birdSpin_initializers, null);
            _this.grassNode = __runInitializers(_this, _grassNode_initializers, null);
            _this.unlockTips = __runInitializers(_this, _unlockTips_initializers, null);
            _this.blockType = FurnitureEnum_1.BlockType.Plot;
            _this.direction = FurnitureEnum_1.FurnitureDirectionEnum.Left;
            _this.plantRemainTime = 0;
            return _this;
        }
        PlotMgr_1.prototype.updatePos = function (pos, touchState) {
            if ((this.settlePos.x == pos.x && this.settlePos.y == pos.y) && touchState != FurnitureEnum_1.TouchState.TouchEnd) {
                return;
            }
            var isValid = true;
            this.settlePos = pos;
            this.updateBlocks();
            //**占地色块显示 */
            isValid = this.freshPlotFloorSprites();
            if (isValid) {
                this.updateSettlePos(pos);
                GameMgr_1.GameMgr.Instance.sceneMgr.setOpacity();
                if (touchState == FurnitureEnum_1.TouchState.TouchEnd) {
                    GameMgr_1.GameMgr.Instance.originPos = this.settlePos;
                    GameMgr_1.GameMgr.Instance.originRotate = this.direction;
                    GameMgr_1.GameMgr.Instance.originIsPlotType = this.isPlotType;
                    this.action();
                }
                /**修正 */
                GameMgr_1.GameMgr.Instance.clickItem.updatePosToCenter();
            }
            this.offColorThis();
            this.centerPos = null;
            return isValid;
        };
        PlotMgr_1.prototype.updateSettlePos = function (pos) {
            FloorsMgr_1.FloorsMgr.Instance.GetPlotFloorByPos(pos).settle(this.node);
            this.node.setPosition(cc_1.Vec3.ZERO);
            var tempWorldPos = this.node.worldPosition;
            this.ZIdx = this.calculateZIndex();
            GameMgr_1.GameMgr.Instance.sceneMgr.setChild(this, true);
            this.node.worldPosition = tempWorldPos;
            this.updatePlotState();
        };
        //被点击
        PlotMgr_1.prototype.clicked = function (extend) {
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
            var flag = this.freshPlotFloorSprites();
            return flag;
        };
        PlotMgr_1.prototype.freshPlotFloorSprites = function () {
            FloorsMgr_1.FloorsMgr.Instance.HideAllFloorSprite();
            return FloorsMgr_1.FloorsMgr.Instance.checkPlotSpritesColor(this);
        };
        //关闭地块上的按钮点击
        PlotMgr_1.prototype.closeBtnClick = function () {
            this.getComponentsInChildren(cc_1.Button).forEach(function (e) {
                e.interactable = false;
            });
        };
        //恢复地块的按钮点击
        PlotMgr_1.prototype.openBtnClick = function () {
            this.getComponentsInChildren(cc_1.Button).forEach(function (e) {
                e.interactable = true;
            });
        };
        PlotMgr_1.prototype.onDestroy = function () {
            this.unschedule(this.refreshPlantTime);
            this.unscheduleAllCallbacks();
        };
        //配合种植缓存做的显示
        PlotMgr_1.prototype.showTempSeed = function () {
            ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.plantNode, GameResPath_1.GameResPath.getSeedSpPath(DataManager_1.default.Instance.manorTempPlantData.get(this.plotId), 0), BundleConfig_1.default.instance.guiBundle.name);
            this.plantNode.active = true;
        };
        //刷新土地状态
        PlotMgr_1.prototype.updatePlotState = function () {
            var _this = this;
            var _a, _b;
            this.unlockTips.active = false;
            this.stateNode.active = false;
            this.grassNode.active = false;
            this.plantNode.active = false;
            //this.playOpSpin(PlotSpin.nothing);
            this.unscheduleAllCallbacks();
            var plotData = DataManager_1.default.Instance.manorPlotState.get(this.plotId);
            if (plotData.seed_id != 0) {
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.getActiveNode(), GameResPath_1.GameResPath.getPlotStateSpPath(2), BundleConfig_1.default.instance.guiBundle.name);
                //刷新当前阶段的图片
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.plantNode, GameResPath_1.GameResPath.getSeedSpPath(plotData.seed_id, this.getPlantStage()), BundleConfig_1.default.instance.guiBundle.name);
                this.plantNode.active = true;
                this.schedule(this.refreshPlantTime, 1);
                var sta = 0;
                //判断是否有小鸟事件 优先判断小鸟事件
                if (plotData.eventList.has(1) && Oops_1.oops.timer.getServerTime() < plotData.eventList.get(1).start_time && ((_a = plotData.eventList.get(1)) === null || _a === void 0 ? void 0 : _a.status) == 1) {
                    this.scheduleOnce(function () {
                        //刷新地块信息->请求一遍刷新的接口
                        HttpPost_1.HttpPost.instance.getLandDetail(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                //console.log(data);
                                DataManager_1.default.Instance.updatePlotState(data.manorLand);
                                return [2 /*return*/];
                            });
                        }); });
                    }, plotData.eventList.get(1).start_time - Oops_1.oops.timer.getServerTime());
                }
                if (plotData.eventList.has(1) && Oops_1.oops.timer.getServerTime() >= plotData.eventList.get(1).start_time && ((_b = plotData.eventList.get(1)) === null || _b === void 0 ? void 0 : _b.status) == 1 && Oops_1.oops.timer.getServerTime() < plotData.eventList.get(1).end_time) {
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("state", this.stateNode, GameResPath_1.GameResPath.getPlotBubbleStateSpPath(4), BundleConfig_1.default.instance.guiBundle.name);
                    this.stateNode.active = true;
                    this.playOpSpin(DataObject_1.PlotSpin.ShowBirds);
                    sta = 1;
                    //开启一个事件结束事件得延迟
                    this.scheduleOnce(function () {
                        //刷新地块信息->请求一遍刷新的接口
                        HttpPost_1.HttpPost.instance.getLandDetail(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                //console.log(data);
                                DataManager_1.default.Instance.updatePlotState(data.manorLand);
                                return [2 /*return*/];
                            });
                        }); });
                    }, plotData.eventList.get(1).end_time - Oops_1.oops.timer.getServerTime());
                }
                else if (plotData.eventList.has(3) && this.getPlantStage() != 3) {
                    var event_1 = plotData.eventList.get(3);
                    if (event_1.status == 1 && Oops_1.oops.timer.getServerTime() >= plotData.eventList.get(3).start_time) //正在触发
                     {
                        ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("state", this.stateNode, GameResPath_1.GameResPath.getPlotBubbleStateSpPath(5), BundleConfig_1.default.instance.guiBundle.name);
                        this.stateNode.active = true;
                        this.playOpSpin(DataObject_1.PlotSpin.ShowInsect);
                        sta = 2;
                    }
                    else if (event_1.start_time > Oops_1.oops.timer.getServerTime()) //未来触发
                     {
                        this.scheduleOnce(function () {
                            //刷新地块信息->请求一遍刷新的接口
                            HttpPost_1.HttpPost.instance.getLandDetail(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    //console.log(data);
                                    DataManager_1.default.Instance.updatePlotState(data.manorLand);
                                    return [2 /*return*/];
                                });
                            }); });
                        }, event_1.start_time - Oops_1.oops.timer.getServerTime());
                    }
                }
                if (sta == 0) {
                    this.playOpSpin(DataObject_1.PlotSpin.nothing);
                    //判断是否可以浇水
                    if (plotData.watering_status == 0 && this.getPlantStage() != 3) //可以浇水，没有进入浇水cd
                     {
                        ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("state", this.stateNode, GameResPath_1.GameResPath.getPlotBubbleStateSpPath(1), BundleConfig_1.default.instance.guiBundle.name);
                        this.stateNode.active = true;
                    }
                    else if (plotData.watering_cd != 0) {
                        this.scheduleOnce(function () {
                            //刷新地块信息->请求一遍刷新的接口
                            HttpPost_1.HttpPost.instance.getLandDetail(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    //console.log(data);
                                    DataManager_1.default.Instance.updatePlotState(data.manorLand);
                                    return [2 /*return*/];
                                });
                            }); });
                        }, plotData.watering_cd);
                    }
                }
            }
            else {
                this.plantNode.active = false;
                this.waterTipsNode.active = false;
                this.cdNode.active = false;
                this.stateNode.active = false;
                this.playOpSpin(DataObject_1.PlotSpin.nothing);
                //判断已经解锁了？
                if (plotData.status == 0) {
                    ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.getActiveNode(), GameResPath_1.GameResPath.getPlotStateSpPath(2), BundleConfig_1.default.instance.guiBundle.name);
                    //判断杂草事件是否存在？
                    if (plotData.eventList.has(2)) {
                        var event_2 = plotData.eventList.get(2);
                        if (event_2.start_time <= Oops_1.oops.timer.getServerTime()) //有杂草事件
                         {
                            this.grassNode.active = true;
                            this.stateNode.active = true;
                            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("state", this.stateNode, GameResPath_1.GameResPath.getPlotBubbleStateSpPath(3), BundleConfig_1.default.instance.guiBundle.name);
                        }
                        else {
                            //定时器开始草的事件
                            this.scheduleOnce(function () {
                                //刷新地块信息->请求一遍刷新的接口
                                HttpPost_1.HttpPost.instance.getLandDetail(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        DataManager_1.default.Instance.updatePlotState(data.manorLand);
                                        return [2 /*return*/];
                                    });
                                }); });
                            }, event_2.start_time - Oops_1.oops.timer.getServerTime());
                        }
                    }
                }
                else {
                    ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.getActiveNode(), GameResPath_1.GameResPath.getPlotStateSpPath(3), BundleConfig_1.default.instance.guiBundle.name);
                    //是否可以解锁？
                    //this.unlockTips.active = true;
                    var fanci = ManorFacilitiesData_1.ManorFacilitiesData.getAllData().find(function (x) { return x.id == _this.plotId; });
                    if (SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel >= fanci.manorLevel)
                        this.unlockTips.active = true;
                }
            }
        };
        PlotMgr_1.prototype.refreshPlantTime = function () {
            if (this.plantRemainTime > 0) {
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.plantNode, GameResPath_1.GameResPath.getSeedSpPath(DataManager_1.default.Instance.manorPlotState.get(this.plotId).seed_id, this.getPlantStage()), BundleConfig_1.default.instance.guiBundle.name);
            }
            else {
                this.unschedule(this.refreshPlantTime);
                this.updatePlotState();
            }
        };
        PlotMgr_1.prototype.getPlantStage = function () {
            var _this = this;
            var _a;
            //计算阶段
            var seed = ManorPlantData_1.ManorPlantData.getAllData().find(function (x) { var _a; return x.id == ((_a = DataManager_1.default.Instance.manorPlotState.get(_this.plotId)) === null || _a === void 0 ? void 0 : _a.seed_id); });
            var curTime = Oops_1.oops.timer.getServerTime() - ((_a = DataManager_1.default.Instance.manorPlotState.get(this.plotId)) === null || _a === void 0 ? void 0 : _a.updateTime);
            this.plantRemainTime = DataManager_1.default.Instance.manorPlotState.get(this.plotId).maturetion_time - curTime;
            var stage = 0;
            for (var i = 0; i < seed.showStateArray.length; i++) {
                if (curTime < seed.showStateArray[i] / 100 * DataManager_1.default.Instance.manorPlotState.get(this.plotId).maturetion_time) {
                    stage = i;
                    break;
                }
            }
            if (curTime >= (seed.showStateArray[seed.showStateArray.length - 1] / 100 * DataManager_1.default.Instance.manorPlotState.get(this.plotId).maturetion_time)) {
                stage = 3;
            }
            return stage;
        };
        //点击自己---处理选中之类的情况
        PlotMgr_1.prototype.baseClick = function () {
            var _this = this;
            var _a, _b, _c, _d, _e;
            if (((_a = DataManager_1.default.Instance.manorPlotState.get(this.plotId)) === null || _a === void 0 ? void 0 : _a.status) == 0) {
                //是不是杂草事件
                var plotData = DataManager_1.default.Instance.manorPlotState.get(this.plotId);
                if (plotData.eventList.has(2)) {
                    var event_3 = plotData.eventList.get(2);
                    if (event_3.status == 1 && event_3.start_time <= Oops_1.oops.timer.getServerTime()) //有杂草事件
                     {
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorEventPop, [plotData, 2]);
                        return;
                    }
                }
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorSeed, { "aimPlotId": this.plotId });
            }
            //判断熟没熟？熟了就走收获的方法，没输再说
            else if (((_b = DataManager_1.default.Instance.manorPlotState.get(this.plotId)) === null || _b === void 0 ? void 0 : _b.status) == 1) {
                if (this.getPlantStage() == 3) {
                    //判断有没有鸟？有鸟就走弹框，没有就走收获
                    var plotData = DataManager_1.default.Instance.manorPlotState.get(this.plotId);
                    var hasBird = plotData.eventList.has(1) && Oops_1.oops.timer.getServerTime() >= plotData.eventList.get(1).start_time && ((_c = plotData.eventList.get(1)) === null || _c === void 0 ? void 0 : _c.status) == 1 && Oops_1.oops.timer.getServerTime() < plotData.eventList.get(1).end_time;
                    if (hasBird) {
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorEventPop, [plotData, 1]);
                    }
                    else {
                        HttpPost_1.HttpPost.instance.harvest(this.plotId, 1, function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                //console.log(data);
                                SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin = data.manorCoin;
                                DataManager_1.default.Instance.updatePlotState(data.manorLand);
                                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("manor.harvest"));
                                // this.updatePlotState();
                                Oops_1.oops.gui.open(GameUIConfig_1.UIID.CurrencyManorFly);
                                DataMgr_1.DataMgr.updateUserData(null, null, data.taskList);
                                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowHomeCurrencyAnim, 3);
                                return [2 /*return*/];
                            });
                        }); });
                    }
                }
                else {
                    var curTime = Oops_1.oops.timer.getServerTime() - ((_d = DataManager_1.default.Instance.manorPlotState.get(this.plotId)) === null || _d === void 0 ? void 0 : _d.updateTime);
                    GameMgr_1.GameMgr.Instance.sceneMgr.showPlantTime(this, DataManager_1.default.Instance.manorPlotState.get(this.plotId).maturetion_time - curTime);
                }
            }
            else if (((_e = DataManager_1.default.Instance.manorPlotState.get(this.plotId)) === null || _e === void 0 ? void 0 : _e.status) == 2) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorFacilitiesUp, this.plotId);
            }
        };
        PlotMgr_1.prototype.btn_BubbleState = function () {
            var plotData = DataManager_1.default.Instance.manorPlotState.get(this.plotId);
            if (plotData.eventList.has(2)) {
                var event_4 = plotData.eventList.get(2);
                if (event_4.status == 1) //有杂草事件
                 {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorEventPop, [plotData, 2]);
                }
            }
            else if (plotData.eventList.has(1) && Oops_1.oops.timer.getServerTime() >= plotData.eventList.get(1).start_time && plotData.eventList.get(1).status == 1) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorEventPop, [plotData, 1]);
            }
            else if (plotData.eventList.has(3) && Oops_1.oops.timer.getServerTime() >= plotData.eventList.get(3).start_time && plotData.eventList.get(3).status == 1) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorEventPop, [plotData, 3]);
            }
            else {
                GameMgr_1.GameMgr.Instance.sceneMgr.showWaterUsePanel(this);
            }
        };
        //播放土地相关的操作动画 
        PlotMgr_1.prototype.playOpSpin = function (spin) {
            var _a, _b, _c, _d, _e, _f;
            if (spin == DataObject_1.PlotSpin.nothing) {
                //全部关掉
                this.quchongSpin.active = false;
                this.birdSpin.active = false;
                return;
            }
            if (spin == DataObject_1.PlotSpin.water) {
                this.waterSpinNode.active = true;
                (_a = this.waterSpinNode.getComponent(cc_2.sp.Skeleton)) === null || _a === void 0 ? void 0 : _a.setAnimation(0, "animation", false);
            }
            else if (spin == DataObject_1.PlotSpin.weeding) {
                this.chucaoSpin.active = true;
                (_b = this.chucaoSpin.getComponent(cc_2.sp.Skeleton)) === null || _b === void 0 ? void 0 : _b.setAnimation(0, "animation", false);
            }
            else if (spin == DataObject_1.PlotSpin.disinsectization) {
                this.quchongSpin.active = true;
                (_c = this.quchongSpin.getComponent(cc_2.sp.Skeleton)) === null || _c === void 0 ? void 0 : _c.setAnimation(0, "leave", false);
            }
            else if (spin == DataObject_1.PlotSpin.DriveBirds) {
                this.birdSpin.active = true;
                (_d = this.birdSpin.getComponent(cc_2.sp.Skeleton)) === null || _d === void 0 ? void 0 : _d.setAnimation(0, "leave", false);
            }
            else if (spin == DataObject_1.PlotSpin.ShowBirds) {
                this.birdSpin.active = true;
                (_e = this.birdSpin.getComponent(cc_2.sp.Skeleton)) === null || _e === void 0 ? void 0 : _e.setAnimation(0, "idle", true);
            }
            else if (spin == DataObject_1.PlotSpin.ShowInsect) {
                this.quchongSpin.active = true;
                (_f = this.quchongSpin.getComponent(cc_2.sp.Skeleton)) === null || _f === void 0 ? void 0 : _f.setAnimation(0, "idle", true);
            }
        };
        return PlotMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PlotMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _leftNode_decorators = [property(cc_4.Node)];
        _xPos_decorators = [property(cc_1.CCInteger)];
        _yPos_decorators = [property(cc_1.CCInteger)];
        _interaction_decorators = [property(cc_3.CCBoolean)];
        _plantNode_decorators = [property(cc_4.Node)];
        _stateNode_decorators = [property(cc_4.Node)];
        _waterTipsNode_decorators = [property(cc_4.Node)];
        _cdNode_decorators = [property(cc_4.Node)];
        _waterSpinNode_decorators = [property(cc_4.Node)];
        _chucaoSpin_decorators = [property(cc_4.Node)];
        _quchongSpin_decorators = [property(cc_4.Node)];
        _birdSpin_decorators = [property(cc_4.Node)];
        _grassNode_decorators = [property(cc_4.Node)];
        _unlockTips_decorators = [property(cc_4.Node)];
        __esDecorate(null, null, _leftNode_decorators, { kind: "field", name: "leftNode", static: false, private: false, access: { has: function (obj) { return "leftNode" in obj; }, get: function (obj) { return obj.leftNode; }, set: function (obj, value) { obj.leftNode = value; } }, metadata: _metadata }, _leftNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _xPos_decorators, { kind: "field", name: "xPos", static: false, private: false, access: { has: function (obj) { return "xPos" in obj; }, get: function (obj) { return obj.xPos; }, set: function (obj, value) { obj.xPos = value; } }, metadata: _metadata }, _xPos_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _yPos_decorators, { kind: "field", name: "yPos", static: false, private: false, access: { has: function (obj) { return "yPos" in obj; }, get: function (obj) { return obj.yPos; }, set: function (obj, value) { obj.yPos = value; } }, metadata: _metadata }, _yPos_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _interaction_decorators, { kind: "field", name: "interaction", static: false, private: false, access: { has: function (obj) { return "interaction" in obj; }, get: function (obj) { return obj.interaction; }, set: function (obj, value) { obj.interaction = value; } }, metadata: _metadata }, _interaction_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _plantNode_decorators, { kind: "field", name: "plantNode", static: false, private: false, access: { has: function (obj) { return "plantNode" in obj; }, get: function (obj) { return obj.plantNode; }, set: function (obj, value) { obj.plantNode = value; } }, metadata: _metadata }, _plantNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _stateNode_decorators, { kind: "field", name: "stateNode", static: false, private: false, access: { has: function (obj) { return "stateNode" in obj; }, get: function (obj) { return obj.stateNode; }, set: function (obj, value) { obj.stateNode = value; } }, metadata: _metadata }, _stateNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _waterTipsNode_decorators, { kind: "field", name: "waterTipsNode", static: false, private: false, access: { has: function (obj) { return "waterTipsNode" in obj; }, get: function (obj) { return obj.waterTipsNode; }, set: function (obj, value) { obj.waterTipsNode = value; } }, metadata: _metadata }, _waterTipsNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cdNode_decorators, { kind: "field", name: "cdNode", static: false, private: false, access: { has: function (obj) { return "cdNode" in obj; }, get: function (obj) { return obj.cdNode; }, set: function (obj, value) { obj.cdNode = value; } }, metadata: _metadata }, _cdNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _waterSpinNode_decorators, { kind: "field", name: "waterSpinNode", static: false, private: false, access: { has: function (obj) { return "waterSpinNode" in obj; }, get: function (obj) { return obj.waterSpinNode; }, set: function (obj, value) { obj.waterSpinNode = value; } }, metadata: _metadata }, _waterSpinNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _chucaoSpin_decorators, { kind: "field", name: "chucaoSpin", static: false, private: false, access: { has: function (obj) { return "chucaoSpin" in obj; }, get: function (obj) { return obj.chucaoSpin; }, set: function (obj, value) { obj.chucaoSpin = value; } }, metadata: _metadata }, _chucaoSpin_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _quchongSpin_decorators, { kind: "field", name: "quchongSpin", static: false, private: false, access: { has: function (obj) { return "quchongSpin" in obj; }, get: function (obj) { return obj.quchongSpin; }, set: function (obj, value) { obj.quchongSpin = value; } }, metadata: _metadata }, _quchongSpin_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _birdSpin_decorators, { kind: "field", name: "birdSpin", static: false, private: false, access: { has: function (obj) { return "birdSpin" in obj; }, get: function (obj) { return obj.birdSpin; }, set: function (obj, value) { obj.birdSpin = value; } }, metadata: _metadata }, _birdSpin_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _grassNode_decorators, { kind: "field", name: "grassNode", static: false, private: false, access: { has: function (obj) { return "grassNode" in obj; }, get: function (obj) { return obj.grassNode; }, set: function (obj, value) { obj.grassNode = value; } }, metadata: _metadata }, _grassNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _unlockTips_decorators, { kind: "field", name: "unlockTips", static: false, private: false, access: { has: function (obj) { return "unlockTips" in obj; }, get: function (obj) { return obj.unlockTips; }, set: function (obj, value) { obj.unlockTips = value; } }, metadata: _metadata }, _unlockTips_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PlotMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PlotMgr = _classThis;
}();
exports.PlotMgr = PlotMgr;
