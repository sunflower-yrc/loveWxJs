"use strict";
/*
 * @Author: dgflash
 * @Date: 2021-11-11 17:45:23
 * @LastEditors: dgflash
 * @LastEditTime: 2022-08-01 13:49:37
 */
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
exports.EcsAccountSystem = exports.Account = void 0;
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ECS_1 = require("../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var AccountNetData_1 = require("./bll/AccountNetData");
var AccountModelComp_1 = require("./model/AccountModelComp");
/**
 * 账号模块
 * 1、连接游戏服务器
 * 2、登录玩家帐号，获取玩家信息
 * 3、断线重连接
 */
var Account = function () {
    var _classDecorators = [ECS_1.ecs.register('Account')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = ECS_1.ecs.Entity;
    var Account = _classThis = /** @class */ (function (_super) {
        __extends(Account_1, _super);
        function Account_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tryLoginTimes = 3;
            return _this;
        }
        Account_1.prototype.init = function () {
            this.addComponents(AccountModelComp_1.AccountModelComp);
        };
        Account_1.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        /** 连接游戏服务器 */
        Account_1.prototype.connect = function () {
            var _this = this;
            if (this.tryLoginTimes > 0) {
                Oops_1.oops.log.logBusiness("account connect!", this.tryLoginTimes + "");
                this.tryLoginTimes--;
                this.getPlayer();
            }
            else {
                //timeout
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Timeout, function () {
                    _this.tryLoginTimes = 3;
                    _this.connect();
                });
            }
        };
        /** 获取玩家信息 */
        Account_1.prototype.getPlayer = function () {
            this.add(AccountNetData_1.AccountNetDataComp);
        };
        return Account_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Account");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Account = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Account = _classThis;
}();
exports.Account = Account;
var EcsAccountSystem = /** @class */ (function (_super) {
    __extends(EcsAccountSystem, _super);
    function EcsAccountSystem() {
        var _this = _super.call(this) || this;
        _this.add(new AccountNetData_1.AccountNetDataSystem());
        return _this;
    }
    return EcsAccountSystem;
}(ECS_1.ecs.System));
exports.EcsAccountSystem = EcsAccountSystem;
