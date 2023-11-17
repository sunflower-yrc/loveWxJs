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
exports.ChoseRoom = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var JsonUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablestory_1 = require("../common/table/Tablestory");
var cc_3 = require("cc");
var ChoseRoomItem_1 = require("./ChoseRoomItem");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var cc_4 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var StoryData_1 = require("../common/tableData/StoryData");
var DataObject_1 = require("../tools/DataObject");
var cc_5 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameResPath_1 = require("../common/config/GameResPath");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var LangData_1 = require("../common/tableData/LangData");
var GameMgr_1 = require("../common/mgr/GameMgr");
var DataManager_1 = require("../../Global/DataManager");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var ChoseRoom = function () {
    var _classDecorators = [ccclass('ChoseRoom')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _selectParent_decorators;
    var _selectParent_initializers = [];
    var _limit_decorators;
    var _limit_initializers = [];
    var _jain_decorators;
    var _jain_initializers = [];
    var _selectItem_decorators;
    var _selectItem_initializers = [];
    var ChoseRoom = _classThis = /** @class */ (function (_super) {
        __extends(ChoseRoom_1, _super);
        function ChoseRoom_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.selectParent = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _selectParent_initializers, null));
            _this.limit = __runInitializers(_this, _limit_initializers, null);
            _this.jain = __runInitializers(_this, _jain_initializers, null);
            _this.selectItem = __runInitializers(_this, _selectItem_initializers, null);
            _this.curId = 0;
            _this.isinit = false;
            _this.isShow = false;
            return _this;
        }
        ChoseRoom_1.prototype.onLoad = function () {
            var data = JsonUtil_1.JsonUtil.get(Tablestory_1.Tablestory.TableName);
            this.choseData = [];
            for (var key in data) {
                if (DataManager_1.default.Instance.curChapter == key) {
                    this.curId = this.choseData.length;
                }
                this.choseData.push(data[key]);
            }
            Oops_1.oops.message.on(GameEvent_1.GameEvent.ChoseRoomSelect, this.selectRoom, this);
        };
        ChoseRoom_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.ChoseRoomSelect, this.selectRoom, this);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.ChoseRoom);
        };
        ChoseRoom_1.prototype.start = function () {
            this.setUI();
        };
        ChoseRoom_1.prototype.setSelectUI = function () {
            var _a;
            if (!this.isinit) {
                this.isinit = true;
                for (var i = 0; i < this.choseData.length; i++) {
                    var item = (0, cc_3.instantiate)(this.selectItem);
                    item.parent = this.selectParent;
                    (_a = item.getComponent(ChoseRoomItem_1.ChoseRoomItem)) === null || _a === void 0 ? void 0 : _a.init(this.choseData[i], i);
                    if (this.curId == i) {
                        item.getComponent(cc_4.Toggle).isChecked = true;
                    }
                }
            }
        };
        ChoseRoom_1.prototype.showSelect = function () {
            this.isShow = !this.isShow;
            this.selectParent.active = this.isShow;
            if (this.isShow) {
                this.setSelectUI();
                this.jain.setScale(1, -1, 1);
            }
            else {
                this.jain.setScale(1, 1, 1);
            }
        };
        ChoseRoom_1.prototype.selectRoom = function (ev, id) {
            if (this.curId == id) {
                return;
            }
            this.curId = id;
            this.setUI();
            this.showSelect();
        };
        ChoseRoom_1.prototype.setUI = function () {
            if (this.curId <= (SingletonModuleComp_1.smc.account.AccountModel.chapter - 1)) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/mid/tip", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/mid/lock", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/mid/room", this.node, true);
            }
            else if (this.curId == SingletonModuleComp_1.smc.account.AccountModel.chapter) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/mid/tip", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/mid/lock", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/mid/room", this.node, true);
                this.setLockUI();
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/mid/tip", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/mid/lock", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/mid/room", this.node, false);
            }
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("root/mid/room", this.node, GameResPath_1.GameResPath.getRoomBgPath(this.choseData[this.curId].housePng), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/select/name", this.node, new LangData_1.LangData(this.choseData[this.curId].houseName).getDesc());
        };
        ChoseRoom_1.prototype.setLockUI = function () {
            var storyData = new StoryData_1.StoryData(SingletonModuleComp_1.smc.account.AccountModel.chapter);
            var condData = storyData.getLimitCondData();
            var children = this.limit.children;
            for (var i = 0; i < children.length; i++) {
                var element = children[i];
                if (i < condData.length) {
                    element.active = true;
                    ViewUtil_1.ViewUtil.setLabelStringByName("dec", element, condData[i].desc);
                    var langId = "common.complete";
                    var c = new cc_5.Color("#b7da61");
                    if (!condData[i].status) {
                        langId = "common.incomplete";
                        c = new cc_5.Color("#fe9a9a");
                    }
                    ViewUtil_1.ViewUtil.setLabelStringByName("status", element, "(" + Oops_1.oops.language.getLangByID(langId) + ")", { color: c });
                }
                else {
                    element.active = false;
                }
            }
        };
        ChoseRoom_1.prototype.add = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.curId++;
            if (this.curId >= this.choseData.length) {
                this.curId = 0;
            }
            this.setUI();
        };
        ChoseRoom_1.prototype.remove = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.curId--;
            if (this.curId < 0) {
                this.curId = this.choseData.length - 1;
            }
            this.setUI();
        };
        ChoseRoom_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ChoseRoom);
        };
        ChoseRoom_1.prototype.choseScene = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if ((this.curId + 1) == parseInt(DataManager_1.default.Instance.curChapter)) {
                return;
            }
            if (GameMgr_1.GameMgr.Instance.manorMode) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("manor.funcLock"));
                return;
            }
            if (this.curId <= (SingletonModuleComp_1.smc.account.AccountModel.chapter - 1)) {
                DataManager_1.default.Instance.updateSelectChapter((this.curId + 1) + "");
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpUserChapter);
                this.closeView();
            }
            else {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("choseRoom.lock"));
            }
        };
        return ChoseRoom_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ChoseRoom");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _selectParent_decorators = [property(cc_2.Node)];
        _limit_decorators = [property(cc_2.Node)];
        _jain_decorators = [property(cc_2.Node)];
        _selectItem_decorators = [property(cc_1.Prefab)];
        __esDecorate(null, null, _selectParent_decorators, { kind: "field", name: "selectParent", static: false, private: false, access: { has: function (obj) { return "selectParent" in obj; }, get: function (obj) { return obj.selectParent; }, set: function (obj, value) { obj.selectParent = value; } }, metadata: _metadata }, _selectParent_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _limit_decorators, { kind: "field", name: "limit", static: false, private: false, access: { has: function (obj) { return "limit" in obj; }, get: function (obj) { return obj.limit; }, set: function (obj, value) { obj.limit = value; } }, metadata: _metadata }, _limit_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _jain_decorators, { kind: "field", name: "jain", static: false, private: false, access: { has: function (obj) { return "jain" in obj; }, get: function (obj) { return obj.jain; }, set: function (obj, value) { obj.jain = value; } }, metadata: _metadata }, _jain_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _selectItem_decorators, { kind: "field", name: "selectItem", static: false, private: false, access: { has: function (obj) { return "selectItem" in obj; }, get: function (obj) { return obj.selectItem; }, set: function (obj, value) { obj.selectItem = value; } }, metadata: _metadata }, _selectItem_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ChoseRoom = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ChoseRoom = _classThis;
}();
exports.ChoseRoom = ChoseRoom;
