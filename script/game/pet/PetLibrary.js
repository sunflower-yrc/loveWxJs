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
exports.PetLibrary = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DropMgr_1 = require("../mgr/DropMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var List_1 = require("../tools/List");
var ListItem_1 = require("../tools/ListItem");
var PetRewardData_1 = require("./PetRewardData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var PetLibrary = function () {
    var _classDecorators = [ccclass('PetLibrary')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _toggle1_decorators;
    var _toggle1_initializers = [];
    var _toggle2_decorators;
    var _toggle2_initializers = [];
    var _memberList_decorators;
    var _memberList_initializers = [];
    var PetLibrary = _classThis = /** @class */ (function (_super) {
        __extends(PetLibrary_1, _super);
        function PetLibrary_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.serverData = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.toggle1 = __runInitializers(_this, _toggle1_initializers, void 0);
            _this.toggle2 = __runInitializers(_this, _toggle2_initializers, void 0);
            _this.memberList = __runInitializers(_this, _memberList_initializers, null);
            _this.memberListData = [];
            _this.baseData = [];
            return _this;
        }
        PetLibrary_1.prototype.onAdded = function (data) {
            var _this = this;
            this.serverData = data;
            this.memberListData = this.serverData.list;
            this.baseData = PetRewardData_1.PetRewardData.getRewardArrayByType(this.serverData.collectType);
            for (var i = 0; i < this.serverData.list.length; i++) {
                this.baseData.find(function (x) { return x.id == _this.serverData.list[i].petRewardId; }).state = this.serverData.list[i].isGetAward;
            }
        };
        PetLibrary_1.prototype.start = function () {
            this.memberList.numItems = this.baseData.length;
            var p = this.serverData.collectRewardProgressMax - this.serverData.collectRewardProgress;
            if (p < 0)
                p = 0;
            ViewUtil_1.ViewUtil.setLabelStringByName("topNode/content/tipsLabel", this.node, Oops_1.oops.language.getLangByID("pet.libraryTips", p));
            ViewUtil_1.ViewUtil.setLabelStringByName("topNode/content/proBg/giftNum", this.node, this.serverData.collectRewardProgress + "/" + this.serverData.collectRewardProgressMax);
            ViewUtil_1.ViewUtil.findChildByName("topNode/content/proBg/pro", this.node).getComponent(cc_1.Sprite).fillRange = this.serverData.collectRewardProgress / this.serverData.collectRewardProgressMax;
            ViewUtil_1.ViewUtil.setNodeActiveByName("topNode/content/proBg/box", this.node, this.serverData.collectRewardProgress >= this.serverData.collectRewardProgressMax);
            ViewUtil_1.ViewUtil.setNodeActiveByName("topNode/content/proBg/light", this.node, this.serverData.collectRewardProgress >= this.serverData.collectRewardProgressMax);
        };
        PetLibrary_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetLibrary);
            HttpPost_1.HttpPost.instance.petList(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetMain, data);
            });
        };
        PetLibrary_1.prototype.onMembersListRender = function (item, idx) {
            if (item) {
                var data_1 = this.baseData[idx];
                var sData = this.memberListData.find(function (x) { return x.petRewardId == data_1.id; });
                ViewUtil_1.ViewUtil.setLabelStringByName("nameLabel", item, data_1.getName());
                ViewUtil_1.ViewUtil.findChildByName("getBtn", item).off(cc_1.Button.EventType.CLICK, this.btn_getSingleCollectReward, this);
                if (this.serverData.collectType == 1) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("icon", item, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("photoNode", item, false);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", item, GameResPath_1.GameResPath.getPetRewardIconsPath(data_1.rewardRes), BundleConfig_1.default.instance.guiBundle.name);
                }
                else if (this.serverData.collectType == 2) {
                    if (sData) {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("icon", item, false);
                        ViewUtil_1.ViewUtil.setNodeActiveByName("photoNode", item, true);
                        ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("photoNode/mask/showSp", item, GameResPath_1.GameResPath.getPetRewardIconsPath(data_1.rewardRes), BundleConfig_1.default.instance.guiBundle.name);
                    }
                    else {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("icon", item, true);
                        ViewUtil_1.ViewUtil.setNodeActiveByName("photoNode", item, false);
                        ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", item, GameResPath_1.GameResPath.getPetRewardIconsPath("cwgn_imag_empty"), BundleConfig_1.default.instance.guiBundle.name);
                    }
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("hasGet", item, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", item, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("sourceRoot", item, false);
                if (sData) {
                    if (sData.isGetAward == 1) {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("hasGet", item, true);
                    }
                    else {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", item, true);
                        ViewUtil_1.ViewUtil.findChildByName("getBtn", item).on(cc_1.Button.EventType.CLICK, this.btn_getSingleCollectReward, this);
                        ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("getBtn/Sprite", item, GameResPath_1.GameResPath.getDropIconsPath(data_1.rewardCoinType), BundleConfig_1.default.instance.guiBundle.name);
                        ViewUtil_1.ViewUtil.setLabelStringByName("getBtn/Label", item, "+" + data_1.rewardCoinNum);
                    }
                }
                else {
                    ViewUtil_1.ViewUtil.setLabelStringByName("sourceRoot", item, data_1.getDescSource());
                    ViewUtil_1.ViewUtil.setNodeActiveByName("sourceRoot", item, true);
                }
            }
        };
        PetLibrary_1.prototype.onListSelected = function (item, selectedId, lastSelectedId, val, param) {
            var _this = this;
            if (!item)
                return;
            var sData = this.memberListData.find(function (x) { return x.petRewardId == _this.baseData[selectedId].id; });
            if (sData && this.serverData.collectType == 2)
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetImgShare, sData);
        };
        //领取新物品奖励
        PetLibrary_1.prototype.btn_getSingleCollectReward = function (button) {
            var _this = this;
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.baseData[idx];
            HttpPost_1.HttpPost.instance.petCollectRewardNew(item.id, function (data) {
                var dData = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dData;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                _this.onAdded(data);
                _this.start();
            });
        };
        PetLibrary_1.prototype.showToggleEnble = function (node) {
            var check = ViewUtil_1.ViewUtil.findChildByName("Checkmark", node);
            var def = ViewUtil_1.ViewUtil.findChildByName("default", node);
            check.active = true;
            def.active = false;
        };
        PetLibrary_1.prototype.showToggleDisable = function (node) {
            var check = ViewUtil_1.ViewUtil.findChildByName("Checkmark", node);
            var def = ViewUtil_1.ViewUtil.findChildByName("default", node);
            check.active = false;
            def.active = true;
        };
        PetLibrary_1.prototype.btn_toggle1Click = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.petCollectList(1, function (data) {
                _this.onAdded(data);
                _this.start();
                _this.showToggleEnble(_this.toggle1);
                _this.showToggleDisable(_this.toggle2);
            });
        };
        PetLibrary_1.prototype.btn_toggle2Click = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.petCollectList(2, function (data) {
                _this.onAdded(data);
                _this.start();
                _this.showToggleEnble(_this.toggle2);
                _this.showToggleDisable(_this.toggle1);
            });
        };
        PetLibrary_1.prototype.btn_getProReward = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.petCollectRewardProgress(this.serverData.collectType, function (data) {
                var dData = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dData;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                _this.onAdded(data);
                _this.start();
            });
        };
        PetLibrary_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.PetLibrary);
        };
        return PetLibrary_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PetLibrary");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _toggle1_decorators = [property(cc_1.Node)];
        _toggle2_decorators = [property(cc_1.Node)];
        _memberList_decorators = [property({ type: List_1.default })];
        __esDecorate(null, null, _toggle1_decorators, { kind: "field", name: "toggle1", static: false, private: false, access: { has: function (obj) { return "toggle1" in obj; }, get: function (obj) { return obj.toggle1; }, set: function (obj, value) { obj.toggle1 = value; } }, metadata: _metadata }, _toggle1_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggle2_decorators, { kind: "field", name: "toggle2", static: false, private: false, access: { has: function (obj) { return "toggle2" in obj; }, get: function (obj) { return obj.toggle2; }, set: function (obj, value) { obj.toggle2 = value; } }, metadata: _metadata }, _toggle2_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _memberList_decorators, { kind: "field", name: "memberList", static: false, private: false, access: { has: function (obj) { return "memberList" in obj; }, get: function (obj) { return obj.memberList; }, set: function (obj, value) { obj.memberList = value; } }, metadata: _metadata }, _memberList_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PetLibrary = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetLibrary = _classThis;
}();
exports.PetLibrary = PetLibrary;
