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
exports.PetChoose = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var Pet_1 = require("./Pet");
var PetExcelData_1 = require("./PetExcelData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var PetChoose = function () {
    var _classDecorators = [ccclass('PetChoose')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _pet1_decorators;
    var _pet1_initializers = [];
    var _pet2_decorators;
    var _pet2_initializers = [];
    var _toggle1_decorators;
    var _toggle1_initializers = [];
    var _toggle2_decorators;
    var _toggle2_initializers = [];
    var PetChoose = _classThis = /** @class */ (function (_super) {
        __extends(PetChoose_1, _super);
        function PetChoose_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pet1 = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _pet1_initializers, void 0));
            _this.pet2 = __runInitializers(_this, _pet2_initializers, void 0);
            _this.toggle1 = __runInitializers(_this, _toggle1_initializers, void 0);
            _this.toggle2 = __runInitializers(_this, _toggle2_initializers, void 0);
            _this.currSelected = 0;
            return _this;
            // protected onDestroy(): void {
            //     oops.gui.release(UIID.PetChoose);
            // }
        }
        PetChoose_1.prototype.onAdded = function () {
        };
        PetChoose_1.prototype.start = function () {
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/confirmTips", this.node, "");
        };
        PetChoose_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetChoose);
        };
        PetChoose_1.prototype.btn_toggle1Click = function () {
            var _this = this;
            var _a, _b, _c;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.pet1.node.active = true;
            this.pet2.node.active = false;
            this.toggle1.active = false;
            this.toggle2.active = true;
            this.pet1.initSpin(1, (_a = PetExcelData_1.PetExcelData.getAllData().find(function (x) { return x.id == 1; })) === null || _a === void 0 ? void 0 : _a.firstSkin, (_b = PetExcelData_1.PetExcelData.getAllData().find(function (x) { return x.id == 1; })) === null || _b === void 0 ? void 0 : _b.showAm.toString());
            this.currSelected = 1;
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/confirmTips", this.node, Oops_1.oops.language.getLangByID("pet.confirmTips", (_c = PetExcelData_1.PetExcelData.getAllData().find(function (x) { return x.id == _this.currSelected; })) === null || _c === void 0 ? void 0 : _c.getName()));
        };
        PetChoose_1.prototype.btn_toggle2Click = function () {
            var _this = this;
            var _a, _b, _c;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.pet1.node.active = false;
            this.pet2.node.active = true;
            this.toggle1.active = true;
            this.toggle2.active = false;
            this.pet2.initSpin(2, (_a = PetExcelData_1.PetExcelData.getAllData().find(function (x) { return x.id == 2; })) === null || _a === void 0 ? void 0 : _a.firstSkin, (_b = PetExcelData_1.PetExcelData.getAllData().find(function (x) { return x.id == 2; })) === null || _b === void 0 ? void 0 : _b.showAm.toString());
            this.currSelected = 2;
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/confirmTips", this.node, Oops_1.oops.language.getLangByID("pet.confirmTips", (_c = PetExcelData_1.PetExcelData.getAllData().find(function (x) { return x.id == _this.currSelected; })) === null || _c === void 0 ? void 0 : _c.getName()));
        };
        PetChoose_1.prototype.btn_choose = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.currSelected == 0)
                return;
            HttpPost_1.HttpPost.instance.getNewPet(this.currSelected, function (data) {
                SingletonModuleComp_1.smc.account.AccountModel.pet = data.list;
                HttpPost_1.HttpPost.instance.petList(function (data) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetMain, data);
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetChoose);
                });
            });
        };
        return PetChoose_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PetChoose");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _pet1_decorators = [property(Pet_1.Pet)];
        _pet2_decorators = [property(Pet_1.Pet)];
        _toggle1_decorators = [property(cc_1.Node)];
        _toggle2_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _pet1_decorators, { kind: "field", name: "pet1", static: false, private: false, access: { has: function (obj) { return "pet1" in obj; }, get: function (obj) { return obj.pet1; }, set: function (obj, value) { obj.pet1 = value; } }, metadata: _metadata }, _pet1_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pet2_decorators, { kind: "field", name: "pet2", static: false, private: false, access: { has: function (obj) { return "pet2" in obj; }, get: function (obj) { return obj.pet2; }, set: function (obj, value) { obj.pet2 = value; } }, metadata: _metadata }, _pet2_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggle1_decorators, { kind: "field", name: "toggle1", static: false, private: false, access: { has: function (obj) { return "toggle1" in obj; }, get: function (obj) { return obj.toggle1; }, set: function (obj, value) { obj.toggle1 = value; } }, metadata: _metadata }, _toggle1_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggle2_decorators, { kind: "field", name: "toggle2", static: false, private: false, access: { has: function (obj) { return "toggle2" in obj; }, get: function (obj) { return obj.toggle2; }, set: function (obj, value) { obj.toggle2 = value; } }, metadata: _metadata }, _toggle2_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PetChoose = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetChoose = _classThis;
}();
exports.PetChoose = PetChoose;
