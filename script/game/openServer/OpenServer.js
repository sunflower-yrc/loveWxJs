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
exports.OpenServer = exports.OpenType = void 0;
var cc_1 = require("cc");
var List_1 = require("../tools/List");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var OpenServerItem_1 = require("./OpenServerItem");
var cc_2 = require("cc");
var Role_1 = require("../dress/Role");
var GlobalData_1 = require("../common/tableData/GlobalData");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var DataObject_1 = require("../tools/DataObject");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DropMgr_1 = require("../mgr/DropMgr");
var SuitData_1 = require("../common/tableData/SuitData");
var LangData_1 = require("../common/tableData/LangData");
var GameEvent_1 = require("../common/config/GameEvent");
var HttpPost_1 = require("../tools/HttpPost");
var cc_3 = require("cc");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var OpenType;
(function (OpenType) {
    OpenType[OpenType["task"] = 1] = "task";
    OpenType[OpenType["gift"] = 2] = "gift";
})(OpenType || (exports.OpenType = OpenType = {}));
var OpenServer = function () {
    var _classDecorators = [ccclass('OpenServer')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _list_decorators;
    var _list_initializers = [];
    var _select_decorators;
    var _select_initializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _pro_decorators;
    var _pro_initializers = [];
    var OpenServer = _classThis = /** @class */ (function (_super) {
        __extends(OpenServer_1, _super);
        function OpenServer_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.list = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _list_initializers, null));
            _this.select = __runInitializers(_this, _select_initializers, null);
            _this.role = __runInitializers(_this, _role_initializers, null);
            _this.pro = __runInitializers(_this, _pro_initializers, null);
            _this.type = OpenType.task;
            _this.curDay = null;
            _this.listData = [];
            _this.time = null;
            return _this;
        }
        OpenServer_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateOpenServe, this.updataData, this);
            var globalTable = new GlobalData_1.GlobalData(25);
            var drop = DropMgr_1.DropMgr.getDropData(globalTable.value);
            var suitData = new SuitData_1.SuitData(drop[0].dropId);
            this.role.showSuitSkin(suitData.suitShow);
            ViewUtil_1.ViewUtil.setLabelStringByName("top/suitName", this.node, new LangData_1.LangData(suitData.name).getDesc());
            this.initUI();
            this.setTimer();
            ViewUtil_1.ViewUtil.setNodeActiveByName("middle/togBg/gift1", this.node, SingletonModuleComp_1.smc.account.AccountModel.isShowPay);
        };
        OpenServer_1.prototype.update = function (deltaTime) {
        };
        OpenServer_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateOpenServe, this.updataData, this);
            Oops_1.oops.timer.unRegister(this.timeId);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.OpenServer);
        };
        OpenServer_1.prototype.onAdded = function (data) {
            this.data = data;
            this.curDay = data.day;
        };
        OpenServer_1.prototype.initUI = function () {
            this.setSelect();
            this.setChoseType();
            this.updateDayRed();
            this.setProData();
            this.updateRed();
        };
        //设置天数
        OpenServer_1.prototype.setSelect = function () {
            for (var i = 0; i < 7; i++) {
                var item = this.select.getChildByName("select" + (i + 1));
                ViewUtil_1.ViewUtil.setLabelStringByName("dayLab1", item, (i + 1) + "");
                ViewUtil_1.ViewUtil.setLabelStringByName("kf_day_bg_2/dayLab2", item, (i + 1) + "");
                if ((i + 1) == this.data.day) {
                    item.getComponent(cc_2.Toggle).isChecked = true;
                }
                if ((i + 1) > this.data.day) {
                    item.getComponent(cc_2.Toggle).enabled = false;
                    ViewUtil_1.ViewUtil.setNodeActiveByName("lock", item, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("tip", item, true);
                }
                else {
                    item.getComponent(cc_2.Toggle).enabled = true;
                    ViewUtil_1.ViewUtil.setNodeActiveByName("lock", item, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("tip", item, false);
                }
                if (i > 0) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("line" + i, this.select, (this.data.day > (i + 1)));
                }
            }
        };
        OpenServer_1.prototype.setList = function () {
            this.list.numItems = this.listData.length;
        };
        OpenServer_1.prototype.onListRender = function (item, idx) {
            var _a;
            (_a = item.getComponent(OpenServerItem_1.OpenServerItem)) === null || _a === void 0 ? void 0 : _a.init(this.type, this.listData[idx]);
        };
        //礼包任务
        OpenServer_1.prototype.choseType = function (ev, type) {
            if (this.type == parseInt(type)) {
                return;
            }
            this.type = parseInt(type);
            this.setChoseType();
            this.list.scrollTo(-1);
        };
        //开服天数选择
        OpenServer_1.prototype.choseDay = function (ev, day) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.curDay == parseInt(day)) {
                return;
            }
            if (this.type == OpenType.gift) {
                this.type = OpenType.task;
                this.curDay = parseInt(day);
                this.setChoseType();
                this.list.scrollTo(-1);
                this.updateRed();
                return;
            }
            this.curDay = parseInt(day);
            this.setDay();
            this.list.scrollTo(-1);
            this.updateRed();
        };
        OpenServer_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.OpenServer);
        };
        OpenServer_1.prototype.setChoseType = function () {
            if (this.type == OpenType.task) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("middle/task2", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("middle/gift2", this.node, false);
                // this.select.active = true;
                this.setDay();
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("middle/task2", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("middle/gift2", this.node, true);
                // this.select.active = false;
                this.listData = this.data.orderInfo.list;
                this.setList();
            }
        };
        OpenServer_1.prototype.setDay = function () {
            this.listData = this.data.task[this.curDay - 1].list;
            this.setList();
        };
        OpenServer_1.prototype.updateRed = function () {
            var data = this.data.task;
            for (var i = 0, len = data.length; i < len; i++) {
                if (data[i].day == this.curDay) {
                    var list = data[i].list;
                    var bol = false;
                    for (var j = 0, cen = list.length; j < cen; j++) {
                        if (list[j].status == 2 && !list[j].isGetReward) {
                            bol = true;
                            break;
                        }
                    }
                    ViewUtil_1.ViewUtil.setNodeActiveByName("middle/togBg/task1/redDot", this.node, bol);
                }
            }
        };
        OpenServer_1.prototype.updateDayRed = function () {
            var data = this.data.task;
            for (var i = 0, len = data.length; i < len; i++) {
                if (this.data.day < data[i].day) {
                    break;
                }
                var list = data[i].list;
                var item = this.select.getChildByName("select" + (i + 1)), bol = false;
                for (var j = 0, cen = list.length; j < cen; j++) {
                    if (list[j].status == 2 && !list[j].isGetReward) {
                        bol = true;
                        break;
                    }
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("redDot", item, bol);
            }
        };
        OpenServer_1.prototype.updataData = function (event, data) {
            var _this = this;
            if (data) {
                this.data = data;
                this.setChoseType();
                this.updateDayRed();
                this.setProData();
                this.updateRed();
            }
            else {
                HttpPost_1.HttpPost.instance.new7DayInfo(function (data) {
                    _this.data = data;
                    _this.setChoseType();
                    _this.updateDayRed();
                    _this.setProData();
                    _this.updateRed();
                });
            }
        };
        OpenServer_1.prototype.setProData = function () {
            this.pro.fillRange = this.data.finishTaskCount / this.data.progressNeedTaskCount;
            ViewUtil_1.ViewUtil.setLabelStringByName("top/proLab", this.node, this.data.finishTaskCount + "/" + this.data.progressNeedTaskCount);
        };
        /**创建计时器 */
        OpenServer_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            this.time = (this.data.end_time - curTime);
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        OpenServer_1.prototype.onSecond = function () {
            var time;
            if (this.time >= 3600) {
                time = StringUtil_1.StringUtil.formatTimeWithSec(this.time, true);
            }
            else {
                time = StringUtil_1.StringUtil.formatTimeWithSec(this.time);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("top/timeLab", this.node, Oops_1.oops.language.getLangByID("common.leftTime") + time);
        };
        OpenServer_1.prototype.onComplete = function () {
            this.closeView();
        };
        OpenServer_1.prototype.openTip = function (ev, day) {
            Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("OpenServer.lock", day));
        };
        return OpenServer_1;
    }(_classSuper));
    __setFunctionName(_classThis, "OpenServer");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _list_decorators = [property(List_1.default)];
        _select_decorators = [property(cc_1.Node)];
        _role_decorators = [property(Role_1.Role)];
        _pro_decorators = [property(cc_3.Sprite)];
        __esDecorate(null, null, _list_decorators, { kind: "field", name: "list", static: false, private: false, access: { has: function (obj) { return "list" in obj; }, get: function (obj) { return obj.list; }, set: function (obj, value) { obj.list = value; } }, metadata: _metadata }, _list_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _select_decorators, { kind: "field", name: "select", static: false, private: false, access: { has: function (obj) { return "select" in obj; }, get: function (obj) { return obj.select; }, set: function (obj, value) { obj.select = value; } }, metadata: _metadata }, _select_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pro_decorators, { kind: "field", name: "pro", static: false, private: false, access: { has: function (obj) { return "pro" in obj; }, get: function (obj) { return obj.pro; }, set: function (obj, value) { obj.pro = value; } }, metadata: _metadata }, _pro_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OpenServer = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OpenServer = _classThis;
}();
exports.OpenServer = OpenServer;
