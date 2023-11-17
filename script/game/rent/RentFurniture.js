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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentFurniture = void 0;
var cc_1 = require("cc");
var DropMgr_1 = require("../mgr/DropMgr");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var DataObject_1 = require("../tools/DataObject");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var FurnitureData_1 = require("../common/tableData/FurnitureData");
var HttpPost_1 = require("../tools/HttpPost");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DressData_1 = require("../common/tableData/DressData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var RentFurniture = function () {
    var _classDecorators = [ccclass('RentFurniture')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _addBtn_decorators;
    var _addBtn_initializers = [];
    var RentFurniture = _classThis = /** @class */ (function (_super) {
        __extends(RentFurniture_1, _super);
        function RentFurniture_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.data = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.addBtn = __runInitializers(_this, _addBtn_initializers, null);
            _this.hireId = null;
            _this.dropType = null;
            _this.statusType = null;
            return _this;
        }
        RentFurniture_1.prototype.start = function () {
        };
        RentFurniture_1.prototype.update = function (deltaTime) {
        };
        RentFurniture_1.prototype.init = function (data, hireId, statusType) {
            this.data = data;
            this.hireId = hireId;
            this.statusType = statusType;
            var itemDropData = DropMgr_1.DropMgr.getSingleDropData(data.itemType, data.itemId, 1);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.node, itemDropData[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("haveNode/num", this.node, "1");
            ViewUtil_1.ViewUtil.setLabelStringByName("haveNode/name", this.node, itemDropData[0].name);
            this.dropType = itemDropData[0].type;
            if (data.validCount > 0 && this.statusType == DataObject_1.RentStatus.wait) {
                ViewUtil_1.ViewUtil.setSpriteGray(this.addBtn, false);
            }
            else {
                ViewUtil_1.ViewUtil.setSpriteGray(this.addBtn, true);
            }
            if (data.status == 2) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("have", this.node, true);
                this.addBtn.active = false;
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("have", this.node, false);
                this.addBtn.active = true;
            }
        };
        //上阵下阵
        RentFurniture_1.prototype.addRemoveFurniture = function () {
            if (this.statusType == DataObject_1.RentStatus.wait) {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                if (this.data.validCount <= 0 && this.data.status != 2) {
                    // oops.gui.toast(oops.language.getLangByID("rent.rentItemNot"));
                    var type = void 0;
                    if (this.dropType == DataObject_1.DropType.Furniture) {
                        type = 3;
                    }
                    else {
                        type = 4;
                    }
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.JumpTip, { type: type, closeView: GameUIConfig_1.UIID.Rent });
                    return;
                }
                HttpPost_1.HttpPost.instance.hireUp(this.hireId, this.data.itemId, this.data.status == 2 ? 1 : 2, function (data) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateRentList, data);
                });
            }
        };
        RentFurniture_1.prototype.setRentFurniture = function () {
            var _a, _b;
            if (this.data.itemType == DataObject_1.DropType.Furniture) {
                //家具
                var data = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData;
                var furnitureData = new FurnitureData_1.FurnitureData(this.data.itemId);
                var subData = (_a = data.get(furnitureData.valueType)) === null || _a === void 0 ? void 0 : _a.get(furnitureData.furnitureType);
                if (subData && subData.length > 0) {
                    for (var _i = 0, subData_1 = subData; _i < subData_1.length; _i++) {
                        var i = subData_1[_i];
                        if (i.furnitureData.id == this.data.itemId) {
                            if (this.data.status == 2) {
                                i.leftAmount++;
                                i.lineupCount--;
                            }
                            else {
                                i.leftAmount--;
                                i.lineupCount++;
                            }
                            break;
                        }
                    }
                }
            }
            else if (this.data.itemType == DataObject_1.DropType.Dress) {
                //装饰
                var data = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData;
                var dressData = new DressData_1.DressData(parseInt(this.data.itemId));
                var subData = (_b = data.get(dressData.classify)) === null || _b === void 0 ? void 0 : _b.get(dressData.dressType);
                if (subData && subData.length > 0) {
                    for (var _c = 0, subData_2 = subData; _c < subData_2.length; _c++) {
                        var i = subData_2[_c];
                        if (i.dressData.id == this.data.itemId) {
                            if (this.data.status == 2) {
                                i.leftAmount++;
                                i.lineupCount--;
                            }
                            else {
                                i.leftAmount--;
                                i.lineupCount++;
                            }
                            break;
                        }
                    }
                }
            }
        };
        return RentFurniture_1;
    }(_classSuper));
    __setFunctionName(_classThis, "RentFurniture");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _addBtn_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _addBtn_decorators, { kind: "field", name: "addBtn", static: false, private: false, access: { has: function (obj) { return "addBtn" in obj; }, get: function (obj) { return obj.addBtn; }, set: function (obj, value) { obj.addBtn = value; } }, metadata: _metadata }, _addBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RentFurniture = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RentFurniture = _classThis;
}();
exports.RentFurniture = RentFurniture;
