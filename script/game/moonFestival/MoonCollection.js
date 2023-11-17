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
exports.MoonCollection = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var List_1 = require("../tools/List");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var cc_2 = require("cc");
var cc_3 = require("cc");
var cc_4 = require("cc");
var CollectionProItem_1 = require("./CollectionProItem");
var cc_5 = require("cc");
var CollectionItem_1 = require("./CollectionItem");
var GameEvent_1 = require("../common/config/GameEvent");
var DataObject_1 = require("../tools/DataObject");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
/**中秋珍藏 */
var MoonCollection = function () {
    var _classDecorators = [ccclass('MoonCollection')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _list_decorators;
    var _list_initializers = [];
    var _pro_decorators;
    var _pro_initializers = [];
    var _lay_decorators;
    var _lay_initializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var MoonCollection = _classThis = /** @class */ (function (_super) {
        __extends(MoonCollection_1, _super);
        function MoonCollection_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.list = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _list_initializers, null));
            _this.pro = __runInitializers(_this, _pro_initializers, null);
            _this.lay = __runInitializers(_this, _lay_initializers, null);
            _this.item = __runInitializers(_this, _item_initializers, null);
            return _this;
        }
        MoonCollection_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateMoonCollection, this.updateData, this);
        };
        MoonCollection_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateMoonCollection, this.updateData, this);
        };
        MoonCollection_1.prototype.updateData = function (ev, data) {
            this.init(data);
        };
        MoonCollection_1.prototype.init = function (data) {
            this.data = data;
            this.listData = data.exchangeList;
            ViewUtil_1.ViewUtil.setLabelStringByName("top/below/num", this.node, this.data.midAutumnTicket);
            this.list.numItems = this.listData.length;
            this.setProUI();
        };
        MoonCollection_1.prototype.setProUI = function () {
            var proData = this.data.collect;
            var width = this.lay.getComponent(cc_5.UITransform).width;
            ViewUtil_1.ViewUtil.setLabelStringByName("top/lbProgress", this.node, proData.haveCount + "/" + proData.maxCount);
            this.pro.fillRange = (this.node, proData.haveCount / proData.maxCount);
            for (var i = 0, len = proData.rewardList.length; i < len; i++) {
                var isLine = true;
                if (i == proData.rewardList.length - 1) {
                    isLine = false;
                }
                if (this.lay.children[i]) {
                    this.lay.children[i].getComponent(CollectionProItem_1.CollectionProItem).init(proData.rewardList[i], isLine);
                }
                else {
                    var item = (0, cc_4.instantiate)(this.item);
                    item.parent = this.lay;
                    item.getComponent(CollectionProItem_1.CollectionProItem).init(proData.rewardList[i], isLine);
                    var rate = proData.rewardList[i].requireNumber / proData.maxCount;
                    item.setPosition(((rate * width) - (width / 2)), 20, 0);
                }
            }
        };
        MoonCollection_1.prototype.onRenderList = function (item, index) {
            var _a;
            (_a = item.getComponent(CollectionItem_1.CollectionItem)) === null || _a === void 0 ? void 0 : _a.init(this.listData[index], this.data.midAutumnTicket);
        };
        MoonCollection_1.prototype.gotoOrder = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.gotoMoon, "2");
        };
        return MoonCollection_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MoonCollection");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _list_decorators = [property(List_1.default)];
        _pro_decorators = [property(cc_2.Sprite)];
        _lay_decorators = [property(cc_1.Node)];
        _item_decorators = [property(cc_3.Prefab)];
        __esDecorate(null, null, _list_decorators, { kind: "field", name: "list", static: false, private: false, access: { has: function (obj) { return "list" in obj; }, get: function (obj) { return obj.list; }, set: function (obj, value) { obj.list = value; } }, metadata: _metadata }, _list_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pro_decorators, { kind: "field", name: "pro", static: false, private: false, access: { has: function (obj) { return "pro" in obj; }, get: function (obj) { return obj.pro; }, set: function (obj, value) { obj.pro = value; } }, metadata: _metadata }, _pro_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lay_decorators, { kind: "field", name: "lay", static: false, private: false, access: { has: function (obj) { return "lay" in obj; }, get: function (obj) { return obj.lay; }, set: function (obj, value) { obj.lay = value; } }, metadata: _metadata }, _lay_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MoonCollection = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MoonCollection = _classThis;
}();
exports.MoonCollection = MoonCollection;
