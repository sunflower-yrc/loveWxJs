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
exports.SurveyPop = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var Tablenpc_1 = require("../common/table/Tablenpc");
var GlobalData_1 = require("../common/tableData/GlobalData");
var Role_1 = require("../dress/Role");
var DropMgr_1 = require("../mgr/DropMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var SurveyPop = function () {
    var _classDecorators = [ccclass('SurveyPop')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _toggleContainer_decorators;
    var _toggleContainer_initializers = [];
    var _answerToggle_decorators;
    var _answerToggle_initializers = [];
    var SurveyPop = _classThis = /** @class */ (function (_super) {
        __extends(SurveyPop_1, _super);
        function SurveyPop_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.serverData = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.baseData = [];
            _this.curAnser = [];
            _this.role = __runInitializers(_this, _role_initializers, null);
            _this.toggleContainer = __runInitializers(_this, _toggleContainer_initializers, void 0);
            _this.answerToggle = __runInitializers(_this, _answerToggle_initializers, []);
            _this.answerNode = [];
            return _this;
        }
        SurveyPop_1.prototype.onAdded = function (param) {
            this.serverData = param;
            this.baseData = param.questionnaireConfig;
            this.answerNode = ViewUtil_1.ViewUtil.findChildByName("root/bg/ToggleGroup", this.node).children;
            this.answerToggle = this.toggleContainer.getComponentsInChildren(cc_1.Toggle);
            var npcTb = new Tablenpc_1.Tablenpc();
            npcTb.init(parseInt(new GlobalData_1.GlobalData(19).value));
            this.role.showSuitSkin(npcTb.npcDress);
            //刷新奖励
            //图标
            var str = StringUtil_1.StringUtil.stringToArray5(this.serverData.reward);
            var dropInfo = DropMgr_1.DropMgr.getDropInfo(Number(str[0]), Number(str[1]), Number(str[2]));
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("root/bg/topBg/dropItem", this.node, dropInfo.iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/topBg/dropNumLabel", this.node, str[2]);
            if (!this.serverData.isFinish) {
                this.curQuest = this.baseData[this.serverData.nextKey];
                this.questRefresh();
            }
            else {
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/topBg/questTitle", this.node, "");
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/topBg/content", this.node, Oops_1.oops.language.getLangByID("survey.overTips"));
                this.toggleContainer.node.active = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/btn_get", this.node, false);
                SingletonModuleComp_1.smc.account.AccountModel.surveyOver = true;
            }
        };
        SurveyPop_1.prototype.questRefresh = function () {
            if (this.curQuest) {
                //判断是否是单选
                if (this.curQuest.questionType == 1)
                    this.toggleContainer.enabled = true;
                else
                    this.toggleContainer.enabled = false;
                this.answerToggle.forEach(function (e) {
                    e.isChecked = false;
                });
                this.answerToggle[0].isChecked = true;
                //先刷新第几题？
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/topBg/questTitle", this.node, Oops_1.oops.language.getLangByID("survey.questTitle", this.serverData.nextKey + 1));
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/topBg/content", this.node, this.curQuest.question);
                for (var i = 0; i < this.curQuest.answerArr.length; i++) {
                    if (this.curQuest.answerArr[i] != 0) {
                        ViewUtil_1.ViewUtil.setLabelStringByName("Label", this.answerNode[i], this.curQuest.answerArr[i]);
                        this.answerNode[i].active = true;
                    }
                    else {
                        this.answerNode[i].active = false;
                    }
                    //this.answerNode[i].getComponent(Toggle)!.isChecked=false;
                }
            }
        };
        SurveyPop_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.SurveyPop);
        };
        SurveyPop_1.prototype.btn_submit = function () {
            var _this = this;
            this.curAnser = [];
            for (var i = 0; i < this.curQuest.answerArr.length; i++) {
                if (this.answerToggle[i].isChecked)
                    this.curAnser.push(i + 1);
            }
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.curAnser.length == 0) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("survey.failedTips"));
                return;
            }
            HttpPost_1.HttpPost.instance.questionnaireSubmit(this.curQuest.id, this.curAnser, function (data) {
                _this.onAdded(data);
            });
        };
        SurveyPop_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.SurveyPop);
        };
        return SurveyPop_1;
    }(_classSuper));
    __setFunctionName(_classThis, "SurveyPop");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _role_decorators = [property(Role_1.Role)];
        _toggleContainer_decorators = [property(cc_1.ToggleContainer)];
        _answerToggle_decorators = [property([cc_1.Toggle])];
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggleContainer_decorators, { kind: "field", name: "toggleContainer", static: false, private: false, access: { has: function (obj) { return "toggleContainer" in obj; }, get: function (obj) { return obj.toggleContainer; }, set: function (obj, value) { obj.toggleContainer = value; } }, metadata: _metadata }, _toggleContainer_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _answerToggle_decorators, { kind: "field", name: "answerToggle", static: false, private: false, access: { has: function (obj) { return "answerToggle" in obj; }, get: function (obj) { return obj.answerToggle; }, set: function (obj, value) { obj.answerToggle = value; } }, metadata: _metadata }, _answerToggle_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SurveyPop = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SurveyPop = _classThis;
}();
exports.SurveyPop = SurveyPop;
