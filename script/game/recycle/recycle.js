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
exports.Recycle = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var DataManager_1 = require("../../Global/DataManager");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var recycleItem_1 = require("./recycleItem");
var recycleMgr_1 = require("./recycleMgr");
var Currency_1 = require("../home/Currency");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Recycle = function () {
    var _classDecorators = [ccclass('Recycle')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _buyPanal_decorators;
    var _buyPanal_initializers = [];
    var _sellBtnNode_decorators;
    var _sellBtnNode_initializers = [];
    var _sellPanalNode_decorators;
    var _sellPanalNode_initializers = [];
    var _sellItemsNode_decorators;
    var _sellItemsNode_initializers = [];
    var _currencyCoin_decorators;
    var _currencyCoin_initializers = [];
    var Recycle = _classThis = /** @class */ (function (_super) {
        __extends(Recycle_1, _super);
        function Recycle_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.buyPanal = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _buyPanal_initializers, null));
            _this.sellBtnNode = __runInitializers(_this, _sellBtnNode_initializers, null);
            _this.sellPanalNode = __runInitializers(_this, _sellPanalNode_initializers, null);
            _this.sellItemsNode = __runInitializers(_this, _sellItemsNode_initializers, null);
            _this.currencyCoin = __runInitializers(_this, _currencyCoin_initializers, null);
            _this.totalPrice = 0;
            return _this;
        }
        Recycle_1.prototype.onAdded = function (param) {
            switch (param) {
                case 1:
                    recycleMgr_1.RecycleMgr.Instance.isFurniture = true;
                    break;
                case 2:
                    recycleMgr_1.RecycleMgr.Instance.isFurniture = false;
                    break;
                default:
                    break;
            }
        };
        Recycle_1.prototype.start = function () {
            recycleMgr_1.RecycleMgr.Instance.recycle = this;
            recycleMgr_1.RecycleMgr.Instance.isRecycle = true;
            recycleMgr_1.RecycleMgr.Instance.reset();
            ViewUtil_1.ViewUtil.setLabelStringByName("totalNum", this.sellPanalNode, "0");
            ViewUtil_1.ViewUtil.setLabelStringByName("totalPrice", this.sellPanalNode, "0");
            ViewUtil_1.ViewUtil.setLabelStringByName("bill/title", this.node, Oops_1.oops.language.getLangByID("recycle." + (recycleMgr_1.RecycleMgr.Instance.isFurniture ? "title" : "titleDress")));
        };
        Recycle_1.prototype.onDestroy = function () {
            recycleMgr_1.RecycleMgr.Instance.isRecycle = false;
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Recycle);
        };
        /**
         * 卖
         */
        Recycle_1.prototype.SellBtn = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (recycleMgr_1.RecycleMgr.Instance.chooseList.size > 0) {
                this.buyPanal.active = true;
                ViewUtil_1.ViewUtil.setLabelStringByName("totalNum", this.buyPanal, this.totalPrice + "");
            }
        };
        /**关闭界面 */
        Recycle_1.prototype.closeBtn = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            //复原数据 
            DataManager_1.default.Instance.recoveryDecorateOwnedData(recycleMgr_1.RecycleMgr.Instance.isFurniture ?
                DataManager_1.default.Instance.feedbackDataFurnitureOwnedData :
                DataManager_1.default.Instance.feedbackDataDressOwnedData, recycleMgr_1.RecycleMgr.Instance.recycleFurniture.decorateType);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Recycle);
        };
        Recycle_1.prototype.noBtn = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.buyPanal.active = false;
        };
        Recycle_1.prototype.yesBtn = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var data = {};
            recycleMgr_1.RecycleMgr.Instance.chooseList.forEach(function (item, id) {
                data[id + ""] = item.num + "";
            });
            var completeFunc = function (data) {
                // oops.todo(data);
                SingletonModuleComp_1.smc.account.AccountModel.vm.coin = data.coin;
                _this.buyPanal.active = false;
                if (recycleMgr_1.RecycleMgr.Instance.isFurniture) {
                    DataManager_1.default.Instance.feedbackDataFurnitureOwnedData = DataManager_1.default.Instance.backupDecorateOwnedData(SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData);
                }
                else {
                    DataManager_1.default.Instance.feedbackDataDressOwnedData = DataManager_1.default.Instance.backupDecorateOwnedData(SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData);
                }
                recycleMgr_1.RecycleMgr.Instance.reset();
                //更新数据
                DataMgr_1.DataMgr.updateUserData(null, null, data.taskList);
            };
            if (recycleMgr_1.RecycleMgr.Instance.isFurniture) {
                HttpPost_1.HttpPost.instance.recycleFurniture(data, recycleMgr_1.RecycleMgr.Instance.eventId, completeFunc);
            }
            else {
                HttpPost_1.HttpPost.instance.recycleDress(data, recycleMgr_1.RecycleMgr.Instance.eventId, completeFunc);
            }
        };
        /**刷新数据 */
        Recycle_1.prototype.freshItemList = function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var childs, totalNum, totalPrice, idx, _i, _b, _c, id, data, btnComp, node, i;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            childs = this.sellItemsNode.children;
                            totalNum = 0;
                            totalPrice = 0;
                            idx = 0;
                            _i = 0, _b = recycleMgr_1.RecycleMgr.Instance.chooseList;
                            _d.label = 1;
                        case 1:
                            if (!(_i < _b.length)) return [3 /*break*/, 6];
                            _c = _b[_i], id = _c[0], data = _c[1];
                            totalNum += parseInt(data.num);
                            totalPrice += parseInt(data.price);
                            if (!(idx < childs.length)) return [3 /*break*/, 2];
                            btnComp = childs[idx].getComponent(recycleItem_1.RecycleItem);
                            btnComp && btnComp.init(data);
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getRecycleItemPath(), BundleConfig_1.default.instance.guiBundle.name)];
                        case 3:
                            node = _d.sent();
                            (_a = node.getComponent(recycleItem_1.RecycleItem)) === null || _a === void 0 ? void 0 : _a.init(data);
                            node.parent = this.sellItemsNode;
                            _d.label = 4;
                        case 4:
                            idx++;
                            _d.label = 5;
                        case 5:
                            _i++;
                            return [3 /*break*/, 1];
                        case 6:
                            // 删除多余的按钮
                            for (i = childs.length - 1; i >= recycleMgr_1.RecycleMgr.Instance.chooseList.size; i--) {
                                childs[i].destroy();
                            }
                            ViewUtil_1.ViewUtil.setLabelStringByName("totalNum", this.sellPanalNode, totalNum + "");
                            ViewUtil_1.ViewUtil.setLabelStringByName("totalPrice", this.sellPanalNode, totalPrice + "");
                            this.totalPrice = totalPrice;
                            return [2 /*return*/];
                    }
                });
            });
        };
        Recycle_1.prototype.btn_add = function (event, data) {
            this.currencyCoin.btn_add(event, data);
            this.closeBtn();
        };
        return Recycle_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Recycle");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _buyPanal_decorators = [property(cc_1.Node)];
        _sellBtnNode_decorators = [property(cc_1.Node)];
        _sellPanalNode_decorators = [property(cc_1.Node)];
        _sellItemsNode_decorators = [property(cc_1.Node)];
        _currencyCoin_decorators = [property(Currency_1.Currency)];
        __esDecorate(null, null, _buyPanal_decorators, { kind: "field", name: "buyPanal", static: false, private: false, access: { has: function (obj) { return "buyPanal" in obj; }, get: function (obj) { return obj.buyPanal; }, set: function (obj, value) { obj.buyPanal = value; } }, metadata: _metadata }, _buyPanal_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sellBtnNode_decorators, { kind: "field", name: "sellBtnNode", static: false, private: false, access: { has: function (obj) { return "sellBtnNode" in obj; }, get: function (obj) { return obj.sellBtnNode; }, set: function (obj, value) { obj.sellBtnNode = value; } }, metadata: _metadata }, _sellBtnNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sellPanalNode_decorators, { kind: "field", name: "sellPanalNode", static: false, private: false, access: { has: function (obj) { return "sellPanalNode" in obj; }, get: function (obj) { return obj.sellPanalNode; }, set: function (obj, value) { obj.sellPanalNode = value; } }, metadata: _metadata }, _sellPanalNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sellItemsNode_decorators, { kind: "field", name: "sellItemsNode", static: false, private: false, access: { has: function (obj) { return "sellItemsNode" in obj; }, get: function (obj) { return obj.sellItemsNode; }, set: function (obj, value) { obj.sellItemsNode = value; } }, metadata: _metadata }, _sellItemsNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _currencyCoin_decorators, { kind: "field", name: "currencyCoin", static: false, private: false, access: { has: function (obj) { return "currencyCoin" in obj; }, get: function (obj) { return obj.currencyCoin; }, set: function (obj, value) { obj.currencyCoin = value; } }, metadata: _metadata }, _currencyCoin_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Recycle = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Recycle = _classThis;
}();
exports.Recycle = Recycle;
