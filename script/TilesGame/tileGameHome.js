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
exports.tileGameHome = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../game/common/bundle/BundleConfig");
var GameEvent_1 = require("../game/common/config/GameEvent");
var GameResPath_1 = require("../game/common/config/GameResPath");
var GameUIConfig_1 = require("../game/common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../game/common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../game/mgr/DataMgr");
var DropMgr_1 = require("../game/mgr/DropMgr");
var GlobalData_1 = require("../game/common/tableData/GlobalData");
var TileData_1 = require("../game/common/tableData/TileData");
var TileRewardData_1 = require("../game/common/tableData/TileRewardData");
var DataObject_1 = require("../game/tools/DataObject");
var HttpPost_1 = require("../game/tools/HttpPost");
var bettery_1 = require("./bettery");
var SdkPlatform_1 = require("../game/platform/SdkPlatform");
var cc_2 = require("cc");
var cc_3 = require("cc");
var GameMgr_1 = require("../game/common/mgr/GameMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var tileGameHome = function () {
    var _classDecorators = [ccclass('tileGameHome')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _timer_decorators;
    var _timer_initializers = [];
    var _buyPanel_decorators;
    var _buyPanel_initializers = [];
    var tileGameHome = _classThis = /** @class */ (function (_super) {
        __extends(tileGameHome_1, _super);
        function tileGameHome_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.data = (__runInitializers(_this, _instanceExtraInitializers), null);
            _this.timer = __runInitializers(_this, _timer_initializers, null);
            _this.buyPanel = __runInitializers(_this, _buyPanel_initializers, null);
            _this.leftTime = 0;
            _this.playAdFlag = false;
            _this.needNum = 0;
            _this.btnCb = null;
            return _this;
        }
        tileGameHome_1.prototype.onAdded = function (data) {
            Oops_1.oops.audio.playMusic(DataObject_1.AudioType.Bgm_Tile);
            var gameDetiles = data.gameDetail;
            SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel = gameDetiles.pass;
            SingletonModuleComp_1.smc.account.AccountModel.vm.prop1 = gameDetiles.revocationProp;
            SingletonModuleComp_1.smc.account.AccountModel.vm.prop2 = gameDetiles.promptProp;
            SingletonModuleComp_1.smc.account.AccountModel.vm.prop3 = gameDetiles.shuffleProp;
            SingletonModuleComp_1.smc.account.AccountModel.power = gameDetiles.power;
            this.data = gameDetiles;
            this.initTween();
            this.refreshUI();
            this.setTimer();
        };
        tileGameHome_1.prototype.onSecond = function () {
            this.formatTime(this.leftTime);
            // console.log("每秒触发一次");
        };
        tileGameHome_1.prototype.onComplete = function () {
            // console.log("倒计时完成触发");
            var _this = this;
            Oops_1.oops.timer.unRegister(this.timeId);
            this.timer.node.active = false;
            if (SingletonModuleComp_1.smc.account.AccountModel.power < this.data.powerMax) {
                SingletonModuleComp_1.smc.account.AccountModel.power++;
                this.refreshUI();
                HttpPost_1.HttpPost.instance.recoverPower(function (data) {
                    if (_this.data.restoreTime) {
                        _this.data.restoreTime = data.time;
                    }
                    _this.setTimer();
                });
            }
        };
        tileGameHome_1.prototype.refreshUI = function () {
            var bettertNodes = ViewUtil_1.ViewUtil.getChildByName("bettertNodes", this.node);
            bettertNodes.getComponent(cc_1.UITransform).width = 50 + (46.4 * this.data.powerMax);
            this.timer.getComponent(cc_1.UITransform).width = 141 + (5 * this.data.powerMax);
            var powerMax = this.data.powerMax;
            var power = SingletonModuleComp_1.smc.account.AccountModel.power;
            this.node.getComponentsInChildren(bettery_1.bettery).map(function (bty) {
                bty.node.active = true;
                if (power > 0) {
                    bty.light();
                }
                else {
                    bty.gray();
                }
                if (powerMax <= 0) {
                    bty.node.active = false;
                }
                powerMax--;
                power--;
            });
            if (power >= powerMax) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("maxLab", bettertNodes, true);
                if ((power - powerMax) > 0) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("extra", bettertNodes, true);
                    ViewUtil_1.ViewUtil.setLabelStringByName("extra/num", bettertNodes, "+" + (power - powerMax));
                }
                else {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("extra", bettertNodes, false);
                }
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("maxLab", bettertNodes, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("extra", bettertNodes, false);
            }
            var proBg = ViewUtil_1.ViewUtil.getChildByName("proBg", this.node);
            ViewUtil_1.ViewUtil.setNodeActiveByName("bubble", proBg, this.data.collectReward == 1);
            ViewUtil_1.ViewUtil.setNodeActiveByName("light", proBg, this.data.collectReward == 1);
            var mergeRewardTable = new TileRewardData_1.TileRewardData();
            mergeRewardTable.getData();
            var bfCondition = 0;
            var bfTable = null;
            if (mergeRewardTable.id - 1 > 0) {
                bfTable = new TileRewardData_1.TileRewardData();
                bfTable.init(mergeRewardTable.id - 1);
                bfCondition = bfTable.pointCondition;
            }
            //设置奖励icon地址
            var reward = "";
            if (this.data.collectReward == 0) {
                reward = mergeRewardTable.conditionReward;
            }
            else {
                reward = bfTable.conditionReward;
            }
            var element = reward.split("-");
            this.data.rewardIcon = DropMgr_1.DropMgr.getDropInfo(parseInt(element[0]), parseInt(element[1]), parseInt(element[2])).iconUrl;
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("box", this.node, this.data.rewardIcon, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.getChildByName("pro", proBg).getComponent(cc_1.Sprite).fillRange = (SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel - bfCondition - 1) / (mergeRewardTable.pointCondition - bfCondition);
            ViewUtil_1.ViewUtil.getChildByName("giftNum", proBg).getComponent(cc_1.Label).string = "".concat(SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel - 1, "/").concat(mergeRewardTable.pointCondition);
        };
        /**创建计时器 */
        tileGameHome_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
                this.timer.node.active = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("addBtn", this.node, false);
            }
            if (!this.data.restoreTime) {
                this.timer.node.active = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("addBtn", this.node, false);
                return;
            }
            if (SingletonModuleComp_1.smc.account.AccountModel.power >= this.data.powerMax) {
                this.timer.node.active = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("addBtn", this.node, false);
                return;
            }
            this.leftTime = Math.ceil(this.data.restoreTime + 1 - Oops_1.oops.timer.getServerTime());
            if (this.leftTime <= 0) {
                this.timer.node.active = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("addBtn", this.node, false);
                return;
            }
            this.timer.node.active = true;
            this.formatTime(this.leftTime);
            this.timeId = Oops_1.oops.timer.register(this, "leftTime", this.onSecond, this.onComplete);
            ViewUtil_1.ViewUtil.setNodeActiveByName("addBtn", this.node, true);
        };
        tileGameHome_1.prototype.formatTime = function (remainingSeconds) {
            if (this.isValid)
                this.timer.string = StringUtil_1.StringUtil.formatTimeWithSec(remainingSeconds) + Oops_1.oops.language.getLangByID("TileGame.afterTime");
        };
        tileGameHome_1.prototype.onDestroy = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.TileGameHome);
        };
        tileGameHome_1.prototype.start = function () {
            var _this = this;
            ViewUtil_1.ViewUtil.getChildByName("bg", this.buyPanel).on(cc_1.Node.EventType.TOUCH_START, function () {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                _this.buyPanel.active = false;
            }, this);
            var enterGameBtn = ViewUtil_1.ViewUtil.getChildByName("enterGameBtn", this.node);
            enterGameBtn.on(cc_1.Node.EventType.TOUCH_START, function () {
                for (var _i = 0, _a = enterGameBtn.children; _i < _a.length; _i++) {
                    var i = _a[_i];
                    // 将节点位置沿着 Y 轴移动 50 个像素
                    i.position = (0, cc_1.v3)(i.position.x, i.position.y - 10, i.position.z);
                }
            }, this);
            enterGameBtn.on(cc_1.Node.EventType.TOUCH_CANCEL, function () {
                for (var _i = 0, _a = enterGameBtn.children; _i < _a.length; _i++) {
                    var i = _a[_i];
                    // 将节点位置沿着 Y 轴移动 50 个像素
                    i.position = (0, cc_1.v3)(i.position.x, i.position.y + 10, i.position.z);
                }
            }, this);
            enterGameBtn.on(cc_1.Node.EventType.TOUCH_END, function () {
                for (var _i = 0, _a = enterGameBtn.children; _i < _a.length; _i++) {
                    var i = _a[_i];
                    // 将节点位置沿着 Y 轴移动 50 个像素
                    i.position = (0, cc_1.v3)(i.position.x, i.position.y + 10, i.position.z);
                }
            }, this);
            ViewUtil_1.ViewUtil.getChildByName("bettertNodes", this.node).on("click", function () {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                if (SingletonModuleComp_1.smc.account.AccountModel.power >= _this.data.powerMax) {
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("TileGame.limited"));
                    return;
                }
                _this.showBuyToolPanel(4);
            }, this);
            ViewUtil_1.ViewUtil.getChildByName("addBtn", this.node).on("click", function () {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                if (SingletonModuleComp_1.smc.account.AccountModel.power >= _this.data.powerMax) {
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("TileGame.limited"));
                    return;
                }
                _this.showBuyToolPanel(4);
            }, this);
            ViewUtil_1.ViewUtil.getChildByName("prop1Add", this.node).on("click", function () {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                _this.showBuyToolPanel(1);
            }, this);
            ViewUtil_1.ViewUtil.getChildByName("addBtn1", this.node).on("click", function () {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                _this.showBuyToolPanel(1);
            }, this);
            ViewUtil_1.ViewUtil.getChildByName("prop2Add", this.node).on("click", function () {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                _this.showBuyToolPanel(2);
            }, this);
            ViewUtil_1.ViewUtil.getChildByName("addBtn2", this.node).on("click", function () {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                _this.showBuyToolPanel(2);
            }, this);
            ViewUtil_1.ViewUtil.getChildByName("prop3Add", this.node).on("click", function () {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                _this.showBuyToolPanel(3);
            }, this);
            ViewUtil_1.ViewUtil.getChildByName("addBtn3", this.node).on("click", function () {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                _this.showBuyToolPanel(3);
            }, this);
            ViewUtil_1.ViewUtil.setLabelStringByName("levelNumDes", this.node, Oops_1.oops.language.getLangByID("TileGame.levelDes", SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel));
        };
        /**关闭界面 */
        tileGameHome_1.prototype.closePanel = function () {
            Oops_1.oops.audio.playMusic(DataObject_1.AudioType.Bgm_Menu);
            GameMgr_1.GameMgr.Instance.backHome();
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.TileGameHome);
        };
        /**进入游戏按钮 */
        tileGameHome_1.prototype.btnEnterGame = function () {
            return __awaiter(this, void 0, void 0, function () {
                var vo;
                var _this = this;
                return __generator(this, function (_a) {
                    Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                    if (this.data.collectReward == 1) {
                        this.showBuyToolPanel(-1);
                        return [2 /*return*/];
                    }
                    if (SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel > TileData_1.TileData.getLength()) {
                        Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("TileGame.toWait"));
                        ;
                        return [2 /*return*/];
                    }
                    if (SingletonModuleComp_1.smc.account.AccountModel.power <= 0) {
                        this.showBuyToolPanel(4);
                        return [2 /*return*/];
                    }
                    vo = new DataObject_1.TileGameVo(4, 1);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.LoadingIn);
                    HttpPost_1.HttpPost.instance.expendProp(vo, function (data) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    SingletonModuleComp_1.smc.account.AccountModel.power--;
                                    return [4 /*yield*/, Oops_1.oops.gui.openAsync(GameUIConfig_1.UIID.TileGame, this.data)];
                                case 1:
                                    _a.sent();
                                    GameMgr_1.GameMgr.Instance.changeFullView();
                                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.TileGameHome);
                                    //更新数据
                                    DataMgr_1.DataMgr.updateUserData(null, null, data.taskList);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        };
        /**获得奖励 */
        tileGameHome_1.prototype.getReward = function () {
            return __awaiter(this, void 0, void 0, function () {
                var guide_id;
                var _this = this;
                return __generator(this, function (_a) {
                    if (this.data.collectReward != 1) {
                        Oops_1.oops.language.getLangByID("TileGame.yetReward");
                        return [2 /*return*/];
                    }
                    guide_id = 0;
                    if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide && SingletonModuleComp_1.smc.guide.GuideModel.step < 23) {
                        guide_id = 23;
                    }
                    HttpPost_1.HttpPost.instance.receiveReward(guide_id, function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var dropData, dropInfo;
                        return __generator(this, function (_a) {
                            //更新数据
                            DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                            this.data.collectReward = 0;
                            dropData = DropMgr_1.DropMgr.getDropData(data.reward);
                            dropInfo = new DataObject_1.DropInfo();
                            dropInfo.dropData = dropData;
                            dropInfo.dropFrom = DataObject_1.DropFrom.TileGame;
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                            this.refreshUI();
                            return [2 /*return*/];
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        };
        /**显示购买界面 */
        tileGameHome_1.prototype.showBuyPanel = function () {
            this.buyPanel.active = true;
            var toolNode = ViewUtil_1.ViewUtil.getChildByName("toolType", this.buyPanel);
            ViewUtil_1.ViewUtil.setSingleSpriteFrame(toolNode, GameResPath_1.GameResPath.getToolTypeSpfPath(4), BundleConfig_1.default.instance.guiBundle.name);
            var globalTable = new GlobalData_1.GlobalData(4);
            var data = globalTable.value.split("|");
            if (this.data.powerTimes < parseInt(data[0])) {
                ViewUtil_1.ViewUtil.setLabelStringByName("des", this.buyPanel, Oops_1.oops.language.getLangByID("TileGame.ADGetPower"));
                ViewUtil_1.ViewUtil.setLabelStringByName("getTimes", this.buyPanel, "".concat(parseInt(data[0]) - this.data.powerTimes, "/").concat(data[0]));
                ViewUtil_1.ViewUtil.setNodeActiveByName("buyBtn", this.buyPanel, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("adBtn", this.buyPanel, true);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("buyBtn", this.buyPanel, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("adBtn", this.buyPanel, false);
                var nums = data[1].split("-");
                var needNum = parseInt(nums[0]) + parseInt(nums[1]) * (this.data.powerTimes - parseInt(data[0]));
                //显示购买
                ViewUtil_1.ViewUtil.setLabelStringByName("des", this.buyPanel, Oops_1.oops.language.getLangByID("TileGame.DiamondPowerDes", needNum));
                ViewUtil_1.ViewUtil.setLabelStringByName("needNum", this.buyPanel, "x".concat(needNum));
            }
        };
        /**显示购买界面
         * id =-1时候是领奖确认
         * 1,2,3,4是道具
         * itemId是id+1
         */
        tileGameHome_1.prototype.showBuyToolPanel = function (id) {
            var _this = this;
            ViewUtil_1.ViewUtil.getChildByName("adBtn", this.buyPanel).off("click", this.btnReward, this);
            ViewUtil_1.ViewUtil.getChildByName("buyBtn", this.buyPanel).off("click", this.btnReward, this);
            ViewUtil_1.ViewUtil.getChildByName("getReward", this.buyPanel).off("click", this.btnReward, this);
            this.playAdFlag = false;
            var itemId = id + 1;
            this.btnCb = function () {
                if (itemId == 0) {
                    _this.buyPanel.active = false;
                    _this.getReward();
                    return;
                }
                if (_this.needNum && _this.needNum > SingletonModuleComp_1.smc.account.AccountModel.vm.jewel) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.JumpTip, { type: DataObject_1.JumpTipType.diamond, closeView: GameUIConfig_1.UIID.TileGameHome });
                    return;
                }
                var vo = new DataObject_1.TileGameVo(itemId, 1);
                HttpPost_1.HttpPost.instance.upMiniGame(0, vo, SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel, function (data) {
                    Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Drop);
                    SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                    switch (itemId) {
                        case 2:
                            SingletonModuleComp_1.smc.account.AccountModel.vm.prop1 = data.numerical;
                            _this.data.revocationTimes++;
                            break;
                        case 3:
                            SingletonModuleComp_1.smc.account.AccountModel.vm.prop2 = data.numerical;
                            _this.data.promptTimes++;
                            break;
                        case 4:
                            SingletonModuleComp_1.smc.account.AccountModel.vm.prop3 = data.numerical;
                            _this.data.shuffleTimes++;
                            break;
                        case 5:
                            SingletonModuleComp_1.smc.account.AccountModel.power = data.numerical;
                            _this.data.powerTimes++;
                            _this.refreshUI();
                            _this.setTimer();
                            break;
                        default:
                            break;
                    }
                    _this.buyPanel.active = false;
                });
            };
            ViewUtil_1.ViewUtil.getChildByName("adBtn", this.buyPanel).on("click", this.btnReward, this);
            ViewUtil_1.ViewUtil.getChildByName("buyBtn", this.buyPanel).on("click", this.btnReward, this);
            ViewUtil_1.ViewUtil.getChildByName("getReward", this.buyPanel).on("click", this.btnReward, this);
            this.buyPanel.active = true;
            var toolNode = ViewUtil_1.ViewUtil.getChildByName("toolType", this.buyPanel);
            ViewUtil_1.ViewUtil.setSingleSpriteFrame(toolNode, GameResPath_1.GameResPath.getToolTypeSpfPath(id), BundleConfig_1.default.instance.guiBundle.name);
            if (itemId == 0) {
                ViewUtil_1.ViewUtil.setLabelStringByName("des", this.buyPanel, Oops_1.oops.language.getLangByID("TileGame.getRewardDes"));
                ViewUtil_1.ViewUtil.setNodeActiveByName("buyBtn", this.buyPanel, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("adBtn", this.buyPanel, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getReward", this.buyPanel, true);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("toolType", this.buyPanel, this.data.rewardIcon, BundleConfig_1.default.instance.guiBundle.name);
                this.needNum = 0;
                return;
            }
            /**读取的表数据 */
            var globalTable = null;
            /**读取的当前道具的回复次数 */
            var thisTimes = null;
            switch (itemId) {
                case 2:
                    globalTable = new GlobalData_1.GlobalData(5);
                    thisTimes = this.data.revocationTimes;
                    break;
                case 3:
                    globalTable = new GlobalData_1.GlobalData(5);
                    thisTimes = this.data.promptTimes;
                    break;
                case 4:
                    globalTable = new GlobalData_1.GlobalData(5);
                    thisTimes = this.data.shuffleTimes;
                    break;
                case 5:
                    globalTable = new GlobalData_1.GlobalData(4);
                    thisTimes = this.data.powerTimes;
                    break;
                default:
                    break;
            }
            var data = globalTable.value.split("|");
            if (thisTimes < parseInt(data[0])) {
                //显示广告
                this.playAdFlag = true;
                switch (itemId) {
                    case 2:
                        SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.TileGameProp1);
                        this.nowPlayAdFlag = DataObject_1.AdRewardType.TileGameProp1;
                        break;
                    case 3:
                        SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.TileGameProp2);
                        this.nowPlayAdFlag = DataObject_1.AdRewardType.TileGameProp2;
                        break;
                    case 4:
                        SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.TileGameProp3);
                        this.nowPlayAdFlag = DataObject_1.AdRewardType.TileGameProp3;
                        break;
                    case 5:
                        SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.Power);
                        this.nowPlayAdFlag = DataObject_1.AdRewardType.Power;
                        break;
                    default:
                        break;
                }
                ViewUtil_1.ViewUtil.setLabelStringByName("des", this.buyPanel, Oops_1.oops.language.getLangByID("TileGame.ADRewardDes"));
                ViewUtil_1.ViewUtil.setLabelStringByName("getTimes", this.buyPanel, "".concat(parseInt(data[0]) - thisTimes, "/").concat(data[0]));
                ViewUtil_1.ViewUtil.setNodeActiveByName("buyBtn", this.buyPanel, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("adBtn", this.buyPanel, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getReward", this.buyPanel, false);
                this.needNum = 0;
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("buyBtn", this.buyPanel, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("adBtn", this.buyPanel, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getReward", this.buyPanel, false);
                var nums = data[1].split("-");
                var needNum = parseInt(nums[0]) + parseInt(nums[1]) * (thisTimes - parseInt(data[0]));
                ViewUtil_1.ViewUtil.setLabelStringByName("des", this.buyPanel, Oops_1.oops.language.getLangByID("TileGame.DiamondDes", needNum));
                this.needNum = needNum;
                ViewUtil_1.ViewUtil.setLabelStringByName("needNum", this.buyPanel, "x".concat(needNum));
            }
        };
        tileGameHome_1.prototype.btnReward = function () {
            var _this = this;
            if (this.playAdFlag) {
                //看广告
                SdkPlatform_1.SdkPlatform.showAds(this.nowPlayAdFlag, function () {
                    _this.btnCb && _this.btnCb();
                });
            }
            else {
                this.btnCb && this.btnCb();
            }
        };
        tileGameHome_1.prototype.initTween = function () {
            var proBg = ViewUtil_1.ViewUtil.getChildByName("proBg", this.node);
            var spine = proBg.getChildByName("light");
            (0, cc_2.tween)(spine).by(3, { eulerAngles: new cc_3.Vec3(0, 0, 360) }).call(function () {
                spine.eulerAngles = new cc_3.Vec3(0, 0, 0);
            }).union().repeatForever().start();
        };
        return tileGameHome_1;
    }(_classSuper));
    __setFunctionName(_classThis, "tileGameHome");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _timer_decorators = [property(cc_1.Label)];
        _buyPanel_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _timer_decorators, { kind: "field", name: "timer", static: false, private: false, access: { has: function (obj) { return "timer" in obj; }, get: function (obj) { return obj.timer; }, set: function (obj, value) { obj.timer = value; } }, metadata: _metadata }, _timer_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _buyPanel_decorators, { kind: "field", name: "buyPanel", static: false, private: false, access: { has: function (obj) { return "buyPanel" in obj; }, get: function (obj) { return obj.buyPanel; }, set: function (obj, value) { obj.buyPanel = value; } }, metadata: _metadata }, _buyPanel_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        tileGameHome = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return tileGameHome = _classThis;
}();
exports.tileGameHome = tileGameHome;
