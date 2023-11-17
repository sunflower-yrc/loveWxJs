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
exports.TaskItem = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var CommonItem_1 = require("../chapter/CommonItem");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var TaskData_1 = require("../common/tableData/TaskData");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var TaskItem = function () {
    var _classDecorators = [ccclass('TaskItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _progress_decorators;
    var _progress_initializers = [];
    var TaskItem = _classThis = /** @class */ (function (_super) {
        __extends(TaskItem_1, _super);
        function TaskItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.progress = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _progress_initializers, null));
            _this.daily = null;
            _this.idx = 0;
            _this.dropData = [];
            return _this;
        }
        TaskItem_1.prototype.initData = function (index) {
            var _a;
            this.idx = index;
            this.refreshItemInfo();
            var taskData = new TaskData_1.TaskData(2, this.daily.taskId);
            ViewUtil_1.ViewUtil.setLabelStringByName("desc", this.node, taskData.getDailyTaskDesc());
            ViewUtil_1.ViewUtil.setLabelStringByName("plat/exp", this.node, this.daily.completed + "/" + taskData.value);
            this.progress.fillRange = this.daily.completed / taskData.value;
            this.dropData = DropMgr_1.DropMgr.getDropData(taskData.item);
            var reward = ViewUtil_1.ViewUtil.findNode("commonItem", this.node);
            (_a = reward === null || reward === void 0 ? void 0 : reward.getComponent(CommonItem_1.CommonItem)) === null || _a === void 0 ? void 0 : _a.initData(this.dropData[0]);
        };
        /**
         * 刷新奖励领取信息
         */
        TaskItem_1.prototype.refreshItemInfo = function () {
            this.daily = SingletonModuleComp_1.smc.account.AccountModel.dailyTaskData[this.idx];
            ViewUtil_1.ViewUtil.setNodeActiveByName("get", this.node, this.daily.isGetReward == 2);
            ViewUtil_1.ViewUtil.setNodeActiveByName("got", this.node, this.daily.isGetReward == 3);
        };
        /**
         * 领取奖励
         */
        TaskItem_1.prototype.btn_reward = function () {
            var _this = this;
            if (this.daily.isGetReward != 2) {
                return;
            }
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getTaskReward(0, 2, this.daily.taskId, function (data) {
                //显示掉落
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = _this.dropData;
                dropInfo.UIID.push(GameUIConfig_1.UIID.Task);
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                //更新数据
                DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                //更新每日任务数据
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateDailyTask, data.taskList);
                _this.refreshItemInfo();
            });
        };
        return TaskItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "TaskItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _progress_decorators = [property(cc_1.Sprite)];
        __esDecorate(null, null, _progress_decorators, { kind: "field", name: "progress", static: false, private: false, access: { has: function (obj) { return "progress" in obj; }, get: function (obj) { return obj.progress; }, set: function (obj, value) { obj.progress = value; } }, metadata: _metadata }, _progress_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TaskItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TaskItem = _classThis;
}();
exports.TaskItem = TaskItem;
