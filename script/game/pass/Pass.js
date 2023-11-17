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
exports.Pass = exports.passType = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var cc_2 = require("cc");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var PassLevelItem_1 = require("./PassLevelItem");
var PassPaskItem_1 = require("./PassPaskItem");
var List_1 = require("../tools/List");
var PassData_1 = require("../common/tableData/PassData");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var HttpPost_1 = require("../tools/HttpPost");
var PassShop_1 = require("./PassShop");
var SuitData_1 = require("../common/tableData/SuitData");
var MonthlyPassData_1 = require("../common/tableData/MonthlyPassData");
var Role_1 = require("../dress/Role");
var Pet_1 = require("../pet/Pet");
var PetRewardData_1 = require("../pet/PetRewardData");
var cc_3 = require("cc");
var cc_4 = require("cc");
var DataObject_1 = require("../tools/DataObject");
var PurchaseData_1 = require("../common/tableData/PurchaseData");
var cc_5 = require("cc");
var DropMgr_1 = require("../mgr/DropMgr");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var passType;
(function (passType) {
    passType[passType["passLevel"] = 1] = "passLevel";
    passType[passType["passTask"] = 2] = "passTask";
    passType[passType["passStore"] = 3] = "passStore";
})(passType || (exports.passType = passType = {}));
var Pass = function () {
    var _classDecorators = [ccclass('Pass')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _main_decorators;
    var _main_initializers = [];
    var _shop_decorators;
    var _shop_initializers = [];
    var _bottom1_decorators;
    var _bottom1_initializers = [];
    var _bottom2_decorators;
    var _bottom2_initializers = [];
    var _toggle_decorators;
    var _toggle_initializers = [];
    var _passList_decorators;
    var _passList_initializers = [];
    var _taskList_decorators;
    var _taskList_initializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _pro_decorators;
    var _pro_initializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _pet_decorators;
    var _pet_initializers = [];
    var _furnitureNode_decorators;
    var _furnitureNode_initializers = [];
    var _petBg_decorators;
    var _petBg_initializers = [];
    var _roleBg_decorators;
    var _roleBg_initializers = [];
    var _labBg_decorators;
    var _labBg_initializers = [];
    var Pass = _classThis = /** @class */ (function (_super) {
        __extends(Pass_1, _super);
        function Pass_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.main = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _main_initializers, null));
            _this.shop = __runInitializers(_this, _shop_initializers, null);
            _this.bottom1 = __runInitializers(_this, _bottom1_initializers, null);
            _this.bottom2 = __runInitializers(_this, _bottom2_initializers, null);
            _this.toggle = __runInitializers(_this, _toggle_initializers, null);
            _this.passList = __runInitializers(_this, _passList_initializers, null);
            _this.taskList = __runInitializers(_this, _taskList_initializers, null);
            _this.item = __runInitializers(_this, _item_initializers, null);
            _this.pro = __runInitializers(_this, _pro_initializers, null);
            _this.role = __runInitializers(_this, _role_initializers, null);
            _this.pet = __runInitializers(_this, _pet_initializers, null);
            _this.furnitureNode = __runInitializers(_this, _furnitureNode_initializers, null);
            _this.petBg = __runInitializers(_this, _petBg_initializers, null);
            _this.roleBg = __runInitializers(_this, _roleBg_initializers, null);
            _this.labBg = __runInitializers(_this, _labBg_initializers, null);
            _this.time = null;
            _this.passLevelExp = null;
            _this.passLevel = null;
            _this.showLevel = null;
            _this.curType = null;
            _this.lastType = null;
            _this.viewArr = [];
            _this.isInit = false;
            _this.isToScroll = true;
            return _this;
        }
        Pass_1.prototype.onAdded = function (data) {
            this.data = data;
            this.passLevelData = data.passLevelList;
            this.passTaskData = data.passTaskList;
            this.passLevelExp = data.passLevelExp;
            this.passLevel = data.passLevel;
            this.showLevel = data.showLevel;
            this.setToggleRed();
        };
        Pass_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateDataPass, this.updateData, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateDataBuyPass, this.buyPassUpdate, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.TaskProPass, this.playProTween, this);
            this.initUI();
            this.setTimer();
        };
        Pass_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateDataPass, this.updateData, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateDataBuyPass, this.buyPassUpdate, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.TaskProPass, this.playProTween, this);
            cc_5.Tween.stopAllByTarget(this.furnitureNode);
            cc_5.Tween.stopAllByTarget(this.petBg);
            cc_5.Tween.stopAllByTarget(this.roleBg);
            cc_5.Tween.stopAllByTarget(this.pro);
            cc_5.Tween.stopAllByTarget(this.labBg);
            Oops_1.oops.timer.unRegister(this.timeId);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Pass);
        };
        Pass_1.prototype.initUI = function () {
            this.curType = passType.passLevel;
            this.lastType = passType.passLevel;
            this.toggle.getChildByName("select" + this.curType).getComponent(cc_2.Sprite).enabled = false;
            var purchase = new PurchaseData_1.PurchaseData(1101);
            ViewUtil_1.ViewUtil.setLabelStringByName("mian/top/buy_btn/getRes", this.node, purchase.money + "");
            var itemDropData = DropMgr_1.DropMgr.getDropData(purchase.reward);
            // ViewUtil.setLabelStringByName("mian/top/buy_btn/getRes",this.node,"x" + itemDropData[0].dropAmount);
            var num = Math.ceil(purchase.shamMoney / purchase.money) * 100;
            // ViewUtil.setLabelStringByName("mian/top/buy_btn/showLab",this.node,oops.language.getLangByID("pass.value",num + "%"));
            this.setShowUI();
        };
        Pass_1.prototype.setShowUI = function () {
            return __awaiter(this, void 0, void 0, function () {
                var shop;
                var _this = this;
                return __generator(this, function (_a) {
                    if (this.curType == passType.passLevel) {
                        this.main.active = true;
                        this.shop.active = false;
                        this.bottom1.active = true;
                        this.bottom2.active = false;
                        this.passList.numItems = this.passLevelData.length;
                        this.setTopUI();
                        this.setItemUI();
                        this.setSrcollIndex();
                    }
                    else if (this.curType == passType.passTask) {
                        this.main.active = true;
                        this.shop.active = false;
                        this.bottom1.active = false;
                        this.bottom2.active = true;
                        this.taskList.numItems = this.passTaskData.length;
                        this.setTopUI();
                    }
                    else if (this.curType == passType.passStore) {
                        this.main.active = false;
                        this.shop.active = true;
                        shop = this.viewArr[this.curType];
                        if (!shop) {
                            HttpPost_1.HttpPost.instance.getShopList(7, function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var node;
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getPassShopPath(), BundleConfig_1.default.instance.guiBundle.name)];
                                        case 1:
                                            node = _b.sent();
                                            node.parent = this.shop;
                                            (_a = node.getComponent(PassShop_1.PassShop)) === null || _a === void 0 ? void 0 : _a.init(data);
                                            this.viewArr[this.curType] = node;
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        else {
                            shop.active = true;
                        }
                    }
                    return [2 /*return*/];
                });
            });
        };
        Pass_1.prototype.setSrcollIndex = function () {
            if (!this.isToScroll) {
                return;
            }
            this.isToScroll = false;
            var idx = 0;
            for (var i = 0, len = this.data.passLevelList.length; i < len; i++) {
                if (this.data.passLevelList[i].isCanGet1 || (this.data.upPassIsBuy && this.data.passLevelList[i].isCanGet2)) {
                    idx = i;
                    break;
                }
                if (this.data.passLevelList[i].level >= this.passLevel) {
                    idx = i;
                    break;
                }
            }
            this.passList.scrollTo(idx);
        };
        Pass_1.prototype.updateData = function (ev, data) {
            this.onAdded(data.info);
            this.setShowUI();
        };
        Pass_1.prototype.setTopUI = function () {
            var lastPassData = new PassData_1.PassData(this.passLevel);
            var lastExp = this.passLevel ? lastPassData.pointCondition : 0;
            if (this.showLevel == 0) {
                ViewUtil_1.ViewUtil.setLabelStringByName("mian/top/proBg/lay/proLab", this.node, "50/50");
            }
            else {
                var passData = new PassData_1.PassData(this.passLevel + 1);
                ViewUtil_1.ViewUtil.setLabelStringByName("mian/top/proBg/lay/proLab", this.node, (this.passLevelExp - lastExp) + "/" + (passData.pointCondition - lastExp));
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("mian/top/proBg/labBg/curLab", this.node, this.passLevel + '');
            ViewUtil_1.ViewUtil.setNodeActiveByName("mian/top/buy_btn", this.node, !this.data.upPassIsBuy);
            ViewUtil_1.ViewUtil.setNodeActiveByName("select3/goto", this.toggle, !this.data.upPassIsBuy);
            this.previewShow();
        };
        //预览
        Pass_1.prototype.previewShow = function () {
            return __awaiter(this, void 0, void 0, function () {
                var lastPassData, lastExp, passData, show, furnitureIds, furnitureData, DressData, petData, name, i, len, data;
                return __generator(this, function (_a) {
                    if (this.isInit) {
                        return [2 /*return*/];
                    }
                    lastPassData = new PassData_1.PassData(this.passLevel);
                    lastExp = this.passLevel ? lastPassData.pointCondition : 0;
                    if (this.showLevel == 0) {
                        this.pro.fillRange = 1;
                    }
                    else {
                        passData = new PassData_1.PassData(this.passLevel + 1);
                        this.pro.fillRange = ((this.passLevelExp - lastExp) / (passData.pointCondition - lastExp));
                    }
                    this.isInit = true;
                    show = new MonthlyPassData_1.MonthlyPassData(1);
                    furnitureIds = StringUtil_1.StringUtil.stringToArray2(show.showReward1);
                    furnitureData = new SuitData_1.SuitData(parseInt(furnitureIds[0]));
                    DressData = new SuitData_1.SuitData(show.showReward2);
                    petData = new PetRewardData_1.PetRewardData(show.showReward3);
                    this.role.showSuitSkin(DressData.suitShow);
                    this.pet.initSpin(parseInt(petData.rewardRes), petData.id.toString());
                    name = "";
                    for (i = 0, len = furnitureIds.length; i < len; i++) {
                        data = new SuitData_1.SuitData(parseInt(furnitureIds[i]));
                        name = name + data.getName() + "，";
                    }
                    ViewUtil_1.ViewUtil.setLabelStringByName("mian/top/showDec", this.node, name + DressData.getName() + "，" + petData.getName());
                    ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.furnitureNode, GameResPath_1.GameResPath.getSuitPreviewPath(furnitureData.suitResShow.toString()), BundleConfig_1.default.instance.guiBundle.name);
                    this.playTween();
                    return [2 /*return*/];
                });
            });
        };
        Pass_1.prototype.playTween = function () {
            (0, cc_3.tween)(this.roleBg).sequence((0, cc_3.tween)().delay(1), (0, cc_3.tween)().by(0.5, { position: new cc_4.Vec3(-300, 0, 0) }).delay(1), (0, cc_3.tween)().by(0, { position: new cc_4.Vec3(600, 0, 0) }).delay(1.5), (0, cc_3.tween)().by(0.5, { position: new cc_4.Vec3(-300, 0, 0) })).repeatForever().start();
            (0, cc_3.tween)(this.furnitureNode).sequence((0, cc_3.tween)().delay(1), (0, cc_3.tween)().by(0.5, { position: new cc_4.Vec3(-300, 0, 0) }).delay(1), (0, cc_3.tween)().by(0.5, { position: new cc_4.Vec3(-300, 0, 0) }).delay(1), (0, cc_3.tween)().by(0, { position: new cc_4.Vec3(600, 0, 0) }).delay(0.5)).repeatForever().start();
            (0, cc_3.tween)(this.petBg).sequence((0, cc_3.tween)().delay(1), (0, cc_3.tween)().by(0, { position: new cc_4.Vec3(600, 0, 0) }).delay(1.5), (0, cc_3.tween)().by(0.5, { position: new cc_4.Vec3(-300, 0, 0) }).delay(1), (0, cc_3.tween)().by(0.5, { position: new cc_4.Vec3(-300, 0, 0) })).repeatForever().start();
        };
        Pass_1.prototype.choseToggle = function (ev, type) {
            if (parseInt(type) == this.curType) {
                return;
            }
            if (parseInt(type) == passType.passLevel) {
                this.isToScroll = true;
            }
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.toggle.getChildByName("select" + type).getComponent(cc_2.Sprite).enabled = false;
            this.toggle.getChildByName("select" + this.lastType).getComponent(cc_2.Sprite).enabled = true;
            this.curType = parseInt(type);
            this.lastType = this.curType;
            this.setShowUI();
        };
        Pass_1.prototype.onRenderLevelList = function (item, index) {
            var _a;
            (_a = item.getComponent(PassLevelItem_1.PassLevelItem)) === null || _a === void 0 ? void 0 : _a.init(this.passLevelData[index], { upPassIsBuy: this.data.upPassIsBuy, passLevel: this.passLevel });
        };
        Pass_1.prototype.onRenderTaskList = function (item, index) {
            var _a;
            (_a = item.getComponent(PassPaskItem_1.PassPaskItem)) === null || _a === void 0 ? void 0 : _a.init(this.passTaskData[index]);
        };
        /**创建计时器 */
        Pass_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            this.time = (this.data.endAt - curTime);
            this.onSecond();
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        Pass_1.prototype.onSecond = function () {
            var time;
            if (this.time >= 3600) {
                time = StringUtil_1.StringUtil.formatTimeWithSec(this.time, true);
            }
            else {
                time = StringUtil_1.StringUtil.formatTimeWithSec(this.time);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("time/timeLab", this.node, Oops_1.oops.language.getLangByID("common.leftTime") + time);
        };
        Pass_1.prototype.onComplete = function () {
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Pass);
        };
        Pass_1.prototype.setItemUI = function () {
            if (this.showLevel == 0) {
                this.item.node.active = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("mian/bottom1/itemBg", this.node, false);
                return;
            }
            ViewUtil_1.ViewUtil.setNodeActiveByName("mian/bottom1/itemBg", this.node, true);
            this.item.node.active = true;
            var passData = new PassData_1.PassData(this.showLevel);
            this.item.init(this.passLevelData[this.showLevel - 1], { upPassIsBuy: this.data.upPassIsBuy, passLevel: this.passLevel }, false);
        };
        Pass_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Pass);
        };
        //充值
        Pass_1.prototype.btn_buy = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var purchase = new PurchaseData_1.PurchaseData(1101);
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.jewel < purchase.money) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.JumpTip, { closeView: GameUIConfig_1.UIID.Pass, type: DataObject_1.JumpTipType.diamond });
                return;
            }
            HttpPost_1.HttpPost.instance.purchaseCurrency(DataObject_1.IaaType.Pass, purchase.id, function (data) {
                if (data.reward && data.reward != "") {
                    var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                    var dropInfo = new DataObject_1.DropInfo();
                    dropInfo.dropData = dropDatas;
                    dropInfo.dropFrom = DataObject_1.DropFrom.Pass;
                    dropInfo.UIID = [GameUIConfig_1.UIID.Pass];
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                }
                SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.jewel;
                _this.onAdded(data);
                _this.setShowUI();
            });
            // SdkPlatform.recharge_click(PayType.Pass, purchase.id);
            // Payment.Instance.createOrder(purchase.id);
        };
        Pass_1.prototype.buyPassUpdate = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.passInfo(function (data) {
                _this.onAdded(data);
                _this.setShowUI();
            });
        };
        Pass_1.prototype.setToggleRed = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("select1/redDot", this.toggle, Boolean(this.data.levelRedDot));
            ViewUtil_1.ViewUtil.setNodeActiveByName("select2/redDot", this.toggle, Boolean(this.data.taskRedDot));
        };
        Pass_1.prototype.limitTip = function () {
            Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("pass.limitTip"));
        };
        Pass_1.prototype.playProTween = function (ev, data) {
            if (this.showLevel == 0) {
                this.pro.fillRange = 1;
                return;
            }
            var lastPassData = new PassData_1.PassData(this.passLevel);
            var passData = new PassData_1.PassData(this.passLevel + 1);
            var lastExp = this.passLevel ? lastPassData.pointCondition : 0;
            var pro = ((this.passLevelExp - lastExp) / (passData.pointCondition - lastExp));
            (0, cc_3.tween)(this.labBg).to(0.1, { angle: 15, scale: new cc_4.Vec3(1.3, 1.3, 1) }).
                to(0.1, { angle: 0, scale: new cc_4.Vec3(1.1, 1.1, 1) }).
                to(0.05, { angle: 7, scale: new cc_4.Vec3(1.15, 1.15, 1) }).
                to(0.05, { angle: 0, scale: new cc_4.Vec3(1.1, 1.1, 1) }).start();
            if (pro == 0) {
                (0, cc_3.tween)(this.pro).to(0.07, { fillRange: 1 }).delay(0.08).to(0.15, { fillRange: pro }).start();
            }
            else {
                (0, cc_3.tween)(this.pro).to(0.1, { fillRange: pro + 0.1 }).
                    to(0.1, { fillRange: pro - 0.1 }).
                    to(0.05, { fillRange: pro + 0.05 }).
                    to(0.05, { fillRange: pro }).start();
            }
        };
        return Pass_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Pass");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _main_decorators = [property(cc_1.Node)];
        _shop_decorators = [property(cc_1.Node)];
        _bottom1_decorators = [property(cc_1.Node)];
        _bottom2_decorators = [property(cc_1.Node)];
        _toggle_decorators = [property(cc_1.Node)];
        _passList_decorators = [property(List_1.default)];
        _taskList_decorators = [property(List_1.default)];
        _item_decorators = [property(PassLevelItem_1.PassLevelItem)];
        _pro_decorators = [property(cc_2.Sprite)];
        _role_decorators = [property(Role_1.Role)];
        _pet_decorators = [property(Pet_1.Pet)];
        _furnitureNode_decorators = [property(cc_1.Node)];
        _petBg_decorators = [property(cc_1.Node)];
        _roleBg_decorators = [property(cc_1.Node)];
        _labBg_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _main_decorators, { kind: "field", name: "main", static: false, private: false, access: { has: function (obj) { return "main" in obj; }, get: function (obj) { return obj.main; }, set: function (obj, value) { obj.main = value; } }, metadata: _metadata }, _main_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _shop_decorators, { kind: "field", name: "shop", static: false, private: false, access: { has: function (obj) { return "shop" in obj; }, get: function (obj) { return obj.shop; }, set: function (obj, value) { obj.shop = value; } }, metadata: _metadata }, _shop_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _bottom1_decorators, { kind: "field", name: "bottom1", static: false, private: false, access: { has: function (obj) { return "bottom1" in obj; }, get: function (obj) { return obj.bottom1; }, set: function (obj, value) { obj.bottom1 = value; } }, metadata: _metadata }, _bottom1_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _bottom2_decorators, { kind: "field", name: "bottom2", static: false, private: false, access: { has: function (obj) { return "bottom2" in obj; }, get: function (obj) { return obj.bottom2; }, set: function (obj, value) { obj.bottom2 = value; } }, metadata: _metadata }, _bottom2_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggle_decorators, { kind: "field", name: "toggle", static: false, private: false, access: { has: function (obj) { return "toggle" in obj; }, get: function (obj) { return obj.toggle; }, set: function (obj, value) { obj.toggle = value; } }, metadata: _metadata }, _toggle_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _passList_decorators, { kind: "field", name: "passList", static: false, private: false, access: { has: function (obj) { return "passList" in obj; }, get: function (obj) { return obj.passList; }, set: function (obj, value) { obj.passList = value; } }, metadata: _metadata }, _passList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _taskList_decorators, { kind: "field", name: "taskList", static: false, private: false, access: { has: function (obj) { return "taskList" in obj; }, get: function (obj) { return obj.taskList; }, set: function (obj, value) { obj.taskList = value; } }, metadata: _metadata }, _taskList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pro_decorators, { kind: "field", name: "pro", static: false, private: false, access: { has: function (obj) { return "pro" in obj; }, get: function (obj) { return obj.pro; }, set: function (obj, value) { obj.pro = value; } }, metadata: _metadata }, _pro_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pet_decorators, { kind: "field", name: "pet", static: false, private: false, access: { has: function (obj) { return "pet" in obj; }, get: function (obj) { return obj.pet; }, set: function (obj, value) { obj.pet = value; } }, metadata: _metadata }, _pet_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _furnitureNode_decorators, { kind: "field", name: "furnitureNode", static: false, private: false, access: { has: function (obj) { return "furnitureNode" in obj; }, get: function (obj) { return obj.furnitureNode; }, set: function (obj, value) { obj.furnitureNode = value; } }, metadata: _metadata }, _furnitureNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _petBg_decorators, { kind: "field", name: "petBg", static: false, private: false, access: { has: function (obj) { return "petBg" in obj; }, get: function (obj) { return obj.petBg; }, set: function (obj, value) { obj.petBg = value; } }, metadata: _metadata }, _petBg_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _roleBg_decorators, { kind: "field", name: "roleBg", static: false, private: false, access: { has: function (obj) { return "roleBg" in obj; }, get: function (obj) { return obj.roleBg; }, set: function (obj, value) { obj.roleBg = value; } }, metadata: _metadata }, _roleBg_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _labBg_decorators, { kind: "field", name: "labBg", static: false, private: false, access: { has: function (obj) { return "labBg" in obj; }, get: function (obj) { return obj.labBg; }, set: function (obj, value) { obj.labBg = value; } }, metadata: _metadata }, _labBg_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Pass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Pass = _classThis;
}();
exports.Pass = Pass;
