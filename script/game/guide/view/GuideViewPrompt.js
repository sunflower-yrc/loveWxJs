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
exports.GuideViewPrompt = void 0;
/*
 * @Author: dgflash
 * @Date: 2021-07-03 16:13:17
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-06 10:17:14
 */
var cc_1 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var DataObject_1 = require("../../tools/DataObject");
var GuideData_1 = require("../../common/tableData/GuideData");
var SingletonModuleComp_1 = require("../../common/ecs/SingletonModuleComp");
var LangData_1 = require("../../common/tableData/LangData");
var ViewUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../../common/bundle/BundleConfig");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
/** 新手引导提示逻辑 */
var GuideViewPrompt = function () {
    var _classDecorators = [ccclass('GuideViewPrompt')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var GuideViewPrompt = _classThis = /** @class */ (function (_super) {
        __extends(GuideViewPrompt_1, _super);
        function GuideViewPrompt_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.model = null;
            _this.prompt = null;
            _this.tips = null;
            return _this;
        }
        GuideViewPrompt_1.prototype.start = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // var prefab: Prefab = oops.res.get(this.model.res_prompt, Prefab)!;
                            // this.prompt = instantiate(prefab);
                            _a = this;
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(this.model.res_prompt, BundleConfig_1.default.instance.guideBundle.name)];
                        case 1:
                            // var prefab: Prefab = oops.res.get(this.model.res_prompt, Prefab)!;
                            // this.prompt = instantiate(prefab);
                            _a.prompt = _b.sent();
                            this.prompt.parent = Oops_1.oops.gui.guide;
                            this.tips = this.prompt.getChildByName("tips");
                            this.hide();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /** 显示引导提示动画 */
        GuideViewPrompt_1.prototype.show = function (btn) {
            // 提示位置修正到显示对象中心
            var pos = btn.worldPosition.clone();
            var offset = new cc_1.Vec3();
            var uit = btn.getComponent(cc_1.UITransform);
            offset.x = uit.contentSize.width * 0.5 - uit.contentSize.width * uit.anchorX;
            offset.y = uit.contentSize.height * 0.5 - uit.contentSize.height * uit.anchorY;
            pos = pos.add(offset);
            this.prompt.active = true;
            this.prompt.worldPosition = pos;
            this.prompt.setSiblingIndex(this.prompt.parent.children.length);
            var guideData = new GuideData_1.GuideData(SingletonModuleComp_1.smc.guide.GuideModel.step);
            var promptTips = guideData.getPromptTips();
            var tipsActive = promptTips.length > 1;
            if (tipsActive) {
                var tipsOrientation = parseInt(promptTips[1]);
                this.tips.active = true;
                if (tipsOrientation == DataObject_1.DetaisOrientationType.Left) {
                    //左
                    this.tips.setPosition(new cc_1.Vec3(-uit.contentSize.width * 0.5 - 200, 0, 0));
                }
                else if (tipsOrientation == DataObject_1.DetaisOrientationType.Right) {
                    //左
                    this.tips.setPosition(new cc_1.Vec3(uit.contentSize.width * 0.5 + 200, 0, 0));
                }
                else {
                    //默认 上
                    this.tips.setPosition(new cc_1.Vec3(0, uit.contentSize.height * 0.5 + 80, 0));
                }
                //内容
                var lang = new LangData_1.LangData(parseInt(promptTips[0]));
                ViewUtil_1.ViewUtil.setLabelStringByName("text", this.tips, lang.getDesc());
            }
            else {
                this.tips.active = false;
            }
        };
        GuideViewPrompt_1.prototype.hide = function () {
            this.prompt.active = false;
        };
        return GuideViewPrompt_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GuideViewPrompt");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GuideViewPrompt = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GuideViewPrompt = _classThis;
}();
exports.GuideViewPrompt = GuideViewPrompt;
