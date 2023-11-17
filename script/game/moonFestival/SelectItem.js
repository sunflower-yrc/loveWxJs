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
exports.SelectItem = void 0;
var cc_1 = require("cc");
var List_1 = require("../tools/List");
var SelectRewardItem_1 = require("./SelectRewardItem");
var SelectRewardData_1 = require("../common/tableData/SelectRewardData");
var DropMgr_1 = require("../mgr/DropMgr");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataObject_1 = require("../tools/DataObject");
var PetRewardData_1 = require("../pet/PetRewardData");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var SelectItem = function () {
    var _classDecorators = [ccclass('SelectItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _list_decorators;
    var _list_initializers = [];
    var SelectItem = _classThis = /** @class */ (function (_super) {
        __extends(SelectItem_1, _super);
        function SelectItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.list = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _list_initializers, null));
            _this.listData = [];
            _this.id = null;
            return _this;
        }
        SelectItem_1.prototype.start = function () {
            var selectData = new SelectRewardData_1.SelectRewardData(this.data.id);
            this.listData = DropMgr_1.DropMgr.getDropData(selectData.reward);
            this.list.numItems = this.listData.length;
            // this.list.numItems = 10;
        };
        SelectItem_1.prototype.onAdded = function (data) {
            this.data = data;
        };
        SelectItem_1.prototype.onRenderList = function (item, index) {
            var _a;
            (_a = item.getComponent(SelectRewardItem_1.SelectRewardItem)) === null || _a === void 0 ? void 0 : _a.init(this.listData[index]);
        };
        SelectItem_1.prototype.choseReward = function (item, index) {
            this.id = index + 1;
        };
        SelectItem_1.prototype.getReward = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (!this.id) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("MoonFestival.selectItem"));
                return;
            }
            if (this.listData[this.id - 1].type == DataObject_1.DropType.PetSkin) {
                var petData = new PetRewardData_1.PetRewardData(this.listData[this.id - 1].dropId);
                if (!this.isHavePet(petData.petId)) {
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.notPet"));
                    return;
                }
            }
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RamdomSelect, { id: this.id, uId: this.data.uId, param: this.data.param });
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.SelectItem);
        };
        SelectItem_1.prototype.isHavePet = function (petId) {
            var pet = SingletonModuleComp_1.smc.account.AccountModel.pet;
            for (var i = 0; i < pet.length; i++) {
                if (pet[i].petId == petId) {
                    return true;
                }
            }
            return false;
        };
        SelectItem_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.SelectItem);
        };
        return SelectItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "SelectItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _list_decorators = [property(List_1.default)];
        __esDecorate(null, null, _list_decorators, { kind: "field", name: "list", static: false, private: false, access: { has: function (obj) { return "list" in obj; }, get: function (obj) { return obj.list; }, set: function (obj, value) { obj.list = value; } }, metadata: _metadata }, _list_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SelectItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SelectItem = _classThis;
}();
exports.SelectItem = SelectItem;
