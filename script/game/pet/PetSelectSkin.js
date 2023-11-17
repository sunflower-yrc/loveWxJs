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
exports.PetSelectSkin = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var List_1 = require("../tools/List");
var Pet_1 = require("./Pet");
var PetExcelData_1 = require("./PetExcelData");
var PetRewardData_1 = require("./PetRewardData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var PetSelectSkin = function () {
    var _classDecorators = [ccclass('PetSelectSkin')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _selected_decorators;
    var _selected_initializers = [];
    var _memberList_decorators;
    var _memberList_initializers = [];
    var PetSelectSkin = _classThis = /** @class */ (function (_super) {
        __extends(PetSelectSkin_1, _super);
        function PetSelectSkin_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.serverData = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.currSelected = 0;
            _this.selected = __runInitializers(_this, _selected_initializers, void 0);
            _this.memberList = __runInitializers(_this, _memberList_initializers, null);
            return _this;
        }
        PetSelectSkin_1.prototype.onAdded = function (data) {
            var _this = this;
            this.serverData = data;
            this.petData = PetExcelData_1.PetExcelData.getAllData().find(function (x) { return x.id == _this.serverData.petId; });
        };
        PetSelectSkin_1.prototype.start = function () {
            this.memberList.numItems = this.petData.allSkin.length;
        };
        PetSelectSkin_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetSelectSkin);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePetMain);
        };
        PetSelectSkin_1.prototype.btn_choose = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.petSetSkin(this.serverData.petId, this.petData.allSkin[this.currSelected], function (data) {
                SingletonModuleComp_1.smc.account.AccountModel.pet.find(function (x) { return x.petId == _this.serverData.petId; }).useSkinId = _this.petData.allSkin[_this.currSelected];
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetSelectSkin);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePetMain);
            }, function (data) {
                Oops_1.oops.gui.toast(data.msg);
            });
        };
        PetSelectSkin_1.prototype.onMembersListRender = function (item, idx) {
            var _this = this;
            if (item) {
                var reward = PetRewardData_1.PetRewardData.getAllData().find(function (x) { return x.id == Number(_this.petData.allSkin[idx]); });
                var pet = item.getComponentInChildren(Pet_1.Pet);
                pet.node.setPosition(pet.node.position.x, this.petData.showPos, pet.node.position.z);
                pet.initSpin(this.serverData.petId, this.petData.allSkin[idx].toString());
                ViewUtil_1.ViewUtil.setLabelStringByName("grade/name", item, reward.getName());
                if (this.serverData.skin.skinList.indexOf(Number(this.petData.allSkin[idx])) == -1) {
                    ViewUtil_1.ViewUtil.setLabelStringByName("source", item, reward.getDesc1());
                    ViewUtil_1.ViewUtil.setNodeActiveByName("using", item, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("getting", item, false);
                }
                else {
                    ViewUtil_1.ViewUtil.setLabelStringByName("source", item, "");
                    if (this.serverData.skin.useSkin == Number(this.petData.allSkin[idx])) {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("using", item, true);
                        ViewUtil_1.ViewUtil.setNodeActiveByName("getting", item, false);
                    }
                    else {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("using", item, false);
                        ViewUtil_1.ViewUtil.setNodeActiveByName("getting", item, true);
                    }
                }
            }
        };
        PetSelectSkin_1.prototype.onListSelected = function (item, selectedId, lastSelectedId, val, param) {
            if (!item)
                return;
            var selectIndex = selectedId;
            if (this.currSelected == selectIndex) {
                return;
            }
            this.currSelected = selectIndex;
        };
        PetSelectSkin_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.PetSelectSkin);
        };
        return PetSelectSkin_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PetSelectSkin");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _selected_decorators = [property(cc_1.Node)];
        _memberList_decorators = [property({ type: List_1.default })];
        __esDecorate(null, null, _selected_decorators, { kind: "field", name: "selected", static: false, private: false, access: { has: function (obj) { return "selected" in obj; }, get: function (obj) { return obj.selected; }, set: function (obj, value) { obj.selected = value; } }, metadata: _metadata }, _selected_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _memberList_decorators, { kind: "field", name: "memberList", static: false, private: false, access: { has: function (obj) { return "memberList" in obj; }, get: function (obj) { return obj.memberList; }, set: function (obj, value) { obj.memberList = value; } }, metadata: _metadata }, _memberList_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PetSelectSkin = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetSelectSkin = _classThis;
}();
exports.PetSelectSkin = PetSelectSkin;
