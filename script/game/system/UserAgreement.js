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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAgreement = void 0;
var cc_1 = require("cc");
var GameMgr_1 = require("../common/mgr/GameMgr");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var JsonUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableyonghuxieyi_1 = require("../common/table/Tableyonghuxieyi");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var AgreementData_1 = require("../common/tableData/AgreementData");
var List_1 = require("../tools/List");
var cc_2 = require("cc");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var UserAgreement = function () {
    var _classDecorators = [ccclass('UserAgreement')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _list_decorators;
    var _list_initializers = [];
    var UserAgreement = _classThis = /** @class */ (function (_super) {
        __extends(UserAgreement_1, _super);
        function UserAgreement_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.list = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _list_initializers, null));
            return _this;
        }
        UserAgreement_1.prototype.onAdded = function (data) {
            this.data = data;
        };
        UserAgreement_1.prototype.start = function () {
            this.setUI();
        };
        UserAgreement_1.prototype.setUI = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.list) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, JsonUtil_1.JsonUtil.loadAsyncFromBundle(Tableyonghuxieyi_1.Tableyonghuxieyi.TableName, BundleConfig_1.default.instance.configBundle.name)];
                        case 1:
                            _a.sent();
                            this.listData = new AgreementData_1.AgreementData(1).getAllData();
                            this.list.numItems = this.listData.length;
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * render回调
        */
        UserAgreement_1.prototype.renderEventCallback = function (item, idx) {
            var label = item.getComponent(cc_2.Label);
            label.string = this.listData[idx].content;
            label.horizontalAlign = this.listData[idx].align;
            label.isBold = this.listData[idx].bold == 1;
        };
        UserAgreement_1.prototype.update = function (deltaTime) {
        };
        UserAgreement_1.prototype.passUser = function () {
            if (GameMgr_1.GameMgr.Instance.isLoadEnd) {
                this.data.callFun.call(this.data.target);
            }
            else {
                GameMgr_1.GameMgr.Instance.isPassUser = true;
            }
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.UserAgreement);
        };
        UserAgreement_1.prototype.rejectBtn = function () {
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.UserAgreement);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.UserAgreementTip, this.data);
        };
        UserAgreement_1.prototype.exit = function () {
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.UserAgreementTip);
            SingletonModuleComp_1.smc.initialize.platform.exitMiniProgram();
        };
        UserAgreement_1.prototype.passUserTip = function () {
            if (GameMgr_1.GameMgr.Instance.isLoadEnd) {
                this.data.callFun.call(this.data.target);
            }
            else {
                GameMgr_1.GameMgr.Instance.isPassUser = true;
            }
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.UserAgreementTip);
        };
        UserAgreement_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.UserAgreementTip);
        };
        return UserAgreement_1;
    }(_classSuper));
    __setFunctionName(_classThis, "UserAgreement");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _list_decorators = [property(List_1.default)];
        __esDecorate(null, null, _list_decorators, { kind: "field", name: "list", static: false, private: false, access: { has: function (obj) { return "list" in obj; }, get: function (obj) { return obj.list; }, set: function (obj, value) { obj.list = value; } }, metadata: _metadata }, _list_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserAgreement = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserAgreement = _classThis;
}();
exports.UserAgreement = UserAgreement;
