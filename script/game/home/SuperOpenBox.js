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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperOpenBox = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var SuitData_1 = require("../common/tableData/SuitData");
var Role_1 = require("../dress/Role");
var DropMgr_1 = require("../mgr/DropMgr");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var SuperOpenBox = function () {
    var _classDecorators = [ccclass('SuperOpenBox')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _selected_decorators;
    var _selected_initializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _dressNode_decorators;
    var _dressNode_initializers = [];
    var _furnitureNode_decorators;
    var _furnitureNode_initializers = [];
    var SuperOpenBox = _classThis = /** @class */ (function (_super) {
        __extends(SuperOpenBox_1, _super);
        function SuperOpenBox_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.serverData = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.currSelected = 0;
            _this.items = [];
            _this.selected = __runInitializers(_this, _selected_initializers, void 0);
            _this.role = __runInitializers(_this, _role_initializers, null);
            _this.dressNode = __runInitializers(_this, _dressNode_initializers, null);
            _this.furnitureNode = __runInitializers(_this, _furnitureNode_initializers, null);
            _this.suitItems = [];
            return _this;
        }
        SuperOpenBox_1.prototype.onAdded = function (data) {
            this.serverData = data;
            this.items = ViewUtil_1.ViewUtil.findChildByName("root/bg/items", this.node).children;
            this.itemReresh();
            this.suitItems = ViewUtil_1.ViewUtil.findChildByName("root/bg/parts", this.node).children;
            this.showSelected(0);
        };
        SuperOpenBox_1.prototype.btn_close = function () {
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.SuperOpenBox);
        };
        SuperOpenBox_1.prototype.btn_selected = function (event, data) {
            var selectIndex = parseInt(data);
            if (this.currSelected == selectIndex) {
                return;
            }
            this.showSelected(selectIndex);
        };
        SuperOpenBox_1.prototype.itemReresh = function () {
            for (var i = 0; i < this.serverData.list.length; i++) {
                var suit = new SuitData_1.SuitData(this.serverData.list[i].suitId);
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(ViewUtil_1.ViewUtil.findChildByName("icon", this.items[i]), GameResPath_1.GameResPath.getSuitPreviewPath(suit.suitResShow.toString()), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("grade/name", this.items[i], suit.getName());
                ViewUtil_1.ViewUtil.setNodeActiveByName("owned", this.items[i], this.serverData.list[i].owned == 1);
            }
        };
        /**
         * 选中
         * @param selectIndex
         */
        SuperOpenBox_1.prototype.showSelected = function (selectIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var suitData, suitItemsId, i, count, suitItemsId, i, count;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.currSelected = selectIndex;
                            this.selected.setWorldPosition(this.items[this.currSelected].getWorldPosition());
                            suitData = new SuitData_1.SuitData(this.serverData.list[this.currSelected].suitId);
                            if (this.serverData.lastSuitId && this.serverData.lastSuitId == suitData.id)
                                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/lastTag", this.node, true);
                            else
                                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/lastTag", this.node, false);
                            if (!(suitData.id >= 1000)) return [3 /*break*/, 1];
                            this.furnitureNode.active = true;
                            this.dressNode.active = false;
                            ViewUtil_1.ViewUtil.setSingleSpriteFrame(ViewUtil_1.ViewUtil.findChildByName("showSp", this.furnitureNode), GameResPath_1.GameResPath.getSuitPreviewPath(suitData.suitResShow.toString()), BundleConfig_1.default.instance.guiBundle.name);
                            suitItemsId = StringUtil_1.StringUtil.stringToArray2(suitData.suitNumber);
                            for (i = 0; i < this.suitItems.length; i++) {
                                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("ic", this.suitItems[i], GameResPath_1.GameResPath.getFurnitureListIconsPath(suitItemsId[i]), BundleConfig_1.default.instance.guiBundle.name);
                                ViewUtil_1.ViewUtil.setLabelStringByName("nameLabel", this.suitItems[i], suitData.getSuitItemNames()[i]);
                                count = DropMgr_1.DropMgr.getDropCount("1-" + suitItemsId[i]);
                                ViewUtil_1.ViewUtil.setNodeActiveByName("hasTag", this.suitItems[i], count > 0);
                            }
                            return [3 /*break*/, 3];
                        case 1:
                            this.furnitureNode.active = false;
                            this.dressNode.active = true;
                            this.role.clearDress();
                            return [4 /*yield*/, this.role.showSuitSkin(suitData.suitShow)];
                        case 2:
                            _a.sent();
                            suitItemsId = StringUtil_1.StringUtil.stringToArray2(suitData.suitNumber);
                            for (i = 0; i < this.suitItems.length; i++) {
                                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("ic", this.suitItems[i], GameResPath_1.GameResPath.getDressListIconsPath(suitItemsId[i]), BundleConfig_1.default.instance.guiBundle.name);
                                ViewUtil_1.ViewUtil.setLabelStringByName("nameLabel", this.suitItems[i], suitData.getSuitItemNames()[i]);
                                count = DropMgr_1.DropMgr.getDropCount("2-" + suitItemsId[i]);
                                ViewUtil_1.ViewUtil.setNodeActiveByName("hasTag", this.suitItems[i], count > 0);
                            }
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        //看广告重新随机
        SuperOpenBox_1.prototype.btn_adRefresh = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            //看完广告
            SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.SuperOpenBox, function () {
                HttpPost_1.HttpPost.instance.superDropRefresh(function (data) {
                    _this.onAdded(data);
                });
            });
        };
        SuperOpenBox_1.prototype.btn_get = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.superOpenBox(this.serverData.list[this.currSelected].suitId, function (data) {
                SingletonModuleComp_1.smc.account.AccountModel.superOpenCount = data.openBoxCount;
                //增加开箱总次数
                SingletonModuleComp_1.smc.account.AccountModel.boxOpenTimes++;
                SingletonModuleComp_1.smc.account.AccountModel.superOpenCount = data.openBoxCount;
                //功能开启检查
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.HomeFuncOpen, DataObject_1.FunctionCheckType.BoxOpen);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SuperOpenBoxRefresh, data);
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.SuperOpenBox);
            });
        };
        SuperOpenBox_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.SuperOpenBox);
        };
        return SuperOpenBox_1;
    }(_classSuper));
    __setFunctionName(_classThis, "SuperOpenBox");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _selected_decorators = [property(cc_1.Node)];
        _role_decorators = [property(Role_1.Role)];
        _dressNode_decorators = [property(cc_1.Node)];
        _furnitureNode_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _selected_decorators, { kind: "field", name: "selected", static: false, private: false, access: { has: function (obj) { return "selected" in obj; }, get: function (obj) { return obj.selected; }, set: function (obj, value) { obj.selected = value; } }, metadata: _metadata }, _selected_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dressNode_decorators, { kind: "field", name: "dressNode", static: false, private: false, access: { has: function (obj) { return "dressNode" in obj; }, get: function (obj) { return obj.dressNode; }, set: function (obj, value) { obj.dressNode = value; } }, metadata: _metadata }, _dressNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _furnitureNode_decorators, { kind: "field", name: "furnitureNode", static: false, private: false, access: { has: function (obj) { return "furnitureNode" in obj; }, get: function (obj) { return obj.furnitureNode; }, set: function (obj, value) { obj.furnitureNode = value; } }, metadata: _metadata }, _furnitureNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SuperOpenBox = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SuperOpenBox = _classThis;
}();
exports.SuperOpenBox = SuperOpenBox;
