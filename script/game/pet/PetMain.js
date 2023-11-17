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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetMain = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../common/mgr/GameMgr");
var GlobalData_1 = require("../common/tableData/GlobalData");
var LimitMgr_1 = require("../mgr/LimitMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var List_1 = require("../tools/List");
var ListItem_1 = require("../tools/ListItem");
var Pet_1 = require("./Pet");
var PetApplianceData_1 = require("./PetApplianceData");
var PetExcelData_1 = require("./PetExcelData");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var PetMain = function () {
    var _classDecorators = [ccclass('PetMain')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _memberList_decorators;
    var _memberList_initializers = [];
    var PetMain = _classThis = /** @class */ (function (_super) {
        __extends(PetMain_1, _super);
        function PetMain_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.allData = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.serverData = [];
            _this.baseData = [];
            _this.memberList = __runInitializers(_this, _memberList_initializers, null);
            return _this;
        }
        PetMain_1.prototype.onAdded = function (data) {
            var _this = this;
            this.allData = data;
            this.serverData = data.list;
            this.baseData = PetExcelData_1.PetExcelData.getAllData();
            SingletonModuleComp_1.smc.account.AccountModel.vm.petCoin = this.allData.petCoin;
            for (var i = 0; i < this.serverData.length; i++) {
                var index = this.baseData.indexOf(this.baseData.find(function (x) { return x.id == _this.serverData[i].petId; }));
                var remove = this.baseData.splice(index, 1);
                this.baseData.splice(0, 0, remove[0]);
            }
        };
        PetMain_1.prototype.onLoad = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdatePetMain, this.refresh, this);
        };
        PetMain_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdatePetMain, this.refresh, this);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.PetMain);
        };
        PetMain_1.prototype.refresh = function (event, args) {
            var _this = this;
            if (args != 0)
                ViewUtil_1.ViewUtil.setNodeActiveByName("bottomNode/cangguanBtn/redDot", this.node, args == 2);
            HttpPost_1.HttpPost.instance.petList(function (data) {
                _this.onAdded(data);
                _this.start();
            });
        };
        PetMain_1.prototype.start = function () {
            this.unscheduleAllCallbacks();
            this.memberList.numItems = this.baseData.length;
            ViewUtil_1.ViewUtil.setLabelStringByName("topNode/proBg/Label", this.node, this.allData.comfort + "/" + this.allData.comfortNext);
            ViewUtil_1.ViewUtil.setLabelStringByName("topNode/limitTips/label1", this.node, Oops_1.oops.language.getLangByID("pet.limitMax", this.allData.petMoodMax));
            ViewUtil_1.ViewUtil.setLabelStringByName("topNode/limitTips/label2", this.node, this.allData.moodNext);
            ViewUtil_1.ViewUtil.findChildByName("topNode/proBg/pro", this.node).getComponent(cc_1.Sprite).fillRange = this.allData.comfort / this.allData.comfortNext;
            ViewUtil_1.ViewUtil.setLabelStringByName("topNode/proBg/maxHeart", this.node, "MAX." + this.allData.petMoodMax);
            ViewUtil_1.ViewUtil.setLabelStringByName("bottomNode/foodBg/proLabel", this.node, this.allData.getFoodsCountMax - this.allData.getFoodsCount + "");
            ViewUtil_1.ViewUtil.setNodeActiveByName("bottomNode/foodBg/overSp", this.node, this.allData.getFoodsCountMax > this.allData.getFoodsCount);
        };
        PetMain_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetMain);
            GameMgr_1.GameMgr.Instance.sceneMgr.showPets();
        };
        PetMain_1.prototype.onMembersListRender = function (item, idx) {
            var _this = this;
            var _a, _b, _c;
            if (item) {
                var data_1 = this.baseData[idx];
                var sData_1 = this.serverData.find(function (x) { return x.petId == data_1.id; });
                ViewUtil_1.ViewUtil.findChildByName("pifuBtn", item).off(cc_1.Button.EventType.CLICK, this.btn_changeSkin, this);
                ViewUtil_1.ViewUtil.findChildByName("nameBg", item).off(cc_1.Button.EventType.CLICK, this.btn_changeName, this);
                ViewUtil_1.ViewUtil.findChildByName("goBtn", item).off(cc_1.Button.EventType.CLICK, this.btn_startTravel, this);
                ViewUtil_1.ViewUtil.findChildByName("costBtn", item).off(cc_1.Button.EventType.CLICK, this.btn_buyPet, this);
                ViewUtil_1.ViewUtil.findChildByName("rewardBtn", item).off(cc_1.Button.EventType.CLICK, this.btn_getReward, this);
                ViewUtil_1.ViewUtil.findChildByName("pet/Button", item).off(cc_1.Button.EventType.CLICK, this.btn_openFoodPanel, this);
                ViewUtil_1.ViewUtil.findChildByName("loveBg", item).off(cc_1.Button.EventType.CLICK, this.btn_openSpeedMood, this);
                ViewUtil_1.ViewUtil.findChildByName("loveBg/upSpeedBtn", item).off(cc_1.Button.EventType.CLICK, this.btn_openSpeedMood2, this);
                ViewUtil_1.ViewUtil.setNodeActiveByName("talkBg", item, false);
                if (sData_1) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("unlockTips", item, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("powerBg", item, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("loveBg", item, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("pifuBtn", item, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("costBtn", item, false);
                    ViewUtil_1.ViewUtil.setSpriteGray(item, false);
                    ViewUtil_1.ViewUtil.setSpriteGrayByName("nameBg", item, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("pet", item, true);
                    if (sData_1.change_name > 0)
                        ViewUtil_1.ViewUtil.setLabelStringByName("nameBg/nameLabel", item, sData_1.name);
                    else
                        ViewUtil_1.ViewUtil.setLabelStringByName("nameBg/nameLabel", item, data_1.getName());
                    ViewUtil_1.ViewUtil.findChildByName("pifuBtn", item).on(cc_1.Button.EventType.CLICK, this.btn_changeSkin, this);
                    ViewUtil_1.ViewUtil.findChildByName("nameBg", item).on(cc_1.Button.EventType.CLICK, this.btn_changeName, this);
                    ViewUtil_1.ViewUtil.findChildByName("goBtn", item).on(cc_1.Button.EventType.CLICK, this.btn_startTravel, this);
                    ViewUtil_1.ViewUtil.findChildByName("pet/Button", item).on(cc_1.Button.EventType.CLICK, this.btn_openFoodPanel, this);
                    ViewUtil_1.ViewUtil.setLabelStringByName("powerBg/Label", item, sData_1.satiety + "/" + sData_1.satietyMax);
                    ViewUtil_1.ViewUtil.setLabelStringByName("loveBg/Label", item, sData_1.mood + "/" + sData_1.moodMax);
                    ViewUtil_1.ViewUtil.findChildByName("powerBg/pro", item).getComponent(cc_1.Sprite).fillRange = sData_1.satiety / sData_1.satietyMax;
                    ViewUtil_1.ViewUtil.findChildByName("loveBg/pro", item).getComponent(cc_1.Sprite).fillRange = sData_1.mood / sData_1.moodMax;
                    ViewUtil_1.ViewUtil.setSpriteGrayByName("homeBg/home", item, false);
                    ViewUtil_1.ViewUtil.setSpriteGrayByName("homeBg/play", item, false);
                    ViewUtil_1.ViewUtil.setSpriteGrayByName("homeBg/food", item, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("loveBg/upSpeedBtn", item, false);
                    //刷新装饰显示
                    var house = PetApplianceData_1.PetApplianceData.getItemById(sData_1.petId, sData_1.appliance[0].useApplianceId);
                    var play = PetApplianceData_1.PetApplianceData.getItemById(sData_1.petId, sData_1.appliance[1].useApplianceId);
                    var food = PetApplianceData_1.PetApplianceData.getItemById(sData_1.petId, sData_1.appliance[2].useApplianceId);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("homeBg/home", item, GameResPath_1.GameResPath.getPetDecorateIconsPath(house.resName), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("homeBg/play", item, GameResPath_1.GameResPath.getPetDecorateIconsPath(play.resName), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("homeBg/food", item, GameResPath_1.GameResPath.getPetDecorateIconsPath(food.resName), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("rewardBtn", item, false);
                    //判断宠物状态 1-待机，2旅行,3旅行回来领奖励
                    if (sData_1.status == 1) {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("workingBtn", item, false);
                        if (sData_1.satiety / sData_1.satietyMax >= 1) {
                            ViewUtil_1.ViewUtil.setNodeActiveByName("talkBg", item, true);
                            ViewUtil_1.ViewUtil.setLabelStringByName("talkBg/Label", item, Oops_1.oops.language.getLangByID("pet.fullPowerTips"));
                        }
                        //判断心情值是否满了，满了把出游按钮显示出来
                        if (sData_1.mood >= sData_1.moodMax) {
                            ViewUtil_1.ViewUtil.setNodeActiveByName("goBtn", item, true);
                        }
                        else {
                            ViewUtil_1.ViewUtil.setNodeActiveByName("goBtn", item, false);
                            //ViewUtil.setNodeActiveByName("loveBg/upSpeedBtn",item,true);
                        }
                    }
                    else if (sData_1.status == 2) {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("goBtn", item, false);
                        ViewUtil_1.ViewUtil.setNodeActiveByName("workingBtn", item, true);
                        var all_1 = sData_1.travel.finishAt - sData_1.travel.beginAt;
                        var dis = Oops_1.oops.timer.getServerTime() - sData_1.travel.beginAt;
                        var remainTime_1 = all_1 - dis;
                        ViewUtil_1.ViewUtil.findChildByName("workingBtn/pro", item).getComponent(cc_1.Sprite).fillRange = dis / all_1;
                        this.schedule(function () {
                            if (remainTime_1 <= 0) {
                                _this.refresh("", 0);
                            }
                            else {
                                remainTime_1 -= 1;
                                ViewUtil_1.ViewUtil.findChildByName("workingBtn/pro", item).getComponent(cc_1.Sprite).fillRange = (all_1 - remainTime_1) / all_1;
                            }
                            ViewUtil_1.ViewUtil.setLabelStringByName("workingBtn/cdLabel", item, StringUtil_1.StringUtil.formatActivityTimeWithSec(remainTime_1));
                        }, 1, cc_1.macro.REPEAT_FOREVER, 0);
                        (_a = ViewUtil_1.ViewUtil.findChildByName("pet", item).getComponent(Pet_1.Pet)) === null || _a === void 0 ? void 0 : _a.initSpin(data_1.id, sData_1.skin.useSkin, data_1.travelAm.toString());
                    }
                    else {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("workingBtn", item, false);
                        ViewUtil_1.ViewUtil.setNodeActiveByName("rewardBtn", item, true);
                        ViewUtil_1.ViewUtil.findChildByName("rewardBtn", item).on(cc_1.Button.EventType.CLICK, this.btn_getReward, this);
                    }
                    if (sData_1.status != 2) {
                        //是否处于饥饿状态
                        if (sData_1.satiety < 30) {
                            (_b = ViewUtil_1.ViewUtil.findChildByName("pet", item).getComponent(Pet_1.Pet)) === null || _b === void 0 ? void 0 : _b.initSpin(data_1.id, sData_1.skin.useSkin, data_1.hungerAm.toString());
                        }
                        else {
                            (_c = ViewUtil_1.ViewUtil.findChildByName("pet", item).getComponent(Pet_1.Pet)) === null || _c === void 0 ? void 0 : _c.initSpin(data_1.id, sData_1.skin.useSkin, data_1.getAwaitActName());
                        }
                    }
                    //判断是否心情满了？
                    if (sData_1.mood < sData_1.moodMax) {
                        ViewUtil_1.ViewUtil.setLabelStringByName("loveBg/timeBg/cdLabel", item, StringUtil_1.StringUtil.formatActivityTimeWithSec(sData_1.coolingSecond));
                        ViewUtil_1.ViewUtil.findChildByName("loveBg", item).on(cc_1.Button.EventType.CLICK, this.btn_openSpeedMood, this);
                        ViewUtil_1.ViewUtil.findChildByName("loveBg/upSpeedBtn", item).on(cc_1.Button.EventType.CLICK, this.btn_openSpeedMood2, this);
                        ViewUtil_1.ViewUtil.setNodeActiveByName("loveBg/upSpeedBtn", item, true);
                        ViewUtil_1.ViewUtil.setNodeActiveByName("loveBg/timeBg", item, true);
                        this.schedule(function () {
                            if (sData_1.coolingSecond <= 0) {
                                sData_1.mood += 1;
                                if (sData_1.mood < sData_1.moodMax) {
                                    sData_1.coolingSecond = new GlobalData_1.GlobalData(17).value;
                                }
                                else {
                                    ViewUtil_1.ViewUtil.setNodeActiveByName("loveBg/timeBg", item, false);
                                    ViewUtil_1.ViewUtil.setNodeActiveByName("loveBg/upSpeedBtn", item, false);
                                    _this.refresh("", 0);
                                }
                                ViewUtil_1.ViewUtil.setLabelStringByName("loveBg/Label", item, sData_1.mood + "/" + sData_1.moodMax);
                            }
                            else {
                                sData_1.coolingSecond -= 1;
                            }
                            ViewUtil_1.ViewUtil.setLabelStringByName("loveBg/timeBg/cdLabel", item, StringUtil_1.StringUtil.formatActivityTimeWithSec(sData_1.coolingSecond));
                        }, 1, cc_1.macro.REPEAT_FOREVER, 0);
                    }
                    else {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("loveBg/timeBg", item, false);
                    }
                }
                else {
                    ViewUtil_1.ViewUtil.setSpriteGrayByName("homeBg/home", item, true);
                    ViewUtil_1.ViewUtil.setSpriteGrayByName("homeBg/play", item, true);
                    ViewUtil_1.ViewUtil.setSpriteGrayByName("homeBg/food", item, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("goBtn", item, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("unlockTips", item, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("powerBg", item, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("loveBg", item, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("pifuBtn", item, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("costBtn", item, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("rewardBtn", item, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("workingBtn", item, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("pet", item, false);
                    ViewUtil_1.ViewUtil.setLabelStringByName("nameBg/nameLabel", item, data_1.getName());
                    ViewUtil_1.ViewUtil.setSpriteGray(item, true);
                    ViewUtil_1.ViewUtil.setSpriteGrayByName("nameBg", item, true);
                    if (data_1.unlockPay > SingletonModuleComp_1.smc.account.AccountModel.vm.petCoin) {
                        ViewUtil_1.ViewUtil.setLabelStringByName("costBtn/numLabel", item, data_1.unlockPay.toString(), { color: cc_1.Color.RED });
                    }
                    else {
                        ViewUtil_1.ViewUtil.setLabelStringByName("costBtn/numLabel", item, data_1.unlockPay.toString(), { color: cc_1.Color.WHITE });
                        ViewUtil_1.ViewUtil.findChildByName("costBtn", item).on(cc_1.Button.EventType.CLICK, this.btn_buyPet, this);
                    }
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("costBtn/Sprite", item, GameResPath_1.GameResPath.getDropIconsPath(Number(StringUtil_1.StringUtil.stringToArray5(data_1.openConsume)[0])), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setLabelStringByName("unlockTips/Label", item, LimitMgr_1.LimitMgr.isCondSatisfiedById(data_1.petOpen).unSatisfiedDesc);
                }
            }
        };
        //开始旅行
        PetMain_1.prototype.btn_startTravel = function (button) {
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.baseData[idx];
            var sData = this.serverData.find(function (x) { return x.petId == item.id; });
            HttpPost_1.HttpPost.instance.petTravelBuyInfo(sData.petId, function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetTravelTool, data);
            });
        };
        //领取旅行奖励
        PetMain_1.prototype.btn_getReward = function (button) {
            var _this = this;
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.baseData[idx];
            var sData = this.serverData.find(function (x) { return x.petId == item.id; });
            HttpPost_1.HttpPost.instance.petTravelFinish(sData.petId, function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetTravelReward, [sData, data]);
                _this.onAdded(data.info);
                _this.start();
            });
        };
        //打开食物弹框
        PetMain_1.prototype.btn_openFoodPanel = function (button) {
            var _a, _b;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_b = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.getComponent(ListItem_1.default).listId;
            var item = this.baseData[idx];
            var sData = this.serverData.find(function (x) { return x.petId == item.id; });
            HttpPost_1.HttpPost.instance.petFoodsInfo(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetEat, [data, sData]);
            });
        };
        //打开加速心情回复弹框
        PetMain_1.prototype.btn_openSpeedMood = function (button) {
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.baseData[idx];
            var sData = this.serverData.find(function (x) { return x.petId == item.id; });
            HttpPost_1.HttpPost.instance.speedPetMoodInfo(sData.petId, function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetUpMoodConfirm, data);
            });
        };
        //打开加速心情回复弹框2
        PetMain_1.prototype.btn_openSpeedMood2 = function (button) {
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.baseData[idx];
            var sData = this.serverData.find(function (x) { return x.petId == item.id; });
            HttpPost_1.HttpPost.instance.speedPetMoodInfo(sData.petId, function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetUpMoodConfirm, data);
            });
        };
        //购买宠物
        PetMain_1.prototype.btn_buyPet = function (button) {
            var _this = this;
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.baseData[idx];
            //判断钱够不够？
            HttpPost_1.HttpPost.instance.buyPet(item.id, function (data) {
                _this.onAdded(data);
                _this.start();
                SingletonModuleComp_1.smc.account.AccountModel.pet.push({ 'petId': item.id, 'useSkinId': item.firstSkin });
            }, function (data) {
                Oops_1.oops.gui.toast(data.msg);
            });
        };
        //皮肤按钮
        PetMain_1.prototype.btn_changeSkin = function (button) {
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.baseData[idx];
            var sData = this.serverData.find(function (x) { return x.petId == item.id; });
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetSelectSkin, sData);
        };
        //改名按钮
        PetMain_1.prototype.btn_changeName = function (button) {
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.baseData[idx];
            var sData = this.serverData.find(function (x) { return x.petId == item.id; });
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetChangeName, sData);
        };
        //藏馆按钮点击
        PetMain_1.prototype.btn_library = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.petCollectList(1, function (data) {
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetMain);
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetLibrary, data);
            });
        };
        //装饰按钮点击
        PetMain_1.prototype.btn_decorate = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.petApplianceList(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetHome, data);
            });
        };
        //获取食物按钮点击
        PetMain_1.prototype.btn_getFood = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.petGetFoodsInfo(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetGetFood, data);
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetMain);
            }, function (data) {
                Oops_1.oops.gui.toast(data.msg);
            });
        };
        //打开玩法说明
        PetMain_1.prototype.btn_openHelpNode = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            ViewUtil_1.ViewUtil.setNodeActiveByName("helpNode", this.node, true);
            ViewUtil_1.ViewUtil.findChildByName("helpNode", this.node).getComponent(cc_1.Animation).play();
        };
        //关闭玩法说明
        PetMain_1.prototype.btn_closeHelpNode = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            ViewUtil_1.ViewUtil.setNodeActiveByName("helpNode", this.node, false);
        };
        return PetMain_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PetMain");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _memberList_decorators = [property({ type: List_1.default })];
        __esDecorate(null, null, _memberList_decorators, { kind: "field", name: "memberList", static: false, private: false, access: { has: function (obj) { return "memberList" in obj; }, get: function (obj) { return obj.memberList; }, set: function (obj, value) { obj.memberList = value; } }, metadata: _metadata }, _memberList_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PetMain = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetMain = _classThis;
}();
exports.PetMain = PetMain;
