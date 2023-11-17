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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecycleFurnitureItem = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var GameMgr_1 = require("../common/mgr/GameMgr");
var CostData_1 = require("../common/tableData/CostData");
var DressData_1 = require("../common/tableData/DressData");
var FurnitureData_1 = require("../common/tableData/FurnitureData");
var FurnitureItem_1 = require("../furniture/FurnitureItem");
var ButtonPlus_1 = require("../tools/ButtonPlus");
var DataObject_1 = require("../tools/DataObject");
var recycleMgr_1 = require("./recycleMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var RecycleFurnitureItem = function () {
    var _classDecorators = [ccclass('RecycleFurnitureItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = FurnitureItem_1.FurnitureItem;
    var RecycleFurnitureItem = _classThis = /** @class */ (function (_super) {
        __extends(RecycleFurnitureItem_1, _super);
        function RecycleFurnitureItem_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RecycleFurnitureItem_1.prototype.initData = function (data) {
            var _a, _b;
            this.decorateOwnedData = data;
            if (!recycleMgr_1.RecycleMgr.Instance.isFurniture) {
                if (((_a = this.decorateOwnedData) === null || _a === void 0 ? void 0 : _a.dressData) && !this.decorateOwnedData.dressData.grade) {
                    this.decorateOwnedData.dressData = new DressData_1.DressData(this.decorateOwnedData.dressData.id);
                }
                if (this.decorateOwnedData) {
                    //有值
                    ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath(this.decorateOwnedData.dressData.grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.node, GameResPath_1.GameResPath.getDressListIconsPath(this.decorateOwnedData.dressData.id.toString()), BundleConfig_1.default.instance.guiBundle.name);
                    // let isNew = DataMgr.getDecorateNewState(DropType.Dress, this.decorateOwnedData.dressData.id);
                    // this.refreshNewState(isNew);
                }
                else {
                    //空的
                    ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath("1"), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.clearSpriteFrameByName("icon", this.node);
                    ViewUtil_1.ViewUtil.setSpriteGray(this.node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("new", this.node, false);
                }
            }
            else {
                if (((_b = this.decorateOwnedData) === null || _b === void 0 ? void 0 : _b.furnitureData) && !this.decorateOwnedData.furnitureData.grade) {
                    this.decorateOwnedData.furnitureData = new FurnitureData_1.FurnitureData(this.decorateOwnedData.furnitureData.id);
                }
                if (this.decorateOwnedData) {
                    //有值
                    ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath(this.decorateOwnedData.furnitureData.grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.node, GameResPath_1.GameResPath.getFurnitureListIconsPath(this.decorateOwnedData.furnitureData.id.toString()), BundleConfig_1.default.instance.guiBundle.name);
                    // let isNew = DataMgr.getDecorateNewState(DropType.Furniture, this.decorateOwnedData.furnitureData.id);
                    // this.refreshNewState(isNew);
                }
                else {
                    //空的
                    ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath("1"), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setSpriteGray(this.node, false);
                    ViewUtil_1.ViewUtil.clearSpriteFrameByName("icon", this.node);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("new", this.node, false);
                }
            }
            if (this.decorateOwnedData) {
                this.refreshAmont();
                //绑定明细
                var btnCom = this.getComponent(ButtonPlus_1.default);
                if (btnCom) {
                    btnCom.addLongClick(this.onLongPressThis.bind(this), this.onLongPressEndThis.bind(this), this);
                }
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("amount", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lineup", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lineupDress", this.node, false);
            }
        };
        /**
         * 刷新家具摆放和剩余数量
         */
        RecycleFurnitureItem_1.prototype.refreshAmont = function () {
            if (this.decorateOwnedData) {
                // let choosedNum = RecycleMgr.Instance.chooseList.get(this.decorateOwnedData.furnitureData.id)?.num;
                // if (!choosedNum) {
                //     choosedNum = "0";
                // }
                ViewUtil_1.ViewUtil.setNodeActiveByName("amount", this.node, true);
                ViewUtil_1.ViewUtil.setLabelStringByName("amount", this.node, (this.decorateOwnedData.leftAmount).toString());
                var gray = (this.decorateOwnedData.leftAmount + this.decorateOwnedData.lineupCount) <= 1 || this.decorateOwnedData.leftAmount == 0;
                ViewUtil_1.ViewUtil.setSpriteGray(this.node, gray);
                ViewUtil_1.ViewUtil.setSpriteGrayByName("icon", this.node, gray);
                var isLineup = this.decorateOwnedData.lineupCount > 0;
                if (recycleMgr_1.RecycleMgr.Instance.isFurniture) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("lineup", this.node, isLineup);
                    if (isLineup) {
                        ViewUtil_1.ViewUtil.setLabelStringByName("lineup/count", this.node, this.decorateOwnedData.lineupCount.toString());
                    }
                }
                else {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("lineupDress", this.node, isLineup);
                }
            }
        };
        RecycleFurnitureItem_1.prototype.btn_click = function () {
            return __awaiter(this, void 0, void 0, function () {
                var itemData, data;
                return __generator(this, function (_a) {
                    Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                    if (!this.decorateOwnedData) {
                        return [2 /*return*/];
                    }
                    if (this.decorateOwnedData.leftAmount <= 0) {
                        return [2 /*return*/];
                    }
                    if (GameMgr_1.GameMgr.Instance.lockSpawnFurniture) {
                        return [2 /*return*/];
                    }
                    if (this.decorateOwnedData.leftAmount + this.decorateOwnedData.lineupCount <= 1) {
                        Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("recycle.noExtra"));
                        return [2 /*return*/];
                    }
                    GameMgr_1.GameMgr.Instance.lockSpawnFurniture = true;
                    this.decorateOwnedData.leftAmount--;
                    // this.chooeseNum++;
                    this.refreshAmont();
                    itemData = recycleMgr_1.RecycleMgr.Instance.isFurniture ? this.decorateOwnedData.furnitureData : this.decorateOwnedData.dressData;
                    Oops_1.oops.log.trace("RecycleFurnitureItem 加锁" + itemData.id);
                    data = {
                        id: itemData.id,
                        itemName: itemData.getName(),
                        num: "1",
                        price: CostData_1.CostData.getRecoveryGold(itemData.id) + ""
                    };
                    recycleMgr_1.RecycleMgr.Instance.addItem(itemData.id, data);
                    GameMgr_1.GameMgr.Instance.lockSpawnFurniture = false;
                    Oops_1.oops.log.trace("RecycleFurnitureItem 解锁" + data.id);
                    return [2 /*return*/];
                });
            });
        };
        return RecycleFurnitureItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "RecycleFurnitureItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecycleFurnitureItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecycleFurnitureItem = _classThis;
}();
exports.RecycleFurnitureItem = RecycleFurnitureItem;
