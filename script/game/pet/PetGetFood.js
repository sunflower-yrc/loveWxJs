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
exports.PetGetFood = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GlobalData_1 = require("../common/tableData/GlobalData");
var StoryData_1 = require("../common/tableData/StoryData");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var PetGetFood = function () {
    var _classDecorators = [ccclass('PetGetFood')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _skinAni_decorators;
    var _skinAni_initializers = [];
    var _spinLock_decorators;
    var _spinLock_initializers = [];
    var PetGetFood = _classThis = /** @class */ (function (_super) {
        __extends(PetGetFood_1, _super);
        function PetGetFood_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.serverData = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.getType = 1;
            _this.ruleItems = [];
            _this.skinAni = __runInitializers(_this, _skinAni_initializers, void 0);
            _this.spinLock = __runInitializers(_this, _spinLock_initializers, null);
            return _this;
        }
        PetGetFood_1.prototype.onAdded = function (data) {
            this.serverData = data;
            this.refresh();
        };
        PetGetFood_1.prototype.refresh = function () {
            var config = StringUtil_1.StringUtil.stringToArray5(new GlobalData_1.GlobalData(35).value);
            if (SingletonModuleComp_1.smc.account.AccountModel.chapter >= Number(config[0]) && SingletonModuleComp_1.smc.account.AccountModel.chapter < Number(config[1])) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/topBg", this.node, true);
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/topBg/tips", this.node, Oops_1.oops.language.getLangByID("pet.rateTipsDesc", new StoryData_1.StoryData(SingletonModuleComp_1.smc.account.AccountModel.chapter + 1).getTitle()));
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/topBg", this.node, false);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/timesTips", this.node, Oops_1.oops.language.getLangByID("pet.remainTimes", this.serverData.residueFreeCount));
            if (this.serverData.residueFreeCount <= 0) {
                this.getType = 2;
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/btn_confirm/cost", this.node, true);
                var str = StringUtil_1.StringUtil.stringToArray5(this.serverData.expend);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("root/bg/btn_confirm/cost/ic", this.node, GameResPath_1.GameResPath.getDropIconsPath(Number(str[0])), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/btn_confirm/cost/numLabel", this.node, str[2]);
            }
            else {
                this.getType = 1;
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/btn_confirm/cost", this.node, false);
            }
            this.ruleItems = ViewUtil_1.ViewUtil.findChildByName("ruleNode/root/bg/content", this.node).children;
            var baseRate = 0;
            for (var i = 0; i < this.serverData.foodsProb.length; i++) {
                baseRate += Number(this.serverData.foodsProb[i]);
            }
            for (var i = 0; i < this.ruleItems.length; i++) {
                ViewUtil_1.ViewUtil.setLabelStringByName("desc", this.ruleItems[i], Oops_1.oops.language.getLangByID("pet.ruleDesc", (i + 1), this.serverData.foodsProb[i] * 100 / baseRate));
            }
        };
        PetGetFood_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetGetFood);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePetEat);
        };
        PetGetFood_1.prototype.btn_go = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            DataMgr_1.DataMgr.gotoFunction([GameUIConfig_1.UIID.PetGetFood], "6-0-0");
        };
        PetGetFood_1.prototype.btn_get = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.petGetFoods(this.getType, function (data) {
                var dData = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dData;
                dropInfo.dropFrom = DataObject_1.DropFrom.PetGetFood;
                SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                //更新数据
                DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                _this.onAdded(data.info);
                var track = _this.skinAni.setAnimation(0, "rank", false);
                _this.spinLock.active = true;
                _this.skinAni.setSkin(dData[0].grade.toString());
                _this.skinAni.setTrackCompleteListener(track, function () {
                    _this.skinAni.setAnimation(0, "idle", true);
                    _this.spinLock.active = false;
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                });
            }, function (data) {
                Oops_1.oops.gui.toast(data.msg);
            });
        };
        PetGetFood_1.prototype.btn_rule = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            ViewUtil_1.ViewUtil.setNodeActiveByName("ruleNode", this.node, true);
            ViewUtil_1.ViewUtil.findChildByName("ruleNode", this.node).getComponent(cc_1.Animation).play();
        };
        PetGetFood_1.prototype.btn_closeRule = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            ViewUtil_1.ViewUtil.setNodeActiveByName("ruleNode", this.node, false);
        };
        PetGetFood_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.PetGetFood);
        };
        return PetGetFood_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PetGetFood");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _skinAni_decorators = [property(cc_1.sp.Skeleton)];
        _spinLock_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _skinAni_decorators, { kind: "field", name: "skinAni", static: false, private: false, access: { has: function (obj) { return "skinAni" in obj; }, get: function (obj) { return obj.skinAni; }, set: function (obj, value) { obj.skinAni = value; } }, metadata: _metadata }, _skinAni_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _spinLock_decorators, { kind: "field", name: "spinLock", static: false, private: false, access: { has: function (obj) { return "spinLock" in obj; }, get: function (obj) { return obj.spinLock; }, set: function (obj, value) { obj.spinLock = value; } }, metadata: _metadata }, _spinLock_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PetGetFood = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetGetFood = _classThis;
}();
exports.PetGetFood = PetGetFood;
