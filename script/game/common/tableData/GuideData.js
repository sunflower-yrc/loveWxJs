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
exports.GuideData = void 0;
var cc_1 = require("cc");
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var SingletonModuleComp_1 = require("../ecs/SingletonModuleComp");
var Tableguide_1 = require("../table/Tableguide");
var StringUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var GuideData = function () {
    var _classDecorators = [ccclass('GuideData')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Tableguide_1.Tableguide;
    var GuideData = _classThis = /** @class */ (function (_super) {
        __extends(GuideData_1, _super);
        function GuideData_1(id) {
            var _this = _super.call(this) || this;
            _this.init(id);
            return _this;
        }
        /**
         * 引导提示
         * 引导内容和方向
         * @returns
         */
        GuideData_1.prototype.getPromptTips = function () {
            var result = [];
            if (this.typeValue.toString().indexOf("|") >= 0) {
                //要显示提示信息
                result = StringUtil_1.StringUtil.stringToArray2(this.typeValue);
            }
            return result;
        };
        /**
         * 获取当前的引导步骤
         */
        GuideData_1.getCurrentStep = function () {
            // return
            this.checkGuideOver();
            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver) {
                //引导未结束
                if (SingletonModuleComp_1.smc.account.AccountModel.guideStep < 6) {
                    SingletonModuleComp_1.smc.account.AccountModel.guideStep = 0; //引导第一次开箱
                }
                else if (SingletonModuleComp_1.smc.account.AccountModel.guideStep < 11) {
                    SingletonModuleComp_1.smc.account.AccountModel.guideStep = 6; //引导摆放家具
                }
                else if (SingletonModuleComp_1.smc.account.AccountModel.guideStep < 20) {
                    SingletonModuleComp_1.smc.account.AccountModel.guideStep = 11; //引导小游戏
                }
                else if (SingletonModuleComp_1.smc.account.AccountModel.guideStep < 23) {
                    SingletonModuleComp_1.smc.account.AccountModel.guideStep = 20; //引导领取小游戏宝箱奖励
                }
                else if (SingletonModuleComp_1.smc.account.AccountModel.guideStep < 28) {
                    SingletonModuleComp_1.smc.account.AccountModel.guideStep = 23; //引导第二次开箱
                }
                else if (SingletonModuleComp_1.smc.account.AccountModel.guideStep < 31) {
                    SingletonModuleComp_1.smc.account.AccountModel.guideStep = 28; //任务
                }
            }
        };
        /**
         * 强制引导是否结束
         */
        GuideData_1.checkGuideOver = function () {
            if (this.forceGuideDatas.length == 0) {
                var table = JsonUtil_1.JsonUtil.get(Tableguide_1.Tableguide.TableName);
                for (var key in table) {
                    var element = table[key];
                    if (element.guideType == 1) {
                        //强制引导
                        this.forceGuideDatas.push(element);
                    }
                }
            }
            SingletonModuleComp_1.smc.account.AccountModel.isGuideOver = SingletonModuleComp_1.smc.account.AccountModel.guideStep >= this.forceGuideDatas.length - 1;
        };
        return GuideData_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GuideData");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GuideData = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.forceGuideDatas = [];
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GuideData = _classThis;
}();
exports.GuideData = GuideData;
