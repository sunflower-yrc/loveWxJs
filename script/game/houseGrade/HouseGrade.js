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
exports.HouseGrade = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var Role_1 = require("../dress/Role");
var cc_3 = require("cc");
var DataObject_1 = require("../tools/DataObject");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var HttpPost_1 = require("../tools/HttpPost");
var JsonUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var LangData_1 = require("../common/tableData/LangData");
var DropMgr_1 = require("../mgr/DropMgr");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var SuitData_1 = require("../common/tableData/SuitData");
var DataMgr_1 = require("../mgr/DataMgr");
var TaskData_1 = require("../common/tableData/TaskData");
var GlobalData_1 = require("../common/tableData/GlobalData");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameEvent_1 = require("../common/config/GameEvent");
var houseRateData_1 = require("../common/tableData/houseRateData");
var cc_4 = require("cc");
var GameResPath_1 = require("../common/config/GameResPath");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var TipCommonItem_1 = require("../../comm/TipCommonItem");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var HouseGrade = function () {
    var _classDecorators = [ccclass('HouseGrade')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _scoreLab_decorators;
    var _scoreLab_initializers = [];
    var _wishLab_decorators;
    var _wishLab_initializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _furniture_decorators;
    var _furniture_initializers = [];
    var _preview_decorators;
    var _preview_initializers = [];
    var _roleNode_decorators;
    var _roleNode_initializers = [];
    var _furnitureNode_decorators;
    var _furnitureNode_initializers = [];
    var _gotoBtn_decorators;
    var _gotoBtn_initializers = [];
    var _getBtn_decorators;
    var _getBtn_initializers = [];
    var _adsBtn_decorators;
    var _adsBtn_initializers = [];
    var _reward_decorators;
    var _reward_initializers = [];
    var _furnitureReward_decorators;
    var _furnitureReward_initializers = [];
    var HouseGrade = _classThis = /** @class */ (function (_super) {
        __extends(HouseGrade_1, _super);
        function HouseGrade_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.scoreLab = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _scoreLab_initializers, null));
            _this.wishLab = __runInitializers(_this, _wishLab_initializers, null);
            _this.role = __runInitializers(_this, _role_initializers, null);
            _this.furniture = __runInitializers(_this, _furniture_initializers, null);
            _this.preview = __runInitializers(_this, _preview_initializers, null);
            _this.roleNode = __runInitializers(_this, _roleNode_initializers, null);
            _this.furnitureNode = __runInitializers(_this, _furnitureNode_initializers, null);
            _this.gotoBtn = __runInitializers(_this, _gotoBtn_initializers, null);
            _this.getBtn = __runInitializers(_this, _getBtn_initializers, null);
            _this.adsBtn = __runInitializers(_this, _adsBtn_initializers, null);
            _this.reward = __runInitializers(_this, _reward_initializers, null);
            _this.furnitureReward = __runInitializers(_this, _furnitureReward_initializers, null);
            _this.isCanLvUp = false;
            return _this;
        }
        HouseGrade_1.prototype.onLoad = function () {
            this.role.defaultSkin(DataObject_1.RoleMale.girl);
        };
        HouseGrade_1.prototype.onAdded = function (data) {
            this.data = data;
            console.log(Object.keys(JsonUtil_1.JsonUtil.get("houseRate")));
            var houseData = new houseRateData_1.houseRateData(data.houseRateConfigKey);
            var str = new LangData_1.LangData(houseData.rateName).getDesc();
            this.isCanLvUp = data.rateScoreNow >= data.rateScoreUp && data.rateWishNow >= data.rateWishUp;
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/titleLab", this.node, str);
            //是否满级
            if (data.isFull) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/houseNode", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/taskNode", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/houseMax", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/taskMax", this.node, true);
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/needDec", this.node, Oops_1.oops.language.getLangByID("houseGrade.wishDec"));
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/btn_lvup", this.node, false);
                return;
            }
            this.dropDatas = DropMgr_1.DropMgr.getDropData(houseData.rateReward);
            var suitId = this.dropDatas[0].type == DataObject_1.DropType.Furniture ? JsonUtil_1.JsonUtil.get("furniture")[this.dropDatas[0].dropId].furnitureSuit : JsonUtil_1.JsonUtil.get("dress")[this.dropDatas[0].dropId].dressSuit;
            this.suitData = new SuitData_1.SuitData(suitId);
            this.taskData = new TaskData_1.TaskData(3, data.taskConfigKey);
            var itemDropData = DropMgr_1.DropMgr.getSingleDropData(this.taskData.value > 10000 ? 1 : 2, this.taskData.value, this.taskData.value1);
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/btn_lvup", this.node, true);
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/houseNode", this.node, true);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("root/bg/houseNode/reward", this.node, this.dropDatas[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            var tip1 = this.reward.getComponent(TipCommonItem_1.TipCommonItem);
            tip1 === null || tip1 === void 0 ? void 0 : tip1.initData(this.dropDatas[0]);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/houseNode/scoreLab", this.node, "(" + data.rateScoreNow + "/" + data.rateScoreUp + ")", (data.rateScoreNow >= data.rateScoreUp ? { color: new cc_4.Color("#b7da61") } : { color: new cc_4.Color("#fe9a9a") }));
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/houseNode/wishLab", this.node, "(" + data.rateWishNow + "/" + data.rateWishUp + ")", (data.rateWishNow >= data.rateWishUp ? { color: new cc_4.Color("#b7da61") } : { color: new cc_4.Color("#fe9a9a") }));
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/btn_lvup/redDot", this.node, this.isCanLvUp);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/houseNode/rewardLab", this.node, Oops_1.oops.language.getLangByID("houseGrade.lvDec", new LangData_1.LangData(this.suitData.name).getDesc()));
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/taskNode/lay/itemName", this.node, itemDropData[0].name);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("root/bg/taskNode/furniture", this.node, itemDropData[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/taskNode/lay/proLab", this.node, "(" + (data.rateWishNow >= data.rateWishUp ? this.taskData.value1 : 0) + "/" + this.taskData.value1 + ")", (data.rateWishNow >= data.rateWishUp ? { color: new cc_4.Color("#b7da61") } : { color: new cc_4.Color("#fe9a9a") }));
            var tip2 = this.furnitureReward.getComponent(TipCommonItem_1.TipCommonItem);
            tip2 === null || tip2 === void 0 ? void 0 : tip2.initData(itemDropData[0]);
            if (data.rateWishNow >= data.rateWishUp) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/taskNode", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/taskMax", this.node, true);
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/needDec", this.node, Oops_1.oops.language.getLangByID("houseGrade.wishDec"));
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/taskNode", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/taskMax", this.node, false);
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/needDec", this.node, new LangData_1.LangData(data.taskConfigKey).getDesc());
                var bol = Boolean(parseInt(this.taskData.jump) == 0 && this.taskData.taskType == 1);
                if (data.taskStatus == 1) {
                    this.getBtn.active = false;
                    this.gotoBtn.active = false;
                    this.adsBtn.active = false;
                    ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/taskNode/complete", this.node, true);
                    ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/taskNode/lay/proLab", this.node, "(" + this.taskData.value1 + "/" + this.taskData.value1 + ")", { color: new cc_4.Color("#b7da61") });
                }
                else {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/taskNode/complete", this.node, false);
                    if (bol) {
                        this.getBtn.active = bol;
                        this.gotoBtn.active = false;
                        this.adsBtn.active = false;
                        ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/taskNode/btn_get/costLab", this.node, "" + data.expendDiamond);
                    }
                    else {
                        if (parseInt(this.taskData.jump) == 1) {
                            this.gotoBtn.active = false;
                            this.getBtn.active = false;
                            this.adsBtn.active = true;
                        }
                        else {
                            this.gotoBtn.active = true;
                            this.getBtn.active = false;
                            this.adsBtn.active = false;
                        }
                    }
                }
            }
        };
        HouseGrade_1.prototype.start = function () {
        };
        HouseGrade_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.HouseGrade);
        };
        HouseGrade_1.prototype.closeView = function () {
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.HouseGrade);
        };
        //升级
        HouseGrade_1.prototype.houseLevelUp = function () {
            var _this = this;
            if (this.data.rateScoreNow < this.data.rateScoreUp) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("houseGrade.lvNot"));
                return;
            }
            if (this.data.rateWishNow < this.data.rateWishUp) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("houseGrade.wishNot"));
                return;
            }
            if (this.isCanLvUp) {
                HttpPost_1.HttpPost.instance.houseLevelUp(function (data) {
                    _this.onAdded(data);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateHouseGrade, data);
                });
            }
        };
        //预览
        HouseGrade_1.prototype.previewShow = function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.preview.active = true;
                            if (!(this.dropDatas[0].type == DataObject_1.DropType.Dress)) return [3 /*break*/, 2];
                            //服装
                            this.roleNode.active = true;
                            this.furnitureNode.active = false;
                            return [4 /*yield*/, ((_a = this.roleNode.getComponent(Role_1.Role)) === null || _a === void 0 ? void 0 : _a.showSuitSkin(this.suitData.suitShow))];
                        case 1:
                            _c.sent();
                            (_b = this.roleNode.getComponent(Role_1.Role)) === null || _b === void 0 ? void 0 : _b.changeAnim(DataObject_1.RoleAnimType.Walk);
                            return [3 /*break*/, 3];
                        case 2:
                            //家具
                            this.roleNode.active = false;
                            this.furnitureNode.active = true;
                            ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.furnitureNode, GameResPath_1.GameResPath.getSuitPreviewPath(this.suitData.id.toString()), BundleConfig_1.default.instance.guiBundle.name);
                            _c.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        //关闭预览
        HouseGrade_1.prototype.previewClose = function () {
            this.preview.active = false;
        };
        //跳转
        HouseGrade_1.prototype.gotoBtnFun = function () {
            this.closeView();
            DataMgr_1.DataMgr.gotoFunction([], this.taskData.jump);
        };
        //购买任务奖励
        HouseGrade_1.prototype.getTaskReward = function () {
            var _this = this;
            var globalTable = new GlobalData_1.GlobalData(7);
            var need = this.data.expendDiamond;
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.jewel < need && this.data.taskStatus != 1) {
                // oops.gui.toast(oops.language.getLangByID("common.notEnoughJewels"));
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.JumpTip, { closeView: GameUIConfig_1.UIID.HouseGrade, type: DataObject_1.JumpTipType.diamond });
                return;
            }
            HttpPost_1.HttpPost.instance.completeWish(function (data) {
                if (_this.data.taskStatus == 1) {
                    _this.onAdded(data.houseRate);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateHouseGrade, data.houseRate);
                    return;
                }
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.prop);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.HouseGrade;
                dropInfo.UIID = [GameUIConfig_1.UIID.HouseGrade];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                SingletonModuleComp_1.smc.account.AccountModel.vm.jewel -= need;
                _this.onAdded(data.houseRate);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateHouseGrade, data.houseRate);
                DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
            });
        };
        //看广告获得
        HouseGrade_1.prototype.adsGetReward = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.house_grade, function (adsTipType) {
                HttpPost_1.HttpPost.instance.advCompleteWish(function (data) {
                    //显示掉落
                    var dropDatas = DropMgr_1.DropMgr.getDropData(data.prop);
                    var dropInfo = new DataObject_1.DropInfo();
                    dropInfo.dropData = dropDatas;
                    dropInfo.dropFrom = DataObject_1.DropFrom.HouseGrade;
                    dropInfo.UIID = [GameUIConfig_1.UIID.HouseGrade];
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                    _this.onAdded(data.houseRate);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateHouseGrade, data.houseRate);
                    DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                });
            });
        };
        return HouseGrade_1;
    }(_classSuper));
    __setFunctionName(_classThis, "HouseGrade");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _scoreLab_decorators = [property(cc_1.Label)];
        _wishLab_decorators = [property(cc_1.Label)];
        _role_decorators = [property(Role_1.Role)];
        _furniture_decorators = [property(cc_3.Sprite)];
        _preview_decorators = [property(cc_2.Node)];
        _roleNode_decorators = [property(cc_2.Node)];
        _furnitureNode_decorators = [property(cc_2.Node)];
        _gotoBtn_decorators = [property(cc_2.Node)];
        _getBtn_decorators = [property(cc_2.Node)];
        _adsBtn_decorators = [property(cc_2.Node)];
        _reward_decorators = [property(cc_2.Node)];
        _furnitureReward_decorators = [property(cc_2.Node)];
        __esDecorate(null, null, _scoreLab_decorators, { kind: "field", name: "scoreLab", static: false, private: false, access: { has: function (obj) { return "scoreLab" in obj; }, get: function (obj) { return obj.scoreLab; }, set: function (obj, value) { obj.scoreLab = value; } }, metadata: _metadata }, _scoreLab_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _wishLab_decorators, { kind: "field", name: "wishLab", static: false, private: false, access: { has: function (obj) { return "wishLab" in obj; }, get: function (obj) { return obj.wishLab; }, set: function (obj, value) { obj.wishLab = value; } }, metadata: _metadata }, _wishLab_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _furniture_decorators, { kind: "field", name: "furniture", static: false, private: false, access: { has: function (obj) { return "furniture" in obj; }, get: function (obj) { return obj.furniture; }, set: function (obj, value) { obj.furniture = value; } }, metadata: _metadata }, _furniture_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _preview_decorators, { kind: "field", name: "preview", static: false, private: false, access: { has: function (obj) { return "preview" in obj; }, get: function (obj) { return obj.preview; }, set: function (obj, value) { obj.preview = value; } }, metadata: _metadata }, _preview_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _roleNode_decorators, { kind: "field", name: "roleNode", static: false, private: false, access: { has: function (obj) { return "roleNode" in obj; }, get: function (obj) { return obj.roleNode; }, set: function (obj, value) { obj.roleNode = value; } }, metadata: _metadata }, _roleNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _furnitureNode_decorators, { kind: "field", name: "furnitureNode", static: false, private: false, access: { has: function (obj) { return "furnitureNode" in obj; }, get: function (obj) { return obj.furnitureNode; }, set: function (obj, value) { obj.furnitureNode = value; } }, metadata: _metadata }, _furnitureNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _gotoBtn_decorators, { kind: "field", name: "gotoBtn", static: false, private: false, access: { has: function (obj) { return "gotoBtn" in obj; }, get: function (obj) { return obj.gotoBtn; }, set: function (obj, value) { obj.gotoBtn = value; } }, metadata: _metadata }, _gotoBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _getBtn_decorators, { kind: "field", name: "getBtn", static: false, private: false, access: { has: function (obj) { return "getBtn" in obj; }, get: function (obj) { return obj.getBtn; }, set: function (obj, value) { obj.getBtn = value; } }, metadata: _metadata }, _getBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _adsBtn_decorators, { kind: "field", name: "adsBtn", static: false, private: false, access: { has: function (obj) { return "adsBtn" in obj; }, get: function (obj) { return obj.adsBtn; }, set: function (obj, value) { obj.adsBtn = value; } }, metadata: _metadata }, _adsBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reward_decorators, { kind: "field", name: "reward", static: false, private: false, access: { has: function (obj) { return "reward" in obj; }, get: function (obj) { return obj.reward; }, set: function (obj, value) { obj.reward = value; } }, metadata: _metadata }, _reward_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _furnitureReward_decorators, { kind: "field", name: "furnitureReward", static: false, private: false, access: { has: function (obj) { return "furnitureReward" in obj; }, get: function (obj) { return obj.furnitureReward; }, set: function (obj, value) { obj.furnitureReward = value; } }, metadata: _metadata }, _furnitureReward_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HouseGrade = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HouseGrade = _classThis;
}();
exports.HouseGrade = HouseGrade;
