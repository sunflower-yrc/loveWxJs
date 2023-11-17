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
exports.Dialogue = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var DataManager_1 = require("../../Global/DataManager");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var Tablenpc_1 = require("../common/table/Tablenpc");
var DataMgr_1 = require("../mgr/DataMgr");
var DressData_1 = require("../common/tableData/DressData");
var LangData_1 = require("../common/tableData/LangData");
var TalkData_1 = require("../common/tableData/TalkData");
var TriggerData_1 = require("../common/tableData/TriggerData");
var Role_1 = require("../dress/Role");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var DialogueBase_1 = require("./DialogueBase");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Dialogue = function () {
    var _classDecorators = [ccclass('Dialogue')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = DialogueBase_1.DialogueBase;
    var _instanceExtraInitializers = [];
    var _richText_decorators;
    var _richText_initializers = [];
    var _labelText_decorators;
    var _labelText_initializers = [];
    var _starXiaoman_decorators;
    var _starXiaoman_initializers = [];
    var _other_decorators;
    var _other_initializers = [];
    var _selfNameNode_decorators;
    var _selfNameNode_initializers = [];
    var _coupleNameNode_decorators;
    var _coupleNameNode_initializers = [];
    var _othersNameNode_decorators;
    var _othersNameNode_initializers = [];
    var _skipBtn_decorators;
    var _skipBtn_initializers = [];
    var Dialogue = _classThis = /** @class */ (function (_super) {
        __extends(Dialogue_1, _super);
        function Dialogue_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.richText = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _richText_initializers, null));
            _this.labelText = __runInitializers(_this, _labelText_initializers, null);
            _this.starXiaoman = __runInitializers(_this, _starXiaoman_initializers, null);
            _this.other = __runInitializers(_this, _other_initializers, null);
            _this.selfNameNode = __runInitializers(_this, _selfNameNode_initializers, null);
            _this.coupleNameNode = __runInitializers(_this, _coupleNameNode_initializers, null);
            _this.othersNameNode = __runInitializers(_this, _othersNameNode_initializers, null);
            _this.skipBtn = __runInitializers(_this, _skipBtn_initializers, null);
            _this.data = null;
            /**这句话是否全部显示了 */
            _this.isNoMask = false;
            /**有多少行 */
            _this.textLineLength = 1;
            _this.anims = [];
            _this.originWidth = 0;
            return _this;
        }
        Dialogue_1.prototype.onAdded = function (param) {
            this.isNoMask = false;
            this.data = param;
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.HideHomeUI);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.PlayNextDialogue, this.playNextDialogue, this);
        };
        Dialogue_1.prototype.onDestroy = function () {
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowHomeUI);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.PlayNextDialogue, this.playNextDialogue, this);
        };
        Dialogue_1.prototype.start = function () {
            var _this = this;
            ViewUtil_1.ViewUtil.getChildByName("bg", this.node).on(cc_1.Node.EventType.TOUCH_START, function () {
                if (_this.isNoMask || _this.nowPlayIdx >= _this.textLineLength) {
                    _this.playNextDialogue();
                }
                else {
                    _this.offMask();
                }
            });
            this.skipBtn.on("click", function () {
                _this.skip();
            }, this);
            this.anims = this.labelText.getComponentsInChildren(cc_1.Animation);
            this.originWidth = this.anims[0].getComponent(cc_1.UITransform).width;
            for (var i = 0; i < this.anims.length; i++) {
                var anim = this.anims[i];
                anim.on(cc_1.Animation.EventType.FINISHED, function () {
                    //todo oops.todo("播放下一行");
                    _this.playNextLineMask();
                }, this);
            }
            this.freshUi();
        };
        /**
         * 显示角色
         * @param roleId 角色id
         */
        Dialogue_1.prototype.showRole = function (roleId) {
            var langTable = new LangData_1.LangData(this.data.npcId);
            this.showName(roleId);
            var dress = null;
            if (this.data.dressReplace != "0") {
                dress = StringUtil_1.StringUtil.stringToArray2(this.data.dressReplace);
            }
            var dressData = this.makeDressDatas(dress);
            //获取服装
            if (roleId == 101) {
                this.starXiaoman.node.active = true;
                this.other.node.active = false;
                this.starXiaoman.clearDress();
                this.starXiaoman.defaultSkin(1);
                for (var _i = 0, dressData_1 = dressData; _i < dressData_1.length; _i++) {
                    var i = dressData_1[_i];
                    this.starXiaoman.showSkin(i);
                }
                ViewUtil_1.ViewUtil.findChildByName("name", this.selfNameNode).getComponent(cc_1.Label).string = langTable.getDesc();
            }
            else {
                this.starXiaoman.node.active = false;
                this.other.node.active = true;
                //清空装扮
                this.other.clearDress();
                if (roleId == 102) {
                    this.other.defaultSkin(0);
                    for (var _a = 0, dressData_2 = dressData; _a < dressData_2.length; _a++) {
                        var i = dressData_2[_a];
                        this.other.showSkin(i);
                    }
                    ViewUtil_1.ViewUtil.findChildByName("name", this.coupleNameNode).getComponent(cc_1.Label).string = langTable.getDesc();
                }
                else {
                    var table = new Tablenpc_1.Tablenpc();
                    table.init(roleId);
                    this.other.showSuitSkin(table.npcDress);
                    for (var _b = 0, dressData_3 = dressData; _b < dressData_3.length; _b++) {
                        var i = dressData_3[_b];
                        this.other.showSkin(i);
                    }
                    ViewUtil_1.ViewUtil.findChildByName("name", this.othersNameNode).getComponent(cc_1.Label).string = langTable.getDesc();
                }
            }
        };
        /**服装列表 */
        Dialogue_1.prototype.makeDressDatas = function (dressList) {
            if (!dressList)
                return [];
            var dataList = [];
            for (var _i = 0, dressList_1 = dressList; _i < dressList_1.length; _i++) {
                var i = dressList_1[_i];
                dataList.push(new DressData_1.DressData(parseInt(i)));
            }
            return dataList;
        };
        /**传入roleId   1女主 2男主 其他就其他角色 */
        Dialogue_1.prototype.showName = function (roleId) {
            this.selfNameNode.active = roleId == 101 ? true : false;
            this.coupleNameNode.active = roleId == 102 ? true : false;
            this.othersNameNode.active = roleId == 101 || roleId == 102 ? false : true;
        };
        /** 播放下一行 */
        Dialogue_1.prototype.playNextLineMask = function () {
            if (this.nowPlayIdx == 1) {
                this.skipBtn.active = true;
            }
            if (this.nowPlayIdx >= this.textLineLength) {
                return;
            }
            this.anims[this.nowPlayIdx].play();
            this.nowPlayIdx++;
        };
        /**直接关闭所有mask */
        Dialogue_1.prototype.offMask = function () {
            ViewUtil_1.ViewUtil.getChildByName("layout", this.node).active = false;
            this.isNoMask = true;
        };
        /**跳过 */
        Dialogue_1.prototype.skip = function () {
            this.playNextDialogue();
        };
        /** 播放下一句 */
        Dialogue_1.prototype.playNextDialogue = function () {
            /**对话引导 */
            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide) {
                var guideNextIdList = [1, 2, 3, 11, 14, 15, 23, 24, 27, 30, 31];
                if (guideNextIdList.indexOf(SingletonModuleComp_1.smc.guide.GuideModel.step) != -1) {
                    SingletonModuleComp_1.smc.guide.GuideView.next();
                }
            }
            var talkData = this.data;
            if (talkData.talkOver == 1) {
                //todo 关闭界面
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Dialogue);
                if (SingletonModuleComp_1.smc.account.AccountModel.isGuideOver) {
                    //删除事件气泡
                    this.data.eventData && this.data.eventData.talkCb && this.data.eventData.talkCb(this.data.eventData);
                    //记录是否已经对话
                    talkData.talkCb && talkData.talkCb(this.data);
                }
                //引导打开界面
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.EmitGuide);
                //todo 跳转界面
                if (talkData && talkData.jumpUi != "0") {
                    if (this.data.eventData.eventType == TriggerData_1.EventTypeEnum.outside)
                        DataManager_1.default.Instance.getUserOutSideFurniture(this.data.eventData);
                    else {
                        //跳转
                        DataMgr_1.DataMgr.gotoFunction([], talkData.jumpUi);
                    }
                }
                if (this.data.eventData) {
                    this.dealEventData(this.data.eventData.eventType);
                }
                return;
            }
            this.data = new TalkData_1.TalkData(parseInt(talkData.nextId), talkData.eventData, talkData.talkCb);
            for (var _i = 0, _a = this.anims; _i < _a.length; _i++) {
                var i = _a[_i];
                i.stop();
                for (var _b = 0, _c = this.anims; _b < _c.length; _b++) {
                    var i_1 = _c[_b];
                    i_1.getComponent(cc_1.UITransform).width = this.originWidth;
                }
            }
            this.freshUi();
        };
        /**处理事件结束 */
        Dialogue_1.prototype.dealEventData = function (event) {
            var _this = this;
            switch (event) {
                case TriggerData_1.EventTypeEnum.conversation:
                    var vo = new DataObject_1.RecordEventVo(this.data.eventData.triggerID + "", this.data.eventData.id + "", "2");
                    HttpPost_1.HttpPost.instance.recordEvent(vo, function (data) {
                        if (_this.data)
                            /**完成后就没事件了 */
                            _this.data.eventData = null;
                        //事件系统
                        DataManager_1.default.Instance.setEventList(data.eventList);
                    });
                    break;
                case TriggerData_1.EventTypeEnum.adotPet:
                    break;
                case TriggerData_1.EventTypeEnum.outside:
                    break;
                case TriggerData_1.EventTypeEnum.recoverItems:
                    break;
                default:
                    break;
            }
        };
        /**显示富文本内容 */
        Dialogue_1.prototype.showRichText = function (languageId) {
            var _this = this;
            this.nowPlayIdx = 0;
            var lang = new LangData_1.LangData(languageId);
            var result = lang.getDesc();
            this.labelText.string = result;
            this.scheduleOnce(function () {
                _this.textLineLength = Math.floor(_this.labelText.getComponent(cc_1.UITransform).height / 62);
                _this.playNextLineMask();
            });
        };
        /**刷新UI */
        Dialogue_1.prototype.freshUi = function () {
            this.skipBtn.active = false;
            ViewUtil_1.ViewUtil.getChildByName("layout", this.node).active = true;
            this.isNoMask = false;
            this.showRole(this.data.npcId);
            this.showRichText(parseInt(this.data.languageId));
        };
        return Dialogue_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Dialogue");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _richText_decorators = [property(cc_1.RichText)];
        _labelText_decorators = [property(cc_1.Label)];
        _starXiaoman_decorators = [property(Role_1.Role)];
        _other_decorators = [property(Role_1.Role)];
        _selfNameNode_decorators = [property(cc_1.Node)];
        _coupleNameNode_decorators = [property(cc_1.Node)];
        _othersNameNode_decorators = [property(cc_1.Node)];
        _skipBtn_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _richText_decorators, { kind: "field", name: "richText", static: false, private: false, access: { has: function (obj) { return "richText" in obj; }, get: function (obj) { return obj.richText; }, set: function (obj, value) { obj.richText = value; } }, metadata: _metadata }, _richText_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _labelText_decorators, { kind: "field", name: "labelText", static: false, private: false, access: { has: function (obj) { return "labelText" in obj; }, get: function (obj) { return obj.labelText; }, set: function (obj, value) { obj.labelText = value; } }, metadata: _metadata }, _labelText_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _starXiaoman_decorators, { kind: "field", name: "starXiaoman", static: false, private: false, access: { has: function (obj) { return "starXiaoman" in obj; }, get: function (obj) { return obj.starXiaoman; }, set: function (obj, value) { obj.starXiaoman = value; } }, metadata: _metadata }, _starXiaoman_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _other_decorators, { kind: "field", name: "other", static: false, private: false, access: { has: function (obj) { return "other" in obj; }, get: function (obj) { return obj.other; }, set: function (obj, value) { obj.other = value; } }, metadata: _metadata }, _other_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _selfNameNode_decorators, { kind: "field", name: "selfNameNode", static: false, private: false, access: { has: function (obj) { return "selfNameNode" in obj; }, get: function (obj) { return obj.selfNameNode; }, set: function (obj, value) { obj.selfNameNode = value; } }, metadata: _metadata }, _selfNameNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _coupleNameNode_decorators, { kind: "field", name: "coupleNameNode", static: false, private: false, access: { has: function (obj) { return "coupleNameNode" in obj; }, get: function (obj) { return obj.coupleNameNode; }, set: function (obj, value) { obj.coupleNameNode = value; } }, metadata: _metadata }, _coupleNameNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _othersNameNode_decorators, { kind: "field", name: "othersNameNode", static: false, private: false, access: { has: function (obj) { return "othersNameNode" in obj; }, get: function (obj) { return obj.othersNameNode; }, set: function (obj, value) { obj.othersNameNode = value; } }, metadata: _metadata }, _othersNameNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _skipBtn_decorators, { kind: "field", name: "skipBtn", static: false, private: false, access: { has: function (obj) { return "skipBtn" in obj; }, get: function (obj) { return obj.skipBtn; }, set: function (obj, value) { obj.skipBtn = value; } }, metadata: _metadata }, _skipBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Dialogue = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Dialogue = _classThis;
}();
exports.Dialogue = Dialogue;
