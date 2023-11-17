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
exports.WeekActivity = exports.WeekAType = exports.WeekActivityType = void 0;
var cc_1 = require("cc");
var List_1 = require("../tools/List");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameResPath_1 = require("../common/config/GameResPath");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var cc_2 = require("cc");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataObject_1 = require("../tools/DataObject");
var DataMgr_1 = require("../mgr/DataMgr");
var GameEvent_1 = require("../common/config/GameEvent");
var cc_3 = require("cc");
var cc_4 = require("cc");
var cc_5 = require("cc");
var WeekActivityItem_1 = require("./WeekActivityItem");
var ActivityAllData_1 = require("../common/tableData/ActivityAllData");
var DropMgr_1 = require("../mgr/DropMgr");
var HttpPost_1 = require("../tools/HttpPost");
var cc_6 = require("cc");
var TipCommonItem_1 = require("../../comm/TipCommonItem");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var WeekActivityType;
(function (WeekActivityType) {
    WeekActivityType[WeekActivityType["task"] = 1] = "task";
    WeekActivityType[WeekActivityType["shop"] = 2] = "shop";
})(WeekActivityType || (exports.WeekActivityType = WeekActivityType = {}));
var WeekAType;
(function (WeekAType) {
    WeekAType[WeekAType["pet"] = 1] = "pet";
    WeekAType[WeekAType["openBox"] = 2] = "openBox";
    WeekAType[WeekAType["tile"] = 3] = "tile";
})(WeekAType || (exports.WeekAType = WeekAType = {}));
var WeekActivity = function () {
    var _classDecorators = [ccclass('WeekActivity')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _list_decorators;
    var _list_initializers = [];
    var _shopBg_decorators;
    var _shopBg_initializers = [];
    var _lay2_decorators;
    var _lay2_initializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var WeekActivity = _classThis = /** @class */ (function (_super) {
        __extends(WeekActivity_1, _super);
        function WeekActivity_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = (__runInitializers(_this, _instanceExtraInitializers), null);
            _this.activityType = null;
            _this.list = __runInitializers(_this, _list_initializers, null);
            _this.shopBg = __runInitializers(_this, _shopBg_initializers, null);
            _this.lay2 = __runInitializers(_this, _lay2_initializers, null);
            _this.item = __runInitializers(_this, _item_initializers, null);
            _this.weekAdTimes = 0;
            _this.time = null;
            return _this;
        }
        //礼包任务
        WeekActivity_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateWeekActivity, this.updateData, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.WeekActivityBuy, this.updateDataBuy, this);
            this.type = WeekActivityType.task;
            this.setChoseType();
            this.initUI();
            this.setTimer();
        };
        WeekActivity_1.prototype.onAdded = function (data) {
            this.data = data;
            this.weekAdTimes = data.weekAdTimes;
        };
        WeekActivity_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateWeekActivity, this.updateData, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.WeekActivityBuy, this.updateDataBuy, this);
            Oops_1.oops.timer.unRegister(this.timeId);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.WeekActivity);
        };
        WeekActivity_1.prototype.choseType = function (ev, type) {
            if (this.type == parseInt(type)) {
                return;
            }
            this.type = parseInt(type);
            this.setChoseType();
            this.list.scrollTo(-1);
        };
        WeekActivity_1.prototype.setChoseType = function () {
            if (this.type == WeekActivityType.task) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("middle/task2", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("middle/gift2", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("middle/bg", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("middle/shopBg", this.node, false);
                this.listData = this.data.taskList;
                this.list.numItems = this.listData.length;
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("middle/task2", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("middle/gift2", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("middle/bg", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("middle/shopBg", this.node, true);
                this.listData = this.data.giftList;
                this.list.numItems = this.listData.length;
                this.setDayData();
            }
            this.setRed();
        };
        WeekActivity_1.prototype.initUI = function () {
            var activityData = new ActivityAllData_1.ActivityAllData(this.data.activityId);
            this.activityType = parseInt(activityData.typeValue);
            var img1 = "", img2 = "", str = "", color = "", titleImg = "";
            if (this.activityType == WeekAType.pet) {
                img1 = "wk_pet_title_bg";
                img2 = "wk_pet_bg";
                str = Oops_1.oops.language.getLangByID("weekActivity.petTitle");
                color = "#4c9ed2";
                titleImg = "wk_txt_pet_title";
                ViewUtil_1.ViewUtil.setNodeActiveByName("top/pet", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("top/car", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("top/eat", this.node, false);
            }
            else if (this.activityType == WeekAType.openBox) {
                img1 = "wk_open_title_bg";
                img2 = "wk_open_bg";
                str = Oops_1.oops.language.getLangByID("weekActivity.boxTitle");
                color = "#6baccd";
                titleImg = "wk_txt_open_title";
                ViewUtil_1.ViewUtil.setNodeActiveByName("top/pet", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("top/car", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("top/eat", this.node, false);
            }
            else {
                img1 = "wk_games_title_bg";
                img2 = "wk_games_bg";
                str = Oops_1.oops.language.getLangByID("weekActivity.tileTitle");
                color = "#698ad6";
                titleImg = "wk_txt_games_title";
                ViewUtil_1.ViewUtil.setNodeActiveByName("top/pet", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("top/car", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("top/eat", this.node, true);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("middle/bg/dec2", this.node, str, { color: new cc_2.Color(color) });
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("middle/bg", this.node, GameResPath_1.GameResPath.getWeekBgPath(img2), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("top/titleName", this.node, GameResPath_1.GameResPath.getWeekBgPath(titleImg), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("top/title_bg", this.node, GameResPath_1.GameResPath.getWeekBgPath(img1), BundleConfig_1.default.instance.guiBundle.name);
        };
        WeekActivity_1.prototype.onRenderList = function (item, index) {
            var _a;
            (_a = item.getComponent(WeekActivityItem_1.WeekActivityItem)) === null || _a === void 0 ? void 0 : _a.init(this.listData[index], this.type, this.weekAdTimes);
        };
        /**创建计时器 */
        WeekActivity_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            this.time = (this.data.endTime - curTime);
            this.onSecond();
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        WeekActivity_1.prototype.onSecond = function () {
            var time;
            if (this.time >= 3600) {
                time = StringUtil_1.StringUtil.formatTimeWithSec(this.time, true);
            }
            else {
                time = StringUtil_1.StringUtil.formatTimeWithSec(this.time);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("top/timeLab", this.node, Oops_1.oops.language.getLangByID("common.leftTime") + time);
        };
        WeekActivity_1.prototype.onComplete = function () {
            this.closeView();
        };
        WeekActivity_1.prototype.updateData = function (ev, data) {
            this.onAdded(data.info);
            this.setChoseType();
        };
        WeekActivity_1.prototype.updateDataBuy = function (ev, data) {
            var _this = this;
            if (data) {
                this.onAdded(data);
                this.setChoseType();
            }
            else {
                HttpPost_1.HttpPost.instance.weekActivityInfo(function (data) {
                    _this.onAdded(data);
                    _this.setChoseType();
                });
            }
        };
        WeekActivity_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.WeekActivity);
        };
        //跳转
        WeekActivity_1.prototype.gotoBtnFun = function () {
            this.closeView();
            var activityData = new ActivityAllData_1.ActivityAllData(this.data.activityId);
            DataMgr_1.DataMgr.gotoFunction([GameUIConfig_1.UIID.WeekActivity], activityData.activityJump);
        };
        //每日福利
        WeekActivity_1.prototype.setDayData = function () {
            var _a;
            ViewUtil_1.ViewUtil.setNodeActiveByName("getted2", this.shopBg, this.data.freeRewardStatus);
            ViewUtil_1.ViewUtil.setNodeActiveByName("show/dayGet", this.shopBg, !this.data.freeRewardStatus);
            this.shopBg.getComponent(cc_6.Button).interactable = !this.data.freeRewardStatus;
            var bg = (_a = this.shopBg.getChildByName("show")) === null || _a === void 0 ? void 0 : _a.getComponent(cc_4.UIOpacity);
            bg.opacity = this.data.freeRewardStatus ? 180 : 255;
            var str = this.data.freeRewardStatus ? Oops_1.oops.language.getLangByID("common.got") : Oops_1.oops.language.getLangByID("common.getReward");
            ViewUtil_1.ViewUtil.setLabelStringByName("have/getLab", this.node, str);
            ViewUtil_1.ViewUtil.setNodeActiveByName("show/redDot", this.node, !this.data.freeRewardStatus);
            // let globalTable: GlobalData = new GlobalData(21);
            var dayReward = DropMgr_1.DropMgr.getDropData(this.data.freeReward);
            this.onItemList(this.lay2, dayReward);
        };
        //物品列表渲染
        WeekActivity_1.prototype.onItemList = function (parent, data) {
            var _a;
            var len = parent.children.length > data.length ?
                parent.children.length : data.length;
            for (var i = 0; i < len; i++) {
                var itemNode = void 0;
                if (parent.children[i] && data[i]) {
                    parent.children[i].active = true;
                    itemNode = parent.children[i];
                }
                else if (!parent.children[i] && data[i]) {
                    var item = (0, cc_3.instantiate)(this.item);
                    item.parent = parent;
                    itemNode = item;
                }
                else if (parent.children[i] && !data[i]) {
                    parent.children[i].active = false;
                    continue;
                }
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("reward", itemNode, data[i].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("num", itemNode, "x" + data[i].dropAmount);
                var tip = (_a = itemNode.getChildByName("reward")) === null || _a === void 0 ? void 0 : _a.getComponent(TipCommonItem_1.TipCommonItem);
                tip === null || tip === void 0 ? void 0 : tip.initData(data[i]);
            }
        };
        WeekActivity_1.prototype.setRed = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("middle/togBg/task1/redDot", this.node, this.data.taskRedDot);
            ViewUtil_1.ViewUtil.setNodeActiveByName("middle/togBg/gift1/redDot", this.node, !this.data.freeRewardStatus);
        };
        WeekActivity_1.prototype.getDayReward = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getWeekActivityFreeReward(function (data) {
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.WeekActivity;
                dropInfo.UIID = [GameUIConfig_1.UIID.WeekActivity];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                _this.onAdded(data.info);
                _this.setChoseType();
            });
        };
        return WeekActivity_1;
    }(_classSuper));
    __setFunctionName(_classThis, "WeekActivity");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _list_decorators = [property(List_1.default)];
        _shopBg_decorators = [property(cc_1.Node)];
        _lay2_decorators = [property(cc_1.Node)];
        _item_decorators = [property(cc_5.Prefab)];
        __esDecorate(null, null, _list_decorators, { kind: "field", name: "list", static: false, private: false, access: { has: function (obj) { return "list" in obj; }, get: function (obj) { return obj.list; }, set: function (obj, value) { obj.list = value; } }, metadata: _metadata }, _list_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _shopBg_decorators, { kind: "field", name: "shopBg", static: false, private: false, access: { has: function (obj) { return "shopBg" in obj; }, get: function (obj) { return obj.shopBg; }, set: function (obj, value) { obj.shopBg = value; } }, metadata: _metadata }, _shopBg_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lay2_decorators, { kind: "field", name: "lay2", static: false, private: false, access: { has: function (obj) { return "lay2" in obj; }, get: function (obj) { return obj.lay2; }, set: function (obj, value) { obj.lay2 = value; } }, metadata: _metadata }, _lay2_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WeekActivity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WeekActivity = _classThis;
}();
exports.WeekActivity = WeekActivity;
