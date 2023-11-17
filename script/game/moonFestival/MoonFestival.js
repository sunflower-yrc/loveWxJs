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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoonFestival = exports.moonViewName = exports.moonType = void 0;
var cc_1 = require("cc");
var GameResPath_1 = require("../common/config/GameResPath");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var HttpPost_1 = require("../tools/HttpPost");
var Order_1 = require("./Order");
var GoodGift_1 = require("./GoodGift");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var MoonCollection_1 = require("./MoonCollection");
var GameEvent_1 = require("../common/config/GameEvent");
var cc_2 = require("cc");
var MoonTour_1 = require("./MoonTour");
var MoonTask_1 = require("./MoonTask");
var DataObject_1 = require("../tools/DataObject");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var moonType;
(function (moonType) {
    moonType[moonType["goodGift"] = 1] = "goodGift";
    moonType[moonType["order"] = 2] = "order";
    moonType[moonType["task"] = 3] = "task";
    moonType[moonType["collection"] = 4] = "collection";
    moonType[moonType["tour"] = 5] = "tour"; //中秋巡礼
})(moonType || (exports.moonType = moonType = {}));
exports.moonViewName = (_a = {},
    _a[moonType.goodGift] = "goodGift",
    _a[moonType.order] = "order",
    _a[moonType.task] = "moonTask",
    _a[moonType.collection] = "moonCollection",
    _a[moonType.tour] = "moonTour",
    _a);
var MoonFestival = function () {
    var _classDecorators = [ccclass('MoonFestival')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _parentNode_decorators;
    var _parentNode_initializers = [];
    var _helpTip_decorators;
    var _helpTip_initializers = [];
    var _toggle_decorators;
    var _toggle_initializers = [];
    var _blockNode_decorators;
    var _blockNode_initializers = [];
    var MoonFestival = _classThis = /** @class */ (function (_super) {
        __extends(MoonFestival_1, _super);
        function MoonFestival_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.parentNode = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _parentNode_initializers, null));
            _this.helpTip = __runInitializers(_this, _helpTip_initializers, null);
            _this.toggle = __runInitializers(_this, _toggle_initializers, null);
            _this.blockNode = __runInitializers(_this, _blockNode_initializers, null);
            _this.views = {};
            _this.curMoonType = null;
            _this.lasMoonType = null;
            _this.time = null;
            _this.endTime = null;
            return _this;
        }
        MoonFestival_1.prototype.onAdded = function () {
            // this.curMoonType == moonType.goodGift;
        };
        MoonFestival_1.prototype.start = function () {
            this.setUI(null, "1");
            this.updateRed();
            Oops_1.oops.message.on(GameEvent_1.GameEvent.gotoMoon, this.choseToggle, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateMoonRed, this.updateRed, this);
        };
        MoonFestival_1.prototype.onDestroy = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.gotoMoon, this.choseToggle, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateMoonRed, this.updateRed, this);
        };
        MoonFestival_1.prototype.choseToggle = function (ev, type) {
            this.toggle.children[(parseInt(type) - 1)].getComponent(cc_2.Toggle).isChecked = true;
            this.setUI(null, type);
        };
        MoonFestival_1.prototype.setUI = function (ev, type) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (this.curMoonType == parseInt(type)) {
                        return [2 /*return*/];
                    }
                    this.blockNode.active = true;
                    if (parseInt(type) == moonType.goodGift) {
                        HttpPost_1.HttpPost.instance.nationalDayLoginInfo(function (data) {
                            _this.endTime = data.endTime;
                            _this.changeView(parseInt(type), data);
                        });
                    }
                    else if (parseInt(type) == moonType.order) {
                        HttpPost_1.HttpPost.instance.nationalDayOrderInfo(function (data) {
                            _this.endTime = data.endTime;
                            _this.changeView(parseInt(type), data);
                        });
                    }
                    else if (parseInt(type) == moonType.task) {
                        HttpPost_1.HttpPost.instance.nationalDayTaskInfo(function (data) {
                            _this.endTime = data.endTime;
                            _this.changeView(parseInt(type), data);
                        });
                    }
                    else if (parseInt(type) == moonType.collection) {
                        HttpPost_1.HttpPost.instance.nationalDayExchangeInfo(function (data) {
                            _this.endTime = data.endTime;
                            _this.changeView(parseInt(type), data);
                        });
                    }
                    else if (parseInt(type) == moonType.tour) {
                        HttpPost_1.HttpPost.instance.seriesGift(function (data) {
                            _this.endTime = data.endTime;
                            _this.changeView(parseInt(type), data);
                        });
                    }
                    return [2 /*return*/];
                });
            });
        };
        //
        MoonFestival_1.prototype.changeView = function (type, data) {
            return __awaiter(this, void 0, void 0, function () {
                var node, script;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this.views[type]) return [3 /*break*/, 2];
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getMoonActivityPath(exports.moonViewName[type]), BundleConfig_1.default.instance.guiBundle.name)];
                        case 1:
                            node = _a.sent();
                            node.parent = this.parentNode;
                            script = void 0;
                            if (type == moonType.goodGift) {
                                script = node.getComponent(GoodGift_1.GoodGift);
                            }
                            else if (type == moonType.order) {
                                script = node.getComponent(Order_1.Order);
                            }
                            else if (type == moonType.task) {
                                script = node.getComponent(MoonTask_1.MoonTask);
                            }
                            else if (type == moonType.collection) {
                                script = node.getComponent(MoonCollection_1.MoonCollection);
                            }
                            else if (type == moonType.tour) {
                                script = node.getComponent(MoonTour_1.MoonTour);
                            }
                            script === null || script === void 0 ? void 0 : script.init(data);
                            this.views[type] = script;
                            return [3 /*break*/, 3];
                        case 2:
                            this.views[type].node.active = true;
                            this.views[type].init(data);
                            _a.label = 3;
                        case 3:
                            this.curMoonType = type;
                            if (this.lasMoonType) {
                                this.views[this.lasMoonType].node.active = false;
                            }
                            this.lasMoonType = type;
                            this.blockNode.active = false;
                            this.setTimer();
                            return [2 /*return*/];
                    }
                });
            });
        };
        MoonFestival_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.MoonFestival);
        };
        /**创建计时器 */
        MoonFestival_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            this.time = (this.endTime - curTime);
            this.onSecond();
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        MoonFestival_1.prototype.onSecond = function () {
            var time;
            if (this.time >= 3600) {
                time = StringUtil_1.StringUtil.formatTimeWithSec(this.time, true);
            }
            else {
                time = StringUtil_1.StringUtil.formatTimeWithSec(this.time);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("top/timeLab", this.node, Oops_1.oops.language.getLangByID("common.leftTime") + time);
        };
        MoonFestival_1.prototype.onComplete = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
            this.closeView();
        };
        MoonFestival_1.prototype.updateRed = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("select1/redDot", this.toggle, Boolean(SingletonModuleComp_1.smc.account.AccountModel.nationalDay.tagList.login));
            ViewUtil_1.ViewUtil.setNodeActiveByName("select2/redDot", this.toggle, Boolean(SingletonModuleComp_1.smc.account.AccountModel.nationalDay.tagList.order));
            ViewUtil_1.ViewUtil.setNodeActiveByName("select3/redDot", this.toggle, Boolean(SingletonModuleComp_1.smc.account.AccountModel.nationalDay.tagList.task));
            ViewUtil_1.ViewUtil.setNodeActiveByName("select4/redDot", this.toggle, Boolean(SingletonModuleComp_1.smc.account.AccountModel.nationalDay.tagList.exchange));
            ViewUtil_1.ViewUtil.setNodeActiveByName("select5/redDot", this.toggle, Boolean(SingletonModuleComp_1.smc.account.AccountModel.nationalDay.tagList.series));
        };
        MoonFestival_1.prototype.showHelpTip = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.helpTip.active = !this.helpTip.active;
        };
        return MoonFestival_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MoonFestival");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _parentNode_decorators = [property(cc_1.Node)];
        _helpTip_decorators = [property(cc_1.Node)];
        _toggle_decorators = [property(cc_1.Node)];
        _blockNode_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _parentNode_decorators, { kind: "field", name: "parentNode", static: false, private: false, access: { has: function (obj) { return "parentNode" in obj; }, get: function (obj) { return obj.parentNode; }, set: function (obj, value) { obj.parentNode = value; } }, metadata: _metadata }, _parentNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _helpTip_decorators, { kind: "field", name: "helpTip", static: false, private: false, access: { has: function (obj) { return "helpTip" in obj; }, get: function (obj) { return obj.helpTip; }, set: function (obj, value) { obj.helpTip = value; } }, metadata: _metadata }, _helpTip_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggle_decorators, { kind: "field", name: "toggle", static: false, private: false, access: { has: function (obj) { return "toggle" in obj; }, get: function (obj) { return obj.toggle; }, set: function (obj, value) { obj.toggle = value; } }, metadata: _metadata }, _toggle_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _blockNode_decorators, { kind: "field", name: "blockNode", static: false, private: false, access: { has: function (obj) { return "blockNode" in obj; }, get: function (obj) { return obj.blockNode; }, set: function (obj, value) { obj.blockNode = value; } }, metadata: _metadata }, _blockNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MoonFestival = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MoonFestival = _classThis;
}();
exports.MoonFestival = MoonFestival;
