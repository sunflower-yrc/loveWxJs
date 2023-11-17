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
exports.CollectionItem = void 0;
var cc_1 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var DropMgr_1 = require("../mgr/DropMgr");
var GameResPath_1 = require("../common/config/GameResPath");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var HttpPost_1 = require("../tools/HttpPost");
var DataObject_1 = require("../tools/DataObject");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameEvent_1 = require("../common/config/GameEvent");
var DataMgr_1 = require("../mgr/DataMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var CollectionItem = function () {
    var _classDecorators = [ccclass('CollectionItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var CollectionItem = _classThis = /** @class */ (function (_super) {
        __extends(CollectionItem_1, _super);
        function CollectionItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.haveNum = null;
            return _this;
        }
        CollectionItem_1.prototype.init = function (data, haveNum) {
            this.data = data;
            this.haveNum = haveNum;
            var itemDropData = DropMgr_1.DropMgr.getDropData(data.reward);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.node, itemDropData[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("bg", this.node, GameResPath_1.GameResPath.getQualityBgPath(itemDropData[0].grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("name", this.node, itemDropData[0].name);
            this.changeData = DropMgr_1.DropMgr.getDropData(data.expend);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("btnExchange/lay/changeIcon", this.node, this.changeData[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("btnExchange/lay/num", this.node, "" + this.changeData[0].dropAmount);
            //1：未兑换 2：已兑换
            if (data.status == 1) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnExchange", this.node, true);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnExchange", this.node, false);
            }
        };
        CollectionItem_1.prototype.changeItem = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.haveNum < this.changeData[0].dropAmount) {
                return Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("MoonFestival.notTicket"));
            }
            HttpPost_1.HttpPost.instance.nationalDayExchangeReward(this.data.id, function (data) {
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.MoonFestival;
                dropInfo.UIID = [GameUIConfig_1.UIID.MoonFestival];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateMoonCollection, data.info);
                DataMgr_1.DataMgr.updateUserData(data.userGrade, null, null);
            });
        };
        CollectionItem_1.prototype.previewSuit = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Preview, this.data.reward);
        };
        return CollectionItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "CollectionItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CollectionItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CollectionItem = _classThis;
}();
exports.CollectionItem = CollectionItem;
