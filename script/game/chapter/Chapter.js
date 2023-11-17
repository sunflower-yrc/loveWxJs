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
exports.Chapter = exports.ChapterType = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var PlayerData_1 = require("../common/tableData/PlayerData");
var StoryData_1 = require("../common/tableData/StoryData");
var HttpPost_1 = require("../tools/HttpPost");
var DataObject_1 = require("../tools/DataObject");
var LimitMgr_1 = require("../mgr/LimitMgr");
var GameMgr_1 = require("../common/mgr/GameMgr");
var cc_2 = require("cc");
var DataManager_1 = require("../../Global/DataManager");
var List_1 = require("../tools/List");
var ResMgr_1 = require("../mgr/ResMgr");
var LevelGiftItem_1 = require("./LevelGiftItem");
var cc_3 = require("cc");
var DropMgr_1 = require("../mgr/DropMgr");
var FunctionOpenData_1 = require("../common/tableData/FunctionOpenData");
var LimitData_1 = require("../common/tableData/LimitData");
var JsonUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableplayer_1 = require("../common/table/Tableplayer");
var Tablefurniture_1 = require("../common/table/Tablefurniture");
var Tabledress_1 = require("../common/table/Tabledress");
var TipCommonItem_1 = require("../../comm/TipCommonItem");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ChapterType;
(function (ChapterType) {
    ChapterType[ChapterType["levelGift"] = 1] = "levelGift";
    ChapterType[ChapterType["moveRoom"] = 2] = "moveRoom"; //搬家
})(ChapterType || (exports.ChapterType = ChapterType = {}));
var Chapter = function () {
    var _classDecorators = [ccclass('Chapter')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _desc_decorators;
    var _desc_initializers = [];
    var _exp_decorators;
    var _exp_initializers = [];
    var _progress_decorators;
    var _progress_initializers = [];
    var _conditions_decorators;
    var _conditions_initializers = [];
    var _list_decorators;
    var _list_initializers = [];
    var _page_decorators;
    var _page_initializers = [];
    var _layout_decorators;
    var _layout_initializers = [];
    var _icon_decorators;
    var _icon_initializers = [];
    var _anim_decorators;
    var _anim_initializers = [];
    var _tip_decorators;
    var _tip_initializers = [];
    var Chapter = _classThis = /** @class */ (function (_super) {
        __extends(Chapter_1, _super);
        function Chapter_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.title = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _title_initializers, null));
            _this.desc = __runInitializers(_this, _desc_initializers, null);
            _this.exp = __runInitializers(_this, _exp_initializers, null);
            _this.progress = __runInitializers(_this, _progress_initializers, null);
            _this.conditions = __runInitializers(_this, _conditions_initializers, null);
            _this.storyData = null;
            _this.allComplete = true;
            _this.curType = null;
            _this.list = __runInitializers(_this, _list_initializers, null);
            _this.page = __runInitializers(_this, _page_initializers, void 0);
            _this.layout = __runInitializers(_this, _layout_initializers, void 0);
            _this.icon = __runInitializers(_this, _icon_initializers, void 0);
            _this.anim = __runInitializers(_this, _anim_initializers, null);
            _this.tip = __runInitializers(_this, _tip_initializers, null);
            _this.items = [];
            _this.currentPage = 0;
            _this.currPageUngetCount = 0;
            _this.jump = "";
            _this.time = null;
            return _this;
        }
        Chapter_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateLevelGift, this.refreshUI, this);
            this.curType = ChapterType.levelGift;
            this.initUI();
            this.setUI();
            this.moveRoomRed();
            this.levelGiftRed();
            this.setLevelTip();
        };
        Chapter_1.prototype.setLevelTip = function () {
            if (GameMgr_1.GameMgr.Instance.showLevel) {
                this.tip.active = true;
                GameMgr_1.GameMgr.Instance.showLevel = false;
                this.setTimer();
                ViewUtil_1.ViewUtil.setLabelStringByName("level_bg/level", this.tip, SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel + "");
            }
            else {
                this.tip.active = false;
            }
        };
        Chapter_1.prototype.coloseTip = function () {
            this.tip.active = false;
        };
        /**创建计时器 */
        Chapter_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            this.time = 5;
            this.onSecond();
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        Chapter_1.prototype.onSecond = function () {
            ViewUtil_1.ViewUtil.setLabelStringByName("time", this.tip, Oops_1.oops.language.getLangByID("chapter.timeClose", this.time));
        };
        Chapter_1.prototype.onComplete = function () {
            this.onSecond();
            this.coloseTip();
        };
        Chapter_1.prototype.initUI = function () {
            var playerData = new PlayerData_1.PlayerData(SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel);
            ViewUtil_1.ViewUtil.setLabelString(this.exp, SingletonModuleComp_1.smc.account.AccountModel.playerLevelExp + "/" + playerData.exp);
            this.progress.fillRange = SingletonModuleComp_1.smc.account.AccountModel.playerLevelExp / playerData.exp;
            this.storyData = new StoryData_1.StoryData(SingletonModuleComp_1.smc.account.AccountModel.chapter);
            ViewUtil_1.ViewUtil.setLabelString(this.title, this.storyData.getTitle());
            //  let i = 0;
            //  this.schedule(async () => {
            //      let item = await ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath.getCommonItemPrefabPath(), BundleConfig.instance.guiBundle.name);
            //      item.parent = this.content;
            //      item.getComponent(CommonItem)?.initData(dropData[i]);
            //      i++;
            //  }, 0.05, dropData.length - 1);
        };
        Chapter_1.prototype.setLevelGift = function () {
            var playerData = new PlayerData_1.PlayerData(SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel);
            var table = JsonUtil_1.JsonUtil.get(Tableplayer_1.Tableplayer.TableName);
            var maxLv = Object.keys(table).length;
            if (playerData.showFunction > 0) {
                var limit = LimitMgr_1.LimitMgr.functionOpen(playerData.showFunction);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/gotoBtn", this.node, limit.satisfied);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/gotoLimit", this.node, !limit.satisfied);
                this.setOpenFun(playerData.showFunction);
                if (!limit.satisfied) {
                    var functionOpenData = new FunctionOpenData_1.FunctionOpenData(playerData.showFunction);
                    var limitData = new LimitData_1.LimitData(functionOpenData.limitId);
                    ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/levelLift/gotoLimit/lab", this.node, Oops_1.oops.language.getLangByID("chapter.unLock", limitData.typeValue));
                }
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/openIcon", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/gotoBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/gotoLimit", this.node, false);
            }
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel < maxLv) {
                //解锁内容
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/show", this.node, true);
                this.listData = this.getShowItem(playerData.showItem);
                this.list.numItems = this.listData.length;
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/show", this.node, false);
            }
            this.items = this.layout.children;
            this.showUI();
            this.setLevelReward();
        };
        Chapter_1.prototype.getShowItem = function (limit) {
            var data = [];
            var tabelf = JsonUtil_1.JsonUtil.get(Tablefurniture_1.Tablefurniture.TableName);
            var tabeld = JsonUtil_1.JsonUtil.get(Tabledress_1.Tabledress.TableName);
            for (var i in tabelf) {
                if (tabelf[i].limits == limit) {
                    var item = DropMgr_1.DropMgr.getSingleDropData(DataObject_1.DropType.Furniture, parseInt(i), 1);
                    data.push(item[0]);
                }
            }
            for (var key in tabeld) {
                if (tabeld[key].limits == limit) {
                    var item = DropMgr_1.DropMgr.getSingleDropData(DataObject_1.DropType.Dress, parseInt(key), 1);
                    data.push(item[0]);
                }
            }
            return data;
        };
        Chapter_1.prototype.setOpenFun = function (openType) {
            var icon = "", name = "";
            switch (openType) {
                case DataObject_1.FunctionType.Pet:
                    icon = "main_btn_pet";
                    name = Oops_1.oops.language.getLangByID("store.toggle4");
                    this.jump = "14-0-0";
                    this.icon.setScale(1.3, 1.3, 1);
                    break;
                case DataObject_1.FunctionType.Manor:
                    icon = "main_btn_manor";
                    this.jump = "18-1-0";
                    name = Oops_1.oops.language.getLangByID("common.manorLab");
                    this.icon.setScale(1, 1, 1);
                    break;
            }
            ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.icon, GameResPath_1.GameResPath.getWeatherIconsPath(""), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/levelLift/openIcon/name", this.node, name);
        };
        Chapter_1.prototype.setLevelReward = function () {
            var table = JsonUtil_1.JsonUtil.get(Tableplayer_1.Tableplayer.TableName);
            var maxLv = Object.keys(table).length;
            var playerData = new PlayerData_1.PlayerData(SingletonModuleComp_1.smc.account.AccountModel.lvGift);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/levelLift/reward/num", this.node, Oops_1.oops.language.getLangByID("chapter.freeBox", playerData.freeBox));
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel > SingletonModuleComp_1.smc.account.AccountModel.lvGift) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/getBtn", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/getLimit", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/reward", this.node, true);
            }
            else {
                if (maxLv > SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/reward", this.node, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/getBtn", this.node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/getLimit", this.node, true);
                    ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/levelLift/getLimit/lab", this.node, Oops_1.oops.language.getLangByID("chapter.getLock", SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel + 1));
                }
                else {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/getBtn", this.node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/getLimit", this.node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/reward", this.node, false);
                }
            }
        };
        //跳转
        Chapter_1.prototype.gotoBtnFun = function () {
            this.close();
            DataMgr_1.DataMgr.gotoFunction([], this.jump);
        };
        Chapter_1.prototype.setMoveRoom = function () {
            ViewUtil_1.ViewUtil.setLabelString(this.desc, this.storyData.getDesc());
            var children = this.conditions.children;
            var condData = this.storyData.getLimitCondData();
            for (var i = 0; i < children.length; i++) {
                var element = children[i];
                if (i < condData.length) {
                    element.active = true;
                    ViewUtil_1.ViewUtil.setLabelStringByName("condition", element, condData[i].desc);
                    var langId = "common.complete";
                    var c = new cc_2.Color("#b7da61");
                    if (!condData[i].status) {
                        langId = "common.incomplete";
                        c = new cc_2.Color("#fe9a9a");
                        //存在未完成的
                        this.allComplete = false;
                    }
                    ViewUtil_1.ViewUtil.setLabelStringByName("status", element, "(" + Oops_1.oops.language.getLangByID(langId) + ")", { color: c });
                }
                else {
                    element.active = false;
                }
            }
            if (condData.length > 0) {
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/moveRoom/moveTitle", this.node, Oops_1.oops.language.getLangByID("chapter.chapterUpCond"));
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/moveRoom/maxRoom", this.node, false);
            }
            else {
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/moveRoom/moveTitle", this.node, Oops_1.oops.language.getLangByID("chapter.maxTitle"));
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/moveRoom/maxRoom", this.node, true);
            }
        };
        Chapter_1.prototype.onRenderList = function (item, index) {
            var _a;
            ResMgr_1.ResMgr.setSingleSpriteFrameByName("icon", item, this.listData[index].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("name", item, this.listData[index].name);
            var tip = (_a = item.getChildByName("icon")) === null || _a === void 0 ? void 0 : _a.getComponent(TipCommonItem_1.TipCommonItem);
            tip === null || tip === void 0 ? void 0 : tip.initData(this.listData[index]);
        };
        Chapter_1.prototype.changeToggle = function (ev, type) {
            if (this.curType == parseInt(type)) {
                return;
            }
            this.curType = parseInt(type);
            this.setUI();
        };
        Chapter_1.prototype.setUI = function () {
            if (this.curType == ChapterType.levelGift) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/moveRoom", this.node, false);
                this.setLevelGift();
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/moveRoom", this.node, true);
                this.setMoveRoom();
                this.anim.getComponent(cc_3.Animation).play();
            }
        };
        /**
         * 显示章节信息
         */
        Chapter_1.prototype.showChapterInfo = function () {
            this.storyData = new StoryData_1.StoryData(SingletonModuleComp_1.smc.account.AccountModel.chapter);
            ViewUtil_1.ViewUtil.setLabelString(this.title, this.storyData.getTitle());
            ViewUtil_1.ViewUtil.setLabelString(this.desc, this.storyData.getDesc());
            var children = this.conditions.children;
            var condData = this.storyData.getLimitCondData();
            for (var i = 0; i < children.length; i++) {
                var element = children[i];
                if (i < condData.length) {
                    element.active = true;
                    ViewUtil_1.ViewUtil.setLabelStringByName("condition", element, condData[i].desc);
                    var langId = "common.complete";
                    var c = new cc_2.Color("#b7da61");
                    if (!condData[i].status) {
                        langId = "common.incomplete";
                        c = new cc_2.Color("#fe9a9a");
                        //存在未完成的
                        this.allComplete = false;
                    }
                    ViewUtil_1.ViewUtil.setLabelStringByName("status", element, "(" + Oops_1.oops.language.getLangByID(langId) + ")", { color: c });
                }
                else {
                    element.active = false;
                }
            }
        };
        Chapter_1.prototype.showUI = function () {
            var _a;
            if (SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length > 0) {
                this.layout.active = true;
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/notGet", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/btn_getAll", this.node, true);
                //翻页
                this.page.active = SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length > 1;
                //等级
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/levelLift/levelTitle", this.node, Oops_1.oops.language.getLangByID("chapter.levelup", SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].level));
                // ViewUtil.setLabelString(this.title, oops.language.getLangByID("chapter.levelup", smc.account.AccountModel.levelGiftList[this.currentPage].level));
                this.currPageUngetCount = 0;
                if (this.items) {
                    for (var i = 0; i < this.items.length; i++) {
                        var element = this.items[i];
                        if (i < SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].giftData.length) {
                            (_a = element.getComponent(LevelGiftItem_1.LevelGiftItem)) === null || _a === void 0 ? void 0 : _a.initData(this.currentPage, i);
                            element.active = true;
                            if (SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].giftData[i].unget) {
                                this.currPageUngetCount++;
                            }
                        }
                        else {
                            element.active = false;
                        }
                    }
                }
                this.showCost();
            }
            else {
                this.layout.active = false;
                this.page.active = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/btn_getAll", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/levelLift/notGet", this.node, true);
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/levelLift/levelTitle", this.node, Oops_1.oops.language.getLangByID("chapter.levelGift"));
            }
        };
        Chapter_1.prototype.showCost = function () {
            //花费
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/levelLift/btn_getAll/amount", this.node, "x" + SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].cost);
        };
        Chapter_1.prototype.refreshUI = function (ev, fromSingle) {
            if (fromSingle === void 0) { fromSingle = false; }
            if (SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length > 0) {
                if (fromSingle) {
                    if (this.currPageUngetCount == 1) {
                        this.currentPage = 0;
                    }
                }
                else {
                    this.currentPage = 0;
                }
            }
            this.showUI();
            this.levelGiftRed();
        };
        Chapter_1.prototype.btn_page = function (event, data) {
            var pageAdd = parseInt(data);
            this.currentPage += pageAdd;
            if (this.currentPage >= SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length) {
                this.currentPage = 0;
            }
            else if (this.currentPage < 0) {
                this.currentPage = SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length - 1;
            }
            this.showUI();
        };
        /**
         * 去升级
         */
        Chapter_1.prototype.btn_goLevelup = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.ChapterLevelup);
        };
        Chapter_1.prototype.btn_getAll = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.jewel < SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].cost) {
                //钻石不够
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.notEnoughJewels"));
                return;
            }
            HttpPost_1.HttpPost.instance.receiveLevelUpGift(SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].level, 2, 0, 1, function (data) {
                //显示掉落
                var dropDatas = [];
                for (var i = 0; i < SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[_this.currentPage].giftData.length; i++) {
                    var element = SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[_this.currentPage].giftData[i];
                    if (element.unget) {
                        var dropData = DropMgr_1.DropMgr.getDropData(element.dropData)[0];
                        dropDatas.push(dropData);
                    }
                }
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.UIID.push(GameUIConfig_1.UIID.Chapter);
                dropInfo.dropFrom = DataObject_1.DropFrom.Chapter;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                //钻石
                SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                //更新数据
                DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                _this.refreshUI(null);
            });
        };
        /**
         * 章节升级
         */
        Chapter_1.prototype.btn_chapter_levelup = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (!this.allComplete) {
                //条件不满足
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.condUnsatisfied"));
                return;
            }
            //章节升级
            HttpPost_1.HttpPost.instance.upUserChapter(function (data) { return __awaiter(_this, void 0, void 0, function () {
                var preChapter;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            preChapter = SingletonModuleComp_1.smc.account.AccountModel.chapter;
                            SingletonModuleComp_1.smc.account.AccountModel.chapter++;
                            this.showChapterInfo();
                            //男主角信息
                            if (SingletonModuleComp_1.smc.account.AccountModel.chapter == 3) {
                                //第三章解锁男主角
                                SingletonModuleComp_1.smc.account.AccountModel.dressBoy = data.dress.boy;
                                SingletonModuleComp_1.smc.account.AccountModel.vm.dressBoyScore = data.dressMarkBoy;
                            }
                            //家具评分
                            if (data.furnitureMark) {
                                SingletonModuleComp_1.smc.account.AccountModel.vm.furnitureScore = data.furnitureMark;
                            }
                            //上传房子数据
                            return [4 /*yield*/, DataManager_1.default.Instance.moveHouse(preChapter, SingletonModuleComp_1.smc.account.AccountModel.chapter)];
                        case 1:
                            //上传房子数据
                            _a.sent();
                            DataManager_1.default.Instance.updateSelectChapter(SingletonModuleComp_1.smc.account.AccountModel.chapter.toString());
                            //只显示女主
                            GameMgr_1.GameMgr.Instance.justShowGilr = SingletonModuleComp_1.smc.account.AccountModel.dressBoy.length == 0 ? true : false;
                            //刷新主页章节
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpUserChapter);
                            this.close();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        Chapter_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (GameMgr_1.GameMgr.Instance.tips[0]) {
                Oops_1.oops.gui.open(GameMgr_1.GameMgr.Instance.tips[0]);
                GameMgr_1.GameMgr.Instance.tips.splice(0, 1);
            }
            this.close();
        };
        Chapter_1.prototype.close = function () {
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Chapter);
        };
        Chapter_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateLevelGift, this.refreshUI, this);
            Oops_1.oops.timer.unRegister(this.timeId);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Chapter);
        };
        Chapter_1.prototype.levelGiftRed = function () {
            var levelGift = Boolean(SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length > 0);
            var levelReward = Boolean(SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel > SingletonModuleComp_1.smc.account.AccountModel.lvGift);
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/ToggleGroup/Toggle1/redDot", this.node, (levelGift || levelReward));
        };
        Chapter_1.prototype.moveRoomRed = function () {
            var allComplete = true;
            var storyData = new StoryData_1.StoryData(SingletonModuleComp_1.smc.account.AccountModel.chapter);
            var condData = storyData.getLimitCondData();
            if (condData.length > 0) {
                for (var i = 0; i < condData.length; i++) {
                    if (!condData[i].status) {
                        allComplete = false;
                    }
                }
            }
            else {
                allComplete = false;
            }
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/ToggleGroup/Toggle2/redDot", this.node, allComplete);
        };
        Chapter_1.prototype.getFreeBox = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getLvOpenBoxTimes(function (data) {
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.Chapter;
                dropInfo.UIID = [GameUIConfig_1.UIID.Chapter];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                SingletonModuleComp_1.smc.account.AccountModel.lvGift = data.lvGift;
                // smc.account.AccountModel.vm.giveTimes = data.giveTimes;
                _this.setLevelReward();
            });
        };
        return Chapter_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Chapter");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _title_decorators = [property(cc_1.Node)];
        _desc_decorators = [property(cc_1.Node)];
        _exp_decorators = [property(cc_1.Node)];
        _progress_decorators = [property(cc_1.Sprite)];
        _conditions_decorators = [property(cc_1.Node)];
        _list_decorators = [property(List_1.default)];
        _page_decorators = [property(cc_1.Node)];
        _layout_decorators = [property(cc_1.Node)];
        _icon_decorators = [property(cc_1.Node)];
        _anim_decorators = [property(cc_1.Node)];
        _tip_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _desc_decorators, { kind: "field", name: "desc", static: false, private: false, access: { has: function (obj) { return "desc" in obj; }, get: function (obj) { return obj.desc; }, set: function (obj, value) { obj.desc = value; } }, metadata: _metadata }, _desc_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _exp_decorators, { kind: "field", name: "exp", static: false, private: false, access: { has: function (obj) { return "exp" in obj; }, get: function (obj) { return obj.exp; }, set: function (obj, value) { obj.exp = value; } }, metadata: _metadata }, _exp_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _progress_decorators, { kind: "field", name: "progress", static: false, private: false, access: { has: function (obj) { return "progress" in obj; }, get: function (obj) { return obj.progress; }, set: function (obj, value) { obj.progress = value; } }, metadata: _metadata }, _progress_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _conditions_decorators, { kind: "field", name: "conditions", static: false, private: false, access: { has: function (obj) { return "conditions" in obj; }, get: function (obj) { return obj.conditions; }, set: function (obj, value) { obj.conditions = value; } }, metadata: _metadata }, _conditions_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _list_decorators, { kind: "field", name: "list", static: false, private: false, access: { has: function (obj) { return "list" in obj; }, get: function (obj) { return obj.list; }, set: function (obj, value) { obj.list = value; } }, metadata: _metadata }, _list_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _page_decorators, { kind: "field", name: "page", static: false, private: false, access: { has: function (obj) { return "page" in obj; }, get: function (obj) { return obj.page; }, set: function (obj, value) { obj.page = value; } }, metadata: _metadata }, _page_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _layout_decorators, { kind: "field", name: "layout", static: false, private: false, access: { has: function (obj) { return "layout" in obj; }, get: function (obj) { return obj.layout; }, set: function (obj, value) { obj.layout = value; } }, metadata: _metadata }, _layout_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _icon_decorators, { kind: "field", name: "icon", static: false, private: false, access: { has: function (obj) { return "icon" in obj; }, get: function (obj) { return obj.icon; }, set: function (obj, value) { obj.icon = value; } }, metadata: _metadata }, _icon_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _anim_decorators, { kind: "field", name: "anim", static: false, private: false, access: { has: function (obj) { return "anim" in obj; }, get: function (obj) { return obj.anim; }, set: function (obj, value) { obj.anim = value; } }, metadata: _metadata }, _anim_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tip_decorators, { kind: "field", name: "tip", static: false, private: false, access: { has: function (obj) { return "tip" in obj; }, get: function (obj) { return obj.tip; }, set: function (obj, value) { obj.tip = value; } }, metadata: _metadata }, _tip_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Chapter = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Chapter = _classThis;
}();
exports.Chapter = Chapter;
