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
exports.DressItem = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var ButtonPlus_1 = require("../tools/ButtonPlus");
var DataObject_1 = require("../tools/DataObject");
var DressData_1 = require("../common/tableData/DressData");
var RedDotMgr_1 = require("../mgr/RedDotMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var DressItem = function () {
    var _classDecorators = [ccclass('DressItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var DressItem = _classThis = /** @class */ (function (_super) {
        __extends(DressItem_1, _super);
        function DressItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.decorateOwnedData = null;
            return _this;
        }
        DressItem_1.prototype.initData = function (data) {
            this.decorateOwnedData = data;
            if (this.decorateOwnedData) {
                //有值
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath(this.decorateOwnedData.dressData.grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.node, GameResPath_1.GameResPath.getDressListIconsPath(this.decorateOwnedData.dressData.id.toString()), BundleConfig_1.default.instance.guiBundle.name);
                var isNew = DataMgr_1.DataMgr.getDecorateNewState(DataObject_1.DropType.Dress, this.decorateOwnedData.dressData.id) == 1;
                this.refreshNewState(isNew);
                this.refreshAmont();
            }
            else {
                //空的
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath("1"), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.clearSpriteFrameByName("icon", this.node);
                ViewUtil_1.ViewUtil.setSpriteGray(this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("new", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("amount", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lineup", this.node, false);
            }
            //绑定明细
            var btnCom = this.getComponent(ButtonPlus_1.default);
            if (btnCom) {
                btnCom.addLongClick(this.onLongPressThis.bind(this), this.onLongPressEndThis.bind(this), this);
            }
        };
        /**
         * 设置新状态
         * @param isNew
         */
        DressItem_1.prototype.refreshNewState = function (isNew) {
            ViewUtil_1.ViewUtil.setNodeActiveByName("new", this.node, isNew);
        };
        /**
         * 刷新剩余数量
         */
        DressItem_1.prototype.refreshAmont = function () {
            if (this.decorateOwnedData) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("amount", this.node, true);
                ViewUtil_1.ViewUtil.setLabelStringByName("amount", this.node, this.decorateOwnedData.leftAmount.toString());
                var gray = this.decorateOwnedData.leftAmount <= 0;
                ViewUtil_1.ViewUtil.setSpriteGray(this.node, gray);
                ViewUtil_1.ViewUtil.setSpriteGrayByName("icon", this.node, gray);
                var isLineup = this.decorateOwnedData.lineupCount > 0;
                ViewUtil_1.ViewUtil.setNodeActiveByName("lineup", this.node, isLineup);
            }
        };
        DressItem_1.prototype.btn_click = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (!this.decorateOwnedData) {
                return;
            }
            //去掉新获得的状态
            DataMgr_1.DataMgr.setDecorateNewState(DataObject_1.DropType.Dress, this.decorateOwnedData.dressData.id, false);
            this.refreshNewState(false);
            this.decorateOwnedData.isNew = 0;
            RedDotMgr_1.RedDotMgr.setDressRedDot(this.decorateOwnedData, -1);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.DecorateRefreshRedDot, this.decorateOwnedData.dressData.dressType);
            var currDress = DataMgr_1.DataMgr.currDressSex == DataObject_1.RoleMale.boy ? SingletonModuleComp_1.smc.account.AccountModel.dressBoy : SingletonModuleComp_1.smc.account.AccountModel.dressGirl;
            var dressable = DataMgr_1.DataMgr.isDressable(currDress, this.decorateOwnedData.dressData);
            if (dressable) {
                if (this.decorateOwnedData.leftAmount <= 0) {
                    return;
                }
                //准备替换上衣 如果当前没有穿裤子（这时上衣一定是连衣裙），则不能把上衣换成非连衣裙，提示要先穿上裤子
                if (this.decorateOwnedData.dressData.dressType == 4 && this.decorateOwnedData.dressData.Frock != 1) {
                    var dressId = 0;
                    if (DataMgr_1.DataMgr.currDressSex == DataObject_1.RoleMale.boy) {
                        dressId = SingletonModuleComp_1.smc.account.AccountModel.dressBoy[5];
                    }
                    else {
                        dressId = SingletonModuleComp_1.smc.account.AccountModel.dressGirl[5];
                    }
                    if (dressId == 0) {
                        //提示先穿上裤子或者上衣更换为连衣裙
                        Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("dress.dressFroke"));
                        return;
                    }
                }
                //装扮
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ChangeDress, { "data": this.decorateOwnedData.dressData, "clear": false });
                //如果当前位置有装扮，先顶下去
                if (currDress[this.decorateOwnedData.dressData.dressType - 1] > 0) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.BackToDressList, currDress[this.decorateOwnedData.dressData.dressType - 1]);
                }
                //新设置当前位置的装扮
                if (DataMgr_1.DataMgr.currDressSex == DataObject_1.RoleMale.boy) {
                    SingletonModuleComp_1.smc.account.AccountModel.dressBoy[this.decorateOwnedData.dressData.dressType - 1] = this.decorateOwnedData.dressData.id;
                }
                else {
                    SingletonModuleComp_1.smc.account.AccountModel.dressGirl[this.decorateOwnedData.dressData.dressType - 1] = this.decorateOwnedData.dressData.id;
                }
                //背包变化
                this.decorateOwnedData.lineupCount++;
                this.decorateOwnedData.leftAmount--;
                this.refreshAmont();
            }
            else {
                // 这个位置是同样的 (不可卸下类型：1.发型；3.眉毛；4.上衣；6.下衣；11.眼睛；12.嘴巴 
                // 当4为连衣裙切换为非连衣裙时装时，若此时无穿戴6，则不可切换并提示：切换此上衣需穿上裤子；)
                if ([1, 3, 4, 11, 12].indexOf(this.decorateOwnedData.dressData.dressType) >= 0) {
                    //不能卸下
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("dress.sameDress"));
                }
                else if (this.decorateOwnedData.dressData.dressType == 6) {
                    //当前准备卸下裤子，要求上衣4必须是连衣裙
                    var dressId = 0;
                    if (DataMgr_1.DataMgr.currDressSex == DataObject_1.RoleMale.boy) {
                        dressId = SingletonModuleComp_1.smc.account.AccountModel.dressBoy[3];
                    }
                    else {
                        dressId = SingletonModuleComp_1.smc.account.AccountModel.dressGirl[3];
                    }
                    var dressData = new DressData_1.DressData(dressId);
                    if (dressData.Frock == 1) {
                        //上衣连衣裙 可以卸下裤子
                        this.dressOff();
                    }
                    else {
                        //不能卸下
                        Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("dress.sameDress"));
                    }
                }
                else {
                    this.dressOff();
                }
            }
        };
        DressItem_1.prototype.dressOff = function () {
            if (!this.decorateOwnedData) {
                return;
            }
            //脱下装扮
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ChangeDress, { "data": this.decorateOwnedData.dressData, "clear": true });
            //重置
            if (DataMgr_1.DataMgr.currDressSex == DataObject_1.RoleMale.boy) {
                SingletonModuleComp_1.smc.account.AccountModel.dressBoy[this.decorateOwnedData.dressData.dressType - 1] = 0;
            }
            else {
                SingletonModuleComp_1.smc.account.AccountModel.dressGirl[this.decorateOwnedData.dressData.dressType - 1] = 0;
            }
            //背包变化
            this.decorateOwnedData.lineupCount--;
            this.decorateOwnedData.leftAmount++;
            this.refreshAmont();
        };
        DressItem_1.prototype.onLongPressThis = function (event) {
            if (this.decorateOwnedData) {
                var touchPos = event.getUILocation();
                var dropData = DropMgr_1.DropMgr.getDropInfo(DataObject_1.DropType.Dress, this.decorateOwnedData.dressData.id, 0);
                var itemDetailsData = new DataObject_1.ItemDetailsData();
                itemDetailsData.dropData = dropData;
                itemDetailsData.touchPos = touchPos;
                if (this.decorateOwnedData.dressData.dressSuit > 0) {
                    //套装
                    DataMgr_1.DataMgr.OpenItemDetails(itemDetailsData, GameUIConfig_1.UIID.ItemDetailsSuit);
                }
                else {
                    //普通
                    DataMgr_1.DataMgr.OpenItemDetails(itemDetailsData, GameUIConfig_1.UIID.ItemDetailsDecorate);
                }
            }
        };
        DressItem_1.prototype.onLongPressEndThis = function (event) {
            DataMgr_1.DataMgr.CloseItemDetails();
        };
        return DressItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "DressItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DressItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DressItem = _classThis;
}();
exports.DressItem = DressItem;
