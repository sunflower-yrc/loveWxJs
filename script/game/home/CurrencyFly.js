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
exports.CurrencyFly = void 0;
var cc_1 = require("cc");
var RandomManager_1 = require("../../../../extensions/oops-plugin-framework/assets/core/common/random/RandomManager");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var CurrencyFly = function () {
    var _classDecorators = [ccclass('CurrencyFly')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _coinNode_decorators;
    var _coinNode_initializers = [];
    var _posNode_decorators;
    var _posNode_initializers = [];
    var CurrencyFly = _classThis = /** @class */ (function (_super) {
        __extends(CurrencyFly_1, _super);
        function CurrencyFly_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.coinNode = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _coinNode_initializers, void 0));
            _this.posNode = __runInitializers(_this, _posNode_initializers, void 0);
            return _this;
        }
        CurrencyFly_1.prototype.start = function () {
            Oops_1.oops.gui.setPopUpNodeUnBlockEvent();
            this.fly();
        };
        CurrencyFly_1.prototype.fly = function () {
            return __awaiter(this, void 0, void 0, function () {
                var count, _loop_1, this_1, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            count = 0;
                            _loop_1 = function (i) {
                                var coin;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getCoinPrefabPath(), BundleConfig_1.default.instance.guiBundle.name)];
                                        case 1:
                                            coin = _b.sent();
                                            coin.setPosition(new cc_1.Vec3(RandomManager_1.RandomManager.instance.getRandomFloat(-350, 350), 0, 0));
                                            coin.parent = this_1.node;
                                            (0, cc_1.tween)(coin).
                                                // delay(RandomManager.instance.getRandomFloat(0.2, 0.5)).
                                                to(RandomManager_1.RandomManager.instance.getRandomFloat(0.2, 1), { position: this_1.posNode.position }, {
                                                easing: "backIn"
                                            }).
                                                call(function () {
                                                coin.removeFromParent();
                                                count++;
                                                if (count >= 20) {
                                                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.CurrencyFly);
                                                }
                                            }).
                                                start();
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < 20)) return [3 /*break*/, 4];
                            return [5 /*yield**/, _loop_1(i)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return CurrencyFly_1;
    }(_classSuper));
    __setFunctionName(_classThis, "CurrencyFly");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _coinNode_decorators = [property(cc_1.Node)];
        _posNode_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _coinNode_decorators, { kind: "field", name: "coinNode", static: false, private: false, access: { has: function (obj) { return "coinNode" in obj; }, get: function (obj) { return obj.coinNode; }, set: function (obj, value) { obj.coinNode = value; } }, metadata: _metadata }, _coinNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _posNode_decorators, { kind: "field", name: "posNode", static: false, private: false, access: { has: function (obj) { return "posNode" in obj; }, get: function (obj) { return obj.posNode; }, set: function (obj, value) { obj.posNode = value; } }, metadata: _metadata }, _posNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CurrencyFly = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CurrencyFly = _classThis;
}();
exports.CurrencyFly = CurrencyFly;
