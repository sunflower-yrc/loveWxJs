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
exports.MailDetail = void 0;
var cc_1 = require("cc");
var DataObject_1 = require("../tools/DataObject");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DropMgr_1 = require("../mgr/DropMgr");
var MailReward_1 = require("./MailReward");
var HttpPost_1 = require("../tools/HttpPost");
var GameEvent_1 = require("../common/config/GameEvent");
var LangData_1 = require("../common/tableData/LangData");
var DataMgr_1 = require("../mgr/DataMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var MailDetail = function () {
    var _classDecorators = [ccclass('MailDetail')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _bg_decorators;
    var _bg_initializers = [];
    var _mailContent_decorators;
    var _mailContent_initializers = [];
    var _rewards_decorators;
    var _rewards_initializers = [];
    var _mailSendTime_decorators;
    var _mailSendTime_initializers = [];
    var _noticeContent_decorators;
    var _noticeContent_initializers = [];
    var MailDetail = _classThis = /** @class */ (function (_super) {
        __extends(MailDetail_1, _super);
        function MailDetail_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.bg = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _bg_initializers, void 0));
            _this.mailContent = __runInitializers(_this, _mailContent_initializers, void 0);
            _this.rewards = __runInitializers(_this, _rewards_initializers, void 0);
            _this.mailSendTime = __runInitializers(_this, _mailSendTime_initializers, void 0);
            _this.noticeContent = __runInitializers(_this, _noticeContent_initializers, void 0);
            _this.mailType = 0;
            _this.dropDatas = [];
            return _this;
        }
        MailDetail_1.prototype.onAdded = function (param) {
            var _a;
            this.mailType = param.mailType;
            this.mailData = param.mailData;
            var contentStr = "";
            if (this.mailData.isUseLang) {
                contentStr = new LangData_1.LangData(parseInt(this.mailData.content)).getDesc();
            }
            else {
                contentStr = this.mailData.content;
            }
            if (this.mailType == 0) {
                ViewUtil_1.ViewUtil.setLabelStringByName("title", this.bg, Oops_1.oops.language.getLangByID("mail.gameMail"));
                ViewUtil_1.ViewUtil.setLabelString(this.mailContent, contentStr);
                ViewUtil_1.ViewUtil.setLabelString(this.mailSendTime, StringUtil_1.StringUtil.format(new Date(this.mailData.sendTime * 1000), "yyyy-MM-dd hh:mm:ss"));
                var rewardChildren = this.rewards.children;
                this.dropDatas = DropMgr_1.DropMgr.getDropData(this.mailData.reward);
                for (var i = 0; i < rewardChildren.length; i++) {
                    var child = rewardChildren[i];
                    child.active = i < this.dropDatas.length;
                    if (i < this.dropDatas.length) {
                        (_a = child.getComponent(MailReward_1.MailReward)) === null || _a === void 0 ? void 0 : _a.initData(this.dropDatas[i]);
                    }
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("node_mail/btn_claim", this.bg, this.mailData.status == 0);
                ViewUtil_1.ViewUtil.setNodeActiveByName("node_mail", this.bg, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("node_notice", this.bg, false);
            }
            else {
                ViewUtil_1.ViewUtil.setLabelStringByName("title", this.bg, Oops_1.oops.language.getLangByID("mail.gameNotice"));
                ViewUtil_1.ViewUtil.setLabelString(this.noticeContent, contentStr);
                ViewUtil_1.ViewUtil.setNodeActiveByName("node_mail", this.bg, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("node_notice", this.bg, true);
            }
            var titleLab;
            if (this.mailData.isUseLang) {
                titleLab = new LangData_1.LangData(parseInt(this.mailData.title)).getDesc();
            }
            else {
                titleLab = this.mailData.title;
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("mail_title", this.bg, titleLab);
            ViewUtil_1.ViewUtil.setLabelStringByName("time", this.bg, Oops_1.oops.language.getLangByID("mail.timeBefore", StringUtil_1.StringUtil.getTimeFromSend(this.mailData.sendTime)));
        };
        MailDetail_1.prototype.btn_claim = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.mailType == 0 && this.mailData.status == 0) {
                //领取
                HttpPost_1.HttpPost.instance.getMailReward(this.mailData.id, this.mailData.playerMailId, function (data) {
                    //显示掉落
                    var dropInfo = new DataObject_1.DropInfo();
                    dropInfo.dropData = _this.dropDatas;
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                    //标签1邮件红点
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateMailTitleOneRed, data);
                    //刷新状态
                    ViewUtil_1.ViewUtil.setNodeActiveByName("node_mail/btn_claim", _this.bg, false);
                    //刷新邮件列表
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshMailList, { "type": 0, "data": _this.mailData });
                    DataMgr_1.DataMgr.updateUserData(data.userGrade, null, null);
                });
            }
        };
        MailDetail_1.prototype.btn_delete = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.mailType == 0) {
                HttpPost_1.HttpPost.instance.delMail(this.mailData.id, this.mailData.playerMailId, function (data) {
                    //刷新邮件列表
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshMailList, { "type": 1, "data": _this.mailData });
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.MailDetail);
                });
            }
            else {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.ConfirmWindow, { "text": Oops_1.oops.language.getLangByID("mail.deleteWarning"), "callback": function () {
                        //公告  删除
                        HttpPost_1.HttpPost.instance.delNotice(_this.mailData.id, function (data) {
                            //刷新公告列表
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshMailList, { "type": 1, "data": _this.mailData });
                            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.MailDetail);
                        });
                    } });
            }
        };
        MailDetail_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.MailDetail);
        };
        return MailDetail_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MailDetail");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _bg_decorators = [property(cc_1.Node)];
        _mailContent_decorators = [property(cc_1.Node)];
        _rewards_decorators = [property(cc_1.Node)];
        _mailSendTime_decorators = [property(cc_1.Node)];
        _noticeContent_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _bg_decorators, { kind: "field", name: "bg", static: false, private: false, access: { has: function (obj) { return "bg" in obj; }, get: function (obj) { return obj.bg; }, set: function (obj, value) { obj.bg = value; } }, metadata: _metadata }, _bg_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mailContent_decorators, { kind: "field", name: "mailContent", static: false, private: false, access: { has: function (obj) { return "mailContent" in obj; }, get: function (obj) { return obj.mailContent; }, set: function (obj, value) { obj.mailContent = value; } }, metadata: _metadata }, _mailContent_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rewards_decorators, { kind: "field", name: "rewards", static: false, private: false, access: { has: function (obj) { return "rewards" in obj; }, get: function (obj) { return obj.rewards; }, set: function (obj, value) { obj.rewards = value; } }, metadata: _metadata }, _rewards_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mailSendTime_decorators, { kind: "field", name: "mailSendTime", static: false, private: false, access: { has: function (obj) { return "mailSendTime" in obj; }, get: function (obj) { return obj.mailSendTime; }, set: function (obj, value) { obj.mailSendTime = value; } }, metadata: _metadata }, _mailSendTime_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _noticeContent_decorators, { kind: "field", name: "noticeContent", static: false, private: false, access: { has: function (obj) { return "noticeContent" in obj; }, get: function (obj) { return obj.noticeContent; }, set: function (obj, value) { obj.noticeContent = value; } }, metadata: _metadata }, _noticeContent_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MailDetail = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MailDetail = _classThis;
}();
exports.MailDetail = MailDetail;
