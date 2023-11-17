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
exports.MoonLimitGift = exports.moonGiftType = void 0;
var cc_1 = require("cc");
var List_1 = require("../tools/List");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var PurchaseData_1 = require("../common/tableData/PurchaseData");
var SuitData_1 = require("../common/tableData/SuitData");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var Role_1 = require("../dress/Role");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var MoonGiftItem_1 = require("./MoonGiftItem");
var GameEvent_1 = require("../common/config/GameEvent");
var HttpPost_1 = require("../tools/HttpPost");
var GameResPath_1 = require("../common/config/GameResPath");
var DressData_1 = require("../common/tableData/DressData");
var DataObject_1 = require("../tools/DataObject");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var Payment_1 = require("../platform/Payment");
var cc_2 = require("cc");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var moonGiftType;
(function (moonGiftType) {
    moonGiftType[moonGiftType["dress"] = 1] = "dress";
    moonGiftType[moonGiftType["gift"] = 2] = "gift";
})(moonGiftType || (exports.moonGiftType = moonGiftType = {}));
var MoonLimitGift = function () {
    var _classDecorators = [ccclass('MoonLimitGift')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _list_decorators;
    var _list_initializers = [];
    var _items_decorators;
    var _items_initializers = [];
    var _spine_decorators;
    var _spine_initializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var MoonLimitGift = _classThis = /** @class */ (function (_super) {
        __extends(MoonLimitGift_1, _super);
        function MoonLimitGift_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.list = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _list_initializers, null));
            _this.items = __runInitializers(_this, _items_initializers, null);
            _this.spine = __runInitializers(_this, _spine_initializers, null);
            _this.role = __runInitializers(_this, _role_initializers, null);
            _this.listData = [];
            _this.type = null;
            _this.time = null;
            return _this;
        }
        MoonLimitGift_1.prototype.onAdded = function (data) {
            this.data = data;
            this.listData = data.giftList;
        };
        MoonLimitGift_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.BuyMoonLimitGift, this.buyUpdateData, this);
            this.spineStar();
            this.selectToggle(null, "1");
            this.setTimer();
        };
        MoonLimitGift_1.prototype.onDestroy = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.BuyMoonLimitGift, this.buyUpdateData, this);
        };
        MoonLimitGift_1.prototype.buyUpdateData = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.festivalGiftInfo(function (data) {
                if (_this.isValid) {
                    _this.onAdded(data);
                    _this.setUI();
                }
            });
        };
        MoonLimitGift_1.prototype.selectToggle = function (ev, type) {
            if (this.type == parseInt(type)) {
                return;
            }
            this.type = parseInt(type);
            this.setUI();
        };
        MoonLimitGift_1.prototype.setUI = function () {
            if (this.type == moonGiftType.dress) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/limit", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/gift", this.node, false);
                this.setDressUI();
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/limit", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/gift", this.node, true);
                this.setGiftUI();
            }
        };
        MoonLimitGift_1.prototype.setDressUI = function () {
            if (this.data.mainGift.status == 1) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/limit/btn_buy", this.node, true);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/limit/btn_buy", this.node, false);
            }
            this.purchase = new PurchaseData_1.PurchaseData(this.data.mainGift.id);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/btn_buy/preMoney", this.node, this.purchase.getPreMoney());
            ViewUtil_1.ViewUtil.setLabelStringByName("root/btn_buy/nowMoney", this.node, this.purchase.getMoney());
            var itemArr = this.items.children;
            var dropData = StringUtil_1.StringUtil.stringToArray5(this.data.mainGift.reward);
            var suitData = new SuitData_1.SuitData(parseInt(dropData[1]));
            var suitIds = StringUtil_1.StringUtil.stringToArray2(suitData.suitShow);
            this.role.showSuitSkin(suitData.suitShow);
            for (var i = 0, len = itemArr.length; i < len; i++) {
                var item = itemArr[i];
                if (!suitIds[i]) {
                    break;
                }
                var dress = new DressData_1.DressData(parseInt(suitIds[i]));
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", item, GameResPath_1.GameResPath.getDressListIconsPath(dress.id.toString()), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("name", item, dress.getName());
            }
        };
        MoonLimitGift_1.prototype.setGiftUI = function () {
            this.list.numItems = this.listData.length;
        };
        MoonLimitGift_1.prototype.onRenderList = function (item, index) {
            var _a;
            (_a = item.getComponent(MoonGiftItem_1.MoonGiftItem)) === null || _a === void 0 ? void 0 : _a.init(this.listData[index], index);
        };
        /**创建计时器 */
        MoonLimitGift_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            this.time = (this.data.endTime - curTime);
            this.onSecond();
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        MoonLimitGift_1.prototype.onSecond = function () {
            var time;
            if (this.time >= 3600) {
                time = StringUtil_1.StringUtil.formatTimeWithSec(this.time, true);
            }
            else {
                time = StringUtil_1.StringUtil.formatTimeWithSec(this.time);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("root/timeBg/Label", this.node, Oops_1.oops.language.getLangByID("common.leftTime") + time);
        };
        MoonLimitGift_1.prototype.onComplete = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.MoonLimitGift);
        };
        MoonLimitGift_1.prototype.spineStar = function () {
            var _this = this;
            this.spine.setAnimation(0, "open", false);
            this.spine.setCompleteListener(function () {
                _this.spine.setAnimation(0, "idle", true);
                _this.spine.setCompleteListener(function () {
                });
            });
        };
        MoonLimitGift_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.MoonLimitGift);
        };
        //充值
        MoonLimitGift_1.prototype.btn_buy = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            SdkPlatform_1.SdkPlatform.recharge_click(DataObject_1.PayType.MoonLimitGift, this.purchase.id);
            Payment_1.Payment.Instance.createOrder(this.purchase.id);
        };
        return MoonLimitGift_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MoonLimitGift");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _list_decorators = [property(List_1.default)];
        _items_decorators = [property(cc_1.Node)];
        _spine_decorators = [property(cc_2.sp.Skeleton)];
        _role_decorators = [property(Role_1.Role)];
        __esDecorate(null, null, _list_decorators, { kind: "field", name: "list", static: false, private: false, access: { has: function (obj) { return "list" in obj; }, get: function (obj) { return obj.list; }, set: function (obj, value) { obj.list = value; } }, metadata: _metadata }, _list_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _items_decorators, { kind: "field", name: "items", static: false, private: false, access: { has: function (obj) { return "items" in obj; }, get: function (obj) { return obj.items; }, set: function (obj, value) { obj.items = value; } }, metadata: _metadata }, _items_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _spine_decorators, { kind: "field", name: "spine", static: false, private: false, access: { has: function (obj) { return "spine" in obj; }, get: function (obj) { return obj.spine; }, set: function (obj, value) { obj.spine = value; } }, metadata: _metadata }, _spine_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MoonLimitGift = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MoonLimitGift = _classThis;
}();
exports.MoonLimitGift = MoonLimitGift;
