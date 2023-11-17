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
exports.MoonGiftItem = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var cc_3 = require("cc");
var DropMgr_1 = require("../mgr/DropMgr");
var PurchaseData_1 = require("../common/tableData/PurchaseData");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var DataObject_1 = require("../tools/DataObject");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var Payment_1 = require("../platform/Payment");
var GameResPath_1 = require("../common/config/GameResPath");
var MoonGiftRewardtem_1 = require("./MoonGiftRewardtem");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var MoonGiftItem = function () {
    var _classDecorators = [ccclass('MoonGiftItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _lay_decorators;
    var _lay_initializers = [];
    var MoonGiftItem = _classThis = /** @class */ (function (_super) {
        __extends(MoonGiftItem_1, _super);
        function MoonGiftItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.item = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _item_initializers, null));
            _this.lay = __runInitializers(_this, _lay_initializers, null);
            _this.selectId = null;
            _this.isSelect = false;
            return _this;
        }
        MoonGiftItem_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.RamdomSelect, this.getRamdomReward, this);
        };
        MoonGiftItem_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.RamdomSelect, this.getRamdomReward, this);
        };
        MoonGiftItem_1.prototype.init = function (data, index) {
            this.data = data;
            this.purchase = new PurchaseData_1.PurchaseData(this.data.id);
            if (index % 2 == 0) {
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("bg", this.node, GameResPath_1.GameResPath.getMoonLimitGiftPath("lb_pack_bg_1"), BundleConfig_1.default.instance.guiBundle.name);
            }
            else {
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("bg", this.node, GameResPath_1.GameResPath.getMoonLimitGiftPath("lb_pack_bg_2"), BundleConfig_1.default.instance.guiBundle.name);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("name", this.node, this.purchase.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("btn_buy/mony", this.node, this.purchase.getMoney());
            var rate = Math.ceil(this.purchase.shamMoney / this.purchase.money) * 100;
            ViewUtil_1.ViewUtil.setLabelStringByName("btn_buy/rate", this.node, rate + "%");
            if (this.data.status == 1) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("btn_buy", this.node, true);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("btn_buy", this.node, false);
            }
            var itemDropData = DropMgr_1.DropMgr.getDropData(data.reward);
            this.onItemList(this.lay, itemDropData);
        };
        //物品列表渲染
        MoonGiftItem_1.prototype.onItemList = function (parent, data) {
            this.isSelect = false;
            var len = parent.children.length > data.length ?
                parent.children.length : data.length;
            for (var i = 0; i < len; i++) {
                var itemNode = void 0;
                if (parent.children[i] && data[i]) {
                    parent.children[i].active = true;
                    itemNode = parent.children[i];
                }
                else if (!parent.children[i] && data[i]) {
                    var item = (0, cc_3.instantiate)(this.item);
                    item.parent = parent;
                    itemNode = item;
                }
                else if (parent.children[i] && !data[i]) {
                    parent.children[i].active = false;
                    continue;
                }
                if (data[i].type == 33) {
                    this.isSelect = true;
                }
                itemNode.getComponent(MoonGiftRewardtem_1.MoonGiftRewardtem).init(data[i], this.data.id, this.selectId);
            }
        };
        //充值
        MoonGiftItem_1.prototype.btn_buy = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.isSelect) {
                if (!this.selectId) {
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.selectBuy"));
                    return;
                }
            }
            SdkPlatform_1.SdkPlatform.recharge_click(DataObject_1.PayType.MoonLimitGift, this.purchase.id);
            Payment_1.Payment.Instance.createOrder(this.purchase.id, this.selectId);
        };
        MoonGiftItem_1.prototype.getRamdomReward = function (ev, data) {
            if (data.uId == GameUIConfig_1.UIID.MoonLimitGift && data.param == this.data.id) {
                this.selectId = data.id;
                var itemDropData = DropMgr_1.DropMgr.getDropData(this.data.reward);
                this.onItemList(this.lay, itemDropData);
            }
        };
        return MoonGiftItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MoonGiftItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _item_decorators = [property(cc_1.Prefab)];
        _lay_decorators = [property(cc_2.Node)];
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lay_decorators, { kind: "field", name: "lay", static: false, private: false, access: { has: function (obj) { return "lay" in obj; }, get: function (obj) { return obj.lay; }, set: function (obj, value) { obj.lay = value; } }, metadata: _metadata }, _lay_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MoonGiftItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MoonGiftItem = _classThis;
}();
exports.MoonGiftItem = MoonGiftItem;
