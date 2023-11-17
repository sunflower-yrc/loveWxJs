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
exports.GuideModelComp = void 0;
var ECS_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS");
var GuideViewItem_1 = require("../view/GuideViewItem");
/** 引导数据 */
var GuideModelComp = function () {
    var _classDecorators = [ECS_1.ecs.register('GuideModel')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = ECS_1.ecs.Comp;
    var GuideModelComp = _classThis = /** @class */ (function (_super) {
        __extends(GuideModelComp_1, _super);
        function GuideModelComp_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 当前引导步骤 */
            _this.step = 1;
            /** 最后一步索引 */
            _this.last = Number.MAX_VALUE;
            /** 引导的节点 */
            _this.guides = new Map();
            // /** 资源文件夹 */
            // res_dir = "gui/guide";
            // /** 遮罩预制资源 */
            // res_mask = "gui/guide/mask";
            // /** 提示预制资源 */
            // res_prompt = "gui/guide/prompt";
            /** 遮罩预制资源 */
            _this.res_mask = "mask";
            /** 提示预制资源 */
            _this.res_prompt = "prompt";
            return _this;
        }
        Object.defineProperty(GuideModelComp_1.prototype, "current", {
            /** 当前准备引导的节点 */
            get: function () {
                return this.guides.get(this.step);
            },
            enumerable: false,
            configurable: true
        });
        GuideModelComp_1.prototype.reset = function () {
            this.step = 1;
            this.last = Number.MAX_VALUE;
            this.guides.forEach(function (node) {
                if (node.isValid)
                    node.getComponent(GuideViewItem_1.GuideViewItem).destroy();
            });
            this.guides.clear();
        };
        return GuideModelComp_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GuideModelComp");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GuideModelComp = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GuideModelComp = _classThis;
}();
exports.GuideModelComp = GuideModelComp;
