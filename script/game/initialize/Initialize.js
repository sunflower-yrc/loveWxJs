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
exports.EcsInitializeSystem = exports.Initialize = void 0;
/*
 * @Author: dgflash
 * @Date: 2021-11-11 17:45:23
 * @LastEditors: dgflash
 * @LastEditTime: 2022-08-01 13:49:35
 */
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ECS_1 = require("../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS");
var Account_1 = require("../account/Account");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DebugPlatform_1 = require("../platform/DebugPlatform");
var WeixinPlatform_1 = require("../platform/WeixinPlatform");
var InitPlatform_1 = require("./bll/InitPlatform");
var InitRes_1 = require("./bll/InitRes");
var LoadingViewComp_1 = require("./view/LoadingViewComp");
var TTPlatform_1 = require("../platform/TTPlatform");
/**
 * 游戏进入初始化模块
 * 1、热更新
 * 2、加载默认资源
 */
var Initialize = function () {
    var _classDecorators = [ECS_1.ecs.register('Initialize')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = ECS_1.ecs.Entity;
    var Initialize = _classThis = /** @class */ (function (_super) {
        __extends(Initialize_1, _super);
        function Initialize_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 帐号管理 */
            _this.account = null;
            /** 平台 */
            _this.platform = null;
            /** 系统信息 */
            _this.systemInfo = null;
            return _this;
        }
        /** Bundle */
        // resBundle: AssetManager.Bundle = null!;
        // spineBundle: AssetManager.Bundle = null!;
        Initialize_1.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var node;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // 帐号模块为初始化模块的子实体对象
                            this.account = ECS_1.ecs.getEntity(Account_1.Account);
                            this.account.AccountModel.init();
                            this.addChild(this.account);
                            // 初始化游戏公共资源
                            this.add(InitRes_1.InitResComp);
                            // 初始化平台相关
                            if (cc_1.sys.platform === cc_1.sys.Platform.WECHAT_GAME) {
                                this.platform = new WeixinPlatform_1.WeixinPlatform();
                            }
                            else if (cc_1.sys.platform === cc_1.sys.Platform.BYTEDANCE_MINI_GAME) {
                                this.platform = new TTPlatform_1.TTPlatform();
                                console.log("抖音平台");
                            }
                            else {
                                this.platform = new DebugPlatform_1.DebugPlatform();
                            }
                            this.add(InitPlatform_1.InitPlatformComp);
                            return [4 /*yield*/, Oops_1.oops.gui.openAsync(GameUIConfig_1.UIID.Loading)];
                        case 1:
                            node = _a.sent();
                            if (node)
                                this.add(node.getComponent(LoadingViewComp_1.LoadingViewComp));
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Initialize_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Initialize");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Initialize = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Initialize = _classThis;
}();
exports.Initialize = Initialize;
var EcsInitializeSystem = /** @class */ (function (_super) {
    __extends(EcsInitializeSystem, _super);
    function EcsInitializeSystem() {
        var _this = _super.call(this) || this;
        _this.add(new InitRes_1.InitResSystem());
        _this.add(new InitPlatform_1.InitPlatformSystem());
        return _this;
    }
    return EcsInitializeSystem;
}(ECS_1.ecs.System));
exports.EcsInitializeSystem = EcsInitializeSystem;
