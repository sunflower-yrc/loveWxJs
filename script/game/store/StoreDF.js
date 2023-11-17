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
exports.StoreDF = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var List_1 = require("../tools/List");
var StoreItem_1 = require("./StoreItem");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var StoreDF = function () {
    var _classDecorators = [ccclass('StoreDF')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _nodeScrollview_decorators;
    var _nodeScrollview_initializers = [];
    var StoreDF = _classThis = /** @class */ (function (_super) {
        __extends(StoreDF_1, _super);
        function StoreDF_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nodeScrollview = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _nodeScrollview_initializers, null));
            _this.storeBuyType = DataObject_1.StoreBuyType.Dress;
            _this.storeItemDatas = [];
            _this.leftFreeTimes = 0;
            return _this;
        }
        StoreDF_1.prototype.initUI = function (buyType, datas, times) {
            this.storeBuyType = buyType;
            this.storeItemDatas = datas;
            this.leftFreeTimes = times;
            //加载列表
            this.nodeScrollview.numItems = this.storeItemDatas.length;
            this.showFreeStatus();
            if (this.storeBuyType == DataObject_1.StoreBuyType.Dress) {
                SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.StoreDress);
            }
            else if (this.storeBuyType == DataObject_1.StoreBuyType.Furniture) {
                SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.StoreFurniture);
            }
        };
        StoreDF_1.prototype.showFreeStatus = function () {
            //免费
            ViewUtil_1.ViewUtil.setNodeActiveByName("free/btn_free", this.node, this.leftFreeTimes > 0);
            ViewUtil_1.ViewUtil.setNodeActiveByName("free/got", this.node, this.leftFreeTimes <= 0);
        };
        /**
         * render回调
        */
        StoreDF_1.prototype.renderEventCallback = function (item, idx) {
            var _a;
            (_a = item.getComponent(StoreItem_1.StoreItem)) === null || _a === void 0 ? void 0 : _a.initData(this, this.storeBuyType, -1, idx, this.storeItemDatas[idx]);
        };
        /**
         * 刷新列表
         * @param dataList
         */
        StoreDF_1.prototype.refreshList = function (dataList) {
            //更新数据
            for (var i = 0; i < dataList.length; i++) {
                var element = dataList[i];
                this.storeItemDatas[i].owned = element.owned == 1;
                this.storeItemDatas[i].leftLimitTimes = element.leftLimitTimes;
            }
            //刷新界面
            this.nodeScrollview.numItems = this.storeItemDatas.length;
            this.nodeScrollview.updateAll();
        };
        StoreDF_1.prototype.btn_free = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            //看广告
            var adpos = DataObject_1.AdRewardType.StoreDress;
            if (this.storeBuyType == DataObject_1.StoreBuyType.Furniture) {
                adpos = DataObject_1.AdRewardType.StoreFurniture;
            }
            SdkPlatform_1.SdkPlatform.showAds(adpos, function () {
                HttpPost_1.HttpPost.instance.openShopBox(_this.storeBuyType, function (data) {
                    //掉落
                    var dropInfo = new DataObject_1.DropInfo();
                    var dropDatas = [];
                    var dropType = DataObject_1.DropType.Dress;
                    if (_this.storeBuyType == DataObject_1.StoreBuyType.Dress) {
                        dropType = DataObject_1.DropType.Dress;
                        dropInfo.dropFrom = DataObject_1.DropFrom.StoreDress;
                    }
                    else if (_this.storeBuyType == DataObject_1.StoreBuyType.Furniture) {
                        dropType = DataObject_1.DropType.Furniture;
                        dropInfo.dropFrom = DataObject_1.DropFrom.StoreFurniture;
                    }
                    var dropData = DropMgr_1.DropMgr.getDropInfo(dropType, data.propId, 1);
                    dropDatas.push(dropData);
                    dropInfo.dropData = dropDatas;
                    dropInfo.UIID.push(GameUIConfig_1.UIID.Store);
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                    //更新数据
                    DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                    //剩余次数
                    _this.leftFreeTimes = data.shopList.leftFreeTimes;
                    _this.showFreeStatus();
                    //刷新列表
                    _this.refreshList(data.shopList.list);
                });
            });
        };
        return StoreDF_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StoreDF");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _nodeScrollview_decorators = [property(List_1.default)];
        __esDecorate(null, null, _nodeScrollview_decorators, { kind: "field", name: "nodeScrollview", static: false, private: false, access: { has: function (obj) { return "nodeScrollview" in obj; }, get: function (obj) { return obj.nodeScrollview; }, set: function (obj, value) { obj.nodeScrollview = value; } }, metadata: _metadata }, _nodeScrollview_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StoreDF = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StoreDF = _classThis;
}();
exports.StoreDF = StoreDF;
