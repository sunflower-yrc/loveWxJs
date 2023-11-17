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
exports.MailItem = void 0;
var cc_1 = require("cc");
var DataObject_1 = require("../tools/DataObject");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameResPath_1 = require("../common/config/GameResPath");
var DropMgr_1 = require("../mgr/DropMgr");
var MailReward_1 = require("./MailReward");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var cc_2 = require("cc");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var HttpPost_1 = require("../tools/HttpPost");
var GameEvent_1 = require("../common/config/GameEvent");
var LangData_1 = require("../common/tableData/LangData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var MailItem = function () {
    var _classDecorators = [ccclass('MailItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var MailItem = _classThis = /** @class */ (function (_super) {
        __extends(MailItem_1, _super);
        function MailItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.idx = 0;
            _this.mailType = 0;
            return _this;
        }
        MailItem_1.prototype.initData = function (index, type, data) {
            var _a;
            this.idx = index;
            this.mailType = type;
            this.mailData = data;
            ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getMailStatusBgPath(this.mailData.status), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon_status", this.node, GameResPath_1.GameResPath.getMailStatusIconPath(this.mailType, this.mailData.status), BundleConfig_1.default.instance.guiBundle.name);
            if (this.mailType == 0) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("content", this.node, false);
                var rewardChildren = ViewUtil_1.ViewUtil.findNode("rewards", this.node).children;
                var dropData = DropMgr_1.DropMgr.getDropData(this.mailData.reward);
                for (var i = 0; i < rewardChildren.length; i++) {
                    var child = rewardChildren[i];
                    child.active = i < dropData.length;
                    if (i < dropData.length) {
                        (_a = child.getComponent(MailReward_1.MailReward)) === null || _a === void 0 ? void 0 : _a.initData(dropData[i]);
                    }
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("rewards", this.node, true);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("rewards", this.node, false);
                //简要内容
                var contentStr = "";
                if (this.mailData.isUseLang) {
                    contentStr = new LangData_1.LangData(parseInt(this.mailData.content)).getDesc();
                }
                else {
                    contentStr = this.mailData.content;
                }
                var content = "";
                var r = this.mailData.content.indexOf("\r");
                if (r < 0) {
                    r = this.mailData.content.indexOf("\n");
                }
                if (r >= 0) {
                    content = this.mailData.content.substring(0, r) + "...";
                }
                ViewUtil_1.ViewUtil.setLabelStringByName("content", this.node, content);
                ViewUtil_1.ViewUtil.setNodeActiveByName("content", this.node, true);
            }
            var titleLab;
            if (this.mailData.isUseLang) {
                titleLab = new LangData_1.LangData(parseInt(this.mailData.title)).getDesc();
            }
            else {
                titleLab = this.mailData.title;
            }
            if (this.mailData.status == 0) {
                ViewUtil_1.ViewUtil.setLabelStringByName("title", this.node, titleLab, { color: new cc_2.Color("#95756F") });
                ViewUtil_1.ViewUtil.setLabelStringByName("label_status", this.node, Oops_1.oops.language.getLangByID("mail.unread"), { color: new cc_2.Color("#FFA56F") });
            }
            else {
                ViewUtil_1.ViewUtil.setLabelStringByName("title", this.node, titleLab, { color: new cc_2.Color("#C7B6AB") });
                ViewUtil_1.ViewUtil.setLabelStringByName("label_status", this.node, Oops_1.oops.language.getLangByID("mail.read"), { color: new cc_2.Color("#DBD6C5") });
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("time", this.node, Oops_1.oops.language.getLangByID("mail.timeBefore", StringUtil_1.StringUtil.getTimeFromSend(this.mailData.sendTime)));
        };
        MailItem_1.prototype.btn_open = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.mailType == 1 && this.mailData.status == 0) {
                //公告  变为已读
                HttpPost_1.HttpPost.instance.readNotice(this.mailData.id, function (data) {
                    //邮件标签2红点
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateMailTitleTwoRed, data);
                    //刷新公告列表
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshMailList, { "type": 0, "idx": _this.idx });
                });
            }
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.MailDetail, { "mailType": this.mailType, "mailData": this.mailData });
        };
        MailItem_1.prototype.deleteItem = function () {
        };
        return MailItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MailItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MailItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MailItem = _classThis;
}();
exports.MailItem = MailItem;
