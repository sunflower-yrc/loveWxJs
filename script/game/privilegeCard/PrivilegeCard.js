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
exports.PrivilegeCard = exports.ActiveType = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataObject_1 = require("../tools/DataObject");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var PrivilegeCardItem_1 = require("./PrivilegeCardItem");
var GameEvent_1 = require("../common/config/GameEvent");
var HttpPost_1 = require("../tools/HttpPost");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var CardType;
(function (CardType) {
    CardType[CardType["month"] = 0] = "month";
    CardType[CardType["welfare"] = 1] = "welfare"; //每日福利
})(CardType || (CardType = {}));
var ActiveType;
(function (ActiveType) {
    ActiveType[ActiveType["adsFree"] = 1] = "adsFree";
    ActiveType[ActiveType["diamond"] = 2] = "diamond";
    ActiveType[ActiveType["dayFree"] = 3] = "dayFree";
    ActiveType[ActiveType["life"] = 4] = "life";
    ActiveType[ActiveType["pet"] = 5] = "pet";
})(ActiveType || (exports.ActiveType = ActiveType = {}));
var PrivilegeCard = function () {
    var _classDecorators = [ccclass('PrivilegeCard')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _adsFree_decorators;
    var _adsFree_initializers = [];
    var _diamond_decorators;
    var _diamond_initializers = [];
    var _life_decorators;
    var _life_initializers = [];
    var _dayFree_decorators;
    var _dayFree_initializers = [];
    var _pet_decorators;
    var _pet_initializers = [];
    var _cardNode_decorators;
    var _cardNode_initializers = [];
    var PrivilegeCard = _classThis = /** @class */ (function (_super) {
        __extends(PrivilegeCard_1, _super);
        function PrivilegeCard_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.adsFree = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _adsFree_initializers, null));
            _this.diamond = __runInitializers(_this, _diamond_initializers, null);
            _this.life = __runInitializers(_this, _life_initializers, null);
            _this.dayFree = __runInitializers(_this, _dayFree_initializers, null);
            _this.pet = __runInitializers(_this, _pet_initializers, null);
            _this.cardNode = __runInitializers(_this, _cardNode_initializers, null);
            _this.curType = null;
            return _this;
        }
        PrivilegeCard_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdatePrivilegeCard, this.updateData, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdatePrivilegeCardRed, this.updateRed, this);
            this.choseBtn(null, CardType.month);
            this.updateRed(this.data);
        };
        PrivilegeCard_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdatePrivilegeCard, this.updateData, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdatePrivilegeCardRed, this.updateRed, this);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.PrivilegeCard);
        };
        PrivilegeCard_1.prototype.update = function (deltaTime) {
        };
        PrivilegeCard_1.prototype.onAdded = function (data) {
            this.data = data;
        };
        PrivilegeCard_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PrivilegeCard);
        };
        PrivilegeCard_1.prototype.showMonthCard = function () {
        };
        PrivilegeCard_1.prototype.showWelfareCard = function () {
        };
        PrivilegeCard_1.prototype.choseBtn = function (ev, type) {
            if (this.curType == parseInt(type)) {
                return;
            }
            this.curType = parseInt(type);
            this.setData();
        };
        //标签红点刷新
        PrivilegeCard_1.prototype.updateRed = function (data) {
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/welfare1/redDot", this.node, data.redDotBonus);
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/month1/redDot", this.node, data.redDotCard);
        };
        //数据刷新
        PrivilegeCard_1.prototype.updateData = function (event, data) {
            var _this = this;
            if (data) {
                this.data = data;
                this.setData();
            }
            HttpPost_1.HttpPost.instance.getCardDetail(function (data) {
                _this.data = data;
                _this.setData();
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePrivilegeCardRed, data);
            });
        };
        PrivilegeCard_1.prototype.setData = function () {
            if (this.curType == CardType.month) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/month1", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/month2", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/welfare1", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/welfare2", this.node, false);
                // this.adsFree.node.active = true;
                // this.diamond.node.active = true;
                this.cardNode.active = true;
                this.life.node.active = false;
                this.dayFree.node.active = false;
                // this.adsFree.setUI(ActiveType.adsFree,this.data);
                this.diamond.setUI(ActiveType.diamond, this.data);
                this.pet.setUI(ActiveType.pet, this.data);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/month1", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/month2", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/welfare1", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/welfare2", this.node, true);
                // this.adsFree.node.active = false;
                // this.diamond.node.active = false;
                this.cardNode.active = false;
                this.life.node.active = true;
                this.dayFree.node.active = true;
                this.life.setUI(ActiveType.life, this.data);
                this.dayFree.setUI(ActiveType.dayFree, this.data);
            }
        };
        return PrivilegeCard_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PrivilegeCard");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _adsFree_decorators = [property(PrivilegeCardItem_1.PrivilegeCardItem)];
        _diamond_decorators = [property(PrivilegeCardItem_1.PrivilegeCardItem)];
        _life_decorators = [property(PrivilegeCardItem_1.PrivilegeCardItem)];
        _dayFree_decorators = [property(PrivilegeCardItem_1.PrivilegeCardItem)];
        _pet_decorators = [property(PrivilegeCardItem_1.PrivilegeCardItem)];
        _cardNode_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _adsFree_decorators, { kind: "field", name: "adsFree", static: false, private: false, access: { has: function (obj) { return "adsFree" in obj; }, get: function (obj) { return obj.adsFree; }, set: function (obj, value) { obj.adsFree = value; } }, metadata: _metadata }, _adsFree_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _diamond_decorators, { kind: "field", name: "diamond", static: false, private: false, access: { has: function (obj) { return "diamond" in obj; }, get: function (obj) { return obj.diamond; }, set: function (obj, value) { obj.diamond = value; } }, metadata: _metadata }, _diamond_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _life_decorators, { kind: "field", name: "life", static: false, private: false, access: { has: function (obj) { return "life" in obj; }, get: function (obj) { return obj.life; }, set: function (obj, value) { obj.life = value; } }, metadata: _metadata }, _life_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dayFree_decorators, { kind: "field", name: "dayFree", static: false, private: false, access: { has: function (obj) { return "dayFree" in obj; }, get: function (obj) { return obj.dayFree; }, set: function (obj, value) { obj.dayFree = value; } }, metadata: _metadata }, _dayFree_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pet_decorators, { kind: "field", name: "pet", static: false, private: false, access: { has: function (obj) { return "pet" in obj; }, get: function (obj) { return obj.pet; }, set: function (obj, value) { obj.pet = value; } }, metadata: _metadata }, _pet_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cardNode_decorators, { kind: "field", name: "cardNode", static: false, private: false, access: { has: function (obj) { return "cardNode" in obj; }, get: function (obj) { return obj.cardNode; }, set: function (obj, value) { obj.cardNode = value; } }, metadata: _metadata }, _cardNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PrivilegeCard = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PrivilegeCard = _classThis;
}();
exports.PrivilegeCard = PrivilegeCard;
