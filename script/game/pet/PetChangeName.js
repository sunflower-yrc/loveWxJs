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
exports.PetChangeName = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GlobalData_1 = require("../common/tableData/GlobalData");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var Pet_1 = require("./Pet");
var PetExcelData_1 = require("./PetExcelData");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var PetChangeName = function () {
    var _classDecorators = [ccclass('PetChangeName')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _inputBox_decorators;
    var _inputBox_initializers = [];
    var PetChangeName = _classThis = /** @class */ (function (_super) {
        __extends(PetChangeName_1, _super);
        function PetChangeName_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.serverData = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.inputBox = __runInitializers(_this, _inputBox_initializers, void 0);
            return _this;
        }
        PetChangeName_1.prototype.onAdded = function (data) {
            this.serverData = data;
        };
        PetChangeName_1.prototype.start = function () {
            var _this = this;
            var _a;
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/timeBg/Label", this.node, Oops_1.oops.language.getLangByID("pet.getTime", this.serverData.createdTime));
            (_a = ViewUtil_1.ViewUtil.findChildByName("root/bg/pet", this.node).getComponent(Pet_1.Pet)) === null || _a === void 0 ? void 0 : _a.initSpin(this.serverData.petId, this.serverData.skin.useSkin, PetExcelData_1.PetExcelData.getAllData().find(function (x) { return x.id == _this.serverData.petId; }).getAwaitActName());
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/btn_onekeyclaim/numLabel", this.node, "x" + new GlobalData_1.GlobalData(12).value);
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/btn_onekeyclaim", this.node, this.serverData.change_name > 0);
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/btn_free", this.node, this.serverData.change_name <= 0);
        };
        PetChangeName_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetChangeName);
        };
        PetChangeName_1.prototype.btn_confirm = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.inputBox.string != "") {
                if (SingletonModuleComp_1.smc.account.AccountModel.vm.jewel < Number(new GlobalData_1.GlobalData(12).value)) {
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.notEnoughJewels"));
                    return;
                }
                HttpPost_1.HttpPost.instance.petChangeName(this.serverData.petId, this.inputBox.string, function (data) {
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("pet.changeNameSuccess"));
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetChangeName);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePetMain);
                    SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                }, function (data) {
                    Oops_1.oops.gui.toast(data.msg);
                });
            }
        };
        PetChangeName_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.PetChangeName);
        };
        return PetChangeName_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PetChangeName");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _inputBox_decorators = [property(cc_1.EditBox)];
        __esDecorate(null, null, _inputBox_decorators, { kind: "field", name: "inputBox", static: false, private: false, access: { has: function (obj) { return "inputBox" in obj; }, get: function (obj) { return obj.inputBox; }, set: function (obj, value) { obj.inputBox = value; } }, metadata: _metadata }, _inputBox_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PetChangeName = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetChangeName = _classThis;
}();
exports.PetChangeName = PetChangeName;
