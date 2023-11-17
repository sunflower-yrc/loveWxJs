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
exports.StoreItem = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var ButtonPlus_1 = require("../tools/ButtonPlus");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var StoreItem = function () {
    var _classDecorators = [ccclass('StoreItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var StoreItem = _classThis = /** @class */ (function (_super) {
        __extends(StoreItem_1, _super);
        function StoreItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.shopType = DataObject_1.StoreBuyType.Dress;
            _this.toggleType = -1;
            _this.index = 0;
            return _this;
        }
        StoreItem_1.prototype.initData = function (storedf, sType, tType, idx, data) {
            this.store = storedf;
            this.shopType = sType;
            this.toggleType = tType;
            this.index = idx;
            this.itemData = data;
            //图标
            this.dropInfo = DropMgr_1.DropMgr.getDropInfo(this.itemData.type, this.itemData.id, 1);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.node, this.dropInfo.iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            //等级
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("grade", this.node, GameResPath_1.GameResPath.getStoreItemRankPath(this.dropInfo.grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
            //名称
            ViewUtil_1.ViewUtil.setLabelStringByName("grade/name", this.node, this.dropInfo.name);
            //价格
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("cost_bg/icon", this.node, GameResPath_1.GameResPath.getDropIconsPath(this.itemData.purchaseType), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("cost_bg/amount", this.node, this.itemData.purchaseAmount.toString());
            //折扣
            if (this.itemData.discount < 10) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("discount_bg", this.node, true);
                ViewUtil_1.ViewUtil.setLabelStringByName("discount_bg/discount", this.node, Oops_1.oops.language.getLangByID("store.discount", this.itemData.discount));
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("discount_bg", this.node, false);
            }
            //任务
            ViewUtil_1.ViewUtil.setNodeActiveByName("inTask", this.node, this.itemData.inTask);
            this.refreshStatus();
            //绑定明细
            var btnCom = this.getComponent(ButtonPlus_1.default);
            if (btnCom) {
                btnCom.addLongClick(this.onLongPressThis.bind(this), this.onLongPressEndThis.bind(this), this);
            }
        };
        StoreItem_1.prototype.refreshData = function (data) {
            this.itemData = data;
            this.refreshStatus();
        };
        StoreItem_1.prototype.refreshStatus = function () {
            //是否已拥有
            ViewUtil_1.ViewUtil.setNodeActiveByName("owned", this.node, this.itemData.owned);
            //售罄
            var soldOut = this.itemData.leftLimitTimes == 0;
            if (soldOut) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("sold_out", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("cost_bg", this.node, false);
                var color = new cc_1.Color(255, 255, 255, 50);
                ViewUtil_1.ViewUtil.findChildByName("grade/name", this.node).getComponent(cc_1.Label).color = color;
                ViewUtil_1.ViewUtil.findChildByName("icon", this.node).getComponent(cc_1.Sprite).color = color;
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("sold_out", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("cost_bg", this.node, true);
                var color = cc_1.Color.WHITE;
                ViewUtil_1.ViewUtil.findChildByName("grade/name", this.node).getComponent(cc_1.Label).color = color;
                ViewUtil_1.ViewUtil.findChildByName("icon", this.node).getComponent(cc_1.Sprite).color = color;
            }
            //限购
            if (this.itemData.leftLimitTimes > 0) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("limit", this.node, true);
                ViewUtil_1.ViewUtil.setLabelStringByName("limit", this.node, Oops_1.oops.language.getLangByID("store.limit", this.itemData.leftLimitTimes));
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("limit", this.node, false);
            }
        };
        StoreItem_1.prototype.btn_buy = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.StoreBuyConfirm, { "data": this.itemData, "callback": function () {
                    HttpPost_1.HttpPost.instance.purchaseCommodity(_this.shopType + 1, _this.toggleType, _this.index, 0, function (data) {
                        var _a;
                        //购买成功
                        Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreBuyConfirm);
                        //掉落
                        var dropDatas = [];
                        dropDatas.push(_this.dropInfo);
                        var dropInfo = new DataObject_1.DropInfo();
                        dropInfo.dropData = dropDatas;
                        dropInfo.UIID.push(GameUIConfig_1.UIID.Store);
                        if (_this.shopType == DataObject_1.StoreBuyType.Dress) {
                            dropInfo.dropFrom = DataObject_1.DropFrom.StoreDress;
                        }
                        else if (_this.shopType == DataObject_1.StoreBuyType.Furniture) {
                            dropInfo.dropFrom = DataObject_1.DropFrom.StoreFurniture;
                        }
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                        //货币
                        SingletonModuleComp_1.smc.account.AccountModel.vm.coin = data.coin;
                        SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                        //金币累计消耗
                        SingletonModuleComp_1.smc.account.AccountModel.coinsConsumeAmount = data.coinsConsumeAmount;
                        //更新数据
                        DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                        //刷新商店
                        (_a = _this.store) === null || _a === void 0 ? void 0 : _a.refreshList(data.shopList);
                    });
                } });
        };
        StoreItem_1.prototype.onLongPressThis = function (event) {
            var touchPos = event.getUILocation();
            var itemDetailsData = new DataObject_1.ItemDetailsData();
            itemDetailsData.dropData = this.dropInfo;
            itemDetailsData.touchPos = touchPos;
            DataMgr_1.DataMgr.OpenItemDetails(itemDetailsData, GameUIConfig_1.UIID.ItemDetailsDecorate);
        };
        StoreItem_1.prototype.onLongPressEndThis = function (event) {
            DataMgr_1.DataMgr.CloseItemDetails();
        };
        return StoreItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StoreItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StoreItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StoreItem = _classThis;
}();
exports.StoreItem = StoreItem;
