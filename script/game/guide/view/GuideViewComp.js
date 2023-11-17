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
exports.GuideViewComp = void 0;
/*
 * @Author: dgflash
 * @Date: 2021-07-03 16:13:17
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-06 10:16:57
 */
var cc_1 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ECS_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS");
var CCComp_1 = require("../../../../../extensions/oops-plugin-framework/assets/module/common/CCComp");
var GameEvent_1 = require("../../common/config/GameEvent");
var SingletonModuleComp_1 = require("../../common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../../common/mgr/GameMgr");
var TriggerData_1 = require("../../common/tableData/TriggerData");
var GuideModelComp_1 = require("../model/GuideModelComp");
var GuideViewMask_1 = require("./GuideViewMask");
var GuideViewPrompt_1 = require("./GuideViewPrompt");
var SdkPlatform_1 = require("../../platform/SdkPlatform");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
/**
 * 新手引导界面管理
 */
var GuideViewComp = function () {
    var _classDecorators = [ccclass('GuideViewComp'), ECS_1.ecs.register('GuideView', false)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = CCComp_1.CCComp;
    var GuideViewComp = _classThis = /** @class */ (function (_super) {
        __extends(GuideViewComp_1, _super);
        function GuideViewComp_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 引导数据 */
            _this.model = null;
            /** 引导遮罩 */
            _this.mask = null;
            /** 引导提示动画 */
            _this.prompt = null;
            return _this;
        }
        GuideViewComp_1.prototype.start = function () {
            this.model = this.ent.get(GuideModelComp_1.GuideModelComp);
            this.prompt = this.node.addComponent(GuideViewPrompt_1.GuideViewPrompt);
            this.prompt.model = this.model;
            this.mask = this.node.addComponent(GuideViewMask_1.GuideViewMask);
            this.mask.model = this.model;
        };
        /** 注册引导项 */
        GuideViewComp_1.prototype.register = function (step, Node) {
            this.model.guides.set(step, Node);
        };
        /** 下一个引导 */
        GuideViewComp_1.prototype.next = function () {
            this.model.step++;
            SdkPlatform_1.SdkPlatform.report_guide(this.model.step);
            Oops_1.oops.log.logView("\u9A8C\u8BC1\u4E0B\u4E00\u4E2A\u5F15\u64CE\u3010".concat(this.model.step, "\u3011"));
            if (this.model.step > this.model.last) {
                //引导结束
                SingletonModuleComp_1.smc.account.AccountModel.isGuideOver = true;
                //回到场景中心
                GameMgr_1.GameMgr.Instance.mapManager.setScreenToCenter(GameMgr_1.GameMgr.Instance.sceneMgr.node, 1.5);
                this.mask.hide();
                this.prompt.hide();
                this.ent.destroy();
                Oops_1.oops.log.logView("\u5168\u90E8\u7ED3\u675F");
                /**获取升级事件 */
                var triggers = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.Guide);
                if (triggers && !GameMgr_1.GameMgr.Instance.firstCheck) {
                    for (var _i = 0, triggers_1 = triggers; _i < triggers_1.length; _i++) {
                        var i = triggers_1[_i];
                        i.checkTrigger(1);
                    }
                }
            }
            else {
                //引导打开界面
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.EmitGuide);
                this.check();
            }
        };
        /** 验证引导 */
        GuideViewComp_1.prototype.check = function () {
            var _this = this;
            // 延时处理是为了避免与cc.Widget组件冲突，引导遮罩出现后，组件位置变了
            this.scheduleOnce(function () {
                var btn = _this.model.guides.get(_this.model.step);
                if (btn == null || !btn.activeInHierarchy) {
                    _this.mask.hide();
                    _this.prompt.hide();
                    Oops_1.oops.log.logView("\u6682\u65E0\u5F15\u5BFC");
                }
                else {
                    _this.mask.resetScale();
                    _this.mask.draw(btn);
                    _this.prompt.show(btn);
                    // 引导节点加触摸事件，跳到下一步
                    btn.on(cc_1.Node.EventType.TOUCH_END, _this.onTouchEnd, _this, true);
                    btn.on(cc_1.Node.EventType.TRANSFORM_CHANGED, _this.onTransformChanged, _this);
                }
            });
        };
        GuideViewComp_1.prototype.onTransformChanged = function () {
            this.refresh();
        };
        GuideViewComp_1.prototype.onTouchEnd = function (event) {
            var btn = event.target;
            btn.off(cc_1.Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
            btn.off(cc_1.Node.EventType.TRANSFORM_CHANGED, this.onTransformChanged, this);
            // 触发按钮组件
            var button = btn.getComponent(cc_1.Button);
            if (button) {
                button.clickEvents.forEach(function (e) {
                    e.emit([event]);
                });
            }
            this.next();
        };
        /** 刷新引导位置 */
        GuideViewComp_1.prototype.refresh = function () {
            var btn = this.model.guides.get(this.model.step);
            if (btn) {
                this.mask.draw(btn);
                this.prompt.show(btn);
            }
        };
        GuideViewComp_1.prototype.reset = function () {
            this.model = null;
            this.mask.destroy();
            this.prompt.destroy();
            this.destroy();
        };
        return GuideViewComp_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GuideViewComp");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GuideViewComp = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GuideViewComp = _classThis;
}();
exports.GuideViewComp = GuideViewComp;
