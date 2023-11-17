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
exports.Gallery = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DressData_1 = require("../common/tableData/DressData");
var DropMgr_1 = require("../mgr/DropMgr");
var FurnitureData_1 = require("../common/tableData/FurnitureData");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var List_1 = require("../tools/List");
var ListItem_1 = require("../tools/ListItem");
var Share_1 = require("../platform/Share");
var DataMgr_1 = require("../mgr/DataMgr");
var cc_4 = require("cc");
var cc_5 = require("cc");
var ccclass = cc_3._decorator.ccclass, property = cc_3._decorator.property;
var Gallery = function () {
    var _classDecorators = [ccclass('Gallery')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_3.Component;
    var _instanceExtraInitializers = [];
    var _toggleContainer_decorators;
    var _toggleContainer_initializers = [];
    var _furnitureToggleContainer_decorators;
    var _furnitureToggleContainer_initializers = [];
    var _dressToggleContainer_decorators;
    var _dressToggleContainer_initializers = [];
    var _memberList_decorators;
    var _memberList_initializers = [];
    var _rewardList_decorators;
    var _rewardList_initializers = [];
    var _anim_decorators;
    var _anim_initializers = [];
    var Gallery = _classThis = /** @class */ (function (_super) {
        __extends(Gallery_1, _super);
        function Gallery_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.toggleContainer = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _toggleContainer_initializers, null));
            _this.furnitureToggleContainer = __runInitializers(_this, _furnitureToggleContainer_initializers, null);
            _this.dressToggleContainer = __runInitializers(_this, _dressToggleContainer_initializers, null);
            _this.memberList = __runInitializers(_this, _memberList_initializers, null);
            _this.rewardList = __runInitializers(_this, _rewardList_initializers, null);
            _this.anim = __runInitializers(_this, _anim_initializers, null);
            _this.dataList = [];
            _this.showData = [];
            _this.curType = 1;
            _this.furnitureType = 1;
            _this.dressType = 101;
            return _this;
        }
        Gallery_1.prototype.onAdded = function (data) {
            this.serverData = data;
            this.dataList = [];
            for (var i = 0; i < this.serverData.codexList.length; i++) {
                this.dataList.push(new DataObject_1.GalleryData(this.serverData.codexList[i].prop_id, 0, 0, this.serverData.codexList[i].status));
            }
        };
        Gallery_1.prototype.start = function () {
            var _this = this;
            this.tweenAction();
            this.uiRefresh();
            this.scheduleOnce(function () {
                _this.furnitureType = 1;
                _this.calcuData();
                _this.memberList.numItems = _this.showData.length;
                _this.memberList.scrollTo(-1);
            }, 0.1);
        };
        Gallery_1.prototype.onMembersListRender = function (item, idx) {
            if (item) {
                ViewUtil_1.ViewUtil.findChildByName("getBtn", item).off(cc_2.Button.EventType.CLICK);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", item, this.showData[idx].status != 3);
                ViewUtil_1.ViewUtil.setLabelStringByName("getBtn/Label", item, this.showData[idx].sweets);
                ViewUtil_1.ViewUtil.setNodeActiveByName("nameLabel", item, this.showData[idx].status == 3);
                ViewUtil_1.ViewUtil.setSpriteGrayByName("icon", item, this.showData[idx].status == 2);
                ViewUtil_1.ViewUtil.setSpriteGrayByName("getBtn", item, this.showData[idx].status == 2);
                ViewUtil_1.ViewUtil.setSpriteGrayByName("getBtn/Sprite", item, this.showData[idx].status == 2);
                ViewUtil_1.ViewUtil.setSpriteGray(item, this.showData[idx].status == 2);
                ViewUtil_1.ViewUtil.findChildByName("getBtn/Label", item).getComponent(cc_1.Label).color = this.showData[idx].status == 2 ? cc_1.Color.WHITE : new cc_1.Color(154, 123, 117, 255);
                if (this.showData[idx].status == 1) {
                    ViewUtil_1.ViewUtil.findChildByName("getBtn", item).on(cc_2.Button.EventType.CLICK, this.btn_getReward, this);
                }
                if (this.curType == 1) {
                    var f = FurnitureData_1.FurnitureData.getAll().get(this.showData[idx].prop_id);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrame(item, GameResPath_1.GameResPath.getQualityBgPath(f.grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", item, GameResPath_1.GameResPath.getFurnitureListIconsPath(f.id.toString()), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setLabelStringByName("nameLabel", item, f.getName());
                }
                if (this.curType == 2) {
                    var d = DressData_1.DressData.getAll().get(this.showData[idx].prop_id);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrame(item, GameResPath_1.GameResPath.getQualityBgPath(d.grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", item, GameResPath_1.GameResPath.getDressListIconsPath(d.id.toString()), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setLabelStringByName("nameLabel", item, d.getName());
                }
            }
        };
        Gallery_1.prototype.onRewardListRender = function (item, idx) {
            if (item) {
                ViewUtil_1.ViewUtil.setLabelStringByName("numLabel", item, this.rewardData[idx].sweetsCount);
                if (this.rewardData[idx].status == 2) //不可领取
                 {
                    ViewUtil_1.ViewUtil.setLabelStringByName("bg/titleLabel", item, Oops_1.oops.language.getLangByID("gallery.rewardNoGet"));
                }
                else {
                    ViewUtil_1.ViewUtil.setLabelStringByName("bg/titleLabel", item, Oops_1.oops.language.getLangByID("gallery.rewardHasGet"));
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("mask", item, this.rewardData[idx].status == 2);
                ViewUtil_1.ViewUtil.setSpriteGrayByName("bg", item, this.rewardData[idx].status == 2);
                //显示奖励
                //奖励内容
                var dropData = DropMgr_1.DropMgr.getDropData(this.rewardData[idx].reward);
                var items = ViewUtil_1.ViewUtil.findChildByName("content", item).children;
                for (var i = 0; i < items.length; i++) {
                    if (i < dropData.length) {
                        items[i].active = true;
                        ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", items[i], dropData[i].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                        ViewUtil_1.ViewUtil.setLabelStringByName("amount", items[i], "x" + dropData[i].dropAmount);
                    }
                    else {
                        items[i].active = false;
                    }
                }
            }
        };
        Gallery_1.prototype.calcuData = function () {
            var _this = this;
            this.showData = [];
            FurnitureData_1.FurnitureData.getAll().forEach(function (value, key) {
                if (_this.dataList.find(function (x) { return x.prop_id == value.id; }) == null) {
                    _this.dataList.push(new DataObject_1.GalleryData(value.id, value.collect, value.grade, 2));
                }
            });
            DressData_1.DressData.getAll().forEach(function (value, key) {
                if (_this.dataList.find(function (x) { return x.prop_id == value.id; }) == null) {
                    _this.dataList.push(new DataObject_1.GalleryData(value.id, value.collect, value.grade, 2));
                }
            });
            for (var i = 0; i < this.dataList.length; i++) {
                if (this.curType == 1 && FurnitureData_1.FurnitureData.getAll().get(this.dataList[i].prop_id) && FurnitureData_1.FurnitureData.getAll().get(this.dataList[i].prop_id).valueType == this.furnitureType) {
                    var da = FurnitureData_1.FurnitureData.getAll().get(this.dataList[i].prop_id);
                    this.dataList[i].sweets = da.collect;
                    this.dataList[i].grade = da.grade;
                    this.showData.push(this.dataList[i]);
                }
                if (this.curType == 2 && DressData_1.DressData.getAll().get(this.dataList[i].prop_id) && DressData_1.DressData.getAll().get(this.dataList[i].prop_id).classify == this.dressType) {
                    var da = DressData_1.DressData.getAll().get(this.dataList[i].prop_id);
                    this.dataList[i].sweets = da.collect;
                    this.dataList[i].grade = da.grade;
                    this.showData.push(this.dataList[i]);
                }
            }
            //排序，先按品质排序，然后遍历一遍，如果有没领的移到最前面
            this.showData.sort(function (a, b) { return b.grade - a.grade; });
            this.showData.sort(function (a, b) { return b.status - a.status; });
            for (var i = 0; i < this.showData.length; i++) {
                if (this.showData[i].status == 1) {
                    this.showData.splice(0, 0, this.showData.splice(i, 1)[0]);
                }
            }
        };
        Gallery_1.prototype.btn_getReward = function (button) {
            var _this = this;
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.showData[idx];
            HttpPost_1.HttpPost.instance.getCodexSweets(this.curType, function (data) {
                // this.showData[idx].status = 3
                // this.memberList.numItems = this.showData.length;
                // this.serverData.complete = data.complete;
                // this.serverData.completeCount = data.completeCount;
                // this.serverData.sweetsRate = data.sweetsRate;
                // this.serverData.obtainedCount = data.obtainedCount;
                // this.serverData.totalCount = data.totalCount;
                // this.serverData.rewardStatus = data.rewardStatus;
                _this.onAdded(data);
                _this.calcuData();
                _this.memberList.numItems = _this.showData.length;
                _this.uiRefresh(); //getDropData
                var dData = DropMgr_1.DropMgr.getSingleDropData(DataObject_1.DropType.Sweet, 0, data.addSweets);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dData;
                dropInfo.dropFrom = DataObject_1.DropFrom.GalleryReward;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
            });
        };
        Gallery_1.prototype.bottom_toggle_changed = function (event, data) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var tog = this.toggleContainer.activeToggles()[0];
            if (tog.node.name == "Toggle1") {
                this.refreshServerData(1);
            }
            else if (tog.node.name == "Toggle2") {
                this.refreshServerData(2);
            }
            else if (tog.node.name == "Toggle3") {
            }
        };
        Gallery_1.prototype.furniture_toggle_changed = function (event, data) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var tog = this.furnitureToggleContainer.activeToggles()[0];
            if (tog.node.name == "Toggle1") {
                this.furnitureType = 1;
            }
            else if (tog.node.name == "Toggle2") {
                this.furnitureType = 2;
            }
            else if (tog.node.name == "Toggle3") {
                this.furnitureType = 3;
            }
            else if (tog.node.name == "Toggle4") {
                this.furnitureType = 4;
            }
            else if (tog.node.name == "Toggle5") {
                this.furnitureType = 5;
            }
            this.calcuData();
            this.memberList.numItems = this.showData.length;
            this.memberList.scrollTo(-1);
        };
        Gallery_1.prototype.dress_toggle_changed = function (event, data) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var tog = this.dressToggleContainer.activeToggles()[0];
            if (tog.node.name == "Toggle1") {
                this.dressType = 101;
            }
            else if (tog.node.name == "Toggle2") {
                this.dressType = 102;
            }
            else if (tog.node.name == "Toggle3") {
                this.dressType = 103;
            }
            else if (tog.node.name == "Toggle4") {
                this.dressType = 104;
            }
            else if (tog.node.name == "Toggle5") {
                this.dressType = 105;
            }
            this.calcuData();
            this.memberList.numItems = this.showData.length;
            this.memberList.scrollTo(-1);
        };
        Gallery_1.prototype.refreshServerData = function (type) {
            var _this = this;
            HttpPost_1.HttpPost.instance.getCodexList(type, function (data) {
                _this.curType = type;
                _this.serverData = data;
                for (var i = 0; i < _this.serverData.codexList.length; i++) {
                    _this.dataList.find(function (x) { return x.prop_id == _this.serverData.codexList[i].prop_id; }).status = _this.serverData.codexList[i].status;
                }
                _this.start();
            });
        };
        Gallery_1.prototype.uiRefresh = function () {
            if (this.curType == 1) {
                ViewUtil_1.ViewUtil.setLabelStringByName("middle/titleSp/Label", this.node, Oops_1.oops.language.getLangByID("gallery.furnitureTitle"));
                ViewUtil_1.ViewUtil.setLabelStringByName("middle/topTipsLabel", this.node, Oops_1.oops.language.getLangByID("gallery.furnitureNumShow", this.serverData.obtainedCount, this.serverData.totalCount));
            }
            else if (this.curType == 2) {
                ViewUtil_1.ViewUtil.setLabelStringByName("middle/titleSp/Label", this.node, Oops_1.oops.language.getLangByID("gallery.dressTitle"));
                ViewUtil_1.ViewUtil.setLabelStringByName("middle/topTipsLabel", this.node, Oops_1.oops.language.getLangByID("gallery.dressNumShow", this.serverData.obtainedCount, this.serverData.totalCount));
            }
            else if (this.curType == 3) {
            }
            ViewUtil_1.ViewUtil.setNodeActiveByName("middle/dressToggle", this.node, this.curType == 2);
            ViewUtil_1.ViewUtil.setNodeActiveByName("middle/funitureToggle", this.node, this.curType == 1);
            ViewUtil_1.ViewUtil.setLabelStringByName("middle/aimNode/numBg/Label", this.node, this.serverData.sweetsRate);
            if (this.serverData.completeCount < this.serverData.complete)
                ViewUtil_1.ViewUtil.setLabelStringByName("middle/aimNode/tipsLabel", this.node, Oops_1.oops.language.getLangByID("gallery.candyTips", 0));
            else
                ViewUtil_1.ViewUtil.setLabelStringByName("middle/aimNode/tipsLabel", this.node, Oops_1.oops.language.getLangByID("gallery.candyTips", this.serverData.completeCount - this.serverData.complete));
            ViewUtil_1.ViewUtil.setLabelStringByName("middle/aimNode/proBg/giftNum", this.node, this.serverData.complete + "/" + this.serverData.completeCount);
            ViewUtil_1.ViewUtil.findChildByName("middle/aimNode/proBg/pro", this.node).getComponent(cc_1.Sprite).fillRange = this.serverData.complete / this.serverData.completeCount;
            ViewUtil_1.ViewUtil.setNodeActiveByName("middle/aimNode/proBg/light", this.node, Boolean(this.serverData.rewardStatus == 1));
            ViewUtil_1.ViewUtil.setNodeActiveByName("middle/aimNode/proBg/bubble", this.node, this.serverData.rewardStatus == 1);
        };
        Gallery_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Gallery);
        };
        Gallery_1.prototype.btn_boxGetReward = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.serverData.rewardStatus != 1)
                return;
            HttpPost_1.HttpPost.instance.collectReward(function (data) {
                _this.serverData.complete = data.complete;
                _this.serverData.completeCount = data.completeCount;
                _this.serverData.sweetsRate = data.sweetsRate;
                _this.serverData.rewardStatus = data.rewardStatus;
                DataMgr_1.DataMgr.updateUserData(data.userGrade, null, null);
                var dData = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dData;
                dropInfo.dropFrom = DataObject_1.DropFrom.GalleryReward;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                _this.uiRefresh();
            });
        };
        Gallery_1.prototype.btn_openRewardNode = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getRewardList(function (data) {
                _this.rewardData = data.list;
                ViewUtil_1.ViewUtil.setNodeActiveByName("rewardShowNode", _this.node, true);
                ViewUtil_1.ViewUtil.findChildByName("rewardShowNode", _this.node).getComponent(cc_1.Animation).play();
                _this.scheduleOnce(function () {
                    _this.rewardList.numItems = _this.rewardData.length;
                }, 0.1);
            });
        };
        Gallery_1.prototype.btn_closeRewardNode = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            ViewUtil_1.ViewUtil.setNodeActiveByName("rewardShowNode", this.node, false);
        };
        Gallery_1.prototype.btn_share = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Share_1.Share.share();
        };
        Gallery_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Gallery);
        };
        Gallery_1.prototype.tweenAction = function () {
            var _this = this;
            (0, cc_5.tween)(this.anim).by(3, { eulerAngles: new cc_4.Vec3(0, 0, 360) }).call(function () {
                _this.anim.eulerAngles = new cc_4.Vec3(0, 0, 0);
            }).union().repeatForever().start();
        };
        return Gallery_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Gallery");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _toggleContainer_decorators = [property(cc_1.ToggleContainer)];
        _furnitureToggleContainer_decorators = [property(cc_1.ToggleContainer)];
        _dressToggleContainer_decorators = [property(cc_1.ToggleContainer)];
        _memberList_decorators = [property({ type: List_1.default })];
        _rewardList_decorators = [property({ type: List_1.default })];
        _anim_decorators = [property(cc_3.Node)];
        __esDecorate(null, null, _toggleContainer_decorators, { kind: "field", name: "toggleContainer", static: false, private: false, access: { has: function (obj) { return "toggleContainer" in obj; }, get: function (obj) { return obj.toggleContainer; }, set: function (obj, value) { obj.toggleContainer = value; } }, metadata: _metadata }, _toggleContainer_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _furnitureToggleContainer_decorators, { kind: "field", name: "furnitureToggleContainer", static: false, private: false, access: { has: function (obj) { return "furnitureToggleContainer" in obj; }, get: function (obj) { return obj.furnitureToggleContainer; }, set: function (obj, value) { obj.furnitureToggleContainer = value; } }, metadata: _metadata }, _furnitureToggleContainer_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dressToggleContainer_decorators, { kind: "field", name: "dressToggleContainer", static: false, private: false, access: { has: function (obj) { return "dressToggleContainer" in obj; }, get: function (obj) { return obj.dressToggleContainer; }, set: function (obj, value) { obj.dressToggleContainer = value; } }, metadata: _metadata }, _dressToggleContainer_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _memberList_decorators, { kind: "field", name: "memberList", static: false, private: false, access: { has: function (obj) { return "memberList" in obj; }, get: function (obj) { return obj.memberList; }, set: function (obj, value) { obj.memberList = value; } }, metadata: _metadata }, _memberList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rewardList_decorators, { kind: "field", name: "rewardList", static: false, private: false, access: { has: function (obj) { return "rewardList" in obj; }, get: function (obj) { return obj.rewardList; }, set: function (obj, value) { obj.rewardList = value; } }, metadata: _metadata }, _rewardList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _anim_decorators, { kind: "field", name: "anim", static: false, private: false, access: { has: function (obj) { return "anim" in obj; }, get: function (obj) { return obj.anim; }, set: function (obj, value) { obj.anim = value; } }, metadata: _metadata }, _anim_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Gallery = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Gallery = _classThis;
}();
exports.Gallery = Gallery;
