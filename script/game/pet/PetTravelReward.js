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
exports.PetTravelReward = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DropMgr_1 = require("../mgr/DropMgr");
var DataObject_1 = require("../tools/DataObject");
var Pet_1 = require("./Pet");
var PetRewardData_1 = require("./PetRewardData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var PetTravelReward = function () {
    var _classDecorators = [ccclass('PetTravelReward')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _pet_decorators;
    var _pet_initializers = [];
    var PetTravelReward = _classThis = /** @class */ (function (_super) {
        __extends(PetTravelReward_1, _super);
        function PetTravelReward_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.serverData = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.pet = __runInitializers(_this, _pet_initializers, void 0);
            _this.items = [];
            _this.isNew = false;
            return _this;
        }
        PetTravelReward_1.prototype.onAdded = function (data) {
            this.petData = data[0];
            this.serverData = data[1];
        };
        PetTravelReward_1.prototype.start = function () {
            this.items = ViewUtil_1.ViewUtil.findChildByName("root/bg/bottom/content", this.node).children;
            var dData = DropMgr_1.DropMgr.getDropData(this.serverData.reward);
            var rewardData = PetRewardData_1.PetRewardData.getAllData().find(function (x) { return x.id == dData[0].dropId; });
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("root/bg/showSp", this.node, GameResPath_1.GameResPath.getPetRewardIconsPath(rewardData.rewardRes), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/top/isSame", this.node, this.serverData.repeatTravelReward == 1);
            this.isNew = (this.serverData.repeatTravelReward != 1);
            if (dData[0].type == DataObject_1.DropType.PetCard) {
                this.pet.node.active = true;
                this.pet.node.setPosition(rewardData.getPicPosX(), rewardData.getPicPosY());
                this.pet.node.setScale(rewardData.getPicScaleX(), 1);
                this.pet.playAimFrame(rewardData.getPicId(), this.serverData.travel.skinId, rewardData.getPicActAniId(), rewardData.getPicFrame());
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/cangpinBg", this.node, false);
            }
            else {
                this.pet.node.active = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/cangpinBg", this.node, true);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/bottom/petName", this.node, this.petData.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/bottom/descLabel", this.node, PetRewardData_1.PetRewardData.getAllData().find(function (x) { return x.id == dData[0].dropId; }).getDesc1());
            ViewUtil_1.ViewUtil.findChildByName("root/bg/bottom/pet", this.node).getComponent(Pet_1.Pet).initSpin(this.petData.petId, this.petData.skin.useSkin);
            //刷新右下角奖励内容
            for (var i = 0; i < this.items.length; i++) {
                if (dData.length > i) {
                    this.items[i].active = true;
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.items[i], dData[i].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setLabelStringByName("name", this.items[i], dData[i].name);
                    ViewUtil_1.ViewUtil.setLabelStringByName("amount", this.items[i], dData[i].dropAmount.toString());
                }
                else {
                    this.items[i].active = false;
                }
            }
            ViewUtil_1.ViewUtil.setNodeActiveByName("same", this.items[0], this.serverData.repeatTravelReward == 1);
        };
        PetTravelReward_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetTravelReward);
            if (this.serverData.extraReward) {
                var dropDatas = DropMgr_1.DropMgr.getDropData(this.serverData.extraReward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
            }
            if (this.isNew)
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePetMain, 2);
        };
        PetTravelReward_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.PetTravelReward);
        };
        return PetTravelReward_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PetTravelReward");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _pet_decorators = [property(Pet_1.Pet)];
        __esDecorate(null, null, _pet_decorators, { kind: "field", name: "pet", static: false, private: false, access: { has: function (obj) { return "pet" in obj; }, get: function (obj) { return obj.pet; }, set: function (obj, value) { obj.pet = value; } }, metadata: _metadata }, _pet_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PetTravelReward = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetTravelReward = _classThis;
}();
exports.PetTravelReward = PetTravelReward;
