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
exports.Mail = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataObject_1 = require("../tools/DataObject");
var List_1 = require("../tools/List");
var cc_2 = require("cc");
var HttpPost_1 = require("../tools/HttpPost");
var cc_3 = require("cc");
var cc_4 = require("cc");
var cc_5 = require("cc");
var MailItem_1 = require("./MailItem");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameEvent_1 = require("../common/config/GameEvent");
var ArrayUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ArrayUtil");
var DropMgr_1 = require("../mgr/DropMgr");
var DataMgr_1 = require("../mgr/DataMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Mail = function () {
    var _classDecorators = [ccclass('Mail')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _nodeScrollview_decorators;
    var _nodeScrollview_initializers = [];
    var _selected_decorators;
    var _selected_initializers = [];
    var _btnMail_decorators;
    var _btnMail_initializers = [];
    var _btnNotice_decorators;
    var _btnNotice_initializers = [];
    var _btnDelete_decorators;
    var _btnDelete_initializers = [];
    var _btnOnekey_decorators;
    var _btnOnekey_initializers = [];
    var Mail = _classThis = /** @class */ (function (_super) {
        __extends(Mail_1, _super);
        function Mail_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nodeScrollview = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _nodeScrollview_initializers, null));
            _this.selected = __runInitializers(_this, _selected_initializers, void 0);
            _this.btnMail = __runInitializers(_this, _btnMail_initializers, void 0);
            _this.btnNotice = __runInitializers(_this, _btnNotice_initializers, void 0);
            _this.btnDelete = __runInitializers(_this, _btnDelete_initializers, void 0);
            _this.btnOnekey = __runInitializers(_this, _btnOnekey_initializers, void 0);
            _this.currType = 0;
            _this.mailDatas = [];
            _this.noticeDatas = [];
            _this.colorSelected = new cc_4.Color("#95756F");
            _this.colorUnselect = new cc_4.Color("#D9CFBD");
            return _this;
        }
        Mail_1.prototype.onLoad = function () {
            this.loadList();
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateMailTitleOneRed, this.onHander, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateMailTitleTwoRed, this.onHander, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.RefreshMailList, this.onHander, this);
        };
        Mail_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateMailTitleOneRed, this.onHander, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateMailTitleTwoRed, this.onHander, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.RefreshMailList, this.onHander, this);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Mail);
        };
        Mail_1.prototype.onHander = function (event, args) {
            switch (event) {
                case GameEvent_1.GameEvent.RefreshMailList:
                    this.refreshList(args);
                    break;
                case GameEvent_1.GameEvent.UpdateMailTitleOneRed:
                    this.updateMailTitle1Red(args);
                    break;
                case GameEvent_1.GameEvent.UpdateMailTitleTwoRed:
                    this.updateMailTitle2Red(args);
                    break;
            }
        };
        Mail_1.prototype.btn_toggle = function (event, data) {
            var type = parseInt(data);
            if (type == this.currType) {
                return;
            }
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.currType = type;
            var icon0 = this.btnMail.getChildByName("icon");
            var name0 = this.btnMail.getChildByName("name");
            icon0.getComponent(cc_3.Sprite).color = this.currType == 0 ? this.colorSelected : this.colorUnselect;
            name0.getComponent(cc_5.Label).color = this.currType == 0 ? this.colorSelected : this.colorUnselect;
            var icon1 = this.btnNotice.getChildByName("icon");
            var name1 = this.btnNotice.getChildByName("name");
            icon1.getComponent(cc_3.Sprite).color = this.currType == 1 ? this.colorSelected : this.colorUnselect;
            name1.getComponent(cc_5.Label).color = this.currType == 1 ? this.colorSelected : this.colorUnselect;
            this.selected.position = this.currType == 0 ? new cc_2.Vec3(this.btnMail.position.x, this.selected.position.y, this.selected.position.z) : new cc_2.Vec3(this.btnNotice.position.x, this.selected.position.y, this.selected.position.z);
            this.btnDelete.active = this.currType == 0;
            this.btnOnekey.active = this.currType == 0;
            this.loadList();
        };
        /**
         * 加载列表
         */
        Mail_1.prototype.loadList = function () {
            var _this = this;
            if (this.currType == 0) {
                if (this.mailDatas.length == 0) {
                    HttpPost_1.HttpPost.instance.getMailList(function (data) {
                        for (var i = 0; i < data.list.length; i++) {
                            var element = data.list[i];
                            var mailData = new DataObject_1.MailData();
                            mailData.id = element.mailId;
                            mailData.title = element.title;
                            mailData.content = element.content;
                            mailData.reward = element.reward;
                            mailData.sendTime = element.sendTime;
                            mailData.status = element.status;
                            mailData.playerMailId = element.playerMailId;
                            mailData.isUseLang = element.isUseLang;
                            _this.mailDatas.push(mailData);
                        }
                        _this.mailDatas.sort(_this.sortFunc);
                        _this.updateMailTitle1Red(data);
                        _this.updateMailTitle2Red(data);
                        _this.nodeScrollview.numItems = data.list.length;
                    });
                }
                else {
                    this.nodeScrollview.numItems = this.mailDatas.length;
                    this.nodeScrollview.updateAll();
                    this.nodeScrollview.scrollTo(-1);
                }
            }
            else if (this.currType == 1) {
                if (this.noticeDatas.length == 0) {
                    HttpPost_1.HttpPost.instance.getNoticeList(function (data) {
                        for (var i = 0; i < data.list.length; i++) {
                            var element = data.list[i];
                            var mailData = new DataObject_1.MailData();
                            mailData.id = element.noticeId;
                            mailData.title = element.title;
                            mailData.content = element.content;
                            mailData.sendTime = element.sendTime;
                            mailData.status = element.status;
                            mailData.playerMailId = element.playerMailId;
                            mailData.isUseLang = element.isUseLang;
                            _this.noticeDatas.push(mailData);
                        }
                        _this.noticeDatas.sort(_this.sortFunc);
                        _this.updateMailTitle1Red(data);
                        _this.updateMailTitle2Red(data);
                        _this.nodeScrollview.numItems = data.list.length;
                    });
                }
                else {
                    this.nodeScrollview.numItems = this.noticeDatas.length;
                    this.nodeScrollview.updateAll();
                    this.nodeScrollview.scrollTo(-1);
                }
            }
        };
        /**
         * render回调
        */
        Mail_1.prototype.renderEventCallback = function (item, idx) {
            var _a, _b;
            if (this.currType == 0) {
                (_a = item.getComponent(MailItem_1.MailItem)) === null || _a === void 0 ? void 0 : _a.initData(idx, this.currType, this.mailDatas[idx]);
            }
            else {
                (_b = item.getComponent(MailItem_1.MailItem)) === null || _b === void 0 ? void 0 : _b.initData(idx, this.currType, this.noticeDatas[idx]);
            }
        };
        /**
         * 读取或者删除之后刷新列表
         * @param type 0已读 1删除
         * @param idx
         */
        Mail_1.prototype.refreshList = function (args) {
            var type = args.type;
            var idx = args.idx;
            var data = args.data;
            if (this.currType == 0) {
                if (type == 0) {
                    //已读
                    var target = this.mailDatas.indexOf(data);
                    this.mailDatas[target].status = 1;
                    //排序
                    this.mailDatas.sort(this.sortFunc);
                }
                else if (type == 1) {
                    //删除
                    ArrayUtil_1.ArrayUtil.removeItem(this.mailDatas, data);
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("mail.deleteSucc"));
                }
                this.nodeScrollview.numItems = this.mailDatas.length;
                this.nodeScrollview.updateAll();
            }
            else {
                if (type == 0) {
                    //已读
                    this.noticeDatas[idx].status = 1;
                    //排序
                    this.noticeDatas.sort(this.sortFunc);
                }
                else if (type == 1) {
                    //已读之后再删除
                    var target = this.noticeDatas.indexOf(data);
                    if (this.noticeDatas[target].status == 1) {
                        ArrayUtil_1.ArrayUtil.removeItem(this.noticeDatas, data);
                        Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("mail.deleteSucc"));
                    }
                }
                this.nodeScrollview.numItems = this.noticeDatas.length;
                this.nodeScrollview.updateAll();
            }
        };
        /**
         * 一键领取
         */
        Mail_1.prototype.btn_onekeyclaim = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var unreadMails = [];
            for (var i = 0; i < this.mailDatas.length; i++) {
                var element = this.mailDatas[i];
                if (element.status == 0) {
                    //未读邮件
                    unreadMails.push(element);
                }
            }
            if (unreadMails.length == 0) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("mail.noMailToClaim"));
                return;
            }
            HttpPost_1.HttpPost.instance.doMailList(1, function (data) {
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                //刷新邮件列表
                for (var i = 0; i < unreadMails.length; i++) {
                    var element = unreadMails[i];
                    var target = _this.mailDatas.indexOf(element);
                    _this.mailDatas[target].status = 1;
                    //排序
                    _this.mailDatas.sort(_this.sortFunc);
                }
                //标签1邮件红点
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateMailTitleOneRed, data);
                DataMgr_1.DataMgr.updateUserData(data.userGrade, null, null);
                _this.nodeScrollview.numItems = _this.mailDatas.length;
                _this.nodeScrollview.updateAll();
            });
        };
        /**
         * 邮件排序 先按照已读和未读排序 未读在前面 再按照时间排序 时间大的在前面
         * @param a
         * @param b
         * @returns
         */
        Mail_1.prototype.sortFunc = function (a, b) {
            if (a.status !== b.status) {
                return a.status - b.status; // status 越小越靠前
            }
            else {
                return b.sendTime - a.sendTime; // sendTime 越大越靠前
            }
        };
        /**
         * 删除已读
         */
        Mail_1.prototype.btn_deleteread = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var readMails = [];
            for (var i = 0; i < this.mailDatas.length; i++) {
                var element = this.mailDatas[i];
                if (element.status == 1) {
                    //已读邮件
                    readMails.push(element);
                }
            }
            if (readMails.length == 0) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("mail.noMailToDelete"));
                return;
            }
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.ConfirmWindow, { "text": Oops_1.oops.language.getLangByID("mail.deleteWarning"), "callback": function () {
                    HttpPost_1.HttpPost.instance.doMailList(2, function (data) {
                        //刷新邮件列表
                        for (var i = 0; i < readMails.length; i++) {
                            var element = readMails[i];
                            ArrayUtil_1.ArrayUtil.removeItem(_this.mailDatas, element);
                        }
                        DataMgr_1.DataMgr.updateUserData(data.userGrade, null, null);
                        //标签1邮件红点
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateMailTitleOneRed, data);
                        Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("mail.deleteSucc"));
                        _this.nodeScrollview.numItems = _this.mailDatas.length;
                        _this.nodeScrollview.updateAll();
                    });
                } });
        };
        Mail_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Mail);
        };
        //邮件标签红点
        Mail_1.prototype.updateMailTitle1Red = function (data) {
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/btn_mail/redDot", this.node, Boolean(data.mailRedDot));
        };
        //邮件标签红点
        Mail_1.prototype.updateMailTitle2Red = function (data) {
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/btn_notice/redDot", this.node, Boolean(data.noticeRedDot));
        };
        return Mail_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Mail");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _nodeScrollview_decorators = [property(List_1.default)];
        _selected_decorators = [property(cc_1.Node)];
        _btnMail_decorators = [property(cc_1.Node)];
        _btnNotice_decorators = [property(cc_1.Node)];
        _btnDelete_decorators = [property(cc_1.Node)];
        _btnOnekey_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _nodeScrollview_decorators, { kind: "field", name: "nodeScrollview", static: false, private: false, access: { has: function (obj) { return "nodeScrollview" in obj; }, get: function (obj) { return obj.nodeScrollview; }, set: function (obj, value) { obj.nodeScrollview = value; } }, metadata: _metadata }, _nodeScrollview_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _selected_decorators, { kind: "field", name: "selected", static: false, private: false, access: { has: function (obj) { return "selected" in obj; }, get: function (obj) { return obj.selected; }, set: function (obj, value) { obj.selected = value; } }, metadata: _metadata }, _selected_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _btnMail_decorators, { kind: "field", name: "btnMail", static: false, private: false, access: { has: function (obj) { return "btnMail" in obj; }, get: function (obj) { return obj.btnMail; }, set: function (obj, value) { obj.btnMail = value; } }, metadata: _metadata }, _btnMail_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _btnNotice_decorators, { kind: "field", name: "btnNotice", static: false, private: false, access: { has: function (obj) { return "btnNotice" in obj; }, get: function (obj) { return obj.btnNotice; }, set: function (obj, value) { obj.btnNotice = value; } }, metadata: _metadata }, _btnNotice_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _btnDelete_decorators, { kind: "field", name: "btnDelete", static: false, private: false, access: { has: function (obj) { return "btnDelete" in obj; }, get: function (obj) { return obj.btnDelete; }, set: function (obj, value) { obj.btnDelete = value; } }, metadata: _metadata }, _btnDelete_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _btnOnekey_decorators, { kind: "field", name: "btnOnekey", static: false, private: false, access: { has: function (obj) { return "btnOnekey" in obj; }, get: function (obj) { return obj.btnOnekey; }, set: function (obj, value) { obj.btnOnekey = value; } }, metadata: _metadata }, _btnOnekey_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Mail = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Mail = _classThis;
}();
exports.Mail = Mail;
