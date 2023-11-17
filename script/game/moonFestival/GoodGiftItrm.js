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
exports.GoodGiftItrm = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var cc_4 = require("cc");
var cc_5 = require("cc");
var DropMgr_1 = require("../mgr/DropMgr");
var GoodGiftReward_1 = require("./GoodGiftReward");
var HttpPost_1 = require("../tools/HttpPost");
var GameEvent_1 = require("../common/config/GameEvent");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var DataObject_1 = require("../tools/DataObject");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataMgr_1 = require("../mgr/DataMgr");
var ccclass = cc_3._decorator.ccclass, property = cc_3._decorator.property;
var GoodGiftItrm = function () {
    var _classDecorators = [ccclass('GoodGiftItrm')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_3.Component;
    var _instanceExtraInitializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _lay_decorators;
    var _lay_initializers = [];
    var GoodGiftItrm = _classThis = /** @class */ (function (_super) {
        __extends(GoodGiftItrm_1, _super);
        function GoodGiftItrm_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.item = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _item_initializers, null));
            _this.lay = __runInitializers(_this, _lay_initializers, null);
            _this.selectId = null;
            return _this;
        }
        GoodGiftItrm_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateGoodGiftPos, this.setSelectId, this);
        };
        GoodGiftItrm_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateGoodGiftPos, this.setSelectId, this);
        };
        GoodGiftItrm_1.prototype.init = function (data) {
            this.data = data;
            this.selectId = data.selectId;
            ViewUtil_1.ViewUtil.setLabelStringByName("dayBg/day", this.node, data.day);
            if (data.status == 1) {
                ViewUtil_1.ViewUtil.setLabelStringByName("tip/dec", this.node, Oops_1.oops.language.getLangByID("MoonFestival.choseDec"));
                this.node.getComponent(cc_4.Sprite).color = new cc_5.Color(255, 255, 255, 255);
                ViewUtil_1.ViewUtil.setNodeActiveByName("choseBtn", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lookBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", this.node, false);
            }
            else if (data.status == 2) {
                ViewUtil_1.ViewUtil.setLabelStringByName("tip/dec", this.node, Oops_1.oops.language.getLangByID("MoonFestival.getDec"));
                this.node.getComponent(cc_4.Sprite).color = new cc_5.Color(255, 255, 255, 255);
                ViewUtil_1.ViewUtil.setNodeActiveByName("choseBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lookBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", this.node, true);
            }
            else if (data.status == 3) {
                ViewUtil_1.ViewUtil.setLabelStringByName("tip/dec", this.node, Oops_1.oops.language.getLangByID("MoonFestival.gettedDec"));
                this.node.getComponent(cc_4.Sprite).color = new cc_5.Color(255, 255, 255, 150);
                ViewUtil_1.ViewUtil.setNodeActiveByName("choseBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lookBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", this.node, false);
            }
            else if (data.status == 4) {
                ViewUtil_1.ViewUtil.setLabelStringByName("tip/dec", this.node, Oops_1.oops.language.getLangByID("MoonFestival.lookGet"));
                this.node.getComponent(cc_4.Sprite).color = new cc_5.Color(255, 255, 255, 255);
                ViewUtil_1.ViewUtil.setNodeActiveByName("choseBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lookBtn", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", this.node, false);
            }
            else if (data.status == 5) {
                ViewUtil_1.ViewUtil.setLabelStringByName("tip/dec", this.node, Oops_1.oops.language.getLangByID("MoonFestival.notTimeGet"));
                this.node.getComponent(cc_4.Sprite).color = new cc_5.Color(255, 255, 255, 255);
                ViewUtil_1.ViewUtil.setNodeActiveByName("choseBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lookBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", this.node, false);
            }
            else if (data.status == 6) {
                ViewUtil_1.ViewUtil.setLabelStringByName("tip/dec", this.node, Oops_1.oops.language.getLangByID("MoonFestival.chosed"));
                this.node.getComponent(cc_4.Sprite).color = new cc_5.Color(255, 255, 255, 255);
                ViewUtil_1.ViewUtil.setNodeActiveByName("choseBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lookBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", this.node, false);
            }
            var itemDropData = DropMgr_1.DropMgr.getDropData(this.data.reward);
            this.onItemList(this.lay, itemDropData);
        };
        //物品列表渲染
        GoodGiftItrm_1.prototype.onItemList = function (parent, data) {
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
                    var item = (0, cc_1.instantiate)(this.item);
                    item.parent = parent;
                    itemNode = item;
                }
                else if (parent.children[i] && !data[i]) {
                    parent.children[i].active = false;
                    continue;
                }
                (_a = itemNode === null || itemNode === void 0 ? void 0 : itemNode.getComponent(GoodGiftReward_1.GoodGiftReward)) === null || _a === void 0 ? void 0 : _a.init(data[i], (i + 1), this.data);
            }
        };
        GoodGiftItrm_1.prototype.setSelectId = function (ev, data) {
            if (this.data.day != data.day) {
                return;
            }
            this.selectId = data.index;
        };
        GoodGiftItrm_1.prototype.getReward = function (ev, type) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.nationalDayGetLoginReward(this.data.day, parseInt(type), this.selectId, function (data) {
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.MoonFestival;
                dropInfo.UIID = [GameUIConfig_1.UIID.MoonFestival];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateGoodGift, data.info);
                DataMgr_1.DataMgr.updateUserData(data.userGrade, null, null);
            });
        };
        GoodGiftItrm_1.prototype.lookGet = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.selectId == 0) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("MoonFestival.selectDec"));
                return;
            }
            SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.GoodGift, function (adsTipType) {
                _this.getReward(null, "2");
            });
        };
        GoodGiftItrm_1.prototype.getChose = function () {
            HttpPost_1.HttpPost.instance.nationalDaySelectLoginReward(this.selectId, this.data.day, function (data) {
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateGoodGift, data.info);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.GameMianRed);
            });
        };
        return GoodGiftItrm_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GoodGiftItrm");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _item_decorators = [property(cc_2.Prefab)];
        _lay_decorators = [property(cc_3.Node)];
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lay_decorators, { kind: "field", name: "lay", static: false, private: false, access: { has: function (obj) { return "lay" in obj; }, get: function (obj) { return obj.lay; }, set: function (obj, value) { obj.lay = value; } }, metadata: _metadata }, _lay_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GoodGiftItrm = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GoodGiftItrm = _classThis;
}();
exports.GoodGiftItrm = GoodGiftItrm;
