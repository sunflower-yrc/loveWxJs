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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var CommonItem_1 = require("../chapter/CommonItem");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var StoryData_1 = require("../common/tableData/StoryData");
var TaskData_1 = require("../common/tableData/TaskData");
var TriggerData_1 = require("../common/tableData/TriggerData");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var List_1 = require("../tools/List");
var TaskItem_1 = require("./TaskItem");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Task = function () {
    var _classDecorators = [ccclass('Task')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _nodeScrollview_decorators;
    var _nodeScrollview_initializers = [];
    var _daily_decorators;
    var _daily_initializers = [];
    var _main_decorators;
    var _main_initializers = [];
    var _toggle_decorators;
    var _toggle_initializers = [];
    var _chapterTitle_decorators;
    var _chapterTitle_initializers = [];
    var _chapter_decorators;
    var _chapter_initializers = [];
    var _details_decorators;
    var _details_initializers = [];
    var _reward_decorators;
    var _reward_initializers = [];
    var Task = _classThis = /** @class */ (function (_super) {
        __extends(Task_1, _super);
        function Task_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nodeScrollview = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _nodeScrollview_initializers, null));
            _this.daily = __runInitializers(_this, _daily_initializers, null);
            _this.main = __runInitializers(_this, _main_initializers, null);
            _this.toggle = __runInitializers(_this, _toggle_initializers, null);
            _this.chapterTitle = __runInitializers(_this, _chapterTitle_initializers, null);
            _this.chapter = __runInitializers(_this, _chapter_initializers, null);
            _this.details = __runInitializers(_this, _details_initializers, null);
            _this.reward = __runInitializers(_this, _reward_initializers, null);
            _this.type = 1; //1每日任务 2主线任务
            _this.mainInit = false;
            _this.dailyInit = false;
            _this.dropData = [];
            _this.totalTime = 0; //剩余时间
            return _this;
        }
        Task_1.prototype.onAdded = function (param) {
            this.type = param.type;
            if (SingletonModuleComp_1.smc.account.AccountModel.isMainTaskCompleted) {
                //主线已完成
                this.toggle.active = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/title1", this.node, true);
                if (this.type == 2) {
                    this.type = 1;
                }
            }
            this.showTask(this.type);
            //定时器
            this.totalTime = Oops_1.oops.timer.getTodayTimeLeft();
            this.showTime();
            this.nodeScrollview.node.on("scroll-to-bottom", this.onScrollUpDown, this);
            this.nodeScrollview.node.on("scroll-to-top", this.onScrollUpDown, this);
            this.nodeScrollview.node.on("scroll-ended", this.onScrollUpDown, this);
            this.nodeScrollview.node.on(cc_1.Node.EventType.TOUCH_END, this.onScrollUpDown, this);
        };
        Task_1.prototype.offListen = function () {
            this.nodeScrollview.node.off("scroll-to-bottom", this.onScrollUpDown, this);
            this.nodeScrollview.node.off("scroll-to-top", this.onScrollUpDown, this);
            this.nodeScrollview.node.off("scroll-ended", this.onScrollUpDown, this);
            this.nodeScrollview.node.off(cc_1.Node.EventType.TOUCH_END, this.onScrollUpDown, this);
        };
        Task_1.prototype.start = function () {
            var _a;
            if (this.type == 2) {
                (_a = this.toggle.children[1].getComponent(cc_1.Toggle)) === null || _a === void 0 ? void 0 : _a.setIsCheckedWithoutNotify(true);
            }
        };
        /**
         * 每日任务数据
         */
        Task_1.prototype.getDailyTaskData = function (refresh) {
            var _this = this;
            HttpPost_1.HttpPost.instance.getTaskList(function (data) {
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateDailyTask, data);
                _this.loadDailyTask(refresh);
            });
        };
        /**
         * 加载列表
         */
        Task_1.prototype.loadDailyTask = function (refresh) {
            this.nodeScrollview.numItems = SingletonModuleComp_1.smc.account.AccountModel.dailyTaskData.length;
            if (refresh) {
                this.nodeScrollview.updateAll();
            }
            this.dailyInit = true;
        };
        /**
         * 剩余时间
         */
        Task_1.prototype.showTime = function () {
            this.refreshTime();
            this.schedule(this.refreshTime, 1);
        };
        Task_1.prototype.onDestroy = function () {
            this.unschedule(this.refreshTime);
        };
        Task_1.prototype.refreshTime = function () {
            if (this.totalTime > 0) {
                var time = StringUtil_1.StringUtil.formatTimeWithSec(this.totalTime);
                ViewUtil_1.ViewUtil.setLabelStringByName("tips/time", this.daily, time);
                this.totalTime--;
            }
            else {
                //重置时间，并刷新列表
                this.totalTime = 86400; //一天
                this.getDailyTaskData(true);
            }
        };
        /**
         * render回调
        */
        Task_1.prototype.renderEventCallback = function (item, idx) {
            var _a;
            (_a = item.getComponent(TaskItem_1.TaskItem)) === null || _a === void 0 ? void 0 : _a.initData(idx);
        };
        Task_1.prototype.btn_toggle = function (event, data) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var type = parseInt(data);
            this.showTask(type);
        };
        /**
         * 显示任务
         * @param type
         */
        Task_1.prototype.showTask = function (type) {
            if (type == 1) {
                //日常
                this.daily.active = true;
                this.main.active = false;
                if (!this.dailyInit) {
                    this.getDailyTaskData(false);
                }
            }
            else {
                //主线
                this.daily.active = false;
                this.main.active = true;
                if (!this.mainInit) {
                    //未初始化过
                    //章节
                    var storyData = new StoryData_1.StoryData(SingletonModuleComp_1.smc.account.AccountModel.chapter);
                    ViewUtil_1.ViewUtil.setLabelString(this.chapterTitle, storyData.getTitle());
                    ViewUtil_1.ViewUtil.setLabelStringByName("desc", this.chapter, storyData.getDesc());
                    this.mainInit = true;
                }
                //任务描述
                this.showMainDetails();
            }
        };
        /**
         * 主线任务详情
         */
        Task_1.prototype.showMainDetails = function () {
            var _a;
            //任务详情
            var data = SingletonModuleComp_1.smc.account.AccountModel.mainTaskData;
            this.taskData = new TaskData_1.TaskData(1, data.taskId);
            ViewUtil_1.ViewUtil.setLabelStringByName("desc", this.details, this.taskData.getMainTaskDesc());
            var c = new cc_1.Color(102, 218, 97);
            if (data.isGetReward == 1) {
                c = new cc_1.Color(218, 97, 97); //未完成
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("progress", this.details, "(" + data.completed + "/" + this.taskData.getMainTaskValue() + ")", { color: c });
            //任务奖励
            var layout = ViewUtil_1.ViewUtil.findNode("Layout", this.reward);
            var rewards = layout === null || layout === void 0 ? void 0 : layout.children;
            this.dropData = DropMgr_1.DropMgr.getDropData(this.taskData.item);
            for (var i = 0; i < rewards.length; i++) {
                var element = rewards[i];
                if (i < this.dropData.length) {
                    element.active = true;
                    (_a = element.getComponent(CommonItem_1.CommonItem)) === null || _a === void 0 ? void 0 : _a.initData(this.dropData[i]);
                }
                else {
                    element.active = false;
                }
            }
            //是否可以领取
            ViewUtil_1.ViewUtil.setNodeActiveByName("btn_get", this.main, data.isGetReward == 2);
            ViewUtil_1.ViewUtil.setNodeActiveByName("btn_go", this.main, data.isGetReward != 2);
        };
        /**
         * 领取主线任务完成之后刷新
         */
        Task_1.prototype.refreshMainTask = function () {
            if (SingletonModuleComp_1.smc.account.AccountModel.isMainTaskCompleted) {
                //主线已完成
                this.toggle.active = false;
                this.daily.active = true;
                this.main.active = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/title1", this.node, true);
            }
            else {
                this.showMainDetails();
            }
        };
        /**
         * 领取主线任务奖励
         */
        Task_1.prototype.btn_reward = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getTaskReward(0, 1, SingletonModuleComp_1.smc.account.AccountModel.mainTaskData.taskId, function (data) {
                //打点
                SdkPlatform_1.SdkPlatform.mainTask(SingletonModuleComp_1.smc.account.AccountModel.mainTaskData.taskId);
                /**主线事件 */
                var triggers = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.MainTask);
                if (triggers) {
                    for (var _i = 0, triggers_1 = triggers; _i < triggers_1.length; _i++) {
                        var i = triggers_1[_i];
                        i.checkTrigger();
                    }
                }
                /**主线事件 */
                var triggers2 = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.UpLevel);
                if (triggers2) {
                    for (var _a = 0, triggers2_1 = triggers2; _a < triggers2_1.length; _a++) {
                        var i = triggers2_1[_a];
                        i.checkTrigger(SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel);
                    }
                }
                //显示掉落
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = _this.dropData;
                dropInfo.UIID.push(GameUIConfig_1.UIID.Task);
                dropInfo.dropFrom = DataObject_1.DropFrom.Task;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                //更新数据
                DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                //更新每日任务数据
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateDailyTask, data.taskList);
                _this.refreshMainTask();
            });
        };
        /**
         * 主线任务前往
         */
        Task_1.prototype.btn_go = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            DataMgr_1.DataMgr.gotoFunction([GameUIConfig_1.UIID.Task], this.taskData.jump);
        };
        Task_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Task);
        };
        Task_1.prototype.onScrollUpDown = function (e) {
            DataMgr_1.DataMgr.CloseItemDetails();
        };
        Task_1.prototype.onDisable = function () {
            this.offListen();
        };
        return Task_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Task");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _nodeScrollview_decorators = [property(List_1.default)];
        _daily_decorators = [property(cc_1.Node)];
        _main_decorators = [property(cc_1.Node)];
        _toggle_decorators = [property(cc_1.Node)];
        _chapterTitle_decorators = [property(cc_1.Node)];
        _chapter_decorators = [property(cc_1.Node)];
        _details_decorators = [property(cc_1.Node)];
        _reward_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _nodeScrollview_decorators, { kind: "field", name: "nodeScrollview", static: false, private: false, access: { has: function (obj) { return "nodeScrollview" in obj; }, get: function (obj) { return obj.nodeScrollview; }, set: function (obj, value) { obj.nodeScrollview = value; } }, metadata: _metadata }, _nodeScrollview_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _daily_decorators, { kind: "field", name: "daily", static: false, private: false, access: { has: function (obj) { return "daily" in obj; }, get: function (obj) { return obj.daily; }, set: function (obj, value) { obj.daily = value; } }, metadata: _metadata }, _daily_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _main_decorators, { kind: "field", name: "main", static: false, private: false, access: { has: function (obj) { return "main" in obj; }, get: function (obj) { return obj.main; }, set: function (obj, value) { obj.main = value; } }, metadata: _metadata }, _main_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggle_decorators, { kind: "field", name: "toggle", static: false, private: false, access: { has: function (obj) { return "toggle" in obj; }, get: function (obj) { return obj.toggle; }, set: function (obj, value) { obj.toggle = value; } }, metadata: _metadata }, _toggle_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _chapterTitle_decorators, { kind: "field", name: "chapterTitle", static: false, private: false, access: { has: function (obj) { return "chapterTitle" in obj; }, get: function (obj) { return obj.chapterTitle; }, set: function (obj, value) { obj.chapterTitle = value; } }, metadata: _metadata }, _chapterTitle_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _chapter_decorators, { kind: "field", name: "chapter", static: false, private: false, access: { has: function (obj) { return "chapter" in obj; }, get: function (obj) { return obj.chapter; }, set: function (obj, value) { obj.chapter = value; } }, metadata: _metadata }, _chapter_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _details_decorators, { kind: "field", name: "details", static: false, private: false, access: { has: function (obj) { return "details" in obj; }, get: function (obj) { return obj.details; }, set: function (obj, value) { obj.details = value; } }, metadata: _metadata }, _details_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reward_decorators, { kind: "field", name: "reward", static: false, private: false, access: { has: function (obj) { return "reward" in obj; }, get: function (obj) { return obj.reward; }, set: function (obj, value) { obj.reward = value; } }, metadata: _metadata }, _reward_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Task = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Task = _classThis;
}();
exports.Task = Task;
